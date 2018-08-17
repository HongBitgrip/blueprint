Ext.define("com.coremedia.cms.editor.sdk.desktop.SavedSearchModel", function(SavedSearchModel) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.ui.util.WithEquals;

import ext.Ext;

public class SavedSearchModel implements WithEquals {

  private var data:Object;

  public*/ function SavedSearchModel$(data/*:Object*/) {
    this.data$QZQ6 = data;

    Ext.apply(this, this.data$QZQ6);
  }/*

  public*/ function equals(that/*:Object*/)/*:Boolean*/ {
    var thatModel/*:SavedSearchModel*/ =AS3.as( that,  SavedSearchModel);

    if (!thatModel) {
      return false;
    }

    if (this === thatModel) {
      return true;
    }

    return com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.getUserItemName(this.data$QZQ6) === com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.getUserItemName(thatModel.data$QZQ6);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      data$QZQ6: null,
      constructor: SavedSearchModel$,
      equals: equals,
      requires: [
        "Ext",
        "com.coremedia.ui.util.WithEquals"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils"]
    };
});
