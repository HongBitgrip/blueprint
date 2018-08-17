Ext.define("com.coremedia.ui.components.StatefulCheckboxGroup", function(StatefulCheckboxGroup) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.CheckboxGroup;

public class StatefulCheckboxGroup extends CheckboxGroup implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulCheckboxGroup";

  public*/ function StatefulCheckboxGroup$(config/*:StatefulCheckboxGroup = null*/) {if(arguments.length<=0)config=null;
    this.super$ci0y(config);
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
      extend: "Ext.form.CheckboxGroup",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulCheckboxGroup",
      constructor: StatefulCheckboxGroup$,
      super$ci0y: function() {
        Ext.form.CheckboxGroup.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.CheckboxGroup",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
