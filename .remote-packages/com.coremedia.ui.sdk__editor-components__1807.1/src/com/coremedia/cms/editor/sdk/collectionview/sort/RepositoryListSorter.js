Ext.define("com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter", function(RepositoryListSorter) {/*package com.coremedia.cms.editor.sdk.collectionview.sort {

import com.coremedia.cap.content.Content;

/**
 * Instances of this are returning the filtered and sorted children for the currently selection
 * repository tree node. If the instance is applicable, the children are read, then filtered and sorted afterwards.
 * Every method of this interface may return undefined to allow asynchronous loading of necessary data.
 * /
public interface RepositoryListSorter {

  /**
   * Returns the children for the given content selection.
   * @param content the content to load the children for.
   * @return the children of the content or undefined if the content has not been loaded yet.
   * /
  function getChildren(content:Content):Array;


  /**
   * Filters the children using the current settings of the collection view.
   * @param children the children to sort.
   * @return the sorted children.
   * /
  function filter(folder:Content, children:Array):Array;

  /**
   * Sorts the result after it has been filtered.
   * @param folder the selected folder
   * @param children the filtered folder children.
   * @return
   * /
  function sort(folder:Content, children:Array):Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
