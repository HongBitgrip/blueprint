Ext.define("com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider", function(SortStateManagerProvider) {/*package com.coremedia.cms.editor.sdk.collectionview.sort {

/**
 * <p>
 * A SortStateManagerProvider is responsible for resolving a {@link CollectionViewSortStateManager}.
 *</p>
 * <p>
 * Since we have extensions we are able to replace the repository/search list dependending on the tree selection and the mode (search/repository).
 * When replacing the repository/search list we can have another {@link ColumnModel}. For each {@link ColumnModel} exactly one {@link CollectionViewSortStateManager} must be provided because
 * it holds the state of the last sort for its {@link ColumnModel}.
 *</p>
 * <p>
 * The {@link CollectionView} will search its components recursively for a valid (active) {@link CollectionViewSortStateManager} below the switching containers of the mode.
 * Each component hierarchy level must handle the call by returning a {@link CollectionViewSortStateManager} or delegate to the next component hierarchy level.
 * A container which provides the {@link CollectionViewSortStateManager} by delegating down to the next hierarchy level by default is {@link SortableSwitchingContainerBase}.
 * </p>
 * @see {@link CollectionViewSortStateManager}
 * @see {@link SortableSwitchingContainerBase}
 * @see {@link CollectionViewBase#getSortStateManager()}
 * /
public interface SortStateManagerProvider {
  function getSortStateManager():CollectionViewSortStateManager;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
