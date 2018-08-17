Ext.define("com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester", function(SearchContentLinkSuggester) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.IdUtil;

import ext.ArrayUtil;

/**
 * A default link suggester which uses the search service to suggest content for some link list.
 *
 * <p>It returns links of a configured content type that are not yet contained in the link list.
 * If a context content is set via contentValueExpression, links from the same site are suggested first. Apart from
 * that recently edited content items are returned first. The context content is not returned
 * as suggested link.</p>
 *
 * <p>If a search term with at least 3 characters is provided, a prefix search with that term is
 * used to restrict the returned suggestions.</p>
 * /
[PublicApi]
public class SearchContentLinkSuggester implements ILinkSuggester {

  internal static const DEFAULT_ORDER_BY:Array =*/function DEFAULT_ORDER_BY$static_(){SearchContentLinkSuggester.DEFAULT_ORDER_BY=( ["freshness desc"]);}/*;
  private static const*/var PREFIX_SEARCH_MIN_CHARS$static/*:int*/ = 3;/*

  /**
   * Optional ValueExpression that evaluates to a context content, typically the content the link list is defined in.
   * If set, the content is excluded from possible suggestions and links from the same site as this content are
   * returned first.
   * /
  [Bindable]
  public var contentValueExpression:ValueExpression ;

  /**
   * If set, restricts suggestions to the given content type.
   * /
  [Bindable]
  public var linkTypeName:String;

  /*
   * The maximum number of Search Results when NO specific search term is given
   * /
  [Bindable]
  public var numberOfSuggestions:Number;

  /*
   * The maximum number of Search Results when a specific search term is given
   * /
  [Bindable]
  public var maxNumberOfSearchResults:Number;

  // The searchResultSize depends on the numberOfSuggestions and maxNumberOfSearchResults
  private var searchResultSize:Number;

  public*/ function SearchContentLinkSuggester$(config/*:SearchContentLinkSuggester = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(this,"linkTypeName" , AS3.getBindable(config,"linkTypeName"));
    AS3.setBindable(this,"numberOfSuggestions" , AS3.getBindable(config,"numberOfSuggestions") || 5);
    AS3.setBindable(this,"maxNumberOfSearchResults" , AS3.getBindable(config,"maxNumberOfSearchResults") || 20);
  }/*

  public*/ function suggestLinks(linkListWrapper/*:ILinkListWrapper*/, searchTerm/*:String*/, callback/*:Function*/)/*:void*/ {var this$=this;
    linkListWrapper.getVE().loadValue(function (links/*:Array*/)/*:void*/ {
      if (AS3.getBindable(this$,"contentValueExpression")) {
        AS3.getBindable(this$,"contentValueExpression").loadValue(function (content/*:Content*/)/*:void*/ {
          this$.suggestLinksInternal(links, content, searchTerm, callback);
        });
      } else {
        this$.suggestLinksInternal(links, null, searchTerm, callback);
      }
    });
  }/*

  /**
   * Suggests links..
   *
   * @param links      already linked contents that should not be suggested again
   * @param content    context content, which should not be suggested again and is used to suggest contents of the same
   *                   site first. Possibly null.
   * @param searchTerm a user-provided search term to narrow down suggested links
   * @param callback   the callback function that is triggered with an Array of suggested links
   * /
  internal*/ function suggestLinksInternal(links/*:Array*/, content/*:Content*/, searchTerm/*:String*/, callback/*:Function*/)/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory
            .createFromFunction(AS3.bind(this,"createSearchParameters"), links, content, searchTerm)
            .loadValue(function(searchParameters/*:SearchParameters*/)/*:void*/ {
              var connection/*:CapConnection*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection();
              var searchService/*:SearchService*/ = connection.getContentRepository().getSearchService();
              var searchResult/*:SearchResult*/ = searchService.search(searchParameters);
              searchResult.load(function (result/*:SearchResult*/)/*:void*/ {
                var filtered/*:Array*/ = this$.handleResult(result, links, content);
                callback(filtered);
              });
            });
  }/*

  internal*/ function createSearchParameters(links/*:Array*/, content/*:Content*/, searchTerm/*:String*/)/*:SearchParameters*/ {
    var searchParameters/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});

    // exclude deleted content
    // for better caching in Solr, use the same filter query as in StatusFilterPanelBase.buildQuery
    searchParameters.filterQuery = [ "(" + com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.buildDefaultQuery() + ")" ];
    searchParameters.query = SearchContentLinkSuggester.buildQuery(searchTerm);

    this.searchResultSize$9gpu = searchParameters.query === "" ? AS3.getBindable(this,"numberOfSuggestions") : AS3.getBindable(this,"maxNumberOfSearchResults");

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    searchParameters.orderBy = SearchContentLinkSuggester.evaluateOrderBy(content, sitesService);
    if (searchParameters.orderBy === undefined) {
      return undefined;
    }

    searchParameters.limit = SearchContentLinkSuggester.evaluateLimit(links, this.searchResultSize$9gpu, content);

    if (AS3.getBindable(this,"linkTypeName")) {
      searchParameters.contentType = [ AS3.getBindable(this,"linkTypeName") ];
    }

    return searchParameters;
  }/*

  internal*/ function handleResult(result/*:SearchResult*/, excludeContents/*:Array*/, excludeContent/*:Content*/)/*:Array*/ {
    var hits/*:Array*/ = result.getHits();
    var excluded/*:Array*/ = excludeContents || [];
    if (excludeContent) {
      excluded = excluded.concat(excludeContent);
    }
    return Ext.Array.difference(hits, excluded).slice(0, this.searchResultSize$9gpu);
  }/*

  internal static*/ function evaluateOrderBy$static(contextContent/*:Content*/, sitesService/*:SitesService*/)/*:Array*/ {
    if (!contextContent) {
      return SearchContentLinkSuggester.DEFAULT_ORDER_BY;
    }

    var siteId/*:String*/ = sitesService.getSiteIdFor(contextContent);
    if (siteId === undefined) {
      return undefined;
    }
    var rootFolder/*:Content*/ = sitesService.getSiteRootFolder(siteId);
    if (rootFolder === undefined) {
      return undefined;
    }
    if (!rootFolder) {
      return SearchContentLinkSuggester.DEFAULT_ORDER_BY;
    }

    var folderId/*:int*/ = com.coremedia.ui.util.IdUtil.parseContentId(rootFolder.getId());
    return ["termfreq(folderpath," + folderId + ") desc"].concat(SearchContentLinkSuggester.DEFAULT_ORDER_BY);
  }/*

  internal static*/ function evaluateLimit$static(links/*:Array*/, wantedSuggestions/*:Number*/, excludeContent/*:Boolean*/)/*:Number*/ {
    // raise the limit to be able to filter out unwanted links
    var currentLengthOfList/*:Number*/ = links.length;
    var limit/*:Number*/ = wantedSuggestions + currentLengthOfList;
    return excludeContent ? limit + 1 : limit;
  }/*

  internal static*/ function buildQuery$static(searchTerm/*:String*/)/*:String*/ {
    // do if prefix search unless the term ends with whitespace
    var doPrefixSearch/*:Boolean*/ = searchTerm.charAt(searchTerm.length - 1) !== " ";

    if (!doPrefixSearch) {
      return searchTerm;
    }

    if (searchTerm.length < PREFIX_SEARCH_MIN_CHARS$static) {
      // prefix search starts after some characters, short prefixes are expensive to check for the search engine
      return "";
    }

    return searchTerm + '*';
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.util.ILinkSuggester"],
      metadata: {"": ["PublicApi"]},
      searchResultSize$9gpu: NaN,
      constructor: SearchContentLinkSuggester$,
      suggestLinks: suggestLinks,
      suggestLinksInternal: suggestLinksInternal,
      createSearchParameters: createSearchParameters,
      handleResult: handleResult,
      config: {
        contentValueExpression: null,
        linkTypeName: null,
        numberOfSuggestions: NaN,
        maxNumberOfSearchResults: NaN
      },
      statics: {
        DEFAULT_ORDER_BY: undefined,
        evaluateOrderBy: evaluateOrderBy$static,
        evaluateLimit: evaluateLimit$static,
        buildQuery: buildQuery$static,
        __initStatics__: function() {
          DEFAULT_ORDER_BY$static_();
        }
      },
      requires: [
        "Ext.Array",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.sdk.util.ILinkSuggester",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.IdUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
