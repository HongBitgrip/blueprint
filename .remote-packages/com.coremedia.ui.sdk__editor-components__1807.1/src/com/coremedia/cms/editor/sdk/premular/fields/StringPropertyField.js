Ext.define("com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField", function(StringPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.TextFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.form.field.BaseField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
[PublicApi]
/**
 A text field that binds to a string property being edited inside
 of a document form. Specify the propertyName property for selecting
 the string property.
 * /
public class StringPropertyField extends TextFieldContainer{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.stringPropertyField";

    public*/function StringPropertyField$(config/*:StringPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.TextFieldContainer*/ =AS3.cast(com.coremedia.ui.components.TextFieldContainer,{});
    var defaults_$1/*:StringPropertyField*/ =AS3.cast(StringPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.labelAlign = "top";
    AS3.setBindable(config_$1,"propertyPath" ,net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName")));
    var editor_SetPropertyLabelPlugin_44_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_44_5_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    editor_SetPropertyLabelPlugin_44_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var ui_NestedRulesPlugin_46_5_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var field_48_9_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    var editor_SetPropertyEmptyTextPlugin_50_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_50_13_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_50_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_52_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_52_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_52_13_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    var editor_PropertyFieldPlugin_54_13_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_54_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_55_13_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_55_13_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_ShowIssuesPlugin_55_13_$1,"ifUndefined" , "");
    AS3.setBindable(editor_ShowIssuesPlugin_55_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_55_13_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    field_48_9_$1.plugins = [editor_SetPropertyEmptyTextPlugin_50_13_$1, editor_BindReadOnlyPlugin_52_13_$1, editor_PropertyFieldPlugin_54_13_$1, editor_ShowIssuesPlugin_55_13_$1];
    ui_NestedRulesPlugin_46_5_$1.rules = [field_48_9_$1];
    config_$1.plugins = [editor_SetPropertyLabelPlugin_44_5_$1, ui_NestedRulesPlugin_46_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8MX1(config_$1);
  }/*

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     the property of the Bean to bind to this field.
     This property field assumes that this bean has a property 'properties' that contains all properties.
     In other words, the propertyPath is calculated by 'properties.' + propertyName.
     * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.TextFieldContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.stringPropertyField",
      constructor: StringPropertyField$,
      super$8MX1: function() {
        com.coremedia.ui.components.TextFieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false
      },
      requires: [
        "Ext.form.field.Base",
        "com.coremedia.ui.components.TextFieldContainer",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
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
