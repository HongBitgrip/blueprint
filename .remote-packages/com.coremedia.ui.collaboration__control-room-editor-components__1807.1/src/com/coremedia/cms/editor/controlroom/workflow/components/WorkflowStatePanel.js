Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanel", function(WorkflowStatePanel) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
/**
 Displays a radio group for the current task using the configured workflowStateTransitions.
 The first radio button of the group shows the current task, while the following buttons show
 the next possible steps for this task.
 The value of the currently selected radio button will be written back to the nextStepVariable
 of the current process just before the 'Apply' button completes the current task.
 * /
public class WorkflowStatePanel extends WorkflowStatePanelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowStatePanel";

    public*/function WorkflowStatePanel$(config/*:WorkflowStatePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase,{});
    var defaults_$1/*:WorkflowStatePanel*/ =AS3.cast(WorkflowStatePanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AG7N(config_$1);
  }/*

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * A value expression that evaluates to the current process.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * A value expression that evaluates to the current task.
     * /
    [Bindable]
    public var bindToTask:ValueExpression;

    /** The process definition name. * /
    [Bindable]
    public var processDefinitionName:String;


    /** The name of the process variable representing the next step. * /
    [Bindable]
    public var nextStepVariable:String;


    /**
     An array of <code>workflowStateTransition</code> objects defining the possible states of a process.

     @see com.coremedia.cms.editor.controlroom.workflow.WorkflowStateTransition
     * /
    [Bindable]
    public var workflowStateTransitions:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowStatePanel",
      constructor: WorkflowStatePanel$,
      super$AG7N: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        bindTo: null,
        bindToTask: null,
        processDefinitionName: null,
        nextStepVariable: null,
        workflowStateTransitions: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
