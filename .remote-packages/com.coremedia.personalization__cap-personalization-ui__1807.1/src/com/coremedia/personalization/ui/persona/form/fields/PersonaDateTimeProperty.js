Ext.define("com.coremedia.personalization.ui.persona.form.fields.PersonaDateTimeProperty", function(PersonaDateTimeProperty) {/*package com.coremedia.personalization.ui.persona.form.fields{
import com.coremedia.personalization.ui.plugin.DateTimeContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class PersonaDateTimeProperty extends DateTimeContainer{

    import com.coremedia.personalization.ui.util.PersonaContextHelper;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaDateTimeProperty";

    public*/function PersonaDateTimeProperty$(config/*:PersonaDateTimeProperty = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.personalization.ui.plugin.DateTimeContainer*/ =AS3.cast(com.coremedia.personalization.ui.plugin.DateTimeContainer,{});
    var defaults_$1/*:PersonaDateTimeProperty*/ =AS3.cast(PersonaDateTimeProperty,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindPropertyPlugin_17_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_17_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyContext")+com.coremedia.personalization.ui.util.PersonaContextHelper.CONTEXT_NAME_SEPARATOR+AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_17_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_17_5_$1.componentProperty = "value";
    config_$1.plugins = [ui_BindPropertyPlugin_17_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$n8aL(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.DateTimeContainer",
      alias: "widget.com.coremedia.personalization.ui.config.personaDateTimeProperty",
      constructor: PersonaDateTimeProperty$,
      super$n8aL: function() {
        com.coremedia.personalization.ui.plugin.DateTimeContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.personalization.ui.plugin.DateTimeContainer",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.util.PersonaContextHelper"]
    };
});
