Ext.define("com.coremedia.cms.editor.sdk.collectionview.ICollectionView", function(ICollectionView) {/*package com.coremedia.cms.editor.sdk.collectionview {
import com.coremedia.ui.data.ValueExpression;

[PublicApi]
/**
 * An interface tagging the collection view component. Embedded components can
 * use this interface to find the collection view in their chain of parents.
 * <p>
 * Plugins that apply to <code>editor:collectionView</code> can cast their
 * <code>config.component</code> to this interface and use any of its methods.
 * </p>
 * /
public interface ICollectionView {
  /**
   * Return the model object for this collection view.
   *
   * @return the model
   * /
  function getCollectionViewModel():CollectionViewModel;

  /**
   * Return a value expression evaluating to the last search result.
   *
   * @return value expression of last search result
   * /
  function getSearchResultValueExpression():ValueExpression;

  /**
   * Return a value expression pointing to the hits of the search result.
   * Excludes deleted contents from the found hits
   * if the state DELETED_FILTER_PROPERTY is set to false or the state IN_PRODUCTION_FILTER_PROPERTY is set to true
   * /
  function getSearchResultHitsValueExpression():ValueExpression;

  /**
   * Return a value expression evaluating to multiple selected items in the repository view.
   *
   * @return value expression of selected repository items
   * /
  function getSelectedRepositoryItemsValueExpression():ValueExpression;

  /**
   * Return a value expression evaluating to multiple selected items in the search views.
   *
   * @return value expression of selected search items
   * /
  function getSelectedSearchItemsValueExpression():ValueExpression;

  /**
   * Return a value expression evaluating if the bulk upload is enabled or not
   *
   * @return value expression of upload enabled
   * /
  function getUploadDisabledValueExpression():ValueExpression;

  /**
   * Return a value expression evaluating to the selected folder of the collection.
   *
   * @return value expression of selected folder
   * /
  function getSelectedFolderValueExpression():ValueExpression;

  /**
   * Returns a value expression evaluating if the new content action should be enabled.
   * /
  function getNewContentActionDisabledExpression():ValueExpression;

  /**
   * Returns the value expression that contains newly created content.
   *
   * @return value expression of newly created content
   * /
  function getCreatedContentValueExpression():ValueExpression;

  /**
   * Return a value expression evaluating to selected items, either in the repository view, or - if that selection is
   * empty, in the tree view.
   *
   * @return value expression of selected items
   * /
  function getSelectedItemsValueExpression():ValueExpression;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
