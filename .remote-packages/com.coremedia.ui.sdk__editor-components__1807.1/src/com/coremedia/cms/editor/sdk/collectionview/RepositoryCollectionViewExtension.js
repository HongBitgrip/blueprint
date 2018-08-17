Ext.define("com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension", function(RepositoryCollectionViewExtension) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.RepositoryContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.upload.UploadManager;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.ui.data.Bean;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RepositoryCollectionViewExtension implements CollectionViewExtension {
  private var repositoryListSorter:RepositoryListSorterImpl;
  private var repositoryContentTreeRelation:RepositoryContentTreeRelation =*/function repositoryContentTreeRelation_(){this.repositoryContentTreeRelation$N9JX=( new com.coremedia.cms.editor.sdk.RepositoryContentTreeRelation());}/*;

  public*/ function RepositoryCollectionViewExtension$() {repositoryContentTreeRelation_.call(this);
    this.repositoryListSorter$N9JX = new com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl();
  }/*

  public*/ function isApplicable(model/*:Object*/)/*:Boolean*/ {
    return AS3.is( model,  com.coremedia.cap.content.Content);
  }/*

  public*/ function getContentTreeRelation()/*:ContentTreeRelation*/ {
    return this.repositoryContentTreeRelation$N9JX;
  }/*

  public*/ function search(searchParameters/*:SearchParameters*/, callback/*:Function*/)/*:void*/ {
    var searchResult/*:SearchResult*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getSearchService().search(searchParameters);
    callback.call(null, searchResult);
  }/*

  public*/ function getSearchOrSearchSuggestionsParameters(searchFilters/*:Object*/, mainStateBean/*:Bean*/)/*:SearchParameters*/ {
    var filterQueryFragments/*:Array*/ = [];

    for (var filterId/*:String*/ in searchFilters) {
      if (searchFilters.hasOwnProperty(filterId)) {
        var searchFilter/*:SearchFilter*/ =AS3.as( searchFilters[filterId],  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
        var queryFragments/*:String*/ = searchFilter.buildQuery();
        if (queryFragments) {
          filterQueryFragments.push("(" + queryFragments + ")");
        }
      }
    }

    var searchText/*:String*/ = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_TEXT_PROPERTY);
    var contentType/*:String*/ = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.CONTENT_TYPE_PROPERTY);
    var folder/*:Content*/ = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY);
    var orderByProperty/*:String*/ = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.ORDER_BY_PROPERTY);
    var orderByAsArray/*:Array*/ = orderByProperty.split(",");

    // force second order sorting by name asc
    if (orderByAsArray && orderByAsArray.length > 0) {
      var firstOrderSorting/*:String*/ = orderByAsArray[0];
      if (firstOrderSorting && firstOrderSorting.indexOf('name') !== 0) {
        orderByAsArray = [firstOrderSorting, com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.ORDER_BY_NAME_ASC];
      }
    }

    var searchParameters/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
    searchParameters.query = searchText || "";
    searchParameters.contentType = contentType ? [ contentType ] : [];
    searchParameters.folder = folder ? folder.getUriPath() : null;
    searchParameters.orderBy = orderByAsArray;
    searchParameters.includeSubfolders = true;
    searchParameters.limit=10;

    if(filterQueryFragments.length > 0) {
      searchParameters.filterQuery = [filterQueryFragments.join(" AND ")];
    }

    var excludeDoctypesQuery/*:String*/ = com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil.buildExcludeContentTypesQuery();
    if (searchParameters.filterQuery) {
      searchParameters.filterQuery.push(excludeDoctypesQuery);
    } else {
      searchParameters.filterQuery = [excludeDoctypesQuery];
    }

    var extensionSearchParams/*:SearchParameters*/ = this.applySearchParameters(folder, filterQueryFragments, searchParameters);
    if (extensionSearchParams) {
      searchParameters = extensionSearchParams;
    }

    return searchParameters;
  }/*

  public*/ function getSearchSuggestionsUrl()/*:String*/ {
    var searchService/*:SearchService*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository().getSearchService();
    return searchService.getSearchSuggestionsUri();
  }/*

  public*/ function getSearchViewItemId()/*:String*/ {
    return null;
  }/*

  public*/ function getFolderContainerItemId()/*:String*/ {
    return null;
  }/*

  public*/ function isSearchable()/*:Boolean*/ {
    return true;
  }/*

  public*/ function isUploadDisabledFor(folder/*:Object*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function upload(files/*:Array*/, folder/*:Object*/, settings/*:UploadSettings*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.upload.UploadManager.upload(files,AS3.as( folder,  com.coremedia.cap.content.Content), settings);
  }/*

  public*/ function getAvailableSearchTypes(folder/*:Object*/)/*:Array*/ {
    return com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getAvailableContentTypeEntries();
  }/*

  public*/ function getRepositoryToolbarItemId()/*:String*/ {
    return null;
  }/*

  public*/ function getRepositoryListSorter()/*:RepositoryListSorter*/ {
    return this.repositoryListSorter$N9JX;
  }/*

  public*/ function getSearchToolbarItemId()/*:String*/ {
    return null;
  }/*

  public*/ function getEnabledSearchFilterIds()/*:Array*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getEnabledSearchFilterIds();
  }/*

  public*/ function getPathInfo(model/*:Object*/)/*:String*/ {
    var selectedContent/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (selectedContent.getParent()) {
      return selectedContent.getParent().getPath();
    } else if (selectedContent.isDeleted()) {
      var pathArray/*:Array*/ = [];
      var currentContent/*:Content*/ = selectedContent.getLastParent();
      while (currentContent && currentContent.isRoot() === false) {
        var name/*:String*/ = currentContent.getName();
        pathArray.push(name);
        if (currentContent.isDeleted()) {
          currentContent = currentContent.getLastParent();
        } else {
          currentContent = currentContent.getParent();
        }
      }
      pathArray.reverse();

      return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_contentState_deleted_text'),
              '/' + pathArray.join('/'));
    }
    return "";
  }/*

  public*/ function applySearchParameters(folder/*:Content*/, filterQueryFragments/*:Array*/, searchParameters/*:SearchParameters*/)/*:SearchParameters*/ {
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension"],
      repositoryListSorter$N9JX: null,
      constructor: RepositoryCollectionViewExtension$,
      isApplicable: isApplicable,
      getContentTreeRelation: getContentTreeRelation,
      search: search,
      getSearchOrSearchSuggestionsParameters: getSearchOrSearchSuggestionsParameters,
      getSearchSuggestionsUrl: getSearchSuggestionsUrl,
      getSearchViewItemId: getSearchViewItemId,
      getFolderContainerItemId: getFolderContainerItemId,
      isSearchable: isSearchable,
      isUploadDisabledFor: isUploadDisabledFor,
      upload: upload,
      getAvailableSearchTypes: getAvailableSearchTypes,
      getRepositoryToolbarItemId: getRepositoryToolbarItemId,
      getRepositoryListSorter: getRepositoryListSorter,
      getSearchToolbarItemId: getSearchToolbarItemId,
      getEnabledSearchFilterIds: getEnabledSearchFilterIds,
      getPathInfo: getPathInfo,
      applySearchParameters: applySearchParameters,
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.RepositoryContentTreeRelation",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil",
        "com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.upload.UploadManager"
      ]
    };
});
