Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow", function(CheckInResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn')]
public class CheckInResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.CheckInResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.checkInResultWindow";

    public*/function CheckInResultWindow$(config/*:CheckInResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:CheckInResultWindow*/ =AS3.cast(CheckInResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.CheckInResultCodes.DOCUMENT_NOT_VALID,
                com.coremedia.cap.content.results.CheckInResultCodes.DOCUMENT_NO_RIGHTS,
                com.coremedia.cap.content.results.CheckInResultCodes.DOCUMENT_CHECKED_OUT_BY_OTHER,
                com.coremedia.cap.content.results.CheckInResultCodes.FOLDER_CANNOT_CHECK_IN
          ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YzW7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.checkInResultWindow",
      constructor: CheckInResultWindow$,
      super$YzW7: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CheckInResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
