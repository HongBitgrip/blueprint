Ext.define("com.coremedia.ui.data.impl.RemoteServiceMethod", function(RemoteServiceMethod) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.*;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.util.RequestCounter;

import ext.Ext;

import js.XMLHttpRequest;

/**
 *  A representation for a remote service.
 * /
public class RemoteServiceMethod {
  private const HTTP_METHODS:Object =*/function HTTP_METHODS_(){this.HTTP_METHODS$4uW2=( {
    "GET": true,
    "PUT": true,
    "DELETE": true,
    "POST": true
  });}/*;

  private var path:String;
  private var method:String;
  private var writeJson:Boolean;
  private var isBackground:Boolean;
  private var options:Object;
  private var isRetryable:Boolean;

  /**
   * @param path
   * @param method
   * @param writeJson
   * @param isBackground
   * @param options additional options to pass to the request
   * @param isRetryable
   * /
  public*/ function RemoteServiceMethod$(path/*:String*/,
                                      method/*:String*/,
                                      writeJson/*:Boolean = false*/,
                                      isBackground/*:Boolean = false*/,
                                      options/*:Object = null*/,
				      isRetryable/*:Boolean = undefined*/) {HTTP_METHODS_.call(this);switch(Math.max(arguments.length,2)){case 2:writeJson=false;case 3:isBackground=false;case 4:options=null;}
    this.path$4uW2 = path;
    this.method$4uW2 = method;
    this.writeJson$4uW2 = writeJson;
    this.isBackground$4uW2 = isBackground;
    this.options$4uW2 = options;
    this.isRetryable$4uW2 = isRetryable === undefined ? method === "GET" : isRetryable;
  }/*


  /**
   * @param params may contain RemoteBeans which will be converted to URIs relative to the request URI
   * @param success function success(response:RemoteServiceMethodResponse):void
   * @param failure function failure(response:RemoteServiceMethodResponse):void
   *
   * @see com.coremedia.ui.data.impl.RemoteServiceMethodResponse()
   * /
  public*/ function request(params/*:Object = null*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(arguments.length){case 0:params=null;case 1:success=null;case 2:failure=null;}
    this.doRequest$4uW2(params, success, failure, false);
  }/*

  private*/ function doRequest(params/*:Object*/, success/*:Function*/, failure/*:Function*/, isRetryingAfterTimeout/*:Boolean*/)/*:void*/ {var this$=this;
    if (!this.isBackground$4uW2 && !com.coremedia.ui.util.RequestCounter.isRequestRecommended()) {
      com.coremedia.ui.util.RequestCounter.whenRequestRecommended(function ()/*:void*/ {
        this$.doRequest$4uW2(params, success, failure, isRetryingAfterTimeout);
      });
      return;
    }

    // convert all RemoteBean parameters into URIs relative to request URI
    var requestParams/*:**/ = undefined;
    var jsonData/*:**/ = undefined;
    if (this.writeJson$4uW2) {
      jsonData = com.coremedia.ui.data.impl.RemoteService.marshalValue(params);
    } else {
      requestParams = this.convertParams$4uW2(params);
    }
    com.coremedia.ui.util.RequestCounter.openRequest(this.isBackground$4uW2);
    try {
      var httpMethod/*:String*/;
      var headers/*:Object*/;
      // Not nice, but as long as the REST service uses this trick, the client has to use it, too.
      if (!this.HTTP_METHODS$4uW2[this.method$4uW2]) {
        httpMethod = "POST";
        headers = {};
        headers['X-HTTP-Method-Override'] = this.method$4uW2;
      } else {
        httpMethod = this.method$4uW2;
        headers = undefined;
      }
      var url/*:String*/ = com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.path$4uW2);
      var requestOptions/*:Object*/ = {
        method:httpMethod,
        url:url,
        params:requestParams,
        jsonData:jsonData,
        headers:headers,
        success: function (response/*:XMLHttpRequest*/)/*:void*/ {
          // Mark the request complete.
          com.coremedia.ui.util.RequestCounter.closeRequest(this$.isBackground$4uW2);

          success && success(new com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl(url, true, response, params));
        },
        failure:function (response/*:XMLHttpRequest*/)/*:void*/ {
          // Mark the request complete.
          com.coremedia.ui.util.RequestCounter.closeRequest(this$.isBackground$4uW2);

          if (this$.isRetryable$4uW2 && !isRetryingAfterTimeout && com.coremedia.ui.data.impl.RemoteBeanImpl.isTemporaryError(response)) {
            // Remote service methods are expected to be costly and might run into
            // an actual request timeout. Retry only once after a timeout.
            window.setTimeout(function()/*:void*/ {
              this$.doRequest$4uW2(params, success, failure, response.status === -1);
            }, 10000);
          } else {
            var methodResponse/*:RemoteServiceMethodResponseImpl*/ = new com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl(url, false, response, params);
            if (failure || success) {
              (failure || success)(methodResponse);
            }
            if (!methodResponse.getError().isHandled()) {
              (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(methodResponse.getError(),
                      AS3.cast(RemoteServiceMethod,this));
            }
          }
        },
        scope:this
      };
      if (this.options$4uW2) {
        Ext.apply(requestOptions, this.options$4uW2);
      }
      com.coremedia.ui.data.impl.RemoteService.getConnection().request(requestOptions);
    } catch (e/*:**/) {
      if (!this.isBackground$4uW2) {
        com.coremedia.ui.util.RequestCounter.closeRequest();
      }
      throw new AS3.Error("Unable to send Service " + this.method$4uW2 + " request: " + e);
    }
  }/*

  private*/ function convertParams(params/*:Object*/)/*:Object*/ {
    var requestParams/*:Object*/ = {};
    if (params) {
      for (var paramName/*:String*/ in params) {
        var paramValue/*:Object*/ = params[paramName];
        if (paramValue !== undefined) {
          //todo should work also for Blobs
          var remoteBean/*:RemoteBean*/ =AS3.as( paramValue,  com.coremedia.ui.data.RemoteBean);
          requestParams[paramName] = remoteBean
                  ? remoteBean.getUriPath()
                  : paramValue;
        }
      }
    }
    return requestParams;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      path$4uW2: null,
      method$4uW2: null,
      writeJson$4uW2: false,
      isBackground$4uW2: false,
      options$4uW2: null,
      isRetryable$4uW2: false,
      constructor: RemoteServiceMethod$,
      request: request,
      doRequest$4uW2: doRequest,
      convertParams$4uW2: convertParams,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.util.RequestCounter"
      ],
      uses: [
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl"
      ]
    };
});
