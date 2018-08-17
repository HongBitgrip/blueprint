Ext.define("com.coremedia.cms.editor.sdk.actions.ApproveActionBase", function(ApproveActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.results.ApproveResult;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.bulkOperation.ApproveResultWindow;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.ComponentManager;

/**
 * An ext.Action that approves the content defined in the given value expression.
 * /
[PublicApi]
public class ApproveActionBase extends ContentAction {

  /**
   * Create an ext.Action that approves the content defined in the given value expression.
   *
   * @param config the config object
   * /
  public*/ function ApproveActionBase$(config/*:ApproveAction = null*/) {if(arguments.length<=0)config=null;
    this.super$1019(AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'approve', {handler:AS3.bind( this,"startApprove$1019")})));
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsApprove/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.isCheckedOutByOther() && !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.SUPERVISE) ||
              !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.APPROVE) ||
              content.getLifecycleStatus() === com.coremedia.cap.content.LifecycleStatus.DELETED) {
        return true;
      }

      var lifecycleStatus/*:String*/ = content.getLifecycleStatus();
      if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.IN_PRODUCTION) {
        needsApprove = true;
      }
    }
    return !needsApprove;
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return !AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).isStateBasedPublicationEnabled() || com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateHidden.call(this);
  }/*

  private*/ function startApprove()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    if (!contents || !contents.length) {
      return;
    }

    var content/*:Content*/ = contents[0];
    content.getRepository().getPublicationService().approveAllWithPath(contents, completed$static);
  }/*

  private static*/ function completed$static(result/*:ApproveResult*/)/*:void*/ {
    // Show error message box if approval did not succeed.
    if (!result.successful) {
      var approveResultWindowCfg/*:ApproveResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.ApproveResultWindow,{});
      AS3.setBindable(approveResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(approveResultWindowCfg).show();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: ApproveActionBase$,
      super$1019: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      calculateHidden: calculateHidden,
      startApprove$1019: startApprove,
      requires: [
        "Ext.ComponentManager",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.ApproveResultWindow",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
