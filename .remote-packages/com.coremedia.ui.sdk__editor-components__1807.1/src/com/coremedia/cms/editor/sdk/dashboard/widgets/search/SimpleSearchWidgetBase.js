Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetBase", function(SimpleSearchWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel;
import com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase;
import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.cms.editor.sdk.editorContext;

public class SimpleSearchWidgetBase extends AbstractSearchWidget implements Reloadable {
  public*/ function SimpleSearchWidgetBase$(config/*:SimpleSearchWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$X09Y(config);
  }/*

  /**
   * The search text that is used for the collection view.
   * Default "".
   * /
  [Bindable]
  public var searchText:String;

  /**
   * The content type that is used in the content type filter.
   * Default "Document_".
   * /
  [Bindable]
  public var contentType:String;

  /**
   * Whether to restrict the search to the preferred site.
   * Default true.
   * /
  [Bindable]
  public var preferredSite:*;

  private*/ function getSearchState()/*:SearchState*/ {
    var searchState/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    searchState.searchText = AS3.getBindable(this,"searchText");
    searchState.contentType = AS3.getBindable(this,"contentType");
    var isSearchInPreferredSite/*:Boolean*/ = evaluateSearchInPreferredSite$static(AS3.getBindable(this,"preferredSite"));
    var siteFilterState/*:Object*/ = {};
    siteFilterState[com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.SITE_PROPERTY] =
            isSearchInPreferredSite ? com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.PREFERRED_SITE_VALUE : com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.NO_FILTER_VALUE;
    searchState.setFilter(com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel.FILTER_ID, siteFilterState);

    return searchState;
  }/*

  private static*/ function evaluateSearchInPreferredSite$static(isInPreferredSite/*:**/)/*:Boolean*/ {
    if (isInPreferredSite === null) {
      return false;
    }

    if (isInPreferredSite === undefined) {
      return true;
    }

    if (typeof isInPreferredSite === 'boolean') {
      return Boolean(isInPreferredSite);
    }

    return false;
  }/*

  protected override*/ function updateModel()/*:void*/ {
    this.getModel().setSearchState(true, null, this.getSearchState$X09Y());
  }/*

  public override*/ function showLibrary()/*:void*/ {
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(this.getSearchState$X09Y(), true, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget",
      mixins: ["com.coremedia.cms.editor.sdk.dashboard.Reloadable"],
      constructor: SimpleSearchWidgetBase$,
      super$X09Y: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget.prototype.constructor.apply(this, arguments);
      },
      getSearchState$X09Y: getSearchState,
      updateModel: updateModel,
      showLibrary: showLibrary,
      config: {
        searchText: null,
        contentType: null,
        preferredSite: undefined
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
