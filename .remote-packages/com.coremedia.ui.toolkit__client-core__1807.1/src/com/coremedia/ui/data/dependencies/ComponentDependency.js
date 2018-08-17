Ext.define("com.coremedia.ui.data.dependencies.ComponentDependency", function(ComponentDependency) {/*package com.coremedia.ui.data.dependencies {

import ext.Component;

public class ComponentDependency implements Dependency {
  private var component:Component;
  private var eventName:String;

  public*/ function ComponentDependency$(component/*:Component*/, eventName/*:String*/) {
    this.component$fzTZ = component;
    this.eventName$fzTZ = eventName;
  }/*

  public*/ function getId()/*:String*/ {
    return "component:" + this.component$fzTZ.getId() + ":" + this.eventName$fzTZ;
  }/*

  public*/ function addListener(listener/*:Function*/)/*:void*/ {
    this.component$fzTZ.addListener(this.eventName$fzTZ, listener);
  }/*

  public*/ function removeListener(listener/*:Function*/)/*:void*/ {
    this.component$fzTZ.removeListener(this.eventName$fzTZ, listener);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.dependencies.Dependency"],
      component$fzTZ: null,
      eventName$fzTZ: null,
      constructor: ComponentDependency$,
      getId: getId,
      addListener: addListener,
      removeListener: removeListener,
      requires: ["com.coremedia.ui.data.dependencies.Dependency"]
    };
});
