Ext.define("com.coremedia.cms.studio.im.ImageMapPanelBase", function(ImageMapPanelBase) {/*package com.coremedia.cms.studio.im {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.panel.Panel;

public class ImageMapPanelBase extends Panel implements IValidationStateMixin {
  public*/ function ImageMapPanelBase$(config/*:ImageMapPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$aby7(config);
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
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      constructor: ImageMapPanelBase$,
      super$aby7: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
