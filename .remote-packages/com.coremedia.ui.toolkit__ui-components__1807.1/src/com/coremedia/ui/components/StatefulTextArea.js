Ext.define("com.coremedia.ui.components.StatefulTextArea", function(StatefulTextArea) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ReadOnlyStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.field.TextArea;

public class StatefulTextArea extends TextArea implements IValidationStateMixin, IHighlightableMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulTextArea";

  public*/ function StatefulTextArea$(config/*:StatefulTextArea = null*/) {if(arguments.length<=0)config=null;
    config.readOnlyCls = com.coremedia.ui.mixins.ReadOnlyStateMixin.READ_ONLY_CLS;
    this.super$3T_Q(config);
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
      extend: "Ext.form.field.TextArea",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      alias: "widget.com.coremedia.ui.config.statefulTextArea",
      constructor: StatefulTextArea$,
      super$3T_Q: function() {
        Ext.form.field.TextArea.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.TextArea",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"]
    };
});
