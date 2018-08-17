Ext.define("com.coremedia.blueprint.base.queryeditor.components.SortingForm", function(SortingForm) {/*package com.coremedia.blueprint.base.queryeditor.components{
import com.coremedia.blueprint.base.queryeditor.components.*;
import net.jangaroo.ext.Exml;
import ext.form.Label;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class SortingForm extends SortingFormBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.LabelableSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.sortingForm";

    public*/function SortingForm$(config/*:SortingForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.components.SortingFormBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.SortingFormBase,{});
    var defaults_$1/*:SortingForm*/ =AS3.cast(SortingForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.manageHeight = false;
    var label_35_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_35_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_sort1')));
    var ui_LocalComboBox_36_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_36_5_$1.itemId = "sortingFields";
    ui_LocalComboBox_36_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.LabelableSkin.PLAIN_LABEL.getSkin());
    AS3.setBindable(ui_LocalComboBox_36_5_$1,"minWidth" , 200.0);
    AS3.setBindable(ui_LocalComboBox_36_5_$1,"maxWidth" , 200.0);
    ui_LocalComboBox_36_5_$1.valueField = "name";
    AS3.setBindable(ui_LocalComboBox_36_5_$1,"displayField" , "localizedName");
    AS3.setBindable(ui_LocalComboBox_36_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_36_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_option_default')));
    var editor_BindDisablePlugin_45_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_45_9_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_BindDisablePlugin_45_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
    var ui_BindListPlugin_47_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_49_13_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_49_13_$1.name = "name";
    var ui_DataField_50_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_50_13_$1.name = "localizedName";
    ui_DataField_50_13_$1.mapping = "name";
    ui_DataField_50_13_$1["convert"] = function(name/*:String*/)/*:String*/{return com.coremedia.blueprint.base.queryeditor.components.SortingFormBase.getFieldText(name);};
    ui_DataField_50_13_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_47_9_$1,"fields" , [data_AutoField_49_13_$1, ui_DataField_50_13_$1]);
    var ui_ValueExpression_56_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_56_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_56_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.FIELDS));
    AS3.setBindable(ui_BindListPlugin_47_9_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_56_13_$1));
    var ui_BindPropertyPlugin_60_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_60_9_$1.componentEvent = "change";
    ui_BindPropertyPlugin_60_9_$1.ifUndefined = "";
    var ui_ValueExpression_64_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_64_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_64_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.SELECTED_FIELD));
    ui_BindPropertyPlugin_60_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_64_13_$1);
    ui_LocalComboBox_36_5_$1.plugins = [editor_BindDisablePlugin_45_9_$1, ui_BindListPlugin_47_9_$1, ui_BindPropertyPlugin_60_9_$1];
    ui_LocalComboBox_36_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var label_70_5_$1/*: ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_70_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_sort2')));
    var ui_LocalComboBox_71_5_$1/*: com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_71_5_$1.itemId = "sortingDirections";
    ui_LocalComboBox_71_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.LabelableSkin.PLAIN_LABEL.getSkin());
    AS3.setBindable(ui_LocalComboBox_71_5_$1,"minWidth" , 200.0);
    AS3.setBindable(ui_LocalComboBox_71_5_$1,"maxWidth" , 200.0);
    ui_LocalComboBox_71_5_$1.valueField = "name";
    AS3.setBindable(ui_LocalComboBox_71_5_$1,"displayField" , "localizedName");
    AS3.setBindable(ui_LocalComboBox_71_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_71_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_option_default')));
    var editor_BindDisablePlugin_80_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_80_9_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_BindDisablePlugin_80_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
    var ui_BindListPlugin_82_9_$1/*: com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_84_13_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_84_13_$1.name = "name";
    var ui_DataField_85_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_85_13_$1.name = "localizedName";
    ui_DataField_85_13_$1.mapping = "name";
    ui_DataField_85_13_$1["convert"] = function(name/*:String*/)/*:String*/{ return com.coremedia.blueprint.base.queryeditor.components.SortingFormBase.getDirectionText(name);};
    ui_DataField_85_13_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_82_9_$1,"fields" , [data_AutoField_84_13_$1, ui_DataField_85_13_$1]);
    var ui_ValueExpression_91_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_91_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_91_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.DIRECTIONS));
    AS3.setBindable(ui_BindListPlugin_82_9_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_91_13_$1));
    var ui_BindPropertyPlugin_95_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_95_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_95_9_$1.componentEvent = "change";
    ui_BindPropertyPlugin_95_9_$1.ifUndefined = "";
    var ui_ValueExpression_99_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_99_13_$1,"context" , this.getLocalModel());
    AS3.setBindable(ui_ValueExpression_99_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( this.SELECTED_DIRECTION));
    ui_BindPropertyPlugin_95_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_99_13_$1);
    ui_LocalComboBox_71_5_$1.plugins = [editor_BindDisablePlugin_80_9_$1, ui_BindListPlugin_82_9_$1, ui_BindPropertyPlugin_95_9_$1];
    ui_LocalComboBox_71_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var dcqe_Limit_105_5_$1/*: com.coremedia.blueprint.base.queryeditor.components.Limit*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.Limit,{});
    AS3.setBindable(dcqe_Limit_105_5_$1,"bindTo" , AS3.getBindable(config,"bindTo","DUMMY"));
    AS3.setBindable(dcqe_Limit_105_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
    AS3.setBindable(dcqe_Limit_105_5_$1,"queryPropertyName" , "localSettings");
    AS3.setBindable(dcqe_Limit_105_5_$1,"propertyName" , "limit");
    config_$1.items = [label_35_5_$1, ui_LocalComboBox_36_5_$1, label_70_5_$1, ui_LocalComboBox_71_5_$1, dcqe_Limit_105_5_$1];
    var layout_VBox_113_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_113_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_113_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AZOr(config_$1);
  }/*

    /**
     * Value expression pointing to the query struct property.
     * /
    [Bindable]
    public var queryVE:com.coremedia.ui.data.ValueExpression;

    /** Name of the sorting subproperty in the query struct property. * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.components.SortingFormBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.sortingForm",
      constructor: SortingForm$,
      super$AZOr: function() {
        com.coremedia.blueprint.base.queryeditor.components.SortingFormBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        queryVE: null,
        propertyName: null
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.form.Label",
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.components.SortingFormBase",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.LabelableSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.queryeditor.components.Limit"]
    };
});
