Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.DisapproveResultWindow", function(DisapproveResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove')]
public class DisapproveResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.DisapproveResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.disapproveResultWindow";

    public*/function DisapproveResultWindow$(config/*:DisapproveResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:DisapproveResultWindow*/ =AS3.cast(DisapproveResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.DisapproveResultCodes.DOCUMENT_ALREADY_PUBLISHED,
                com.coremedia.cap.content.results.DisapproveResultCodes.FOLDER_ALREADY_PUBLISHED,
                com.coremedia.cap.content.results.DisapproveResultCodes.DOCUMENT_DELETED,
                com.coremedia.cap.content.results.DisapproveResultCodes.DOCUMENT_NO_RIGHTS,
                com.coremedia.cap.content.results.DisapproveResultCodes.FOLDER_NO_RIGHTS
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Z9y$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.disapproveResultWindow",
      constructor: DisapproveResultWindow$,
      super$Z9y$: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.DisapproveResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
