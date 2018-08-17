Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewIFrame", function(PreviewIFrame) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
public class PreviewIFrame extends PreviewIFrameBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewIFrame";

    public*/function PreviewIFrame$(config/*:PreviewIFrame = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase,{});
    var defaults_$1/*:PreviewIFrame*/ =AS3.cast(PreviewIFrame,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Bhbi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewIFrame",
      constructor: PreviewIFrame$,
      super$Bhbi: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
