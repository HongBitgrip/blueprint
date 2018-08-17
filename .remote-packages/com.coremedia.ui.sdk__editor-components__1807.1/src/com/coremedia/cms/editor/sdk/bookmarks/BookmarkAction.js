Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction", function(BookmarkAction) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import com.coremedia.cms.editor.sdk.bookmarks.*;
import net.jangaroo.ext.Exml;
[ResourceBundle("com.coremedia.icons.CoreIcons")]
[ResourceBundle("com.coremedia.cms.editor.Editor")]
/**

 A <code>contentAction</code> that bookmarks the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class BookmarkAction extends BookmarkActionBase{

    import mx.resources.ResourceManager;

    public static const ACTION_ID:String = "bookmarkAction";

    import com.coremedia.ui.data.ValueExpression;

    public*/function BookmarkAction$(config/*:BookmarkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase,{});
    var defaults_$1/*:BookmarkAction*/ =AS3.cast(BookmarkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'star')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_toggle_text')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_add_tooltip'));
    config_$1.tooltipPressed =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_remove_tooltip'));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_add_text'));
    config_$1.ariaLabelPressed =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_remove_text'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yXot(config_$1);
  }/*

    [Bindable]
    public var preventHideMenuVE:ValueExpression;


    [Bindable]
    public var handleBookmark:Function;


    [Bindable]
    public var neverHide:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase",
      constructor: BookmarkAction$,
      super$yXot: function() {
        com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        preventHideMenuVE: null,
        handleBookmark: null,
        neverHide: false
      },
      statics: {ACTION_ID: "bookmarkAction"},
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
