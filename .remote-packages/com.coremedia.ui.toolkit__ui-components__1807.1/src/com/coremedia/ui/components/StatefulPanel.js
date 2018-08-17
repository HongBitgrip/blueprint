Ext.define("com.coremedia.ui.components.StatefulPanel", function(StatefulPanel) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.panel.Panel;

public class StatefulPanel extends Panel implements IValidationStateMixin{

  public static const xtype:String = "com.coremedia.ui.config.statefulPanel";

  public*/ function StatefulPanel$(config/*:StatefulPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$1Rt4(config);
    this.initValidationStateMixin();
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
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulPanel",
      constructor: StatefulPanel$,
      super$1Rt4: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
