Ext.define("com.coremedia.ui.data.impl.BeanValueDependency", function(BeanValueDependency) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.dependencies.Dependency;

public class BeanValueDependency implements Dependency {
  private var bean:BeanImpl;

  public*/ function BeanValueDependency$(bean/*:BeanImpl*/) {
    this.bean$GFn_ = bean;
  }/*

  public*/ function getId()/*:String*/ {
    return this.bean$GFn_.getDependencyId();
  }/*

  public*/ function addListener(listener/*:Function*/)/*:void*/ {
    this.bean$GFn_.addValueChangeListener(listener);
  }/*

  public*/ function removeListener(listener/*:Function*/)/*:void*/ {
    this.bean$GFn_.removeValueChangeListener(listener);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.dependencies.Dependency"],
      bean$GFn_: null,
      constructor: BeanValueDependency$,
      getId: getId,
      addListener: addListener,
      removeListener: removeListener,
      requires: ["com.coremedia.ui.data.dependencies.Dependency"]
    };
});
