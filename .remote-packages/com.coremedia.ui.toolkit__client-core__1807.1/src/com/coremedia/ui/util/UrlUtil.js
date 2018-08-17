Ext.define("com.coremedia.ui.util.UrlUtil", function(UrlUtil) {/*package com.coremedia.ui.util {

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

public class UrlUtil {
  /**
   * Complements <code>WindowUtil#getHashParamsAsObject</code>.
   *
   * Parse the fragment part of the current page's URL as a query parameter string
   * (param1=val1&amp;...) and return the value of the given parameter.
   * Return null, if the parameter is not set.
   *
   * @param paramName the hash parameter name
   * @param url an explicit URL to parse, or, if not specified, the current page's URL.
   * /
  public static*/ function getHashParam$static(paramName/*:String*/, url/*:String = null*/)/*:String*/ {if(arguments.length<=1)url=null;
    return findHashParameter$static(parseUri$static(url), paramName);
  }/*

  private static*/ function findHashParameter$static(uri/*:URI*/, paramName/*:String*/)/*:String*/ {
    return uri ? findParameterValue$static(decodeURIComponent(uri.fragment), paramName) : null;
  }/*

  /**
   * Find a given parameter in a URL-query-parameter-style key-value-assignment string.
   * @param parameters the parameters to parse, in format (key=value(&amp;key=value)*)?
   * @param paramName the name of the parameter (key) to look for
   * @return the decoded value of the parameter or <code>null</code> if no key is equal to the parameter name.
   * /
  private static*/ function findParameterValue$static(parameters/*:String*/, paramName/*:String*/)/*:String*/ {
    var result/*:String*/ = null;
    if (parameters) {
      var parameterAssignments/*:Array*/ = parameters.split("&");
      for (var i/*:int*/ = 0; i < parameterAssignments.length; i++) {
        var parameterAssignment/*:String*/ = parameterAssignments[i];
        var equalsPos/*:int*/ = parameterAssignment.indexOf("=");
        var assignmentParamName/*:String*/ = equalsPos === -1 ? parameterAssignment : parameterAssignment.substring(0, equalsPos);
        if (paramName === assignmentParamName) {
            result = decodeURIComponent(parameterAssignment.substring(equalsPos + 1));
          break;
        }
      }
    }
    return result;
  }/*

  /**
   * Create an URI snippet to append to a given img (src-) URI so that the image will be scaled down
   * to the maximum width supplied in the function parameter. Any metadata of the image is also removed,
   * as these are generally not needed to display a scaled-down image within the browser.
   * @param maxWidth the maxWidth to scale down the image to, if required
   * @return an URI snippet to append to a given URI
   * /

  public static*/ function getImgFitInstruction$static(maxWidth/*:int*/)/*:String*/ {
    return '/rm/fit;maxw='+maxWidth;
  }/*

  /**
   * Fail-safe version of URIUtils.parse() that falls back to the current page's URL.
   * /
  private static*/ function parseUri$static(uriStr/*:String*/)/*:URI*/ {
    if (!uriStr) {
      uriStr = window.location.toString();
    }
    var uri/*:URI*/ = null;
    try {
      uri = net.jangaroo.net.URIUtils.parse(uriStr);
    } catch(e){if(AS3.is(e,AS3.Error)) {
      // ignore, uri will stay null
    }else throw e;}
    return uri;
  }/*

  public static*/ function addMatrixParameters$static(uri/*:String*/, parameters/*:Object*/)/*:String*/ {
    var result/*:Array*/ = [uri];
    for (var parameter/*:String*/ in parameters) {
      result.push(";", parameter, "=", encodeURIComponent(parameters[parameter]));
    }
    return result.join('');
  }/*
}*/function UrlUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: UrlUtil$,
      statics: {
        getHashParam: getHashParam$static,
        getImgFitInstruction: getImgFitInstruction$static,
        addMatrixParameters: addMatrixParameters$static
      },
      requires: [
        "AS3.Error",
        "net.jangaroo.net.URIUtils"
      ]
    };
});
