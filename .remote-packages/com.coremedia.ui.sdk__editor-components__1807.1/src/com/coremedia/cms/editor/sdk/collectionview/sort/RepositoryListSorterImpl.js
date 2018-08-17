Ext.define("com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl", function(RepositoryListSorterImpl) {/*package com.coremedia.cms.editor.sdk.collectionview.sort {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ObjectUtils;

public class RepositoryListSorterImpl implements RepositoryListSorter {

  private var baseHomeFolder:Content =*/function baseHomeFolder_(){this.baseHomeFolder$jsao=( com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getBaseHomeFolder());}/*;
  private var userHomeFolder:Content =*/function userHomeFolder_(){this.userHomeFolder$jsao=( com.coremedia.cap.common.SESSION.getUser().getHomeFolder());}/*;

  private*/ function noHomeFolderPredicate(content/*:Content*/)/*:Boolean*/ {
    return content !== this.baseHomeFolder$jsao && content !== this.userHomeFolder$jsao;
  }/*

  private var searchResultCallbackSyncBean:Bean =*/function searchResultCallbackSyncBean_(){this.searchResultCallbackSyncBean$jsao=( com.coremedia.ui.data.beanFactory.createLocalBean({hits: undefined}));}/*;
  private var lastSearchParameters:SearchParameters;
  private var hiddenChildren:Array =*/function hiddenChildren_(){this.hiddenChildren$jsao=( []);}/*;

  /**
   * Hide the given content from children lists.
   * /
  public*/ function hideChild(content/*:Content*/)/*:void*/ {
    this.hiddenChildren$jsao.push(content);
  }/*

  /*
   * Only use this method in a FunctionValueExpression. Returned array may be empty at first...
   * /
  public*/ function getChildren(folder/*:Content*/)/*:Array*/ {var this$=this;
    var children/*:Array*/ = folder.getChildren();
    if (children === undefined) {
      return undefined;
    }
    return children.filter(function(child/*:Content*/)/*:Boolean*/ {
      return this$.hiddenChildren$jsao.indexOf(child) === -1;
    });
  }/*

  /**
   * Filters the contents that have been resolved as children for the current tree selection
   * @param folder the selected tree node
   * @param children the children of the tree node to be displayed in the list or thumbnail view
   * @return the filtered children
   * /
  public*/ function filter(folder/*:Content*/, children/*:Array*/)/*:Array*/ {
    //filter those children that are not readable
    var filteredChildren/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getAccessControl().filterReadableContents(children);
    if (!filteredChildren) {
      return undefined;
    }

    //filter those children that are filtered through a TreeFilter instance
    filteredChildren = this.filterForTreeFilters$jsao(filteredChildren);
    if (!filteredChildren) {
      return undefined;
    }

    //do not display any home folders in the list
    return filteredChildren.filter(AS3.bind(this,"noHomeFolderPredicate$jsao"));
  }/*

  public*/ function triggerSolrSort(folder/*:Content*/, children/*:Array*/, sortValues/*:Array*/)/*:Array*/ {
    var searchParameters/*:SearchParameters*/ = this.computeSearchParameters(folder, sortValues);

    if (!this.lastSearchParameters$jsao || !com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(this.lastSearchParameters$jsao, searchParameters)) {
      // search criteria changed:
      var searchResult/*:SearchResult*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getSearchService().search(searchParameters);
      // on load, copy search result to searchResultCallbackSyncBean.hits:
      searchResult.load(AS3.bind(this,"proceedAfterLoad$jsao"));
      this.lastSearchParameters$jsao = searchParameters;
    }

    sortHits$static(children, this.searchResultCallbackSyncBean$jsao.get("hits"));
    return children;
  }/*

  protected*/ function computeSearchParameters(folder/*:Content*/, sortValues/*:Array*/)/*:SearchParameters*/ {
    // force second order sorting by name asc
    var adjustedSortValues/*:Array*/ = sortValues;
    if (sortValues && sortValues.length > 0) {
      var firstOrderSorting/*:String*/ = sortValues[0];
      if (firstOrderSorting && firstOrderSorting.indexOf('name') !== 0) {
        adjustedSortValues = [firstOrderSorting, 'name asc'];
      }
    }

    var searchParameters/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
    searchParameters.query = "*";
    searchParameters.contentType = ["Content_"];
    searchParameters.folder = folder.getUriPath();
    searchParameters.orderBy = adjustedSortValues;
    searchParameters.includeSubfolders = false;

    var docTypeExclusions/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getContentTypesExcludedFromSearchResult();
    var excludeDoctypesFragment/*:String*/ = "";
    for/* each*/(var $1=0;$1</* in*/ docTypeExclusions.length;++$1) {var excludedDocType/*:String*/ =docTypeExclusions[$1];
      excludeDoctypesFragment = excludeDoctypesFragment + "-documenttype:" + excludedDocType + " ";
    }

    if (searchParameters.filterQuery) {
      searchParameters.filterQuery.push(excludeDoctypesFragment);
    } else {
      searchParameters.filterQuery = [excludeDoctypesFragment];
    }

    searchParameters.limit = -1;
    return searchParameters;
  }/*

  public*/ function sort(folder/*:Content*/, children/*:Array*/)/*:Array*/ {
    var cvManager/*:CollectionViewManagerInternal*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
    var sortValue/*:String*/ = "name asc";
    var sortStateManager/*:CollectionViewSortStateManager*/ = cvManager.getCollectionView().getSortStateManager();
    if(sortStateManager) {
      var sortValues/*:Array*/ = sortStateManager.getCurrentSortCriteria();
      sortValue = sortValues[0];
    }

    // retrieve primary sort criteria:
    var fieldAndDirection/*:Array*/ = sortValue.split(" ");
    if (fieldAndDirection[0] === "name") {
      // if sorting is by name, then the list coming from the REST service already has the correct order
      this.lastSearchParameters$jsao = null; // trigger SOLR search on next search criteria change
      if (fieldAndDirection[1] === "desc") {
        // reverse sorting by name, but keep folders at the top of the result
        var indexAfterFolders/*:Number*/ = 0;
        while (indexAfterFolders < children.length && children[indexAfterFolders].isFolder()) {
          indexAfterFolders++;
        }
        var folders/*:Array*/ = children.slice(0, indexAfterFolders);
        var documents/*:Array*/ = children.slice(indexAfterFolders);
        folders.reverse();
        documents.reverse();
        children = folders.concat(documents);
      }
      return children;
    }
    return this.triggerSolrSort(folder,children, sortValues);
  }/*

  private static*/ function sortHits$static(children/*:Array*/, solrSortedChildren/*:Array*/)/*:void*/ {
    if (solrSortedChildren && solrSortedChildren.length > 0) {
      var solrIndex/*:Object*/ = buildIndexByContentIdMap$static(solrSortedChildren);
      // for non-SOLR-indexed contents, we keep the original order,
      // which is "folders before documents, then sort by name":
      // in any case, return folders before documents
      var originalIndex/*:Object*/ = buildIndexByContentIdMap$static(children);
      children.sort(function (a/*:Content*/, b/*:Content*/)/*:int*/ {
        if (a === b) { // fast path for equals:
          return 0;
        }
        // Return negative number for "a before b",
        //        positive number for "b before a":

        // Always return folders first before documents
        var isFolderA/*:Boolean*/ = a.isFolder();
        var isFolderB/*:Boolean*/ = b.isFolder();
        if (isFolderA !== isFolderB) {
          return isFolderA ? -1 : 1;
        }

        var indexA/*:int*/ = solrIndex[a.getId()];
        var indexB/*:int*/ = solrIndex[b.getId()];
        var aNotInSolr/*:Boolean*/ = indexA === undefined;
        var bNotInSolr/*:Boolean*/ = indexB === undefined;
        if (aNotInSolr && bNotInSolr) {
          // both are not SOLR-index: compare by original index to keep original order!
          return originalIndex[a.getId()] - originalIndex[b.getId()];
        }
        // put non-SOLR-indexed folders and documents before SOLR-indexed documents:
        return aNotInSolr ? -1
                : bNotInSolr ? 1
                : indexA - indexB; // if both are SOLR-indexed, simply compute index difference.
      });
    }
  }/*


  /**
   * Applies the tree filter methods to the given list of children.
   * @param filteredChildren the already filtered children
   * @return the filtered children or undefined if the models have not been loaded yet
   * /
  private*/ function filterForTreeFilters(filteredChildren/*:Array*/)/*:Array*/ {
    var collectionViewManagerInternal/*:CollectionViewManagerInternal*/ =
            (AS3.as((com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
    //retrieve the tree
    var treeModel/*:CompoundTreeModel*/ = collectionViewManagerInternal.getLibraryTreeModel();
    return treeModel.filterTreeChildren(filteredChildren);
  }/*

  private static*/ function buildIndexByContentIdMap$static(contentList/*:Array*/)/*:Object*/ {
    var indexByContentId/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < contentList.length; i++) {
      indexByContentId[AS3.cast(com.coremedia.cap.content.Content,contentList[i]).getId()] = i;
    }
    return indexByContentId;
  }/*

  private*/ function proceedAfterLoad(bean/*:SearchResult*/)/*:void*/ {
    this.searchResultCallbackSyncBean$jsao.set("hits", bean.getHits());
  }/*

}*/function RepositoryListSorterImpl$() {baseHomeFolder_.call(this);userHomeFolder_.call(this);searchResultCallbackSyncBean_.call(this);hiddenChildren_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter"],
      noHomeFolderPredicate$jsao: noHomeFolderPredicate,
      lastSearchParameters$jsao: null,
      hideChild: hideChild,
      getChildren: getChildren,
      filter: filter,
      triggerSolrSort: triggerSolrSort,
      computeSearchParameters: computeSearchParameters,
      sort: sort,
      filterForTreeFilters$jsao: filterForTreeFilters,
      proceedAfterLoad$jsao: proceedAfterLoad,
      constructor: RepositoryListSorterImpl$,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
