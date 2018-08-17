Ext.define("com.coremedia.cms.editor.sdk.actions.DisapproveActionBase", function(DisapproveActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cms.editor.sdk.bulkOperation.DisapproveResultWindow;
import com.coremedia.ui.actions.ValueExpressionAction;

import ext.ComponentManager;

/**
 * An ext.Action that disapproves the content defined in the given value expression.
 * /
[PublicApi]
public class DisapproveActionBase extends ContentAction implements ValueExpressionAction {

  /**
   * Create an ext.Action that disapproves the content defined in the given value expression.
   *
   * @param config the config object
   * /
  public*/ function DisapproveActionBase$(config/*:DisapproveAction = null*/) {if(arguments.length<=0)config=null;
    this.super$Xgjn(AS3.cast(com.coremedia.cms.editor.sdk.actions.DisapproveAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'disapprove', {handler:AS3.bind( this,"disapprove$Xgjn")})));
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsDisapprove/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      var lifecycleStatus/*:String*/ = content.getLifecycleStatus();
      
      // TODO: We should check whether the content is place approved or version approved.
      // The lifecycle status is too weak.
      
      if (!content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.APPROVE)) {
        return true;
      } else if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.DELETED) {
        return true;
      } else if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.PUBLISHED) {
        return true;
      } else if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.APPROVED) {
        needsDisapprove = true;
      }
    }
    return !needsDisapprove;
  }/*

  private*/ function disapprove()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    if (!contents || !contents.length) {
      return;
    }

    var content/*:Content*/ = contents[0];
    content.getRepository().getPublicationService().disapproveAll(contents,AS3.bind( this,"completed$Xgjn"));
  }/*

  private*/ function completed(result/*:BulkOperationResult*/)/*:void*/ {
    // Show error message box if disapprove did not succeed.
    if (!result['successful']) {
      var disapproveResultWindowCfg/*:DisapproveResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.DisapproveResultWindow,{});
      AS3.setBindable(disapproveResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(disapproveResultWindowCfg).show();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      metadata: {"": ["PublicApi"]},
      constructor: DisapproveActionBase$,
      super$Xgjn: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      disapprove$Xgjn: disapprove,
      completed$Xgjn: completed,
      requires: [
        "Ext.ComponentManager",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.actions.ValueExpressionAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DisapproveAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.DisapproveResultWindow"
      ]
    };
});
