package org.babyfish.jimmer.example.kt.graphql.bll.resolver

import org.babyfish.jimmer.example.kt.graphql.dal.BookRepository
import org.babyfish.jimmer.example.kt.graphql.entities.Book
import org.babyfish.jimmer.example.kt.graphql.entities.BookStore
import org.babyfish.jimmer.kt.toImmutableProp
import org.babyfish.jimmer.lang.Ref
import org.babyfish.jimmer.sql.event.AssociationEvent
import org.babyfish.jimmer.sql.event.EntityEvent
import org.babyfish.jimmer.sql.kt.KTransientResolver
import org.babyfish.jimmer.sql.kt.event.getUnchangedRef
import org.babyfish.jimmer.sql.kt.event.isChanged
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import java.math.BigDecimal
import java.util.*

@Component
class BookStoreAvgPriceResolver(
    private val bookRepository: BookRepository
) : KTransientResolver<Long, BigDecimal> {

    // You can also inject it directly
    private val sqlClient = bookRepository.sql

    override fun resolve(ids: Collection<Long>): Map<Long, BigDecimal> =
        bookRepository.findAvgPriceGroupByStoreIds(ids)

    override fun getDefaultValue(): BigDecimal =
        BigDecimal.ZERO

    // -----------------------------
    // If you are a beginner, you can ignore all the following code.
    //
    // The following code is only used for cache mode(start the application
    // by `application.yml`).
    //
    // Unlike the fully automatic cache consistency maintenance of
    // ordinary associated property, if a calculated property uses cache,
    // its consistency requires manual assistance.
    // -----------------------------




    // The calculated property `BookStore.avgPrice` depends on the one-to-many association `BookStore.books`,
    // and `BookStore.books` adopts multi-view cache because its target type `Book` is processed by the
    // filter `TenantFilter`, so `BookStore.avgPrice` should also adopt multi-view cache too.
    //
    // Since it is multi-view cache, sub key is needed.
    // Here, we make the calculated cache `BookStore.avgPrice` have the same sub key as the
    // association cache `BookStore.books`, which is `{"tenant": ...}`
    override fun getParameterMapRef(): Ref<SortedMap<String, Any>?>? { // ❹
        return sqlClient.filters.getTargetParameterMapRef(BookStore::books)
    }

    // When a one-to-many association `BookStore.books` is modified
    // (for some records in the BOOK table, whether by modifying the foreign key field `STORE_ID` or
    // the field `TENANT` that the `TenantFilter` cares about),
    // the cache of the calculated property `BookStore.avgPrice` should be invalidated.
    override fun getAffectedSourceIds(e: AssociationEvent): Collection<*>? { // ❺
        return if (sqlClient.caches.isAffectedBy(e) && e.immutableProp === BookStore::books.toImmutableProp()) {
            listOf(e.sourceId)
        } else null
    }

    // Given that the foreign key `STORE_ID` of the current `Book` is not null and has not been modified,
    // if the `price` of the current `Book` changes, the cache of the computed property `BookStore.avgPrice`
    // corresponding to `STORE_ID` should be invalidated.
    override fun getAffectedSourceIds(e: EntityEvent<*>): Collection<*>? { // ❻
        if (sqlClient.caches.isAffectedBy(e) &&
            !e.isEvict &&
            e.getImmutableType().javaClass == Book::class.java
        ) {
            val store = e.getUnchangedRef(Book::store)?.value
            if (store !== null && e.isChanged(Book::price)) {
                return listOf(store.id)
            }
        }
        return null
    }
}

/*----------------Documentation Links----------------
❶ ❷ ❸ https://babyfish-ct.github.io/jimmer/docs/mapping/advanced/calculated/transient#scalar-calculation-bookstoreavgprice
❹ https://babyfish-ct.github.io/jimmer/docs/cache/multiview-cache/user-filter#subkey-of-calculated-properties
❺ ❻ https://babyfish-ct.github.io/jimmer/docs/cache/multiview-cache/user-filter#consistency
---------------------------------------------------*/