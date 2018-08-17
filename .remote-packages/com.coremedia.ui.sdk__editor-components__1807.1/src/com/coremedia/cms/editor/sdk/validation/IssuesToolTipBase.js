Ext.define("com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase", function(IssuesToolTipBase) {/*package com.coremedia.cms.editor.sdk.validation {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import ext.tip.ToolTip;

public class IssuesToolTipBase extends ToolTip implements IValidationStateMixin{

  public*/ function IssuesToolTipBase$(config/*:IssuesToolTipBase = null*/) {if(arguments.length<=0)config=null;
    this.super$Z9nV(config);
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
      extend: "Ext.tip.ToolTip",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      constructor: IssuesToolTipBase$,
      super$Z9nV: function() {
        Ext.tip.ToolTip.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tip.ToolTip",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
