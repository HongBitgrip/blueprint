Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase", function(UploadProgressDialogBase) {/*package com.coremedia.cms.editor.sdk.upload.dialog {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.ui.util.EventUtil;

import ext.container.Container;

/**
 * Base class of the upload dialog, contains the
 * items marked for uploading.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class UploadProgressDialogBase extends StudioDialog {

  /**
   * The file array of file wrapper instances.
   * /
  [Bindable]
  public var files:Array;

  /**
   * The directory the files will be uploaded too.
   * /
  [Bindable]
  public var folder:Content;

  /**
   * Optional callback function called when finished
   * /
  [Bindable]
  public var callback:Function;

  private var uploadContainers:Array =*/function uploadContainers_(){this.uploadContainers$zpGw=( []);}/*;
  private var activeUploadIndex:int = 0;

  /**
   * The settings used for this dialog.
   * /
  [Bindable]
  public var settings:UploadSettings;

  public*/ function UploadProgressDialogBase$(config/*:UploadProgressDialogBase = null*/) {if(arguments.length<=0)config=null;
    this.super$zpGw(config);uploadContainers_.call(this);;
    this.addListener('render',AS3.bind( this,"addUploads$zpGw"));
  }/*

  /**
   * Add the file panels after render
   * /
  private*/ function addUploads()/*:void*/ {var this$=this;
    this.removeListener('render',AS3.bind( this,"addUploads$zpGw"));
    this.addUploadItems$zpGw();
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      this$.uploadActiveItem();
    });
  }/*

  /**
   * Creates the upload status panels and adds
   * them to the dialog.
   * /
  private*/ function addUploadItems()/*:void*/ {
    var uploadContainer/*:Container*/ =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog.PROGRESS_LIST),  Ext.container.Container);
    for (var i/*:int*/ = 0; i < AS3.getBindable(this,"files").length; i++) {
      var progressContainer/*:UploadProgressContainer*/ = new com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer(AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer,{
        file: AS3.getBindable(this,"files")[i],
        folder: AS3.getBindable(this,"folder"),
        settings: AS3.getBindable(this,"settings"),
        callback:AS3.bind( this,"uploadActiveItem")
      }));
      uploadContainer.add(progressContainer);
      this.uploadContainers$zpGw.push(progressContainer);
    }
  }/*

  /**
   * Starts the upload for the current active item.
   * Once the callback is called, the next upload is triggered
   * until all uploads have finished and the dialog is closed.
   * /
  public*/ function uploadActiveItem()/*:void*/ {
    if (this.uploadContainers$zpGw.length > this.activeUploadIndex$zpGw) {
      var uploadContainer/*:UploadProgressContainer*/ = this.uploadContainers$zpGw[this.activeUploadIndex$zpGw];
      uploadContainer.startUpload();
      this.activeUploadIndex$zpGw++;
    }
    else {
      //all files processed, check error state afterwards
      var close/*:Boolean*/ = true;
      for (var i/*:int*/ = 0; i < AS3.getBindable(this,"files").length; i++) {
        if (AS3.getBindable(this,"files")[i].getStatus() === com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_ERROR) {
          close = false;
          this.setTitle(this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_upload_failed'));
          break;
        }
      }
      if (close) {
        this.close();
      }
    }
  }/*

  override public*/ function close()/*:void*/ {
    var closeable/*:Boolean*/ = true;
    for (var i/*:int*/ = 0; i < AS3.getBindable(this,"files").length; i++) {
      var file/*:FileWrapper*/ = AS3.getBindable(this,"files")[i];
      if (file.getStatus() === com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_WAITING || file.getStatus() === com.coremedia.cms.editor.sdk.upload.FileWrapper.STATUS_UPLOADING) {
        closeable = false;
        break;
      }
    }
    if (closeable) {
      if(AS3.getBindable(this,"callback")) {
        AS3.getBindable(this,"callback").call(null, AS3.getBindable(this,"files"));
      }
      com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.close.call(this);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      activeUploadIndex$zpGw: 0,
      constructor: UploadProgressDialogBase$,
      super$zpGw: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      addUploads$zpGw: addUploads,
      addUploadItems$zpGw: addUploadItems,
      uploadActiveItem: uploadActiveItem,
      close: close,
      config: {
        files: null,
        folder: null,
        callback: null,
        settings: null
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.upload.FileWrapper",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog"
      ]
    };
});
