Ext.define("com.coremedia.ui.data.AbstractValueExpressionDependency", function(AbstractValueExpressionDependency) {/*package com.coremedia.ui.data {

import com.coremedia.ui.data.dependencies.Dependency;

public class AbstractValueExpressionDependency implements Dependency {
  private var valueExpression:AbstractValueExpression;

  public*/ function AbstractValueExpressionDependency$(valueExpression/*:AbstractValueExpression*/) {
    this.valueExpression$p2rI = valueExpression;
  }/*

  public*/ function getId()/*:String*/ {
    return this.valueExpression$p2rI.getDependencyKey();
  }/*

  public*/ function addListener(listener/*:Function*/)/*:void*/ {
    this.valueExpression$p2rI.addChangeListener(listener);
  }/*

  public*/ function removeListener(listener/*:Function*/)/*:void*/ {
    this.valueExpression$p2rI.removeChangeListener(listener);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.dependencies.Dependency"],
      valueExpression$p2rI: null,
      constructor: AbstractValueExpressionDependency$,
      getId: getId,
      addListener: addListener,
      removeListener: removeListener,
      requires: ["com.coremedia.ui.data.dependencies.Dependency"]
    };
});
