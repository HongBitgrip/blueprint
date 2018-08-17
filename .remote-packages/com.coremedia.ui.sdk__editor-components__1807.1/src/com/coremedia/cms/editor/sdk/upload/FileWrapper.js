Ext.define("com.coremedia.cms.editor.sdk.upload.FileWrapper", function(FileWrapper) {/*package com.coremedia.cms.editor.sdk.upload {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cms.editor.sdk.components.html5.Uploader;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.StringHelper;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl;
import com.coremedia.ui.logging.Logger;

import ext.JSON;

import js.XMLHttpRequest;

/**
 * Access wrapper for a HTML 5 file object.
 * /
[ResourceBundle('com.coremedia.icons.CoreIcons')]
[ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class FileWrapper extends BeanImpl {
  private static const*/var DEFAULT_UPLOAD_SIZE$static/*:int*/ = 67108864;/*

  public static const FILE_PROPERTY:String = 'file';
  public static const NAME_PROPERTY:String = 'name';
  public static const MIME_TYPE_PROPERTY:String = 'mimeType';
  public static const FILE_TYPE_PROPERTY:String = "extensionType";
  public static const SIZE_PROPERTY:String = 'size';
  public static const UPLOAD_FOLDER_PROPERTY:String = 'uploadFolder';

  private static const*/var XLIFF_MIME_TYPE$static/*:String*/ = "application/x-xliff";/*
  private static const*/var XLIFF_MIME_TYPE_EXT$static/*:String*/;/* =*/function XLIFF_MIME_TYPE_EXT$static_(){XLIFF_MIME_TYPE_EXT$static=( XLIFF_MIME_TYPE$static + '+xml');};/*

  public static const STATUS_ERROR:int = -1;
  public static const STATUS_WAITING:int = 0;
  public static const STATUS_UPLOADING:int = 1;
  public static const STATUS_UPLOADED:int = 2;

  //The HTML file object
  private var file:*;

  private var resultObject:Object;

  private var status:int =*/function status_(){this.status$FX$a=( FileWrapper.STATUS_WAITING);}/*;

  private var customUploadUrl;

  public*/ function FileWrapper$(file/*:**/) {this.super$FX$a();status_.call(this);
    this.file$FX$a = file;

    var fileName/*:String*/ = file.name;
    var name/*:String*/ = fileName;

    if (name.indexOf(".") !== -1) {
      name = com.coremedia.cms.editor.sdk.util.StringHelper.trim(name.substring(0, name.lastIndexOf(".")), ' ');
    }

    this.set(FileWrapper.NAME_PROPERTY, name);
    this.set(FileWrapper.FILE_PROPERTY, file);

    var mimeType/*:String*/ = file.type;
    if (!mimeType) {
      mimeType = 'text/plain';
    }
    if (fileName.search(/\.(xliff|xlf)$/) !== -1) {
      mimeType = XLIFF_MIME_TYPE$static;
    }

    var extensionType/*:String*/ = "";
    if (fileName.indexOf(".") !== -1) {
      extensionType = fileName.substr(fileName.lastIndexOf(".") + 1).toLowerCase();
    }
    this.set(FileWrapper.FILE_TYPE_PROPERTY, extensionType);
    this.set(FileWrapper.MIME_TYPE_PROPERTY, mimeType);
    this.set(FileWrapper.SIZE_PROPERTY, file.size);
  }/*

  public*/ function setCustomUploadUrl(url/*:String*/)/*:String*/ {
    this.customUploadUrl$FX$a = url;
  }/*

  public*/ function setResultObject(result/*:Object*/)/*:void*/ {
    this.resultObject$FX$a = result;
  }/*

  public*/ function getResultObject()/*:Object*/ {
    return this.resultObject$FX$a;
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(FileWrapper.NAME_PROPERTY);
  }/*

  public*/ function getSize()/*:int*/ {
    return this.get(FileWrapper.SIZE_PROPERTY);
  }/*

  public*/ function getMimeType()/*:String*/ {
    return this.get(FileWrapper.MIME_TYPE_PROPERTY);
  }/*

  public*/ function getFile()/*:**/ {
    return this.get(FileWrapper.FILE_PROPERTY);
  }/*

  public*/ function isXliff()/*:Boolean*/ {
    return this.getMimeType() === XLIFF_MIME_TYPE$static || this.getMimeType() === XLIFF_MIME_TYPE_EXT$static;
  }/*

  public*/ function getStatus()/*:int*/ {
    return this.status$FX$a;
  }/*

  public*/ function setStatus(value/*:int*/)/*:void*/ {
    this.status$FX$a = value;
  }/*

  public*/ function uploadXliff(settings/*:UploadSettings*/, success/*:Function*/, error/*:Function*/, progress/*:Function*/)/*:void*/ {
    var fileSelector/*:Object*/ = {};
    fileSelector.getInputFile = function ()/*:**/ {
    };
    fileSelector.detachInputFile = function ()/*:**/ {
    };
    fileSelector.getFileCls = function ()/*:String*/ {
      return settings.getDefaultContentType();
    };
    fileSelector.getFileName = function ()/*:String*/ {
      return "";
    };

    var url/*:String*/ = com.coremedia.ui.data.impl.RemoteService.calculateRequestURI('translate/importXliff');
    var upldr/*:Uploader*/ = new com.coremedia.cms.editor.sdk.components.html5.Uploader(AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Uploader,{
      fileSelector: fileSelector,
      timeout: this.getTimeout$FX$a(settings),
      url: url,
      method: 'POST'
    }));

    upldr.addListener('uploadcomplete', function (_uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      var remoteServiceMethodResponse/*:RemoteServiceMethodResponse*/ = new com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl(url, true, response, {});
      var bulkOperationResult/*:BulkOperationResult*/ = new com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultBuilder().convert(remoteServiceMethodResponse);
      success(bulkOperationResult);
    });

    upldr.addListener('uploadfailure', function (_uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      error(response);
    });

    upldr.addListener('uploadprogress', function (_uploader/*:Uploader*/, e/*:**/)/*:void*/ {
      var percent/*:Number*/ = Math.round(e.loaded / e.total * 100);
      progress(percent);
      com.coremedia.ui.logging.Logger.debug('Upload progress: ' + percent);
    });

    upldr.addListener('uploadtimeout', function (_uploader/*:Uploader*/, e/*:**/)/*:void*/ {
      error(e);
      AS3.trace('[DEBUG]', ' Timeout for upload');
    });

    upldr.upload(this.file$FX$a);
  }/*

  /**
   * Starts the actual data transfer. For the file of this file wrapper a Studio Uploader instance is
   * created with the corresponding event listeners. The given result callbacks are call with necessary parameters
   * to show the result of the upload.
   * @param settings The settings that define the max upload size ...
   * @param folder The folder under which to upload the file.
   * @param success The success handler called after a successful upload.
   * @param error The error handler called if the upload failed.
   * @param progress Callback for upload progress listener
   * /
  public*/ function upload(settings/*:UploadSettings*/, folder/*:Content*/, success/*:Function*/, error/*:Function*/, progress/*:Function*/)/*:void*/ {var this$=this;
    var headerParams/*:Object*/ = {};

    if (com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite()) {
      headerParams.site = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();
    }

    if (folder) {
      headerParams.folderUri = folder.getUriPath();
    }

    var uploaderConfig/*:Uploader*/ = AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Uploader,{});
    AS3.setBindable(uploaderConfig,"maxFileSize" , DEFAULT_UPLOAD_SIZE$static);
    AS3.setBindable(uploaderConfig,"timeout" , this.getTimeout$FX$a(settings));
    AS3.setBindable(uploaderConfig,"url" , this.customUploadUrl$FX$a ? com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.customUploadUrl$FX$a) : com.coremedia.ui.data.impl.RemoteService.calculateRequestURI('upload/create'));
    AS3.setBindable(uploaderConfig,"method" , 'POST');
    AS3.setBindable(uploaderConfig,"headerParams" , headerParams);
    AS3.setBindable(uploaderConfig,"params" , {contentName: this.getName()});

    var upldr/*:Uploader*/ = new com.coremedia.cms.editor.sdk.components.html5.Uploader(uploaderConfig);

    upldr.addListener('uploadcomplete', function (_uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      this$.setResultObject(com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(response.responseText)));

      //Hack for html4 upload.
      if (response.status === 201) {
        success.call(null, response);
      }
      else {
        error.call(null, response.statusText + ' (code ' + response.status + ')');
      }
    });

    upldr.addListener('uploadfailure', function (_uploader/*:Uploader*/, response/*:XMLHttpRequest*/)/*:void*/ {
      try {
        var result/*:RemoteError*/ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
        error.call(null, result.message, result);
      }
      catch(e){if(AS3.is (e,AS3.Error)) {
        error.call(null, response.responseText);
      }else throw e;}
    });

    upldr.addListener('uploadprogress', function (_uploader/*:Uploader*/, e/*:**/)/*:void*/ {
      if (e.lengthComputable) {
        var percent/*:Number*/ = Math.round(e.loaded / e.total * 100);
        progress(percent);
      } else {
        com.coremedia.ui.logging.Logger.debug('Unable to compute progress information of Upload since the total size is unknown.');
      }
    });

    upldr.addListener('uploadtimeout', function (_uploader/*:Uploader*/, e/*:**/)/*:void*/ {
      error(e);
      AS3.trace('[DEBUG]', ' Timeout for upload');
    });

    upldr.upload(this.file$FX$a);
  }/*

  private*/ function getTimeout(settings/*:UploadSettings*/)/*:Number*/ {
    if (settings) {
      return settings.getTimeout();
    }

    return 300000;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      file$FX$a: undefined,
      resultObject$FX$a: null,
      customUploadUrl$FX$a: undefined,
      constructor: FileWrapper$,
      super$FX$a: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      setCustomUploadUrl: setCustomUploadUrl,
      setResultObject: setResultObject,
      getResultObject: getResultObject,
      getName: getName,
      getSize: getSize,
      getMimeType: getMimeType,
      getFile: getFile,
      isXliff: isXliff,
      getStatus: getStatus,
      setStatus: setStatus,
      uploadXliff: uploadXliff,
      upload: upload,
      getTimeout$FX$a: getTimeout,
      statics: {
        FILE_PROPERTY: 'file',
        NAME_PROPERTY: 'name',
        MIME_TYPE_PROPERTY: 'mimeType',
        FILE_TYPE_PROPERTY: "extensionType",
        SIZE_PROPERTY: 'size',
        UPLOAD_FOLDER_PROPERTY: 'uploadFolder',
        XLIFF_MIME_TYPE_EXT: undefined,
        STATUS_ERROR: -1,
        STATUS_WAITING: 0,
        STATUS_UPLOADING: 1,
        STATUS_UPLOADED: 2,
        __initStatics__: function() {
          XLIFF_MIME_TYPE_EXT$static_();
        }
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.JSON",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.html5.Uploader",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultBuilder",
        "com.coremedia.cms.editor.sdk.util.StringHelper"
      ]
    };
});
