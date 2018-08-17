Ext.define("com.coremedia.ui.data.ValueExpression", function(ValueExpression) {/*package com.coremedia.ui.data {

/**
 * <code>ValueExpression</code>s provide access to possibly mutable values and
 * notify listeners when the value changes.
 * They may also allow to receive a value that can then become the next
 * value of the expression. Value expressions can be thought of as an abstraction layer
 * for binding widget state to application state. They shield upper layers from detecting
 * all updates of a derived value that may potentially depend on many independently
 * changing beans.
 *
 * @see ValueExpressionFactory#create()
 * /
[PublicApi]
public interface ValueExpression {

  /**
   * Return another value expression starting at this value expression, extended by the
   * argument property path.
   * @example The following code extends a ValueExpression:
   * <listing version="3.0">
   * var pathExpression:ValueExpression = ValueExpressionFactory.create("a", bean).extendBy("b");
   * </listing>
   * is the same as
   * <listing version="3.0">
   * var pathExpression:ValueExpression = ValueExpressionFactory.create("a.b", bean);
   * </listing>
   *
   * @param properties the property path extension, either a several String arguments or as an Array of Strings
   * @return ValueExpression the extended value expression
   * /
  function extendBy(...properties):ValueExpression;

  /**
   * The parent value expression which is computed by removing the last property path arc, or null if not applicable.
   *
   * @return another ValueExpression
   * /
  function getParent():ValueExpression;

  /**
   * Add a listener to changes of the value this expression evaluates to, with the signature
   * <code>function(source:ValueExpression):void</code>. The listener is also called when the
   * readability of this value expression changes.
   *
   * @param valueChangeListener a value change listener function with the signature
   * <code>function(source:ValueExpression):void</code>.
   * /
  function addChangeListener(valueChangeListener:Function):void;

  /**
   * Remove a value change listener attached using <code>addChangeListener()</code>.
   * @param valueChangeListener the value change listener to remove
   * /
  function removeChangeListener(valueChangeListener:Function):void;

  /**
   * Get the value this expression evaluates to. If any sub-expression value is
   * undefined, the result is undefined.
   * This method registers a dependency with the dependency tracker.
   *
   * @return the value this expression evaluates to
   *
   * @see #setValue
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function getValue():*;

  /**
   * Return whether the expression can be evaluated without violating read rights.
   * This method registers a dependency with the dependency tracker.
   *
   * @return whether the expression can be evaluated without violating read rights.
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function isReadable():Boolean;

  /**
   * Set the value of this expression. If any sub-expression value is undefined, an Error will be
   * thrown.
   * Only applicable to "left hand" value expressions, i.e. value expressions with a parent evaluating to a Bean.
   * @return true if the value is different from the old value, false otherwise.
   *
   * @see #getValue
   * @see #getParent
   * /
  function setValue(value:*):Boolean;

  /**
   * Return whether all beans involved in the expression are completely loaded.
   * This method registers a dependency with the dependency tracker.
   *
   * @return whether all beans are completely loaded
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function isLoaded():Boolean;

  /**
   * Fetches the value of the expression and calls the callback when the value is not undefined anymore.
   *
   * @param callback the callback function, signature: <code>function(value:*):void</code>
   * /
  function loadValue(callback:Function):void;
}

}

============================================== Jangaroo part ==============================================*/
    return {};
});
