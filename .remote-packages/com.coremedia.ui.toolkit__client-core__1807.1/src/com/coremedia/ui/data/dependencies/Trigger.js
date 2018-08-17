Ext.define("com.coremedia.ui.data.dependencies.Trigger", function(Trigger) {/*package com.coremedia.ui.data.dependencies {

import ext.util.Observable;

/**
 * Fires when triggered.
 * /
[Event(name = "trigger")] // NOSONAR - no type

public class Trigger extends Observable{

  private static const*/var TRIGGER$static/*:String*/ = "trigger";/*

  public*/ function Trigger$() {
    this.super$m7bp();
  }/*

  public*/ function dependOn()/*:void*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, TRIGGER$static);
  }/*

  public*/ function trigger()/*:void*/ {
    this.fireEvent(TRIGGER$static);
  }/*

  public*/ function hasTriggerListener()/*:Boolean*/ {
    return this.hasListener(TRIGGER$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": [
        "Event",
        [
          "name",
          "trigger"
        ]
      ]},
      constructor: Trigger$,
      super$m7bp: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      dependOn: dependOn,
      trigger: trigger,
      hasTriggerListener: hasTriggerListener,
      requires: ["Ext.util.Observable"],
      uses: ["com.coremedia.ui.data.dependencies.DependencyTracker"]
    };
});
