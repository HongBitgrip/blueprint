Ext.define("com.coremedia.ui.data.impl.RemoteService", function(RemoteService) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ExecuteEventually;
import com.coremedia.ui.util.UrlUtil;

import ext.Ajax;
import ext.DateUtil;
import ext.Ext;
import ext.JSON;
import ext.data.Connection;

import js.XMLHttpRequest;

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

public class RemoteService {

  /**
   * Error code for unexpected HTTP errors (not those produced by our REST service)
   * /
  public static const HTTP_ERROR:String = 'HTTP-ERROR';

  private static*/ var csrfTokenHeaderName$static/*:String*/=null;/*
  private static*/ var csrfTokenParameterName$static/*:String*/=null;/*
  private static*/ var csrfTokenValue$static/*:String*/=null;/*

  public static*/ function getCsrfTokenHeaderName$static()/*:String*/ {
    return csrfTokenHeaderName$static;
  }/*

  public static*/ function getCsrfTokenParameterName$static()/*:String*/ {
    return csrfTokenParameterName$static;
  }/*

  public static*/ function getCsrfTokenValue$static()/*:String*/ {
    return csrfTokenValue$static;
  }function static$0(){

  init$static();}/*
  private static*/ function init$static()/*:void*/ {
    AS3.setBindable(Ext.Ajax,"defaultHeaders" , {'Accept': 'application/json, text/xml'});

    // Always attach the original HTTP method to the response object that is forwarded to the callback methods.
    // This simplifies error handling as the RemoteError object can be tagged as write error or read error.
    var originalFn/*:Function*/ = Ext.Ajax['request'];  // Trick jangaroo in not binding this function
    Ext.Ajax.request = function (options/*:Object*/)/*:void*/ {
      if (Ext.isFunction(options.failure)) {
        var originalFailure/*:Function*/ = options.failure;
        options.failure = function (response/*:Object*/, options/*:Object*/)/*:void*/ {
          response['requestMethod'] = options.method;
          originalFailure.call(this, response, options);
        };
      }
      if (Ext.isFunction(options.success)) {
        var originalSuccess/*:Function*/ = options.success;
        options.success = function (response/*:Object*/, options/*:Object*/)/*:void*/ {
          response['requestMethod'] = options.method;
          originalSuccess.call(this, response, options);
        };
      }
      if (Ext.isFunction(options.callback)) {
        var originalCallback/*:Function*/ = options.callback;
        options.callback = function (options/*:Object*/, success/*:Boolean*/, response/*:Object*/)/*:void*/ {
          response['requestMethod'] = options.method;
          originalCallback.call(this, options, success, response);
        };
      }
      originalFn.call(Ext.Ajax, options); // Have to provide scope
    };
  }/*
  
  public*/ function RemoteService$() {
  }/*

  /**
   * Use the given csrfToken token in headers for all subsequent requests.
   *
   * @param csrfToken the csrfToken token to be used
   * /
  public static*/ function initCsrfToken$static(csrfToken/*:Object = null*/)/*:void*/ {if(arguments.length<=0)csrfToken=null;
    if (csrfToken) {
      csrfTokenHeaderName$static = csrfToken['headerName'];
      csrfTokenParameterName$static = csrfToken['parameterName'];
      csrfTokenValue$static = csrfToken['token'];

      if (csrfTokenHeaderName$static && csrfTokenValue$static) {
        AS3.getBindable(Ext.Ajax,"defaultHeaders","DUMMY")[csrfTokenHeaderName$static] = csrfTokenValue$static;
        return;
      } 
    }

    com.coremedia.ui.logging.Logger.warn("could not determine session id; will not send csrfToken headers");
  }/*

  public static*/ function getConnection$static()/*:Connection*/ {
    return Ext.Ajax;
  }/*

  public static const APPLICATION_URI:URI =*/function APPLICATION_URI$static_(){RemoteService.APPLICATION_URI=( net.jangaroo.net.URIUtils.parse(window.location.href));}/*;
  /**
   * coremediaRemoteService Uri may have been set in jangaroo-application.js or editor-components.module.js
   * @see coremediaRemoteServiceUri
   * /
  public static const REMOTE_SERVICE_URI:URI =*/function REMOTE_SERVICE_URI$static_(){RemoteService.REMOTE_SERVICE_URI=( net.jangaroo.net.URIUtils.parse(com.coremedia.ui.util.UrlUtil.getHashParam("coremediaRemoteServiceUri") || window['coremediaRemoteServiceUri'] || "api/"));}/*;
  public static const REMOTE_SERVICE_ABSOLUTE_URI:URI =*/function REMOTE_SERVICE_ABSOLUTE_URI$static_(){RemoteService.REMOTE_SERVICE_ABSOLUTE_URI=( RemoteService.APPLICATION_URI.resolve(RemoteService.REMOTE_SERVICE_URI));}/*;

  /**
   * Resolve relative URIs stored in the '.' property of the given object
   * by absolute URIs. This method works recursively on all objects
   * transitively referenced by the given object. This method is destructive:
   * it modifies the argument object.
   *
   * @param object the object to rewrite
   * @param baseUri the base URI against which to resolve relative URIs
   * /
  private static*/ function resolveRelativeUris$static(object/*:Object*/, baseUri/*:String*/)/*:void*/ {
    var parsedBase/*:URI*/ = net.jangaroo.net.URIUtils.parse(baseUri);
    var base/*:URI*/ = RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.resolve(parsedBase);
    resolveRelativeUris1$static(object, base);
  }/*

  private static*/ function resolveRelativeUris1$static(object/*:Object*/, baseUri/*:URI*/)/*:void*/ {
    if (Ext.isArray(object)) {
      for (var i/*:int*/ = 0; i < object.length; ++i) {
        resolveRelativeUris1$static(object[i], baseUri);
      }
    } else {
      for (var m/*:String*/ in object) {
        var value/*:**/ = object[m];
        if (typeof value === 'object' && value != null) {
          var relativeUri/*:**/ = value['.'];
          if (typeof relativeUri == "string") { // TODO: check for other properties?
            object[m] = RemoteService.relativizeAgainstServicePath(relativeUri, baseUri);
          } else {
            resolveRelativeUris1$static(value, baseUri);
          }
        }
      }
    }
  }/*

  /**
   * Relativize a reference URI against the service root. The reference is
   * first resolved against the given base, if any.
   * @param reference the reference uri. might be relative to base or, if no base is given, to <code>REMOTE_SERVICE_ABSOLUTE_URI</code>
   * @param base optional base URI, must be absolute, defaults to the <code>REMOTE_SERVICE_ABSOLUTE_URI</code>
   * @return a relative URI path
   *
   * @see #REMOTE_SERVICE_ABSOLUTE_URI
   * /
  public static*/ function relativizeAgainstServicePath$static(reference/*:String*/, base/*:URI = null*/)/*:String*/ {if(arguments.length<=1)base=null;
    var referenceUri/*:URI*/ = net.jangaroo.net.URIUtils.parse(reference);
    var resolved/*:URI*/ = (base !== null ? base : RemoteService.REMOTE_SERVICE_ABSOLUTE_URI).resolve(referenceUri);
    var relativized/*:URI*/ = RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.relativize(resolved);
    return relativized.toString();
  }/*

  /**
   * Compute the application relative URI for the given service-relative URI. The result
   * may then be used as an AJAX request URI.
   * @param uri the URI, may be absolute or relative to <code>REMOTE_SERVICE_ABSOLUTE_URI</code>
   * @return a URI relative to the application
   *
   * @see #REMOTE_SERVICE_ABSOLUTE_URI
   * /
  public static*/ function calculateRequestURI$static(uri/*:String*/)/*:String*/ {
    return RemoteService.APPLICATION_URI.relativize(RemoteService.calculateAbsoluteURI(uri)).toString();
  }/*

  /**
   * Compute the absolute URI for the given service-relative URI. The result
   * may then be used as an AJAX request URI, if traffic reduction is not needed.
   * @param uri the URI, may be absolute or relative to <code>REMOTE_SERVICE_ABSOLUTE_URI</code>
   * @return an absolute URI
   *
   * @see #REMOTE_SERVICE_ABSOLUTE_URI
   * /
  public static*/ function calculateAbsoluteURI$static(uri/*:String*/)/*:URI*/ {
    return RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.resolve(net.jangaroo.net.URIUtils.parse(uri));
  }/*



  /**
   * Compute the remote service relative URI for the given application-relative URI.
   * @param uri the URI, may be absolute or relative to <code>APPLICATION_URI</code>
   * @return a URI relative to the remote service
   *
   * @see #APPLICATION_URI
   * /
  public static*/ function calculateRemoteURI$static(uri/*:String*/)/*:String*/ {
    return RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.relativize(RemoteService.APPLICATION_URI.resolve(net.jangaroo.net.URIUtils.parse(uri))).toString();
  }/*

  /**
   * Relativize a uri, similar to <code>URI.relativize()</code>. In contrast to the latter, both URIs might be relative to and
   * are resolved against the <code>REMOTE_SERVICE_ABSOLUTE_URI</code> before being passed to URI.relativize().
   * @param baseUri
   * @param reference
   * @return a relative URI
   *
   * @see URI.relativize()
   * @see #REMOTE_SERVICE_ABSOLUTE_URI
   * /
  public static*/ function relativizeURI$static(baseUri/*:String*/, reference/*:String*/)/*:String*/ {
    var absoluteBase/*:URI*/ = RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.resolve(net.jangaroo.net.URIUtils.parse(baseUri));
    var absoluteUri/*:URI*/ = RemoteService.REMOTE_SERVICE_ABSOLUTE_URI.resolve(net.jangaroo.net.URIUtils.parse(reference));
    return absoluteBase.relativize(absoluteUri).toString();
  }/*

  private static const*/var MARSHALLERS$static/*:Array*/;/* =*/function MARSHALLERS$static_(){MARSHALLERS$static=( [
    com.coremedia.ui.data.Calendar, function(value/*:Calendar*/)/*:**/ {
      return value.marshal();
    },
    Date, function(value/*:Date*/)/*:**/ {
      return Ext.Date.format(value, "c");
    }
  ]);};/*

  public static*/ function registerMarshaller$static(clazz/*:Class*/, marshaller/*:Function*/)/*:void*/ {
    MARSHALLERS$static.push(clazz, marshaller);
  }/*

  /**
   * Marshal the given value in such a way that remote beans are represented by their ids,
   * so that the result object can be transferred as the payload of a REST call.
   *
   * @param value the value to marshal
   * @return the REST representation
   * /
  public static*/ function marshalValue$static(value/*:**/)/*:**/ {
    if (!value) {
      return value;
    }

    for (var j/*:int*/ = 0; j < MARSHALLERS$static.length; j += 2) {
      var clazz/*:Class*/ = MARSHALLERS$static[j];
      if (value instanceof clazz) {
        var marshaller/*:Function*/ = MARSHALLERS$static[j + 1];
        return marshaller(value);
      }
    }

    if (value.constructor === Object) {
      var resultObject/*:Object*/ = {};
      for (var p/*:String*/ in value) {
        resultObject[p] = RemoteService.marshalValue(value[p]);
      }
      return resultObject;
    } else if (Ext.isArray(value)) {
      var resultArray/*:Array*/ = [];
      for (var i/*:int*/ = 0; i < (AS3.as(value,  Array)).length; i++) {
        resultArray[i] = RemoteService.marshalValue(value[i]);
      }
      return resultArray;
    } else {
      return value;
    }
  }/*

  /**
   * The name of the HTTP Etag header.
   * /
  public static const ETAG_HTTP_HEADER:String = "Etag";

  /**
   * Extract the Etag from the given request, stripping leading and trailing quotes.
   *
   * @param request the request
   * @return the etag
   * /
  public static*/ function getEtag$static(request/*:XMLHttpRequest*/)/*:String*/ {
    var etag/*:String*/ = request.getResponseHeader(RemoteService.ETAG_HTTP_HEADER);
    if (!etag) {
      return etag;
    }
    if (etag.substr(0, 1) === '"') {
      etag = etag.substr(1);
    }
    if (etag.substr(etag.length - 1, 1) === '"') {
      etag = etag.substr(0, etag.length - 1);
    }
    return etag.replace('\\"', '"');
  }/*

  public static*/ function formatEtag$static(etag/*:String*/)/*:String*/ {
    return etag.replace('"', '\\"') + '"';
  }/*

  /**
   * Resolving a JSON response is a three-step process:
   * <ol>
   *   <li>the given response text is parsed</li>
   *   <li>all relative URIs ('.' property) contained in the resulting JSON object are resolved against
   *     the given baseUri</li>
   *   <li>all Bean URI paths (<code>$Ref</code>) are replaced by Bean references</li>
   *   <li>if a parent remote Bean is given, a back-reference is added to all inline Beans (<code>$Bean</code>)</li>
   * </ol>
   * @param responseText the response text to parse as JSON
   * @param baseUri the base URI against which to resolve relative URIs
   * @return the resolved JSON object computed as described above or <code>null</code> if the given
   *   <code>responseText</code> is <code>null</code> or empty.
   * /
  public static*/ function resolveResponse$static(responseText/*:String*/, baseUri/*:String*/)/*:Object*/ {
    if (responseText) {
      var jsonResult/*:Object*/ = Ext.JSON.decode(responseText);
      resolveRelativeUris$static(jsonResult, baseUri);
      if (Ext.isArray(jsonResult)) {
        jsonResult = { items: jsonResult };
      }
      return com.coremedia.ui.data.impl.BeanClassRegistry.resolveBeans(jsonResult);
    }
    return null;
  }/*

  /**
   * Create a remote error object.
   *
   * @param response the non_null response that raised the error
   * @param strategy
   * @return a non_null error object
   * /
  public static*/ function createRemoteError$static(response/*:XMLHttpRequest*/, strategy/*:ExecuteEventually = null*/)/*:RemoteError*/ {if(arguments.length<=1)strategy=null;
    // Parse json data from the response text, if any.
    var json/*:Object*/ = response.responseText && response.responseText.indexOf('{') === 0 && Ext.JSON.decode(response.responseText);
    // If no json data is available, assume an empty json object.
    if (!json) {
      json = {};
    }
    // Provide default properties if no json data was available or if the
    // json data was incomplete.
    json = Ext.apply({
      $Type: 'com.coremedia.ui.data.error.RemoteError',
      method: response['requestMethod'],
      status: response.status,
      errorCode: 'HTTP-' + response.status,
      errorName: RemoteService.HTTP_ERROR,
      message: response.statusText
    }, json);
    // Resolve json data to typed object.
    var remoteError/*:RemoteError*/ =AS3.as( com.coremedia.ui.data.impl.BeanClassRegistry.resolveBeans(json),  com.coremedia.ui.data.error.RemoteError);
    if (!remoteError) {
      // Type detection did not work, return a rudimentary error.
      remoteError = new com.coremedia.ui.data.error.RemoteError(json);
    }
    // Make sure to call back.
    remoteError.setSync(strategy);
    return remoteError;
  }/*

  /**
   * Do a batched request for the given items. The items are divided into batches of the given
   * size and for each batch an individual request is issued. After all batch requests have
   * returned and their responses have been processed, the results are joined together.
   *
   * @param sequential flag to determine whether the individual batch requests are to be carried out sequentially of in parallel
   * @param items all items for the overall request.
   * @param batchSize the batch size limit for each individual batch.
   * @param uri the request URI.
   * @param method the request method to use.
   * @param requestParams additional request parameters in case of a POST request.
   * @param batchResponseHandler handler function to process the response for a single batch request.
   * @param joinHandler handler function after all batch requests have returned and their responses have been processed.
   * /
  public static*/ function batchedForkJoinRequest$static(sequential/*:Boolean*/, items/*:Array*/, batchSize/*:int*/, uri/*:String*/, method/*:String*/, requestParams/*:Object*/, batchResponseHandler/*:Function*/, joinHandler/*:Function*/)/*:void*/ {
    var batches/*:Array*/ = [];
    var batchIndex/*:int*/ = 0;
    var startIndex/*:int*/ = 0;
    var endIndex/*:int*/ = Math.min(batchSize, items.length);
    while (endIndex < items.length) {
      batches[batchIndex] = items.slice(startIndex, endIndex);
      batchIndex++;
      startIndex = endIndex;
      endIndex = Math.min(endIndex + batchSize, items.length);
    }
    batches[batchIndex] = items.slice(startIndex, endIndex);

    var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
      joinHandler();
    });

    var batchCount/*:int*/ = 0;

    function batchRequest()/*:void*/ {
      var batch/*:Array*/ = batches[batchCount];
      if (batch.length > 0) {
        execEvt.delay();

        var params/*:Object*/ = {};
        Ext.apply(params, requestParams);
        params.items = batch;
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(uri, method, true);
        rsm.request(params, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {

          if (sequential && batchCount < batches.length - 2) {
            batchCount++;
            batchRequest();
          }

          batchResponseHandler(rsmr);
          execEvt.proceed();
        });
        if (!sequential && batchCount < batches.length -2) {
          batchCount++;
          batchRequest();
        }
      }
    }

    batchRequest();

    execEvt.proceed();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RemoteService$,
      statics: {
        HTTP_ERROR: 'HTTP-ERROR',
        getCsrfTokenHeaderName: getCsrfTokenHeaderName$static,
        getCsrfTokenParameterName: getCsrfTokenParameterName$static,
        getCsrfTokenValue: getCsrfTokenValue$static,
        initCsrfToken: initCsrfToken$static,
        getConnection: getConnection$static,
        APPLICATION_URI: undefined,
        REMOTE_SERVICE_URI: undefined,
        REMOTE_SERVICE_ABSOLUTE_URI: undefined,
        relativizeAgainstServicePath: relativizeAgainstServicePath$static,
        calculateRequestURI: calculateRequestURI$static,
        calculateAbsoluteURI: calculateAbsoluteURI$static,
        calculateRemoteURI: calculateRemoteURI$static,
        relativizeURI: relativizeURI$static,
        MARSHALLERS: undefined,
        registerMarshaller: registerMarshaller$static,
        marshalValue: marshalValue$static,
        ETAG_HTTP_HEADER: "Etag",
        getEtag: getEtag$static,
        formatEtag: formatEtag$static,
        resolveResponse: resolveResponse$static,
        createRemoteError: createRemoteError$static,
        batchedForkJoinRequest: batchedForkJoinRequest$static,
        __initStatics__: function() {
          static$0();
          APPLICATION_URI$static_();
          REMOTE_SERVICE_URI$static_();
          REMOTE_SERVICE_ABSOLUTE_URI$static_();
          MARSHALLERS$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Ajax",
        "Ext.Date",
        "Ext.JSON",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.error.RemoteError",
        "com.coremedia.ui.util.ExecuteEventually",
        "com.coremedia.ui.util.UrlUtil",
        "net.jangaroo.net.URIUtils"
      ],
      uses: [
        "com.coremedia.ui.data.impl.BeanClassRegistry",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
