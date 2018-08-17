Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase", function(SearchFiltersBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.container.Container;
import ext.panel.Panel;

/**
 * The base class of the search filters panel. This class takes care of wiring the
 * embedded filters and the model component and it takes care of highlighting itself
 * when a filter is activated.
 * /
[PublicApi]
public class SearchFiltersBase extends Container {
  private var inDefaultStateExpression:ValueExpression;
  private var collectionViewModel:CollectionViewModel;

  /**
   * Create a search filters panel. Only the Studio framework may create a
   * search filters panel. Custom extensions may only configure the existing panel,
   * not create additional instances.
   *
   * @param config the config object
   * /
  public*/ function SearchFiltersBase$(config/*:SearchFilters = null*/) {if(arguments.length<=0)config=null;
    this.super$siHF(AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters,config));

    this.collectionViewModel$siHF = com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.lookupCollectionViewModel(this);
    if (!this.collectionViewModel$siHF) {
      throw new AS3.Error("SearchFiltersBase must only be used within CollectionView");
    }

    // Detect all search filter components and inject them into the state object.
    this.collectionViewModel$siHF.addSearchFilters(this.getSearchFilters$siHF());

    this.inDefaultStateExpression$siHF = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isInDefaultState$siHF"));
    this.inDefaultStateExpression$siHF.addChangeListener(AS3.bind(this,"updateStyleClasses$siHF"));
    this.updateStyleClasses$siHF();
  }/*

  private*/ function getSearchFilters()/*:Array*/ {
    return this.itemCollection.getRange().filter(function (item/*:Component*/)/*:Boolean*/ {
      return AS3.is( item,  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
    });
  }/*

  private*/ function updateStyleClasses()/*:void*/ {
    SearchFiltersBase.updateState(this.ownerCt, this.inDefaultStateExpression$siHF.getValue());
  }/*

  /**
   * @private
   * /
  public static*/ function updateState$static(owner/*:Container*/, defaultState/*:Boolean*/)/*:void*/ {
    var ownerPanel/*:Panel*/ =AS3.as( owner,  Ext.panel.Panel);
    if (ownerPanel) {
      var placeholder/*:Component*/ = ownerPanel['getPlaceholder']();
      if (placeholder) {
        if (defaultState) {
          placeholder.removeCls('search-filters-highlighted');
        } else {
          placeholder.addCls('search-filters-highlighted');
        }
      }
    }
  }/*

  private*/ function isInDefaultState()/*:Boolean*/ {
    return this.collectionViewModel$siHF.areFiltersInDefaultState();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      inDefaultStateExpression$siHF: null,
      collectionViewModel$siHF: null,
      constructor: SearchFiltersBase$,
      super$siHF: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getSearchFilters$siHF: getSearchFilters,
      updateStyleClasses$siHF: updateStyleClasses,
      isInDefaultState$siHF: isInDefaultState,
      statics: {updateState: updateState$static},
      requires: [
        "AS3.Error",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters"
      ]
    };
});
