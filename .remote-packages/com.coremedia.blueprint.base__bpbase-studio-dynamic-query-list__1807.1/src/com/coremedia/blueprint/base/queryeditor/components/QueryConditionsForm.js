Ext.define("com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm", function(QueryConditionsForm) {/*package com.coremedia.blueprint.base.queryeditor.components{
import com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.layout.container.HBoxLayout;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.form.FieldContainer;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction;
import com.coremedia.ui.components.HelperWindow;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class QueryConditionsForm extends QueryConditionsFormBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;

    import ext.Ext;

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.queryConditionsForm";

    public*/function QueryConditionsForm$(config/*:QueryConditionsForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase,{});
    var defaults_$1/*:QueryConditionsForm*/ =AS3.cast(QueryConditionsForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var container_29_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_29_5_$1.itemId = "prefix";
    var displayField_31_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_31_9_$1,"value" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_condition_target_title'));
    displayField_31_9_$1.flex = 1.0;
    var button_34_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_34_9_$1.itemId = "deleteAll";
    AS3.setBindable(button_34_9_$1,"handler" ,AS3.bind( this,"removeAllAppliedConditions"));
    button_34_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_34_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_delete_all_conditions')));
    var editor_BindDisablePlugin_39_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_39_13_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_BindDisablePlugin_39_13_$1,"forceReadOnlyValueExpression" , this.getDeleteAllConditionDisabledExpression());
    button_34_9_$1.plugins = [editor_BindDisablePlugin_39_13_$1];
    button_34_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    container_29_5_$1.items = [displayField_31_9_$1, button_34_9_$1];
    var layout_HBox_45_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_45_9_$1,"align" , "stretch");
    AS3.setBindable(container_29_5_$1,"layout" , layout_HBox_45_9_$1);
    var container_49_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_49_5_$1.itemId = "appliedConditions";
    var layout_VBox_51_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_51_9_$1,"align" , "stretch");
    AS3.setBindable(container_49_5_$1,"layout" , layout_VBox_51_9_$1);
    var ui_VerticalSpacingPlugin_54_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_54_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_49_5_$1.plugins = [ui_VerticalSpacingPlugin_54_9_$1];
    var fieldContainer_58_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    fieldContainer_58_5_$1.labelSeparator = ":";
    fieldContainer_58_5_$1.labelAlign = "top";
    AS3.setBindable(fieldContainer_58_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_text_add_condition')));
    fieldContainer_58_5_$1.itemId = "conditionActionsField";
    var ui_LocalComboBox_63_9_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_63_9_$1.allowBlank = true;
    ui_LocalComboBox_63_9_$1.itemId = "conditionsCombo";
    AS3.setBindable(ui_LocalComboBox_63_9_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_63_9_$1,"store" , []);
    AS3.setBindable(ui_LocalComboBox_63_9_$1,"minWidth" , 150.0);
    AS3.setBindable(ui_LocalComboBox_63_9_$1,"listeners" , {'select':AS3.bind(this,"onConditionSelect")});
    AS3.setBindable(ui_LocalComboBox_63_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_option_default')));
    var editor_BindDisablePlugin_71_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_71_13_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_BindDisablePlugin_71_13_$1,"forceReadOnlyValueExpression" , this.getAddConditionDisabledExpression());
    ui_LocalComboBox_63_9_$1.plugins = [editor_BindDisablePlugin_71_13_$1];
    ui_LocalComboBox_63_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_75_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_75_9_$1.flex = 1.0;
    var button_76_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_76_9_$1.itemId = "conditionHelp";
    button_76_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_76_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(button_76_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_show_help')));
    var editor_OpenReferenceWindowAction_81_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction,{});
    var ui_HelperWindow_83_17_$1/*:com.coremedia.ui.components.HelperWindow*/ =AS3.cast(com.coremedia.ui.components.HelperWindow,{});
    AS3.setBindable(ui_HelperWindow_83_17_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_help_title'));
    AS3.setBindable(ui_HelperWindow_83_17_$1,"helpTextUrl" ,net.jangaroo.ext.Exml.asString( Ext.manifest.globalResources[this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'query_editor_window_html_content_key')]));
    AS3.setBindable(editor_OpenReferenceWindowAction_81_13_$1,"dialog" , ui_HelperWindow_83_17_$1);
    button_76_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction(editor_OpenReferenceWindowAction_81_13_$1);
    fieldContainer_58_5_$1.items = [ui_LocalComboBox_63_9_$1, container_75_9_$1, button_76_9_$1];
    var layout_HBox_92_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_92_9_$1,"align" , "stretch");
    AS3.setBindable(fieldContainer_58_5_$1,"layout" , layout_HBox_92_9_$1);
    config_$1.items = [container_29_5_$1, container_49_5_$1, fieldContainer_58_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CYTH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.queryConditionsForm",
      constructor: QueryConditionsForm$,
      super$CYTH: function() {
        com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.FieldContainer",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditorSettings_properties",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase",
        "com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.HelperWindow",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
