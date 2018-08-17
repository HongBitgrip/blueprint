Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetBase", function(SavedSearchWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.cms.editor.sdk.editorContext;

public class SavedSearchWidgetBase extends AbstractSearchWidget implements Reloadable {
  public*/ function SavedSearchWidgetBase$(config/*:SavedSearchWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$Xjkn(config);
  }/*

  /**
   * The collection view model state.
   * /
  [ExtConfig]
  public var search:Object;

  protected override*/ function updateModel()/*:void*/ {
    this.getModel().updateState(this.search);
  }/*

  public override*/ function showLibrary()/*:void*/ {
    var manager/*:CollectionViewManagerInternal*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal,com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager());
    manager.openWithAllState(this.search);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget",
      mixins: ["com.coremedia.cms.editor.sdk.dashboard.Reloadable"],
      constructor: SavedSearchWidgetBase$,
      super$Xjkn: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget.prototype.constructor.apply(this, arguments);
      },
      search: null,
      updateModel: updateModel,
      showLibrary: showLibrary,
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
