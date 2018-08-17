Ext.define("com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl", function(WorkflowRepositoryImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.workflow.*;
import com.coremedia.cap.workflow.authorization.AccessControl;
import com.coremedia.cap.workflow.authorization.impl.AccessControlImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="workflow")]
public class WorkflowRepositoryImpl extends RemoteBeanImpl implements WorkflowRepository {
  private const GET_PROCESSDEFINITION_URI:String = "getProcessDefinition";

  private var worklistService:WorklistServiceImpl;
  private var accessControl:AccessControl;
  private var workflowContentService:WorkflowContentService;

  public*/ function WorkflowRepositoryImpl$(config/*:* = undefined*/) {
    this.super$$qPw(config);
  }/*

  public*/ function getWorklistService()/*:WorklistService*/ {
    if (!this.worklistService$$qPw) {
      this.worklistService$$qPw = new com.coremedia.cap.workflow.impl.WorklistServiceImpl();
    }
    return this.worklistService$$qPw;
  }/*

  public*/ function getAccessControl()/*:AccessControl*/ {
    if (!this.accessControl$$qPw) {
      this.accessControl$$qPw = new com.coremedia.cap.workflow.authorization.impl.AccessControlImpl();
    }
    return this.accessControl$$qPw;
  }/*

  public*/ function getProcessDefinition(idOrName/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.get(this.GET_PROCESSDEFINITION_URI$$qPw) + "/" + idOrName, "GET", true);
    rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var processDefinition/*:**/ = com.coremedia.ui.data.impl.RemoteService.resolveResponse(rsmr.response.responseText, "");
      if (callback) {
        callback(processDefinition);
      }
    });
  }/*

  public*/ function reloadWorklists()/*:void*/ {
    if (this.worklistService$$qPw) {
      this.worklistService$$qPw.loadWorklists();
    }
  }/*

  public*/ function getWorkflowContentService()/*:WorkflowContentService*/ {
    if (!this.workflowContentService$$qPw) {
      this.workflowContentService$$qPw = new com.coremedia.cap.workflow.impl.WorkflowContentServiceImpl();
    }
    return this.workflowContentService$$qPw;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.workflow.WorkflowRepository"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow"
        ]
      ]},
      GET_PROCESSDEFINITION_URI$$qPw: "getProcessDefinition",
      worklistService$$qPw: null,
      accessControl$$qPw: null,
      workflowContentService$$qPw: null,
      constructor: WorkflowRepositoryImpl$,
      super$$qPw: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getWorklistService: getWorklistService,
      getAccessControl: getAccessControl,
      getProcessDefinition: getProcessDefinition,
      reloadWorklists: reloadWorklists,
      getWorkflowContentService: getWorkflowContentService,
      requires: [
        "com.coremedia.cap.workflow.WorkflowRepository",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.cap.workflow.authorization.impl.AccessControlImpl",
        "com.coremedia.cap.workflow.impl.WorkflowContentServiceImpl",
        "com.coremedia.cap.workflow.impl.WorklistServiceImpl"
      ]
    };
});
