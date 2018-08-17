Ext.define("com.coremedia.ui.actions.DependencyTrackedActionBase", function(DependencyTrackedActionBase) {/*package com.coremedia.ui.actions {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Action;
import ext.Component;

[PublicApi]
public class DependencyTrackedActionBase extends Action {
  // status constants:
  public static const HIDDEN:int = 0;
  public static const DISABLED:int = 1;
  public static const ENABLED:int = 2;

  public var preventHide:Boolean;
  private var neverHide:Boolean;

  private var statusExpression:ValueExpression;

  public*/ function DependencyTrackedActionBase$(config/*:DependencyTrackedAction = null*/) {if(arguments.length<=0)config=null;
    this.super$$R0n(config);
    if(AS3.getBindable(config,"statusExpression")) {
      this.statusExpression$$R0n = AS3.getBindable(config,"statusExpression");
    }
    else {
      this.statusExpression$$R0n = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateStatus$$R0n"));
    }

    this.neverHide$$R0n = config.preventHide;
  }/*

  protected native function get items():Array;

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    if (this.items.length === 0) {
      this.onFirstComponentAdded();
    }
    Ext.Action.prototype.addComponent.call(this,comp);
  }/*

  protected*/ function onFirstComponentAdded()/*:void*/ {
    // Start listening.
    this.statusExpression$$R0n.addChangeListener(AS3.bind(this,"updateStatus$$R0n"));
    this.updateStatus$$R0n();
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);

    if (this.items.length === 0) {
      this.onLastComponentRemoved();
    }
  }/*

  protected*/ function onLastComponentRemoved()/*:void*/ {
    this.statusExpression$$R0n.removeChangeListener(AS3.bind(this,"updateStatus$$R0n"));
  }/*

  private*/ function updateStatus()/*:void*/ {
    var status/*:int*/ = this.statusExpression$$R0n.getValue();
    if (status === undefined) {
      return;
    }

    var hidden/*:Boolean*/ = status === DependencyTrackedActionBase.HIDDEN;
    if (hidden !== this.isHidden() && (!hidden || !this.neverHide$$R0n)) {
      this.setHidden(hidden);
      if (hidden) {
        return;
      }
    }

    var disabled/*:Boolean*/ = status === DependencyTrackedActionBase.DISABLED;
    if (disabled !== this.isDisabled()) {
      this.setDisabled(disabled);
    }
  }/*

  private*/ function calculateStatus()/*:int*/ {
    switch (this.calculateHidden()) {
      case undefined: return undefined;
      case true: if (!this.neverHide$$R0n) {return DependencyTrackedActionBase.HIDDEN;}
    }
    switch (this.calculateDisabled()) {
      case undefined: return undefined;
      case false: return DependencyTrackedActionBase.ENABLED;
    }
    return DependencyTrackedActionBase.DISABLED;
  }/*

  protected*/ function calculateDisabled()/*:Boolean*/ {
    return false;
  }/*

  //noinspection JSMethodCanBeStatic
  protected*/ function calculateHidden()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      preventHide: false,
      neverHide$$R0n: false,
      statusExpression$$R0n: null,
      constructor: DependencyTrackedActionBase$,
      super$$R0n: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      onFirstComponentAdded: onFirstComponentAdded,
      removeComponent: removeComponent,
      onLastComponentRemoved: onLastComponentRemoved,
      updateStatus$$R0n: updateStatus,
      calculateStatus$$R0n: calculateStatus,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      statics: {
        HIDDEN: 0,
        DISABLED: 1,
        ENABLED: 2
      },
      requires: [
        "Ext.Action",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
