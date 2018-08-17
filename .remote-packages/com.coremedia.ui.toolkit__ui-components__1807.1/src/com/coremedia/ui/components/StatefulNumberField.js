Ext.define("com.coremedia.ui.components.StatefulNumberField", function(StatefulNumberField) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.field.NumberField;

public class StatefulNumberField extends NumberField implements IValidationStateMixin{

  public static const xtype:String = "com.coremedia.ui.config.statefulNumberField";

  public*/ function StatefulNumberField$(config/*:StatefulNumberField = null*/) {if(arguments.length<=0)config=null;
    config.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$dLxn(config);
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
      extend: "Ext.form.field.Number",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulNumberField",
      constructor: StatefulNumberField$,
      super$dLxn: function() {
        Ext.form.field.Number.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.Number",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
