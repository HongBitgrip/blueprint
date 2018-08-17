Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem", function(BookmarkMenuItem) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import ext.menu.Item;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class BookmarkMenuItem extends Item{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bookmarkMenuItem";

    public*/function BookmarkMenuItem$(config/*:BookmarkMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var defaults_$1/*:BookmarkMenuItem*/ =AS3.cast(BookmarkMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_BookmarkAction_34_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction,{});
    AS3.setBindable(editor_BookmarkAction_34_5_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_BookmarkAction_34_5_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentVariableName")));
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction(editor_BookmarkAction_34_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$apzJ(config_$1);
  }/*

    /**
     * A value expression evaluating to the content(s) to bookmark.
     * /
    [Bindable]
    public var contentValueExpression:ValueExpression;

    /**
     The name of the context variable to be injected to the content property.
     The context value should be a content or an array of contents.
     * /
    [Bindable]
    public var contentVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bookmarkMenuItem",
      constructor: BookmarkMenuItem$,
      super$apzJ: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        contentVariableName: null
      },
      requires: [
        "Ext.menu.Item",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction"]
    };
});
