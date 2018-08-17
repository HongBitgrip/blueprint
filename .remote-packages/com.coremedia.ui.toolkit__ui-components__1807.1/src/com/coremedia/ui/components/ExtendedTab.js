Ext.define("com.coremedia.ui.components.ExtendedTab", function(ExtendedTab) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.tab.Tab;

public class ExtendedTab extends Tab implements IHighlightableMixin, IValidationStateMixin {

  public*/ function ExtendedTab$(config/*:ExtendedTab = null*/) {if(arguments.length<=0)config=null;
    this.super$MKP8(config);
    this.initValidationStateMixin();
  }/*

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Tab",
      mixins: [
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      constructor: ExtendedTab$,
      super$MKP8: function() {
        Ext.tab.Tab.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tab.Tab",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
