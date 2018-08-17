Ext.define("com.coremedia.cms.editor.controlroom.ProjectsPanelToolbar", function(ProjectsPanelToolbar) {/*package com.coremedia.cms.editor.controlroom{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton;
import com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction;
import com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProjectsPanelToolbar extends Toolbar{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsPanelToolbar";

    public static const CREATE_PROJECT_ITEM_ID:String = "createProject";

    public static const START_PUBLICATION_WORKFLOW_ITEM_ID:String = "startPublicationWorkflow";

    public static const START_TRANSLATION_WORKFLOW_ITEM_ID:String = "startTranslationWorkflow";

    public static const START_PULL_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPullTranslationWorkflow";

    public static const LEAVE_PROJECTS_ITEM_ID:String = "leaveProjects";

    public static const SHOW_PROJECT_ITEM_ID:String = "showProject";

    public*/function ProjectsPanelToolbar$(config/*:ProjectsPanelToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:ProjectsPanelToolbar*/ =AS3.cast(ProjectsPanelToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_ProjectsPanelToolbar_label'));
    var ui_IconButton_47_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_47_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.CREATE_PROJECT_ITEM_ID);
    var collab_CreateProjectAction_49_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction,{});
    AS3.setBindable(collab_CreateProjectAction_49_9_$1,"mode" , "empty");
    AS3.setBindable(collab_CreateProjectAction_49_9_$1,"tooltipMouseOffset" , [0, -40]);
    AS3.setBindable(collab_CreateProjectAction_49_9_$1,"afterCreateHandler" , AS3.getBindable(config,"afterCreateHandler"));
    ui_IconButton_47_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction(collab_CreateProjectAction_49_9_$1);
    var ui_IconButton_54_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.START_PUBLICATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartPublicationWorkflowWindowAction_56_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_56_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_56_9_$1,"workflowNameValueExpression" , AS3.getBindable(config,"workflowNameVE"));
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_56_9_$1,"disabled" , true);
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_56_9_$1,"hidden" , true);
    ui_IconButton_54_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_56_9_$1);
    var ui_IconButton_62_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.START_TRANSLATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartTranslationWorkflowWindowAction_64_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_64_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_64_9_$1,"workflowNameValueExpression" , AS3.getBindable(config,"workflowNameVE"));
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_64_9_$1,"disabled" , true);
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_64_9_$1,"hidden" , true);
    ui_IconButton_62_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_64_9_$1);
    var collab_StartPullTranslationButton_70_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton,{});
    collab_StartPullTranslationButton_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.START_PULL_TRANSLATION_WORKFLOW_ITEM_ID);
    AS3.setBindable(collab_StartPullTranslationButton_70_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    var ui_IconButton_72_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_72_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.SHOW_PROJECT_ITEM_ID);
    var collab_ShowProjectAction_74_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction,{});
    AS3.setBindable(collab_ShowProjectAction_74_9_$1,"projectsVE" , AS3.getBindable(config,"selectedProjectsVE"));
    AS3.setBindable(collab_ShowProjectAction_74_9_$1,"disabled" , true);
    AS3.setBindable(collab_ShowProjectAction_74_9_$1,"hidden" , true);
    ui_IconButton_72_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction(collab_ShowProjectAction_74_9_$1);
    var ui_IconButton_79_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_79_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelToolbar.LEAVE_PROJECTS_ITEM_ID);
    var collab_LeaveProjectsAction_81_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction,{});
    AS3.setBindable(collab_LeaveProjectsAction_81_9_$1,"projectsVE" , AS3.getBindable(config,"selectedProjectsVE"));
    AS3.setBindable(collab_LeaveProjectsAction_81_9_$1,"disabled" , true);
    AS3.setBindable(collab_LeaveProjectsAction_81_9_$1,"hidden" , true);
    ui_IconButton_79_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction(collab_LeaveProjectsAction_81_9_$1);
    config_$1.items = [ui_IconButton_47_5_$1, ui_IconButton_54_5_$1, ui_IconButton_62_5_$1, collab_StartPullTranslationButton_70_5_$1, ui_IconButton_72_5_$1, ui_IconButton_79_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$O3fD(config_$1);
  }/*

    [Bindable]
    public var selectedProjectsVE:ValueExpression;

    [Bindable]
    public var selectedContentsVE:ValueExpression;

    [Bindable]
    public var workflowNameVE:ValueExpression;

    [Bindable]
    public var afterCreateHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsPanelToolbar",
      constructor: ProjectsPanelToolbar$,
      super$O3fD: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedProjectsVE: null,
        selectedContentsVE: null,
        workflowNameVE: null,
        afterCreateHandler: null
      },
      statics: {
        CREATE_PROJECT_ITEM_ID: "createProject",
        START_PUBLICATION_WORKFLOW_ITEM_ID: "startPublicationWorkflow",
        START_TRANSLATION_WORKFLOW_ITEM_ID: "startTranslationWorkflow",
        START_PULL_TRANSLATION_WORKFLOW_ITEM_ID: "startPullTranslationWorkflow",
        LEAVE_PROJECTS_ITEM_ID: "leaveProjects",
        SHOW_PROJECT_ITEM_ID: "showProject"
      },
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction",
        "com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton"
      ]
    };
});
