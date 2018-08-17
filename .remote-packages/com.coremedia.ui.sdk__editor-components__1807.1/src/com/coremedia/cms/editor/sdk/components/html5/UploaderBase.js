Ext.define("com.coremedia.cms.editor.sdk.components.html5.UploaderBase", function(UploaderBase) {/*package com.coremedia.cms.editor.sdk.components.html5 {

import com.coremedia.ui.data.impl.RemoteService;

import ext.util.Observable;

import js.XMLHttpRequest;

public class UploaderBase extends Observable {
  private var url:String = '';
  private var method:String;
  private var timeout:int = 300000; // Default timeout 5 minutes
  private var headerParams:Object;
  private var params:Object;

  /**
   * @param config the config object
   * /
  public*/ function UploaderBase$(config/*:Uploader = null*/) {if(arguments.length<=0)config=null;
    if(config) {
      this.url$N_2X = AS3.getBindable(config,"url");
      this.method$N_2X = AS3.getBindable(config,"method")?AS3.getBindable(config,"method"):'PUT';
      this.timeout$N_2X = AS3.getBindable(config,"timeout") || this.timeout$N_2X;
      this.headerParams$N_2X = AS3.getBindable(config,"headerParams");
      this.params$N_2X = AS3.getBindable(config,"params");
    }
    this.super$N_2X();

    /**
     * @event uploadcomplete
     * Fires when the upload was done successfully
     * @param {Uploader} this
     * @param {XMLHttpRequest} response
     */

    /**
     * @event uploadfailure
     * Fires when the upload failed
     * @param {Uploader} this
     * @param {XMLHttpRequest} response
     */

    /**
     * @event uploadprogress
     * Fires on upload progress (html5 only)
     * @param {Uploader} this
     * @param {XMLHttpRequestProgressEvent}
     */

    /**
     * @event uploadtimeout
     * Fires on upload timout (html5 only)
     * @param {Uploader} this
     * @param {XMLHttpRequestProgressEvent}
     */
  }/*

  /**
   * perform the upload
   *
   * @param  file to upload (optional for html5 uploads)
   * @return upload result
   * /
  public*/ function upload(file/*:**/)/*:void*/ {
    var contentName/*:String*/ = this.params$N_2X ? this.params$N_2X.contentName : undefined;
    this.html5upload(file, this.headerParams$N_2X, contentName);
  }/*

  /**
   * 2010-01-26 Current Browsers implementation state of:
   *  http://www.w3.org/TR/FileAPI
   *
   *  Interface: File | Blob | FileReader | FileReaderSync | FileError
   *  FF       : yes  | no   | no         | no             | no
   *  safari   : yes  | no   | no         | no             | no
   *  chrome   : yes  | no   | no         | no             | no
   *
   *  => no json rpc style upload possible
   *  => no chunked uploads possible
   *
   *  But all of them implement XMLHttpRequest Level 2:
   *   http://www.w3.org/TR/XMLHttpRequest2/
   *  => the only way of uploading is using the XMLHttpRequest Level 2.
   * /
  public*/ function html5upload(file/*:**/, headerParameters/*:Object = undefined*/, contentName/*:String = undefined*/)/*:void*/ {var this$=this;
    var formData/*:**/ = new window['FormData']();  // TODO: add FormData class to Jangaroo libs

    var fileName/*:String*/ = file.name || file.fileName; // safari and chrome use the non std. fileX props

    if (fileName) {
      formData.append('file', file, fileName);
    } else {
      formData.append('file', file);
    }

    if (contentName){
      formData.append('contentName', contentName);
    }

    var xhr/*:XMLHttpRequest*/ = new XMLHttpRequest();

    xhr.open(this.method$N_2X, this.url$N_2X, true);

    xhr['onload'] = function(e/*:**/)/*:void*/ { this$.uploadCallback$N_2X(xhr); };
    xhr['timeout'] = this.timeout$N_2X;
    xhr['ontimeout'] = function (e/*:**/)/*:void*/ { this$.onUploadTimeout(e); };
    xhr['upload'].addEventListener("progress", function(e/*:**/)/*:void*/ { this$.onUploadProgress(e); }, false);

    // TODO[rre]: if we could use Ajax.request here instead of XMLHttpRequest, the header would come for free
    xhr.setRequestHeader(com.coremedia.ui.data.impl.RemoteService.getCsrfTokenHeaderName(), com.coremedia.ui.data.impl.RemoteService.getCsrfTokenValue());

    if (headerParameters) {
      for (var key/*:String*/ in headerParameters) {
        xhr.setRequestHeader(key, headerParameters[key]);
      }
    }

    xhr.send(formData);
  }/*

  public*/ function onUploadProgress(e/*:**/)/*:void*/ {
    this.fireEvent('uploadprogress', this, e);
  }/*

  public*/ function onUploadTimeout(e/*:**/)/*:void*/ {
    this.fireEvent('uploadtimeout', this, e);
  }/*

  private*/ function uploadCallback(response/*:XMLHttpRequest*/)/*:void*/ {
    var status/*:int*/ = response.status;
    if (status == 204 || status == 200 || status == 201) {
      this.fireEvent('uploadcomplete', this, response);
    } else {
      this.fireEvent('uploadfailure', this, response);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      url$N_2X: '',
      method$N_2X: null,
      timeout$N_2X: 300000,
      headerParams$N_2X: null,
      params$N_2X: null,
      constructor: UploaderBase$,
      super$N_2X: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      upload: upload,
      html5upload: html5upload,
      onUploadProgress: onUploadProgress,
      onUploadTimeout: onUploadTimeout,
      uploadCallback$N_2X: uploadCallback,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.ui.data.impl.RemoteService"
      ]
    };
});
