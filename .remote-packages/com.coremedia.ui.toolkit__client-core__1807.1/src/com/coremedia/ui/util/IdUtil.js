Ext.define("com.coremedia.ui.util.IdUtil", function(IdUtil) {/*package com.coremedia.ui.util {

/**
 * A helper class that provides functions for converting between several
 * content id and bean id representations.
 * /
public class IdUtil {

  private static const*/var CONTENT_ID_PATTERN$static/*:RegExp*/ = /^coremedia:\/\/\/cap\/content\/(-?\d+)$/;/*
  private static const*/var CONTENT_URI_PATTERN$static/*:RegExp*/ = /^content\/(-?\d+)$/;/*

  private static const*/var CAPLIST_ID_PATTERN$static/*:RegExp*/ = /^coremedia:\/\/\/cap\/list\/(.+)$/;/*
  private static const*/var CAPLIST_URI_PATTERN$static/*:RegExp*/ = /^caplist\/(.+)$/;/*
  private static const*/var PROJECT_URI_PATTERN$static/*:RegExp*/ = /^project\/(.+)$/;/*

  private static const*/var CONTENT_ID_PREFIX$static/*:String*/ = "coremedia:///cap/content/";/*
  private static const*/var CONTENT_URI_PREFIX$static/*:String*/ = "content/";/*

  private static const*/var CAPLIST_ID_PREFIX$static/*:String*/ = "coremedia:///cap/list/";/*
  private static const*/var CAPLIST_URI_PREFIX$static/*:String*/ = "caplist/";/*
  private static const*/var PROJECT_URI_PREFIX$static/*:String*/ = "project/";/*

  //noinspection JSValidateJSDoc
  /**
   * 0 is not a valid content ID, so use it to indicate missing content
   * @see com.coremedia.cap.common.IdHelper (java UAPI helper class)
   * /
  public static const MISSING_CONTENT_ID:int = 0;

  /**
   * Parse the numeric id from a given content id.
   *
   * @param contentId the content id to parse
   * @return the numeric id from contentId or {@link #MISSING_CONTENT_ID} if not found
   * /
  public static*/ function parseContentId$static(contentId/*:String*/)/*:int*/ {/*
    const*/var match/*:Object*/ = CONTENT_ID_PATTERN$static.exec(contentId);
    return match != null ? match[1] : IdUtil.MISSING_CONTENT_ID;
  }/*

  /**
   * Parse the numeric id from a given content uri.
   *
   * @param contentUri the content uri to parse
   * @return the numeric id from contentUri or {@link #MISSING_CONTENT_ID} if not found
   * /
  public static*/ function parseContentBean$static(contentUri/*:String*/)/*:int*/ {/*
    const*/var match/*:Object*/ = CONTENT_URI_PATTERN$static.exec(contentUri);
    return match != null ? match[1] : IdUtil.MISSING_CONTENT_ID;
  }/*

  /**
   * Format a content id from the given numeric id.
   *
   * @param intId the numeric id
   * @return a content id
   * /
  public static*/ function formatContentId$static(intId/*:int*/)/*:String*/ {
    return CONTENT_ID_PREFIX$static + intId;
  }/*

  /**
   * Format a content uri from the given numeric id.
   *
   * @param intId the numeric id
   * @return a content uri
   * /
  public static*/ function formatContentBean$static(intId/*:int*/)/*:String*/ {
    return CONTENT_URI_PREFIX$static + intId;
  }/*

  /**
   * Parse the suffix part from a given caplist id.
   *
   * @param capListId the caplist uri to parse
   * @return the suffix id part from capListId or undefined if not found
   * /
  public static*/ function parseCapListId$static(capListId/*:String*/)/*:String*/ {/*
    const*/var match/*:Object*/ = CAPLIST_ID_PATTERN$static.exec(capListId);
    return match != null ? match[1] : undefined;
  }/*

  /**
   * Parse the suffix part from a given caplist uri.
   *
   * @param capListUri the caplist uri to parse
   * @return the suffix part from capListUri or undefined if not found
   * /
  public static*/ function parseCapListBean$static(capListUri/*:String*/)/*:String*/ {/*
    const*/var match/*:Object*/ = CAPLIST_URI_PATTERN$static.exec(capListUri);
    return match != null ? match[1] : undefined;
  }/*

  /**
   * Parse the suffix part from a given project uri.
   *
   * @param projectUri the projectUri uri to parse
   * @return the suffix part from projectUri or undefined if not found
   * /
  public static*/ function parseProjectBean$static(projectUri/*:String*/)/*:String*/ {/*
    const*/var match/*:Object*/ = PROJECT_URI_PATTERN$static.exec(projectUri);
    return match != null ? match[1] : undefined;
  }/*

  /**
   * Format a caplist id from the given suffix part of a caplist d.
   *
   * @param idSuffix the suffix part of a caplist id
   * @return a caplist id
   * /
  public static*/ function formatCapListId$static(idSuffix/*:String*/)/*:String*/ {
    return CAPLIST_ID_PREFIX$static + idSuffix;
  }/*

  /**
   * Format a caplist uri from the given suffix part of a caplist uri.
   *
   * @param uriSuffix the suffix part of a caplist uri
   * @return a caplist uri
   * /
  public static*/ function formatCapListBean$static(uriSuffix/*:String*/)/*:String*/ {
    return CAPLIST_URI_PREFIX$static + uriSuffix;
  }/*

  /**
   * Format a project uri from the given suffix part of a project uri.
   *
   * @param uriSuffix the suffix part of a project uri
   * @return a project uri
   * /
  public static*/ function formatProjectBean$static(uriSuffix/*:String*/)/*:String*/ {
    return PROJECT_URI_PREFIX$static + uriSuffix;
  }/*
}*/function IdUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: IdUtil$,
      statics: {
        MISSING_CONTENT_ID: 0,
        parseContentId: parseContentId$static,
        parseContentBean: parseContentBean$static,
        formatContentId: formatContentId$static,
        formatContentBean: formatContentBean$static,
        parseCapListId: parseCapListId$static,
        parseCapListBean: parseCapListBean$static,
        parseProjectBean: parseProjectBean$static,
        formatCapListId: formatCapListId$static,
        formatCapListBean: formatCapListBean$static,
        formatProjectBean: formatProjectBean$static
      }
    };
});
