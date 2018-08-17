Ext.define("com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase", function(OpenBookmarkActionBase) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.Action;

import mx.resources.ResourceManager;

/**
 * Action for opening a bookmark.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class OpenBookmarkActionBase extends Action {
  private var content:Content;

  /**
   * @param config
   * /
  public*/ function OpenBookmarkActionBase$(config/*:OpenBookmarkAction = null*/) {if(arguments.length<=0)config=null;
    config['handler'] =AS3.bind( this,"openBookmark$ZlgI");
    this.content$ZlgI = AS3.getBindable(config,"content");
    if (!this.content$ZlgI) {
      config['text'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_empty_list');
    }
    else {
      config['text'] = AS3.getBindable(config,"name");
    }

    this.super$ZlgI(config);
    if (!this.content$ZlgI) {
      this.setDisabled(true);
    }
  }/*

  /**
   * The action handle for this action.
   * /
  private*/ function openBookmark()/*:void*/ {
    if (this.content$ZlgI) {
      if (this.content$ZlgI.isDocument()) {
        com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(this.content$ZlgI);
      } else {
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(this.content$ZlgI, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
      }

    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      content$ZlgI: null,
      constructor: OpenBookmarkActionBase$,
      super$ZlgI: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      openBookmark$ZlgI: openBookmark,
      requires: [
        "Ext.Action",
        "com.coremedia.cms.editor.Editor_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
