Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ComboBoxStringPropertyField", function(ComboBoxStringPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.AdvancedFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.layout.container.FitLayout;
[PublicApi]
public class ComboBoxStringPropertyField extends AdvancedFieldContainer{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.comboBoxStringPropertyField";

    public static const COMBO_BOX_STRING_PROPERTY_FIELD:String = "comboBoxStringPropertyField";

    public*/function ComboBoxStringPropertyField$(config/*:ComboBoxStringPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:ComboBoxStringPropertyField*/ =AS3.cast(ComboBoxStringPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(ComboBoxStringPropertyField.COMBO_BOX_STRING_PROPERTY_FIELD).build()));
    var editor_SetPropertyLabelPlugin_70_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_70_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_70_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_70_5_$1];
    var ui_LocalComboBox_74_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_74_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    ui_LocalComboBox_74_5_$1.itemId =net.jangaroo.ext.Exml.asString( ComboBoxStringPropertyField.COMBO_BOX_STRING_PROPERTY_FIELD);
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"minWidth" , AS3.getBindable(config,"fieldWidth"));
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"maxWidth" , AS3.getBindable(config,"fieldWidth"));
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fieldLabel","DUMMY")));
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyText")));
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"store" , AS3.getBindable(config,"store"));
    ui_LocalComboBox_74_5_$1.valueField =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"valueField"));
    AS3.setBindable(ui_LocalComboBox_74_5_$1,"displayField" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"displayField")));
    ui_LocalComboBox_74_5_$1.hideLabel = true;
    ui_LocalComboBox_74_5_$1.allowBlank = true;
    var editor_SetPropertyEmptyTextPlugin_86_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_86_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_86_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_88_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_88_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindReadOnlyPlugin_88_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_PropertyFieldPlugin_90_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_90_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_91_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_91_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_91_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_91_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindPropertyPlugin_94_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_94_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_94_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_94_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_94_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_94_9_$1.reverseTransformer = AS3.getBindable(config,"reverseTransformer");
    var ui_BlockEnterPlugin_99_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_LocalComboBox_74_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_86_9_$1, editor_BindReadOnlyPlugin_88_9_$1, editor_PropertyFieldPlugin_90_9_$1, editor_ShowIssuesPlugin_91_9_$1, ui_BindPropertyPlugin_94_9_$1, ui_BlockEnterPlugin_99_9_$1];
    ui_LocalComboBox_74_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_LocalComboBox_74_5_$1];
    var layout_Fit_104_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_104_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kBAa(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** the value field to use from store * /
    [Bindable]
    public var valueField:String;


    /** the display field to use from store * /
    [Bindable]
    public var displayField:String;


    /** the empty text to be displayed * /
    [Bindable]
    public var emptyText:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /* the width of inner component (without the label) * /
    [Bindable]
    public var fieldWidth:int;


    /** the store field * /
    [Bindable]
    public var store:Object;


    /* A function that transforms the value of the component property before it is passed to the bean. * /
    [Bindable]
    public var reverseTransformer:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.comboBoxStringPropertyField",
      constructor: ComboBoxStringPropertyField$,
      super$kBAa: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        valueField: null,
        displayField: null,
        emptyText: null,
        hideIssues: false,
        fieldWidth: 0,
        store: null,
        reverseTransformer: null
      },
      statics: {COMBO_BOX_STRING_PROPERTY_FIELD: "comboBoxStringPropertyField"},
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
