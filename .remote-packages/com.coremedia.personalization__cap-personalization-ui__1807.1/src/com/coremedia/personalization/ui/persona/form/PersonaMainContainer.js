Ext.define("com.coremedia.personalization.ui.persona.form.PersonaMainContainer", function(PersonaMainContainer) {/*package com.coremedia.personalization.ui.persona.form{
import com.coremedia.personalization.ui.persona.form.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import com.coremedia.ui.exml.ValueExpression;
public class PersonaMainContainer extends PersonaMainContainerBase{

    import com.coremedia.personalization.ui.util.PersonaContextHelper;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaMainContainer";

    public*/function PersonaMainContainer$(config/*:PersonaMainContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase,{});
    var defaults_$1/*:PersonaMainContainer*/ =AS3.cast(PersonaMainContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindBlobPropertyPlugin_41_5_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    AS3.setBindable(ui_BindBlobPropertyPlugin_41_5_$1,"transformer" ,AS3.bind( this,"transformer"));
    AS3.setBindable(ui_BindBlobPropertyPlugin_41_5_$1,"reverseTransformer" , com.coremedia.personalization.ui.util.PersonaContextHelper.propertiesStringFromBean);
    ui_BindBlobPropertyPlugin_41_5_$1.bindTo = AS3.getBindable(config,"profileSettingsExpression");
    AS3.setBindable(ui_BindBlobPropertyPlugin_41_5_$1,"mimeType" , "text/plain");
    var ui_VerticalSpacingPlugin_45_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_45_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_BindBlobPropertyPlugin_41_5_$1, ui_VerticalSpacingPlugin_45_5_$1];
    var editor_PropertyField_48_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    editor_PropertyField_48_5_$1["contentBindTo"] = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_PropertyField_48_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var ui_ValueExpression_51_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_51_9_$1,"context" , this.getLocalBean());
    AS3.setBindable(editor_PropertyField_48_5_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_51_9_$1));
    config_$1["defaultType"] = editor_PropertyField_48_5_$1['xtype'];
    delete editor_PropertyField_48_5_$1['xtype'];
    delete editor_PropertyField_48_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_48_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZWig(config_$1);
  }/*

    /**
     * The bean value expression to hand through to all property fields contained in this group.
     * /
    [Bindable]
    public var bindTo:com.coremedia.ui.data.ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:com.coremedia.ui.data.ValueExpression;

    /**
     * ValueExpression to the BLOB-property containing the profile settings
     * /
    [Bindable]
    public var profileSettingsExpression:com.coremedia.ui.data.ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaMainContainer",
      constructor: PersonaMainContainer$,
      super$ZWig: function() {
        com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        profileSettingsExpression: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.util.PersonaContextHelper"]
    };
});
