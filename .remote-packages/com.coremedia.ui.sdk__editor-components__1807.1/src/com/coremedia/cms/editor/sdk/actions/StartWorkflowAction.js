Ext.define("com.coremedia.cms.editor.sdk.actions.StartWorkflowAction", function(StartWorkflowAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
/**

 Start a workflow for the content object indicated by the valueExpression parameter. If possible, the change set to
 be processed by the workflow is extended to include related resources that are required for the publication to succeed.
 <p>The process definition to be used is specified as the processName config parameter. The name of the workflow
 variable that will contain the set of content objects to be published is specified as the changeSetVariableName
 config parameter. If the config parameter commentVariableName is given, a dialog is shown that allows the user to
 enter a comment, which is stored in the given workflow variable.</p>

 * /
public class StartWorkflowAction extends StartWorkflowActionBase{

    import com.coremedia.collaboration.controlroom.rest.CapList;
    import com.coremedia.ui.data.ValueExpression;

    public*/function StartWorkflowAction$(config/*:StartWorkflowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase,{});
    var defaults_$1/*:StartWorkflowAction*/ =AS3.cast(StartWorkflowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JhcC(config_$1);
  }/*

    /**
     * An expression evaluating to the subject to be used.
     * /
    [Bindable]
    public var subjectValueExpression:ValueExpression;

    /**
     * An expression evaluating to the comment to be used.
     * /
    [Bindable]
    public var commentValueExpression:ValueExpression;

    /**
     * The content set to publish.
     * /
    [Bindable]
    public var contentSet:CapList;

    /**
     The name of the process definition.
     * /
    [Bindable]
    public var processName:String;


    /**
     The name of the change set variable.
     * /
    [Bindable]
    public var changeSetVariableName:String;


    /**
     The name of the subject variable, or undefined, if subjects are not supported.
     * /
    [Bindable]
    public var subjectVariableName:String;


    /**
     The name of the comment variable, or undefined, if comments are not supported.
     * /
    [Bindable]
    public var commentVariableName:String;


    /**
     The array of Members, who can be assigned to a Workflow.
     * /
    [Bindable]
    public var assignedMembers:Array;


    /**
     Trigger an invalidation.
     * /
    [Bindable]
    public var callback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase",
      constructor: StartWorkflowAction$,
      super$JhcC: function() {
        com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        subjectValueExpression: null,
        commentValueExpression: null,
        contentSet: null,
        processName: null,
        changeSetVariableName: null,
        subjectVariableName: null,
        commentVariableName: null,
        assignedMembers: null,
        callback: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.StartWorkflowActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
