Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem", function(BookmarkButtonMenuItem) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import com.coremedia.cms.editor.sdk.bookmarks.*;
import net.jangaroo.ext.Exml;
public class BookmarkButtonMenuItem extends BookmarkButtonMenuItemBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bookmarkButtonMenuItem";

    public*/function BookmarkButtonMenuItem$(config/*:BookmarkButtonMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase,{});
    var defaults_$1/*:BookmarkButtonMenuItem*/ =AS3.cast(BookmarkButtonMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_OpenBookmarkAction_23_5_$1/*: com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction,{});
    AS3.setBindable(editor_OpenBookmarkAction_23_5_$1,"content" , AS3.getBindable(config,"bookmark").getContent());
    AS3.setBindable(editor_OpenBookmarkAction_23_5_$1,"name" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"bookmark").getName())));
    AS3.setBindable(editor_OpenBookmarkAction_23_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentTypeName(AS3.getBindable(config,"bookmark").getContent().getType().getName())));
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction(editor_OpenBookmarkAction_23_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mWFb(config_$1);
  }/*

    [Bindable]
    public var bookmark:Bookmark;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bookmarkButtonMenuItem",
      constructor: BookmarkButtonMenuItem$,
      super$mWFb: function() {
        com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      config: {bookmark: null},
      requires: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItemBase",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
