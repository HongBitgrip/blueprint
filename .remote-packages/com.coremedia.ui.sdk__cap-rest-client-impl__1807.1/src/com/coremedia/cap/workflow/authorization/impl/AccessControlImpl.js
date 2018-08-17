Ext.define("com.coremedia.cap.workflow.authorization.impl.AccessControlImpl", function(AccessControlImpl) {/*package com.coremedia.cap.workflow.authorization.impl {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.*;
import com.coremedia.cap.workflow.authorization.AccessControl;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.UrlUtil;

import ext.util.Observable;

public class AccessControlImpl extends Observable implements AccessControl {

  public*/ function mayRead(workflowObject/*:WorkflowObject*/)/*:**/ {
    return this.mayPerform$FRHz(workflowObject, com.coremedia.cap.workflow.authorization.impl.Right.READ);
  }/*

  public*/ function mayWrite(workflowObject/*:WorkflowObject*/)/*:**/ {
    return this.mayPerform$FRHz(workflowObject, com.coremedia.cap.workflow.authorization.impl.Right.WRITE);
  }/*

  public*/ function mayStart(process/*:Process*/)/*:**/ {
    return this.mayPerform$FRHz(process, com.coremedia.cap.workflow.authorization.impl.Right.PROCESS_START);
  }/*

  public*/ function maySuspend(process/*:Process*/)/*:**/ {
    return this.mayPerform$FRHz(process, com.coremedia.cap.workflow.authorization.impl.Right.PROCESS_SUSPEND);
  }/*

  public*/ function mayResume(process/*:Process*/)/*:**/ {
    return this.mayPerform$FRHz(process, com.coremedia.cap.workflow.authorization.impl.Right.PROCESS_RESUME);
  }/*

  public*/ function mayAbort(process/*:Process*/)/*:**/ {
    return this.mayPerform$FRHz(process, com.coremedia.cap.workflow.authorization.impl.Right.PROCESS_ABORT);
  }/*

  public*/ function mayAccept(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_ACCEPT);
  }/*

  public*/ function mayCancel(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_CANCEL);
  }/*

  public*/ function mayAssign(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_ASSIGN);
  }/*

  public*/ function mayReject(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_REJECT);
  }/*

  public*/ function mayDelegate(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_DELEGATE);
  }/*

  public*/ function mayComplete(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_COMPLETE);
  }/*

  public*/ function maySkip(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_SKIP);
  }/*

  public*/ function mayRetry(task/*:Task*/)/*:**/ {
    return this.mayPerform$FRHz(task, com.coremedia.cap.workflow.authorization.impl.Right.TASK_RETRY);
  }/*

  public*/ function mayCreate(processDefintion/*:ProcessDefinition*/)/*:**/ {
    return this.mayPerform$FRHz(processDefintion, com.coremedia.cap.workflow.authorization.impl.Right.PROCESS_CREATE);
  }/*
  
  private*/ function mayPerform(object/*:**/, right/*:Right*/)/*:**/ {
    var rightsBeanId/*:String*/ = com.coremedia.ui.util.UrlUtil.addMatrixParameters(AS3.cast(com.coremedia.ui.data.RemoteBean,object).getUriPath() + "/rights", {
      "for": com.coremedia.cap.common.SESSION.getUser().getUriPath().replace(/\//g, '_')
    });
    var workflowObjectRights = AS3.cast(com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights,com.coremedia.ui.data.beanFactory.getRemoteBean(rightsBeanId));
    var hasRight/*:**/ = workflowObjectRights.hasRight(right);
    if (hasRight === undefined) {
      return undefined;
    }
    return Boolean(hasRight);
  }/*
}*/function AccessControlImpl$() {this.super$FRHz();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.cap.workflow.authorization.AccessControl"],
      mayRead: mayRead,
      mayWrite: mayWrite,
      mayStart: mayStart,
      maySuspend: maySuspend,
      mayResume: mayResume,
      mayAbort: mayAbort,
      mayAccept: mayAccept,
      mayCancel: mayCancel,
      mayAssign: mayAssign,
      mayReject: mayReject,
      mayDelegate: mayDelegate,
      mayComplete: mayComplete,
      maySkip: maySkip,
      mayRetry: mayRetry,
      mayCreate: mayCreate,
      mayPerform$FRHz: mayPerform,
      super$FRHz: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      constructor: AccessControlImpl$,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.authorization.AccessControl",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.UrlUtil"
      ],
      uses: [
        "com.coremedia.cap.workflow.authorization.impl.Right",
        "com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights"
      ]
    };
});
