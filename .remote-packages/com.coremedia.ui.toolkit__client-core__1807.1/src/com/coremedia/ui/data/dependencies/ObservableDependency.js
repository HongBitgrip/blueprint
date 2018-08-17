Ext.define("com.coremedia.ui.data.dependencies.ObservableDependency", function(ObservableDependency) {/*package com.coremedia.ui.data.dependencies {

import ext.mixin.IObservable;

public class ObservableDependency implements Dependency {
  private var observable:IObservable;
  private var eventName:String;

  public*/ function ObservableDependency$(observable/*:IObservable*/, eventName/*:String*/) {
    this.observable$Rp4J = observable;
    this.eventName$Rp4J = eventName;
  }/*

  public*/ function getId()/*:String*/ {
    return null;
  }/*

  public*/ function addListener(listener/*:Function*/)/*:void*/ {
    this.observable$Rp4J.addListener(this.eventName$Rp4J, listener);
  }/*

  public*/ function removeListener(listener/*:Function*/)/*:void*/ {
    this.observable$Rp4J.removeListener(this.eventName$Rp4J, listener);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.dependencies.Dependency"],
      observable$Rp4J: null,
      eventName$Rp4J: null,
      constructor: ObservableDependency$,
      getId: getId,
      addListener: addListener,
      removeListener: removeListener,
      requires: ["com.coremedia.ui.data.dependencies.Dependency"]
    };
});
