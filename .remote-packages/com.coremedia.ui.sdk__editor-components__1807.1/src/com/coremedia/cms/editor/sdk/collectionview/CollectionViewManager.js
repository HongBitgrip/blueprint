Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager", function(CollectionViewManager) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.Content;

/**
 * A collection view manager keeps track of the state of a collection view window
 * (also known as the library).
 * /
[PublicApi]
public interface CollectionViewManager {
  /**
   * Open the collection view in the repository mode and go to the given content.
   * If the content is a folder, open the folder. If the content is a document,
   * open the parent folder and select the document.
   *
   * @param content the content to show
   * @param view the view, either CollectionViewConstants.LIST_VIEW or
   *   CollectionViewConstants.THUMBNAILS_VIEW; if null, keep the current view
   * @param treeModelId the id of the CompoundChildTreeModel, if null the treemodel will be calculated using the given content
   *
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#TREE_MODEL_ID
   * /
  function showInRepository(content:Content, view:String = null, treeModelId:String = null):void;

  /**
   * Open the collection view in search mode, that is, showing the filter
   * panel and search results.
   *
   * @param state an object describing the search state to set; if null,
   *   do not make additional changes
   * @param reset whether to reset the search state to its default before applying
    *   the given state object; defaults to true
   * @param view the view, either CollectionViewConstants.LIST_VIEW or
   *   CollectionViewConstants.THUMBNAILS_VIEW; if null, keep the current view
   *
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
   * /
  function openSearch(state:SearchState = null, reset:Boolean = true, view:String = null):void;

  /**
   * A convenience method for opening the collection view searching for content of
   * a given type. If no view is given, the thumbnail view is chosen, if and only there is a
   * configured thumbnail image property for the given content type.
   *
   * @param contentType the type to search for
   * @param view the view, either CollectionViewConstants.LIST_VIEW or
   *   CollectionViewConstants.THUMBNAILS_VIEW; if null, guess an appropriate view
   * @param baseFolder the folder below which the search is performed
   *
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
   * @see com.coremedia.cms.editor.sdk.IEditorContext#getImageBlobProperty()
   * /
  function openSearchForType(contentType:String, view:String = null, baseFolder:Content = null):void;

  /**
   * Open the collection view in the repository mode, that is, showing the folder tree
   * and the current folder's contents.
   *
   * @param state an object describing the repository state to set; if null,
   *   do not make additional changes
   * @param reset whether to reset the repository state to its default before applying
    *   the given state object; defaults to true
   * @param view the view, either CollectionViewConstants.LIST_VIEW or
   *   CollectionViewConstants.THUMBNAILS_VIEW; if null, keep the current view
   *
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
   * /
  function openRepository(state:RepositoryState = null, reset:Boolean = true, view:String = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
