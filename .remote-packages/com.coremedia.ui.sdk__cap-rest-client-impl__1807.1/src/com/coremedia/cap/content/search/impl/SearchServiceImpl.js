Ext.define("com.coremedia.cap.content.search.impl.SearchServiceImpl", function(SearchServiceImpl) {/*package com.coremedia.cap.content.search.impl {
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.cap.content.search.SuggestionResult;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;

[RemoteClass(alias="com.coremedia.rest.cap.content.represent.SuggestionRepresentation")]
public class SearchServiceImpl implements SearchService {
  private var contentRepository: ContentRepositoryImpl;

  public*/ function SearchServiceImpl$(contentRepository/*:ContentRepositoryImpl*/) {
    this.contentRepository$T1T_ = contentRepository;
  }/*

  private*/ function getSearchRemoteUri(searchParameters/*:SearchParameters*/)/*:String*/ {
    return this.contentRepository$T1T_.get('searchUri') + queryString$static(searchParameters);
  }/*

  public*/ function search(searchParameters/*:SearchParameters*/)/*:SearchResult*/ {
    return AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.createRemoteBean(this.getSearchRemoteUri$T1T_(searchParameters)),  com.coremedia.cap.content.search.SearchResult);
  }/*

  public*/ function getSearchUri(searchParameters/*:SearchParameters = null*/)/*:String*/ {if(arguments.length<=0)searchParameters=null;
    return com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.getSearchRemoteUri$T1T_(searchParameters));
  }/*

  private*/ function getSearchSuggestionsRemoteUri(searchSuggestionsParameters/*:SearchSuggestionsParameters*/)/*:String*/ {
    return this.contentRepository$T1T_.get('searchSuggestionsUri') + queryString$static(searchSuggestionsParameters);
  }/*

  public*/ function searchSuggestions(searchParameters/*:SearchSuggestionsParameters*/)/*:SuggestionResult*/ {
    return AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.createRemoteBean(this.getSearchSuggestionsRemoteUri$T1T_(searchParameters)),  com.coremedia.cap.content.search.SuggestionResult);
  }/*

  public*/ function getSearchSuggestionsUri(searchSuggestionsParameters/*:SearchSuggestionsParameters = null*/)/*:String*/ {if(arguments.length<=0)searchSuggestionsParameters=null;
    return com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.getSearchSuggestionsRemoteUri$T1T_(searchSuggestionsParameters));
  }/*

  private static*/ function queryString$static(parameters/*:Object*/)/*:String*/ {
    // only copy non-empty, public properties:
    var parameterObject/*:Object*/ = com.coremedia.ui.util.ObjectUtils.removeUndefinedOrNullProperties(com.coremedia.ui.util.ObjectUtils.getPublicProperties(parameters));
    delete parameterObject['xclass']; // remove xclass field added by Ext class system
    return com.coremedia.ui.util.ObjectUtils.isEmpty(parameterObject) ? "" : "?" + Ext.urlEncode(parameterObject);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.search.SearchService"],
      metadata: {"": [
        "RemoteClass",
        [
          "alias",
          "com.coremedia.rest.cap.content.represent.SuggestionRepresentation"
        ]
      ]},
      contentRepository$T1T_: null,
      constructor: SearchServiceImpl$,
      getSearchRemoteUri$T1T_: getSearchRemoteUri,
      search: search,
      getSearchUri: getSearchUri,
      getSearchSuggestionsRemoteUri$T1T_: getSearchSuggestionsRemoteUri,
      searchSuggestions: searchSuggestions,
      getSearchSuggestionsUri: getSearchSuggestionsUri,
      requires: [
        "Ext",
        "com.coremedia.cap.content.search.SearchResult",
        "com.coremedia.cap.content.search.SearchService",
        "com.coremedia.cap.content.search.SuggestionResult",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
