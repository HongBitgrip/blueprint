Ext.define("com.coremedia.ui.data.ValueExpressionsToPropertiesAdapter", function(ValueExpressionsToPropertiesAdapter) {/*package com.coremedia.ui.data {

import ext.util.Observable;

/**
 * Adapter to make multiple {@link ValueExpression}s available as properties of an {@link Observable}.
 *
 * Changes will fire events named after the propertyname which was changed, allowing dependency tracking, e.g. using
 * a {@see PropertyPathExpression}.
 *
 * Must be properly {@link #destroy}ed when not longer in use, otherwise attached listeners will not be removed.
 * /
public class ValueExpressionsToPropertiesAdapter extends Observable {

  private var propertyToValueExpressionMapping:Object;
  private var propertyToAttachedListeners:Object =*/function propertyToAttachedListeners_(){this.propertyToAttachedListeners$NjwN=( {});}/*;

  /**
   *
   * @param mapping
   * /
  public*/ function ValueExpressionsToPropertiesAdapter$(mapping/*: **/) {
    this.super$NjwN();propertyToAttachedListeners_.call(this);;
    this.propertyToValueExpressionMapping$NjwN = mapping;
    for (var propertyName/*:String*/ in this.propertyToValueExpressionMapping$NjwN) {
      if (this.propertyToValueExpressionMapping$NjwN.hasOwnProperty(propertyName)) {
        var pVE/*:ValueExpression*/ =AS3.as( this.propertyToValueExpressionMapping$NjwN[propertyName],  com.coremedia.ui.data.ValueExpression);
        var listener/*:Function*/ = this.getFireEvent$NjwN(propertyName);
        pVE.addChangeListener(listener);
        this.propertyToAttachedListeners$NjwN[propertyName] = listener;
      }
    }
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    for (var propertyName/*:String*/ in this.propertyToValueExpressionMapping$NjwN) {
      if (this.propertyToValueExpressionMapping$NjwN.hasOwnProperty(propertyName)) {
        var pVE/*:ValueExpression*/ =AS3.as( this.propertyToValueExpressionMapping$NjwN[propertyName],  com.coremedia.ui.data.ValueExpression);
        var listener/*:Function*/ =AS3.as( this.propertyToAttachedListeners$NjwN[propertyName],  Function);
        listener && pVE.removeChangeListener(listener);
      }
    }
  }/*

  /**
   * Returns the current value of the provided property name.
   *
   * @param propertyName property name to determine the current value for
   * @return the current value
   * /
  protected*/ function getProperty(propertyName/*:String*/)/*:**/ {
    var ve/*:ValueExpression*/ = this.getPropertyValueExpression(propertyName);
    return ve.getValue();
  }/*

  /**
   * Sets the value of the provided property name.
   *
   * @param propertyName property name to set the valjue for
   * @param newValue the new value
   * /
  protected*/ function setProperty(propertyName/*:String*/, newValue/*:**/)/*:void*/ {
    var ve/*:ValueExpression*/ = this.getPropertyValueExpression(propertyName);
    ve.setValue(newValue);
  }/*

  /**
   * Returns the {@link ValueExpression} bound to the provided property name.
   *
   * Throws an {@link Error} in case the property name is not declared.
   *
   * @param propertyName property name to determine the value expression for
   * @return the value expression bound to the provided property name
   * /
  protected*/ function getPropertyValueExpression(propertyName/*:String*/)/*:ValueExpression*/ {
    if (!this.propertyToValueExpressionMapping$NjwN[propertyName]) {
      throw new AS3.Error("Accessing non declared property " + propertyName);
    }
    return this.propertyToValueExpressionMapping$NjwN[propertyName];
  }/*

  private*/ function getFireEvent(propertyName/*:String*/)/*:Function*/ {var this$=this;
    return function (ve/*:ValueExpression*/)/*:void*/ {
      // second parameter must be empty object because of a bug in PropertyPathExpression#somePropertyChanged
      // where attributes are accessed without a null check. Fixing the bug might have a major impact.
      this$.fireEvent(propertyName, {});
    };
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      propertyToValueExpressionMapping$NjwN: null,
      constructor: ValueExpressionsToPropertiesAdapter$,
      super$NjwN: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      destroy: destroy,
      getProperty: getProperty,
      setProperty: setProperty,
      getPropertyValueExpression: getPropertyValueExpression,
      getFireEvent$NjwN: getFireEvent,
      requires: [
        "AS3.Error",
        "Ext.util.Observable"
      ],
      uses: ["com.coremedia.ui.data.ValueExpression"]
    };
});
