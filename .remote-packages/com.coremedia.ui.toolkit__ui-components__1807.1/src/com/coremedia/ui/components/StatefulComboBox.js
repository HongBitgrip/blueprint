Ext.define("com.coremedia.ui.components.StatefulComboBox", function(StatefulComboBox) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.field.ComboBox;

public class StatefulComboBox extends ComboBox implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulComboBox";

  public*/ function StatefulComboBox$(config/*:StatefulComboBox = null*/) {if(arguments.length<=0)config=null;
    config.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$QNMT(config);
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
      extend: "Ext.form.field.ComboBox",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulComboBox",
      constructor: StatefulComboBox$,
      super$QNMT: function() {
        Ext.form.field.ComboBox.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.ComboBox",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
