Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.MoveResultWindow", function(MoveResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.bulkOperation.BulkMove')]
public class MoveResultWindow extends BulkResultWindow{

    import com.coremedia.cap.content.results.MoveResultCodes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.moveResultWindow";

    public*/function MoveResultWindow$(config/*:MoveResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:MoveResultWindow*/ =AS3.cast(MoveResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.bulkOperation.BulkMove').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_DUPLICATE_NAME,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_MOVE_TO_OTHER_BASE_FOLDER,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_NO_RIGHTS,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_NO_RIGHTS_ON_TARGET,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_TARGET_DELETED,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_TARGET_TO_BE_DELETED,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_UNCHANGED,
                com.coremedia.cap.content.results.MoveResultCodes.CONTENT_TARGET_IS_DESCENDANT
              ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$TYzH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.cms.editor.sdk.config.moveResultWindow",
      constructor: MoveResultWindow$,
      super$TYzH: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.MoveResultCodes",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkMove_properties",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "net.jangaroo.ext.Exml"
      ]
    };
});
