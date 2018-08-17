Ext.define("com.coremedia.cap.content.search.SearchSuggestionsParameters", function(SearchSuggestionsParameters) {/*package com.coremedia.cap.content.search {

/**
 * A PESO (Plain ECMAScript Object) that defines the parameters for a remote
 * search suggestions call.
 *
 * @see SearchService#searchSuggestions()
 * /
[PublicApi]
public class SearchSuggestionsParameters {
  /**
   * Create search suggestion parameters with default values.
   * /
  public*/ function SearchSuggestionsParameters$() {
    throw new AS3.Error("Do not use 'new SearchSuggestionsParameters()' but 'SearchSuggestionsParameters({})' to prevent inheritance from Ext.Base");
  }/*

  /**
   * The query given by the user.
   * /
  public var query:String = null;

  /**
   * (Default: 50) The maximum number of matches to return. Pass -1 to return an
   * unlimited search result.
   * /
  public var limit:int = 50;

  /**
   * (Default: root folder) The folder in which to search, specified as the URI path of the Content bean representing
   * the respective folder (e.g. <code>content/123</code>})
   *
   * @see com.coremedia.ui.data.RemoteBean#getUriPath()
   * /
  public var folder:String = null;

  /**
   * (Default: true) True, if the search should extend to all
   * transitive subfolders of the given folder or root folder.
   *
   * Note that content from the base home folder (typically "/Home") will not be returned when searching
   * recursively below a parent folder of that folder, for example when searching below the root folder.
   *
   * @see com.coremedia.cap.content.ContentRepository#getBaseHomeFolder
   * /
  public var includeSubfolders:Boolean = true; //Pls don't change back to camel case, would break the server connection!

  /**
   * The allowed content types of the content in the search result.
   * /
  public var contentType:Array/* Vector.<String> * / = null;

  /**
   * (Default: true) whether to allow subtypes of the given types.
   * /
  public var includeSubtypes:Boolean = true;

  /**
   * Additional filter queries to further restrict the search result. A filter query
   * is almost completely written in the search engine's native query syntax except for entity URIs which
   * must be enclosed in special reserved angle brackets characters, i.e. &lt;uri&gt;. To use normal
   * angle brackets, write &lt;&lt; for &lt; and &gt;&gt; for &gt;.
   * /
  public var filterQuery:Array/* Vector.<String> * / = null;

  /**
   * Name of the property of search suggestions result containing the suggestions.
   * @eventType suggestions
   * /
  public static const SUGGESTIONS:String = "suggestions";
  /**
   * Name of the property of search suggestions result item containing the suggested value.
   * /
  public static const SUGGESTION_VALUE:String = "value";
  /**
   * Name of the property of search suggestions result item containing the number of appearances of the suggested value.
   * /
  public static const SUGGESTION_COUNT:String = "count";
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: SearchSuggestionsParameters$,
      query: null,
      limit: 50,
      folder: null,
      includeSubfolders: true,
      contentType: null,
      includeSubtypes: true,
      filterQuery: null,
      statics: {
        SUGGESTIONS: "suggestions",
        SUGGESTION_VALUE: "value",
        SUGGESTION_COUNT: "count"
      },
      requires: ["AS3.Error"]
    };
});
