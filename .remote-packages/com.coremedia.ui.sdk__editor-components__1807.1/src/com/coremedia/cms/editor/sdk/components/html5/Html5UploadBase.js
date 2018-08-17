Ext.define("com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase", function(Html5UploadBase) {/*package com.coremedia.cms.editor.sdk.components.html5 {

import com.coremedia.cap.content.ContentErrorCodes;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.IssuesDetectedError;
import com.coremedia.cms.editor.sdk.RemoteErrorHandlers;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.components.ExtendedContainer;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.skins.LoadMaskSkin;

import ext.LoadMask;
import ext.Component;
import ext.Ext;
import ext.dom.Element;

import js.XMLHttpRequest;

import mx.resources.ResourceManager;

/**
 * A FormPanel that is capable of uploading a file to store into a content property.
 * The name of the property must be given as the name of the form field that contains the value.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class Html5UploadBase extends ExtendedContainer {

  private var uploadLoadMask:LoadMask;

  /**
   * The value expression referencing the bean that holds the property to upload to.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The bean property to upload the blob to.
   * /
  [Bindable]
  public var targetProperty:String;

  /**
   * Create a FormPanel that is capable of uploading a file to store into a content property.
   * /
  public*/ function Html5UploadBase$(config/*:Html5Upload = null*/) {if(arguments.length<=0)config=null;
    this.super$mY1w(config);
  }/*

  public*/ function uploadHandler(fileSelector/*:**/)/*:void*/ {var this$=this;
    var contentProperties/*:ContentProperties*/ = AS3.getBindable(this,"bindTo").getValue();
    var contentPropertiesUri/*:String*/ = contentProperties.getContentObject().getUri() + '/properties/';
    var upl/*:Uploader*/ = new com.coremedia.cms.editor.sdk.components.html5.Uploader(
    AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Uploader,{maxFileSize: 67108864,
      url: contentPropertiesUri + AS3.getBindable(this,"targetProperty"),
      method: 'POST'}));

    this.itemCollection.each(function(item/*:Component*/)/*:void*/ {
      item.hide();
    });

    upl.addListener('uploadcomplete', function(uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      var error/*:RemoteError*/ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
      if (error.status == 204 || error.status == 200 || error.status == 201) {
        this$.resetStatus$mY1w(fileSelector);
      } else {
        this$.uploadFailure(fileSelector, error, error.errorCode);
      }
    });

    upl.addListener('uploadfailure', function(uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      var errorCode/*:String*/;
      var error/*:RemoteError*/;
      try {
        error = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
        errorCode = error.errorCode;
      } catch (e/*:**/) {
        if (response.responseText.indexOf(com.coremedia.cap.content.ContentErrorCodes.BLOB_MIME_CONTENT_TYPE_MISMATCH) != -1) {
          errorCode = com.coremedia.cap.content.ContentErrorCodes.BLOB_MIME_CONTENT_TYPE_MISMATCH;
        }
      }
      this$.uploadFailure(fileSelector, error, errorCode);
    });

    var files/*:Array*/ = fileSelector.getFileList();
    if (files.length > 0) {
      this.showUploadLoadMask$mY1w();
    }
    Ext.each(files, function(file/*:Object*/)/*:void*/ {
      upl.upload(file);
    }, this);
  }

  function uploadFailure(fileSelector/*:**/, error/*:RemoteError*/, errorCode/*:String*/)/*:void*/ {
    if (AS3.is(error,  com.coremedia.cap.content.IssuesDetectedError)) {
      com.coremedia.cms.editor.sdk.RemoteErrorHandlers.showIssues(AS3.cast(com.coremedia.cap.content.IssuesDetectedError,error));
    } else {
      showErrorForErrorCode$static(errorCode);
    }
    // Error is not passed to error registry, so there is no need to mark it handled.

    this.resetStatus$mY1w(fileSelector);
  }/*

  private static*/ function showErrorForErrorCode$static(errorCode/*:String*/)/*:void*/ {
    if (errorCode === com.coremedia.cap.content.ContentErrorCodes.BLOB_MIME_CONTENT_TYPE_MISMATCH) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_wrongType'));
    } else {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'generalError_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'generalError_message'));
    }
  }/*

  override protected*/ function onDisable()/*:void*/ {
    //super.onDisable();
    this.doDisable$mY1w(true);
  }/*

  override protected*/ function onEnable()/*:void*/ {
    //super.onEnable();
    this.doDisable$mY1w(false);
  }/*

  private*/ function doDisable(disabled/*:Boolean*/)/*:void*/ {
    this.itemCollection.each(function(item/*:Component*/)/*:void*/ {
      item.setDisabled(disabled);
    });
  }/*

  private*/ function resetStatus(fileSelector/*:Object*/)/*:void*/ {
    //(fileSelector.getInputFile() as Element).dom['files'] = [];
    (AS3.as(fileSelector.getInputFile(),  Ext.dom.Element)).dom.value = '';
    var remoteBean/*:RemoteBean*/ = (AS3.as(AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.cap.content.ContentProperties)).getContentObject();
    remoteBean.invalidate();
    this.hideUploadLoadMask$mY1w();
    this.itemCollection.each(function(item/*:Component*/)/*:void*/ {
      item.show();
    });
  }/*

  private*/ function showUploadLoadMask()/*:void*/ {
    if (this.getUploadLoadMask$mY1w().hidden) {
      this.getUploadLoadMask$mY1w().show();
    }
  }/*

  private*/ function hideUploadLoadMask()/*:void*/ {
    if (!this.getUploadLoadMask$mY1w().hidden) {
      this.getUploadLoadMask$mY1w().hide();
    }
  }/*

  private*/ function getUploadLoadMask()/*:LoadMask*/ {
    if (!this.uploadLoadMask$mY1w) {
      var uploadLoadMaskCfg/*:LoadMask*/ = AS3.cast(Ext.LoadMask,{});
      uploadLoadMaskCfg.msg = "";
      uploadLoadMaskCfg.target = this;
      uploadLoadMaskCfg.ui = com.coremedia.ui.skins.LoadMaskSkin.TRANSPARENT.getSkin();
      this.uploadLoadMask$mY1w = new Ext.LoadMask(uploadLoadMaskCfg);
      this.uploadLoadMask$mY1w.hide();
    }
    return this.uploadLoadMask$mY1w;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendedContainer",
      uploadLoadMask$mY1w: null,
      constructor: Html5UploadBase$,
      super$mY1w: function() {
        com.coremedia.ui.components.ExtendedContainer.prototype.constructor.apply(this, arguments);
      },
      uploadHandler: uploadHandler,
      uploadFailure: uploadFailure,
      onDisable: onDisable,
      onEnable: onEnable,
      doDisable$mY1w: doDisable,
      resetStatus$mY1w: resetStatus,
      showUploadLoadMask$mY1w: showUploadLoadMask,
      hideUploadLoadMask$mY1w: hideUploadLoadMask,
      getUploadLoadMask$mY1w: getUploadLoadMask,
      config: {
        bindTo: null,
        targetProperty: null
      },
      requires: [
        "Ext",
        "Ext.LoadMask",
        "Ext.dom.Element",
        "com.coremedia.cap.content.ContentErrorCodes",
        "com.coremedia.cap.content.ContentProperties",
        "com.coremedia.cap.content.IssuesDetectedError",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.ExtendedContainer",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.skins.LoadMaskSkin",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.RemoteErrorHandlers",
        "com.coremedia.cms.editor.sdk.components.html5.Uploader",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
