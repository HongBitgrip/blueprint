Ext.define("com.coremedia.cap.content.search.SuggestionResult", function(SuggestionResult) {/*package com.coremedia.cap.content.search {
import com.coremedia.ui.data.RemoteBean;

/**
 * Fired when the hits of this search result become available.
 * @eventType com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTIONS
 * /
[Event(name="suggestions", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * A RemoteBean representing a suggestion search result.
 *
 * @see SearchService#searchSuggestions()
 * /
[PublicApi]
public interface SuggestionResult extends RemoteBean {

  /**
   * Return the found suggestions as an Array of Suggestion Beans.
   * @return the found suggestions as an Array of Suggestion Beans
   *
   * @see SearchService#searchSuggestions()
   * @see Suggestion
   * @see SearchSuggestionsParameters#SUGGESTIONS
   * /
  function getSuggestions():Array/* Vector.<Suggestion> * /;

  /**
   * Return the suggestion at <code>index</code> as a Suggestion Bean.
   * @return  the suggestion at <code>index</code> as a Suggestion Bean
   *
   * @see SearchService#searchSuggestions()
   * /
  function getSuggestion(index:uint):Suggestion;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
