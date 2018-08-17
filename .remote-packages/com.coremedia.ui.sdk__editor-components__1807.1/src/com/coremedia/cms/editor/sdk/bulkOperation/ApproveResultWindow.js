Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.ApproveResultWindow", function(ApproveResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove')]
public class ApproveResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.ApproveResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.approveResultWindow";

    public*/function ApproveResultWindow$(config/*:ApproveResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:ApproveResultWindow*/ =AS3.cast(ApproveResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.ApproveResultCodes.DOCUMENT_NO_RIGHTS,
                com.coremedia.cap.content.results.ApproveResultCodes.FOLDER_NO_RIGHTS,
                com.coremedia.cap.content.results.ApproveResultCodes.DOCUMENT_NOT_VALID,
                com.coremedia.cap.content.results.ApproveResultCodes.FOLDER_NOT_VALID,
                com.coremedia.cap.content.results.ApproveResultCodes.DOCUMENT_DELETED,
                com.coremedia.cap.content.results.ApproveResultCodes.FOLDER_DELETED,
                com.coremedia.cap.content.results.ApproveResultCodes.DOCUMENT_CHECKED_OUT_BY_OTHER
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ROy7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.approveResultWindow",
      constructor: ApproveResultWindow$,
      super$ROy7: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.ApproveResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
