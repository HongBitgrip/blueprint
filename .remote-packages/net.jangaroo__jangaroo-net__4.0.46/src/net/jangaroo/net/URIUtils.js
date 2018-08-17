Ext.define("net.jangaroo.net.URIUtils", function(URIUtils) {/*package net.jangaroo.net {

/**
 * A class implementing resolving and relativizing URIs
 * generic URI syntax as specified in <a href="http://www.rfc-editor.org/rfc/rfc3986.txt">RFC 3986</a>.
 *
 * /
public class URIUtils {

  // regular expression for uris as given in rfc2396:
  private static const*/var URI_PATTERN$static/*:RegExp*/ = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;/*
  // regular expression groups:               12            3  4            5       6  7        8 9
  private static const*/var URI_PATTERN_GROUP_SCHEME_PRESENT$static/*:int*/ = 1;/*
  private static const*/var URI_PATTERN_GROUP_SCHEME$static/*:int*/ = 2;/*
  private static const*/var URI_PATTERN_GROUP_AUTHORITY_PRESENT$static/*:int*/ = 4;/*
  private static const*/var URI_PATTERN_GROUP_AUTHORITY$static/*:int*/ = 4;/*
  private static const*/var URI_PATTERN_GROUP_PATH$static/*:int*/ = 5;/*
  private static const*/var URI_PATTERN_GROUP_QUERY$static/*:int*/ = 7;/*
  private static const*/var URI_PATTERN_GROUP_QUERY_PRESENT$static/*:int*/ = 6;/*
  private static const*/var URI_PATTERN_GROUP_FRAGMENT$static/*:int*/ = 9;/*
  private static const*/var URI_PATTERN_GROUP_FRAGMENT_PRESENT$static/*:int*/ = 8;


  // pure utility class with static functions only
  function URIUtils$() {
  }/*

  /**
   * Create an URI from its components
   * /
  public*/ function create(scheme/*:String = null*/, authority/*:String = null*/, path/*:String = ""*/, query/*:String = null*/, fragment/*:String = null*/)/*:URI*/ {switch(arguments.length){case 0:scheme=null;case 1:authority=null;case 2:path="";case 3:query=null;case 4:fragment=null;}
    return new net.jangaroo.net.URIImpl(scheme, authority, path, query, fragment);
  }/*

  /**
   * Parses the string into a {@link URI} instance.
   * @throws URIError if the syntax does not conform to <a href="http://www.rfc-editor.org/rfc/rfc3986.txt">RFC 3986</a>
   * /
  public static*/ function parse$static(source/*:String*/)/*:URI*/ {
    if (!source.match(URI_PATTERN$static)) {
      throw new AS3.Error("invalid URI syntax: " + source);
    }
    var match/*:Array*/ = URI_PATTERN$static.exec(source);
    return new net.jangaroo.net.URIImpl(
            ifPresentOrNull$static(match, URI_PATTERN_GROUP_SCHEME$static, URI_PATTERN_GROUP_SCHEME_PRESENT$static),
            ifPresentOrNull$static(match, URI_PATTERN_GROUP_AUTHORITY$static, URI_PATTERN_GROUP_AUTHORITY_PRESENT$static),
            ifPresentOrNull$static(match, URI_PATTERN_GROUP_PATH$static, URI_PATTERN_GROUP_PATH$static, ""),
            ifPresentOrNull$static(match, URI_PATTERN_GROUP_QUERY$static, URI_PATTERN_GROUP_QUERY_PRESENT$static),
            ifPresentOrNull$static(match, URI_PATTERN_GROUP_FRAGMENT$static, URI_PATTERN_GROUP_FRAGMENT_PRESENT$static));
  }/*

  private static*/ function ifPresentOrNull$static(match/*:Array*/, valueGroup/*:int*/, presentGroup/*:int*/, defaultValue/*:String = null*/)/*:String*/ {if(arguments.length<=3)defaultValue=null;/*
    const*/var present/*:String*/ = match[presentGroup];
    return present ? match[valueGroup] : defaultValue;
  }/*

  /**
   * Relativize a reference uri against a base URI according to RFC 3986.
   * If both scheme and authority are equal, this method always returns a URI with a relative path,
   * even it an absolute path would be shorter.
   *
   * @param base the base URI. Must be an absolute URI.
   * @param reference the URI to relativize. Must be an absolute URI.
   * @return an URI which yields the reference URI when resolved against the given base URI
   * @throws URIError if base or reference is a relative URI
   * /
  public static*/ function relativize$static(base/*:String*/, reference/*:String*/)/*:String*/ {
    return String(URIUtils.parse(base).relativize(URIUtils.parse(reference)));
  }/*

  /**
   * Resolve a uri against a base URI according to RFC 3986.
   * @param base the base uri
   * @param reference the uri to resolve
   * @return an absolute URI
   * @throws URIError if base is not an absolute URI
   * /
  public static*/ function resolve$static(base/*:String*/, reference/*:String*/)/*:String*/ {
    return String(URIUtils.parse(base).resolve(URIUtils.parse(reference)));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: URIUtils$,
      create: create,
      statics: {
        parse: parse$static,
        relativize: relativize$static,
        resolve: resolve$static
      },
      requires: ["AS3.Error"],
      uses: ["net.jangaroo.net.URIImpl"]
    };
});
