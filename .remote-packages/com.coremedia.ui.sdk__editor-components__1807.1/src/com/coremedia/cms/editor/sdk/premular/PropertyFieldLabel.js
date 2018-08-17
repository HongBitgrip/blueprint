Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel", function(PropertyFieldLabel) {/*package com.coremedia.cms.editor.sdk.premular{
import ext.form.field.DisplayField;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
[PublicApi]

/**
 A component displaying a localized label for a property.
 Use this component for property editors that cannot derive
 from a field class due to technical problems.
 If <code>hideLabel="true"</code> is set, the entire
 component is hidden.
 * /
public class PropertyFieldLabel extends DisplayField{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.propertyFieldLabel";

    public*/function PropertyFieldLabel$(config/*:PropertyFieldLabel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var defaults_$1/*:PropertyFieldLabel*/ =AS3.cast(PropertyFieldLabel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hidden" , config.hideLabel);
    config_$1.labelSeparator = "";
    config_$1.labelAlign = "top";
    var editor_SetPropertyLabelPlugin_45_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_45_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_45_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_45_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fjjn(config_$1);
  }/*

    /**
     * A property path expression leading to the bean being edited.
     * The type of the bean is used when localizing the property name.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * The name of the property for which a label is shown.
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Display",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.propertyFieldLabel",
      constructor: PropertyFieldLabel$,
      super$fjjn: function() {
        Ext.form.field.Display.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null
      },
      requires: [
        "Ext.form.field.Display",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin"]
    };
});
