Ext.define("com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction", function(RenameBookmarkAction) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import com.coremedia.cms.editor.sdk.bookmarks.*;
import net.jangaroo.ext.Exml;
public class RenameBookmarkAction extends RenameBookmarkActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function RenameBookmarkAction$(config/*:RenameBookmarkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase,{});
    var defaults_$1/*:RenameBookmarkAction*/ =AS3.cast(RenameBookmarkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5szL(config_$1);
  }/*

    /**
     * The ValueExpression evaluating to the content to rename
     * /
    [Bindable]
    public var bookmarkVE:ValueExpression;

    [Bindable]
    public var preventHideMenuVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase",
      constructor: RenameBookmarkAction$,
      super$5szL: function() {
        com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bookmarkVE: null,
        preventHideMenuVE: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
