Ext.define("com.coremedia.ui.components.StatefulTextField", function(StatefulTextField) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import ext.form.field.TextField;

public class StatefulTextField extends TextField implements IValidationStateMixin, IHighlightableMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulTextField";

  public*/ function StatefulTextField$(config/*:StatefulTextField = null*/) {if(arguments.length<=0)config=null;
    config.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$y7ED(config);
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

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Text",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      alias: "widget.com.coremedia.ui.config.statefulTextField",
      constructor: StatefulTextField$,
      super$y7ED: function() {
        Ext.form.field.Text.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.Text",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
