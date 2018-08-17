Ext.define("com.coremedia.cap.content.search.SearchService", function(SearchService) {/*package com.coremedia.cap.content.search {

/**
 * This service allows you to issue search requests to the
 * CoreMedia search engine.
 * <p>
 * Contrary to the QueryService (not yet implemented in REST API), this search engine is
 * updated asynchronously and may not always represent the current
 * state of the content repository. This might lead to outdated
 * results.</p>
 * /
[PublicApi]
public interface SearchService {

  /**
   * Return the Remote Service URI to retrieve search results via Ajax.
   *
   * @param searchParameters the SearchParameters to use
   * @return the Remote Service URI to retrieve search results.
   *
   * @see com.coremedia.cap.content.search.SearchParameters
   * /
  function getSearchUri(searchParameters:SearchParameters = null):String;

  /**
   * Search for Content using a set of predefined criteria.
   * @param searchParameters a SearchParameters object
   * @return a Bean representing the search result under a property 'hits', containing a list of matching
   *   contents and optional search facets.
   *
   * @see com.coremedia.cap.content.search.SearchParameters
   * @see com.coremedia.cap.content.search.SearchParameters#HITS
   * /
  function search(searchParameters:SearchParameters):SearchResult;

  /**
   * Returns suggestions for the given criteria.
   * @param searchSuggestionsParameters a SearchSuggestionsParameters object
   * @return a Bean with a property 'suggestions' representing the found suggestions, which is a list (Array)
   * of suggestions, where a suggestion has a property 'value' containing the suggested string and a property
   * 'count' containing the number of appearances.
   *
   * @see com.coremedia.cap.content.search.SearchSuggestionsParameters#SUGGESTIONS
   * @see com.coremedia.cap.content.search.SearchSuggestionsParameters#SUGGESTION_VALUE
   * @see com.coremedia.cap.content.search.SearchSuggestionsParameters#SUGGESTION_COUNT
   * @see com.coremedia.cap.content.search.SearchSuggestionsParameters
   * /
  function searchSuggestions(searchSuggestionsParameters:SearchSuggestionsParameters):SuggestionResult;

  /**
   * Return the Remote Service URI to retrieve suggestions via Ajax.
   *
   * @param searchSuggestionsParameters a SearchSuggestionsParameters object
   * @return the Remote Service URI to retrieve suggestions via Ajax.
   *
   * @see com.coremedia.cap.content.search.SearchSuggestionsParameters
   * /
  function getSearchSuggestionsUri(searchSuggestionsParameters:SearchSuggestionsParameters = null):String;
  
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
