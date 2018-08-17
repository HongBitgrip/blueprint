Ext.define("com.coremedia.cap.workflow.authorization.impl.Right", function(Right) {/*package com.coremedia.cap.workflow.authorization.impl {
/**
 * A right on a {@link com.coremedia.cap.workflow.WorkflowObject}.
 * /
public class Right {

  private var caption:String;*/

  /**
   * private constructor to use only internally.
   * @param caption the caption for the Right instance
   */
  function Right$(caption/*:String*/) {
    this.caption$Ghk0 = caption;
  }/*

  /**
   * Right to {@link com.coremedia.cap.workflow.WorkflowObject#get read} a workflow object's properties
   * /
  public static var READ:Right =*/function READ$static_(){Right.READ=( new Right("READ"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.WorkflowObject#set write} a workflow object's properties
   * /
  public static var WRITE:Right =*/function WRITE$static_(){Right.WRITE=( new Right("WRITE"));}/*;

  /**
   * Right to signal a {@link com.coremedia.cap.workflow.WorkflowObject}.
   * This is a right that is used only internally in the workflow server.
   * /
  public static var SIGNAL:Right =*/function SIGNAL$static_(){Right.SIGNAL=( new Right("SIGNAL"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.ProcessDefinition#create create} a process conforming to a process definition
   * /
  public static var PROCESS_CREATE:Right =*/function PROCESS_CREATE$static_(){Right.PROCESS_CREATE=( new Right("PROCESS_CREATE"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Process#start start} a process
   * /
  public static var PROCESS_START:Right =*/function PROCESS_START$static_(){Right.PROCESS_START=( new Right("PROCESS_START"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Process#suspend suspend} a process
   * /
  public static var PROCESS_SUSPEND:Right =*/function PROCESS_SUSPEND$static_(){Right.PROCESS_SUSPEND=( new Right("PROCESS_SUSPEND"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Process#resume resume} a process
   * /
  public static var PROCESS_RESUME:Right =*/function PROCESS_RESUME$static_(){Right.PROCESS_RESUME=( new Right("PROCESS_RESUME"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Process#abort abort} a process
   * /
  public static var PROCESS_ABORT:Right =*/function PROCESS_ABORT$static_(){Right.PROCESS_ABORT=( new Right("PROCESS_ABORT"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#accept accept} a task.
   * /
  public static var TASK_ACCEPT:Right =*/function TASK_ACCEPT$static_(){Right.TASK_ACCEPT=( new Right("TASK_ACCEPT"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#cancel cancel} a task.
   * /
  public static var TASK_CANCEL:Right =*/function TASK_CANCEL$static_(){Right.TASK_CANCEL=( new Right("TASK_CANCEL"));}/*;

  /**
   * Right to assign a task to a {@link com.coremedia.cap.workflow.Task#assignTo(com.coremedia.cap.user.User) user} or {@link com.coremedia.cap.workflow.Task#assignTo(com.coremedia.cap.user.Group) group}.
   * /
  public static var TASK_ASSIGN:Right =*/function TASK_ASSIGN$static_(){Right.TASK_ASSIGN=( new Right("TASK_ASSIGN"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#reject reject} a task.
   * /
  public static var TASK_REJECT:Right =*/function TASK_REJECT$static_(){Right.TASK_REJECT=( new Right("TASK_REJECT"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#delegate(com.coremedia.cap.user.User) delegate} a task.
   * /
  public static var TASK_DELEGATE:Right =*/function TASK_DELEGATE$static_(){Right.TASK_DELEGATE=( new Right("TASK_DELEGATE"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#complete complete} a task.
   * /
  public static var TASK_COMPLETE:Right =*/function TASK_COMPLETE$static_(){Right.TASK_COMPLETE=( new Right("TASK_COMPLETE"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#skip skip} a task.
   * /
  public static var TASK_SKIP:Right =*/function TASK_SKIP$static_(){Right.TASK_SKIP=( new Right("TASK_SKIP"));}/*;

  /**
   * Right to {@link com.coremedia.cap.workflow.Task#retry retry} a task.
   * /
  public static var TASK_RETRY:Right =*/function TASK_RETRY$static_(){Right.TASK_RETRY=( new Right("TASK_RETRY"));}/*;

  /**
   * Returns the caption of this enum as String
   * @return the caption of this enum
   * /
  public*/ function getCaption()/*:String*/ {
    return this.caption$Ghk0;
  }/*

  /**
   * Finds the respective enum element based on the submitted string. Only valid Right Instances
   * will be found and returned.
   * @param caption the Right instance to find
   * @return the found Right instance
   * /
  public static*/ function fromString$static(caption/*:String*/)/*:Right*/ {
    var result/*:**/ = Right[caption];
    if (!(AS3.is(result,  Right))) {
      throw new AS3.Error("bad right definition type name: " + caption);
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      caption$Ghk0: null,
      constructor: Right$,
      getCaption: getCaption,
      statics: {
        READ: undefined,
        WRITE: undefined,
        SIGNAL: undefined,
        PROCESS_CREATE: undefined,
        PROCESS_START: undefined,
        PROCESS_SUSPEND: undefined,
        PROCESS_RESUME: undefined,
        PROCESS_ABORT: undefined,
        TASK_ACCEPT: undefined,
        TASK_CANCEL: undefined,
        TASK_ASSIGN: undefined,
        TASK_REJECT: undefined,
        TASK_DELEGATE: undefined,
        TASK_COMPLETE: undefined,
        TASK_SKIP: undefined,
        TASK_RETRY: undefined,
        fromString: fromString$static,
        __initStatics__: function() {
          READ$static_();
          WRITE$static_();
          SIGNAL$static_();
          PROCESS_CREATE$static_();
          PROCESS_START$static_();
          PROCESS_SUSPEND$static_();
          PROCESS_RESUME$static_();
          PROCESS_ABORT$static_();
          TASK_ACCEPT$static_();
          TASK_CANCEL$static_();
          TASK_ASSIGN$static_();
          TASK_REJECT$static_();
          TASK_DELEGATE$static_();
          TASK_COMPLETE$static_();
          TASK_SKIP$static_();
          TASK_RETRY$static_();
        }
      },
      requires: ["AS3.Error"]
    };
});
