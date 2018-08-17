Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin", function(SetPropertyLabelPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin to set the fieldLabel of the component to a localized value.
 The localization key is computed from the type of the bound Content (see property
 bindTo) and the given propertyName, adding the suffix "_text".
 * /
public class SetPropertyLabelPlugin extends SetPropertyLabelPluginBase{

    public*/function SetPropertyLabelPlugin$(config/*:SetPropertyLabelPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase,{});
    var defaults_$1/*:SetPropertyLabelPlugin*/ =AS3.cast(SetPropertyLabelPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Pesn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: SetPropertyLabelPlugin$,
      super$Pesn: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
