Ext.define("com.coremedia.ui.data.impl.BeanPropertyDependency", function(BeanPropertyDependency) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.dependencies.Dependency;

public class BeanPropertyDependency implements Dependency {
  private var bean:BeanImpl;
  private var property:String;

  public*/ function BeanPropertyDependency$(bean/*:BeanImpl*/, property/*:String*/) {
    this.bean$WoxU = bean;
    this.property$WoxU = property;
  }/*

  public*/ function getId()/*:String*/ {
    return this.bean$WoxU.getDependencyId() + '#' + this.property$WoxU;
  }/*

  public*/ function addListener(listener/*:Function*/)/*:void*/ {
    this.bean$WoxU.addPropertyChangeListener(this.property$WoxU, listener);
  }/*

  public*/ function removeListener(listener/*:Function*/)/*:void*/ {
    this.bean$WoxU.removePropertyChangeListener(this.property$WoxU, listener);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.dependencies.Dependency"],
      bean$WoxU: null,
      property$WoxU: null,
      constructor: BeanPropertyDependency$,
      getId: getId,
      addListener: addListener,
      removeListener: removeListener,
      requires: ["com.coremedia.ui.data.dependencies.Dependency"]
    };
});
