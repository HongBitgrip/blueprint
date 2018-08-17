Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyValueLabelPlugin", function(SetPropertyValueLabelPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin to set the fieldLabel of the component to a localized value.
 The localization key is computed from the type of the bound Content (see property
 bindTo) and the given propertyName, adding the given propertyValue and the suffix "_text".
 * /
public class SetPropertyValueLabelPlugin extends SetLocalizedPluginBase{

    import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;

    public*/function SetPropertyValueLabelPlugin$(config/*:SetPropertyValueLabelPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase,{});
    var defaults_$1/*:SetPropertyValueLabelPlugin*/ =AS3.cast(SetPropertyValueLabelPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"labelProperty" , "fieldLabel");
    AS3.setBindable(config_$1,"keySuffix" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyValue") + '_' + com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.LABEL));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VO3i(config_$1);
  }/*

    /**
     The value of the property to use this label for, i.e. "true" for check-boxes.
     * /
    [Bindable]
    public var propertyValue:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: SetPropertyValueLabelPlugin$,
      super$VO3i: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {propertyValue: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
