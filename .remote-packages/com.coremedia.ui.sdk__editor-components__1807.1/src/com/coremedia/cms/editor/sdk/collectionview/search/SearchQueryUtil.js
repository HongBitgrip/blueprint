Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil", function(SearchQueryUtil) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.editorContext;

public class SearchQueryUtil {

  /**
   * Build a query string that will exclude the given content types.
   *
   * @param contentTypes the content type names to exclude;
   *                      using IEditorContext#getContentTypesExcludedFromSearchResult() if no argument is provided
   * @return the query string
   *
   * @see com.coremedia.cms.editor.sdk.IEditorContext#getContentTypesExcludedFromSearchResult()
   * @deprecated use <code>buildExcludeContentTypesQuery</code> instead
   * /
  [Deprecated]
  public static*/ function buildExcludeDocumentTypesQuery$static(contentTypes/*:Array = null*/)/*:String*/ {if(arguments.length<=0)contentTypes=null;
    return SearchQueryUtil.buildExcludeContentTypesQuery(contentTypes);
  }/*

  /**
   * Build a query string that will exclude the given content types.
   *
   * @param contentTypes the content type names to exclude;
   *                      using IEditorContext#getContentTypesExcludedFromSearchResult() if no argument is provided
   * @return the query string
   *
   * @see com.coremedia.cms.editor.sdk.IEditorContext#getContentTypesExcludedFromSearchResult()
   * /
  public static*/ function buildExcludeContentTypesQuery$static(contentTypes/*:Array = null*/)/*:String*/ {if(arguments.length<=0)contentTypes=null;
    var docTypeExclusions/*:Array*/ = contentTypes || com.coremedia.cms.editor.sdk.editorContext.getContentTypesExcludedFromSearchResult();
    var excludeDoctypesFragment/*:String*/ = "";
    for/* each*/(var $1=0;$1</* in*/ docTypeExclusions.length;++$1) {var excludedDocType/*:String*/ =docTypeExclusions[$1];
      excludeDoctypesFragment = excludeDoctypesFragment + "-documenttype:" + excludedDocType + " ";
    }
    return excludeDoctypesFragment;
  }/*
}*/function SearchQueryUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {buildExcludeDocumentTypesQuery: ["Deprecated"]},
      constructor: SearchQueryUtil$,
      statics: {
        buildExcludeDocumentTypesQuery: buildExcludeDocumentTypesQuery$static,
        buildExcludeContentTypesQuery: buildExcludeContentTypesQuery$static
      },
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
