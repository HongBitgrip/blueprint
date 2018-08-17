Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase", function(ChangedProfileConfirmationWindowBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import com.coremedia.cms.editor.sdk.components.StudioDialog;

public class ChangedProfileConfirmationWindowBase extends StudioDialog {
  public static const ID:String = "cm-elastic-social-userdetail-confirm-changes-window";

  private var applyCallback:Function;
  private var discardCallback:Function;

  public*/ function ChangedProfileConfirmationWindowBase$(config/*:ChangedProfileConfirmationWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$ljZH(config);
  }/*

  protected*/ function apply()/*:void*/ {
    this.close();
    if (this.applyCallback$ljZH) {
      this.applyCallback$ljZH();
    }
  }/*

  protected*/ function discard()/*:void*/ {
    this.close();
    if (this.discardCallback$ljZH) {
      this.discardCallback$ljZH();
    }
  }/*

  protected*/ function cancel()/*:void*/ {
    this.close();
  }/*

  public*/ function setApply(applyCallback/*:Function*/)/*:void*/ {
    this.applyCallback$ljZH = applyCallback;
  }/*

  public*/ function setDiscard(discardCallback/*:Function*/)/*:void*/ {
    this.discardCallback$ljZH = discardCallback;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      applyCallback$ljZH: null,
      discardCallback$ljZH: null,
      constructor: ChangedProfileConfirmationWindowBase$,
      super$ljZH: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      apply: apply,
      discard: discard,
      cancel: cancel,
      setApply: setApply,
      setDiscard: setDiscard,
      statics: {ID: "cm-elastic-social-userdetail-confirm-changes-window"},
      requires: ["com.coremedia.cms.editor.sdk.components.StudioDialog"]
    };
});
