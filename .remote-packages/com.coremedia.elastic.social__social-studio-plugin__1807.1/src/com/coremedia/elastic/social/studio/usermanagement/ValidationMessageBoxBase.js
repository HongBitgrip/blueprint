Ext.define("com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase", function(ValidationMessageBoxBase) {/*package com.coremedia.elastic.social.studio.usermanagement {

import com.coremedia.cms.editor.sdk.components.StudioDialog;

import ext.Ext;
import ext.button.Button;

public class ValidationMessageBoxBase extends StudioDialog {
  public static const ID:String = "cm-elastic-social-userdetail-validation-message-box";
  public static const DISCARD_BUTON_ID:String = "cm-elastic-social-userdetail-validation-message-box-discard-button";
  public static const CORRECT_BUTTON_ID:String = "cm-elastic-social-userdetail-validation-message-box-correct-button";
  protected static const MESSAGE_FIELD_ID:String = "cm-elastic-social-userdetail-validation-message-box-message";

  private var discardButton:Button;

  public*/ function ValidationMessageBoxBase$(config/*:ValidationMessageBox = null*/) {if(arguments.length<=0)config=null;
    this.super$mY08(config);
  }/*

  //start config properties
  internal native function get discardCallback():Function;

  // end config properties

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    if (!this.discardCallback) {
      this.getDiscardButton$mY08().hide();
    }
  }/*

  protected*/ function discard()/*:void*/ {
    this.close();
    if (this.discardCallback) {
      this.discardCallback();
    }
  }/*


  override public*/ function close()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.close.call(this);
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.destroy.call(this);
  }/*

  protected*/ function correct()/*:void*/ {
    this.close();
  }/*

  private*/ function getDiscardButton()/*:Button*/ {
    if (!this.discardButton$mY08) {
      this.discardButton$mY08 =AS3.as( Ext.getCmp(ValidationMessageBoxBase.DISCARD_BUTON_ID),  Ext.button.Button);
    }

    return this.discardButton$mY08;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      discardButton$mY08: null,
      constructor: ValidationMessageBoxBase$,
      super$mY08: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      discard: discard,
      close: close,
      correct: correct,
      getDiscardButton$mY08: getDiscardButton,
      statics: {
        ID: "cm-elastic-social-userdetail-validation-message-box",
        DISCARD_BUTON_ID: "cm-elastic-social-userdetail-validation-message-box-discard-button",
        CORRECT_BUTTON_ID: "cm-elastic-social-userdetail-validation-message-box-correct-button",
        MESSAGE_FIELD_ID: "cm-elastic-social-userdetail-validation-message-box-message"
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.components.StudioDialog"
      ]
    };
});
