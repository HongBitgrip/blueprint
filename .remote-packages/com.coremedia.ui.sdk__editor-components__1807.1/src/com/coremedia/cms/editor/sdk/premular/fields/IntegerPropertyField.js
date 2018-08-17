Ext.define("com.coremedia.cms.editor.sdk.premular.fields.IntegerPropertyField", function(IntegerPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.AdvancedFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.layout.container.VBoxLayout;
import ext.form.Labelable;
[PublicApi]
/**
 A number field that binds to an integer property being edited inside
 of a document form. Specify the propertyName property for selecting
 the integer property.
 * /
public class IntegerPropertyField extends AdvancedFieldContainer{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.integerPropertyField";

    public static const INTEGER_PROPERTY_FIELD_ITEM_ID:String = "integerPropertyField";

    public static const MAX_VALUE:int = 2147483647;

    public static const MIN_VALUE:int = -2147483648;

    public*/function IntegerPropertyField$(config/*:IntegerPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:IntegerPropertyField*/ =AS3.cast(IntegerPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(IntegerPropertyField.INTEGER_PROPERTY_FIELD_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_68_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_68_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_68_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_68_5_$1];
    var ui_StatefulNumberField_72_5_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_72_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    AS3.setBindable(ui_StatefulNumberField_72_5_$1,"height" , 23);
    ui_StatefulNumberField_72_5_$1.allowBlank = true;
    ui_StatefulNumberField_72_5_$1.allowDecimals = false;
    ui_StatefulNumberField_72_5_$1.anchor = "100%";
    ui_StatefulNumberField_72_5_$1.itemId =net.jangaroo.ext.Exml.asString( IntegerPropertyField.INTEGER_PROPERTY_FIELD_ITEM_ID);
    ui_StatefulNumberField_72_5_$1.hideLabel = true;
    AS3.setBindable(ui_StatefulNumberField_72_5_$1,"hideTrigger" , true);
    AS3.setBindable(ui_StatefulNumberField_72_5_$1,"maxValue" , IntegerPropertyField.MAX_VALUE);
    AS3.setBindable(ui_StatefulNumberField_72_5_$1,"minValue" , IntegerPropertyField.MIN_VALUE);
    ui_StatefulNumberField_72_5_$1.checkChangeBuffer = AS3.getBindable(config,"changeBuffer");
    var editor_SetPropertyEmptyTextPlugin_84_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_84_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_84_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_86_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_86_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_86_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_88_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_88_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_89_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_89_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_89_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_89_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindPropertyPlugin_92_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_92_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_92_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_92_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_92_9_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : null;};
    ui_BindPropertyPlugin_92_9_$1.bidirectional = true;
    var ui_BlockEnterPlugin_97_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_StatefulNumberField_72_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_84_9_$1, editor_BindReadOnlyPlugin_86_9_$1, editor_PropertyFieldPlugin_88_9_$1, editor_ShowIssuesPlugin_89_9_$1, ui_BindPropertyPlugin_92_9_$1, ui_BlockEnterPlugin_97_9_$1];
    config_$1.items = [ui_StatefulNumberField_72_5_$1];
    var layout_VBox_102_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_102_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_102_5_$1);
    var labelable_105_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_105_5_$1.labelSeparator = "";
    config_$1["defaultType"] = labelable_105_5_$1['xtype'];
    delete labelable_105_5_$1['xtype'];
    delete labelable_105_5_$1['xclass'];
    config_$1.defaults = labelable_105_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IUHw(config_$1);
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


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     The number of milliseconds to wait for more changes to the field's
     value before sending the change event. The default value is 1.
     The plugin may be disabled by setting the buffer to -1.
     * /
    [Bindable]
    public var changeBuffer:Number;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.integerPropertyField",
      constructor: IntegerPropertyField$,
      super$IUHw: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false,
        changeBuffer: NaN
      },
      statics: {
        INTEGER_PROPERTY_FIELD_ITEM_ID: "integerPropertyField",
        MAX_VALUE: 2147483647,
        MIN_VALUE: -2147483648
      },
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.VBox",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.StatefulNumberField",
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
