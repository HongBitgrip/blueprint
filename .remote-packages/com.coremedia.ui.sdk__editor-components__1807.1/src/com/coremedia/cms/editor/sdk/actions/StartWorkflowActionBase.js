Ext.define("com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase", function(StartWorkflowActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.Ext;

import mx.resources.ResourceManager;

/**
 * Start a workflow for the content object indicated by the valueExpression parameter.
 * If possible, the change set to be processed by the workflow is extended to include
 * related resources that are required for the publication to succeed.
 *
 * <p>The process definition to be used is specified as the processName config parameter.
 * The name of the workflow variable that will contain the set of content
 * objects to be published is specified as the changeSetVariableName config parameter.
 * If the config parameter commentVariableName is given, a dialog is shown that
 * allows the user to enter a comment, which is stored in the given workflow variable.</p>
 * /
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class StartWorkflowActionBase extends ParameterizedBeanAction {
  private var processName:String;
  private var changeSetVariableName:String;
  private var subjectVariableName:String;
  private var subjectValueExpression:ValueExpression;
  private var commentVariableName:String;
  private var commentValueExpression:ValueExpression;
  private var contentSet:CapList;
  [ArrayElementType("com.coremedia.cap.user.Member")]
  private var assignedMembers:Array;
  private var callback:Function;

  /**
   * @param config the config object
   * /
  public*/ function StartWorkflowActionBase$(config/*:StartWorkflowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$7evz(AS3.cast(com.coremedia.cms.editor.sdk.actions.StartWorkflowAction,Ext.apply({restMethod: "startWorkflow", writeJson: true},  config)));

    this.processName$7evz = AS3.getBindable(config,"processName");
    this.changeSetVariableName$7evz = AS3.getBindable(config,"changeSetVariableName");
    this.subjectVariableName$7evz = AS3.getBindable(config,"subjectVariableName");
    this.subjectValueExpression$7evz = AS3.getBindable(config,"subjectValueExpression");
    this.commentVariableName$7evz = AS3.getBindable(config,"commentVariableName");
    this.commentValueExpression$7evz = AS3.getBindable(config,"commentValueExpression");
    this.contentSet$7evz = AS3.getBindable(config,"contentSet");
    this.assignedMembers$7evz = AS3.getBindable(config,"assignedMembers");
    this.callback$7evz = AS3.getBindable(config,"callback");
  }/*

  override protected*/ function makeRequestParameters(bean/*:RemoteBean*/)/*:Object*/ {
    var comment/*:**/ = this.commentValueExpression$7evz.getValue();
    var subject/*:**/ = this.subjectValueExpression$7evz.getValue();
    return {
      processName: this.processName$7evz,
      changeSetVariableName: this.changeSetVariableName$7evz,
      commentVariableName: this.commentVariableName$7evz,
      comment: (comment ? comment : ""),
      subjectVariableName: this.subjectVariableName$7evz,
      subject: (subject ? subject : ""),
      assignedMembers: this.assignedMembers$7evz ? this.assignedMembers$7evz : [],
      contentSet: this.contentSet$7evz
    };
  }/*

  override protected*/ function handleResult(methodResponse/*:RemoteServiceMethodResponse*/, bean/*:RemoteBean*/)/*:void*/ {
    // The bean might have been checked in.
    // We need not wait for changes performed in the workflow.
    bean.invalidate();
    this.callback$7evz.call(null);

    if (methodResponse.response.status >= 300) {
      var error/*:RemoteError*/ = methodResponse.getError();
      var errorName/*:String*/ = error.errorName;
      if (errorName === "ALREADY_PUBLISHED") {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_noopMessage_title'),
          mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_noopMessage_text'));
      } else {
        var message/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', "startWorkflow_failedMessage_" + errorName + "_text");
        if (!message) {
          message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_failedMessage_text');
        }
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_failedMessage_title'),
          message);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction",
      processName$7evz: null,
      changeSetVariableName$7evz: null,
      subjectVariableName$7evz: null,
      subjectValueExpression$7evz: null,
      commentVariableName$7evz: null,
      commentValueExpression$7evz: null,
      contentSet$7evz: null,
      assignedMembers$7evz: null,
      callback$7evz: null,
      constructor: StartWorkflowActionBase$,
      super$7evz: function() {
        com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction.prototype.constructor.apply(this, arguments);
      },
      makeRequestParameters: makeRequestParameters,
      handleResult: handleResult,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.StartWorkflowAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
