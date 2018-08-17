Ext.define("com.coremedia.ui.components.StatefulQuickTip", function(StatefulQuickTip) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.skins.TipSkin;

import ext.event.Event;
import ext.tip.QuickTip;

public class StatefulQuickTip extends QuickTip implements IValidationStateMixin{

  public static const xtype:String = "com.coremedia.ui.config.statefulQuickTip";

  //noinspection JSFieldCanBeLocal
  private var lastTipCfg:*;

  public*/ function StatefulQuickTip$(config/*:StatefulQuickTip = null*/) {if(arguments.length<=0)config=null;
    this.super$M7Ek(config);
    this.initValidationStateMixin();
  }/*

  override public*/ function show(animateTarget/*:* = null*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(arguments.length){case 0:animateTarget=null;case 1:callback=null;case 2:scope=null;}
    var activeTarget/*:**/ = this.getActiveTarget$M7Ek();
    if (activeTarget) {
      this.setUI(activeTarget.ui || this.initialConfig.ui || com.coremedia.ui.skins.TipSkin.DEFAULT.getSkin());
      AS3.setBindable(this,"validationState" , activeTarget.validationState || this.initialConfig.validationState);
    }
    Ext.tip.QuickTip.prototype.show.call(this,animateTarget, callback, scope);
  }/*

  // overriding private api
  //noinspection JSUnusedGlobalSymbols
  internal*/ function getTipCfg(target/*:**/, event/*:Event*/)/*:**/ {arguments=Array.prototype.slice.call(arguments);
    // store the result of last function call
    return this.lastTipCfg$M7Ek = this.callParent(arguments);
  }/*

  // overriding private api
  //noinspection JSUnusedGlobalSymbols
  internal*/ function doTargetOver(target/*:**/, xy/*:**/, event/*:Event*/)/*:void*/ {arguments=Array.prototype.slice.call(arguments);
    // if getTipCfg was called by parent and it was not undefined, the configuration of activeTarget changed
    this.lastTipCfg$M7Ek = null;
    this.callParent(arguments);
    if (this.lastTipCfg$M7Ek) {
      var activeTarget/*:**/ = this.getActiveTarget$M7Ek();
      // this should not be necessary, but just to be sure
      if (activeTarget) {
        activeTarget.ui = target.ui;
        activeTarget.validationState = target.validationState;
      }
    }
  }/*

  private*/ function getActiveTarget()/*:**/ {
    return this["activeTarget"];
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tip.QuickTip",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulQuickTip",
      lastTipCfg$M7Ek: undefined,
      constructor: StatefulQuickTip$,
      super$M7Ek: function() {
        Ext.tip.QuickTip.prototype.constructor.apply(this, arguments);
      },
      show: show,
      getTipCfg: getTipCfg,
      doTargetOver: doTargetOver,
      getActiveTarget$M7Ek: getActiveTarget,
      requires: [
        "Ext.tip.QuickTip",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.skins.TipSkin"]
    };
});
