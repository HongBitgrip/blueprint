Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.FixedSearchWidgetBase", function(FixedSearchWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.cms.editor.sdk.editorContext;

public class FixedSearchWidgetBase extends AbstractSearchWidget implements Reloadable {
  public*/ function FixedSearchWidgetBase$(config/*:FixedSearchWidget = null*/) {if(arguments.length<=0)config=null;
    config.search.contentType = "Document_";
    this.super$9TgU(config);
  }/*

  /**
   * The initial search state.
   * /
  [ExtConfig]
  public var search:SearchState;

  protected override*/ function updateModel()/*:void*/ {
    this.getModel().setSearchState(true, null, this.search);
  }/*

  public override*/ function showLibrary()/*:void*/ {
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(this.search, true, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget",
      mixins: ["com.coremedia.cms.editor.sdk.dashboard.Reloadable"],
      constructor: FixedSearchWidgetBase$,
      super$9TgU: function() {
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
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
