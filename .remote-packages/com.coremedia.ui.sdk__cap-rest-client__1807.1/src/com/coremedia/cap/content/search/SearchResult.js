Ext.define("com.coremedia.cap.content.search.SearchResult", function(SearchResult) {/*package com.coremedia.cap.content.search {
import com.coremedia.ui.data.RemoteBean;

/**
 * Fired when the hits of this search result become available.
 * @eventType com.coremedia.cap.content.search.SearchParameters.HITS
 * /
[Event(name="hits", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fired when the total number hits of this search result becomes available.
 * @eventType com.coremedia.cap.content.search.SearchParameters.TOTAL
 * /
[Event(name="total", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * A Bean representing a Content search result.
 *
 * @see SearchService#search()
 * /
[PublicApi]
public interface SearchResult extends RemoteBean {

  /**
   * Return the total number of search results.
   * The length of the <code>hits</code> array is less or equal to this number.
   * @return the total number of search results
   *
   * @see SearchService#search()
   * @see Content
   * @see SearchParameters#TOTAL
   * /
  function getTotal():uint;

  /**
   * Return the search result as an Array of Content.
   * @return the search result as an Array of Content.
   *
   * @see SearchService#search()
   * @see Content
   * @see SearchParameters#HITS
   * /
  function getHits():Array/* Vector.<Content> * /;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
