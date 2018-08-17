Ext.define("com.coremedia.cms.editor.sdk.actions.CheckInActionBase", function(CheckInActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.results.CheckInResult;
import com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow;

import ext.ComponentManager;

[PublicApi]
public class CheckInActionBase extends ContentAction {
  /**
   * Create an ext.Action that checks-in the content defined in the given value expression.
   *
   * @param config the config object
   * /
  public*/ function CheckInActionBase$(config/*:CheckInAction = null*/) {if(arguments.length<=0)config=null;
    this.super$88b9(AS3.cast(com.coremedia.cms.editor.sdk.actions.CheckInAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'checkIn', {handler:AS3.bind( this,"checkIn$88b9")})));
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsCheckIn/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.isCheckedOut()) {
        if (!(content.isCheckedOutByCurrentSession() ||
                content.isCheckedOutByOther() && content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.SUPERVISE))) {
          return true;
        }
        needsCheckIn = true;
      }
    }
    return !needsCheckIn;
  }/*

  private*/ function checkIn()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    if (!contents || !contents.length) {
      return;
    }

    var content/*:Content*/ = contents[0];
    content.getRepository().checkInAll(contents,AS3.bind( this,"completed$88b9"));
  }/*

  private*/ function completed(result/*:CheckInResult*/)/*:void*/ {
    // Show error message box if disapprove did not succeed.
    if (!result.successful) {
      var checkInResultWindowCfg/*:CheckInResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow,{});
      AS3.setBindable(checkInResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(checkInResultWindowCfg).show();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: CheckInActionBase$,
      super$88b9: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      checkIn$88b9: checkIn,
      completed$88b9: completed,
      requires: [
        "Ext.ComponentManager",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow"
      ]
    };
});
