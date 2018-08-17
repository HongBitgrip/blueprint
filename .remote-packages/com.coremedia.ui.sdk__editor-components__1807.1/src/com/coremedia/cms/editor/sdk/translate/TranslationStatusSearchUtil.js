Ext.define("com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil", function(TranslationStatusSearchUtil) {/*package com.coremedia.cms.editor.sdk.translate {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.util.FormatUtil;

public class TranslationStatusSearchUtil {
  public static const PREFERRED_SITE_ID:String = 'com.coremedia.preferredSite';

  private static const*/var FOLDERPATH_FIELD$static/*:String*/ = 'folderpath';/*
  private static const*/var TRANSLATION_STATE_FIELD_PREFIX$static/*:String*/ = 'translationstate_';/*
  private static const*/var LATEST_VERSION_FIELD$static/*:String*/ = 'latestversion';/*
  private static const*/var IS_CHECKED_OUT_FIELD$static/*:String*/ = 'ischeckedout';/*
  private static const*/var STATUS_FIELD$static/*:String*/ = 'status';/*
  private static const*/var STATUS_DELETED$static/*:String*/ = '3';/*
  private static const*/var EMPTY_RESULT_QUERY$static/*:String*/ = 'INVALID:INVALID';/*

  public static*/ function search$static(searchParameters/*:TranslationStatusSearchParameters*/)/*:SearchResult*/ {
    var searchServiceParameters/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
    var query/*:String*/ = TranslationStatusSearchUtil.buildQuery(searchParameters);

    if (searchParameters.excludeDeleted) {
      query = com.coremedia.cms.editor.sdk.util.FormatUtil.format('({0}) AND -{1}:{2}', query, STATUS_FIELD$static, STATUS_DELETED$static);
    }

    searchServiceParameters.filterQuery ?
            searchServiceParameters.filterQuery.push(query) :
            searchServiceParameters.filterQuery = [query];

    var excludedContent/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getContentTypesExcludedFromSearchResult().concat(new Array("Folder_"));
    searchServiceParameters.filterQuery.push(com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil.buildExcludeContentTypesQuery(excludedContent));

    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getSearchService().search(searchServiceParameters);
  }/*

  public static*/ function buildQuery$static(searchParameters/*:TranslationStatusSearchParameters*/)/*:String*/ {
    if (!searchParameters.translationStates) {
      return EMPTY_RESULT_QUERY$static;
    }

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var derivedSiteId/*:String*/ = searchParameters.targetSiteId;
    if (!derivedSiteId) {
      return null;
    }
    if (derivedSiteId === TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      derivedSiteId = sitesService.getPreferredSiteId();
    }

    var derivedSite/*:Site*/ = sitesService.getSite(derivedSiteId);
    if (!derivedSite) {
      return EMPTY_RESULT_QUERY$static;
    }
    if (!derivedSite.isLanguageTranslationTargetSite()) {
      return EMPTY_RESULT_QUERY$static;
    }
    var masterSite/*:Site*/ = derivedSite.getMasterSite();
    if (!masterSite) {
      return EMPTY_RESULT_QUERY$static;
    }

    var translationStateQuery/*:String*/ = searchParameters.translationStates.
            map(createQueryForTranslationState).
            join(' OR ');

    if (!translationStateQuery) {
      return EMPTY_RESULT_QUERY$static;
    }

    var masterSiteRootFolder/*:Content*/ = masterSite.getSiteRootFolder();
    return com.coremedia.cms.editor.sdk.util.FormatUtil.format('{0}:<{1}> AND ({2})',
            FOLDERPATH_FIELD$static,
            masterSiteRootFolder.getUriPath(),
            translationStateQuery);

    function createQueryForTranslationState(translationState/*:String*/)/*:String*/ {
      var query/*:String*/;

      if (translationState === com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NEW_IN_MASTER) {
        query = com.coremedia.cms.editor.sdk.util.FormatUtil.format('(*:* NOT {0}{1}:* AND ((*:* NOT {2}:{3}) OR {4}:{5}))',
                TRANSLATION_STATE_FIELD_PREFIX$static, TranslationStatusSearchUtil.escapeForQuery(derivedSiteId),
                LATEST_VERSION_FIELD$static, '1',
                IS_CHECKED_OUT_FIELD$static, 'false');
      } else {
        query = com.coremedia.cms.editor.sdk.util.FormatUtil.format('({0}{1}:{2})',
                TRANSLATION_STATE_FIELD_PREFIX$static, TranslationStatusSearchUtil.escapeForQuery(derivedSiteId),
                translationState);
      }

      return query;
    }
  }/*

  public static*/ function getSite$static(siteId/*:String*/)/*:Site*/ {
    if (!siteId) {
      return null;
    }

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var actualSiteId/*:String*/ = siteId === TranslationStatusSearchUtil.PREFERRED_SITE_ID ?
            sitesService.getPreferredSiteId() :
            siteId;

    return sitesService.getSite(actualSiteId);
  }/*

  public static*/ function escapeForQuery$static(s/*:String*/)/*:String*/ {
    return TranslationStatusSearchUtil.escapeForSolrQuery(TranslationStatusSearchUtil.escapeForCoreMediaFilterQuery(s));
  }/*

  public static*/ function escapeForSolrQuery$static(s/*:String*/)/*:String*/ {
    var specials/*:Array*/ = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':', '\\'];
    var regexp/*:RegExp*/ = new RegExp("(\\" + specials.join("|\\") + ")", "g");
    return s.replace(regexp, "\\$1");
  }/*

  public static*/ function escapeForCoreMediaFilterQuery$static(s/*:String*/)/*:String*/ {
    return s.replace(/([<>])/g, "$1$1"); // see ContentRepositoryResource#search()
  }/*
}*/function TranslationStatusSearchUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationStatusSearchUtil$,
      statics: {
        PREFERRED_SITE_ID: 'com.coremedia.preferredSite',
        search: search$static,
        buildQuery: buildQuery$static,
        getSite: getSite$static,
        escapeForQuery: escapeForQuery$static,
        escapeForSolrQuery: escapeForSolrQuery$static,
        escapeForCoreMediaFilterQuery: escapeForCoreMediaFilterQuery$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.search.SearchParameters"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil",
        "com.coremedia.cms.editor.sdk.util.FormatUtil"
      ]
    };
});
