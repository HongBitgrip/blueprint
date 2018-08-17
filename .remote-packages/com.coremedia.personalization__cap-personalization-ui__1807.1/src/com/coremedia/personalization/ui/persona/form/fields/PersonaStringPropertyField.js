Ext.define("com.coremedia.personalization.ui.persona.form.fields.PersonaStringPropertyField", function(PersonaStringPropertyField) {/*package com.coremedia.personalization.ui.persona.form.fields{
import ext.form.field.TextField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class PersonaStringPropertyField extends TextField{

    import com.coremedia.personalization.ui.util.PersonaContextHelper;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaStringPropertyField";

    public*/function PersonaStringPropertyField$(config/*:PersonaStringPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    var defaults_$1/*:PersonaStringPropertyField*/ =AS3.cast(PersonaStringPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.checkChangeBuffer = 1000.0;
    var ui_BindPropertyPlugin_33_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_33_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyContext")+com.coremedia.personalization.ui.util.PersonaContextHelper.CONTEXT_NAME_SEPARATOR+AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_33_5_$1.bidirectional = true;
    config_$1.plugins = [ui_BindPropertyPlugin_33_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eBRl(config_$1);
  }/*

    /**
     * property path expression leading to the Content to use for the property field
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /** the context of the Bean-property to bind in this field * /
    [Bindable]
    public var propertyContext:String;


    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Text",
      alias: "widget.com.coremedia.personalization.ui.config.personaStringPropertyField",
      constructor: PersonaStringPropertyField$,
      super$eBRl: function() {
        Ext.form.field.Text.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyContext: null,
        propertyName: null
      },
      requires: [
        "Ext.form.field.Text",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.util.PersonaContextHelper"]
    };
});
