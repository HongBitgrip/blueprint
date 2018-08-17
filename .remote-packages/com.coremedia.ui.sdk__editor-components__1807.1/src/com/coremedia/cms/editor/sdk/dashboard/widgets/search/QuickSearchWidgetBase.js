Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase", function(QuickSearchWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.container.Container;
import ext.data.AbstractStore;
import ext.view.DataView;

public class QuickSearchWidgetBase extends Container implements StateHolder, Reloadable {

  private const ROW_HEIGHT:Number = 23;

  private var model:CollectionViewModel;
  private var contentValueExpression:ValueExpression;
  private var showMoreValueExpression:ValueExpression;
  private var maxEntries:Number = 0;

  public*/ function QuickSearchWidgetBase$(config/*:QuickSearchWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$r0SN(config);

    this.getContentValueExpression().setValue([]);
    this.on("afterlayout",AS3.bind( this,"afterLayout$r0SN"));

    var search/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    search.searchText = AS3.getBindable(config,"searchText");
    search.contentType = AS3.getBindable(config,"contentType");
    this.getCollectionViewModel().setSearchState(true, null, search);

    this.getCollectionViewModel().addListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.UPDATE_EVENT,AS3.bind( this,"executeSearch"));
  }/*

  protected*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    if (!this.model$r0SN) {
      this.model$r0SN = new com.coremedia.cms.editor.sdk.dashboard.widgets.search.PseudoCollectionView().getCollectionViewModel();
    }
    return this.model$r0SN;
  }/*

  private*/ function afterLayout()/*:void*/ {
    var oldMaxEntries/*:Number*/ = this.maxEntries$r0SN;
    var searchBar/*:Component*/ = AS3.cast(Ext.Component,this.getComponent(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget.SEARCH_BAR_ITEM_ID));
    this.maxEntries$r0SN = Math.floor((this.getHeight() - searchBar.getHeight()) / this.ROW_HEIGHT$r0SN);
    if (this.maxEntries$r0SN !== oldMaxEntries) {
      this.getCollectionViewModel().triggerSearch();
    }
  }/*

  public*/ function executeSearch()/*:void*/ {var this$=this;
    if (this.maxEntries$r0SN > 0) {
      this.getCollectionViewModel().getSearchParameters(
              function (searchParameters/*:SearchParameters*/)/*:void*/ {
                var searchResult/*:SearchResult*/ = searchParameters ? com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getSearchService().search(searchParameters) : null;
                searchResult.load(AS3.bind(this$,"searchExecuted$r0SN"));
              });
    }
  }/*

  private*/ function searchExecuted(searchResult/*:SearchResult*/)/*:void*/ {var this$=this;
    var hits/*:Array*/ = searchResult.getHits() || [];
    // If there are too many entries, leave room for the more button.
    var visible/*:Number*/ = hits.length <= this.maxEntries$r0SN ? this.maxEntries$r0SN : this.maxEntries$r0SN - 1;
    var entriesToShow/*:Array*/ = hits.slice(0, visible);

    var allContentsLoadedExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      var result/*:Boolean*/ = true;
      for (var i/*:uint*/ = 0; i < entriesToShow.length; i++) {
        var content/*:Content*/ = AS3.cast(com.coremedia.cap.content.Content,entriesToShow[i]);
        if (content.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
          content.load();
          result = undefined;
        }
      }
      return result;
    });
    if (!allContentsLoadedExpression.isLoaded()) {
      this.getShowMoreValueExpression().setValue(false);
      var dataView/*:DataView*/ = AS3.cast(Ext.view.View,this.queryById(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget.CONTENT_LIST_ITEM_ID));
      var store/*:AbstractStore*/ = dataView.getStore();
      store.fireEvent("beforeload", store, {});
    }
    allContentsLoadedExpression.loadValue(function()/*:void*/ {
      if (com.coremedia.ui.util.ObjectUtils.equal(this$.getContentValueExpression().getValue(), entriesToShow)) {
        var contentList/*:WidgetContentList*/ =AS3.as( this$.queryById(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget.CONTENT_LIST_ITEM_ID),  com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList);
        contentList.refresh();
      }
      this$.getContentValueExpression().setValue(entriesToShow);
      this$.getShowMoreValueExpression().setValue(hits.length > this$.maxEntries$r0SN);
    });
  }/*

  public*/ function showLibrary()/*:void*/ {
    var searchSt/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    this.model$r0SN.getSearchParameters(function (searchParameters/*:SearchParameters*/)/*:void*/ {
      if (searchParameters) {
        searchSt.searchText = searchParameters.query;
        searchSt.contentType = searchParameters.contentType[0];
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(searchSt, true, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
      }
    });
  }/*

  public*/ function getStateValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeState$r0SN"));
  }/*

  private*/ function computeState()/*:Object*/ {
    var result/*:Object*/ = {};
    var mainStateBean/*:Bean*/ = this.getCollectionViewModel().getMainStateBean();
    result['searchText'] = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_TEXT_PROPERTY);
    result['contentType'] = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.CONTENT_TYPE_PROPERTY);
    return result;
  }/*

  protected*/ function getContentValueExpression()/*:ValueExpression*/ {
    if (!this.contentValueExpression$r0SN) {
      this.contentValueExpression$r0SN = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.contentValueExpression$r0SN;
  }/*

  protected*/ function getShowMoreValueExpression()/*:ValueExpression*/ {
    if (!this.showMoreValueExpression$r0SN) {
      this.showMoreValueExpression$r0SN = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.showMoreValueExpression$r0SN;
  }/*

  public*/ function reload()/*:void*/ {
    this.executeSearch();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: [
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable"
      ],
      ROW_HEIGHT$r0SN: 23,
      model$r0SN: null,
      contentValueExpression$r0SN: null,
      showMoreValueExpression$r0SN: null,
      maxEntries$r0SN: 0,
      constructor: QuickSearchWidgetBase$,
      super$r0SN: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getCollectionViewModel: getCollectionViewModel,
      afterLayout$r0SN: afterLayout,
      executeSearch: executeSearch,
      searchExecuted$r0SN: searchExecuted,
      showLibrary: showLibrary,
      getStateValueExpression: getStateValueExpression,
      computeState$r0SN: computeState,
      getContentValueExpression: getContentValueExpression,
      getShowMoreValueExpression: getShowMoreValueExpression,
      reload: reload,
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.PseudoCollectionView",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
