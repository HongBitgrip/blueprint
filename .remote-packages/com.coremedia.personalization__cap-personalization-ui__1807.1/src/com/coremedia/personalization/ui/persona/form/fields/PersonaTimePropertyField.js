Ext.define("com.coremedia.personalization.ui.persona.form.fields.PersonaTimePropertyField", function(PersonaTimePropertyField) {/*package com.coremedia.personalization.ui.persona.form.fields{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.form.Label;
import ext.form.field.TimeField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class PersonaTimePropertyField extends Container{

    import com.coremedia.personalization.ui.util.PersonaContextHelper;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaTimePropertyField";

    public*/function PersonaTimePropertyField$(config/*:PersonaTimePropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:PersonaTimePropertyField*/ =AS3.cast(PersonaTimePropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "hbox");
    var editor_PropertyField_36_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_36_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    config_$1["defaultType"] = editor_PropertyField_36_5_$1['xtype'];
    delete editor_PropertyField_36_5_$1['xtype'];
    delete editor_PropertyField_36_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_36_5_$1;
    var label_39_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_39_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fieldLabel")));
    AS3.setBindable(label_39_5_$1,"width" , 150);
    var timeField_41_5_$1/*:ext.form.field.TimeField*/ =AS3.cast(Ext.form.field.Time,{});
    timeField_41_5_$1.format = "g:i A";
    var ui_BindPropertyPlugin_43_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_43_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyContext")+com.coremedia.personalization.ui.util.PersonaContextHelper.CONTEXT_NAME_SEPARATOR+AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_43_9_$1.bidirectional = true;
    timeField_41_5_$1.plugins = [ui_BindPropertyPlugin_43_9_$1];
    config_$1.items = [label_39_5_$1, timeField_41_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$t31p(config_$1);
  }/*

    /**
     * property path expression leading to the Content to use for the property field
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var fieldLabel:String;

    /** the context of the Bean-property to bind in this field * /
    [Bindable]
    public var propertyContext:String;


    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.personaTimePropertyField",
      constructor: PersonaTimePropertyField$,
      super$t31p: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        fieldLabel: null,
        propertyContext: null,
        propertyName: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.form.field.Time",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.util.PersonaContextHelper"]
    };
});
