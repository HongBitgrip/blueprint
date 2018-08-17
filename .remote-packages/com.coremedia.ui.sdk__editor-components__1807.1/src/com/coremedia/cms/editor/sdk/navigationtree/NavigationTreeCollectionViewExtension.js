Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeCollectionViewExtension", function(NavigationTreeCollectionViewExtension) {/*package com.coremedia.cms.editor.sdk.navigationtree {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cms.editor.Editor_properties;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter;
import com.coremedia.cms.editor.sdk.editorContext;

import mx.resources.ResourceManager;

public class NavigationTreeCollectionViewExtension extends RepositoryCollectionViewExtension {

  private var navigationTreeRelation:NavigationTreeRelation =*/function navigationTreeRelation_(){this.navigationTreeRelation$FPu8=( new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation());}/*;
  private var repositoryListSorter:NavigationTreeRepositoryListSorter;
  private var excludedDocTypeNames:Array =*/function excludedDocTypeNames_(){this.excludedDocTypeNames$FPu8=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_document_type_exclusions').split(","));}/*;

  protected static const ALL_TYPE_RECORD:Object =*/function ALL_TYPE_RECORD$static_(){NavigationTreeCollectionViewExtension.ALL_TYPE_RECORD=( {
    name: com.coremedia.cap.content.ContentTypeNames.CONTENT,
    label: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Navigation_show_all'),
    icon: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'all_documents_iconCls')
  });}/*;

  protected static const NAVIGATION_TYPE_RECORD:Object =*/function NAVIGATION_TYPE_RECORD$static_(){NavigationTreeCollectionViewExtension.NAVIGATION_TYPE_RECORD=( {
    name: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_node_text'),
    label: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_node_label'),
    icon: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_node_iconCls')
  });}/*;

  public*/ function NavigationTreeCollectionViewExtension$() {this.super$FPu8();navigationTreeRelation_.call(this);excludedDocTypeNames_.call(this);
    this.repositoryListSorter$FPu8 = new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRepositoryListSorter(this);
  }/*

  override public*/ function getContentTreeRelation()/*:ContentTreeRelation*/ {
    return this.navigationTreeRelation$FPu8;
  }/*

  override public*/ function isApplicable(model/*:Object*/)/*:Boolean*/ {
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (!content) {
      return false;
    }

    var contentType/*:ContentType*/ = content.getType();
    if (!contentType) {
      return undefined;
    }

    for/* each*/(var $1=0;$1</* in*/ this.excludedDocTypeNames$FPu8.length;++$1) {var excludedDocType/*:String*/ =this.excludedDocTypeNames$FPu8[$1];
      if(excludedDocType === contentType.getName()) {
        return false;
      }
    }

    var ctName/*:String*/ = contentType.getName();
    return contentType.isSubtypeOf(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE);
  }/*

  override public*/ function applySearchParameters(folder/*:Content*/, filterQueryFragments/*:Array*/, searchParameters/*:SearchParameters*/)/*:SearchParameters*/ {
    var siteRoot/*:Content*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite().getSiteRootDocument();
    if(siteRoot === folder) {
      searchParameters.folder = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite().getSiteRootFolder().getUriPath();
    }
    else {
      searchParameters.folder = folder.getParent().getUriPath();
    }

    searchParameters.contentType = [com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE];

    //re-apply doctype filtering without catalog doctypes
    var docTypeExclusions/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getContentTypesExcludedFromSearchResult().filter(
            function (excludedDocType/*:String*/)/*:Boolean*/ {
              var capType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(excludedDocType);
              return !capType.isSubtypeOf(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE);
            });

    var excludeDoctypesQuery/*:String*/ = com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil.buildExcludeContentTypesQuery(docTypeExclusions);
    searchParameters.filterQuery = [filterQueryFragments.join(" AND ")];
    searchParameters.filterQuery.push(excludeDoctypesQuery);

    return searchParameters;
  }/*

  override public*/ function getRepositoryListSorter()/*:RepositoryListSorter*/ {
    return this.repositoryListSorter$FPu8;
  }/*

  override public*/ function getAvailableSearchTypes(folder/*:Object*/)/*:Array*/ {
    return [NavigationTreeCollectionViewExtension.ALL_TYPE_RECORD, NavigationTreeCollectionViewExtension.NAVIGATION_TYPE_RECORD];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension",
      repositoryListSorter$FPu8: null,
      constructor: NavigationTreeCollectionViewExtension$,
      super$FPu8: function() {
        com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension.prototype.constructor.apply(this, arguments);
      },
      getContentTreeRelation: getContentTreeRelation,
      isApplicable: isApplicable,
      applySearchParameters: applySearchParameters,
      getRepositoryListSorter: getRepositoryListSorter,
      getAvailableSearchTypes: getAvailableSearchTypes,
      statics: {
        ALL_TYPE_RECORD: undefined,
        NAVIGATION_TYPE_RECORD: undefined,
        __initStatics__: function() {
          ALL_TYPE_RECORD$static_();
          NAVIGATION_TYPE_RECORD$static_();
        }
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchQueryUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRepositoryListSorter"
      ]
    };
});
