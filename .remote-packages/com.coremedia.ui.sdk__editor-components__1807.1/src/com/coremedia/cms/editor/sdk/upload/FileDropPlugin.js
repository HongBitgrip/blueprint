Ext.define("com.coremedia.cms.editor.sdk.upload.FileDropPlugin", function(FileDropPlugin) {/*package com.coremedia.cms.editor.sdk.upload{
import com.coremedia.cms.editor.sdk.upload.*;
import net.jangaroo.ext.Exml;
public class FileDropPlugin extends FileDropPluginBase{

    public*/function FileDropPlugin$(config/*:FileDropPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.FileDropPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.FileDropPluginBase,{});
    var defaults_$1/*:FileDropPlugin*/ =AS3.cast(FileDropPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AB8H(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.FileDropPluginBase",
      constructor: FileDropPlugin$,
      super$AB8H: function() {
        com.coremedia.cms.editor.sdk.upload.FileDropPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.upload.FileDropPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
