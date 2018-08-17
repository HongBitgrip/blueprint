Ext.define("com.coremedia.cms.editor.controlroom.ProjectsPanelContextMenu", function(ProjectsPanelContextMenu) {/*package com.coremedia.cms.editor.controlroom{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
import com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction;
public class ProjectsPanelContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsPanelContextMenu";

    public static const PROJECTS_PANEL_CONTEXT_MENU_ITEM_ID:String = "projectsPanelContextMenu";

    public*/function ProjectsPanelContextMenu$(config/*:ProjectsPanelContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:ProjectsPanelContextMenu*/ =AS3.cast(ProjectsPanelContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    config_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsPanelContextMenu.PROJECTS_PANEL_CONTEXT_MENU_ITEM_ID);
    var ui_HideObsoleteSeparatorsPlugin_32_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_32_5_$1];
    var menuItem_35_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_35_5_$1.itemId = "showProject";
    var collab_ShowProjectAction_37_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction,{});
    AS3.setBindable(collab_ShowProjectAction_37_9_$1,"projectsVE" , AS3.getBindable(config,"selectedProjectsVE"));
    menuItem_35_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction(collab_ShowProjectAction_37_9_$1);
    var menuSeparator_41_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_43_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_43_5_$1.itemId = "renameProject";
    var collab_RenameProjectAction_45_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction,{});
    AS3.setBindable(collab_RenameProjectAction_45_9_$1,"projectsVE" , AS3.getBindable(config,"selectedProjectsVE"));
    menuItem_43_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction(collab_RenameProjectAction_45_9_$1);
    var menuSeparator_49_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_51_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_5_$1.itemId = "showStartPublicationWorkflowWindow";
    var collab_ShowStartPublicationWorkflowWindowAction_53_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_53_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_53_9_$1,"workflowNameValueExpression" , AS3.getBindable(config,"workflowNameVE"));
    menuItem_51_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_53_9_$1);
    var menuItem_58_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_58_5_$1.itemId = "showStartTranslationWorkflowWindow";
    var collab_ShowStartTranslationWorkflowWindowAction_60_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_60_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_60_9_$1,"workflowNameValueExpression" , AS3.getBindable(config,"workflowNameVE"));
    menuItem_58_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_60_9_$1);
    var menuItem_65_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_65_5_$1.itemId = "startPullTranslationWorkflow";
    var collab_StartPullTranslationWorkflowAction_67_9_$1/*:com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,{});
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_67_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsVE"));
    menuItem_65_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction(collab_StartPullTranslationWorkflowAction_67_9_$1);
    var menuSeparator_71_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_73_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_73_5_$1.itemId = "leaveProjects";
    var collab_LeaveProjectsAction_75_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction,{});
    AS3.setBindable(collab_LeaveProjectsAction_75_9_$1,"projectsVE" , AS3.getBindable(config,"selectedProjectsVE"));
    AS3.setBindable(collab_LeaveProjectsAction_75_9_$1,"disabled" , true);
    AS3.setBindable(collab_LeaveProjectsAction_75_9_$1,"hidden" , true);
    menuItem_73_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction(collab_LeaveProjectsAction_75_9_$1);
    config_$1.items = [menuItem_35_5_$1, menuSeparator_41_5_$1, menuItem_43_5_$1, menuSeparator_49_5_$1, menuItem_51_5_$1, menuItem_58_5_$1, menuItem_65_5_$1, menuSeparator_71_5_$1, menuItem_73_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$k4M0(config_$1);
  }/*

    [Bindable]
    public var selectedProjectsVE:ValueExpression;

    [Bindable]
    public var selectedContentsVE:ValueExpression;

    [Bindable]
    public var workflowNameVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsPanelContextMenu",
      constructor: ProjectsPanelContextMenu$,
      super$k4M0: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedProjectsVE: null,
        selectedContentsVE: null,
        workflowNameVE: null
      },
      statics: {PROJECTS_PANEL_CONTEXT_MENU_ITEM_ID: "projectsPanelContextMenu"},
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction",
        "com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction"
      ]
    };
});
