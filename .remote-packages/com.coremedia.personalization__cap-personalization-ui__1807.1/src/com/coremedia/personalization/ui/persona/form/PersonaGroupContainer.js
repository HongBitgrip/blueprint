Ext.define("com.coremedia.personalization.ui.persona.form.PersonaGroupContainer", function(PersonaGroupContainer) {/*package com.coremedia.personalization.ui.persona.form{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
/**
 The form used to add items which are displayed as group (gray area).
 * /
public class PersonaGroupContainer extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaGroupContainer";

    public*/function PersonaGroupContainer$(config/*:PersonaGroupContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:PersonaGroupContainer*/ =AS3.cast(PersonaGroupContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyField_26_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_26_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    config_$1["defaultType"] = editor_PropertyField_26_5_$1['xtype'];
    delete editor_PropertyField_26_5_$1['xtype'];
    delete editor_PropertyField_26_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_26_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kPoW(config_$1);
  }/*

    /**
     * Value expression to the Content
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.personaGroupContainer",
      constructor: PersonaGroupContainer$,
      super$kPoW: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
