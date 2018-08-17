Ext.define("com.coremedia.cms.editor.controlroom.ControlRoom", function(ControlRoom) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.controlroom.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.layouts.MultiItemSplitter;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.ui.store.DataField;
import com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn;
import com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn;
import com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn;
import ext.layout.container.VBoxLayout;
import com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ControlRoom extends ControlRoomBase{

    import com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants;
    import com.coremedia.cms.editor.sdk.EditorContextImpl;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.SplitterSkin;
    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.controlRoom";

    public static const CONTROL_ROOM_ID:String = "controlRoom";

    public static const EDITED_CONTENT_PANEL_ID:String = "editedContentPanel";

    public static const PROJECTS_PANEL_ID:String = "projectsPanel";

    public static const PUBLICATION_WORKFLOW_PANEL_ID:String = "publicationWorkflowPanel";

    public static const TRANSLATION_WORKFLOW_PANEL_ID:String = "translationWorkflowPanel";

    public static const DEFAULT_WIDTH:uint = 330;

    public*/function ControlRoom$(config/*:ControlRoom = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.ControlRoomBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomBase,{});
    var defaults_$1/*:ControlRoom*/ =AS3.cast(ControlRoom,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "region";
    config_$1["focusable"] = true;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_label'));
    config_$1["id"] = ControlRoom.CONTROL_ROOM_ID;
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoom.CONTROL_ROOM_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_title'));
    config_$1.header = false;
    config_$1["minWidth"] = 330;
    config_$1["minHeight"] = 350;
    config_$1.defaultFocus = ":focusable";
    AS3.setBindable(config_$1,"width" , ControlRoom.DEFAULT_WIDTH);
    AS3.setBindable(config_$1,"height" , 700);
    config_$1.constrainHeader = true;
    config_$1["docked"] = true;
    var fx_Object_57_5_$1/*:Object*/ =Object({});
    fx_Object_57_5_$1.width = "auto";
    fx_Object_57_5_$1.stateful = true;
    fx_Object_57_5_$1.collapsible = true;
    fx_Object_57_5_$1.animCollapse = false;
    fx_Object_57_5_$1.titleCollapse = false;
    fx_Object_57_5_$1.header = {titlePosition:1, focusableContainer: false};
    config_$1["defaultType"] = fx_Object_57_5_$1['xtype'];
    delete fx_Object_57_5_$1['xtype'];
    delete fx_Object_57_5_$1['xclass'];
    config_$1.defaults = fx_Object_57_5_$1;
    var collab_EditedContentGridPanel_66_5_$1/*: com.coremedia.cms.editor.controlroom.EditedContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.EditedContentGridPanel,{});
    collab_EditedContentGridPanel_66_5_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoom.EDITED_CONTENT_PANEL_ID);
    collab_EditedContentGridPanel_66_5_$1.stateEvents = ['collapse', 'expand'];
    collab_EditedContentGridPanel_66_5_$1["getState"] = this.getSubPanelGetStateFn(ControlRoom.EDITED_CONTENT_PANEL_ID);
    collab_EditedContentGridPanel_66_5_$1.flex = 1.0;
    AS3.setBindable(collab_EditedContentGridPanel_66_5_$1,"embedded" , true);
    AS3.setBindable(collab_EditedContentGridPanel_66_5_$1,"viewUi" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin()));
    collab_EditedContentGridPanel_66_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.ACCORDION.getSkin());
    collab_EditedContentGridPanel_66_5_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoom.EDITED_CONTENT_PANEL_ID);
    var ui_MultiItemSplitter_75_5_$1/*:com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_75_5_$1.stateId = "control-room-internal-splitter-1";
    ui_MultiItemSplitter_75_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.ACCORDION.getSkin());
    ui_MultiItemSplitter_75_5_$1.size = 2.0;
    var collab_ProjectsPanel_79_5_$1/*: com.coremedia.cms.editor.controlroom.ProjectsPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ProjectsPanel,{});
    AS3.setBindable(collab_ProjectsPanel_79_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_Projects_title'));
    collab_ProjectsPanel_79_5_$1.stateEvents = ['collapse', 'expand'];
    collab_ProjectsPanel_79_5_$1["getState"] = this.getSubPanelGetStateFn(ControlRoom.PROJECTS_PANEL_ID);
    collab_ProjectsPanel_79_5_$1.flex = 1.0;
    collab_ProjectsPanel_79_5_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoom.PROJECTS_PANEL_ID);
    collab_ProjectsPanel_79_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.ACCORDION.getSkin());
    collab_ProjectsPanel_79_5_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoom.PROJECTS_PANEL_ID);
    var ui_MultiItemSplitter_88_5_$1/*: com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_88_5_$1.stateId = "control-room-internal-splitter-2";
    ui_MultiItemSplitter_88_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.ACCORDION.getSkin());
    ui_MultiItemSplitter_88_5_$1.size = 2.0;
    var collab_TabbedWorkflowPanel_92_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel,{});
    collab_TabbedWorkflowPanel_92_5_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoom.PUBLICATION_WORKFLOW_PANEL_ID);
    collab_TabbedWorkflowPanel_92_5_$1.stateEvents = ['collapse', 'expand'];
    collab_TabbedWorkflowPanel_92_5_$1["getState"] = this.getSubPanelGetStateFn(ControlRoom.PUBLICATION_WORKFLOW_PANEL_ID);
    collab_TabbedWorkflowPanel_92_5_$1.flex = 1.0;
    collab_TabbedWorkflowPanel_92_5_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoom.PUBLICATION_WORKFLOW_PANEL_ID);
    AS3.setBindable(collab_TabbedWorkflowPanel_92_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_Publication_Workflows_title'));
    collab_TabbedWorkflowPanel_92_5_$1.processCategory =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLICATION_PROCESS_CATEGORY);
    collab_TabbedWorkflowPanel_92_5_$1.excludedTasks = {StudioTwoStepPublication : ['Publish']};
    var ui_MultiItemSplitter_101_5_$1/*: com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_101_5_$1.stateId = "control-room-internal-splitter-3";
    ui_MultiItemSplitter_101_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.ACCORDION.getSkin());
    ui_MultiItemSplitter_101_5_$1.size = 2.0;
    var collab_TabbedWorkflowPanel_105_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel,{});
    collab_TabbedWorkflowPanel_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoom.TRANSLATION_WORKFLOW_PANEL_ID);
    collab_TabbedWorkflowPanel_105_5_$1.stateEvents = ['collapse', 'expand'];
    collab_TabbedWorkflowPanel_105_5_$1["getState"] = this.getSubPanelGetStateFn(ControlRoom.TRANSLATION_WORKFLOW_PANEL_ID);
    collab_TabbedWorkflowPanel_105_5_$1.flex = 1.0;
    collab_TabbedWorkflowPanel_105_5_$1.stateId =net.jangaroo.ext.Exml.asString( ControlRoom.TRANSLATION_WORKFLOW_PANEL_ID);
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_Translation_Workflows_title'));
    collab_TabbedWorkflowPanel_105_5_$1.processCategory = "Translation";
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"hidden" , AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getTranslationProcessDefinitions().length === 0);
    var ui_DataField_114_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_114_9_$1.name = "language";
    ui_DataField_114_9_$1.mapping = "id";
    ui_DataField_114_9_$1["convert"] = com.coremedia.cms.editor.controlroom.ControlRoomBase.extractLanguageDisplayName;
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"extraFields" , [ui_DataField_114_9_$1]);
    var collab_ProcessIconColumn_119_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn,{});
    var collab_WorkflowNameColumn_120_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn,{});
    collab_WorkflowNameColumn_120_9_$1.flex = 1.0;
    var collab_WorkflowLanguageColumn_121_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn,{});
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"inboxColumns" , [collab_ProcessIconColumn_119_9_$1, collab_WorkflowNameColumn_120_9_$1, collab_WorkflowLanguageColumn_121_9_$1]);
    var collab_ProcessIconColumn_124_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn,{});
    var collab_WorkflowNameColumn_125_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn,{});
    collab_WorkflowNameColumn_125_9_$1.flex = 1.0;
    var collab_WorkflowLanguageColumn_126_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn,{});
    AS3.setBindable(collab_WorkflowLanguageColumn_126_9_$1,"width" , 163);
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"pendingColumns" , [collab_ProcessIconColumn_124_9_$1, collab_WorkflowNameColumn_125_9_$1, collab_WorkflowLanguageColumn_126_9_$1]);
    var collab_ProcessIconColumn_129_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn,{});
    var collab_WorkflowNameColumn_130_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn,{});
    collab_WorkflowNameColumn_130_9_$1.flex = 1.0;
    var collab_WorkflowLanguageColumn_131_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn,{});
    AS3.setBindable(collab_WorkflowLanguageColumn_131_9_$1,"width" , 163);
    AS3.setBindable(collab_TabbedWorkflowPanel_105_5_$1,"finishedColumns" , [collab_ProcessIconColumn_129_9_$1, collab_WorkflowNameColumn_130_9_$1, collab_WorkflowLanguageColumn_131_9_$1]);
    config_$1.items = [collab_EditedContentGridPanel_66_5_$1, ui_MultiItemSplitter_75_5_$1, collab_ProjectsPanel_79_5_$1, ui_MultiItemSplitter_88_5_$1, collab_TabbedWorkflowPanel_92_5_$1, ui_MultiItemSplitter_101_5_$1, collab_TabbedWorkflowPanel_105_5_$1];
    var layout_VBox_137_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_137_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_137_5_$1);
    var editor_ToggleFloatingWindowAction_141_5_$1/*:com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction,{});
    AS3.setBindable(editor_ToggleFloatingWindowAction_141_5_$1,"component" , this);
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction(editor_ToggleFloatingWindowAction_141_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wxHy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.ControlRoomBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.controlRoom",
      constructor: ControlRoom$,
      super$wxHy: function() {
        com.coremedia.cms.editor.controlroom.ControlRoomBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTROL_ROOM_ID: "controlRoom",
        EDITED_CONTENT_PANEL_ID: "editedContentPanel",
        PROJECTS_PANEL_ID: "projectsPanel",
        PUBLICATION_WORKFLOW_PANEL_ID: "publicationWorkflowPanel",
        TRANSLATION_WORKFLOW_PANEL_ID: "translationWorkflowPanel",
        DEFAULT_WIDTH: 330
      },
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.controlroom.ControlRoomBase",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.layouts.MultiItemSplitter",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.SplitterSkin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.EditedContentGridPanel",
        "com.coremedia.cms.editor.controlroom.ProjectsPanel",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn",
        "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
