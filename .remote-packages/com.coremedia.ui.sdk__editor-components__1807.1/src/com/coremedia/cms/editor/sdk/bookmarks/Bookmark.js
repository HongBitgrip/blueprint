Ext.define("com.coremedia.cms.editor.sdk.bookmarks.Bookmark", function(Bookmark) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cap.content.Content;

/**
 * Model for a bookmark.
 * /
public class Bookmark {
  private var name:String;
  private var content:Content;

  public*/ function Bookmark$(name/*:String*/, content/*:Content*/) {
    this.name$fqyX = name;
    this.content$fqyX = content;
  }/*

  public*/ function getName()/*:String*/ {
    return this.name$fqyX;
  }/*

  public*/ function getContent()/*:Content*/ {
    return this.content$fqyX;
  }/*

  /**
   * Type of toString implementation
   * is important for sorting, so redefine
   * this method when named bookmarks
   * should be used.
   * @return
   * /
  public*/ function toString()/*:String*/ {
    return this.content$fqyX.getName().toLowerCase();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      name$fqyX: null,
      content$fqyX: null,
      constructor: Bookmark$,
      getName: getName,
      getContent: getContent,
      toString: toString
    };
});
