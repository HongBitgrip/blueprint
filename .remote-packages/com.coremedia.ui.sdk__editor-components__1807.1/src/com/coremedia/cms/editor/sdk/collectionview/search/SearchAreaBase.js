Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase", function(SearchAreaBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.container.Container;
import ext.data.Store;

public class SearchAreaBase extends Container {
  protected static const BREADCRUMB_ITEM_ID:String = 'breadcrumb';
  protected static const SEARCH_FIELD_ITEM_ID:String = "searchField";
  protected static const SEARCH_BUTTON_ITEM_ID:String = "startSearch";
  protected static const SWITCH_TO_SEARCH_BUTTON_ITEM_ID:String = "switchToSearch";
  protected static const TYPE_BOX_COMBO_ITEM_ID:String = "typeBox";

  private var contentTypeValueExpression:ValueExpression;
  private var searchField:SearchField;

  [Bindable]
  public var collectionViewModel:CollectionViewModel;

  /**
   * @param config the config object
   * /
  public*/ function SearchAreaBase$(config/*:SearchAreaBase = null*/) {if(arguments.length<=0)config=null;
    this.super$riJx(config);
    this.getSelectedFolderExpression$riJx().addChangeListener(AS3.bind(this,"folderSelectionChanged$riJx"));
    this.searchField$riJx =AS3.as( this.queryById(SearchAreaBase.SEARCH_FIELD_ITEM_ID),  com.coremedia.cms.editor.sdk.collectionview.search.SearchField);
  }/*

  protected*/ function search()/*:void*/ {
    this.searchField$riJx.search();
  }/*

  public*/ function getSearchField()/*:SearchField*/ {
    return this.searchField$riJx;
  }/*

  protected*/ function back()/*:void*/ {
    AS3.getBindable(this,"collectionViewModel").getHistory().back();
  }/*

  protected*/ function forward()/*:void*/ {
    AS3.getBindable(this,"collectionViewModel").getHistory().forward();
  }/*

  private*/ function folderSelectionChanged(ve/*:ValueExpression*/)/*:void*/ {var this$=this;
    var selection/*:Object*/ = ve.getValue();

    // update search combo
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
            function (extension/*:CollectionViewExtension*/)/*:void*/ {
              var availableSearchTypes/*:Array*/ = extension ? extension.getAvailableSearchTypes(selection) : [];
              var typeCombo/*:ContentTypeSelector*/ = this$.getContentTypeSelector();
              var value/*:**/ = typeCombo.getValue();
              // switch to new store (could be optimized to happen only on actually different available search types):
              AS3.cast(Ext.data.Store,typeCombo.getStore()).loadData(availableSearchTypes);

              // If the value is null, then the contentType value inside the MainStateBean has already been set,
              // but the combobox store was not updated at that point, so the value was previously null.
              // We can use the contentTypeValueExpression value now that already contains the correct value.
              if(value === null) {
                typeCombo.setValue(AS3.getBindable(typeCombo,"contentTypeValueExpression").getValue());
              }
              else {
                // same value might have different label, so force-update combo box value:
                typeCombo.setValue(value);
              }

              //update search disable state
              var searchable/*:Boolean*/ = extension && extension.isSearchable();
              this$.disableChild$riJx(SearchAreaBase.SWITCH_TO_SEARCH_BUTTON_ITEM_ID, !searchable);
              this$.disableChild$riJx(SearchAreaBase.SEARCH_BUTTON_ITEM_ID, !searchable);
              this$.disableChild$riJx(SearchAreaBase.SEARCH_FIELD_ITEM_ID, !searchable);
              typeCombo.setDisabled(!searchable);
            });
  }/*

  private*/ function disableChild(itemId/*:String*/, disable/*:Boolean*/)/*:void*/ {
    var component/*:Component*/ = this.queryById(itemId);
    if(component) {
      component.setDisabled(disable);
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.folderSelectionChanged$riJx(this.getSelectedFolderExpression$riJx());
  }/*

  public*/ function getContentTypeSelector()/*:ContentTypeSelector*/ {
    return AS3.as( this.queryById(SearchAreaBase.TYPE_BOX_COMBO_ITEM_ID),  com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector);
  }/*

  private*/ function getSelectedFolderExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
  }/*

  protected*/ function getContentTypeValueExpression(collectionViewModel/*:CollectionViewModel*/)/*:ValueExpression*/ {
    if(!this.contentTypeValueExpression$riJx) {
      this.contentTypeValueExpression$riJx = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.CONTENT_TYPE_PROPERTY, collectionViewModel.getMainStateBean());
    }
    return this.contentTypeValueExpression$riJx;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      contentTypeValueExpression$riJx: null,
      searchField$riJx: null,
      constructor: SearchAreaBase$,
      super$riJx: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      search: search,
      getSearchField: getSearchField,
      back: back,
      forward: forward,
      folderSelectionChanged$riJx: folderSelectionChanged,
      disableChild$riJx: disableChild,
      afterRender: afterRender,
      getContentTypeSelector: getContentTypeSelector,
      getSelectedFolderExpression$riJx: getSelectedFolderExpression,
      getContentTypeValueExpression: getContentTypeValueExpression,
      config: {collectionViewModel: null},
      statics: {
        BREADCRUMB_ITEM_ID: 'breadcrumb',
        SEARCH_FIELD_ITEM_ID: "searchField",
        SEARCH_BUTTON_ITEM_ID: "startSearch",
        SWITCH_TO_SEARCH_BUTTON_ITEM_ID: "switchToSearch",
        TYPE_BOX_COMBO_ITEM_ID: "typeBox"
      },
      requires: [
        "Ext.container.Container",
        "Ext.data.Store",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchField",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
