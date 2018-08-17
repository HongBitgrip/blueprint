Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin", function(SetPropertyEmptyTextPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin to set the emptyText of the component to a localized value.
 The localization key is computed from the type of the bound Content (see property
 bindTo) and the given propertyName, adding the suffix "_emptyText".
 * /
public class SetPropertyEmptyTextPlugin extends SetLocalizedPluginBase{

    import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;

    public*/function SetPropertyEmptyTextPlugin$(config/*:SetPropertyEmptyTextPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase,{});
    var defaults_$1/*:SetPropertyEmptyTextPlugin*/ =AS3.cast(SetPropertyEmptyTextPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"labelProperty" , "emptyText");
    AS3.setBindable(config_$1,"keySuffix" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.EMPTY_TEXT));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kALN(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: SetPropertyEmptyTextPlugin$,
      super$kALN: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
