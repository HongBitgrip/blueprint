Ext.define("com.coremedia.ui.components.StatefulRadioGroup", function(StatefulRadioGroup) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.RadioGroup;

public class StatefulRadioGroup extends RadioGroup implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulRadioGroup";

  public*/ function StatefulRadioGroup$(config/*:StatefulRadioGroup = null*/) {if(arguments.length<=0)config=null;
    this.super$6jk4(config);
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
      extend: "Ext.form.RadioGroup",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulRadioGroup",
      constructor: StatefulRadioGroup$,
      super$6jk4: function() {
        Ext.form.RadioGroup.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.RadioGroup",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
