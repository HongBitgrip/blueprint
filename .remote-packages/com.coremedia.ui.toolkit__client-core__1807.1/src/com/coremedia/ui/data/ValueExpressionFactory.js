Ext.define("com.coremedia.ui.data.ValueExpressionFactory", function(ValueExpressionFactory) {/*package com.coremedia.ui.data {

/**
 * Static factory functions for creating value expressions.
 * /
[PublicApi]
public class ValueExpressionFactory {
  /**
   * A value expression that always evaluates to true.
   * /
  public static var TRUE_VALUE_EXPRESSION:ValueExpression =*/function TRUE_VALUE_EXPRESSION$static_(){ValueExpressionFactory.TRUE_VALUE_EXPRESSION=( ValueExpressionFactory.create(null, true));}/*;

  /**
   * A value expression that always evaluates to false.
   * /
  public static var FALSE_VALUE_EXPRESSION:ValueExpression =*/function FALSE_VALUE_EXPRESSION$static_(){ValueExpressionFactory.FALSE_VALUE_EXPRESSION=( ValueExpressionFactory.create(null, false));}/*;

  /**
   * Create a value expression object from an expression string.
   * The expression string is parsed and evaluated
   * in the given context. At the moment, only dot expressions (for example,
   * <code>a.b.c</code>) are supported. If the expression is null,
   * the value expression returns the context object unchanged.
   *
   * @param expression a String in value expression syntax
   * @param context a Bean or other object used as the context for the expression, e.g. a property path would start at this object
   *   (defaults to <code>applicationContext</code> if <code>context</code> is <code>null</code> or omitted).
   * @return ValueExpression a new value expression
   * /
  public static*/ function create$static(expression/*:**/, context/*:Object = null*/)/*:ValueExpression*/ {if(arguments.length<=1)context=null;
    if (expression) {
      return new com.coremedia.ui.data.PropertyPathExpression(context, expression);
    } else {
      return new com.coremedia.ui.data.ConstantValueExpression(context);
    }
  }/*

  /**
   * Create a value expression that represents a local mutable value.
   * An initial value may be given, otherwise the returned value expression evaluates to <code>undefined</code>.
   * @param value the initial value of the value expression to create, defaults to <code>undefined</code>
   * @return a mutable value expression representing the given value.
   *
   * @since 1.3.14
   * /
  public static*/ function createFromValue$static(value/*:* = undefined*/)/*:ValueExpression*/ {
    /*
     * At the moment, this expression is implemented using a property path expression
     * on a new local bean. That is not the way it should be, however. For performance reasons
     * (and for elegance), it should eventually be implemented from scratch.
     */
    var localBean/*:Bean*/ = com.coremedia.ui.data.beanFactory.createLocalBean();
    if (value !== undefined) {
      localBean.set("value", value);
    }
    return new com.coremedia.ui.data.PropertyPathExpression(localBean, "value");
  }/*

  /**
   * Create a value expression object that wraps an ActionScript function computing the expression value.
   * If a listener is attached to the returned value expression,
   * the current value of the expression is cached and dependencies of the computation are tracked.
   * In the case of calls to beans and other value expressions (the common case), dependency tracking
   * happens automatically. Other dependencies must be registered using the class
   * <code>DependencyTracker</code> from within the given ActionScript function.
   * As soon as a dependency is invalidated, the cached value is invalidated and
   * eventually a change event is sent, if the computed value has changed.
   *
   * @param fun the function to evaluate
   * @param args arguments to be passed to the function
   * @return ValueExpression a new value expression
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  public static*/ function createFromFunction$static(fun/*:Function, ...args*/)/*:ValueExpression*/ {var args=Array.prototype.slice.call(arguments,1);
    return new com.coremedia.ui.data.FunctionValueExpression(fun, args);
  }/*

  /**
   * Create value expression that wraps a value holder containing the actual
   * value. If the value holder supports dependency tracking, the value expression
   * provides change events. See <code>createFromFunction</code> for details on dependency
   * tracking.
   *
   * @param valueHolder the value holder
   * @return the value expression
   *
   * @see #createFromFunction
   * /
  public static*/ function createFromValueHolder$static(valueHolder/*:ValueHolder*/)/*:ValueExpression*/ {
    return ValueExpressionFactory.createFromFunction(function()/*:ValueHolder*/ {
      return valueHolder;
    });
  }/*

  /**
   * Create a value expression whose value is set to the single item of the given value expression of arrays.
   * The value of the given expression is changed by the value change of the new expression as well.
   * <li>When the given value expression holds an array of a single item the value of the new value expression is set
   * to the single item.</li>
   * <li>When the given value expression holds an array of multiple items or an empty array the value of the new value expression is set
   * to <code>null</code>.</li>
   * <li>When the given value expression holds a non-array value or <code>null</code> or <code>undefined</code>
   * the value of the new value expression is set to that value.</li>
   * <li>Setting the value of the new expression will change the value of the given expression to an array of the single value.</li>
   * @param valueExpression the given value expression of arrays
   * @return value expression of the singe item
   * /
  public static*/ function createSingleItemValueExpression$static(valueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return ValueExpressionFactory.createTransformingValueExpression(valueExpression, convertToSingleItem$static, convertToArray$static);
  }/*

  private static*/ function convertToSingleItem$static(value/*:**/)/*:**/ {
    if (AS3.is(value,  Array)){
      return value.length === 1 ? value[0] : null;
    } else {
      return value;
    }
  }/*

  private static*/ function convertToArray$static(value/*:**/)/*:Array*/ {
    return value ? [value] : null;
  }/*

  /**
   * Create a value expression that uses a transformer to post-process the value
   * returned by another value expression and that allows an optional reverse transformer to
   * pre-process a new value that is assigned to that value expression.
   * An undefined value is not processed by the transformer.
   * Operations in the transformer are subject to dependency tracking.
   * See <code>createFromFunction</code> for details on dependency
   * tracking.
   *
   * @param valueExpression the wrapper value expression
   * @param transform the transformer
   * @param reverseTransform the optional reverse transformer
   * @param defaultValue the value to return when the value expression is loaded, but still returns undefined
   * @return the compound value expression
   *
   * @see #createFromFunction
   * /
  public static*/ function createTransformingValueExpression$static(valueExpression/*:ValueExpression*/,
                                                           transform/*:Function*/,
                                                           reverseTransform/*:Function = null*/,
                                                           defaultValue/*:* = undefined*/)/*:ValueExpression*/ {if(arguments.length<=2)reverseTransform=null;
    return ValueExpressionFactory.createFromValueHolder(new com.coremedia.ui.data.TransformingValueHolder(valueExpression, transform, reverseTransform, defaultValue));
  }/*

  /**
   * Return a value expression that evaluates both given value expression and unites the resulting "sets"
   * (arrays). Whenever one of the expressions returns undefined, the result depends on the partialUnion parameter.
   * If partialUnion is true (the default), the result of the other expression is returned.
   * If partialUnion is false, the result remains undefined until both value expression return
   * a defined value.
   * /
  public static*/ function createUnion$static(firstSetValueExpression/*:ValueExpression*/,
                                     secondSetValueExpression/*:ValueExpression*/,
                                     partialUnion/*:Boolean = true*/)/*:ValueExpression*/ {if(arguments.length<=2)partialUnion=true;
    return ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
      var firstSet/*:Array*/ = firstSetValueExpression.getValue();
      var secondSet/*:Array*/ = secondSetValueExpression.getValue();
      if (firstSet === undefined && secondSet === undefined) {
        return undefined;
      }
      if (!partialUnion && (firstSet === undefined || secondSet === undefined)) {
        return undefined;
      }
      if (!firstSet || firstSet.length === 0) {
        return secondSet;
      }
      if (!secondSet || secondSet.length === 0) {
        return firstSet;
      }
      return firstSet.concat(secondSet.filter(function(element/*:**/)/*:Boolean*/ {
        return firstSet.indexOf(element) === -1;
      }));
    });
  }/*

  /**
   * Return a value expression that returns a one-element array of the value returned by the given value expression.
   * /
  public static*/ function convertToSingletonArray$static(itemValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
      var value/*:**/ = itemValueExpression.getValue();
      return value === undefined ? undefined : [value];
    });
  }/*


}*/function ValueExpressionFactory$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ValueExpressionFactory$,
      statics: {
        TRUE_VALUE_EXPRESSION: undefined,
        FALSE_VALUE_EXPRESSION: undefined,
        create: create$static,
        createFromValue: createFromValue$static,
        createFromFunction: createFromFunction$static,
        createFromValueHolder: createFromValueHolder$static,
        createSingleItemValueExpression: createSingleItemValueExpression$static,
        createTransformingValueExpression: createTransformingValueExpression$static,
        createUnion: createUnion$static,
        convertToSingletonArray: convertToSingletonArray$static,
        __initStatics__: function() {
          TRUE_VALUE_EXPRESSION$static_();
          FALSE_VALUE_EXPRESSION$static_();
        }
      },
      uses: [
        "com.coremedia.ui.data.ConstantValueExpression",
        "com.coremedia.ui.data.FunctionValueExpression",
        "com.coremedia.ui.data.PropertyPathExpression",
        "com.coremedia.ui.data.TransformingValueHolder",
        "com.coremedia.ui.data.beanFactory"
      ]
    };
});
