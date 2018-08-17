Ext.define("com.coremedia.cap.content.ContentProxyHelper", function(ContentProxyHelper) {/*package com.coremedia.cap.content {

/**
 * Helper class to handle {@link ContentProxy} objects.
 * /
public class ContentProxyHelper {

  /**
   * If the given object is a Content object, return it.
   * If it is a ContentProxy, return the associated Content object.
   * Otherwise, return null.
   *
   * @param object the object to determine the content object from
   * @param includeContentProxy true to determine content objects from a ContentProxy
   * @return see description
   * /
  public static*/ function getContent$static(object/*:**/, includeContentProxy/*:Boolean = true*/)/*:Content*/ {if(arguments.length<=1)includeContentProxy=true;
    var contentProxy/*:ContentProxy*/ = includeContentProxy &&AS3.as( object,  com.coremedia.cap.content.ContentProxy);
    return contentProxy ? contentProxy.getContent() : (AS3.as(object,  com.coremedia.cap.content.Content));
  }/*

  /**
   * Convenience method to use {@link #getContent} on an array.
   *
   * @param contents an array containing objects to be applied to {@link #getContent}
   * @param includeContentProxy {@see #getContent}
   * @return an array which may contain null values
   * /
  public static*/ function getContentsUnfiltered$static(contents/*:Array*/, includeContentProxy/*:Boolean = true*/)/*:Array*/ {if(arguments.length<=1)includeContentProxy=true;
    return contents.map(function (object/*:**/)/*:Content*/ {
      return ContentProxyHelper.getContent(object, includeContentProxy);
    });
  }/*

  /**
   * Convenience method to use {@link #getContent} on an array, filtering null values.
   *
   * @param contents an array containing objects to be applied to {@link #getContent}
   * @param includeContentProxy
   * @return an array which may not contain null values (so its length might not be the same as the provided array)
   * /
  public static*/ function getContents$static(contents/*:Array*/, includeContentProxy/*:Boolean = true*/)/*:Array*/ {if(arguments.length<=1)includeContentProxy=true;
    return ContentProxyHelper.getContentsUnfiltered(contents, includeContentProxy).filter(nonFalsy$static);
  }/*

  private static*/ function nonFalsy$static(entity/*:**/)/*:Boolean*/ {
    return ! !entity;
  }/*
}*/function ContentProxyHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentProxyHelper$,
      statics: {
        getContent: getContent$static,
        getContentsUnfiltered: getContentsUnfiltered$static,
        getContents: getContents$static
      },
      uses: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentProxy"
      ]
    };
});
