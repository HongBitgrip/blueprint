Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase", function(BookmarkButtonMenuItemBase) {/*package com.coremedia.cms.editor.sdk.bookmarks {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.menu.Item;

public class BookmarkButtonMenuItemBase extends Item {

  private var bookmark:Bookmark;

  public*/ function BookmarkButtonMenuItemBase$(config/*:BookmarkButtonMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.super$mmHM(config);

    this.bookmark$mmHM = AS3.getBindable(config,"bookmark");
  }/*

  public*/ function getBookmark()/*:Bookmark*/{
    return this.bookmark$mmHM;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.menu.Item.prototype.afterRender.call(this);

    var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.bookmark$mmHM.getContent());

    var contentDragZone/*:BookmarkDragZone*/ = new com.coremedia.cms.editor.sdk.bookmarks.BookmarkDragZone(this, ve);
    this.on("beforedestroy", function ()/*:void*/ {
      contentDragZone.unreg();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      bookmark$mmHM: null,
      constructor: BookmarkButtonMenuItemBase$,
      super$mmHM: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      getBookmark: getBookmark,
      afterRender: afterRender,
      requires: [
        "Ext.menu.Item",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.bookmarks.BookmarkDragZone"]
    };
});
