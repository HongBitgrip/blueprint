Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase", function(AbstractSearchWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.data.Store;
import ext.panel.Panel;
import ext.view.DataView;

public class AbstractSearchWidgetBase extends Panel implements Reloadable {
  private const ROW_HEIGHT:Number = 21;

  private var model:CollectionViewModel;
  private var contentValueExpression:ValueExpression;
  private var maxEntries:Number = 0;

  public*/ function AbstractSearchWidgetBase$(config/*:FixedSearchWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$RSWI(config);
    this.model$RSWI = new com.coremedia.cms.editor.sdk.dashboard.widgets.search.PseudoCollectionView().getCollectionViewModel();
    this.on("afterlayout",AS3.bind( this,"afterLayout$RSWI"));
  }/*

  private*/ function afterLayout()/*:void*/ {
    if (this.getHeight() > 0) {
      var oldMaxEntries/*:Number*/ = this.maxEntries$RSWI;
      this.maxEntries$RSWI = Math.floor(this.getHeight() / this.ROW_HEIGHT$RSWI);
      if (this.maxEntries$RSWI !== oldMaxEntries) {
        this.executeSearch();
      }
    }
  }/*

  public*/ function executeSearch()/*:void*/ {var this$=this;
    this.updateModel();

    this.model$RSWI.getSearchParameters(function (searchParameters/*:SearchParameters*/)/*:void*/ {
      if (searchParameters) {
        var searchResult/*:SearchResult*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getSearchService().search(searchParameters);
        searchResult.load(AS3.bind(this$,"searchExecuted$RSWI"));
      }
    });
  }/*

  protected*/ function getModel()/*:CollectionViewModel*/ {
    return this.model$RSWI;
  }/*

  protected*/ function updateModel()/*:void*/ {
    throw new AS3.Error("updateModel() must be overridden");
  }/*

  public*/ function showLibrary()/*:void*/ {
    throw new AS3.Error("showLibrary() must be overridden");
  }/*

  private*/ function searchExecuted(searchResult/*:SearchResult*/)/*:void*/ {var this$=this;
    var hits/*:Array*/ = searchResult.getHits() || [];
    // If there are too many entries, leave room for the more button.
    var visible/*:Number*/ = hits.length <= this.maxEntries$RSWI ? this.maxEntries$RSWI : this.maxEntries$RSWI - 1;
    var entriesToShow/*:Array*/ = hits.slice(0, visible);

    var allContentsLoadedExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      var result/*:Boolean*/ = true;
      for (var i/*:uint*/ = 0; i < entriesToShow.length; i++) {
        var content/*:Content*/ = AS3.cast(com.coremedia.cap.content.Content,entriesToShow[i]);
        if (!content.isLoaded()) {
          content.load();
          result = undefined;
        }
      }
      return result;
    });
    if (!allContentsLoadedExpression.isLoaded()) {
      var dataView/*:DataView*/ = AS3.cast(Ext.view.View,this.queryById(com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget.CONTENT_LIST_ITEM_ID));
      var store/*:Store*/ = AS3.cast(Ext.data.Store,dataView.getStore());
      store.fireEvent("beforeload", store, {});
    }
    allContentsLoadedExpression.loadValue(function()/*:void*/ {
      this$.getContentValueExpression().setValue(entriesToShow);
    });
  }/*

  protected*/ function getContentValueExpression()/*:ValueExpression*/ {
    if (!this.contentValueExpression$RSWI) {
      this.contentValueExpression$RSWI = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.contentValueExpression$RSWI;
  }/*

  public*/ function reload()/*:void*/ {
    this.executeSearch();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.cms.editor.sdk.dashboard.Reloadable"],
      ROW_HEIGHT$RSWI: 21,
      model$RSWI: null,
      contentValueExpression$RSWI: null,
      maxEntries$RSWI: 0,
      constructor: AbstractSearchWidgetBase$,
      super$RSWI: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterLayout$RSWI: afterLayout,
      executeSearch: executeSearch,
      getModel: getModel,
      updateModel: updateModel,
      showLibrary: showLibrary,
      searchExecuted$RSWI: searchExecuted,
      getContentValueExpression: getContentValueExpression,
      reload: reload,
      requires: [
        "AS3.Error",
        "Ext.data.Store",
        "Ext.panel.Panel",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.PseudoCollectionView"
      ]
    };
});
