package org.babyfish.jimmer.sql.cache;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.common.CacheImpl;
import org.babyfish.jimmer.sql.common.ParameterizedCaches;
import org.babyfish.jimmer.sql.event.EntityEvent;
import org.babyfish.jimmer.sql.filter.CacheableFilter;
import org.babyfish.jimmer.sql.filter.FilterArgs;
import org.babyfish.jimmer.sql.model.inheritance.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.NavigableMap;
import java.util.TreeMap;

public class ParameterizedCacheTest extends AbstractQueryTest {

    private static final UndeletedFilter UNDELETED_FILTER = new UndeletedFilter();

    private static final DeletedFilter DELETED_FILTER = new DeletedFilter();

    private JSqlClient sqlClient;

    private JSqlClient sqlClientForDeletedData;

    @BeforeEach
    public void initialize() {
        sqlClient = getSqlClient(it -> {
            it.addFilter(UNDELETED_FILTER);
            it.addDisabledFilter(DELETED_FILTER);
            it.setCaches(cfg -> {
                cfg.setCacheFactory(
                        new Class[] {
                                Administrator.class,
                                Role.class,
                                Permission.class
                        },
                        new CacheFactory() {
                            @Override
                            public @Nullable Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {
                                return new CacheImpl<>(type);
                            }

                            @Override
                            public @Nullable Cache<?, ?> createAssociatedIdCache(@NotNull ImmutableProp prop) {
                                return ParameterizedCaches.create();
                            }

                            @Override
                            public @Nullable Cache<?, List<?>> createAssociatedIdListCache(@NotNull ImmutableProp prop) {
                                return ParameterizedCaches.create();
                            }
                        }
                );
            });
        });
        sqlClientForDeletedData = sqlClient
                .filters(it -> {
                    it.disableByTypes(UndeletedFilter.class);
                    it.enable(DELETED_FILTER);
                });
    }

    @Test
    public void testRoleWithPermissions() {
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            executeAndExpect(
                    sqlClient.createQuery(RoleTable.class, (q, role) -> {
                        return q.select(
                                role.fetch(
                                        RoleFetcher.$
                                                .allScalarFields()
                                                .permissions(
                                                        PermissionFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ROLE as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(false);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "where tb_1_.ROLE_ID = ? " +
                                            "and tb_1_.DELETED = ?"
                            ).variables(1L, false);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(1L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"r_1\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"permissions\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"p_1\"," +
                                        "--->--->--->--->\"deleted\":false," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":1" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":1" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
            executeAndExpect(
                    sqlClientForDeletedData.createQuery(RoleTable.class, (q, role) -> {
                        return q.select(
                                role.fetch(
                                        RoleFetcher.$
                                                .allScalarFields()
                                                .permissions(
                                                        PermissionFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ROLE as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(true);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "where tb_1_.ROLE_ID = ? " +
                                            "and tb_1_.DELETED = ?"
                            ).variables(2L, true);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(4L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"r_2\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"permissions\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"p_4\"," +
                                        "--->--->--->--->\"deleted\":true," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":4" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":2" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
        }
    }

    @Test
    public void testPermissionWithRole() {
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            executeAndExpect(
                    sqlClient.createQuery(PermissionTable.class, (q, permission) -> {
                        return q.select(
                                permission.fetch(
                                        PermissionFetcher.$
                                                .allScalarFields()
                                                .role(
                                                        RoleFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID " +
                                        "from PERMISSION as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(false);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ID, tb_1_.ROLE_ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "inner join ROLE as tb_2_ on tb_1_.ROLE_ID = tb_2_.ID " +
                                            "where tb_1_.ID in (?, ?) " +
                                            "and tb_1_.ROLE_ID is not null " +
                                            "and tb_2_.DELETED = ?"
                            ).variables(1L, 3L, false);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ROLE as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(1L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"p_1\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"role\":{" +
                                        "--->--->--->\"name\":\"r_1\"," +
                                        "--->--->--->\"deleted\":false," +
                                        "--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->\"id\":1" +
                                        "--->--->}," +
                                        "--->--->\"id\":1" +
                                        "--->},{" +
                                        "--->--->\"name\":\"p_3\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"role\":null," +
                                        "--->--->\"id\":3" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
            executeAndExpect(
                    sqlClientForDeletedData.createQuery(PermissionTable.class, (q, permission) -> {
                        return q.select(
                                permission.fetch(
                                        PermissionFetcher.$
                                                .allScalarFields()
                                                .role(
                                                        RoleFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID " +
                                        "from PERMISSION as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(true);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ID, tb_1_.ROLE_ID " +
                                            "from PERMISSION as tb_1_ " +
                                            "inner join ROLE as tb_2_ on tb_1_.ROLE_ID = tb_2_.ID " +
                                            "where tb_1_.ID in (?, ?) " +
                                            "and tb_1_.ROLE_ID is not null " +
                                            "and tb_2_.DELETED = ?"
                            ).variables(2L, 4L, true);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ROLE as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(2L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"p_2\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"role\":null," +
                                        "--->--->\"id\":2" +
                                        "--->},{" +
                                        "--->--->\"name\":\"p_4\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"role\":{" +
                                        "--->--->--->\"name\":\"r_2\"," +
                                        "--->--->--->\"deleted\":true," +
                                        "--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->\"id\":2" +
                                        "--->--->}," +
                                        "--->--->\"id\":4" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
        }
    }

    @Test
    public void testAdministratorWithRoles() {
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            executeAndExpect(
                    sqlClient.createQuery(AdministratorTable.class, (q, administrator) -> {
                        return q.select(
                                administrator.fetch(
                                        AdministratorFetcher.$
                                                .allScalarFields()
                                                .roles(
                                                        RoleFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ADMINISTRATOR as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(false);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ADMINISTRATOR_ID, tb_1_.ROLE_ID " +
                                            "from ADMINISTRATOR_ROLE_MAPPING as tb_1_ " +
                                            "inner join ROLE as tb_3_ on tb_1_.ROLE_ID = tb_3_.ID " +
                                            "where tb_1_.ADMINISTRATOR_ID in (?, ?) and tb_3_.DELETED = ?"
                            ).variables(1L, 3L, false);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ROLE as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(1L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"a_1\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"roles\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"r_1\"," +
                                        "--->--->--->--->\"deleted\":false," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":1" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":1" +
                                        "--->},{" +
                                        "--->--->\"name\":\"a_3\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"roles\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"r_1\"," +
                                        "--->--->--->--->\"deleted\":false," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":1" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":3" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
            executeAndExpect(
                    sqlClientForDeletedData.createQuery(AdministratorTable.class, (q, administrator) -> {
                        return q.select(
                                administrator.fetch(
                                        AdministratorFetcher.$
                                                .allScalarFields()
                                                .roles(
                                                        RoleFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ADMINISTRATOR as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(true);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ADMINISTRATOR_ID, tb_1_.ROLE_ID " +
                                            "from ADMINISTRATOR_ROLE_MAPPING as tb_1_ " +
                                            "inner join ROLE as tb_3_ on tb_1_.ROLE_ID = tb_3_.ID " +
                                            "where tb_1_.ADMINISTRATOR_ID in (?, ?) and tb_3_.DELETED = ?"
                            ).variables(2L, 4L, true);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ROLE as tb_1_ " +
                                            "where tb_1_.ID = ?"
                            ).variables(2L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"a_2\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"roles\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"r_2\"," +
                                        "--->--->--->--->\"deleted\":true," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":2" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":2" +
                                        "--->},{" +
                                        "--->--->\"name\":\"a_4\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"roles\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"r_2\"," +
                                        "--->--->--->--->\"deleted\":true," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":2" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":4" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
        }
    }

    @Test
    public void testRoleAndAdministrators() {
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            executeAndExpect(
                    sqlClient.createQuery(RoleTable.class, (q, role) -> {
                        return q.select(
                                role.fetch(
                                        RoleFetcher.$
                                                .allScalarFields()
                                                .administrators(
                                                        AdministratorFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ROLE as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(false);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ADMINISTRATOR_ID " +
                                            "from ADMINISTRATOR_ROLE_MAPPING as tb_1_ " +
                                            "inner join ADMINISTRATOR as tb_3_ on tb_1_.ADMINISTRATOR_ID = tb_3_.ID " +
                                            "where tb_1_.ROLE_ID = ? and tb_3_.DELETED = ?"
                            ).variables(1L, false);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ADMINISTRATOR as tb_1_ " +
                                            "where tb_1_.ID in (?, ?)"
                            ).variables(1L, 3L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"r_1\"," +
                                        "--->--->\"deleted\":false," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"administrators\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"a_1\"," +
                                        "--->--->--->--->\"deleted\":false," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":1" +
                                        "--->--->--->},{" +
                                        "--->--->--->--->\"name\":\"a_3\"," +
                                        "--->--->--->--->\"deleted\":false," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":3" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":1" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
            executeAndExpect(
                    sqlClientForDeletedData.createQuery(RoleTable.class, (q, role) -> {
                        return q.select(
                                role.fetch(
                                        RoleFetcher.$
                                                .allScalarFields()
                                                .administrators(
                                                        AdministratorFetcher.$
                                                                .allScalarFields()
                                                )
                                )
                        );
                    }),
                    ctx -> {
                        ctx.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                        "from ROLE as tb_1_ " +
                                        "where tb_1_.DELETED = ?"
                        ).variables(true);
                        if (useSql) {
                            ctx.statement(1).sql(
                                    "select tb_1_.ADMINISTRATOR_ID " +
                                            "from ADMINISTRATOR_ROLE_MAPPING as tb_1_ " +
                                            "inner join ADMINISTRATOR as tb_3_ on tb_1_.ADMINISTRATOR_ID = tb_3_.ID " +
                                            "where tb_1_.ROLE_ID = ? and tb_3_.DELETED = ?"
                            ).variables(2L, true);
                            ctx.statement(2).sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME " +
                                            "from ADMINISTRATOR as tb_1_ " +
                                            "where tb_1_.ID in (?, ?)"
                            ).variables(2L, 4L);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"name\":\"r_2\"," +
                                        "--->--->\"deleted\":true," +
                                        "--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->\"administrators\":[" +
                                        "--->--->--->{" +
                                        "--->--->--->--->\"name\":\"a_2\"," +
                                        "--->--->--->--->\"deleted\":true," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":2" +
                                        "--->--->--->},{" +
                                        "--->--->--->--->\"name\":\"a_4\"," +
                                        "--->--->--->--->\"deleted\":true," +
                                        "--->--->--->--->\"createdTime\":\"2022-10-03 00:00:00\"," +
                                        "--->--->--->--->\"modifiedTime\":\"2022-10-03 00:10:00\"," +
                                        "--->--->--->--->\"id\":4" +
                                        "--->--->--->}" +
                                        "--->--->]," +
                                        "--->--->\"id\":2" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
        }
    }

    private static class UndeletedFilter implements CacheableFilter<NamedEntityProps> {

        @Override
        public void filter(FilterArgs<NamedEntityProps> args) {
            args.where(args.getTable().deleted().eq(false));
        }

        @Override
        public NavigableMap<String, Object> getParameters() {
            NavigableMap<String, Object> map = new TreeMap<>();
            map.put("deleted", false);
            return map;
        }

        @Override
        public boolean isAffectedBy(EntityEvent<?> e) {
            return NamedEntity.class.isAssignableFrom(e.getImmutableType().getJavaClass()) &&
                    e.getUnchangedFieldRef(NamedEntityProps.DELETED) == null;
        }
    }

    private static class DeletedFilter implements CacheableFilter<NamedEntityProps> {

        @Override
        public void filter(FilterArgs<NamedEntityProps> args) {
            args.where(args.getTable().deleted().eq(true));
        }

        @Override
        public NavigableMap<String, Object> getParameters() {
            NavigableMap<String, Object> map = new TreeMap<>();
            map.put("deleted", true);
            return map;
        }

        @Override
        public boolean isAffectedBy(EntityEvent<?> e) {
            return NamedEntity.class.isAssignableFrom(e.getImmutableType().getJavaClass()) &&
                    e.getUnchangedFieldRef(NamedEntityProps.DELETED) == null;
        }
    }
}
