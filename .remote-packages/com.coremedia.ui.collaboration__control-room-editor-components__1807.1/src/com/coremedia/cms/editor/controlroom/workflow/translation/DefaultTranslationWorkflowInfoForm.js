Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoForm", function(DefaultTranslationWorkflowInfoForm) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenPremularAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.ui.store.DataField;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 <p>
 The default panel for showing translation workflows in
 the pending and finished panels of the control room.
 It informs the user about the subject of the workflow, about the target site and locale,
 about the target contents that receive or received the translation.
 </p>
 <p>
 This form is usable for the default translation workflow and for other workflows
 with a similar structure of the process variables.
 The process variable <code>subject</code> must store the name of the workflow as for all translation workflows.
 The process variable <code>targetSiteId</code> must store the id of the target site.
 The process variable <code>derivedContents</code> must store the contents that receive the result of the translation.
 The process variable <code>masterContentObjects</code> must store the content objects that are the source of the translation.
 </p>
 * /
public class DefaultTranslationWorkflowInfoForm extends DefaultTranslationWorkflowInfoFormBase{

    import com.coremedia.cap.workflow.ProcessPropertyNames;
    import com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils;
    import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultTranslationWorkflowInfoForm";

    public static const TRANSLATION_SET_PANEL_ITEM_ID:String = "translationSetPanel";

    public*/function DefaultTranslationWorkflowInfoForm$(config/*:DefaultTranslationWorkflowInfoForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase,{});
    var defaults_$1/*:DefaultTranslationWorkflowInfoForm*/ =AS3.cast(DefaultTranslationWorkflowInfoForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_CollapsibleFormPanel_52_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel,{});
    editor_CollapsibleFormPanel_52_5_$1.header = false;
    var collab_WorkflowDetailLabel_54_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_54_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label')));
    AS3.setBindable(collab_WorkflowDetailLabel_54_9_$1,"textValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(config.processDefinitionName)));
    var collab_WorkflowDetailLabel_57_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_57_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowName_label')));
    AS3.setBindable(collab_WorkflowDetailLabel_57_9_$1,"textValueExpression" , AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE));
    var collab_TargetSiteWorkflowDetailLabel_60_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel,{});
    AS3.setBindable(collab_TargetSiteWorkflowDetailLabel_60_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    var collab_TargetLocaleWorkflowDetailLabel_61_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel,{});
    AS3.setBindable(collab_TargetLocaleWorkflowDetailLabel_61_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    var collab_OwnerWorkflowDetailLabel_62_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel,{});
    AS3.setBindable(collab_OwnerWorkflowDetailLabel_62_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_CollapsibleFormPanel_52_5_$1.items = [collab_WorkflowDetailLabel_54_9_$1, collab_WorkflowDetailLabel_57_9_$1, collab_TargetSiteWorkflowDetailLabel_60_9_$1, collab_TargetLocaleWorkflowDetailLabel_61_9_$1, collab_OwnerWorkflowDetailLabel_62_9_$1];
    var editor_CollapsiblePanel_66_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    editor_CollapsiblePanel_66_5_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultTranslationWorkflowInfoForm.TRANSLATION_SET_PANEL_ITEM_ID);
    AS3.setBindable(editor_CollapsiblePanel_66_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_contentItems_label'));
    var editor_ContentGridPanel_69_9_$1/*:com.coremedia.cms.editor.sdk.components.ContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.ContentGridPanel,{});
    editor_ContentGridPanel_69_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.CONTENTS_ITEM_ID);
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"scrollable" , true);
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"readOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_ContentGridPanel_69_9_$1.anchor = "100% 100%";
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.DERIVED_CONTENTS_VARIABLE));
    editor_ContentGridPanel_69_9_$1.columns = com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.getColumns(AS3.getBindable(config,"showTranslationStatus"));
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"lazy" , true);
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"initialViewLimit" , 30);
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"viewLimitIncrement" , 30);
    var menu_79_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_79_13_$1.plain = true;
    var menuItem_81_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenPremularAction_83_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenPremularAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenPremularAction,{});
    AS3.setBindable(editor_OpenPremularAction_83_21_$1,"premularConfigurationsValueExpression" , this.getSelectedPremularConfigurationsValueExpression());
    menuItem_81_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenPremularAction(editor_OpenPremularAction_83_21_$1);
    var menuItem_87_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_89_21_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_89_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_87_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_89_21_$1);
    var menuItem_93_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_95_21_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_95_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_93_17_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_95_21_$1);
    menu_79_13_$1.items = [menuItem_81_17_$1, menuItem_87_17_$1, menuItem_93_17_$1];
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"contextMenu" , menu_79_13_$1);
    var ui_DataField_103_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_103_13_$1.name = "translationStatus";
    ui_DataField_103_13_$1.ifUnreadable = "";
    ui_DataField_103_13_$1.ifError = "";
    ui_DataField_103_13_$1.mapping = "";
    ui_DataField_103_13_$1["convert"] =AS3.bind( this,"getTranslationStatus");
    AS3.setBindable(editor_ContentGridPanel_69_9_$1,"additionalFields" , [ui_DataField_103_13_$1]);
    editor_CollapsiblePanel_66_5_$1.items = [editor_ContentGridPanel_69_9_$1];
    var collab_WorkflowNotesPanel_113_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_113_5_$1,"collapseNoText" , true);
    AS3.setBindable(collab_WorkflowNotesPanel_113_5_$1,"notesValueExpression" , this.getNotesValueExpression(AS3.getBindable(config,"bindTo")));
    config_$1.items = [editor_CollapsibleFormPanel_52_5_$1, editor_CollapsiblePanel_66_5_$1, collab_WorkflowNotesPanel_113_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_GgH(config_$1);
  }/*

    /**
     Show the translation status of the contents (default: false).
     * /
    [Bindable]
    public var showTranslationStatus:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultTranslationWorkflowInfoForm",
      constructor: DefaultTranslationWorkflowInfoForm$,
      super$_GgH: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase.prototype.constructor.apply(this, arguments);
      },
      config: {showTranslationStatus: false},
      statics: {TRANSLATION_SET_PANEL_ITEM_ID: "translationSetPanel"},
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase",
        "com.coremedia.cms.editor.sdk.actions.OpenPremularAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
        "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel"
      ]
    };
});
