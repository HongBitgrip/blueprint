Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.PseudoCollectionView", function(PseudoCollectionView) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.ICollectionView;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters;
import com.coremedia.ui.data.ValueExpression;

import ext.container.Container;

public class PseudoCollectionView extends Container implements ICollectionView {
  private var model:CollectionViewModel;

  public*/ function PseudoCollectionView$() {
    this.super$0DuK(AS3.cast(Ext.container.Container,{items:AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters,{})}));
  }/*

  public*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    if (!this.model$0DuK) {
      this.model$0DuK = new com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel();
    }
    return this.model$0DuK;
  }/*

  public*/ function getSearchResultHitsValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getSearchResultValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getUploadDisabledValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getSelectedRepositoryItemsValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getSelectedItemsValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getSelectedSearchItemsValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getSelectedFolderValueExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getNewContentActionDisabledExpression()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getCreatedContentValueExpression()/*:ValueExpression*/ {
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.ICollectionView"],
      model$0DuK: null,
      constructor: PseudoCollectionView$,
      super$0DuK: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getCollectionViewModel: getCollectionViewModel,
      getSearchResultHitsValueExpression: getSearchResultHitsValueExpression,
      getSearchResultValueExpression: getSearchResultValueExpression,
      getUploadDisabledValueExpression: getUploadDisabledValueExpression,
      getSelectedRepositoryItemsValueExpression: getSelectedRepositoryItemsValueExpression,
      getSelectedItemsValueExpression: getSelectedItemsValueExpression,
      getSelectedSearchItemsValueExpression: getSelectedSearchItemsValueExpression,
      getSelectedFolderValueExpression: getSelectedFolderValueExpression,
      getNewContentActionDisabledExpression: getNewContentActionDisabledExpression,
      getCreatedContentValueExpression: getCreatedContentValueExpression,
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.collectionview.ICollectionView"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters"
      ]
    };
});
