package org.babyfish.jimmer.sql.ast.impl.table;

import org.babyfish.jimmer.View;
import org.babyfish.jimmer.meta.*;
import org.babyfish.jimmer.sql.ImmutableProps;
import org.babyfish.jimmer.sql.JoinType;
import org.babyfish.jimmer.sql.association.meta.AssociationProp;
import org.babyfish.jimmer.sql.association.meta.AssociationType;
import org.babyfish.jimmer.sql.ast.*;
import org.babyfish.jimmer.sql.ast.impl.*;
import org.babyfish.jimmer.sql.ast.impl.util.AbstractDataManager;
import org.babyfish.jimmer.sql.ast.query.Example;
import org.babyfish.jimmer.sql.ast.table.TableEx;
import org.babyfish.jimmer.sql.ast.table.WeakJoin;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.babyfish.jimmer.sql.fetcher.ViewMetadata;
import org.babyfish.jimmer.sql.filter.Filter;
import org.babyfish.jimmer.sql.filter.impl.LogicalDeletedFilterProvider;
import org.babyfish.jimmer.sql.meta.*;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.runtime.ExecutionException;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.babyfish.jimmer.sql.runtime.TableUsedState;
import org.jetbrains.annotations.NotNull;

import java.util.function.Function;

class TableImpl<E> extends AbstractDataManager<String, TableImplementor<?>> implements TableImplementor<E> {

    private final AbstractMutableStatementImpl statement;

    private final ImmutableType immutableType;

    private final TableImpl<?> parent;

    private final boolean isInverse;

    private final ImmutableProp joinProp;

    private final WeakJoinHandle weakJoinHandle;

    private JoinType joinType;

    private JoinType currentJoinType;

    private final String alias;

    private final String middleTableAlias;

    public TableImpl(
            AbstractMutableStatementImpl statement,
            ImmutableType immutableType,
            TableImpl<?> parent,
            boolean isInverse,
            ImmutableProp joinProp,
            WeakJoinHandle weakJoinHandle,
            JoinType joinType
    ) {
        if (parent != null && immutableType instanceof AssociationType) {
            throw new AssertionError("Internal bug: Bad constructor arguments for TableImpl");
        }
        if ((parent == null) != (joinProp == null && weakJoinHandle == null)) {
            throw new AssertionError("Internal bug: Bad constructor arguments for TableImpl");
        }
        if (parent != null && (joinProp == null) == (weakJoinHandle == null)) {
            throw new AssertionError("Internal bug: Bad constructor arguments for TableImpl");
        }
        if (weakJoinHandle != null && isInverse) {
            throw new AssertionError("Internal bug: Bad constructor arguments for TableImpl");
        }

        this.statement = statement;
        this.immutableType = immutableType;
        this.parent = parent;
        this.isInverse = isInverse;
        this.joinProp = joinProp;
        this.weakJoinHandle = weakJoinHandle;
        this.joinType = joinType;
        this.currentJoinType = joinType;

        if (joinProp != null) {
            if (joinProp.isMiddleTableDefinition()) {
                middleTableAlias = statement.getContext().allocateTableAlias();
            } else if (joinProp.getSqlTemplate() == null && !joinProp.hasStorage()) {
                throw new AssertionError("Internal bug: Join property has not storage");
            } else {
                middleTableAlias = null;
            }
        } else {
            middleTableAlias = null;
        }
        alias = statement.getContext().allocateTableAlias();
    }

    @Override
    public ImmutableType getImmutableType() {
        return immutableType;
    }

    @Override
    public AbstractMutableStatementImpl getStatement() {
        return statement;
    }

    @Override
    public TableImplementor<?> getParent() {
        return parent;
    }

    @Override
    public boolean isInverse() {
        return isInverse;
    }

    @Override
    public boolean isRemote() {
        return joinProp != null && joinProp.isRemote();
    }

    @Override
    public boolean isRawIdAllowed(JSqlClientImplementor sqlClient) {
        ImmutableProp prop = joinProp;
        if (prop == null) {
            return false;
        }
        if (isInverse) {
            prop = prop.getOpposite();
            if (prop == null) {
                return false;
            }
        }
        if (prop.isRemote()) {
            return true;
        }
        if (!prop.isTargetForeignKeyReal(sqlClient.getMetadataStrategy())) {
            return false;
        }
        Filter<?> filter = sqlClient.getFilters().getFilter(prop.getTargetType());
        return filter == null || filter instanceof LogicalDeletedFilterProvider.IgnoredFilter;
    }

    @Override
    public ImmutableProp getJoinProp() {
        return joinProp;
    }

    @Override
    public WeakJoinHandle getWeakJoinHandle() {
        return weakJoinHandle;
    }

    @Override
    public JoinType getJoinType() {
        return joinType;
    }

    @Override
    public JoinType getCurrentJoinType() {
        return currentJoinType;
    }

    @Override
    public String getAlias() {
        return alias;
    }

    @Override
    public Predicate eq(Table<E> other) {
        if (other.getImmutableType() != immutableType) {
            throw new IllegalArgumentException("Cannot compare tables of different types");
        }
        ImmutableProp idProp = immutableType.getIdProp();
        return this.get(idProp).eq(other.get(idProp));
    }

    @Override
    public Predicate eq(Example<E> example) {
        return ((ExampleImpl<E>)example).toPredicate(this);
    }

    @Override
    public Predicate eq(E example) {
        return eq(Example.of(example));
    }

    @Override
    public Predicate eq(View<E> view) {
        return eq(Example.of(view));
    }

    @Override
    public Predicate isNull() {
        String idPropName = immutableType.getIdProp().getName();
        return this.get(idPropName).isNull();
    }

    @Override
    public Predicate isNotNull() {
        String idPropName = immutableType.getIdProp().getName();
        return this.get(idPropName).isNotNull();
    }

    @Override
    public NumericExpression<Long> count() {
        return count(false);
    }

    @Override
    public NumericExpression<Long> count(boolean distinct) {
        if (immutableType instanceof AssociationType) {
            return this.get(((AssociationType)immutableType).getSourceProp().getName()).count();
        }
        return this.get(immutableType.getIdProp().getName()).count(distinct);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <X> PropExpression<X> get(String prop) {
        return get(immutableType.getProp(prop));
    }

    @Override
    public <X> PropExpression<X> get(ImmutableProp prop) {
        return get(prop, false);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <X> PropExpression<X> get(ImmutableProp prop, boolean rawId) {
        if (isRemote() && immutableType.getIdProp() != prop) {
            throw new IllegalArgumentException(
                    "The current table is remote so that only the id property \"" +
                            immutableType.getIdProp() +
                            "\" can be accessed"
            );
        }
        if (prop.getDeclaringType() != immutableType) {
            if (!prop.getDeclaringType().isAssignableFrom(immutableType)) {
                throw new IllegalArgumentException(
                        "The property \"" +
                                prop +
                                "\" does not belong to the current type \"" +
                                immutableType +
                                "\""
                );
            }
            prop = immutableType.getProp(prop.getName());
        }
        ImmutableProp idViewBaseProp = prop.getIdViewBaseProp();
        if (idViewBaseProp != null && idViewBaseProp.isReference(TargetLevel.ENTITY)) {
            return joinImplementor(idViewBaseProp.getName(), idViewBaseProp.isNullable() ? JoinType.LEFT : JoinType.INNER)
                    .get(idViewBaseProp.getTargetType().getIdProp(), true);
        }
        return (PropExpression<X>) PropExpressionImpl.of(this, prop, rawId);
    }

    @Override
    public <X> PropExpression<X> getId() {
        return get(immutableType.getIdProp());
    }

    @Override
    public <X> PropExpression<X> getAssociatedId(String prop) {
        ImmutableProp immutableProp = immutableType.getProp(prop);
        return getAssociatedId(immutableProp);
    }

    @Override
    public <X> PropExpression<X> getAssociatedId(ImmutableProp prop) {
        TableImplementor<?> joinedTable = joinImplementor(prop, prop.isNullable() ? JoinType.LEFT : JoinType.INNER);
        return joinedTable.get(joinedTable.getImmutableType().getIdProp(), true);
    }

    @Override
    public <XT extends Table<?>> XT join(ImmutableProp prop) {
        return TableProxies.wrap(joinImplementor(prop));
    }

    @Override
    public <XT extends Table<?>> XT join(String prop) {
        return TableProxies.wrap(joinImplementor(prop));
    }

    @Override
    public <XT extends Table<?>> XT join(ImmutableProp prop, JoinType joinType) {
        return TableProxies.wrap(joinImplementor(prop, joinType));
    }

    @Override
    public <XT extends Table<?>> XT join(String prop, JoinType joinType) {
        return TableProxies.wrap(joinImplementor(prop, joinType));
    }

    @Override
    public <XT extends Table<?>> XT join(ImmutableProp prop, JoinType joinType, ImmutableType treatedAs) {
        return TableProxies.wrap(joinImplementor(prop, joinType, treatedAs));
    }

    @Override
    public <XT extends Table<?>> XT join(String prop, JoinType joinType, ImmutableType treatedAs) {
        return TableProxies.wrap(joinImplementor(prop, joinType, treatedAs));
    }

    @Override
    public <X> PropExpression<X> inverseGetAssociatedId(ImmutableProp prop) {
        ImmutableProp oppositeProp = prop.getOpposite();
        TableImplementor<?> joinedTable = inverseJoinImplementor(
                prop,
                oppositeProp != null && oppositeProp.isNullable() ? JoinType.LEFT : JoinType.INNER
        );
        return joinedTable.get(joinedTable.getImmutableType().getIdProp(), true);
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(ImmutableProp prop) {
        return TableProxies.wrap(inverseJoinImplementor(prop));
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(ImmutableProp prop, JoinType joinType) {
        return TableProxies.wrap(inverseJoinImplementor(prop, joinType));
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(TypedProp.Association<?, ?> prop) {
        return TableProxies.wrap(inverseJoinImplementor(prop));
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(TypedProp.Association<?, ?> prop, JoinType joinType) {
        return TableProxies.wrap(inverseJoinImplementor(prop, joinType));
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(
            Class<XT> targetTableType,
            Function<XT, ? extends Table<?>> backPropBlock
    ) {
        return inverseJoin(ImmutableProps.join(targetTableType, backPropBlock));
    }

    @Override
    public <XT extends Table<?>> XT inverseJoin(
            Class<XT> targetTableType,
            Function<XT, ? extends Table<?>> backPropBlock,
            JoinType joinType
    ) {
        return inverseJoin(ImmutableProps.join(targetTableType, backPropBlock), joinType);
    }

    @Override
    public <X> TableImplementor<X> joinImplementor(String prop) {
        return joinImplementor(immutableType.getProp(prop), JoinType.INNER, null);
    }

    @Override
    public <X> TableImplementor<X> joinImplementor(ImmutableProp prop) {
        return joinImplementor(prop, JoinType.INNER, null);
    }

    @Override
    public <X> TableImplementor<X> joinImplementor(String prop, JoinType joinType) {
        return joinImplementor(immutableType.getProp(prop), joinType, null);
    }

    @Override
    public <X> TableImplementor<X> joinImplementor(ImmutableProp prop, JoinType joinType) {
        return joinImplementor(prop, joinType, null);
    }

    @Override
    public <X> TableImplementor<X> joinImplementor(String prop, JoinType joinType, ImmutableType treatedAs) {
        return joinImplementor(immutableType.getProp(prop), joinType, treatedAs);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <X> TableImplementor<X> joinImplementor(ImmutableProp prop, JoinType joinType, ImmutableType treatedAs) {
        if (prop.getDeclaringType() != immutableType) {
            if (!prop.getDeclaringType().isAssignableFrom(immutableType)) {
                throw new IllegalArgumentException(
                        "The property \"" +
                                prop +
                                "\" does not belong to the current type \"" +
                                immutableType +
                                "\""
                );
            }
            prop = immutableType.getProp(prop.getName());
        }
        ImmutableProp manyToManyViewProp = prop.getManyToManyViewBaseProp();
        if (manyToManyViewProp != null) {
            return (TableImplementor<X>) ((TableImpl<?>)join0(false, manyToManyViewProp, joinType))
                    .join0(false, prop.getManyToManyViewBaseDeeperProp(), joinType);
        }
        if (!prop.isAssociation(TargetLevel.ENTITY)) {
            if (isRemote()) {
                throw new IllegalStateException(
                        "The current table is remote so that join is not supported"
                );
            }
            if (prop.isTransient()) {
                throw new IllegalArgumentException(
                        "\"" + prop + "\" cannot be transient"
                );
            }
            if (prop.isRemote() && prop.getMappedBy() != null) {
                throw new IllegalArgumentException(
                        "\"" + prop + "\" cannot be remote and reversed(with `mappedBy`)"
                );
            }
            throw new IllegalArgumentException(
                    "\"" +
                            prop +
                            "\" is not association property of \"" +
                            this.immutableType +
                            "\""
            );
        }
        return (TableImplementor<X>) join0(false, prop, joinType);
    }

    @Override
    public <X> TableImplementor<X>  inverseJoinImplementor(ImmutableProp prop) {
        return inverseJoinImplementor(prop, JoinType.INNER);
    }

    @Override
    public <X> TableImplementor<X>  inverseJoinImplementor(TypedProp.Association<?, ?> prop) {
        return inverseJoinImplementor(prop.unwrap(), JoinType.INNER);
    }

    @Override
    public <X> TableImplementor<X>  inverseJoinImplementor(TypedProp.Association<?, ?> prop, JoinType joinType) {
        return inverseJoinImplementor(prop.unwrap(), joinType);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <X> TableImplementor<X>  inverseJoinImplementor(ImmutableProp backProp, JoinType joinType) {
        if (backProp.getTargetType() != immutableType) {
            throw new IllegalArgumentException("'" + backProp + "' is not back association property");
        }
        if (!backProp.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("'" + backProp + "' is not declared in entity");
        }
        return (TableImplementor<X>) join0(true, backProp, joinType);
    }

    private TableImplementor<?> join0(
            boolean isInverse,
            ImmutableProp prop,
            JoinType joinType
    ) {
        if (prop.isTransient()) {
            throw new ExecutionException(
                    "Cannot join to '" +
                            prop.getName() +
                            "' because it's transient association"
            );
        }
        if (isInverse && prop instanceof AssociationProp) {
            throw new ExecutionException(
                    "Cannot join to '" + prop + "' by inverse mode because it's property of association entity"
            );
        }

        // TODO:
        // statement.validateMutable();

        String joinName;
        if (!isInverse) {
            joinName = prop.getName();
        } else if (prop.getOpposite() != null) {
            joinName = prop.getOpposite().getName();
        } else {
            joinName = "inverse(" + prop + ")";
        }

        if (prop.getMappedBy() != null) {
            return join1(
                    joinName,
                    !isInverse,
                    prop.getMappedBy(),
                    joinType
            );
        }
        return join1(joinName, isInverse, prop, joinType);
    }

    private TableImplementor<?> join1(
            String joinName,
            boolean isInverse,
            ImmutableProp prop,
            JoinType joinType
    ) {
        TableImpl<?> existing = (TableImpl<?>) getValue(joinName);
        if (existing != null) {
            if (existing.joinType != joinType) {
                existing.joinType = JoinType.INNER;
            }
            existing.currentJoinType = joinType;
            return existing;
        }
        TableImpl<?> newTable = new TableImpl<>(
                statement,
                isInverse ? prop.getDeclaringType() : prop.getTargetType(),
                this,
                isInverse,
                prop,
                null,
                joinType
        );
        putValue(joinName, newTable);
        return newTable;
    }

    @Override
    public <X> TableImplementor<X> weakJoinImplementor(Class<? extends WeakJoin<?, ?>> weakJoinType, JoinType joinType) {
        return weakJoinImplementor(WeakJoinHandle.of(weakJoinType), joinType);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <X> TableImplementor<X> weakJoinImplementor(WeakJoinHandle handle, JoinType joinType) {
        String joinName = "weak(" + handle.getWeakJoinType().getName() + ")";
        TableImpl<X> existing = (TableImpl<X>) getValue(joinName);
        if (existing != null) {
            if (existing.joinType != joinType) {
                existing.joinType = JoinType.INNER;
            }
            existing.currentJoinType = joinType;
            return existing;
        };
        TableImpl<X> newTable = new TableImpl<>(
                statement,
                handle.getTargetType(),
                this,
                isInverse,
                null,
                handle,
                joinType
        );
        putValue(joinName, newTable);
        return newTable;
    }

    @Override
    public Selection<E> fetch(Fetcher<E> fetcher) {
        if (fetcher == null) {
            return this;
        }
        if (immutableType != fetcher.getImmutableType()) {
            throw new IllegalArgumentException(
                    "Illegal fetcher type, the entity type of current table is \"" +
                            this +
                            "\" but the fetcher type is \"" +
                            fetcher.getImmutableType() +
                            "\""
            );
        }
        return new FetcherSelectionImpl<>(this, fetcher);
    }

    @Override
    public <V extends View<E>> Selection<V> fetch(Class<V> viewType) {
        if (viewType == null) {
            throw new IllegalArgumentException("The argument `staticType` cannot be null");
        }
        ViewMetadata<E, V> metadata = ViewMetadata.of(viewType);
        Fetcher<E> fetcher = metadata.getFetcher();
        if (immutableType != fetcher.getImmutableType()) {
            throw new IllegalArgumentException(
                    "Illegal fetcher type, the entity type of current table is \"" +
                            this +
                            "\" but the static type is based on \"" +
                            fetcher.getImmutableType() +
                            "\""
            );
        }
        return new FetcherSelectionImpl<>(this, fetcher, metadata.getConverter());
    }

    @Override
    public TableEx<E> asTableEx() {
        return TableProxies.wrap(this);
    }

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        visitor.visitTableReference(this, null, false);
    }

    @Override
    public void renderJoinAsFrom(SqlBuilder builder, RenderMode mode) {
        if (parent == null) {
            throw new IllegalStateException("Internal bug: renderJoinAsFrom can only be called base on joined tables");
        }
        if (mode == RenderMode.NORMAL) {
            throw new IllegalStateException("Internal bug: renderJoinAsFrom does not accept render mode ALL");
        }
        TableUsedState usedState = builder.getAstContext().getTableUsedState(this);
        if (usedState != TableUsedState.NONE) {
            renderSelf(builder, mode);
            if (mode == RenderMode.DEEPER_JOIN_ONLY) {
                for (TableImplementor<?> childTable : this) {
                    childTable.renderTo(builder);
                }
            }
        }
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        TableUsedState usedState = builder.getAstContext().getTableUsedState(this);
        if (parent == null || usedState != TableUsedState.NONE) {
            renderSelf(builder, RenderMode.NORMAL);
            for (TableImplementor<?> childTable : this) {
                childTable.renderTo(builder);
            }
        }
    }

    private void renderSelf(SqlBuilder sqlBuilder, RenderMode mode) {
        if (isInverse) {
            renderInverseJoin(sqlBuilder, mode);
        } else if (joinProp != null || weakJoinHandle != null) {
            renderJoin(sqlBuilder, mode);
        } else {
            sqlBuilder
                    .from()
                    .sql(immutableType.getTableName(sqlBuilder.getAstContext().getSqlClient().getMetadataStrategy()))
                    .sql(" ")
                    .sql(alias);
        }
    }

    @SuppressWarnings("unchecked")
    private void renderJoin(SqlBuilder builder, RenderMode mode) {

        MetadataStrategy strategy = builder.getAstContext().getSqlClient().getMetadataStrategy();

        if (weakJoinHandle != null) {
            if (builder.getAstContext().getTableUsedState(this) != TableUsedState.NONE) {
                Predicate predicate = weakJoinHandle.createPredicate(parent, this);
                builder
                        .join(joinType)
                        .sql(immutableType.getTableName(strategy))
                        .sql(" ")
                        .sql(alias)
                        .on();
                if (predicate == null) {
                    builder.sql("1 = 1");
                } else {
                    ((Ast)predicate).renderTo(builder);
                }
            }
            return;
        }

        if (joinProp.getSqlTemplate() instanceof JoinTemplate) {
            renderJoinBySql(builder, (JoinTemplate) joinProp.getSqlTemplate(), mode);
            return;
        }

        if (joinProp instanceof AssociationProp) {
            if (builder.getAstContext().getTableUsedState(this) == TableUsedState.USED) {
                renderJoinImpl(
                        builder,
                        joinType,
                        parent.alias,
                        joinProp.getStorage(strategy),
                        immutableType.getTableName(strategy),
                        alias,
                        immutableType.getIdProp().getStorage(strategy),
                        mode
                );
            }
            return;
        }

        TableImpl<?> parent = this.parent;
        JoinType joinType = this.joinType;
        MiddleTable middleTable = null;
        if (joinProp.isMiddleTableDefinition()) {
            middleTable = joinProp.getStorage(strategy);
        }

        if (middleTable != null) {
            renderJoinImpl(
                    builder,
                    joinType,
                    parent.alias,
                    parent.immutableType.getIdProp().getStorage(strategy),
                    middleTable.getTableName(),
                    middleTableAlias,
                    middleTable.getColumnDefinition(),
                    mode
            );
            if (builder.getAstContext().getTableUsedState(this) == TableUsedState.USED && (
                    mode == RenderMode.NORMAL ||
                            mode == RenderMode.DEEPER_JOIN_ONLY)
            ) {
                renderJoinImpl(
                        builder,
                        joinType,
                        middleTableAlias,
                        middleTable.getTargetColumnDefinition(),
                        immutableType.getTableName(strategy),
                        alias,
                        immutableType.getIdProp().getStorage(strategy),
                        RenderMode.NORMAL
                );
            }
        } else if (builder.getAstContext().getTableUsedState(this) == TableUsedState.USED) {
            renderJoinImpl(
                    builder,
                    joinType,
                    parent.alias,
                    joinProp.getStorage(strategy),
                    immutableType.getTableName(strategy),
                    alias,
                    immutableType.getIdProp().getStorage(strategy),
                    mode
            );
        }
    }

    private void renderInverseJoin(SqlBuilder sqlBuilder, RenderMode mode) {

        MetadataStrategy strategy = sqlBuilder.getAstContext().getSqlClient().getMetadataStrategy();
        TableImpl<?> parent = this.parent;
        JoinType joinType = this.joinType;

        if (joinProp.getSqlTemplate() instanceof JoinTemplate) {
            renderJoinBySql(sqlBuilder, (JoinTemplate) joinProp.getSqlTemplate(), mode);
            return;
        }

        MiddleTable middleTable = null;
        if (joinProp.isMiddleTableDefinition()) {
            middleTable = joinProp.getStorage(strategy);
        }

        if (middleTable != null) {
            renderJoinImpl(
                    sqlBuilder,
                    joinType,
                    parent.alias,
                    parent.immutableType.getIdProp().getStorage(strategy),
                    middleTable.getTableName(),
                    middleTableAlias,
                    middleTable.getTargetColumnDefinition(),
                    mode
            );
            if (sqlBuilder.getAstContext().getTableUsedState(this) == TableUsedState.USED && (
                    mode == RenderMode.NORMAL ||
                            mode == RenderMode.DEEPER_JOIN_ONLY)
            ) {
                renderJoinImpl(
                        sqlBuilder,
                        joinType,
                        middleTableAlias,
                        middleTable.getColumnDefinition(),
                        immutableType.getTableName(strategy),
                        alias,
                        immutableType.getIdProp().getStorage(strategy),
                        RenderMode.NORMAL
                );
            }
        } else { // One-to-many join cannot be optimized by "used"
            renderJoinImpl(
                    sqlBuilder,
                    joinType,
                    parent.alias,
                    parent.immutableType.getIdProp().getStorage(strategy),
                    immutableType.getTableName(strategy),
                    alias,
                    joinProp.getStorage(strategy),
                    mode
            );
        }
    }

    private void renderJoinBySql(
            SqlBuilder builder,
            JoinTemplate joinTemplate,
            RenderMode mode
    ) {
        if (builder.getAstContext().getTableUsedState(this) != TableUsedState.NONE) {
            MetadataStrategy strategy = builder.getAstContext().getSqlClient().getMetadataStrategy();
            switch (mode) {
                case NORMAL:
                    builder
                            .join(joinType)
                            .sql(immutableType.getTableName(strategy))
                            .sql(" ")
                            .sql(alias)
                            .on();
                    break;
                case FROM_ONLY:
                    builder
                            .sql(immutableType.getTableName(strategy))
                            .sql(" ")
                            .sql(alias);
                    break;
            }
            if (mode == RenderMode.NORMAL || mode == RenderMode.WHERE_ONLY) {
                if (isInverse) {
                    builder.sql(joinTemplate.toSql(alias, parent.alias));
                } else {
                    builder.sql(joinTemplate.toSql(parent.alias, alias));
                }
            }
        }
    }

    private void renderJoinImpl(
            SqlBuilder builder,
            JoinType joinType,
            String previousAlias,
            ColumnDefinition previousDefinition,
            String newTableName,
            String newAlias,
            ColumnDefinition newDefinition,
            RenderMode mode
    ) {
        if (mode != RenderMode.NORMAL && joinType != JoinType.INNER) {
            throw new AssertionError("Internal bug: outer join cannot be accepted by abnormal render mode");
        }
        switch (mode) {
            case NORMAL:
                builder
                        .join(joinType)
                        .sql(newTableName)
                        .sql(" ")
                        .sql(newAlias)
                        .on();
                break;
            case FROM_ONLY:
                builder
                        .sql(newTableName)
                        .sql(" ")
                        .sql(newAlias);
                break;
        }
        if (mode == RenderMode.NORMAL || mode == RenderMode.WHERE_ONLY) {
            int size = previousDefinition.size();
            builder.enter(SqlBuilder.ScopeType.AND);
            for (int i = 0; i < size; i++) {
                builder.separator();
                builder
                        .sql(previousAlias)
                        .sql(".")
                        .sql(previousDefinition.name(i))
                        .sql(" = ")
                        .sql(newAlias)
                        .sql(".")
                        .sql(newDefinition.name(i));
            }
            builder.leave();
        }
    }

    @Override
    public void renderSelection(
            ImmutableProp prop,
            boolean rawId,
            SqlBuilder builder,
            ColumnDefinition optionalDefinition,
            boolean withPrefix,
            Function<Integer, String> asBlock
    ) {
        MetadataStrategy strategy = builder.getAstContext().getSqlClient().getMetadataStrategy();
        if (prop.isId() && joinProp != null && !(joinProp.getSqlTemplate() instanceof JoinTemplate) &&
                (rawId || isRawIdAllowed(builder.getAstContext().getSqlClient()))) {
            MiddleTable middleTable;
            if (joinProp.isMiddleTableDefinition()) {
                middleTable = joinProp.getStorage(strategy);
            } else {
                middleTable = null;
            }
            boolean isInverse = this.isInverse;
            if (middleTable != null) {
                if (optionalDefinition == null) {
                    if (isInverse) {
                        builder.definition(withPrefix ? middleTableAlias : null, middleTable.getColumnDefinition(), asBlock);
                    } else {
                        builder.definition(withPrefix ? middleTableAlias : null, middleTable.getTargetColumnDefinition(), asBlock);
                    }
                } else {
                    ColumnDefinition fullDefinition = prop.getStorage(strategy);
                    ColumnDefinition parentDefinition = isInverse ?
                            middleTable.getColumnDefinition() :
                            middleTable.getTargetColumnDefinition();
                    int size = optionalDefinition.size();
                    for (int i = 0; i < size; i++) {
                        if (i != 0) {
                            builder.sql(", ");
                        }
                        int index = fullDefinition.index(optionalDefinition.name(i));
                        String parentColumnName = parentDefinition.name(index);
                        if (withPrefix) {
                            builder.sql(middleTableAlias).sql(".");
                        }
                        builder.sql(parentColumnName);
                        if (asBlock != null) {
                            builder.sql(" ").sql(asBlock.apply(i));
                        }
                    }
                }
                return;
            }
            if (!isInverse) {
                if (optionalDefinition == null) {
                    builder.definition(withPrefix ? parent.alias : null, joinProp.getStorage(strategy), asBlock);
                } else {
                    ColumnDefinition fullDefinition = prop.getStorage(strategy);
                    ColumnDefinition parentDefinition = joinProp.getStorage(strategy);
                    int size = optionalDefinition.size();
                    for (int i = 0; i < size; i++) {
                        if (i != 0) {
                            builder.sql(", ");
                        }
                        int index = fullDefinition.index(optionalDefinition.name(i));
                        String parentColumnName = parentDefinition.name(index);
                        if (withPrefix) {
                            builder.sql(parent.alias).sql(".");
                        }
                        builder.sql(parentColumnName);
                        if (asBlock != null) {
                            builder.sql(" ").sql(asBlock.apply(i));
                        }
                    }
                }
                return;
            }
        }
        SqlTemplate template = prop.getSqlTemplate();
        if (template instanceof FormulaTemplate) {
            builder.sql(((FormulaTemplate)template).toSql(alias));
            if (asBlock != null) {
                builder.sql(" ").sql(asBlock.apply(0));
            }
        } else {
            ColumnDefinition definition = optionalDefinition != null ?
                    optionalDefinition :
                    prop.getStorage(strategy);
            builder.definition(withPrefix ? alias : null, definition, asBlock);
        }
    }

    @Override
    public String toString() {
        String text;
        if (joinProp == null) {
            text = immutableType.getJavaClass().getSimpleName();
        } else if (isInverse) {
            ImmutableProp opposite = joinProp.getOpposite();
            if (opposite != null) {
                text = parent.toString() + '.' + opposite.getName();
            } else {
                text = parent + "[← " + joinProp + ']';
            }
        } else {
            return parent.toString() + '.' + joinProp.getName();
        }
        if (joinType == JoinType.INNER) {
            return text;
        }
        return text + '(' + joinType.name().toLowerCase() + ')';
    }

    @Override
    public TableRowCountDestructive getDestructive() {
        if (joinProp == null) {
            return TableRowCountDestructive.NONE;
        }
        ImmutableProp prop;
        if (isInverse) {
            prop = joinProp.getOpposite();
            if (prop == null) {
                return TableRowCountDestructive.BREAK_REPEATABILITY;
            }
        } else {
            prop = joinProp;
        }
        if (prop.isReferenceList(TargetLevel.PERSISTENT)) {
            return TableRowCountDestructive.BREAK_REPEATABILITY;
        }
        if (prop.isNullable() && joinType != JoinType.LEFT) {
            return TableRowCountDestructive.BREAK_ROW_COUNT;
        }
        return TableRowCountDestructive.NONE;
    }
}