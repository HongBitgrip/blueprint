Ext.define("com.coremedia.cap.content.search.SearchParameters", function(SearchParameters) {/*package com.coremedia.cap.content.search {

/**
 * A PESO (Plain ECMAScript Object) that defines the parameters for a remote search call.
 *
 * @see SearchService#search()
 * /
[PublicApi]
public class SearchParameters extends SearchSuggestionsParameters {

  /**
   * Create search parameters with default values.
   * /
  public*/ function SearchParameters$() {this.super$gMbH();
    throw new AS3.Error("Do not use 'new SearchParameters()' but 'SearchParameters({})' to prevent inheritance from Ext.Base");
  }/*

  /**
   * <p>
   * List of sort criteria, consisting of a sort field name followed by an optional
   * space separated sort order (&lt;sort-field>&lt;space>&lt;sort-order>). The sort field name
   * depends on the configured index schema. Alternatively to a sort field name the value
   * <code>score</code> for the search engine internal scoring can be used. Possible values
   * for sort order are <code>asc</code> for ascending and <code>desc</code> for descending.
   * </p>
   * Examples: "<code>editor asc</code>" or "<code>score desc</code>"
   * /
  public var orderBy:Array/* Vector.<String> * / = null;
  /**
   * List of facet criteria for faceted field search, consisting of a facet field
   * followed by an optional space separated facet limit number followed by an optional space
   * separated facet sort order (&lt;facet-field>&lt;space>&lt;facet-limit>&lt;space>&lt;facet-order>).
   * If the limit number is missing the default value <code>10</code> is used. If the order is
   * missing the default order <code>count</code> is used. Possible order values are <code>
   * count</code> for descendant total number and <code>lex</code> to sort alphabetically.
   * /
  public var facetField:Array/* Vector.<String> * / = null;
  /**
   * List of facet queries to return faceting counts for. A facet query
   * is almost completely written in the search engine's native query syntax except for entity URIs which
   * must be enclosed in special reserved angle brackets characters, i.e. &lt;uri&gt;. To use normal
   * angle brackets, write &lt;&lt; for &lt; and &gt;&gt; for &gt;.
   * /
  public var facetQuery: Array/* Vector.<String> * / = null;

  /**
   * The name of a search result Bean's property which contains the search result Array.
   * @eventType hits
   * @see SearchService#search()
   * /
  public static const HITS:String = 'hits';

  /**
   * The name of a search result Bean's property which contains the total number of search results.
   * @eventType total
   * @see SearchService#search()
   * /
  public static const TOTAL:String = 'total';
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.search.SearchSuggestionsParameters",
      metadata: {"": ["PublicApi"]},
      constructor: SearchParameters$,
      super$gMbH: function() {
        com.coremedia.cap.content.search.SearchSuggestionsParameters.prototype.constructor.apply(this, arguments);
      },
      orderBy: null,
      facetField: null,
      facetQuery: null,
      statics: {
        HITS: 'hits',
        TOTAL: 'total'
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters"
      ]
    };
});
