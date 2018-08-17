Ext.define("com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase", function(MoveUserItemActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;

public class MoveUserItemActionBase extends StateAction {

  private var targetPosition:String;

  public*/ function MoveUserItemActionBase$(config/*:MoveUserItemAction = null*/) {if(arguments.length<=0)config=null;
    this.targetPosition$rseX = AS3.getBindable(config,"targetPosition");
    this.super$rseX(AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'moveUserItem' + this.targetPosition$rseX)));

    this.setHandler(AS3.bind(this,"moveUserItem$rseX"), this);
  }/*

  private*/ function moveUserItem()/*:void*/ {
    var savedSearches/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches();

    if (savedSearches) {
      var indexToMove/*:int*/ = -1;
      for (var i/*:int*/ = 0; i < savedSearches.length; i++) {
        if (savedSearches[i]['_name'] === this.getState()['_name']) {
          indexToMove = i;
          break;
        }
      }
      if (indexToMove < 0) {
        // Cannot happen. The item was just clicked.
        return;
      }

      var newSavedSearches/*:Array*/;
      if (this.targetPosition$rseX === "toTop") {
        if (indexToMove != 0) {
          newSavedSearches = [this.getState()].
                  concat(savedSearches.slice(0, indexToMove).
                  concat(savedSearches.slice(indexToMove + 1)));
        }
      } else if (this.targetPosition$rseX === "up") {
        if (indexToMove != 0) {
          newSavedSearches = savedSearches.slice(0, indexToMove - 1).
                  concat([this.getState()]).
                  concat([savedSearches[indexToMove - 1]]).
                  concat(savedSearches.slice(indexToMove + 1));
        }
      } else if (this.targetPosition$rseX === "down") {
        if (indexToMove != savedSearches.length-1) {
          newSavedSearches = savedSearches.slice(0, indexToMove).
                  concat([savedSearches[indexToMove + 1]]).
                  concat([this.getState()]).
                  concat(savedSearches.slice(indexToMove + 2));
        }
      } else if (this.targetPosition$rseX === "toBottom") {
        if (indexToMove != savedSearches.length-1) {
          newSavedSearches = savedSearches.slice(0, indexToMove).
                  concat(savedSearches.slice(indexToMove + 1)).
                  concat([this.getState()]);
        }
      } else {
        var newIndex/*:int*/ = parseInt(this.targetPosition$rseX);
        if (newIndex >= 0 && newIndex <= savedSearches.length) {
          if (newIndex != NaN) {
            newSavedSearches = savedSearches.slice(0, indexToMove).concat(savedSearches.slice(indexToMove + 1));
            newSavedSearches = newSavedSearches.slice(0, newIndex).concat([this.getState()]).concat(newSavedSearches.slice(newIndex));
          }
        }
      }

      if (newSavedSearches) {
        com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.updateSavedSearches(newSavedSearches);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.StateAction",
      targetPosition$rseX: null,
      constructor: MoveUserItemActionBase$,
      super$rseX: function() {
        com.coremedia.cms.editor.sdk.actions.StateAction.prototype.constructor.apply(this, arguments);
      },
      moveUserItem$rseX: moveUserItem,
      requires: ["com.coremedia.cms.editor.sdk.actions.StateAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.MoveUserItemAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil"
      ]
    };
});
