Ext.define("com.coremedia.cms.editor.sdk.util.ThumbnailResolverFactory", function(ThumbnailResolverFactory) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;

/**
 * Actually the factory does not return a new ThumbnailResolver instance but the default
 * one that is used by the EditorContext.
 * The factory method is used to register the doctype to property name mapping in the EditorContext
 * and will return the common ThumbnailFinder instance that implemented the ThumbnailResolver interface.
 * /
public class ThumbnailResolverFactory {

  /**
   * Registers a new document type mapping for the default ThumbnailResolver.
   * @param docType the name of the document type
   * @param properties the properties that should be looked up.
   * @return the default ThumbnailResolver instance of the EditorContext.
   * /
  public static*/ function create$static(docType/*:String, ...properties*/)/*:ThumbnailResolver*/ {var properties=Array.prototype.slice.call(arguments,1);
    var resolver/*:ThumbnailResolverImpl*/ =AS3.as( (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getDefaultThumbnailResolver(),  com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl);
    resolver.addMapping(docType, properties);
    return resolver;
  }/*
}*/function ThumbnailResolverFactory$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ThumbnailResolverFactory$,
      statics: {create: create$static},
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl"
      ]
    };
});
