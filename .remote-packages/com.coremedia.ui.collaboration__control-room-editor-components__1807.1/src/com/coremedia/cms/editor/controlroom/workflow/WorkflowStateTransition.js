Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowStateTransition", function(WorkflowStateTransition) {/*package com.coremedia.cms.editor.controlroom.workflow {

import ext.Ext;

import joo.JavaScriptObject;

/**
 * <p>
 *  An instance of this class provides the set of possible successor states
 *  for a given workflow state. Arrays of such objects allow a configuration
 *  of the state chart of a workflow. Such state chart are typically much
 *  smaller than the graph of tasks, because they contain only the user visible
 *  states. The current state of a workflow is typically stored in a process
 *  variable.
 * </p>
 *
 * <p>
 *  Workflow states can be localized as described for the method
 *  <code>getWorkflowStateDisplayName()</code> of the
 *  <code>WorkflowLocalizationUtils</code> class.
 * </p>
 *
 * @see com.coremedia.cms.editor.controlroom.workflow.WorkflowStateTransition
 * @see com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils#getWorkflowStateDisplayName()
 * /
[PublicApi]
public class WorkflowStateTransition extends JavaScriptObject {
  public*/ function WorkflowStateTransition$(config/*:WorkflowStateTransition = null*/) {this.super$7zzq();if(arguments.length<=0)config=null;
    Ext.apply(this, config);
  }/*

  /**
   * The name of the workflow task whose successor states are defined in this object.
   * /
  public var task:String;

  /**
   * The array of successor state names available for the given state. Each name is given as a string.
   * /
  public var nextSteps:Array;

  /**
   * The step that should be selected by default (optional).
   * If no defaultStep is given or the step is not part of nextSteps, the first step in nextSteps is selected.
   * /
  public var defaultStep:String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.JavaScriptObject",
      metadata: {"": ["PublicApi"]},
      constructor: WorkflowStateTransition$,
      super$7zzq: function() {
        joo.JavaScriptObject.prototype.constructor.apply(this, arguments);
      },
      task: null,
      nextSteps: null,
      defaultStep: null,
      requires: [
        "Ext",
        "joo.JavaScriptObject"
      ]
    };
});
