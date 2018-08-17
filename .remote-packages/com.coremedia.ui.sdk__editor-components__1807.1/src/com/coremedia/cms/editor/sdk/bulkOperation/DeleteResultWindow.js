Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.DeleteResultWindow", function(DeleteResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete')]
public class DeleteResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.DeleteResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.deleteResultWindow";

    public*/function DeleteResultWindow$(config/*:DeleteResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:DeleteResultWindow*/ =AS3.cast(DeleteResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.DeleteResultCodes.FOLDER_NOT_EMPTY,
                com.coremedia.cap.content.results.DeleteResultCodes.DOCUMENT_NO_RIGHTS,
                com.coremedia.cap.content.results.DeleteResultCodes.FOLDER_NO_RIGHTS,
                com.coremedia.cap.content.results.DeleteResultCodes.DOCUMENT_STILL_PUBLISHED,
                com.coremedia.cap.content.results.DeleteResultCodes.FOLDER_STILL_PUBLISHED,
                com.coremedia.cap.content.results.DeleteResultCodes.DOCUMENT_CHECKED_OUT_BY_OTHER
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7h5h(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.deleteResultWindow",
      constructor: DeleteResultWindow$,
      super$7h5h: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.DeleteResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
