Ext.define("com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase", function(SingleLinkEditorBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.FieldContainer;

public class SingleLinkEditorBase extends FieldContainer implements IValidationStateMixin {
  protected static const LINK_FIELD_ITEM_ID:String = "target";

  public*/ function SingleLinkEditorBase$(config/*:SingleLinkEditor = null*/) {if(arguments.length<=0)config=null;
    this.super$LJpJ(config);
    this.initValidationStateMixin();
    this.addListener("validationStateChanged",AS3.bind( this,"onValidationChanged$LJpJ"));
    this.addListener("validationMessageChanged",AS3.bind( this,"onValidationChanged$LJpJ"));
    this.onValidationChanged$LJpJ();
  }/*

  private*/ function onValidationChanged()/*:void*/ {
    var linkField/*:SingleLinkField*/ =AS3.as( this.queryById(SingleLinkEditorBase.LINK_FIELD_ITEM_ID),  com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField);
    AS3.setBindable(linkField,"validationState" , AS3.getBindable(this,"validationState"));
    AS3.setBindable(linkField,"validationMessage" , AS3.getBindable(this,"validationMessage"));
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
      extend: "Ext.form.FieldContainer",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      constructor: SingleLinkEditorBase$,
      super$LJpJ: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      onValidationChanged$LJpJ: onValidationChanged,
      statics: {LINK_FIELD_ITEM_ID: "target"},
      requires: [
        "Ext.form.FieldContainer",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField"]
    };
});
