Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase", function(FavoritesToolbarUserItemBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.ui.util.ObjectUtils;

import ext.button.Button;
import ext.util.Format;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class FavoritesToolbarUserItemBase extends Button {

  /** 
   * The state model for this user item.
   * /
  public var state:Object;

  /**
   * The maximum length to allow before truncating
   * /
  public var ellipsis:Number;

  internal var itemName:String;

  public*/ function FavoritesToolbarUserItemBase$(config/*:FavoritesToolbarUserItem = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // If 'folder' property is defined via content repository path instead of
    // REST URI path, BeanFactoryImpl.resolveBeans cannot resolve the content.
    // We have to do it by hand.
    this.state = config.state;
    if (this.state && this.state._main && this.state._main.folder && this.state._main.folder.path) {
      var path/*:String*/ = this.state._main.folder.path;
      com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(path, function (content/*:Content*/)/*:void*/ {
        this$.state._main.folder = content;
      });
    }

    this.super$nJVV(config);
  }/*

  protected*/ function computeText()/*:String*/ {
    this.itemName = this.state['_name'];
    return (this.state && this.state['_name']) ? Ext.util.Format.ellipsis(this.state['_name'], this.ellipsis, false) : this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'emptyMySearchesMenu_text');
  }/*

  protected*/ function computeDisabled()/*:Boolean*/ {
    return (com.coremedia.ui.util.ObjectUtils.isEmpty(this.state));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      state: null,
      ellipsis: NaN,
      itemName: null,
      constructor: FavoritesToolbarUserItemBase$,
      super$nJVV: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      computeText: computeText,
      computeDisabled: computeDisabled,
      requires: [
        "Ext.button.Button",
        "Ext.util.Format",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
