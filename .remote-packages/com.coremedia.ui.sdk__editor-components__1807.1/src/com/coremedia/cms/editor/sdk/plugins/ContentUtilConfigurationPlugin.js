Ext.define("com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPlugin", function(ContentUtilConfigurationPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A Plugin for configuring the com.coremedia.cms.editor.sdk.util.contentUtil.
 * /
public class ContentUtilConfigurationPlugin extends ContentUtilConfigurationPluginBase{

    public*/function ContentUtilConfigurationPlugin$(config/*:ContentUtilConfigurationPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase,{});
    var defaults_$1/*:ContentUtilConfigurationPlugin*/ =AS3.cast(ContentUtilConfigurationPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$DJFM(config_$1);
  }/*

    /**
     The maximum amount of documents a folder is expanded to; 0 means unlimited; defaults to 100
     * /
    [Bindable]
    public var expandFolderLimit:uint;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: ContentUtilConfigurationPlugin$,
      super$DJFM: function() {
        com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {expandFolderLimit: 0},
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
