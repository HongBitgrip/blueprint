Ext.define("com.coremedia.personalization.ui.persona.form.PersonaUiContainer", function(PersonaUiContainer) {/*package com.coremedia.personalization.ui.persona.form{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.layout.container.FormLayout;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
/**
 The form used to display the optimized UserProfile-UI.
 * /
public class PersonaUiContainer extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaUiContainer";

    public*/function PersonaUiContainer$(config/*:PersonaUiContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:PersonaUiContainer*/ =AS3.cast(PersonaUiContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_Form_39_5_$1/*:ext.layout.container.FormLayout*/ =AS3.cast(Ext.layout.container.Form,{});
    AS3.setBindable(config_$1,"layout" , layout_Form_39_5_$1);
    var editor_PropertyField_42_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_42_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_PropertyField_42_5_$1["contentBindTo"] = AS3.getBindable(config,"contentBindTo");
    AS3.setBindable(editor_PropertyField_42_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_PropertyField_42_5_$1.labelSeparator = "";
    config_$1["defaultType"] = editor_PropertyField_42_5_$1['xtype'];
    delete editor_PropertyField_42_5_$1['xtype'];
    delete editor_PropertyField_42_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_42_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ftal(config_$1);
  }/*

    /**
     * The bean value expression to hand through to all property fields contained in this group.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * The bean value expression to hand through to all property fields contained in this group.
     * /
    [Bindable]
    public var contentBindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.personaUiContainer",
      constructor: PersonaUiContainer$,
      super$ftal: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        contentBindTo: null,
        forceReadOnlyValueExpression: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Form",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
