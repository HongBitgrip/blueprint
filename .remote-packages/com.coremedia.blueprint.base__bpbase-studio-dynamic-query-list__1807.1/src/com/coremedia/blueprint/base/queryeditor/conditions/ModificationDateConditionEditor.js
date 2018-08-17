Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditor", function(ModificationDateConditionEditor) {/*package com.coremedia.blueprint.base.queryeditor.conditions{
import com.coremedia.blueprint.base.queryeditor.conditions.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class ModificationDateConditionEditor extends ModificationDateConditionEditorBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.modificationDateConditionEditor";

    public*/function ModificationDateConditionEditor$(config/*:ModificationDateConditionEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase,{});
    var defaults_$1/*:ModificationDateConditionEditor*/ =AS3.cast(ModificationDateConditionEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_LocalComboBox_21_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_21_5_$1.itemId = "sortingField";
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_modification_time')));
    ui_LocalComboBox_21_5_$1.valueField = "name";
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"displayField" , "localizedName");
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"encodeItems" , true);
    ui_LocalComboBox_21_5_$1.labelAlign = "top";
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_option_default')));
    var ui_BindListPlugin_29_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_31_13_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_31_13_$1.name = "name";
    var ui_DataField_32_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_32_13_$1.name = "localizedName";
    ui_DataField_32_13_$1.mapping = "name";
    ui_DataField_32_13_$1["convert"] =AS3.bind( this,"getText");
    ui_DataField_32_13_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_29_9_$1,"fields" , [data_AutoField_31_13_$1, ui_DataField_32_13_$1]);
    var ui_ValueExpression_38_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_38_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_38_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.TIME_SLOTS));
    AS3.setBindable(ui_BindListPlugin_29_9_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_38_13_$1));
    var ui_BindPropertyPlugin_42_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_42_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_42_9_$1.ifUndefined = "";
    var ui_ValueExpression_45_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_45_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_45_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.SELECTED_TIME_SLOT));
    ui_BindPropertyPlugin_42_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_45_13_$1);
    var editor_BindDisablePlugin_49_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_49_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_49_9_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    ui_LocalComboBox_21_5_$1.plugins = [ui_BindListPlugin_29_9_$1, ui_BindPropertyPlugin_42_9_$1, editor_BindDisablePlugin_49_9_$1];
    ui_LocalComboBox_21_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_LocalComboBox_21_5_$1];
    var layout_Anchor_55_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_55_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hIwD(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.modificationDateConditionEditor",
      constructor: ModificationDateConditionEditor$,
      super$hIwD: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.layout.container.Anchor",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.conditions.ModificationDateConditionEditorBase",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
