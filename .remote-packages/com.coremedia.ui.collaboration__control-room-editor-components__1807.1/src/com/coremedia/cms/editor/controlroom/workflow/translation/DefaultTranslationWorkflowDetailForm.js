Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailForm", function(DefaultTranslationWorkflowDetailForm) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.Component;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction;
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import com.coremedia.ui.store.DataField;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanel;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
/**
 <p>
 The default panel for showing translation workflows in the inbox panel of the control room.
 It informs the user about the subject of the workflow, about the target site and locale,
 about the target contents that receive the translation, and about the current workflow state.
 The list of contents allows the user to download an XLIFF file for requesting a translation.
 The workflow state panel allows to select the next state if the workflow provides
 alternative successor states for the current state.
 </p>
 <p>
 This form is usable for the default translation workflow and for other workflows
 with a similar structure of the process variables.
 The process variable <code>translationAction</code> must store the current process state.
 The process variable <code>subject</code> must store the name of the workflow as for all translation workflows.
 The process variable <code>targetSiteId</code> must store the id of the target site.
 The process variable <code>derivedContents</code> must store the contents that receive the result of the translation.
 The process variable <code>masterContentObjects</code> must store the content objects that are the source of the translation.
 </p>
 * /
public class DefaultTranslationWorkflowDetailForm extends DefaultTranslationWorkflowDetailFormBase{

    import com.coremedia.cap.workflow.ProcessPropertyNames;
    import com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils;
    import com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel;
    import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultTranslationWorkflowDetailForm";

    public static const FORM_PANEL_ITEM_ID:String = "formPanel";

    public static const WORKFLOW_TYPE_ITEM_ID:String = "workflowTypeItemId";

    public static const WORKFLOW_NAME_FIELD_ITEM_ID:String = "workflowNameFieldItemId";

    public static const TARGET_SITE_ITEM_ID:String = "targetSiteItemId";

    public static const WORKFLOW_DETAIL_CONTENT_PANEL_ITEM_ID:String = "workflowDetailContentPanelItemId";

    public static const STATE_PANEL_ITEM_ID:String = "statePanel";

    public static const TRANSLATION_SET_PANEL_ITEM_ID:String = "translationSetPanel";

    public*/function DefaultTranslationWorkflowDetailForm$(config/*:DefaultTranslationWorkflowDetailForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase,{});
    var defaults_$1/*:DefaultTranslationWorkflowDetailForm*/ =AS3.cast(DefaultTranslationWorkflowDetailForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_CollapsibleFormPanel_71_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel,{});
    editor_CollapsibleFormPanel_71_5_$1.header = false;
    var collab_WorkflowDetailLabel_73_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_73_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label')));
    AS3.setBindable(collab_WorkflowDetailLabel_73_9_$1,"textValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(config.processDefinitionName)));
    var collab_WorkflowDetailLabel_76_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_76_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowName_label')));
    AS3.setBindable(collab_WorkflowDetailLabel_76_9_$1,"textValueExpression" , AS3.getBindable(config,"bindTo").extendBy('properties.subject'));
    var collab_TargetSiteWorkflowDetailLabel_79_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel,{});
    AS3.setBindable(collab_TargetSiteWorkflowDetailLabel_79_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    var collab_TargetLocaleWorkflowDetailLabel_80_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel,{});
    AS3.setBindable(collab_TargetLocaleWorkflowDetailLabel_80_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    var collab_OwnerWorkflowDetailLabel_81_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel,{});
    AS3.setBindable(collab_OwnerWorkflowDetailLabel_81_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_CollapsibleFormPanel_71_5_$1.items = [collab_WorkflowDetailLabel_73_9_$1, collab_WorkflowDetailLabel_76_9_$1, collab_TargetSiteWorkflowDetailLabel_79_9_$1, collab_TargetLocaleWorkflowDetailLabel_80_9_$1, collab_OwnerWorkflowDetailLabel_81_9_$1];
    var editor_CollapsiblePanel_85_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    editor_CollapsiblePanel_85_5_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultTranslationWorkflowDetailForm.TRANSLATION_SET_PANEL_ITEM_ID);
    AS3.setBindable(editor_CollapsiblePanel_85_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_contentItems_label'));
    var collab_UserChosenContentGridPanel_88_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel,{});
    collab_UserChosenContentGridPanel_88_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.CONTENTS_ITEM_ID);
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.DERIVED_CONTENTS_VARIABLE));
    collab_UserChosenContentGridPanel_88_9_$1.anchor = "100% 100%";
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"issuesValueExpression" , this.getAllIssuesValueExpression());
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"contentEditable" , false);
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"readOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"premularConfigurationsValueExpression" , this.getPremularConfigurationsValueExpression());
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"lazy" , true);
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"initialViewLimit" , 30);
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"viewLimitIncrement" , 30);
    var ui_NestedRulesPlugin_100_13_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var toolbar_102_17_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var ui_AddItemsPlugin_104_21_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var component_106_25_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_106_25_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel.PASTE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_104_21_$1,"after" , [component_106_25_$1]);
    var ui_IconButton_109_25_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_109_25_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_downloadXliff_icon')));
    AS3.setBindable(ui_IconButton_109_25_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_downloadXliff_text')));
    AS3.setBindable(ui_IconButton_109_25_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_downloadXliff_tooltip'));
    var editor_DownloadXliffWorkflowAction_114_29_$1/*:com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction,{});
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"derivedContentsVariable" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.DERIVED_CONTENTS_VARIABLE));
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"masterContentObjectsVariable" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE));
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"filenameVariable" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE));
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"commentVariable" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.COMMENT_VARIABLE));
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"processValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DownloadXliffWorkflowAction_114_29_$1,"taskValueExpression" , AS3.getBindable(config,"bindToTask"));
    ui_IconButton_109_25_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction(editor_DownloadXliffWorkflowAction_114_29_$1);
    AS3.setBindable(ui_AddItemsPlugin_104_21_$1,"items" , [ui_IconButton_109_25_$1]);
    toolbar_102_17_$1.plugins = [ui_AddItemsPlugin_104_21_$1];
    ui_NestedRulesPlugin_100_13_$1.rules = [toolbar_102_17_$1];
    collab_UserChosenContentGridPanel_88_9_$1.plugins = [ui_NestedRulesPlugin_100_13_$1];
    collab_UserChosenContentGridPanel_88_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_TypeIconColumn_131_13_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn,{});
    var editor_NameTranslationStatusColumn_132_13_$1/*:com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn,{});
    var editor_StatusColumn_133_13_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    collab_UserChosenContentGridPanel_88_9_$1.columns = [editor_TypeIconColumn_131_13_$1, editor_NameTranslationStatusColumn_132_13_$1, editor_StatusColumn_133_13_$1];
    var ui_DataField_136_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_136_13_$1.name = "translationStatus";
    ui_DataField_136_13_$1.ifUnreadable = "";
    ui_DataField_136_13_$1.ifError = "";
    ui_DataField_136_13_$1.mapping = "";
    ui_DataField_136_13_$1["convert"] =AS3.bind( this,"getTranslationStatus");
    AS3.setBindable(collab_UserChosenContentGridPanel_88_9_$1,"additionalFields" , [ui_DataField_136_13_$1]);
    editor_CollapsiblePanel_85_5_$1.items = [collab_UserChosenContentGridPanel_88_9_$1];
    var collab_WorkflowNotesPanel_146_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_146_5_$1,"collapseNoText" , true);
    AS3.setBindable(collab_WorkflowNotesPanel_146_5_$1,"notesValueExpression" , this.getNotesValueExpression(AS3.getBindable(config,"bindTo")));
    var editor_CollapsiblePanel_149_5_$1/*: com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_149_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_states_label'));
    AS3.setBindable(editor_CollapsiblePanel_149_5_$1,"minHeight" , 116.0);
    var collab_WorkflowStatePanel_153_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanel,{});
    collab_WorkflowStatePanel_153_9_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultTranslationWorkflowDetailForm.STATE_PANEL_ITEM_ID);
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( config.processDefinitionName));
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"nextStepVariable" , "translationAction");
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"workflowStateTransitions" , AS3.getBindable(config,"workflowStateTransitions"));
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(collab_WorkflowStatePanel_153_9_$1,"bindToTask" , AS3.getBindable(config,"bindToTask"));
    editor_CollapsiblePanel_149_5_$1.items = [collab_WorkflowStatePanel_153_9_$1];
    config_$1.items = [editor_CollapsibleFormPanel_71_5_$1, editor_CollapsiblePanel_85_5_$1, collab_WorkflowNotesPanel_146_5_$1, editor_CollapsiblePanel_149_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FZ3q(config_$1);
  }/*

    /**
     An array of <code>workflowStateTransition</code> objects defining the possible states of a process.
     The current state is stored in the process variable <code>translationAction</code>.

     @see com.coremedia.cms.editor.controlroom.workflow.WorkflowStateTransition
     * /
    [Bindable]
    public var workflowStateTransitions:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultTranslationWorkflowDetailForm",
      constructor: DefaultTranslationWorkflowDetailForm$,
      super$FZ3q: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase.prototype.constructor.apply(this, arguments);
      },
      config: {workflowStateTransitions: null},
      statics: {
        FORM_PANEL_ITEM_ID: "formPanel",
        WORKFLOW_TYPE_ITEM_ID: "workflowTypeItemId",
        WORKFLOW_NAME_FIELD_ITEM_ID: "workflowNameFieldItemId",
        TARGET_SITE_ITEM_ID: "targetSiteItemId",
        WORKFLOW_DETAIL_CONTENT_PANEL_ITEM_ID: "workflowDetailContentPanelItemId",
        STATE_PANEL_ITEM_ID: "statePanel",
        TRANSLATION_SET_PANEL_ITEM_ID: "translationSetPanel"
      },
      requires: [
        "Ext.Component",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction",
        "com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
        "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel"
      ]
    };
});
