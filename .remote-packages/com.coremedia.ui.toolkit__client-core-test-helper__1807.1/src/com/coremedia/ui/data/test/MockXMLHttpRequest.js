Ext.define("com.coremedia.ui.data.test.MockXMLHttpRequest", function(MockXMLHttpRequest) {/*package com.coremedia.ui.data.test {
import js.Document;

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

public class MockXMLHttpRequest {

  public static const CONTENT_TYPE_HEADER:String = "content-type";
  public static const CONTENT_TYPE_JSON:String = 'application/json';
  internal static const APPLICATION_URI:URI =*/function APPLICATION_URI$static_(){MockXMLHttpRequest.APPLICATION_URI=( net.jangaroo.net.URIUtils.parse(window.location.href));}/*;
  internal static const REMOTE_SERVICE_ABSOLUTE_URI:URI =*/function REMOTE_SERVICE_ABSOLUTE_URI$static_(){MockXMLHttpRequest.REMOTE_SERVICE_ABSOLUTE_URI=( MockXMLHttpRequest.APPLICATION_URI.resolve(net.jangaroo.net.URIUtils.parse("api/")));}/*;

  private var request:Object;
  private var response:Object;

  public var readyState:int = 4; //DONE; todo check static superclass member access for non-jangaroo superclasses
  public var responseText:String;
  public var responseXML:Document;
  public var status:uint;
  public var statusText:String = "<status text>";

  public*/ function MockXMLHttpRequest$(request/*:Object*/, response/*:Object*/, responseText/*:String*/) {
    this.request$m8lM = request;
    this.response$m8lM = response;
    this.responseText = responseText;
    this.status = response.code || 200;
  }/*

  public*/ function getResponseHeader(header/*:String*/)/*:String*/ {
    header = header.toLowerCase();
    var result/*:String*/ = this.response$m8lM.headers ? this.response$m8lM.headers[header] : undefined;
    if ("location" === header) {
      // convenience: convert to absolute uri
      result = MockXMLHttpRequest.REMOTE_SERVICE_ABSOLUTE_URI.resolve(net.jangaroo.net.URIUtils.parse(result)).toString();
    }
    if (!result) {
      if (MockXMLHttpRequest.CONTENT_TYPE_HEADER === header) result = MockXMLHttpRequest.CONTENT_TYPE_JSON;
    }
    return result;
  }/*

  public*/ function getAllResponseHeaders()/*:String*/ {
    return notImpl$static();
  }/*

  public*/ function send(body/*:* = undefined*/)/*:void*/ {
    notImpl$static();
  }/*

  public*/ function open(method/*:String*/, url/*:String*/, async/*:Boolean = true*/, user/*:String = null*/, password/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:async=true;case 3:user=null;case 4:password=null;}
    notImpl$static();
  }/*

  public*/ function setRequestHeader(header/*:String*/, value/*:String*/)/*:void*/ {
    notImpl$static();
  }/*

  public*/ function overrideMimeType(mimetype/*:String*/)/*:void*/ {
    notImpl$static();
  }/*

  public*/ function addEventListener(eventType/*:String*/, handler/*:Function*/, capture/*:Boolean*/)/*:void*/ {
    notImpl$static();
  }/*

  public*/ function removeEventListener(eventType/*:String*/, handler/*:Function*/, capture/*:Boolean*/)/*:void*/ {
    notImpl$static();
  }/*

  public*/ function abort()/*:void*/ {
    notImpl$static();
  }/*

  private static*/ function notImpl$static()/*:**/ {
    throw new AS3.Error("not implemented");
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      request$m8lM: null,
      response$m8lM: null,
      readyState: 4,
      responseText: null,
      responseXML: null,
      status: 0,
      statusText: "<status text>",
      constructor: MockXMLHttpRequest$,
      getResponseHeader: getResponseHeader,
      getAllResponseHeaders: getAllResponseHeaders,
      send: send,
      open: open,
      setRequestHeader: setRequestHeader,
      overrideMimeType: overrideMimeType,
      addEventListener: addEventListener,
      removeEventListener: removeEventListener,
      abort: abort,
      statics: {
        CONTENT_TYPE_HEADER: "content-type",
        CONTENT_TYPE_JSON: 'application/json',
        APPLICATION_URI: undefined,
        REMOTE_SERVICE_ABSOLUTE_URI: undefined,
        __initStatics__: function() {
          APPLICATION_URI$static_();
          REMOTE_SERVICE_ABSOLUTE_URI$static_();
        }
      },
      requires: [
        "AS3.Error",
        "net.jangaroo.net.URIUtils"
      ]
    };
});
