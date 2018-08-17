Ext.define("com.coremedia.ui.actions.ToggleComponentAction", function(ToggleComponentAction) {/*package com.coremedia.ui.actions {

import ext.Action;
import ext.Component;
import ext.Ext;
import ext.button.Button;

/**
 * An {@link Action} that toggles between two different handlers based on a {@link #pressed} state. It will also sync
 * buttons that have the {@link Button#enableToggle} flag set to true.
 *
 * If the {@link #pressed} state is true, {@link #unpressHandler} will be triggered.
 * If the {@link #pressed} state is false, {@link #pressHandler} will be triggered.
 *
 * When customizing {@link #unpressHandler} and {@link #pressHandler} (by overriding it) the flag {@link #triggeredByUser} can be
 * used to check if this action was triggered programmatically or by user events.
 * /
public class ToggleComponentAction extends Action {

  private var _triggeredByUser:Boolean;
  private var _pressed:Boolean;

  public*/ function ToggleComponentAction$(config/*:ToggleComponentAction = null*/) {if(arguments.length<=0)config=null;
    var defaultConfig/*:ToggleComponentAction*/ = AS3.cast(ToggleComponentAction,{});
    AS3.setBindable(defaultConfig,"handler" ,AS3.bind( this,"toggle$CGCg"));
    this.super$CGCg(AS3.cast(ToggleComponentAction,Ext.apply({}, config, defaultConfig)));
  }/*

  [Bindable]
  public*/ function get$pressed()/*:Boolean*/ {
    return this._pressed$CGCg || false;
  }/*

  [Bindable]
  public*/ function set$pressed(newPressed/*:Boolean*/)/*:void*/ {
    var oldPressed/*:Boolean*/ = this._pressed$CGCg;
    this._pressed$CGCg = newPressed;
    if (oldPressed !== AS3.getBindable(this,"pressed")) {
      AS3.getBindable(this,"pressed") ? this.pressHandler() : this.unpressHandler();
    }
  }/*

  protected*/ function  get$triggeredByUser()/*:Boolean*/ {
    return this._triggeredByUser$CGCg;
  }/*

  /**
   * @private
   * The handler attached to the action.
   *
   * Note: This is only triggered by user actions (click, tap). Do not trigger this method programmatically.
   * /
  private*/ function toggle()/*:void*/ {
    this._triggeredByUser$CGCg = true;
    AS3.setBindable(this,"pressed" , !AS3.getBindable(this,"pressed"));
    this._triggeredByUser$CGCg = false;
  }/*

  private*/ function setToggleState(state/*:Boolean*/)/*:void*/ {
    this.each(function (cmp/*:Component*/)/*:void*/ {
      var button/*:Button*/ =AS3.as( cmp,  Ext.button.Button);
      button && button.enableToggle && button.toggle(state);
    });
  }/*

  protected*/ function pressHandler()/*:void*/ {
    this.setToggleState$CGCg(true);
  }/*

  protected*/ function unpressHandler()/*:void*/ {
    this.setToggleState$CGCg(false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      _triggeredByUser$CGCg: false,
      _pressed$CGCg: false,
      constructor: ToggleComponentAction$,
      super$CGCg: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      getPressed: get$pressed,
      setPressed: set$pressed,
      toggle$CGCg: toggle,
      setToggleState$CGCg: setToggleState,
      pressHandler: pressHandler,
      unpressHandler: unpressHandler,
      config: {pressed: undefined},
      __accessors__: {triggeredByUser: {get: get$triggeredByUser}},
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.button.Button"
      ]
    };
});
