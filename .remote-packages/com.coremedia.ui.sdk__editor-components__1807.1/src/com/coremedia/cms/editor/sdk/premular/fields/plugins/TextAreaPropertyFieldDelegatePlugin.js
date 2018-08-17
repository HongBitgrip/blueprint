Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePlugin", function(TextAreaPropertyFieldDelegatePlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Uses the value from a rich text field to display as converted default if
 the field itself does not contain a value.
 * /
public class TextAreaPropertyFieldDelegatePlugin extends TextAreaPropertyFieldDelegatePluginBase{

    public*/function TextAreaPropertyFieldDelegatePlugin$(config/*:TextAreaPropertyFieldDelegatePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase,{});
    var defaults_$1/*:TextAreaPropertyFieldDelegatePlugin*/ =AS3.cast(TextAreaPropertyFieldDelegatePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nqD2(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: TextAreaPropertyFieldDelegatePlugin$,
      super$nqD2: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
