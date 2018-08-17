Ext.define("com.coremedia.personalization.ui.persona.form.fields.PersonaDatePropertyField", function(PersonaDatePropertyField) {/*package com.coremedia.personalization.ui.persona.form.fields{
import com.coremedia.personalization.ui.DateFieldBase;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class PersonaDatePropertyField extends DateFieldBase{

    import com.coremedia.personalization.ui.util.PersonaContextHelper;
    import com.coremedia.ui.data.ValueExpression;

    import ext.DateUtil;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaDatePropertyField";

    public*/function PersonaDatePropertyField$(config/*:PersonaDatePropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.personalization.ui.DateFieldBase*/ =AS3.cast(com.coremedia.personalization.ui.DateFieldBase,{});
    var defaults_$1/*:PersonaDatePropertyField*/ =AS3.cast(PersonaDatePropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 95);
    config_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_format'));
    config_$1.validateOnBlur = true;
    var ui_BindPropertyPlugin_40_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_40_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyContext")+com.coremedia.personalization.ui.util.PersonaContextHelper.CONTEXT_NAME_SEPARATOR+AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_40_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_40_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_40_5_$1.reverseTransformer = 
                  function(date/*:Date*/)/*:String*/{
                    return Ext.Date.format(date, 'c');
                  };
    ui_BindPropertyPlugin_40_5_$1.transformer = 
                  function(value/*:String*/)/*:Date*/ {
                    if(value) {
                      // Cut off UTC offset
                      var cutoff/*:String*/;
                      if (value.indexOf('Z') >= 0) {
                        cutoff = 'Z';
                      } else if (value.indexOf('+') >= 0) {
                        cutoff = '+';
                      }
                      if (cutoff) {
                        value = value.split(cutoff)[0];
                      }
                    }
                    return Ext.Date.parse(value, 'c');
                  };
    config_$1.plugins = [ui_BindPropertyPlugin_40_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hqao(config_$1);
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
      extend: "com.coremedia.personalization.ui.DateFieldBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaDatePropertyField",
      constructor: PersonaDatePropertyField$,
      super$hqao: function() {
        com.coremedia.personalization.ui.DateFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyContext: null,
        propertyName: null
      },
      requires: [
        "Ext.Date",
        "com.coremedia.personalization.ui.DateFieldBase",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.util.PersonaContextHelper"]
    };
});
