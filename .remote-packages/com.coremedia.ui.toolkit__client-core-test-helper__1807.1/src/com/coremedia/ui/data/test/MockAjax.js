Ext.define("com.coremedia.ui.data.test.MockAjax", function(MockAjax) {/*package com.coremedia.ui.data.test {

import ext.Ext;
import ext.JSON;
import ext.data.Connection;
import ext.data.request.BaseRequest;

import net.jangaroo.net.URIUtils;

/**
 * Fires after a request was received.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>mock:Object</code> the mock
 *   </li>
 * </ul>
 * /
[Event(name = "received")] // NOSONAR - no type

/**
 * A class mocking AJAX calls via XMLHttpRequest mock objects
 * The request/response format is the same as RestTest json format, but only message simple bodies are supported
 * /
public class MockAjax extends Connection {

  public static const CONTENT_TYPE_APPLICATION_FORM_URLENCODED:String = 'application/x-www-form-urlencoded';
  public static const REQUEST_RECEIVED_EVENT_NAME:String = "received";

  public static var instance:MockAjax;

  private var pending:Array = null;

  private var _destroyed:Boolean = false;

  private var mockResponses:Array;
  private var served:Object =*/function served_(){this.served$G3qc=( {});}/*;
  private var requestCount:Number = 0;

  public static*/ function mockAjax$static(mockResponses/*:Array = null*/)/*:MockAjax*/ {if(arguments.length<=0)mockResponses=null;
    if (MockAjax.instance) {
      throw new AS3.Error("A previously created instance of MockAjax is still running. Call destroyMock() in the tearDown() method of the other test.");
    }

    MockAjax.instance = new MockAjax(mockResponses);
    MockAjax.instance['defaultHeaders'] = window.Ext.Ajax.defaultHeaders;
    window.Ext.Ajax = MockAjax.instance;
    return MockAjax.instance;
  }/*

  public static*/ function destroyMock$static()/*:void*/ {
    if (MockAjax.instance) {
      MockAjax.instance.destroy();
      MockAjax.instance = null;
    }
  }/*

  public static*/ function addMockCalls$static(calls/*:Array*/)/*:void*/ {
    MockAjax.instance.addMockCallsInternal$G3qc(calls);
  }/*

  public*/ function MockAjax$(mockResponses/*:Array = null*/) {if(arguments.length<=0)mockResponses=null;
    this.super$G3qc(AS3.cast(Ext.data.Connection,{}));served_.call(this);;
    this.mockResponses$G3qc = mockResponses || [];
  }/*

  // copied from RemoteService, because we may not have a dependency on client-core:

  private static*/ function calculateRemoteURI$static(uri/*:String*/)/*:String*/ {
    return com.coremedia.ui.data.test.MockXMLHttpRequest.REMOTE_SERVICE_ABSOLUTE_URI.relativize(com.coremedia.ui.data.test.MockXMLHttpRequest.APPLICATION_URI.resolve(net.jangaroo.net.URIUtils.parse(uri))).toString();
  }/*

  // END copied from RemoteService

  /**
   * @inheritDoc
   * /
  override public*/ function request(options/*:Object*/)/*:BaseRequest*/ {var this$=this;
    this.requestCount$G3qc++;
    var requestPath/*:String*/ = calculateRemoteURI$static(options.url);
    var method/*:String*/ = options.method || 'GET';
    var params/*:Object*/ = Ext.urlDecode(Ext.urlEncode(options.params)); // normalize parameters like Ext.Ajax does
    for (var i/*:int*/ = 0; i < this.mockResponses$G3qc.length; i++) {
      var requestResponse/*:Object*/ = this.mockResponses$G3qc[i];
      var mockRequest/*:Object*/ = requestResponse.request;
      if (match$static(method, mockRequest, requestPath, params, options.jsonData, options.headers)) {
        var mockResponse/*:Object*/ = requestResponse.response;
        var success/*:Boolean*/ = (!mockResponse.code || mockResponse.code >= 200 && mockResponse.code < 300);
        var callbackName/*:String*/ = success ? 'success' : 'failure';

        this.executeEventually$G3qc(function ()/*:void*/ {
          if (this$._destroyed$G3qc) {
            // This mock is no longer active. Do not send a response.
            return;
          }

          var mockXMLHttpRequest/*:MockXMLHttpRequest*/ = new com.coremedia.ui.data.test.MockXMLHttpRequest(mockRequest, mockResponse, MockAjax.buildBody(mockResponse));
          var mock/*:Object*/ = this$.remember$G3qc(method, mockRequest, mockResponse, mockXMLHttpRequest);
          this$.fireEvent(MockAjax.REQUEST_RECEIVED_EVENT_NAME, mock);
          mockXMLHttpRequest['argument'] = options ? options.argument : null;
          if (options[callbackName]) {
            options[callbackName].call(options.scope, mockXMLHttpRequest, options);
          }
          if (options.callback) {
            options.callback.call(options.scope, options, success, mockXMLHttpRequest);
          }
        });

        return AS3.cast(Ext.data.request.Base,{});
      }
    }
    throw new AS3.Error("No mock response found for request " + method + " " + requestPath +
            ", params = " + Ext.JSON.encode(options.params) +
            ", json = " + Ext.JSON.encode(options.jsonData) +
            ", headers = " + Ext.JSON.encode(options.headers));
  }/*

  private*/ function executeEventually(f/*:Function*/)/*:void*/ {
    if (!this.pending$G3qc) {
      this.pending$G3qc = [];
      window.setTimeout(AS3.bind(this,"executeNow"), 10);
    }
    this.pending$G3qc.push(f);
  }/*

  public*/ function executeNow()/*:void*/ {
    var toDo/*:Array*/ = this.pending$G3qc;
    this.pending$G3qc = null;
    if (toDo) {
      for/* each*/ (var $1=0;$1</* in*/ toDo.length;++$1) {var f/*:Function*/ =toDo[$1];
        f();
      }
    }
  }/*

  public*/ function isIdle()/*:Boolean*/ {
    return !this.pending$G3qc;
  }/*

  private*/ function remember(method/*:String*/, mockRequest/*:Object*/, mockResponse/*:Object*/, mockXMLHttpRequest/*:MockXMLHttpRequest*/)/*:Object*/ {
    var servedPerMethod/*:Object*/ = this.served$G3qc[method] || ({});
    this.served$G3qc[method] = servedPerMethod;
    var servedPerUri/*:Array*/ = servedPerMethod[mockRequest.uri] || [];
    servedPerMethod[mockRequest.uri] = servedPerUri;
    var mock/*:Object*/ = {
      method: method,
      request: mockRequest,
      response: mockResponse,
      xmlHttpRequest: mockXMLHttpRequest
    };
    servedPerUri.push(mock);
    return mock;
  }/*

  public*/ function getServedResponses(uri/*:String*/, method/*:String = 'GET'*/)/*:Array*/ {if(arguments.length<=1)method='GET';
    var servedPerMethod/*:Object*/ = this.served$G3qc[method] || ({});
    return servedPerMethod[uri] || [];
  }/*

  public*/ function clearServedResponses(uri/*:String*/, method/*:String = 'GET'*/)/*:void*/ {if(arguments.length<=1)method='GET';
    var servedPerMethod/*:Object*/ = this.served$G3qc[method] || ({});
    delete servedPerMethod[uri];
  }/*

  public*/ function getAllServedResponses()/*:Object*/ {
    return this.served$G3qc;
  }/*

  public*/ function getRequestCount()/*:Number*/ {
    return this.requestCount$G3qc;
  }/*

  private static*/ function match$static(method/*:String*/, mockRequest/*:Object*/, requestPath/*:String*/, requestParams/*:**/, requestJsonData/*:**/, requestHeaders/*:**/)/*:Boolean*/ {
    var mockRequestUri/*:String*/ = mockRequest.uri;
    if ((mockRequest.method || 'GET') !== method) {
      return false;
    }
    var mockRequestPath/*:String*/;
    var mockParams/*:Object*/ = undefined;
    var mockRequestJsonData/*:String*/ = undefined;
    if (method === "GET") {
      var q/*:int*/ = mockRequestUri.indexOf("?");
      var mockRequestQueryString/*:String*/ = q >= 0 ? mockRequestUri.substring(q + 1) : "";
      mockParams = Ext.urlDecode(mockRequestQueryString);
      mockRequestPath = q >= 0 ? mockRequestUri.substring(0, q) : mockRequestUri;
    } else {
      if (mockRequest.contentType === MockAjax.CONTENT_TYPE_APPLICATION_FORM_URLENCODED) {
        var encodedBody/*:String*/ = MockAjax.buildBody(mockRequest);
        mockParams = formUrlDecode$static(encodedBody);
      } else {
        mockRequestJsonData = mockRequest.body;
      }
      mockRequestPath = mockRequestUri;
    }
    var mockRequestHeaders/*:Object*/ = mockRequest.headers;
    return mockRequestPath === requestPath &&
            requestMatches$static(mockParams, requestParams) &&
            requestMatches$static(mockRequestJsonData, requestJsonData) &&
            (!mockRequestHeaders || requestMatches$static(mockRequestHeaders, requestHeaders));
  }/*

  private static*/ function formUrlDecode$static(string/*:String*/)/*:Object*/ {
    if (!string) {
      return {};
    }
    var result/*:Object*/ = {};
    var pairs/*:Array*/ = string.split('&');
    pairs.forEach(function(p/*:String*/)/*:void*/ {
      var pair/*:Array*/ = p.replace(/[+]/g, ' ').split('=');
      result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return result;
  }/*


  private static*/ function requestMatches$static(expected/*:Object*/, actual/*:Object*/)/*:Boolean*/ {
    // Treat undefined values like empty objects.
    if (!expected) {
      expected = {};
    }
    if (!actual) {
      actual = {};
    }
    return MockAjax.deepEquals(expected, actual);
  }/*

  internal static*/ function deepEquals$static(expected/*:Object*/, actual/*:Object*/)/*:Boolean*/ {
    if (AS3.is(expected,  Array)) {
      if (!(AS3.is(actual,  Array))) {
        return false;
      }
      return MockAjax.arrayEquals(AS3.as(expected,  Array),AS3.as( actual,  Array));
    }
    if (expected && expected.constructor === Object) {
      if (!actual || actual.constructor !== Object) {
        return false;
      }
      return MockAjax.objectEquals(expected, actual);
    }
    return expected === actual;
  }/*

  internal static*/ function arrayEquals$static(expected/*:Array*/, actual/*:Array*/)/*:Boolean*/ {
    if (expected.length != actual.length) {
      return false;
    }
    for (var i = 0; i < expected.length; i++) {
      if (!MockAjax.deepEquals(expected[i], actual[i])) {
        return false;
      }
    }
    return true;
  }/*

  internal static*/ function objectEquals$static(expected/*:Object*/, actual/*:Object*/)/*:Boolean*/ {
    // Check individual properties.
    var p/*:String*/;
    for (p in expected) {
      if (!MockAjax.deepEquals(expected[p], actual[p])) {
        return false;
      }
    }
    for (p in actual) {
      if (!(p in expected)) {
        return false;
      }
    }
    return true;
  }/*

  /**
   * Add a list of responses
   * /
  public*/ function addMockRequests(responses/*:Array*/)/*:void*/ {var this$=this;
    responses.forEach(function(response/*:Object*/)/*:void*/ {
      this$.mockResponses$G3qc.push(response);
    });
  }/*

  /**
   * Add a list of simple GET requests of response type application/json.
   * @param responses a map of request uris to JSON responses of the format { <request uri>: <JSON response> }
   * /
  public*/ function addJsonGetMockRequests(responses/*:Object*/)/*:void*/ {
    for (var uri/*:String*/ in responses) {
      if (responses.hasOwnProperty(uri)) {
        this.mockResponses$G3qc.push({
          "request": { "uri": uri, "method": "GET" },
          "response": { "code": 200, "body": responses[uri] }
        });
      }
    }
  }/*

  internal static*/ function buildBody$static(response/*:Object*/)/*:String*/ {
    var contentType/*:String*/ = response.contentType;
    contentType = contentType || (response.headers ? response.headers[com.coremedia.ui.data.test.MockXMLHttpRequest.CONTENT_TYPE_HEADER] : undefined);
    contentType = contentType || com.coremedia.ui.data.test.MockXMLHttpRequest.CONTENT_TYPE_JSON;
    if (response.body) {
      return contentType === com.coremedia.ui.data.test.MockXMLHttpRequest.CONTENT_TYPE_JSON ? Ext.JSON.encode(response.body) : response.body;
    }
    var unsupportedBodyTypes/*:Array*/ = [
      "bodyBase64", "bodyMultipart", "bodyResource", "bodyFile"
    ];
    unsupportedBodyTypes.forEach(function(bodyType/*:String*/)/*:void*/ {
      if (response[bodyType]) {
        throw new AS3.Error("request." + bodyType + " not implemented");
      }
    });
    return "";
  }/*

  private*/ function addMockCallsInternal(calls/*:Array*/)/*:void*/ {
    this.mockResponses$G3qc = this.mockResponses$G3qc.concat(calls);
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this._destroyed$G3qc = true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.Connection",
      metadata: {"": [
        "Event",
        [
          "name",
          "received"
        ]
      ]},
      pending$G3qc: null,
      _destroyed$G3qc: false,
      mockResponses$G3qc: null,
      requestCount$G3qc: 0,
      constructor: MockAjax$,
      super$G3qc: function() {
        Ext.data.Connection.prototype.constructor.apply(this, arguments);
      },
      request: request,
      executeEventually$G3qc: executeEventually,
      executeNow: executeNow,
      isIdle: isIdle,
      remember$G3qc: remember,
      getServedResponses: getServedResponses,
      clearServedResponses: clearServedResponses,
      getAllServedResponses: getAllServedResponses,
      getRequestCount: getRequestCount,
      addMockRequests: addMockRequests,
      addJsonGetMockRequests: addJsonGetMockRequests,
      addMockCallsInternal$G3qc: addMockCallsInternal,
      destroy: destroy,
      statics: {
        CONTENT_TYPE_APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        REQUEST_RECEIVED_EVENT_NAME: "received",
        instance: null,
        mockAjax: mockAjax$static,
        destroyMock: destroyMock$static,
        addMockCalls: addMockCalls$static,
        deepEquals: deepEquals$static,
        arrayEquals: arrayEquals$static,
        objectEquals: objectEquals$static,
        buildBody: buildBody$static
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.JSON",
        "Ext.data.Connection",
        "Ext.data.request.Base",
        "net.jangaroo.net.URIUtils"
      ],
      uses: ["com.coremedia.ui.data.test.MockXMLHttpRequest"]
    };
});
