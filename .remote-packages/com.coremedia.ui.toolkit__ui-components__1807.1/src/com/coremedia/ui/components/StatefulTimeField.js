Ext.define("com.coremedia.ui.components.StatefulTimeField", function(StatefulTimeField) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;
import ext.form.field.TimeField;

[ResourceBundle('com.coremedia.ui.UI')]
public class StatefulTimeField extends TimeField implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulTimeField";

  public*/ function StatefulTimeField$(config/*:StatefulTimeField = null*/) {if(arguments.length<=0)config=null;
    var defaultConfig/*:StatefulTimeField*/ = AS3.cast(StatefulTimeField,{});
    defaultConfig.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$z_dj(AS3.cast(StatefulTimeField,Ext.apply({}, config, defaultConfig)));
    if (!this.ariaHelp && this.format && !this.formatText) {
      this.ariaHelp = this.resourceManager.getString('com.coremedia.ui.UI', 'TimeFormat_text', [this.format]);
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
      extend: "Ext.form.field.Time",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulTimeField",
      constructor: StatefulTimeField$,
      super$z_dj: function() {
        Ext.form.field.Time.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.form.field.Time",
        "com.coremedia.ui.UI_properties",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
