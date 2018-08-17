Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.UndeleteResultWindow", function(UndeleteResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete')]
public class UndeleteResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.UndeleteResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.undeleteResultWindow";

    public*/function UndeleteResultWindow$(config/*:UndeleteResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:UndeleteResultWindow*/ =AS3.cast(UndeleteResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_UNDELETED,
                com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_UNDELETED,
                com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_ALREADY_UNDELETED,
                com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_ALREADY_UNDELETED,
                com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_FAILED,
                com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_FAILED,
                {resultCode: com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_DUPLICATE_NAME, mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
                {resultCode: com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_DUPLICATE_NAME, mode: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE},
                com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_NO_RIGHTS,
                com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_NO_RIGHTS,
                com.coremedia.cap.content.results.UndeleteResultCodes.DOCUMENT_PARENT_DELETED,
                com.coremedia.cap.content.results.UndeleteResultCodes.FOLDER_PARENT_DELETED
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$n0i4(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.undeleteResultWindow",
      constructor: UndeleteResultWindow$,
      super$n0i4: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.UndeleteResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase"]
    };
});
