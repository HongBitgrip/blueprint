Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase", function(DeleteSavedSearchActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;

public class DeleteSavedSearchActionBase extends StateAction {
  public*/ function DeleteSavedSearchActionBase$(config/*:DeleteSavedSearchAction = null*/) {if(arguments.length<=0)config=null;
    this.super$$5PW(AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'deleteSearch')));

    this.setHandler(AS3.bind(this,"deleteSavedSearch$$5PW"), this);
  }/*

  private*/ function deleteSavedSearch() {var this$=this;
    var existingSearches/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches();

    if (existingSearches) {
      var newSavedSearches/*:Array*/ = existingSearches.filter(function (savedSearch/*:Object*/)/*:Boolean*/ {
         return (savedSearch['_name'] != this$.getState()['_name']);
      });

      com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.updateSavedSearches(newSavedSearches);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.StateAction",
      constructor: DeleteSavedSearchActionBase$,
      super$$5PW: function() {
        com.coremedia.cms.editor.sdk.actions.StateAction.prototype.constructor.apply(this, arguments);
      },
      deleteSavedSearch$$5PW: deleteSavedSearch,
      requires: ["com.coremedia.cms.editor.sdk.actions.StateAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil"
      ]
    };
});
