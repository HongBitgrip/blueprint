Ext.define("com.coremedia.ui.components.StatefulCheckbox", function(StatefulCheckbox) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.field.Checkbox;

[PublicApi]
public class StatefulCheckbox extends Checkbox implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulCheckbox";

  public*/ function StatefulCheckbox$(config/*:StatefulCheckbox = null*/) {if(arguments.length<=0)config=null;
    config.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$Wz03(config);
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
      extend: "Ext.form.field.Checkbox",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.statefulCheckbox",
      constructor: StatefulCheckbox$,
      super$Wz03: function() {
        Ext.form.field.Checkbox.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.Checkbox",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
