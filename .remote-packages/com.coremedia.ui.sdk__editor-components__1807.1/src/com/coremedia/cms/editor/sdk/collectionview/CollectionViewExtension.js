Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension", function(CollectionViewExtension) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.ui.data.Bean;

/**
 * Interface to be implemented for CoreMedia Studio extensions that would like
 * to a apply a custom model into the library.
 * /
public interface CollectionViewExtension {

  /**
   * Checks if the selected model of the CollectionView is applicable for this extension.
   * This method is dependency tracked and should return undefined when the decision cannot be made, yet.
   *
   * @model the active selected model
   * @return true if the given extension should be applied.
   * /
  function isApplicable(model:Object):Boolean;

  /**
   * Return the content tree relation registered for this extension. If no such content tree relation
   * has been registered, an instance of RepositoryContentTreeRelation is used.
   * /
  function getContentTreeRelation():ContentTreeRelation;

  /**
   * /
  function getFolderContainerItemId():String;

  /**
   * Returns a container item id for the library toolbar in the repository mode.
   * /
  function getRepositoryToolbarItemId():String;

  /**
   * Return the sorter for the repository list.
   * /
  function getRepositoryListSorter():RepositoryListSorter;

  /**
   * Returns the item id of the search view.
   * If null is returned, the default search switching container will be used.
   * /
  function getSearchViewItemId():String;

  /**
   * Returns the toolbar itemId that should be used for the search mode of the library.
   * /
  function getSearchToolbarItemId():String;

  /**
   * Return the list of search filter ids, that represent the filters which should be enabled and visible
   * for this extension.
   * If null is returned the filter panel will be hidden.
   *
   * @see com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter
   * /
  function getEnabledSearchFilterIds():Array;

  /**
   * Returns the document types to filter for.
   * /
  function getAvailableSearchTypes(folder:Object):Array;

  /**
   * Returns the string that shows the path of the given model.
   * The path information is displayed in the footer of the CollectionView.
   * /
  function getPathInfo(model:Object):String;

  /**
   * Triggers the custom search for the selected tree model
   * @param searchParameters the filters to apply
   * @param callback the callback where the SearchResult is passed as first argument.
   * /
  function search(searchParameters:SearchParameters, callback:Function):void;

  /**
   * Returns a new SearchParameters object filled with the parameters currently configured in the CollectionView.
   * /
  function getSearchOrSearchSuggestionsParameters(filters:Object, mainStateBean:Bean):SearchParameters;

  /**
   * Returns the URL used to retrieve the search suggestions.
   * The string parameter that contains the URL to retrieve the suggestions for is passed
   * as GET parameter to the URL:
   * @return the search suggestions REST URL.
   * /
  function getSearchSuggestionsUrl():String;

  /**
   * If false is returned, the search mode is disabled for the current tree selection.
   * /
  function isSearchable():Boolean;

  /**
   * Checks if the upload should be disabled for the given selection.
   * @param folder the current library folder selection
   * @return true if the upload should be disabled for the given selection
   * /
  function isUploadDisabledFor(folder:Object):Boolean;

  /**
   * Executes an upload for the given files to the given folder of the selected extension
   * @param files the files that have been dropped, already wrapped in instances of FileWrapper
   * @param folder the folder object that is selected for uploads
   * @param settings the upload settings
   * /
  function upload(files:Array, folder:Object, settings:UploadSettings):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
