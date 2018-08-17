Ext.define("com.coremedia.cms.editor.sdk.util.ContentExportAction", function(ContentExportAction) {/*package com.coremedia.cms.editor.sdk.util{
import com.coremedia.cms.editor.sdk.util.*;
import net.jangaroo.ext.Exml;
public class ContentExportAction extends ContentExportActionBase{

    public static const ACTION_ID:String = "contentExportAction";

    public*/function ContentExportAction$(config/*:ContentExportAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.util.ContentExportActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.ContentExportActionBase,{});
    var defaults_$1/*:ContentExportAction*/ =AS3.cast(ContentExportAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YE_H(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.ContentExportActionBase",
      constructor: ContentExportAction$,
      super$YE_H: function() {
        com.coremedia.cms.editor.sdk.util.ContentExportActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "contentExportAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.util.ContentExportActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
