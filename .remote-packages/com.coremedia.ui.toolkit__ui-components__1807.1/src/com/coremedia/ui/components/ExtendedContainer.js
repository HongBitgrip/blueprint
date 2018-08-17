Ext.define("com.coremedia.ui.components.ExtendedContainer", function(ExtendedContainer) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.container.Container;

public class ExtendedContainer extends Container implements IValidationStateMixin, IHighlightableMixin {

  public*/ function ExtendedContainer$(config/*:ExtendedContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$by3q(config);
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
      extend: "Ext.container.Container",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      constructor: ExtendedContainer$,
      super$by3q: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
