Ext.define("com.coremedia.ui.data.impl.RemoteServiceMethodResponseImpl", function(RemoteServiceMethodResponseImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.*;
import com.coremedia.ui.data.error.RemoteError;

import js.XMLHttpRequest;

/**
 * Internal helper class for RemoteServiceMethod#request() callback.
 * @see com.coremedia.ui.data.impl.RemoteServiceMethod#request()
 * /
public class RemoteServiceMethodResponseImpl implements RemoteServiceMethodResponse {

  private var url:String;
  private var responseJSON:*; // type is "*" to allow distinction of "undefined" and "null"
  private var error:RemoteError;

  public*/ function RemoteServiceMethodResponseImpl$(url/*:String*/, success/*:Boolean*/, response/*:XMLHttpRequest*/, params/*:Object*/) {
    this.url$dCiZ = url;
    this['success'] = success;
    this['response'] = response;
    this['params'] = params;
    //only parse error when not successful
    if(!success) {
      this.error$dCiZ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
    }
  }/*

  public native function get success():Boolean;

  public native function get response():XMLHttpRequest;

  public native function get params():Object;

  public*/ function getResponseJSON()/*:Object*/ {
    if (this.responseJSON$dCiZ === undefined) {
      this.responseJSON$dCiZ = this.response['isAbort'] || this.response['isTimeout'] ||
              !/^application\/json(;|$)/.test(this.response.getResponseHeader("Content-Type"))
              ? null
              : com.coremedia.ui.data.impl.RemoteService.resolveResponse(this.response.responseText, com.coremedia.ui.data.impl.RemoteService.calculateRemoteURI(this.url$dCiZ));
    }
    return this.responseJSON$dCiZ;
  }/*

  public*/ function getLocationAsRemoteBean()/*:RemoteBean*/ {
    return AS3.as( this.getResponseJSON(),  com.coremedia.ui.data.RemoteBean);
  }/*

  public*/ function getError()/*:RemoteError*/ {
    return this.error$dCiZ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.impl.RemoteServiceMethodResponse"],
      url$dCiZ: null,
      responseJSON$dCiZ: undefined,
      error$dCiZ: null,
      constructor: RemoteServiceMethodResponseImpl$,
      getResponseJSON: getResponseJSON,
      getLocationAsRemoteBean: getLocationAsRemoteBean,
      getError: getError,
      requires: [
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.impl.RemoteServiceMethodResponse"
      ],
      uses: ["com.coremedia.ui.data.impl.RemoteService"]
    };
});
