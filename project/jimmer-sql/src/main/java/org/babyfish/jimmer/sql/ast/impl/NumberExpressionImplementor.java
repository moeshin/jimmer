package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.NumericExpression;
import org.babyfish.jimmer.sql.ast.Predicate;

import java.math.BigDecimal;

interface NumberExpressionImplementor<N extends Number> extends NumericExpression<N> {

    @Override
    default NumericExpression<N> plus(NumericExpression<N> other) {
        return new BinaryExpression.Plus<>(getType(), this, other);
    }

    @Override
    default NumericExpression<N> plus(N other) {
        return plus(Literals.number(other));
    }

    @Override
    default NumericExpression<N> minus(NumericExpression<N> other) {
        return new BinaryExpression.Minus<>(getType(), this, other);
    }

    @Override
    default NumericExpression<N> minus(N other) {
        return minus(Literals.number(other));
    }

    @Override
    default NumericExpression<N> times(NumericExpression<N> other) {
        return new BinaryExpression.Times<>(getType(), this, other);
    }

    @Override
    default NumericExpression<N> times(N other) {
        return times(Literals.number(other));
    }

    @Override
    default NumericExpression<N> div(NumericExpression<N> other) {
        return new BinaryExpression.Div<>(getType(), this, other);
    }

    @Override
    default NumericExpression<N> div(N other) {
        return div(Literals.number(other));
    }

    @Override
    default NumericExpression<N> rem(NumericExpression<N> other) {
        return new BinaryExpression.Rem<>(getType(), this, other);
    }

    @Override
    default NumericExpression<N> rem(N other) {
        return rem(Literals.number(other));
    }

    @Override
    default Predicate lt(NumericExpression<N> other) {
        return new ComparisonPredicate.Lt(this, other);
    }

    @Override
    default Predicate lt(N other) {
        return lt(Literals.number(other));
    }

    @Override
    default Predicate le(NumericExpression<N> other) {
        return new ComparisonPredicate.Le(this, other);
    }

    @Override
    default Predicate le(N other) {
        return le(Literals.number(other));
    }

    @Override
    default Predicate gt(NumericExpression<N> other) {
        return new ComparisonPredicate.Gt(this, other);
    }

    @Override
    default Predicate gt(N other) {
        return gt(Literals.number(other));
    }

    @Override
    default Predicate ge(NumericExpression<N> other) {
        return new ComparisonPredicate.Ge(this, other);
    }

    @Override
    default Predicate ge(N other) {
        return ge(Literals.number(other));
    }

    @Override
    default NumericExpression<Long> count(boolean distinct) {
        if (distinct) {
            return new AggregationExpression.CountDistinct(this);
        }
        return new AggregationExpression.Count(this);
    }

    @Override
    default NumericExpression<N> sum() {
        return new AggregationExpression.Sum<>(this);
    }

    @Override
    default NumericExpression<N> min() {
        return new AggregationExpression.Min<>(this);
    }

    @Override
    default NumericExpression<N> max() {
        return new AggregationExpression.Max<>(this);
    }

    @Override
    default NumericExpression<BigDecimal> avg() {
        return new AggregationExpression.Avg(this);
    }

    Class<N> getType();
}
