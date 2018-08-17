Ext.define("com.coremedia.ui.data.impl.BlobImpl", function(BlobImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.*;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.RequestCounter;
import com.coremedia.ui.util.WithEquals;

import ext.util.Observable;

import js.XMLHttpRequest;

public class BlobImpl extends Observable implements Blob, WithEquals {

  private var path:String;
  private var contentType:String;
  private var size:int;
  private var data:*;
  /**
   * A fingerprint of this blob as stored on the server.
   * Only the server may generate hashes. The client may assume
   * that two blobs with the same hash contain the same content.
   * /
  private var hash:String;
  private var metadata:RemoteBean;

  private static const*/var NOT_LOADED$static/*:int*/ = -2;/*
  private static const*/var LOADING$static/*:int*/ = -1;/*
  private static const*/var LOADED$static/*:int*/ = 0;/*

  private var state:int;
  private static*/ var browserHasNameSpaceSupport$static/*:Boolean*/=false;function static$0(){

  // static initializer
  {
    try {
      browserHasNameSpaceSupport$static = window.document.documentElement['getAttributeNS'];
    } catch (e/*:**/) {
      browserHasNameSpaceSupport$static = false;
    }
    com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl
            .initRemoteErrorHandlerRegistry()
            .registerErrorHandler(remoteErrorHandler$static);
  }}/*

  public*/ function BlobImpl$(path/*:String*/, contentType/*:String*/, size/*:int*/, data/*:* = undefined*/, hash/*:String = null*/, metadata/*:RemoteBean = null*/) {this.super$qUFh();switch(Math.max(arguments.length,4)){case 4:hash=null;case 5:metadata=null;}
    // Add the authentication parameter to the URL to prevent cross-site request forgery.
    this.path$qUFh = path;
    this.contentType$qUFh = contentType;
    this.size$qUFh = size;
    this.data$qUFh = data;
    this.hash$qUFh = hash;
    this.metadata$qUFh = metadata;
    this.state$qUFh = data === undefined ? NOT_LOADED$static : LOADED$static;
  }/*

  /**
   * Return whether this Blob represents an immutable value, which is the case for
   * Blob properties, but not for Markup properties, whose values are also represented as
   * Blobs on the client.
   * @return whether this Blob represents an immutable value
   * /
  public*/ function isImmutable()/*:Boolean*/ {
    return this.size$qUFh !== undefined; // heuristic to detect that "Blob" is not a Markup value, TODO: represent explicitly in REST wire format
  }/*

  public*/ function getUri()/*:String*/ {
    return com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.path$qUFh);
  }/*

  public*/ function getPath()/*:String*/ {
    return this.path$qUFh;
  }/*

  public*/ function isLoaded()/*:Boolean*/ {
    return this.state$qUFh === LOADED$static;
  }/*

  public*/ function getSize()/*:Number*/ {
    return this.size$qUFh;
  }/*

  public*/ function getData()/*:**/ {
    if (this.state$qUFh === NOT_LOADED$static) {
      // request from server:
      this.state$qUFh = LOADING$static;
      this.doRequest$qUFh(false);
    }
    return this.data$qUFh;
  }/*

  private*/ function doRequest(isRetryingAfterTimeout/*:Boolean*/)/*:void*/ {var this$=this;
    if (!com.coremedia.ui.util.RequestCounter.isRequestRecommended()) {
      com.coremedia.ui.util.RequestCounter.whenRequestRecommended(function ()/*:void*/ {
        this$.doRequest$qUFh(isRetryingAfterTimeout);
      });
      return;
    }

    var thys/*:BlobImpl*/ = this;

    com.coremedia.ui.util.RequestCounter.openRequest();
    try {
      com.coremedia.ui.data.impl.RemoteService.getConnection().request({
        url: this.getUri(),
        method: 'GET',
        callback: function (options/*:Object*/, success/*:Boolean*/, response/*:XMLHttpRequest*/)/*:void*/ {
          com.coremedia.ui.util.RequestCounter.closeRequest();
          if (success) {
            this$.state$qUFh = LOADED$static;
            this$.data$qUFh = response.responseText;
            this$.hash$qUFh = com.coremedia.ui.data.impl.RemoteService.getEtag(response);
          } else if (!isRetryingAfterTimeout && com.coremedia.ui.data.impl.RemoteBeanImpl.isTemporaryError(response)) {
            // Blob loads are expected to be costly and might run into
            // an actual request timeout. Retry only once after a timeout.
            window.setTimeout(function()/*:void*/ {
              this$.doRequest$qUFh(response.status === -1);
            }, 10000);
            return;
          } else {
            this$.state$qUFh = LOADED$static;
            // handle error
            var error/*:RemoteError*/ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
            (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(error, thys);
            if(!error.isHandled()) {
              throw new AS3.Error("Communication error: " + this$.getUri() + ", " + response.status + ": " + response.statusText);
            }
          }

          com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(thys, 'data', undefined, this$.data$qUFh);
          com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(thys, 'size', undefined, this$.getSize());
        }
      });
    } catch (e/*:**/) {
      com.coremedia.ui.util.RequestCounter.closeRequest();
      throw new AS3.Error("Unable to send BLOB GET request: " + e);
    }
  }/*

  public*/ function getHash()/*:String*/ {
    return this.hash$qUFh;
  }/*

  internal*/ function setHash(hash/*:String*/)/*:void*/ {
    this.hash$qUFh = hash;
  }/*

  public*/ function getContentType()/*:String*/ {
    return this.contentType$qUFh;
  }/*

  private static*/ function remoteErrorHandler$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    var blobImpl/*:BlobImpl*/ =AS3.as( source,  BlobImpl);
    if(blobImpl && error.status === 404){
      blobImpl.data$qUFh = null;
      AS3.trace("blob "+blobImpl.getUri()+" not found: "+error);
    }
  }/*

  public static*/ function create$static(original/*:Blob*/, data/*:**/, mimeType/*:String = null*/, calculateSize/*:Boolean = false*/)/*:Blob*/ {switch(Math.max(arguments.length,2)){case 2:mimeType=null;case 3:calculateSize=false;}
    var path/*:String*/ = "";
    if (original) {
      path = (AS3.as(original,  BlobImpl)).getPath();
    }
    if (!mimeType) {
      if (original && original.getContentType()) {
        mimeType = original.getContentType();
      } else {
        mimeType = "text/xml";
      }
    }
    var size/*:int*/ = calculateSize ? data.length : undefined;
    return new BlobImpl(path, mimeType, size, data);
  }/*


  public*/ function loadData(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    if (this.isLoaded()) {
      if (callback) {
        callback(this);
      }
    } else {
      if (callback) {
        var blob/*:Blob*/ = this;
        this.addListener("data", function()/*:void*/ {
          callback(blob);
        }, undefined, {single:true});
      }
      this.getData();
    }
  }function static$1(){


  com.coremedia.ui.data.impl.RemoteService.registerMarshaller(BlobImpl, marshal$static);}/*
  private static*/ function marshal$static(self/*:BlobImpl*/)/*:**/ {
    var size/*:Number*/ = self.getSize();
    var contentType/*:String*/ = self.getContentType();
    var hash/*:String*/ = self.getHash();
    if (size === Number(size) && contentType && hash) {
      // The blob is a server blob and is uniquely identified by size,
      // mime type, and hash.
      return  {
        'contentType': contentType,
        'size': size,
        'hash': hash
      };
    } else {
      // Other blobs have to marshaled by value.
      return {
        'contentType': contentType,
        'data': self.getData()
      };
    }
  }/*

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:BlobImpl*/ =AS3.as( o,  BlobImpl);
    if (!that) {
      return false;
    }
    // size and contentType are always available and have to be equal:
    if (this.getSize() === that.getSize() &&
            this.getContentType() === that.getContentType()) {
      if (this.isLoaded() && that.isLoaded()) {              // both loaded:
        return this.getData() === that.getData();            // compare by value
      } else if (!this.isLoaded() && !that.isLoaded() ||     // both not loaded or
              this.isImmutable() && that.isImmutable()) { // both are immutable Blobs:
        return this.getUri() === that.getUri();              // compare by reference
      }
    }
    return false;
  }/*

  public*/ function getMetadata()/*:RemoteBean*/ {
    return this.metadata$qUFh;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: [
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.util.WithEquals"
      ],
      path$qUFh: null,
      contentType$qUFh: null,
      size$qUFh: 0,
      data$qUFh: undefined,
      hash$qUFh: null,
      metadata$qUFh: null,
      state$qUFh: 0,
      constructor: BlobImpl$,
      super$qUFh: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      isImmutable: isImmutable,
      getUri: getUri,
      getPath: getPath,
      isLoaded: isLoaded,
      getSize: getSize,
      getData: getData,
      doRequest$qUFh: doRequest,
      getHash: getHash,
      setHash: setHash,
      getContentType: getContentType,
      loadData: loadData,
      equals: equals,
      getMetadata: getMetadata,
      statics: {
        create: create$static,
        __initStatics__: function() {
          static$0();
          static$1();
        }
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.util.Observable",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.util.RequestCounter",
        "com.coremedia.ui.util.WithEquals"
      ],
      uses: [
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ]
    };
});
