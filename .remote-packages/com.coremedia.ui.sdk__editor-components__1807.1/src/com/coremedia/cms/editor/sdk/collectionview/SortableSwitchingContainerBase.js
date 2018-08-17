Ext.define("com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase", function(SortableSwitchingContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {
import com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager;
import com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider;
import com.coremedia.ui.components.SwitchingContainer;

import ext.Component;

/**
 * A SortableSwitchingContainer extends the {@link SwitchingContainer} by delegating
 * the provisioning of the {@link CollectionViewSortStateManager} to the active child.
 * Nesting multiple SortableSwitchingContainer means recursive delegation until one active child provides
 * a {@link CollectionViewSortStateManager}
 * /
[PublicApi]
public class SortableSwitchingContainerBase extends SwitchingContainer implements SortStateManagerProvider{
  public*/ function SortableSwitchingContainerBase$(config/*:SwitchingContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$qZDj(config);
  }/*

  /**
   * @private
   * /
  public*/ function getSortStateManager()/*:CollectionViewSortStateManager*/ {
    var child/*:Component*/ = this.getActiveItem();
    if (AS3.is(child,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider)) {
      return (AS3.as(child,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider)).getSortStateManager();
    }var $2;

    /**
     * This component may manage the list view and the thumbnail view.
     * Only the list view has a CollectionViewSortStateManager, so we return it instead.
     * So they both share the same CollectionViewSortStateManager.
     */
    for/* each*/(var $1 in $2= this.itemCollection['items']) {var c/*:Component*/ =$2[$1];
      if (AS3.is(c,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider)) {
        return (AS3.as(c,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider)).getSortStateManager();
      }
    }

    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider"],
      metadata: {"": ["PublicApi"]},
      constructor: SortableSwitchingContainerBase$,
      super$qZDj: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      getSortStateManager: getSortStateManager,
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider",
        "com.coremedia.ui.components.SwitchingContainer"
      ]
    };
});
