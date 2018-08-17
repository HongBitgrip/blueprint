Ext.define("com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase", function(ExtensionsMenuBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import ext.Component;
import ext.button.Button;
import ext.menu.Menu;
import ext.toolbar.Toolbar;

/**
 * Base class of the extensions menu.
 * /
public class ExtensionsMenuBase extends Menu {

  public static const TOOLBAR_ITEM_ID:String = "toolbarItemId";
  public static const MENU_SCROLLBAR_WIDTH:Number = 16;
  public static const MENU_OFFSET:Number = 4;

  private var extensionsMenu:Menu =*/function extensionsMenu_(){this.extensionsMenu$K4Cm=( this);}/*;

  public*/ function ExtensionsMenuBase$(config/*:ExtensionsMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$K4Cm(config);extensionsMenu_.call(this);;
    this.on("show",AS3.bind( this,"calcWidth$K4Cm"));
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.menu.Menu.prototype.afterRender.call(this);
    this.cascade(function (cmp/*:Component*/)/*:Boolean*/ {
      if (AS3.is(cmp,  Ext.button.Button)) {
        cmp.addListener("click", function ()/*:void*/ {
          this$.hide();
        });
      }
      return true;
    });
  }/*

  private*/ function calcWidth()/*:void*/ {
    var extensionToolbar/*:Toolbar*/ =AS3.as( this.extensionsMenu$K4Cm.queryById(ExtensionsMenuBase.TOOLBAR_ITEM_ID),  Ext.toolbar.Toolbar);
    if (extensionToolbar.getHeight() > this.extensionsMenu$K4Cm.getHeight()){
      this.extensionsMenu$K4Cm.setWidth(extensionToolbar.getWidth() + ExtensionsMenuBase.MENU_SCROLLBAR_WIDTH + ExtensionsMenuBase.MENU_OFFSET);
    }
    else this.extensionsMenu$K4Cm.setWidth(extensionToolbar.getWidth() + ExtensionsMenuBase.MENU_OFFSET);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: ExtensionsMenuBase$,
      super$K4Cm: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      calcWidth$K4Cm: calcWidth,
      statics: {
        TOOLBAR_ITEM_ID: "toolbarItemId",
        MENU_SCROLLBAR_WIDTH: 16,
        MENU_OFFSET: 4
      },
      requires: [
        "Ext.button.Button",
        "Ext.menu.Menu",
        "Ext.toolbar.Toolbar"
      ]
    };
});
