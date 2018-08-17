Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase", function(QuickCreateMenuItemBase) {/*package com.coremedia.blueprint.base.components.quickcreate {

import com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar;

import ext.container.Container;
import ext.menu.Item;

public class QuickCreateMenuItemBase extends Item {

  public*/ function QuickCreateMenuItemBase$(config/*:QuickCreateMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.super$J1iR(config);
  }/*

  /**
   * Apply the favorite icon class if the menu item
   * is added to the favourites toolbar.
   * /
  override protected*/ function afterRender()/*:void*/ {
    Ext.menu.Item.prototype.afterRender.call(this);
    var parent/*:Container*/ = this.findParentByType(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar.xtype);
    if(parent) {
      this.addCls('fav-menu-item');
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      constructor: QuickCreateMenuItemBase$,
      super$J1iR: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      requires: [
        "Ext.menu.Item",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar"
      ]
    };
});
