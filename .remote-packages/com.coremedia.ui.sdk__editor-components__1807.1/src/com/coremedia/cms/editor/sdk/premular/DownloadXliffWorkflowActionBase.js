Ext.define("com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase", function(DownloadXliffWorkflowActionBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.impl.RemoteService;

public class DownloadXliffWorkflowActionBase extends DependencyTrackedAction {

  private var processValueExpression:ValueExpression;
  private var taskValueExpression:ValueExpression;
  private var derivedContentsVariable:String;
  private var masterContentObjectsVariable:String;
  private var filenameVariable:String;
  private var commentVariable:String;

  public*/ function DownloadXliffWorkflowActionBase$(config/*:DownloadXliffWorkflowAction = null*/) {if(arguments.length<=0)config=null;
    this.derivedContentsVariable$lnkH = AS3.getBindable(config,"derivedContentsVariable");
    this.masterContentObjectsVariable$lnkH = AS3.getBindable(config,"masterContentObjectsVariable");
    this.filenameVariable$lnkH = AS3.getBindable(config,"filenameVariable");
    this.commentVariable$lnkH = AS3.getBindable(config,"commentVariable");
    this.processValueExpression$lnkH = AS3.getBindable(config,"processValueExpression");
    this.taskValueExpression$lnkH = AS3.getBindable(config,"taskValueExpression");

    this.super$lnkH(AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "downloadXliff", {handler:AS3.bind( this,"downloadXliff$lnkH")})));
  }/*

  private*/ function downloadXliff()/*:void*/ {
    var uri/*:String*/ = com.coremedia.ui.data.impl.RemoteService.calculateRequestURI("translate/xliffWorkflow") +
            "?process=" + this.getProcessUriPath$lnkH() +
            "&filenameVariable=" + this.filenameVariable$lnkH +
            "&derivedContentsVariable=" + this.derivedContentsVariable$lnkH +
            "&masterContentObjectsVariable=" + this.masterContentObjectsVariable$lnkH +
            "&commentVariable=" + this.commentVariable$lnkH;
    window.open(uri);
  }/*

  private*/ function getProcessUriPath()/*:String*/ {
    var process/*:Process*/ = this.processValueExpression$lnkH.getValue();
    if (process) {
      return process.getUriPath();
    }
    return "";
  }/*


  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (!this.taskValueExpression$lnkH) {
      return false;
    }
    var task/*:Task*/ = this.taskValueExpression$lnkH.getValue();
    return !task || !task.isAccepted() || task.getPerformer() !== com.coremedia.cap.common.SESSION.getUser();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      processValueExpression$lnkH: null,
      taskValueExpression$lnkH: null,
      derivedContentsVariable$lnkH: null,
      masterContentObjectsVariable$lnkH: null,
      filenameVariable$lnkH: null,
      commentVariable$lnkH: null,
      constructor: DownloadXliffWorkflowActionBase$,
      super$lnkH: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      downloadXliff$lnkH: downloadXliff,
      getProcessUriPath$lnkH: getProcessUriPath,
      calculateDisabled: calculateDisabled,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.impl.RemoteService"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.ActionConfigUtil"]
    };
});
