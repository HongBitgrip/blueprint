Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase", function(SearchFieldBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;
import ext.XTemplate;
import ext.data.proxy.AjaxProxy;
import ext.data.reader.JsonReader;
import ext.event.Event;
import ext.form.field.ComboBox;

public class SearchFieldBase extends ComboBox {

  private var collectionViewModel:CollectionViewModel;
  private var httpProxy:AjaxProxy;

  internal static var autoSuggestResultTpl:XTemplate =*/function autoSuggestResultTpl$static_(){SearchFieldBase.autoSuggestResultTpl=( new Ext.XTemplate(
          '<tpl for="."><div class="search-item" style="font-weight:bold;">',
          '{' + com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE + ':htmlEncode} ({' + com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_COUNT + ':htmlEncode})</span>',
          '</div></tpl>'
  ));}/*;

  /**
   * @param config the config object
   * /
  public*/ function SearchFieldBase$(config/*:SearchField = null*/) {if(arguments.length<=0)config=null;
    this.super$0uQE(config);
    this.collectionViewModel$0uQE = AS3.getBindable(config,"collectionViewModel");
    this.on("beforequery",AS3.bind( this,"addSearchFilters$0uQE"));
    this.on("beforequery",AS3.bind( this,"clearLastQuery$0uQE"));
    this.on("specialkey",AS3.bind( this,"handleSpecialKey$0uQE"));
    this.on("select",AS3.bind( this,"handleSelect$0uQE"));
    this.on("blur",AS3.bind( this,"handleBlur$0uQE"));
  }/*

  private*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    if (!this.collectionViewModel$0uQE) {
      this.collectionViewModel$0uQE = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.MODEL_VARIABLE_NAME).getValue();
    }
    return this.collectionViewModel$0uQE;
  }/*

  internal*/ function getSearchSuggestionsDataProxy()/*:AjaxProxy*/ {
    if (!this.httpProxy$0uQE) {
      var reader/*:JsonReader*/ = AS3.cast(Ext.data.reader.Json,{});
      AS3.setBindable(reader,"rootProperty" , com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTIONS);

      var searchService/*:SearchService*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository().getSearchService();
      this.httpProxy$0uQE = Ext.create(Ext.data.proxy.Ajax, {
        method: "GET",
        url: searchService.getSearchSuggestionsUri(),
        reader: reader
      });
    }

    return this.httpProxy$0uQE;
  }/*


  /**
   * returns false if the search filters are empty, adds search filters and returns true otherwise
   * /
  private*/ function addSearchFilters()/*:Boolean*/ {
    //add all the search filters to the suggestions combo-box just before the query is fired.
    // TODO: searchSuggestionsParameters may be undefined when the computation is not finished, but this method is synchronous...
    var searchSuggestionsParameters/*:SearchSuggestionsParameters*/ = this.getCollectionViewModel$0uQE().getSearchSuggestionsParameters();
    if (searchSuggestionsParameters) {
      var extraParams/*:Object*/ = this.getSearchSuggestionsDataProxy().getExtraParams();
      Ext.apply(extraParams, com.coremedia.ui.util.ObjectUtils.getPublicProperties(searchSuggestionsParameters));
      com.coremedia.ui.util.ObjectUtils.removeUndefinedOrNullProperties(extraParams);
      return true;
    }
    this.getSearchSuggestionsDataProxy().setExtraParams({});
    return false;
  }/*


  override public*/ function doQuery(query/*:String*/, forceAll/*:Boolean = false*/, rawQuery/*:Boolean = false*/)/*:void*/ {var this$=this;switch(Math.max(arguments.length,1)){case 1:forceAll=false;case 2:rawQuery=false;}
    var selectedFolderValueExpression/*:ValueExpression*/ = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
    var model/*:Object*/ = selectedFolderValueExpression.getValue();
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(model,
            function (extension/*:CollectionViewExtension*/)/*:void*/ {
              this$.getSearchSuggestionsDataProxy().setUrl(extension && extension.getSearchSuggestionsUrl());
              this$.getCollectionViewModel$0uQE().getSearchSuggestionsParameters(
                      function (searchParameters/*:SearchSuggestionsParameters*/)/*:void*/ {
                        //if the new query is a superset of the last query and the last query didn't get the maximal results
                        //then filter the results locally
                        if (this$.lastQuery && query.length > this$.lastQuery.length &&
                                query.toLowerCase().indexOf(this$.lastQuery.toLowerCase()) === 0 &&
                                query.indexOf(" ", this$.lastQuery.length - 1) === -1 &&
                                (!searchParameters || this$.getStore().getCount() < searchParameters.limit)) {
                          this['mode'] = 'local';
                        } else {
                          this['mode'] = 'remote';
                        }

                        this$.superDoQuery$0uQE(query, forceAll);
                      });
            });
  }/*

  override public*/ function getValue()/*:**/ {
    return Ext.form.field.ComboBox.prototype.getValue.call(this) || '';
  }/*

  private*/ function superDoQuery(query/*:String*/, forceAll/*:Boolean*/)/*:void*/ {
    Ext.form.field.ComboBox.prototype.doQuery.call(this,query, forceAll);
  }/*

  /**
   * set the previous query. this will reload the store the next time it expands
   * /
  private*/ function clearLastQuery()/*:void*/ {
    this.lastQuery = null;
  }/*

  private*/ function handleSpecialKey(_/*:**/, e/*:Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER) {
      e.stopPropagation();
      e.preventDefault();
      this.search();
    }
  }/*

  private*/ function handleSelect()/*:void*/ {
    this.search();
  }/*

  private*/ function handleBlur()/*:void*/ {
    // prevent to set search field value twice if switched to repository view
    if (this.collectionViewModel$0uQE.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY) === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE) {
      this.collectionViewModel$0uQE.getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_TEXT_PROPERTY, this.getValue());
      this.collapse();
    }
  }/*

  public*/ function search()/*:void*/ {
    var collectionViewModel/*:CollectionViewModel*/ = this.getCollectionViewModel$0uQE();
    collectionViewModel.getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_TEXT_PROPERTY, this.getValue());
    collectionViewModel.triggerSearch();
    this.collapse();
    this.selectText();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.ComboBox",
      collectionViewModel$0uQE: null,
      httpProxy$0uQE: null,
      constructor: SearchFieldBase$,
      super$0uQE: function() {
        Ext.form.field.ComboBox.prototype.constructor.apply(this, arguments);
      },
      getCollectionViewModel$0uQE: getCollectionViewModel,
      getSearchSuggestionsDataProxy: getSearchSuggestionsDataProxy,
      addSearchFilters$0uQE: addSearchFilters,
      doQuery: doQuery,
      getValue: getValue,
      superDoQuery$0uQE: superDoQuery,
      clearLastQuery$0uQE: clearLastQuery,
      handleSpecialKey$0uQE: handleSpecialKey,
      handleSelect$0uQE: handleSelect,
      handleBlur$0uQE: handleBlur,
      search: search,
      statics: {
        autoSuggestResultTpl: undefined,
        __initStatics__: function() {
          autoSuggestResultTpl$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.data.proxy.Ajax",
        "Ext.data.reader.Json",
        "Ext.event.Event",
        "Ext.form.field.ComboBox",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
