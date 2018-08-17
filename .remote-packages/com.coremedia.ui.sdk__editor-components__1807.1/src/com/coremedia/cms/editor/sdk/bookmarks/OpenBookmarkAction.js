Ext.define("com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction", function(OpenBookmarkAction) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import com.coremedia.cms.editor.sdk.bookmarks.*;
import net.jangaroo.ext.Exml;
public class OpenBookmarkAction extends OpenBookmarkActionBase{

    import com.coremedia.cap.content.Content;

    public*/function OpenBookmarkAction$(config/*:OpenBookmarkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase,{});
    var defaults_$1/*:OpenBookmarkAction*/ =AS3.cast(OpenBookmarkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cdWX(config_$1);
  }/*

    /**
     * The content object for this bookmark
     * /
    [Bindable]
    public var content:Content;

    /** The display name of this bookmark * /
    [Bindable]
    public var name:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase",
      constructor: OpenBookmarkAction$,
      super$cdWX: function() {
        com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        content: null,
        name: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
