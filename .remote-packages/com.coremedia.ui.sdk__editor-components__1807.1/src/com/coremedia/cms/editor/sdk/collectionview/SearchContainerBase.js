Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase", function(SearchContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

[PublicApi]
public class SearchContainerBase extends SortableSwitchingContainer {
  public*/ function SearchContainerBase$(config/*:SortableSwitchingContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$5GRP(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer",
      metadata: {"": ["PublicApi"]},
      constructor: SearchContainerBase$,
      super$5GRP: function() {
        com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer"]
    };
});
