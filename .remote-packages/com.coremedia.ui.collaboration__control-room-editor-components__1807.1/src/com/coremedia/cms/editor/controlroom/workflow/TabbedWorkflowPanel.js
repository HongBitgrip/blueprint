Ext.define("com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel", function(TabbedWorkflowPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import ext.tab.TabBar;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.tab.Tab;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class TabbedWorkflowPanel extends TabbedWorkflowPanelBase{

    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TabBarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.tabbedWorkflowPanel";

    public static const WORKFLOW_INBOX_BUTTON_ITEM_ID:String = "inboxButton";

    public static const WORKFLOW_PENDING_BUTTON_ITEM_ID:String = "pendingButton";

    public static const WORKFLOW_FINISHED_BUTTON_ITEM_ID:String = "finishedButton";

    public static const TABBED_WORKFLOW_PANEL_BLOCK:String = "cm-tabbed-workflow-panel";

    public static const BODY_ELEMENT:String = "body-element";

    public static const TAB_BAR_ELEMENT:String = "tab-bar-element";

    public*/function TabbedWorkflowPanel$(config/*:TabbedWorkflowPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase,{});
    var defaults_$1/*:TabbedWorkflowPanel*/ =AS3.cast(TabbedWorkflowPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"tabPosition" , "left");
    AS3.setBindable(config_$1,"tabRotation" , 0);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.ACCORDION.getSkin());
    AS3.setBindable(config_$1,"title" , AS3.getBindable(config,"title","DUMMY"));
    var tabBar_64_5_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    tabBar_64_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.SIDE.getSkin());
    AS3.setBindable(tabBar_64_5_$1,"width" , 29);
    var layout_VBox_67_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_67_9_$1,"overflowHandler" , "none");
    AS3.setBindable(tabBar_64_5_$1,"layout" , layout_VBox_67_9_$1);
    var ui_BEMMixin_70_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_70_9_$1,"bemElement" , TabbedWorkflowPanel.TAB_BAR_ELEMENT);

    delete ui_BEMMixin_70_9_$1['xtype'];
    delete ui_BEMMixin_70_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(tabBar_64_5_$1, ui_BEMMixin_70_9_$1);
    AS3.setBindable(config_$1,"tabBar" , tabBar_64_5_$1);
    var ui_NestedRulesPlugin_75_5_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var tabBar_77_9_$1/*: ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    var ui_NestedRulesPlugin_79_13_$1/*: com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var tab_81_17_$1/*:ext.tab.Tab*/ =AS3.cast(Ext.tab.Tab,{});
    var collab_WorkflowPanelBadgePlugin_83_21_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowPanelBadgePlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowPanelBadgePlugin,{});
    tab_81_17_$1.plugins = [collab_WorkflowPanelBadgePlugin_83_21_$1];
    ui_NestedRulesPlugin_79_13_$1.rules = [tab_81_17_$1];
    tabBar_77_9_$1.plugins = [ui_NestedRulesPlugin_79_13_$1];
    ui_NestedRulesPlugin_75_5_$1.rules = [tabBar_77_9_$1];
    var ui_BEMPlugin_92_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_92_5_$1,"block" , TabbedWorkflowPanel.TABBED_WORKFLOW_PANEL_BLOCK);
    AS3.setBindable(ui_BEMPlugin_92_5_$1,"bodyElement" , TabbedWorkflowPanel.BODY_ELEMENT);
    config_$1.plugins = [ui_NestedRulesPlugin_75_5_$1, ui_BEMPlugin_92_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var collab_InboxTaskListPanel_97_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel,{});
    collab_InboxTaskListPanel_97_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase.WORKFLOW_LIST_INBOX_ITEM_ID);
    AS3.setBindable(collab_InboxTaskListPanel_97_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'inbox')));
    AS3.setBindable(collab_InboxTaskListPanel_97_5_$1,"activeItemValueExpression" , this.getActiveInboxWorkflowPanelIdValueExpression());
    AS3.setBindable(collab_InboxTaskListPanel_97_5_$1,"taskListValueExpression" , this.getInboxTasksValueExpression());
    collab_InboxTaskListPanel_97_5_$1["badgeValueExpression"] = this.getInboxTasksValueExpression();
    collab_InboxTaskListPanel_97_5_$1["tabConfig"] = {text: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_inbox_text'), tooltip: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_inbox_text'),itemId: TabbedWorkflowPanel.WORKFLOW_INBOX_BUTTON_ITEM_ID};
    AS3.setBindable(collab_InboxTaskListPanel_97_5_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    AS3.setBindable(collab_InboxTaskListPanel_97_5_$1,"columns" , AS3.getBindable(config,"inboxColumns") && AS3.getBindable(config,"inboxColumns").concat(new com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn,{}))));
    var collab_PendingProcessListPanel_105_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel,{});
    collab_PendingProcessListPanel_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase.WORKFLOW_LIST_PENDING_ITEM_ID);
    AS3.setBindable(collab_PendingProcessListPanel_105_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pending')));
    AS3.setBindable(collab_PendingProcessListPanel_105_5_$1,"activeItemValueExpression" , this.getActivePendingWorkflowPanelIdValueExpression());
    AS3.setBindable(collab_PendingProcessListPanel_105_5_$1,"processListValueExpression" , this.getPendingProcessesValueExpression());
    collab_PendingProcessListPanel_105_5_$1["badgeValueExpression"] = this.getPendingProcessesValueExpression();
    collab_PendingProcessListPanel_105_5_$1["tabConfig"] = {text: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_pending_text'), tooltip: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_pending_text'),itemId: TabbedWorkflowPanel.WORKFLOW_PENDING_BUTTON_ITEM_ID};
    AS3.setBindable(collab_PendingProcessListPanel_105_5_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    AS3.setBindable(collab_PendingProcessListPanel_105_5_$1,"columns" , AS3.getBindable(config,"pendingColumns") && AS3.getBindable(config,"pendingColumns").concat(new com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn,{}))));
    var collab_FinishedProcessListPanel_113_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel,{});
    collab_FinishedProcessListPanel_113_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase.WORKFLOW_LIST_FINISHED_ITEM_ID);
    AS3.setBindable(collab_FinishedProcessListPanel_113_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'finished')));
    collab_FinishedProcessListPanel_113_5_$1["tabConfig"] = {text: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_finished_text'), tooltip: this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_finished_text'),itemId: TabbedWorkflowPanel.WORKFLOW_FINISHED_BUTTON_ITEM_ID};
    AS3.setBindable(collab_FinishedProcessListPanel_113_5_$1,"processListValueExpression" , this.getFinishedProcessesValueExpression());
    AS3.setBindable(collab_FinishedProcessListPanel_113_5_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    AS3.setBindable(collab_FinishedProcessListPanel_113_5_$1,"columns" , AS3.getBindable(config,"finishedColumns"));
    config_$1.items = [collab_InboxTaskListPanel_97_5_$1, collab_PendingProcessListPanel_105_5_$1, collab_FinishedProcessListPanel_113_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IKi6(config_$1);
  }/*

    /**
     Any number of extra fields that are required for rendering the configured
     columns. By default the fields taskDefinitionName, processName, processCategory and
     accepted are provided.
     * /
    [Bindable]
    public var extraFields:Array;


    /**
     An array of columns for use in the nested panel. If not provided, a default set of
     columns is used.
     * /
    [Bindable]
    public var inboxColumns:Array;


    /**
     An array of columns that overwrite the default columns in the finished workflow panel.
     * /
    [Bindable]
    public var pendingColumns:Array;


    /**
     An array of columns that overwrite the default columns in the finished workflow panel.
     * /
    [Bindable]
    public var finishedColumns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.tabbedWorkflowPanel",
      constructor: TabbedWorkflowPanel$,
      super$IKi6: function() {
        com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        extraFields: null,
        inboxColumns: null,
        pendingColumns: null,
        finishedColumns: null
      },
      statics: {
        WORKFLOW_INBOX_BUTTON_ITEM_ID: "inboxButton",
        WORKFLOW_PENDING_BUTTON_ITEM_ID: "pendingButton",
        WORKFLOW_FINISHED_BUTTON_ITEM_ID: "finishedButton",
        TABBED_WORKFLOW_PANEL_BLOCK: "cm-tabbed-workflow-panel",
        BODY_ELEMENT: "body-element",
        TAB_BAR_ELEMENT: "tab-bar-element"
      },
      requires: [
        "Ext.layout.container.VBox",
        "Ext.tab.Bar",
        "Ext.tab.Tab",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowPanelBadgePlugin"
      ]
    };
});
