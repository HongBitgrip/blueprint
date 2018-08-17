Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel", function(CollectionViewModel) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.util.Observable;

/**
 * Fires after this model was changed.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>model:CollectionViewModel</code> this model
 *   </li>
 * </ul>
 * /
[Event(name = "update")] // NOSONAR - no type

/**
 * A model bean representing the state of the collection window.
 * Setting properties of this bean may trigger a new search request.
 * To force a new search request, set the required properties and
 * call <code>triggerSearch()</code>.
 *
 * @see #triggerSearch()
 * /
public class CollectionViewModel extends Observable {
  /**
   * An event fired when an update of the view is required. Most property
   * changes result in this events, except for changes of the search text.
   * Changes of the search text require an explicit trigger before the
   * update event is fired.
   * <p>
   * Listeners of this event receive a reference to the state parameters bean as their only argument.
   * </p>
   * <p>
   * This event is fired asynchronously.
   * </p>
   * /
  public static const UPDATE_EVENT:String = "update";

  // Properties and property values for the framework
  public static const MODE_PROPERTY:String = "mode";
  public static const REPOSITORY_MODE:String = "repository";
  public static const SEARCH_MODE:String = "search";

  public static const VIEW_PROPERTY:String = "view";

  public static const SEARCH_TEXT_PROPERTY:String = "searchText";
  public static const CONTENT_TYPE_PROPERTY:String = "contentType";
  public static const FOLDER_PROPERTY:String = "folder";

  public static const ORDER_BY_PROPERTY:String = "orderBy";
  public static const ORDER_BY_FRESHNESS_DESC:String = "freshness desc";
  public static const ORDER_BY_NAME_ASC:String = "name asc";

  public static const ORDER_BY_PROPERTY_REPOSITORY_LIST:String = "orderByRepo";

  /**
   * Currently, the limit property is without effect for collection view - based searches.
   * The number of loaded search results and increment size are set via
   * @see com.coremedia.cms.editor.sdk.collectionview.list.SearchList .
   * /
  public static const LIMIT_PROPERTY:String = "limit";

  /**
   * Standard property names (excluding properties managed by additional filter beans) relevant
   * for the search mode.
   * /
  public static const SEARCH_MODE_PROPERTY_NAMES:Array =*/function SEARCH_MODE_PROPERTY_NAMES$static_(){CollectionViewModel.SEARCH_MODE_PROPERTY_NAMES=( [
    CollectionViewModel.SEARCH_TEXT_PROPERTY,
    CollectionViewModel.CONTENT_TYPE_PROPERTY,
    CollectionViewModel.FOLDER_PROPERTY,
    CollectionViewModel.ORDER_BY_PROPERTY,
    CollectionViewModel.LIMIT_PROPERTY]);}/*;


  private static const*/var FILTER_DEFAULT_STATE$static/*:Object*/;/* =*/function FILTER_DEFAULT_STATE$static_(){FILTER_DEFAULT_STATE$static=( {
    searchText:'',
    contentType:'Content_'
  });};/*

  /**
   * A list of SearchFilter objects that must be asked for query fragments when
   * building a query.
   *
   * @see SearchFilter
   * /
  private var searchFilters:Object =*/function searchFilters_(){this.searchFilters$DDyr=( {});}/*;
  private var dirty:Boolean = false;

  private var history:History;

  /**
   * A state bean for search text, document type, folder, ordering and for view switching.
   * /
  private var mainStateBean:Bean;

  /**
   * A list of all state beans that determine the state of the entire collection view.
   * /
  private var allStateBeans:Object;

  public*/ function CollectionViewModel$(initialFolder/*:Content = null*/) {this.super$DDyr();searchFilters_.call(this);if(arguments.length<=0)initialFolder=null;
    var initialState/*:Object*/ = {};
    Ext.apply(initialState, FILTER_DEFAULT_STATE$static);
    initialState[CollectionViewModel.MODE_PROPERTY] = CollectionViewModel.REPOSITORY_MODE;
    initialState[CollectionViewModel.VIEW_PROPERTY] = com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW;
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    initialState[CollectionViewModel.FOLDER_PROPERTY] = initialFolder || site && site.getSiteRootFolder() || com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
    initialState[CollectionViewModel.ORDER_BY_PROPERTY] = CollectionViewModel.ORDER_BY_FRESHNESS_DESC;
    initialState[CollectionViewModel.ORDER_BY_PROPERTY_REPOSITORY_LIST] = CollectionViewModel.ORDER_BY_NAME_ASC;
    initialState[CollectionViewModel.CONTENT_TYPE_PROPERTY] = "Content_";
    this.mainStateBean$DDyr = com.coremedia.ui.data.beanFactory.createLocalBean(initialState);
    this.mainStateBean$DDyr.addValueChangeListener(AS3.bind(this,"stateBeanChanged$DDyr"));

    this.allStateBeans$DDyr = {_main: this.mainStateBean$DDyr};
  }/*


  /**
   * Return the main state bean for standard UI elements of the collection view:
   * mode, view, search text, document type, folder, ordering.
   *
   * @return the state bean
   * /
  public*/ function getMainStateBean()/*:Bean*/ {
    return this.mainStateBean$DDyr;
  }/*

  /**
   * Return the state bean of the filter with the given id. If no such filter
   * is available, return null.
   *
   * @param searchedFilterId the id of the filter
   * @return the state bean of the filter
   * /
  public*/ function getFilterStateBean(searchedFilterId/*:String*/)/*:Bean*/ {
    for (var filterId/*:String*/ in this.searchFilters$DDyr) {
      var searchFilter/*:SearchFilter*/ =AS3.as( this.searchFilters$DDyr[filterId],  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
      if (searchFilter.getFilterId() === searchedFilterId) {
        return searchFilter.getStateBean();
      }
    }
    return null;
  }/*

  /**
   * Return a list of all state beans that determine the state of the entire collection view.
   *
   * @return all state beans
   * /
  public*/ function getAllStateBeans()/*:Object*/ {
    return this.allStateBeans$DDyr;
  }/*

  public*/ function getCurrentState()/*:Object*/ {
    var stateBeans/*:Object*/ = this.getAllStateBeans();
    var result/*:Object*/ = {};
    for (var stateId/*:String*/ in stateBeans) {
      result[stateId] = (AS3.as(stateBeans[stateId],  com.coremedia.ui.data.Bean)).toObject();
    }
    return result;
  }/*

  public*/ function updateState(targetState/*:Object*/)/*:void*/ {
    // Revert to a clean state. Model properties not mentioned in
    // the target state object should be reset, not stay unchanged.
    this.resetSearchFilters();

    if(targetState) {
      // Fill all beans.
      for (var stateId/*:String*/ in this.allStateBeans$DDyr) {
        var targetBeanState/*:Object*/ = targetState[stateId];
        var searchFilter/*:SearchFilter*/ = this.searchFilters$DDyr[stateId];
        if (searchFilter) {
          targetBeanState = searchFilter.transformState(Ext.apply({}, targetBeanState));
        }
        (AS3.as(this.allStateBeans$DDyr[stateId],  com.coremedia.ui.data.Bean)).updateProperties(targetBeanState);
      }
    }

    // A new search might not be forced by merely setting parameters.
    // Especially, an update of the text field is not propagated, because
    // search-as-you-type turned out to be undesirable. Force the search now.
    this.triggerSearch();
  }/*

  public*/ function addSearchFilters(/*...searchFilters*/)/*:void*/ {var searchFilters=Array.prototype.slice.call(arguments);
    var flattenedFilters/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(searchFilters);
    for (var i/*:int*/ = 0; i < flattenedFilters.length; i++) {
      var searchFilter/*:SearchFilter*/ = flattenedFilters[i];

      var filterId/*:String*/ = searchFilter.getFilterId();
      this.searchFilters$DDyr[filterId] = searchFilter;

      var filterStateBean/*:Bean*/ = searchFilter.getStateBean();
      // Filters can only be changed in the search view. Therefore, a changed
      // filter can never trigger a view change. The state may be updated, though.
      filterStateBean.addValueChangeListener(AS3.bind(this,"fireUpdateEventEventually$DDyr"));
      this.allStateBeans$DDyr[filterId] = filterStateBean;
    }

    this.updateSearchFilters$DDyr();
  }/*

  public*/ function getSearchState()/*:SearchState*/ {
    var result/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();

    result.searchText;
    result.contentType;
    result.folder;
    result.inProduction;
    result.editedByMe;
    result.editedByOthers;
    result.notEdited;
    result.approved;
    result.published;
    result.deleted;
    result.lastEditedBy;
    result.filters;
    result.orderBy;

    return result;
  }/*

  public*/ function setSearchState(reset/*:Boolean*/, view/*:String*/, searchState/*:SearchState*/, model/*:Object = undefined*/)/*:void*/ {
    if (reset) {
      // Reset most filters.
      this.resetSearchFilters();
    }

    if(!model) {
      model = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
    }

    // Update the properties of the main state bean..
    var mainStateBean/*:Bean*/ = this.getMainStateBean();
    var state/*:Object*/ = {};
    state[CollectionViewModel.MODE_PROPERTY] = CollectionViewModel.SEARCH_MODE;
    if (reset) {
      // Reset some special properties that are not reset by collectionViewModel.resetSearchFilters().
      state[CollectionViewModel.FOLDER_PROPERTY] = model;
      state[CollectionViewModel.ORDER_BY_PROPERTY] = CollectionViewModel.ORDER_BY_FRESHNESS_DESC;
      state[CollectionViewModel.ORDER_BY_PROPERTY_REPOSITORY_LIST] = CollectionViewModel.ORDER_BY_NAME_ASC;
      // The view property is affected by the reset flag. It is not defined here.
    }
    if (view) {
      state[CollectionViewModel.VIEW_PROPERTY] = view;
    }
    Ext.apply(state, com.coremedia.ui.util.ObjectUtils.extractNonNullProperties(searchState,
            CollectionViewModel.SEARCH_MODE_PROPERTY_NAMES));
    mainStateBean.updateProperties(state);

    // Update the status filter group.
    var statusFilterState/*:Object*/ = com.coremedia.ui.util.ObjectUtils.extractNonNullProperties(searchState,
            com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.PROPERTY_NAMES);
    var searchStatusFilterBean/*:Bean*/ = this.getFilterStateBean(com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel.FILTER_ID);
    if (searchStatusFilterBean) {
      searchStatusFilterBean.updateProperties(statusFilterState);
    }

    // Update the last-edited filter group.
    var lastEditedFilterState/*:Object*/ = com.coremedia.ui.util.ObjectUtils.extractNonNullProperties(searchState,
            com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase.PROPERTY_NAMES);
    var lastEditedFilterBean/*:Bean*/ = this.getFilterStateBean(com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel.FILTER_ID);
    if (lastEditedFilterBean) {
      lastEditedFilterBean.updateProperties(lastEditedFilterState);

    }

    // Update custom filter, if necessary.
    if (searchState && searchState.filters) {
      for (var filterId/*:String*/ in searchState.filters) {
        var stateBean/*:Bean*/ = this.getFilterStateBean(filterId);
        stateBean.updateProperties(searchState.filters[filterId]);
      }
    }
  }/*

  /**
   * Trigger a new search using the current parameters.
   * /
  public*/ function triggerSearch()/*:void*/ {
    this.fireUpdateEventEventually$DDyr();
  }/*

  private*/ function stateBeanChanged(event/*:PropertyChangeEvent*/)/*:void*/ {var this$=this;
    // If view == tree and any search parameters have changed, ...
    if (event.property === CollectionViewModel.MODE_PROPERTY && event.newValue === CollectionViewModel.REPOSITORY_MODE) {
      if (!this.isInDefaultState$DDyr()) {
        // The view property was set to the tree view explicitly.
        // Force other properties into the default state.
        this.resetSearchFilters();
      }
    }

    // In most cases fire an update, but expect more changes of the search text.
    if (event.property === CollectionViewModel.SEARCH_TEXT_PROPERTY) {
      return;
    }

    if (event.property === CollectionViewModel.FOLDER_PROPERTY && event.newValue) {
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(
              event.newValue,
              function (extension/*:CollectionViewExtension*/)/*:void*/ {
                var newAvailableSearchTypes/*:Array*/ = extension ? extension.getAvailableSearchTypes(event.newValue) : [];
                var currentSearchType/*:String*/ = event.bean.get(CollectionViewModel.CONTENT_TYPE_PROPERTY);
                // re-validate search type value against new set of available search types:
                if (!newAvailableSearchTypes.some(function (entry/*:Object*/)/*:Boolean*/ {
                          return entry.name === currentSearchType;
                        })) {
                  // no longer available, fall back to default value (ContentTypeNames.DOCUMENT for historical reasons):
                  event.bean.set(CollectionViewModel.CONTENT_TYPE_PROPERTY, com.coremedia.cap.content.ContentTypeNames.CONTENT);
                }

                var searchFilters/*:Array*/ = extension ? extension.getEnabledSearchFilterIds() : [];
                this$.setEnabledFilters(searchFilters);

                this$.fireUpdateEventEventually$DDyr();
              });
    } else {
      this.fireUpdateEventEventually$DDyr();
    }
  }/*

  private*/ function updateSearchFilters()/*:void*/ {var this$=this;
    var folder/*:**/ = this.mainStateBean$DDyr.get(CollectionViewModel.FOLDER_PROPERTY);
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(folder,
            function (extension/*:CollectionViewExtension*/)/*:void*/ {
              var enabledSearchFilters/*:Array*/ = extension ? extension.getEnabledSearchFilterIds() : [];
              this$.setEnabledFilters(enabledSearchFilters);
              this$.fireUpdateEventEventually$DDyr();
            });
  }/*

  private*/ function fireUpdateEventEventually()/*:void*/ {
    if (!this.dirty$DDyr) {
      this.dirty$DDyr = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"fireUpdateEvent$DDyr"));
    }
  }/*

  private*/ function fireUpdateEvent()/*:void*/ {
    // If the collection view is in an inconsistent state, ...
    if (!this.isInDefaultState$DDyr() && (this.mainStateBean$DDyr.get(CollectionViewModel.MODE_PROPERTY) === CollectionViewModel.REPOSITORY_MODE)) {
      // ... a filter property must have been set explicitly, because an explicit change
      // of the view property would have caused the default state to be assumed.
      this.mainStateBean$DDyr.set(CollectionViewModel.MODE_PROPERTY, CollectionViewModel.SEARCH_MODE);
    }

    // Now, all changes have been made.
    this.dirty$DDyr = false;
    this.fireEvent(CollectionViewModel.UPDATE_EVENT, this);
  }/*

  public*/ function resetSearchFilters()/*:void*/ {
    this.mainStateBean$DDyr.updateProperties(FILTER_DEFAULT_STATE$static);
    for (var filterId/*:String*/ in this.searchFilters$DDyr) {
      var searchFilter/*:SearchFilter*/ =AS3.as( this.searchFilters$DDyr[filterId],  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
      searchFilter.getStateBean().updateProperties(searchFilter.getDefaultState());
    }
  }/*

  public*/ function setEnabledFilters(filterIds/*:Array*/)/*:void*/ {
    for (var filterId/*:String*/ in this.searchFilters$DDyr) {
      var searchFilter/*:SearchFilter*/ =AS3.as( this.searchFilters$DDyr[filterId],  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
      var searchFilterComponent/*:Component*/ =AS3.as( searchFilter,  Ext.Component);

      var visible/*:Boolean*/ = true;
      if (!filterIds || filterIds.indexOf(filterId) === -1) {
        searchFilter.getStateBean().updateProperties(searchFilter.getDefaultState());
        visible = false;
      }

      if (searchFilterComponent) {
        var conditionalFilterPanel/*:ConditionalFilterPanel*/ =AS3.as( searchFilterComponent,  com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanel);
        if (visible && conditionalFilterPanel) {
          visible = conditionalFilterPanel.isApplicable();
        }

        searchFilterComponent.setVisible(visible);
      }
    }
  }/*

  /**
   * Return true, if the collection view is in its default state disregarding the view and mode.
   *
   * @return true, if the collection view is in its default state disregarding the view and mode
   * /
  private*/ function isInDefaultState()/*:Boolean*/ {
    var bean/*:Bean*/ = this.mainStateBean$DDyr;
    if (!allBeanPropertiesEqual$static(bean, FILTER_DEFAULT_STATE$static)) {
      return false;
    }
    return this.areFiltersInDefaultState();
  }/*

  /**
   * Return true, if the filters of the collection view are in their default states.
   *
   * @return true, if the filters of the collection view are in their default states
   * /
  public*/ function areFiltersInDefaultState()/*:Boolean*/ {
    for (var filterId/*:String*/ in this.searchFilters$DDyr) {
      var searchFilter/*:SearchFilter*/ =AS3.as( this.searchFilters$DDyr[filterId],  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
      if (!allBeanPropertiesEqual$static(searchFilter.getStateBean(), searchFilter.getDefaultState())) {
        return false;
      }
    }
    return true;
  }/*

  private static*/ function allBeanPropertiesEqual$static(bean/*:Bean*/, properties/*:Object*/)/*:Boolean*/ {
    for (var property/*:String*/ in properties) {
      if (!com.coremedia.ui.util.ObjectUtils.equal(properties[property], bean.get(property))) {
        return false;
      }
    }
    return true;
  }/*

  /**
   * Get all search parameters depending on the state of the following filters: filterQuery, query, contentType.
   * @return Object an object consisting of a filterQuery, query and contentType for building a search string
   * /
  public*/ function getSearchSuggestionsParameters(callback/*:Function = null*/)/*:SearchSuggestionsParameters*/ {if(arguments.length<=0)callback=null;
    return this.getSearchOrSearchSuggestionsParameters$DDyr(callback);
  }/*

  /**
   * Get all search parameters depending on the state of the following filters: filterQuery, query, contentType.
   * @return Object an object consisting of a filterQuery, query and contentType for building a search string
   * /
  public*/ function getSearchParameters(callback/*:Function = null*/)/*:SearchParameters*/ {if(arguments.length<=0)callback=null;
    if (callback) {
      this.getSearchOrSearchSuggestionsParameters$DDyr(
              function (searchParameters/*:SearchParameters*/)/*:void*/ {
                if (!searchParameters) {
                  callback(null);
                } else {
                  searchParameters.limit = -1;
                  callback(searchParameters);
                }
              });
      return null;
    } else {
      var searchParameters/*:SearchParameters*/ = this.getSearchOrSearchSuggestionsParameters$DDyr();
      if (!searchParameters) {
        return searchParameters;
      }
      searchParameters.limit = -1;
      return searchParameters;
    }
  }/*

  public*/ function getHistory()/*:History*/ {
    if (!this.history$DDyr) {
      this.history$DDyr = new com.coremedia.cms.editor.sdk.collectionview.search.History(this);
    }
    return this.history$DDyr;
  }/*

  private*/ function getSearchOrSearchSuggestionsParameters(callback/*:Function = null*/)/*:SearchParameters*/ {var this$=this;if(arguments.length<=0)callback=null;
    var selection/*:Object*/ = this.getMainStateBean().get(CollectionViewModel.FOLDER_PROPERTY);
    if (callback) {
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
              function (extension/*:CollectionViewExtension*/)/*:void*/ {
                callback(extension && extension.getSearchOrSearchSuggestionsParameters(this$.searchFilters$DDyr, this$.getMainStateBean()));
              });
      return null;
    } else {
      var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(selection);
      return extension && extension.getSearchOrSearchSuggestionsParameters(this.searchFilters$DDyr, this.getMainStateBean());
    }
  }/*

  /**
   * Convenience function for switching the view,
   * applying default parameters when switching to the tree view.
   *
   * @param view the view
   * /
  public*/ function setMode(view/*:String*/)/*:void*/ {
    this.mainStateBean$DDyr.set(CollectionViewModel.MODE_PROPERTY, view);
  }/*

  /**
   * Give a component, lookup the transitive parent component that implements
   * ICollectionView and return the model of the collection view.
   *
   * @param child a component that is part of the collection view
   * @return the collection view model
   *
   * @see ICollectionView
   * /
  public static*/ function lookupCollectionViewModel$static(child/*:Component*/)/*:CollectionViewModel*/ {
    var current/*:Component*/ = child;
    while (current) {
      if (AS3.is(current,  com.coremedia.cms.editor.sdk.collectionview.ICollectionView)) {
        return (AS3.as(current,  com.coremedia.cms.editor.sdk.collectionview.ICollectionView)).getCollectionViewModel();
      }
      current = current.up();
    }
    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": [
        "Event",
        [
          "name",
          "update"
        ]
      ]},
      dirty$DDyr: false,
      history$DDyr: null,
      mainStateBean$DDyr: null,
      allStateBeans$DDyr: null,
      constructor: CollectionViewModel$,
      super$DDyr: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      getMainStateBean: getMainStateBean,
      getFilterStateBean: getFilterStateBean,
      getAllStateBeans: getAllStateBeans,
      getCurrentState: getCurrentState,
      updateState: updateState,
      addSearchFilters: addSearchFilters,
      getSearchState: getSearchState,
      setSearchState: setSearchState,
      triggerSearch: triggerSearch,
      stateBeanChanged$DDyr: stateBeanChanged,
      updateSearchFilters$DDyr: updateSearchFilters,
      fireUpdateEventEventually$DDyr: fireUpdateEventEventually,
      fireUpdateEvent$DDyr: fireUpdateEvent,
      resetSearchFilters: resetSearchFilters,
      setEnabledFilters: setEnabledFilters,
      isInDefaultState$DDyr: isInDefaultState,
      areFiltersInDefaultState: areFiltersInDefaultState,
      getSearchSuggestionsParameters: getSearchSuggestionsParameters,
      getSearchParameters: getSearchParameters,
      getHistory: getHistory,
      getSearchOrSearchSuggestionsParameters$DDyr: getSearchOrSearchSuggestionsParameters,
      setMode: setMode,
      statics: {
        UPDATE_EVENT: "update",
        MODE_PROPERTY: "mode",
        REPOSITORY_MODE: "repository",
        SEARCH_MODE: "search",
        VIEW_PROPERTY: "view",
        SEARCH_TEXT_PROPERTY: "searchText",
        CONTENT_TYPE_PROPERTY: "contentType",
        FOLDER_PROPERTY: "folder",
        ORDER_BY_PROPERTY: "orderBy",
        ORDER_BY_FRESHNESS_DESC: "freshness desc",
        ORDER_BY_NAME_ASC: "name asc",
        ORDER_BY_PROPERTY_REPOSITORY_LIST: "orderByRepo",
        LIMIT_PROPERTY: "limit",
        SEARCH_MODE_PROPERTY_NAMES: undefined,
        FILTER_DEFAULT_STATE: undefined,
        lookupCollectionViewModel: lookupCollectionViewModel$static,
        __initStatics__: function() {
          SEARCH_MODE_PROPERTY_NAMES$static_();
          FILTER_DEFAULT_STATE$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.util.Observable",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.ICollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.History",
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
