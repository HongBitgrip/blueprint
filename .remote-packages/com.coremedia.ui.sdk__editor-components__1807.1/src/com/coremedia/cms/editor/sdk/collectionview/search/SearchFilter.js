Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter", function(SearchFilter) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.ui.data.Bean;

/**
 * A search filter can be added to the SearchFilters component to introduce
 * custom search filters to the library window. Typically, your implementation will inherit from
 * the predefined class FilterPanel.
 *
 * @see FilterPanel
 * /
public interface SearchFilter {
  /**
   * Return the bean representing the UI state of the filter.
   *
   * @return the state bean
   * /
  function getStateBean():Bean;

  /**
   * Build a Solr query string according to the current state of this filter.
   * This method can use the current state as stored in the bean
   * returned from getStateBean().
   * If result is empty, this filter does not restrict the search.
   * Individual query strings are combined with the AND operator.
   * <p>
   *   This method should not access any state that is not stored
   *   in the state bean or the history of searches will no longer work
   *   accurately.
   * </p>
   *
   * @return
   * /
  function buildQuery():String;

  /**
   * Return the string id of this filter. The id is an arbitrary, but unique string.
   * You can use this id when defining a state for this filter.
   *
   * @return the filter id
   * /
  function getFilterId():String;

  /**
   * Return an object mapping all properties of the state bean to their
   * default values. During initialization and during a filter reset, the bean
   * properties will be set to the properties of the object returned by
   * this method.
   *
   * @return the state object of the default state
   * /
  function getDefaultState():Object;

  /**
   * Transform a state object before it is applied to the model bean.
   * This allows to detect states that have been saved as a search folder
   * using earlier versions of this search filter, rewriting them as needed.
   * An implementation may return the argument object, possibly modified,
   * but it may also return a new object.
   *
   * @param state the state to rewrite
   * @return the rewritten state
   * /
  function transformState(state:Object):Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
