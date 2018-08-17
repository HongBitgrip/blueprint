Ext.define("com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin", function(AddWorkflowPlugin) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A Studio plugin that registers panels for displaying processes and tasks
 of a single process definition. The name of the process definition must be
 given, the panels can be omitted if they are not needed.
 * /
public class AddWorkflowPlugin extends StudioPlugin{

    public*/function AddWorkflowPlugin$(config/*:AddWorkflowPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:AddWorkflowPlugin*/ =AS3.cast(AddWorkflowPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_TaskListPanel_58_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.TaskListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskListPanel,{});
    var collab_AddWorkflowListToolbarButtonsPlugin_60_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin,{});
    AS3.setBindable(collab_AddWorkflowListToolbarButtonsPlugin_60_9_$1,"processCategory" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"processCategory")));
    AS3.setBindable(collab_AddWorkflowListToolbarButtonsPlugin_60_9_$1,"buttons" , AS3.getBindable(config,"listToolbarButtons"));
    collab_TaskListPanel_58_5_$1.plugins = [collab_AddWorkflowListToolbarButtonsPlugin_60_9_$1];
    var collab_ProcessListPanel_65_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel,{});
    var collab_AddWorkflowListToolbarButtonsPlugin_67_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin,{});
    AS3.setBindable(collab_AddWorkflowListToolbarButtonsPlugin_67_9_$1,"processCategory" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"processCategory")));
    AS3.setBindable(collab_AddWorkflowListToolbarButtonsPlugin_67_9_$1,"buttons" , AS3.getBindable(config,"listToolbarButtons"));
    collab_ProcessListPanel_65_5_$1.plugins = [collab_AddWorkflowListToolbarButtonsPlugin_67_9_$1];
    var collab_InboxDetailPanelWrapper_72_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper,{});
    var collab_AddInboxDetailPanelPlugin_74_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddInboxDetailPanelPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddInboxDetailPanelPlugin,{});
    AS3.setBindable(collab_AddInboxDetailPanelPlugin_74_9_$1,"inboxPanel" , AS3.getBindable(config,"inboxPanel"));
    AS3.setBindable(collab_AddInboxDetailPanelPlugin_74_9_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"processDefinitionName")));
    collab_InboxDetailPanelWrapper_72_5_$1.plugins = [collab_AddInboxDetailPanelPlugin_74_9_$1];
    var collab_ProcessDetailPanelWrapper_79_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper,{});
    var collab_AddProcessDetailPanelPlugin_81_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddProcessDetailPanelPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddProcessDetailPanelPlugin,{});
    AS3.setBindable(collab_AddProcessDetailPanelPlugin_81_9_$1,"processPanel" , AS3.getBindable(config,"pendingPanel"));
    AS3.setBindable(collab_AddProcessDetailPanelPlugin_81_9_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"processDefinitionName")));
    collab_ProcessDetailPanelWrapper_79_5_$1.plugins = [collab_AddProcessDetailPanelPlugin_81_9_$1];
    var collab_FinishedProcessListPanel_86_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel,{});
    var collab_AddFinishedProcessPanelPlugin_88_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddFinishedProcessPanelPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddFinishedProcessPanelPlugin,{});
    AS3.setBindable(collab_AddFinishedProcessPanelPlugin_88_9_$1,"finishedPanel" , AS3.getBindable(config,"finishedPanel"));
    AS3.setBindable(collab_AddFinishedProcessPanelPlugin_88_9_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"processDefinitionName")));
    collab_FinishedProcessListPanel_86_5_$1.plugins = [collab_AddFinishedProcessPanelPlugin_88_9_$1];
    AS3.setBindable(config_$1,"rules" , [collab_TaskListPanel_58_5_$1, collab_ProcessListPanel_65_5_$1, collab_InboxDetailPanelWrapper_72_5_$1, collab_ProcessDetailPanelWrapper_79_5_$1, collab_FinishedProcessListPanel_86_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$d5q0(config_$1);
  }/*

    /** the name of the process definition * /
    [Bindable]
    public var processDefinitionName:String;


    [Bindable]
    public var processCategory:String;


    /**
     a configuration object for the workflowForm to be shown in the inbox list
     for all tasks defined in the given process definition;
     the processDefinitionName attribute of the panel is
     automatically set by this plugin and need not be configured
     * /
    [Bindable]
    public var inboxPanel:com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;


    /**
     a configuration object for the workflowForm to be shown in the pending list
     for instances of the given process definition;
     the processDefinitionName attribute of the panel is
     automatically set by this plugin and need not be configured
     * /
    [Bindable]
    public var pendingPanel:com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;


    /**
     a configuration object for the workflowForm to be shown in the finished list
     for instances of the given process definition;
     the processDefinitionName attribute of the panel is
     automatically set by this plugin and need not be configured
     * /
    [Bindable]
    public var finishedPanel:com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;


    /**
     configuration objects for buttons to be added to the top toolbar of
     the workflow panel configured with this plugin
     * /
    [Bindable]
    public var listToolbarButtons:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: AddWorkflowPlugin$,
      super$d5q0: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {
        processDefinitionName: null,
        processCategory: null,
        inboxPanel: null,
        pendingPanel: null,
        finishedPanel: null,
        listToolbarButtons: null
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.AddFinishedProcessPanelPlugin",
        "com.coremedia.cms.editor.controlroom.workflow.AddInboxDetailPanelPlugin",
        "com.coremedia.cms.editor.controlroom.workflow.AddProcessDetailPanelPlugin",
        "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin",
        "com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.TaskListPanel"
      ]
    };
});
