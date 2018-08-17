Ext.define("com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin", function(ContentTabManagerPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
public class ContentTabManagerPlugin extends ContentTabManagerPluginBase{

    public*/function ContentTabManagerPlugin$(config/*:ContentTabManagerPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase,{});
    var defaults_$1/*:ContentTabManagerPlugin*/ =AS3.cast(ContentTabManagerPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dyEO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase",
      constructor: ContentTabManagerPlugin$,
      super$dyEO: function() {
        com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
