Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.XliffImportResultWindow", function(XliffImportResultWindow) {/*package com.coremedia.cms.editor.sdk.upload.dialog{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class XliffImportResultWindow extends BulkResultWindow{

    import com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes;

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.xliffImportResultWindow";

    public*/function XliffImportResultWindow$(config/*:XliffImportResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow,{});
    var defaults_$1/*:XliffImportResultWindow*/ =AS3.cast(XliffImportResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , AS3.getBindable(config,"successful") ?
                                    this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'bulkResult_success_window_title') :
                                    this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'bulkResult_error_window_title'));
    AS3.setBindable(config_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.upload.Upload').content);
    AS3.setBindable(config_$1,"errorCodes" , [
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.FAILED,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.DOES_NOT_EXIST,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.MASTER_CHANGED,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.MASTER_VERSION_OUTDATED,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.INVALID_XLIFF,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.INVALID_CONTENT_ID,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.NO_SUCH_PROPERTY,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.ALREADY_CHECKED_OUT,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.STRING_TOO_LONG,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.STRING_LIST_TOO_LONG,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.INVALID_MARKUP,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.DUPLICATE_NAME,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.INVALID_INTERNAL_LINK,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.INVALID_LOCALE,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.EMPTY_TRANSUNIT_TARGET,
                                        com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE]);
    var layout_Anchor_44_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_44_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hwAK(config_$1);
  }/*

    [Bindable]
    public var successful:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.xliffImportResultWindow",
      constructor: XliffImportResultWindow$,
      super$hwAK: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow.prototype.constructor.apply(this, arguments);
      },
      config: {successful: false},
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes"]
    };
});
