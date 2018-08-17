Ext.define("com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase", function(RenameBookmarkActionBase) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;

import mx.resources.ResourceManager;

/**
 * An action to rename the target content in a pop-up dialog.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RenameBookmarkActionBase extends DependencyTrackedAction {
  private var bookmarkVE:ValueExpression;
  private var preventHideMenuVE:ValueExpression;
  private var bookmarkManager:BookmarkManager =*/function bookmarkManager_(){this.bookmarkManager$bJV6=( com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance());}/*;

  public*/ function RenameBookmarkActionBase$(config/*:RenameBookmarkAction = null*/) {if(arguments.length<=0)config=null;
    this.preventHideMenuVE$bJV6 = AS3.getBindable(config,"preventHideMenuVE");
    this.bookmarkVE$bJV6 = AS3.getBindable(config,"bookmarkVE");
    AS3.setBindable(config,"handler" ,AS3.bind( this,"doRename$bJV6"));
    this.super$bJV6(config);bookmarkManager_.call(this);;
  }/*

  private*/ function doRename()/*:void*/ {var this$=this;
    var bookmark/*:Bookmark*/ =AS3.as( this.bookmarkVE$bJV6.getValue(),  com.coremedia.cms.editor.sdk.bookmarks.Bookmark);
    var oldName/*:String*/ = bookmark.getName();
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_renameBookmarkAction_title_text');
    var message/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_renameBookmarkAction_message_text');
    var callback/*:Function*/ = function (btn/*:String*/, newName/*:String*/)/*:void*/ {
      if (btn === 'ok') {
        this$.bookmarkManager$bJV6.renameBookmark(bookmark.getContent(), newName);
      }
      this$.preventHideMenuVE$bJV6.setValue(false);
    };
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.prompt(title, message, callback, oldName);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      bookmarkVE$bJV6: null,
      preventHideMenuVE$bJV6: null,
      constructor: RenameBookmarkActionBase$,
      super$bJV6: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      doRename$bJV6: doRename,
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.Bookmark",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
