Ext.define("com.coremedia.ui.util.ContextMenuUtil", function(ContextMenuUtil) {/*package com.coremedia.ui.util {
import ext.Component;
import ext.ComponentManager;
import ext.event.Event;
import ext.menu.Menu;

import js.Element;

public class ContextMenuUtil {

  public*/ function ContextMenuUtil$() {}/*

  public static*/ function createContextMenu$static(config/*:Menu*/, component/*:Component*/)/*:Menu*/ {
    if(!config) throw new AS3.Error("cannot create context menu from 'null'");
    // Create the menu
    // should be com.coremedia.ui.context.ComponentContextManager#configOwnerCt, but that class is in the wrong module...
    config['cmOwnerCt'] = component;

    // This will entail a floatParent for the context menu.
    // Which we do not want, so we have to remove it after rendering (see below).
    config['ownerCt'] = component;

    var contextMenu/*:Menu*/ =AS3.as( Ext.ComponentManager.create(config),  Ext.menu.Menu);

    // If no items configured do nothing
    if (!contextMenu.itemCollection || contextMenu.itemCollection.length === 0) {
      return contextMenu;
    }

    contextMenu.on("afterrender", onAfterRender$static);

    return contextMenu;
  }/*

  private static*/ function onAfterRender$static(menu/*:Menu*/)/*:void*/ {
    menu['floatParent'] = null;

    registerContextMenuListeners$static(menu);
  }/*

  private static*/ function registerContextMenuListeners$static(menu/*:Menu*/)/*:void*/ {
    function stayVisible()/*:void*/ {
      if (menu.isVisible(true)) {
        var bodyElement/*:Element*/ = window.document.documentElement.getElementsByTagName('body')[0];
        var maxX/*:int*/ = Math.max(0, bodyElement.clientWidth - menu.getWidth());
        var maxY/*:int*/ = Math.max(0, bodyElement.clientHeight - menu.getHeight());
        var position/*:Array*/ = menu.getPosition();
        if (position[0] > maxX || position[1] > maxY) {
          menu.setPosition(Math.min(position[0], maxX), Math.min(position[1], maxY));
        }
      }
    }

    menu.un("afterrender", registerContextMenuListeners$static);

    // The context menu itself should prevent the browsers default handling of the context menu event.
    // Otherwise the browser context menu will hide the menu.
    menu.mon(menu.el, "contextmenu", ContextMenuUtil.disableContextMenu);

    //If the context menu grows, make sure to reposition it so that it is not clipped.
    menu.on("afterlayout", stayVisible);
    menu.itemCollection.each(function(item/*:Component*/)/*:void*/ {
      menu.mon(item, "show", stayVisible);
    });
  }/*

  public static*/ function disableContextMenu$static(event/*:Event*/)/*:void*/ {
    event.preventDefault();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContextMenuUtil$,
      statics: {
        createContextMenu: createContextMenu$static,
        disableContextMenu: disableContextMenu$static
      },
      requires: [
        "AS3.Error",
        "Ext.ComponentManager",
        "Ext.menu.Menu"
      ]
    };
});
