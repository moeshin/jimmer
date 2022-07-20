package org.babyfish.jimmer.meta.impl;

import org.apache.commons.lang3.reflect.TypeUtils;
import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.Immutable;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.runtime.DraftContext;
import org.babyfish.jimmer.util.StaticCache;

import java.lang.reflect.*;
import java.util.Arrays;
import java.util.function.BiFunction;

public class Metadata {

    private Metadata() {}

    private static final Class<?> TABLE_CLASS;

    private static final StaticCache<Class<?>, ImmutableTypeImpl> CACHE =
            new StaticCache<>(Metadata::create);

    public static ImmutableTypeImpl get(Class<?> javaClass) {
        ImmutableTypeImpl immutableType = CACHE.get(javaClass);
        if (immutableType == null) {
            throw new IllegalArgumentException(
                    "Cannot get immutable type for \"" + javaClass.getName() + "\""
            );
        }
        return immutableType;
    }

    public static ImmutableTypeImpl tryGet(Class<?> javaClass) {
        return CACHE.get(javaClass);
    }

    private static ImmutableTypeImpl create(Class<?> javaClass) {
        if (TABLE_CLASS != null && TABLE_CLASS.isAssignableFrom(javaClass)) {
            if (javaClass.getTypeParameters().length != 0) {
                return null;
            }
            Type type = TypeUtils
                    .getTypeArguments(javaClass, TABLE_CLASS)
                    .values()
                    .iterator()
                    .next();
            if (!(type instanceof Class<?>)) {
                return null;
            }
            javaClass = (Class<?>) type;
        }
        Class<?> immutableJavaClass = getImmutableJavaClass(javaClass);
        if (immutableJavaClass == null) {
            return null;
        }
        Class<?> draftClass;
        try {
            draftClass = Class.forName(immutableJavaClass.getName() + "Draft");
        } catch (ClassNotFoundException ex) {
            throw new IllegalArgumentException(
                    "Cannot find draft type for \"" + immutableJavaClass.getName() + "\""
            );
        }
        Class<?> producerClass = Arrays
                .stream(draftClass.getDeclaredClasses())
                .filter(it -> it.getSimpleName().equals("Producer") || it.getSimpleName().equals("$"))
                .findFirst()
                .orElse(null);
        if (producerClass == null) {
            throw new IllegalArgumentException(
                    "Cannot find producer type for \"" + draftClass.getName() + "\""
            );
        }

        if (producerClass.getSimpleName().equals("$")) { // kotlin-ksp
            Object owner;
            try {
                Field ownerField = producerClass.getField("INSTANCE");
                owner = ownerField.get(null);
            } catch (NoSuchFieldException | IllegalAccessException ex) {
                owner = null;
            }
            Method method = null;
            if (owner != null) {
                try {
                    method = owner.getClass().getMethod("getType");
                } catch (NoSuchMethodException ex) {
                }
            }
            if (owner == null || method == null) {
                throw new IllegalArgumentException(
                        "Cannot find immutable type from illegal producer type \"" + producerClass.getName() + "\""
                );
            }
            try {
                return (ImmutableTypeImpl) method.invoke(owner);
            } catch (IllegalAccessException ex) {
                throw new AssertionError("Internal bug: Cannot access " + method, ex);
            } catch (InvocationTargetException ex) {
                throw new AssertionError("Internal bug: Cannot get value from " + method, ex);
            }
        } else { // java-apt
            Field typeField;
            try {
                typeField = producerClass.getField("TYPE");
            } catch (NoSuchFieldException ex) {
                typeField = null;
            }
            if (typeField == null || typeField.getType() != ImmutableType.class) {
                throw new IllegalArgumentException(
                        "Cannot find immutable type from illegal producer type \"" + producerClass.getName() + "\""
                );
            }
            try {
                return (ImmutableTypeImpl) typeField.get(null);
            } catch (IllegalAccessException e) {
                throw new AssertionError("Internal bug: Cannot access " + typeField);
            }
        }
    }

    public static ImmutableType.Builder newTypeBuilder(
            Class<?> javaClass,
            ImmutableType superType,
            BiFunction<DraftContext, Object, Draft> draftFactory
    ) {
        return new ImmutableTypeImpl.BuilderImpl(javaClass, superType, draftFactory);
    }

    private static Class<?> getImmutableJavaClass(Class<?> javaClass) {
        boolean matched = Arrays.stream(javaClass.getAnnotations()).anyMatch(
                it -> it.annotationType() == Immutable.class ||
                        it.annotationType().getName().equals("javax.persistence.Entity")
        );
        if (matched) {
            return javaClass;
        }
        Class<?> superClass = javaClass.getSuperclass();
        if (superClass != null && superClass != Object.class) {
            Class<?> immutableJavaClass = getImmutableJavaClass(superClass);
            if (immutableJavaClass != null) {
                return immutableJavaClass;
            }
        }
        for (Class<?> interfaceClass : javaClass.getInterfaces()) {
            Class<?> immutableJavaClass = getImmutableJavaClass(interfaceClass);
            if (immutableJavaClass != null) {
                return immutableJavaClass;
            }
        }
        return null;
    }

    static {
        Class<?> tableClass;
        try {
            tableClass = Class.forName("org.babyfish.jimmer.sql.ast.table.Table");
        } catch (ClassNotFoundException ex) {
            tableClass = null;
        }
        TABLE_CLASS = tableClass;
    }
}
