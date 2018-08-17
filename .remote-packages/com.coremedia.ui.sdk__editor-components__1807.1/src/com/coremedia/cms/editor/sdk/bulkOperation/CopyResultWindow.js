Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.CopyResultWindow", function(CopyResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkCopy')]
public class CopyResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.CopyResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.copyResultWindow";

    public*/function CopyResultWindow$(config/*:CopyResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:CopyResultWindow*/ =AS3.cast(CopyResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkCopy').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_DUPLICATE_NAME,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_FAILED,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_INVALID_NAME,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_NO_READ_RIGHTS,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_NO_RIGHTS,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_TARGET_DELETED,
                com.coremedia.cap.content.results.CopyResultCodes.CONTENT_TARGET_TO_BE_DELETED
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pKpr(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.copyResultWindow",
      constructor: CopyResultWindow$,
      super$pKpr: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CopyResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkCopy_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
