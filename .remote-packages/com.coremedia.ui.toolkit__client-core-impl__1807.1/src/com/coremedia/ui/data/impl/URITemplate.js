Ext.define("com.coremedia.ui.data.impl.URITemplate", function(URITemplate) {/*package com.coremedia.ui.data.impl {

public class URITemplate {

  private static const*/var URI_TEMPLATE_VAR_PATTERN$static/*:RegExp*/ = /{([a-z][a-z0-9_$]*):([^}]+)}/gi;/*

  public static*/ function containsVariables$static(uriTemplate/*:String*/)/*:Boolean*/ {
    URI_TEMPLATE_VAR_PATTERN$static.lastIndex = 0; // for IE: reset match state before reusing the global RegExp!
    return URI_TEMPLATE_VAR_PATTERN$static.test(uriTemplate);
  }/*

  private var uriTemplate:String;
  private var uriPattern:RegExp;
  private var variables:Array;
  private var variableToMatcher:Object; // map from variable name to RegExp /{<variableName>}/g

  public*/ function URITemplate$(uriTemplate/*:String*/) {
    this.uriTemplate$PDwu = uriTemplate;

    var uriPattern/*:String*/ = "";

    // find HTML 5 URI template variables
    this.variables$PDwu = [];
    URI_TEMPLATE_VAR_PATTERN$static.lastIndex = 0; // for IE: reset match state before reusing the global RegExp!
    while (true) {
      var startIndex/*:uint*/ = URI_TEMPLATE_VAR_PATTERN$static.lastIndex;
      var match/*:Array*/ = URI_TEMPLATE_VAR_PATTERN$static.exec(uriTemplate);
      // append escaped literal part:
      var endIndex/*:int*/ = match ? URI_TEMPLATE_VAR_PATTERN$static.lastIndex - match[0].length : AS3.int_.MAX_VALUE;
      if (endIndex > startIndex) {
        uriPattern += regExpEscape$static(uriTemplate.substring(startIndex, endIndex));
      }
      if (!match) {
        break;
      }
      this.variables$PDwu.push(match[1]);
      uriPattern += "(" + match[2] + ")";
    }

    uriPattern = "^" + uriPattern + "$"; // always match string start and end

    this.uriPattern$PDwu = new RegExp(uriPattern);
  }/*

  private static*/ function regExpEscape$static(literal/*:String*/)/*:String*/ {
    // escape all special regexp characters with a backslash:
    return literal.replace(/([\\.+*?[\]^$(){}=!<>|:-])/g, "\\$1"); 
  }/*

  public*/ function matches(uri/*:String*/)/*:Boolean*/ {
    this.uriPattern$PDwu.lastIndex = 0; // for IE: reset match state before reusing the RegExp!
    return this.uriPattern$PDwu.test(uri);
  }/*

  public*/ function match(uri/*:String*/)/*:Object*/ {
    this.uriPattern$PDwu.lastIndex = 0; // for IE: reset match state before reusing the RegExp!
    var matches/*:Array*/ = this.uriPattern$PDwu.exec(uri);
    if (matches) {
      var binding/*:Object*/ = {};
      for (var i/*:int*/ = 0; i < this.variables$PDwu.length; ++i) {
        binding[this.variables$PDwu[i]] = matches[i + 1];
      }
      return binding;
    }
    return null;
  }/*

  private*/ function getPattern(variable/*:String*/)/*:RegExp*/ {
    if (!this.variableToMatcher$PDwu) {
      this.variableToMatcher$PDwu = {};
      for (var i/*:int*/ = 0; i < this.variables$PDwu.length; ++i) {
        var varName/*:String*/ = this.variables$PDwu[i];
        this.variableToMatcher$PDwu[varName] = new RegExp("{" + varName + "(?::[^}]+)?}", "g");
      }
    }
    return this.variableToMatcher$PDwu[variable];
  }/*

  public*/ function format(binding/*:Object*/, value/*:String = null*/)/*:String*/ {if(arguments.length<=1)value=null;
    var result/*:String*/ = value !== null ? value : this.uriTemplate$PDwu;
    for (var variable/*:String*/ in binding) {
      var pattern/*:RegExp*/ = this.getPattern$PDwu(variable);
      if (!pattern) {
        throw new AS3.Error("URITemplate.format(): missing binding for variable " + variable + ".");
      }
      result = result.replace(pattern, binding[variable]);
      // Encode all chars in externalId first.
      // After that, translate back encoded slashes ("%2F") to "/" because by default the tomcat container
      // do not allow encoded slashes for security reasons (see org.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH).
      encodeURIComponent(result).replace(/%2F/g, "/");
    }
    return result;
  }/*

  public*/ function toString()/*:String*/ {
    return this.uriTemplate$PDwu;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      uriTemplate$PDwu: null,
      uriPattern$PDwu: null,
      variables$PDwu: null,
      variableToMatcher$PDwu: null,
      constructor: URITemplate$,
      matches: matches,
      match: match,
      getPattern$PDwu: getPattern,
      format: format,
      toString: toString,
      statics: {containsVariables: containsVariables$static},
      requires: [
        "AS3.Error",
        "AS3.int_"
      ]
    };
});
