Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase", function(UploadProgressContainerBase) {/*package com.coremedia.cms.editor.sdk.upload.dialog {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.IssuesDetectedError;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResult;
import com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultItem;
import com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.ui.components.StatefulProgressBar;
import com.coremedia.ui.components.StatefulQuickTip;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.IssuesUtil;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.EventUtil;

import ext.ComponentManager;
import ext.JSON;
import ext.StringUtil;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.tip.QuickTipManager;

/**
 * Base class for the upload progress container, implements
 * the actual upload and updates the status of the panel.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class UploadProgressContainerBase extends Container {
  private const ALWAYS_CHECKIN:Boolean = true;

  /**
   * The file wrapper model for this panel.
   * /
  [Bindable]
  public var file:FileWrapper;

  /**
   * The folder to upload the file to.
   * /
  [Bindable]
  public var folder:Content;

  /**
   * The function to call when the upload is finished.
   * /
  [Bindable]
  public var callback:Function;

  /**
   * The settings used for this dialog.
   * /
  [Bindable]
  public var settings:UploadSettings;

  /**
   * A set of XliffImportResultCodes that should be ignored when uploading an XLIFF file
   * /
  [Bindable]
  public var ignoredXliffResultCodes:Array =*/function ignoredXliffResultCodes_(){this.ignoredXliffResultCodes=( [com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE]);}/*;

  private var progressBar:StatefulProgressBar;
  private var filenameLabel:DisplayField;

  public*/ function UploadProgressContainerBase$(config/*:UploadProgressContainerBase = null*/) {if(arguments.length<=0)config=null;
    this.super$GtDH(config);ignoredXliffResultCodes_.call(this);;
  }/*

  override protected*/ function initComponent()/*:void*/ {
    Ext.container.Container.prototype.initComponent.call(this);
    this.progressBar$GtDH =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer.PROGRESS_BAR),  com.coremedia.ui.components.StatefulProgressBar);
    this.filenameLabel$GtDH =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer.PROGRESS_STATUS_TEXT),  Ext.form.field.Display);
    this.progressBar$GtDH.updateText(this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_waiting'));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.tip.QuickTipManager.unregister(this.filenameLabel$GtDH.getId());
    Ext.tip.QuickTipManager.unregister(this.progressBar$GtDH.getId());
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    Ext.tip.QuickTipManager.register(AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{
      target: this.filenameLabel$GtDH.getId(),
      text: AS3.getBindable(this,"file").getName(),
      validationState: com.coremedia.ui.mixins.ValidationState.INFO,
      trackMouse: false,
      autoHide: true,
      dismissDelay: 3000
    }));
  }/*

  /**
   * Triggers the upload with the given data.
   * /
  public*/ function startUpload()/*:void*/ {
    //update the visible status
    if (AS3.getBindable(this,"file").getStatus() !== com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_ERROR) {
      AS3.getBindable(this,"file").setStatus(com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_UPLOADING);
      this.progressBar$GtDH.updateProgress(0, this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_running'));
    }

    //start data transfer
    if (AS3.getBindable(this,"file").isXliff()) {
      AS3.getBindable(this,"file").uploadXliff(AS3.getBindable(this,"settings"),AS3.bind( this,"xliffUploaded$GtDH"),AS3.bind( this,"uploadError$GtDH"),AS3.bind( this,"uploadProgress$GtDH"));
    } else {
      AS3.getBindable(this,"file").upload(AS3.getBindable(this,"settings"), AS3.getBindable(this,"folder"),AS3.bind( this,"fileUploadedAndContentCreated$GtDH"),AS3.bind( this,"uploadError$GtDH"),AS3.bind( this,"uploadProgress$GtDH"));
    }
  }/*

  private*/ function uploadProgress(percentage/*:int*/)/*:void*/ {
    var progress/*:Number*/ = percentage / 100;
    if (percentage < 100) {
      this.progressBar$GtDH.updateProgress(progress, this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_running'));
    }
    else {
      this.progressBar$GtDH.updateProgress(progress, this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_processing'));
    }
  }/*

  private*/ function xliffUploaded(xliffBulkOperationResult/*:XliffBulkOperationResult*/)/*:void*/ {var this$=this;
    var translatedContents/*:Array*/ = [];
    var results/*:Array*/ = xliffBulkOperationResult.results;

    for (var i/*:int*/ = 0; i < results.length; i++) {
      var resultItem/*:XliffBulkOperationResultItem*/ = results[i];
      if (translatedContents.indexOf(resultItem.content) === -1) {
        translatedContents.push(resultItem.content);
      }
    }

    var filteredResults/*:Array*/ = results.filter(function (resultItem/*:XliffBulkOperationResultItem*/)/*:Boolean*/ {
      return resultItem.resultCode !== com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes.SUCCESS &&
              AS3.getBindable(this$,"ignoredXliffResultCodes").indexOf(resultItem.resultCode) === -1;
    });

    if (filteredResults.length > 0) {
      var xliffImportResultWindowCfg/*:XliffImportResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.XliffImportResultWindow,{});
      AS3.setBindable(xliffImportResultWindowCfg,"bulkResultItems" , filteredResults);
      AS3.setBindable(xliffImportResultWindowCfg,"successful" , xliffBulkOperationResult.successful);
      Ext.ComponentManager.create(xliffImportResultWindowCfg).show();
    }

    this.finalizeSuccessfulContentUpload$GtDH(translatedContents);
  }/*

  /**
   * Success handler executed after the file has been uploaded.
   * @param response the response from the server.
   * /
  private*/ function fileUploadedAndContentCreated(response/*:Object*/)/*:void*/ {var this$=this;
    var content/*:Content*/ =AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(response.responseText)),  com.coremedia.cap.content.Content);
    if (content) {
      content.load(function (postProcessedContent/*:Content*/)/*:void*/ {
        var initializer/*:Function*/ = com.coremedia.cms.editor.sdk.editorContext.lookupContentInitializer(postProcessedContent.getType());
        if (initializer) {
          initializer(postProcessedContent);
        }

        this$.finalizeSuccessfulContentUpload$GtDH([postProcessedContent]);
      });
    }
    else {
      this.finalizeSuccessfulUpload$GtDH();
    }
  }/*

  private*/ function finalizeSuccessfulContentUpload(postProcessedContents/*:Array*/)/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      if (this$.ALWAYS_CHECKIN$GtDH) {
        for/* each*/(var $1=0;$1</* in*/ postProcessedContents.length;++$1) {var content/*:Content*/ =postProcessedContents[$1];
          if (content.isCheckedOutByCurrentSession()) {
            content.checkIn();
            return undefined;
          }
        }
      }

      if (AS3.getBindable(this$,"settings")) {
        if (AS3.getBindable(this$,"settings").isOpenInTabSettingEnabled()) {
          var autoOpenTypes/*:Array*/ = AS3.getBindable(this$,"settings").getAutoOpenDocumentTypes();
          if (autoOpenTypes) {
            for/* each*/(var $2=0;$2</* in*/ postProcessedContents.length;++$2) {var content2/*:Content*/ =postProcessedContents[$2];
              var typeName/*:String*/ = content2.getType().getName();
              if (autoOpenTypes.indexOf(typeName) !== -1) {
                com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content2);
              }
            }
          }
        }
        else if (AS3.getBindable(this$,"settings").getOpenInTab()) {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocuments(postProcessedContents);
        }
      }

      return true;
    }).loadValue(function ()/*:void*/ {
      this$.finalizeSuccessfulUpload$GtDH();
    });
  }/*

  private*/ function finalizeSuccessfulUpload()/*:void*/ {
    this.progressBarUpdateSuccess$GtDH();
    AS3.getBindable(this,"file").setStatus(com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_UPLOADED);
    AS3.getBindable(this,"callback").call(null);
  }/*

  private*/ function progressBarUpdateSuccess()/*:void*/ {
    this.progressBar$GtDH.reset();
    this.progressBar$GtDH.updateProgress(1, this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_successful'), true);
    AS3.setBindable(this.progressBar$GtDH,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
  }/*

  /**
   * Invoked when the import document created failed or when the upload
   * itself failed.
   * @param  _ deprecated, not used anymore
   * @param result The remote service method result.
   * /
  private*/ function uploadError(_/*:String*/, result/*:RemoteError*/)/*:void*/ {var this$=this;
    AS3.getBindable(this,"file").setStatus(com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_ERROR);
    var prefixPattern/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_error_tooltip');

    var errorText/*:String*/ = undefined;
    if (result instanceof com.coremedia.cap.content.IssuesDetectedError) {
      var issues/*:Array*/ = AS3.cast(com.coremedia.cap.content.IssuesDetectedError,result).issues;
      for(var i/*:int*/ = 0; i < issues.length; i++) {
        if (errorText === undefined) {
          errorText = "";
        } else {
          errorText += "<br/>";
        }
        errorText += "- " + com.coremedia.cms.editor.sdk.validation.ValidationUtil.formatText(issues[i]);
      }
    } else {
      errorText = result.message;
    }

    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      Ext.tip.QuickTipManager.register(AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{
        target: this$.progressBar$GtDH.getId(),
        text: Ext.String.format(prefixPattern, errorText),
        validationState: com.coremedia.ui.mixins.ValidationState.ERROR,
        trackMouse: false,
        autoHide: true,
        dismissDelay: 3000
      }));

      AS3.setBindable(this$.progressBar$GtDH,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      this$.progressBar$GtDH.reset();
      this$.progressBar$GtDH.setValue(100);
      this$.progressBar$GtDH.updateProgress(1, this$.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_failed'), false);
      AS3.getBindable(this$,"callback").call(null);
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      ALWAYS_CHECKIN$GtDH: true,
      progressBar$GtDH: null,
      filenameLabel$GtDH: null,
      constructor: UploadProgressContainerBase$,
      super$GtDH: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      onDestroy: onDestroy,
      afterRender: afterRender,
      startUpload: startUpload,
      uploadProgress$GtDH: uploadProgress,
      xliffUploaded$GtDH: xliffUploaded,
      fileUploadedAndContentCreated$GtDH: fileUploadedAndContentCreated,
      finalizeSuccessfulContentUpload$GtDH: finalizeSuccessfulContentUpload,
      finalizeSuccessfulUpload$GtDH: finalizeSuccessfulUpload,
      progressBarUpdateSuccess$GtDH: progressBarUpdateSuccess,
      uploadError$GtDH: uploadError,
      config: {
        file: null,
        folder: null,
        callback: null,
        settings: null,
        ignoredXliffResultCodes: undefined
      },
      requires: [
        "Ext.ComponentManager",
        "Ext.JSON",
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.tip.QuickTipManager",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.IssuesDetectedError",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.ui.components.StatefulProgressBar",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.upload.FileWrapper",
        "com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer",
        "com.coremedia.cms.editor.sdk.upload.dialog.XliffImportResultWindow",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil"
      ]
    };
});
