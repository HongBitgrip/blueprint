Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase", function(FavoritesToolbarUserItemsAreaBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.menu.Menu;
import ext.toolbar.Toolbar;

/**
 * Base class of the favorites toolbar user items area.
 * /
[PublicApi]
public class FavoritesToolbarUserItemsAreaBase extends Toolbar {

  /**
   * The default user items of the favorites toolbar.
   * Set this property with an AddArrayItemsPlugin
   * to customize the saved searches that are present when
   * a user logs in for the first time.
   * /
  public var defaultItems:Array;

  private var currentSearchState:Object;

  /**
   * @private
   * The menu configuration for the toolbar's context menu.
   * /
  [ExtConfig]
  public var contextMenu:Menu;

  public*/ function FavoritesToolbarUserItemsAreaBase$(config/*:FavoritesToolbarUserItemsArea = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$yQPZ(config);

    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches).loadValue(function(savedSearches/*:Array*/)/*:void*/ {
      if (!savedSearches && this$.defaultItems) {
        com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.updateSavedSearches([].concat(this$.defaultItems));
      }
    });
  }/*

  /** @private * /
  public*/ function setCurrentSearchState(st/*:Object*/)/*:void*/ {
    var oldValue/*:**/ = this.currentSearchState$yQPZ;
    this.currentSearchState$yQPZ = st;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME, oldValue, st);
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getCurrentSearchState()/*:Object*/ {
    return this.currentSearchState$yQPZ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {
        "": ["PublicApi"],
        getCurrentSearchState: ["ProvideToExtChildren"]
      },
      defaultItems: null,
      currentSearchState$yQPZ: null,
      contextMenu: null,
      constructor: FavoritesToolbarUserItemsAreaBase$,
      super$yQPZ: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      setCurrentSearchState: setCurrentSearchState,
      getCurrentSearchState: getCurrentSearchState,
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea"
      ]
    };
});
