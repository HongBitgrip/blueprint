Ext.define("com.coremedia.cap.content.search.Suggestion", function(Suggestion) {/*package com.coremedia.cap.content.search {
import com.coremedia.ui.data.Bean;

/**
 * A Bean representing one suggestion from a SuggestionResult.
 *
 * @see SuggestionResult
 * /
[PublicApi]
public interface Suggestion extends Bean {

  /**
   * Return the suggested string.
   * @return the suggested String
   *
   * @see SearchService#searchSuggestions()
   * @see SearchSuggestionsParameters#SUGGESTION_VALUE
   * /
  function getValue():String;

  /**
   * Return the number of search results for the suggested string.
   * @return the number of search results for the suggested string.
   *
   * @see SearchService#searchSuggestions()
   * @see SearchSuggestionsParameters#SUGGESTION_COUNT
   * /
  function getCount():uint;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
