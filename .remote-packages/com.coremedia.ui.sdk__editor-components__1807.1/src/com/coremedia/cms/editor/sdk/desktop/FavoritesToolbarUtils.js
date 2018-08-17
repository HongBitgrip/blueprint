Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils", function(FavoritesToolbarUtils) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.actions.MoveUserItemAction;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.DraggableItemsUtils;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.menu.Menu;

public class FavoritesToolbarUtils {

  private static const*/var GHOST_MODIFIER_FAVORITES_TOOLBAR$static/*:BEMModifier*/;/*
          =*/function GHOST_MODIFIER_FAVORITES_TOOLBAR$static_(){GHOST_MODIFIER_FAVORITES_TOOLBAR$static=( com.coremedia.ui.util.DraggableItemsUtils.DRAG_GHOST_BLOCK.createModifier("favorites-toolbar"));};/*
  private static const*/var SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static/*:BEMModifier*/;/*
          =*/function SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static_(){SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static=( com.coremedia.ui.util.DraggableItemsUtils.SOURCE_PLACEHOLDER_BLOCK.createModifier("favorites-toolbar"));};/*
  private static const*/var TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static/*:BEMModifier*/;/*
          =*/function TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static_(){TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static=( com.coremedia.ui.util.DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK.createModifier("favorites-toolbar"));};/*

  public static const USER_ITEMS_DD_GROUP:String = "userItemsDD";

  public*/ function FavoritesToolbarUtils$() {
  }/*

  public static*/ function initHandling$static(cont/*:Container*/,
                                      contextMenu/*:Menu*/,
                                      contextName/*:String*/,
                                      saveScrollState/*:Boolean = false*/,
                                      showHideContainer/*:Container = null*/)/*:void*/ {switch(Math.max(arguments.length,3)){case 3:saveScrollState=false;case 4:showHideContainer=null;}

    //data binding: use the container's view model if available
    if (!contextMenu['viewModel'] && cont.lookupViewModel()) {
      contextMenu['viewModel'] = cont.lookupViewModel();
    }

    var theContextMenu/*:Menu*/ =AS3.as( Ext.ComponentManager.create(contextMenu),  Ext.menu.Menu);

    var lastScrollState/*:Number*/;

    cont.getEl().addListener("contextmenu", function (event/*:Event*/)/*:void*/ {

      // save scroll state to restore it after next layout (triggered by BindComponentsPlugin
      // after changes to the user items)
      if (saveScrollState) {
        lastScrollState = AS3.cast(Ext.dom.Element,cont.getEl().child("div.x-box-inner")).dom.scrollTop;
      }

      //the context menu itself should prevent the browsers default handling of the context menu event.
      //otherwise the browser context menu will hide the menu
      theContextMenu.mon(theContextMenu, "afterrender", function (menu/*:Menu*/)/*:void*/ {
        theContextMenu.mon(theContextMenu.el, "contextmenu", function (e/*:Event*/)/*:void*/ {
          e.preventDefault();
        });
      });

      // The clicked item is computed from the target of the context menu
      // click (right-click). We have to go one additional <div> up for
      // whatever reason. Then we get the id of the ext.Element and use it to
      // fetch the FavoritesToolbarUserItem via the Ext.ComponentMgr.
      var userItemSelector/*:String*/ = com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem.xtype.replace(/\./g, "-");
      var target/*:**/ = event.getTarget("*[data-componentid*=" + userItemSelector + "]", 10, true);
      if (target) {
        var clickedItem/*:FavoritesToolbarUserItem*/ =AS3.as( Ext.getCmp(
                        target.getId()),
                 com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem);
      }
      // The 'state' property of the clicked item is injected into the
      // base action (if it is a StateAction) of all items
      // of the menu.
      var clickedItemState/*:Object*/ = clickedItem ? clickedItem.state : undefined;
      com.coremedia.ui.util.ObjectUtils.setProperty(showHideContainer || cont, contextName, clickedItemState);
      var posX/*:int*/ = event.getXY()[0];
      var posY/*:int*/ = event.getXY()[1];

      theContextMenu.showAt([Math.max(posX, 0), Math.max(posY, 0)]);
      event.preventDefault();
    });

    cont.addListener("beforedestroy", function ()/*:void*/ {
      theContextMenu.destroy();
    });

    if (saveScrollState) {
      showHideContainer.mon(showHideContainer, "beforehide", function ()/*:void*/ {
        lastScrollState = AS3.cast(Ext.dom.Element,cont.getEl().child("div.x-box-inner")).dom.scrollTop;
      });
    }

    if (saveScrollState) {
      cont.mon(cont, "afterlayout", function ()/*:void*/ {
        // restore scroll state (see above)
        if (lastScrollState) {
          AS3.cast(Ext.dom.Element,cont.getEl().child("div.x-box-inner")).dom.scrollTop = lastScrollState;
        } else {
          AS3.cast(Ext.dom.Element,cont.getEl().child("div.x-box-inner")).dom.scrollTop = 0;
        }
      });
    }
  }/*

  public static*/ function dropHandler$static(dropIndex/*:Number*/, dragItem/*:Component*/)/*:Boolean*/ {
    var userItem/*:FavoritesToolbarUserItem*/ =AS3.as( dragItem,  com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem);
    if (userItem) {
      var moveActionConfig/*:MoveUserItemAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,{});
      AS3.setBindable(moveActionConfig,"targetPosition" , "" + dropIndex);
      var moveAction/*:MoveUserItemAction*/ = new com.coremedia.cms.editor.sdk.actions.MoveUserItemAction(moveActionConfig);
      moveAction.setState(userItem.state);
      moveAction.execute();
      return true;
    }
    return false;
  }/*

  public static*/ function buildSourcePlaceholder$static(dragItem/*:Component*/)/*:Element*/ {
    var placeholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultSourcePlaceholderBuilder(dragItem);
    placeholder.dom.style.position = "absolute";
    placeholder.addCls(SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static.getCSSClass());
    return placeholder;
  }/*

  public static*/ function buildTargetPlaceholder$static(dragItem/*:Component*/)/*:Element*/ {
    var placeholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultTargetPlaceholderBuilder(dragItem);
    placeholder.dom.style.position = "absolute";
    placeholder.addCls(TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static.getCSSClass());
    return placeholder;
  }/*

  public static*/ function getUserItemsValueExpression$static()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var rawSavedSearches/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.getSavedSearches() || [];

      return rawSavedSearches.map(function (item/*:Object*/)/*:SavedSearchModel*/ {
        return new com.coremedia.cms.editor.sdk.desktop.SavedSearchModel(item);
      });
    });
  }/*

  public static*/ function getUserItemName$static(state/*:Object*/)/*:String*/ {
    return state['_name'];
  }/*

  public static*/ function buildDragGhost$static(dragItem/*:Component*/)/*:Element*/ {
    var ghost/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultGhostBuilder(dragItem);

    ghost.addCls(GHOST_MODIFIER_FAVORITES_TOOLBAR$static.getCSSClass());
    ghost.removeCls("x-btn-over");

    return ghost;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: FavoritesToolbarUtils$,
      statics: {
        GHOST_MODIFIER_FAVORITES_TOOLBAR: undefined,
        SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR: undefined,
        TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR: undefined,
        USER_ITEMS_DD_GROUP: "userItemsDD",
        initHandling: initHandling$static,
        dropHandler: dropHandler$static,
        buildSourcePlaceholder: buildSourcePlaceholder$static,
        buildTargetPlaceholder: buildTargetPlaceholder$static,
        getUserItemsValueExpression: getUserItemsValueExpression$static,
        getUserItemName: getUserItemName$static,
        buildDragGhost: buildDragGhost$static,
        __initStatics__: function() {
          GHOST_MODIFIER_FAVORITES_TOOLBAR$static_();
          SOURCE_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static_();
          TARGET_PLACEHOLDER_MODIFIER_FAVORITES_TOOLBAR$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.dom.Element",
        "Ext.menu.Menu",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.DraggableItemsUtils",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.MoveUserItemAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem",
        "com.coremedia.cms.editor.sdk.desktop.SavedSearchModel"
      ]
    };
});
