Ext.define("com.coremedia.cms.editor.sdk.premular.fields.BooleanPropertyField", function(BooleanPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.StatefulCheckbox;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyValueLabelPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
[PublicApi]
/**
 A checkbox that binds to an integer property being edited inside
 of a document form. Maps the value '1' to 'checked' and '0' to 'unchecked.
 Specify the propertyName property for selecting the integer property.
 * /
public class BooleanPropertyField extends StatefulCheckbox{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.booleanPropertyField";

    /**
     * This is the base CSS class of the BooleanPropertyField.
     * /
    public static const BOOLEAN_PROPERTY_FIELD_CSS:String = "boolean-property-field";

    public*/function BooleanPropertyField$(config/*:BooleanPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    var defaults_$1/*:BooleanPropertyField*/ =AS3.cast(BooleanPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_BindDisablePlugin_63_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_63_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_63_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_SetPropertyValueLabelPlugin_65_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyValueLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyValueLabelPlugin,{});
    editor_SetPropertyValueLabelPlugin_65_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyValueLabelPlugin_65_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_SetPropertyValueLabelPlugin_65_5_$1,"propertyValue" , "true");
    AS3.setBindable(editor_SetPropertyValueLabelPlugin_65_5_$1,"labelProperty" , "boxLabel");
    var ui_BindPropertyPlugin_69_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_69_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_69_5_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_69_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_69_5_$1.ifUndefined = false;
    ui_BindPropertyPlugin_69_5_$1.transformer = function(value/*:Number*/)/*:Boolean*/ { return ! !value; };
    ui_BindPropertyPlugin_69_5_$1.reverseTransformer = function(checked/*:Boolean*/)/*:**/ { return AS3.getBindable(config,"dontTransformToInteger") ? checked : (checked ? 1 : 0); };
    var editor_ShowIssuesPlugin_75_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_75_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_75_5_$1,"ifUndefined" , AS3.getBindable(config,"dontTransformToInteger") ? false : 0);
    AS3.setBindable(editor_ShowIssuesPlugin_75_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_75_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_PropertyFieldPlugin_79_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_79_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    config_$1.plugins = [editor_BindDisablePlugin_63_5_$1, editor_SetPropertyValueLabelPlugin_65_5_$1, ui_BindPropertyPlugin_69_5_$1, editor_ShowIssuesPlugin_75_5_$1, editor_PropertyFieldPlugin_79_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IeNG(config_$1);
  }/*

    /**
     * A property path expression leading to the bean whose property is edited.
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

    /** The property of the Bean to bind in this field. * /
    [Bindable]
    public var propertyName:String;


    /**
     Disable the transformation of the boolean values to integers. Useful when using this
     property editor with CapStrucs that really want to write Boolean values.
     * /
    [Bindable]
    public var dontTransformToInteger:Boolean;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulCheckbox",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.booleanPropertyField",
      constructor: BooleanPropertyField$,
      super$IeNG: function() {
        com.coremedia.ui.components.StatefulCheckbox.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        dontTransformToInteger: false,
        hideIssues: false
      },
      statics: {BOOLEAN_PROPERTY_FIELD_CSS: "boolean-property-field"},
      requires: [
        "com.coremedia.ui.components.StatefulCheckbox",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyValueLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
