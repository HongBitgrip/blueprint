Ext.define("com.coremedia.cms.editor.sdk.util.LinkListWrapperBase", function(LinkListWrapperBase) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.data.ValueExpression;

public class LinkListWrapperBase implements ILinkListWrapper {

  public*/ function LinkListWrapperBase$(config/*:LinkListWrapperBase = null*/) {if(arguments.length<=0)config=null;
  }/*

  public*/ function getVE()/*:ValueExpression*/ {
    return null;
  }/*

  public*/ function getTotalCapacity()/*:int*/ {
    return 0;
  }/*

  public*/ function getFreeCapacity()/*:int*/ {
    return 0;
  }/*

  public*/ function acceptsLinks(links/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function getLinks()/*:Array*/ {
    return null;
  }/*

  public*/ function setLinks(links/*:Array*/)/*:void*/ {
    //needs to be overridden by subclass
  }/*

  public*/ function addLinks(links/*:Array*/)/*:void*/ {
    this.addLinksAtIndex(links, (this.getLinks() ? this.getLinks().length : 0));
  }/*

  public*/ function addLinksAtIndex(links/*:Array*/, index/*:int*/)/*:void*/ {
    links =AS3.as( links,  Array) || [];
    var currentLinks/*:Array*/ = this.getLinks() || [];

    if (index < 0 || index > currentLinks.length) {
      return;
    }

    var newLinks/*:Array*/ = currentLinks.concat([]);
    // insert links into newLinks at position index
    newLinks.splice.apply(newLinks, [index, 0].concat(links));
    this.setLinks(newLinks);
  }/*

  public*/ function moveLinksToIndex(fromIndexes/*:Array*/, toIndex/*:int*/)/*:void*/ {
    var fromToMap/*:Object*/ = {};

    fromIndexes.forEach(function (index/*:int*/)/*:void*/ {
      fromToMap[index] = toIndex;
      toIndex++;
    });

    this.moveLinks(fromToMap);
  }/*

  public*/ function moveLinks(fromIndexToIndexMap/*:Object*/)/*:void*/ {
    var completeToFromMap/*:Object*/ = this.getCompleteToFromMap(fromIndexToIndexMap);
    if (!completeToFromMap) {
      return;
    }

    var newLinks/*:Array*/ = [];

    var currentLinks/*:Array*/ = this.getLinks() || [];
    for (var i/*:int*/ = 0; i < currentLinks.length; i++) {
      newLinks.push(currentLinks[completeToFromMap[i]]);
    }

    if (this.acceptsLinks(newLinks)) {
      this.setLinks(newLinks);
    }
  }/*

  protected*/ function getCompleteToFromMap(fromIndexToIndexMap/*:Object*/)/*:Object*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var currentLinks/*:Array*/ = this.getLinks() || [];

    // consistency check: each from and to location has to be unique and within bounds of current link length
    var fromLocations/*:Array*/ = [];
    var toLocations/*:Array*/ = [];
    for (var fromLocationStr/*:String*/ in fromIndexToIndexMap) {
      var fromLocation/*:int*/ = parseInt(fromLocationStr);
      if (-1 < fromLocation
              && fromLocation < currentLinks.length
              && fromLocations.indexOf(fromLocation) === -1) {
        fromLocations.push(fromLocation);
      } else {
        return null;
      }
      var toLocation/*:int*/ = fromIndexToIndexMap[fromLocation];
      if (-1 < toLocation
              && toLocation < currentLinks.length
              && toLocations.indexOf(toLocation) === -1) {
        toLocations.push(toLocation);
      } else {
        return null;
      }
    }

    var toFromMap/*:Object*/ = {};

    // insert movements first
    for (var fromLoc/*:String*/ in fromIndexToIndexMap) {
      toFromMap[fromIndexToIndexMap[fromLoc]] = parseInt(fromLoc);
    }

    // shuffle remaining items
    for (var i/*:int*/ = 0; i < currentLinks.length; i++) {
      if (!(AS3.is(fromIndexToIndexMap[i],  Number))) {
        var freeIndex/*:int*/ = 0;
        while (AS3.is(toFromMap[freeIndex],  Number)) {
          freeIndex++;
        }
        toFromMap[freeIndex] = i;
      }
    }

    return toFromMap;
  }/*

  public*/ function removeLinksAtIndexes(indexes/*:Array*/)/*:void*/ {
    indexes =AS3.as( indexes,  Array) || [];
    var currentLinks/*:Array*/ = this.getLinks() || [];

    var newLinks/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < currentLinks.length; i++) {
      if (indexes.indexOf(i) === -1) {
        newLinks.push(currentLinks[i]);
      }
    }

    if (this.acceptsLinks(newLinks)) {
      this.setLinks(newLinks);
    }
  }/*

  public*/ function isReadOnly()/*:Boolean*/ {
    return false;
  }/*

  public*/ function destroy()/*:void*/ {
    //can be overridden by subclass
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.util.ILinkListWrapper"],
      constructor: LinkListWrapperBase$,
      getVE: getVE,
      getTotalCapacity: getTotalCapacity,
      getFreeCapacity: getFreeCapacity,
      acceptsLinks: acceptsLinks,
      getLinks: getLinks,
      setLinks: setLinks,
      addLinks: addLinks,
      addLinksAtIndex: addLinksAtIndex,
      moveLinksToIndex: moveLinksToIndex,
      moveLinks: moveLinks,
      getCompleteToFromMap: getCompleteToFromMap,
      removeLinksAtIndexes: removeLinksAtIndexes,
      isReadOnly: isReadOnly,
      destroy: destroy,
      requires: ["com.coremedia.cms.editor.sdk.util.ILinkListWrapper"]
    };
});
