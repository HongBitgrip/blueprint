Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase", function(SearchFilterStateBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import ext.Ext;

/**
 * A configuration object for setting the state of a single filter in the ShowCollectionViewAction.
 *
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction
 * /
[PublicApi]
public class SearchFilterStateBase {
  private var id:String;
  private var state:Object;

  /**
   * Create a new filter state. The state is derived from the argument object by
   * removing the filterId property and keeping all other properties.
   *
   * @param config the config object
   * /
  public*/ function SearchFilterStateBase$(config/*:SearchFilterState = null*/) {if(arguments.length<=0)config=null;
    this.state$b5IH = this.buildState(config);
    // Store the filter ID separately.
    this.id$b5IH = AS3.getBindable(config,"filterId");
  }/*

  //noinspection JSMethodCanBeStatic
  /**
   * Given the config object, return an object containing only those properties
   * that are supposed to be set when updating the filter. Subclasses may override
   * this method if the configuration API and the state properties differ.
   * By default, all properties are copied to the result object, but the filterId
   * property is omitted.
   *
   * @param config the constructor's config object
   * @return the state object
   * /
  public*/ function buildState(config/*:SearchFilterState*/)/*:Object*/ {
    var state/*:Object*/ = Ext.apply({}, config);
    // We assume that there is never an actual filter state property named filterId.
    delete state.filterId;
    return state;
  }/*

  /**
   * Return the id of the filter whose state is to be set. This must be the same if that
   * is returned by the FilterPanel.
   *
   * @return the id of the filter
   * @see com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel
   * /
  public*/ function getId()/*:String*/ {
    return this.id$b5IH;
  }/*

  /**
   * Return the state object containing all properties to be set.
   *
   * @return the state object
   * /
  public*/ function getState()/*:Object*/ {
    return this.state$b5IH;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      id$b5IH: null,
      state$b5IH: null,
      constructor: SearchFilterStateBase$,
      buildState: buildState,
      getId: getId,
      getState: getState,
      requires: ["Ext"]
    };
});
