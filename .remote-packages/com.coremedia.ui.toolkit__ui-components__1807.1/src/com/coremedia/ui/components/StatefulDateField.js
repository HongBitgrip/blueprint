Ext.define("com.coremedia.ui.components.StatefulDateField", function(StatefulDateField) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;
import ext.form.field.DateField;

[ResourceBundle('com.coremedia.ui.UI')]
public class StatefulDateField extends DateField implements IValidationStateMixin{

  public static const xtype:String = "com.coremedia.ui.config.statefulDateField";

  public*/ function StatefulDateField$(config/*:StatefulDateField = null*/) {if(arguments.length<=0)config=null;
    var defaultConfig/*:StatefulDateField*/ = AS3.cast(StatefulDateField,{});
    defaultConfig.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$yp6i(AS3.cast(StatefulDateField,Ext.apply({}, config, defaultConfig)));
    if (!this.ariaHelp && this.format && !this.formatText) {
      this.ariaHelp = this.resourceManager.getString('com.coremedia.ui.UI', 'DateFormat_text', [this.format]);
    }
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
      extend: "Ext.form.field.Date",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulDateField",
      constructor: StatefulDateField$,
      super$yp6i: function() {
        Ext.form.field.Date.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.form.field.Date",
        "com.coremedia.ui.UI_properties",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
