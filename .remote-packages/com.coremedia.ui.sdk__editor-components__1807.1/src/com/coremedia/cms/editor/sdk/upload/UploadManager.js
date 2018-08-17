Ext.define("com.coremedia.cms.editor.sdk.upload.UploadManager", function(UploadManager) {/*package com.coremedia.cms.editor.sdk.upload {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl;
import com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog;
import com.coremedia.cms.editor.sdk.util.ContentCreationUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * Provides default handlers to be executed for the FileUploadPlugin.
 * May be used for other handlers as well, e.g. if an additional GUI should be provided.
 * /
public class UploadManager {

  /**
   * Returns the document type that is mapped for the mimetype of the given file.
   * @param file the file to calculate the target document type for
   * @param settings the upload settings
   * @return the coremedia document type name
   * /
  public static*/ function getMappedDocumentType$static(file/*:FileWrapper*/, settings/*:UploadSettings*/)/*:String*/ {
    var mimeType/*:String*/ = file.getMimeType();
    if (settings.getMimeTypeMappings()) {
      var documentType/*:String*/ = settings.getMimeTypeMappings()[mimeType];
      if (!documentType && mimeType.indexOf('/') !== -1) {
        var parentMimeType/*:String*/ = mimeType.substr(0, mimeType.indexOf('/'));
        documentType = settings.getMimeTypeMappings()[parentMimeType];
      }
      return documentType || settings.getDefaultContentType();
    }

    return null;
  }/*


  /**
   * The default upload method used by the FileDropPlugin.
   * @param files the FileWrapper instances that contain the HTML5 file object
   * @param folder the folder to upload the files to
   * @param settings the upload settings
   * @param modal true to ensure that the progress dialog is modal, defaults to false
   * @param callback the optional callback function
   * /
  public static*/ function upload$static(files/*:Array*/, folder/*:Content*/, settings/*:UploadSettings = null*/, modal/*:Boolean = false*/, callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:settings=null;case 3:modal=false;case 4:callback=null;}
    var path/*:String*/ = folder.getPath();
    //since the plugins does not provide a separate dialog, we use the openInTab settings from the content settings
    settings.setOpenInTabSettingEnabled(true);
    UploadManager.bulkUpload(settings, path, files, modal, callback);
  }/*

  /**
   * The default method for bulk uploads.
   * The call includes the pop-up dialog that shows the upload progress.
   * @param settings the upload settings, contains timeout settings etc.
   * @param uploadDirectory the directory to create the content for
   * @param files the wrapped HTML5 file objects
   * @param modal true to ensure that the progress dialog is modal, defaults to false
   * @param callback optional callback called without parameters
   * /
  public static*/ function bulkUpload$static(settings/*:UploadSettings*/, uploadDirectory/*:String*/, files/*:Array*/, modal/*:Boolean = false*/, callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,3)){case 3:modal=false;case 4:callback=null;}
    var needsUpload/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < files.length; i++) {
      var fileWrapper/*:FileWrapper*/ = files[i];
      if (!fileWrapper.isXliff()) {
        needsUpload = true;
      }
    }

    if (!needsUpload) {
      showUploadProgressDialog$static(files, settings, null, modal, callback);
    } else {
      if (uploadDirectory) {
        com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(uploadDirectory, function (folder/*:Content*/)/*:void*/ {
          if (folder) { //ensure loading to display path information
            folder.load(function ()/*:void*/ {
              showUploadProgressDialog$static(files, settings, folder, modal, callback);
            });
          }
          else {
            com.coremedia.cms.editor.sdk.util.ContentCreationUtil.createRequiredSubfolders(uploadDirectory,
                    function (result/*:FolderCreationResultImpl*/)/*:void*/ {
                      if (result.success) {
                        UploadManager.bulkUpload(settings, uploadDirectory, files, modal, callback);
                      }
                      else if (result.remoteError) {
                        var msg/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_folder_error'),
                                uploadDirectory,
                                result.remoteError.errorName);
                        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_error'), msg);
                      }
                    }, true);
          }
        });
      }
      else { //no content upload, so no folder given here!
        showUploadProgressDialog$static(files, settings, null, modal, callback);
      }
    }
  }/*

  private static*/ function showUploadProgressDialog$static(files/*:Array*/, settings/*:UploadSettings*/, folder/*:Content*/, modal/*:Boolean*/, callback/*:Function*/)/*:void*/ {
    var pgDialog/*:UploadProgressDialog*/ = new com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog(AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog,{
      files: files,
      settings: settings,
      folder: folder,
      modal: modal,
      callback: callback
    }));
    pgDialog.show();
  }/*
}*/function UploadManager$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: UploadManager$,
      statics: {
        getMappedDocumentType: getMappedDocumentType$static,
        upload: upload$static,
        bulkUpload: bulkUpload$static
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog",
        "com.coremedia.cms.editor.sdk.util.ContentCreationUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
