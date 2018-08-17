Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm", function(DefaultPublicationWorkflowInfoForm) {/*package com.coremedia.cms.editor.controlroom.workflow.publication{
import com.coremedia.cms.editor.controlroom.workflow.publication.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class DefaultPublicationWorkflowInfoForm extends DefaultPublicationWorkflowInfoFormBase{

    import com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultPublicationWorkflowInfoForm";

    public static const CONTENT_PANEL_ITEM_ID:String = "contentPanelItemId";

    public static const TARGET_CONTENTS_PROPERTY_PATH:String = "properties.changeSet";

    public*/function DefaultPublicationWorkflowInfoForm$(config/*:DefaultPublicationWorkflowInfoForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase,{});
    var defaults_$1/*:DefaultPublicationWorkflowInfoForm*/ =AS3.cast(DefaultPublicationWorkflowInfoForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyFieldGroup_28_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup,{});
    editor_PropertyFieldGroup_28_5_$1.header = false;
    editor_PropertyFieldGroup_28_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label'));
    editor_PropertyFieldGroup_28_5_$1.itemId = "propertyFieldGroup";
    var collab_WorkflowDetailLabel_32_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_32_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label')));
    collab_WorkflowDetailLabel_32_9_$1.labelSeparator = ":";
    AS3.setBindable(collab_WorkflowDetailLabel_32_9_$1,"textValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(config.processDefinitionName)));
    var collab_OwnerWorkflowDetailLabel_36_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel,{});
    collab_OwnerWorkflowDetailLabel_36_9_$1.labelSeparator = ":";
    editor_PropertyFieldGroup_28_5_$1.items = [collab_WorkflowDetailLabel_32_9_$1, collab_OwnerWorkflowDetailLabel_36_9_$1];
    var editor_CollapsiblePanel_39_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    editor_CollapsiblePanel_39_5_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultPublicationWorkflowInfoForm.CONTENT_PANEL_ITEM_ID);
    AS3.setBindable(editor_CollapsiblePanel_39_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_contentItems_label'));
    AS3.setBindable(editor_CollapsiblePanel_39_5_$1,"layout" , "anchor");
    AS3.setBindable(editor_CollapsiblePanel_39_5_$1,"minHeight" , 160.0);
    var editor_ContentGridPanel_44_9_$1/*:com.coremedia.cms.editor.sdk.components.ContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.ContentGridPanel,{});
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"scrollable" , true);
    editor_ContentGridPanel_44_9_$1.anchor = "100% 100%";
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"bindTo" , this.getContentsValueExpression(AS3.getBindable(config,"bindTo")));
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"lazy" , true);
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"initialViewLimit" , 30);
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"viewLimitIncrement" , 30);
    var editor_BindReadOnlyPlugin_51_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_51_13_$1,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true));
    editor_ContentGridPanel_44_9_$1.plugins = [editor_BindReadOnlyPlugin_51_13_$1];
    editor_ContentGridPanel_44_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var menu_54_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_54_13_$1.plain = true;
    var menuItem_56_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenInTabAction_58_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_58_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_56_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_58_21_$1);
    var menuItem_61_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_63_21_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_63_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_61_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_63_21_$1);
    var menuItem_67_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_69_21_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_69_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_67_17_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_69_21_$1);
    menu_54_13_$1.items = [menuItem_56_17_$1, menuItem_61_17_$1, menuItem_67_17_$1];
    AS3.setBindable(editor_ContentGridPanel_44_9_$1,"contextMenu" , menu_54_13_$1);
    editor_CollapsiblePanel_39_5_$1.items = [editor_ContentGridPanel_44_9_$1];
    var collab_WorkflowNotesPanel_80_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_80_5_$1,"collapseNoText" , true);
    AS3.setBindable(collab_WorkflowNotesPanel_80_5_$1,"notesValueExpression" , this.getNotesValueExpression(AS3.getBindable(config,"bindTo")));
    config_$1.items = [editor_PropertyFieldGroup_28_5_$1, editor_CollapsiblePanel_39_5_$1, collab_WorkflowNotesPanel_80_5_$1];
    var layout_Anchor_84_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_84_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ecgn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultPublicationWorkflowInfoForm",
      constructor: DefaultPublicationWorkflowInfoForm$,
      super$ecgn: function() {
        com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTENT_PANEL_ITEM_ID: "contentPanelItemId",
        TARGET_CONTENTS_PROPERTY_PATH: "properties.changeSet"
      },
      requires: [
        "Ext.layout.container.Anchor",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel"
      ]
    };
});
