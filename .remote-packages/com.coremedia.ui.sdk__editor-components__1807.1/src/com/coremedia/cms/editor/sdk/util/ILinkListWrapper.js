Ext.define("com.coremedia.cms.editor.sdk.util.ILinkListWrapper", function(ILinkListWrapper) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.ui.data.ValueExpression;

[PublicApi]
public interface ILinkListWrapper {

  /**
   * @return a value expression wrapping the link list.
   * /
  function getVE():ValueExpression;

  /**
   * @return the max cardinality of the link list.
   * /
  function getTotalCapacity():int;

  /**
   * @return the free capacity of the link list.
   * /
  function getFreeCapacity():int;

  /**
   * Checks if the given links may be added to the LinkListWrapper. Only the total capacity and not the
   * free capacity must be taken into account by implementations. The free capacity must be checked
   * before calling this wrapper, e.g. in paste actions.
   *
   * @param links the links to be added
   * @return true if all links may be added, otherwise false.
   * /
  function acceptsLinks(links:Array):Boolean;

  /**
   * @return an array containing all links or undefined if the value can not yet be determined.
   * /
  function getLinks():Array;

  /**
   * Sets a new array of links.
   *
   * This method should be used with care. The complete list of links is reset and re-filled
   * with the new given links. In case of an annotated link list, all present link annotations
   * are deleted. Consider to use addLinks(), addLinksAtIndex(), removeLinksAtIndexes(),
   * moveLinks(), moveLinksToIndex() to modify a link list (with associated annotations)
   * more in a more incremental way.
   *
   * @param links an array containing the new links to be set. May not be null or undefined.
   * @throws Error if execution fails, e.g. some of the given links are not readable or have a type which does not
   * match the type of the link list.
   *
   * @see ILinkListWrapper.addLinks
   * @see ILinkListWrapper.addLinksAtIndex
   * @see ILinkListWrapper.removeLinksAtIndexes
   * @see ILinkListWrapper.moveLinks
   * @see ILinkListWrapper.moveLinksToIndex
   * /
  function setLinks(links:Array):void;

  /**
   * Adds new links to the end of the link list.
   *
   * @since 1710.1
   * @param links an array containing the new links to be added.
   * @throws Error if execution fails, e.g. some of the given links are not readable or have a type which does not
   * match the type of the link list.
   * /
  function addLinks(links:Array):void;

  /**
   * Inserts new links into the link list at the given index.
   *
   * @since 1710.1
   * @param links the links to be added.
   * @param index the index where to insert the links.
   * @throws Error if execution fails, e.g. some of the given links are not readable or have a type which does not
   * match the type of the link list.
   * /
  function addLinksAtIndex(links:Array, index:int):void;

  /**
   * Moves links inside the link list.
   *
   * The method expects a map where previous link indexes are mapped onto the destination indexes.
   *
   * @since 1710.1
   * @param fromIndexToIndexMap a mapping of previous link indexes to the destination indexes.
   * /
  function moveLinks(fromIndexToIndexMap:Object):void;

  /**
   * Moves existing links to a new index inside the link list. The method expects a list
   * of the indexes of the links that are moved and a destination index.
   *
   * @since 1710.1
   * @param fromIndexes the indexes of the links to be moved.
   * @param toIndex the destination index.
   * /
  function moveLinksToIndex(fromIndexes:Array, toIndex:int):void;

  /**
   * Removes the links at the given indexes from the link list.
   *
   * @since 1710.1
   * @param indexes the indexes of the links to be removed.
   * /
  function removeLinksAtIndexes(indexes:Array):void;

  /**
   * Indicates whether the link list may not be modified.
   *
   * @since 1710.1
   * @return true if the links may not be modified
   * /
  function isReadOnly():Boolean;

  /**
   * Destroys the link list wrapper and gives it the opportunity to do some cleanup.
   *
   * /
  function destroy():void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
