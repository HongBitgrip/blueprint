Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePlugin", function(RichTextPropertyFieldDelegatePlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Uses the value from a rich text field to display as converted default if
 the field itself does not contain a value.
 * /
public class RichTextPropertyFieldDelegatePlugin extends RichTextPropertyFieldDelegatePluginBase{

    public*/function RichTextPropertyFieldDelegatePlugin$(config/*:RichTextPropertyFieldDelegatePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase,{});
    var defaults_$1/*:RichTextPropertyFieldDelegatePlugin*/ =AS3.cast(RichTextPropertyFieldDelegatePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$an4J(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: RichTextPropertyFieldDelegatePlugin$,
      super$an4J: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
