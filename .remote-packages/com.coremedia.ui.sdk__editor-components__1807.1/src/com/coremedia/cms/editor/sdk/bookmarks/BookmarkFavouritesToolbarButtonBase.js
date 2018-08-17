Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase", function(BookmarkFavouritesToolbarButtonBase) {/*package com.coremedia.cms.editor.sdk.bookmarks {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ContextMenuUtil;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;
import ext.menu.Item;
import ext.menu.Menu;

import js.Element;
import js.HTMLElement;

public class BookmarkFavouritesToolbarButtonBase extends Button {

  private static const*/var CM_ROW_INSERT_ABOVE_CLS$static/*:String*/ = 'cm-row-insert-above';/*
  private static const*/var CM_ROW_INSERT_BELOW_CLS$static/*:String*/ = 'cm-row-insert-below';/*

  private var selectedBookmarkValueExpression:ValueExpression;
  private var preventHideMenu:ValueExpression;
  private var preventHideMenuFlag:Boolean = false;
  private var dropTarget:DropTarget;
  private var currentOverBookmark:BookmarkButtonMenuItem;
  private var contextMenu:Menu;

  public*/ function BookmarkFavouritesToolbarButtonBase$(config/*:BookmarkFavouritesToolbarButton = null*/) {if(arguments.length<=0)config=null;
    this.super$s6jJ(config);
    this.addListener('render',AS3.bind( this,"initDropTarget$s6jJ"));
    if (AS3.getBindable(config,"contextMenu")) {
      var contextMenuConfig/*:BookmarkContextMenu*/ = AS3.getBindable(config,"contextMenu");
      AS3.setBindable(contextMenuConfig,"selectedBookmarkVE" , AS3.getBindable(contextMenuConfig,"selectedBookmarkVE") ? AS3.getBindable(contextMenuConfig,"selectedBookmarkVE") : this.getSelectedBookmarkValueExpression$s6jJ());
      AS3.setBindable(contextMenuConfig,"preventHideMenuVE" , AS3.getBindable(contextMenuConfig,"preventHideMenuVE") ? AS3.getBindable(contextMenuConfig,"preventHideMenuVE") : this.getPreventHideMenuValueExpression$s6jJ());
      this.contextMenu$s6jJ = com.coremedia.ui.util.ContextMenuUtil.createContextMenu(contextMenuConfig, this);
      this.addContextMenuListeners$s6jJ();
    }
  }/*

  private*/ function addContextMenuListeners()/*:void*/ {var this$=this;
    AS3.getBindable(this,"menu","DUMMY").on('afterrender', function ()/*:void*/ {
      //listen on context clicks on the menu
      AS3.getBindable(this$,"menu","DUMMY").getEl().addListener("contextmenu",AS3.bind( this$,"onContextMenu$s6jJ"));
    });

    /*
     * We use the beforehide event here to prevent the menu from closing.
     * Unfortunately using the getPreventHideMenuValueExpression results in the problem
     * that for the first context menu click, the menu still closes.
     * That's why we use the duplicate 'preventHideMenuFlag' flag here.
     */
    AS3.getBindable(this,"menu","DUMMY").addListener("beforehide", function ()/*:Boolean*/ {
      return !this$.preventHideMenuFlag$s6jJ;
    });

    /*
     * Listens on menu clicks of the contextmenu: We have to intercept this click
     * to prevent the menu from closing, depending on the action that was selected.
     */
    this.contextMenu$s6jJ.addListener("click", function (ctxMenu/*:Menu*/, item/*:Item*/, event/*:Event*/)/*:Boolean*/ {
      if (item.getItemId() === com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu.RENAME_BOOKMARK) {
        this$.preventHideMenuFlag$s6jJ = true;
        //additionally, we mask the menu until the renaming is completed
        AS3.getBindable(this$,"menu","DUMMY").getEl().mask();
      }

      if (item.getItemId() === com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu.REMOVE_BOOKMARK) {
        this$.preventHideMenuFlag$s6jJ = true;
      }
    });

    this.contextMenu$s6jJ.addListener("hide", function ()/*:Boolean*/ {
      this$.getPreventHideMenuValueExpression$s6jJ().setValue(this$.preventHideMenuFlag$s6jJ);
      this$.preventHideMenuFlag$s6jJ = false;
    });

    /*
     * When the context menu action execution is finished, the action has to take care that
     * it is now allowed that the menu is closed.
     */
    this.getPreventHideMenuValueExpression$s6jJ().addChangeListener(function ()/*:void*/ {
      //update the state of the duplicate preventHideMenuFlag flag
      this$.preventHideMenuFlag$s6jJ = this$.getPreventHideMenuValueExpression$s6jJ().getValue();
      AS3.getBindable(this$,"menu","DUMMY").getEl().unmask();
    });
  }/*

  /**
   * Only executed for the first context click. This will force the menu to stay expanded.
   * /
  private*/ function onContextMenu(event/*:Event*/, target/*:HTMLElement*/)/*:void*/ {
    if (!AS3.getBindable(this,"menu","DUMMY").getEl().isMasked()) {
      this.preventHideMenuFlag$s6jJ = true;
      this.getPreventHideMenuValueExpression$s6jJ().setValue(true);
      event.preventDefault();
      this.selectedMenuItemChanged$s6jJ(event, target);
      this.contextMenu$s6jJ.showAt(event.getXY());
    }
  }/*

  private*/ function selectedMenuItemChanged(event/*:Event*/, target/*:HTMLElement*/)/*:void*/ {
    event.preventDefault();
    var clickedItem/*:BookmarkButtonMenuItem*/ =AS3.as( findComponentUpward$static(target, com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem.xtype),  com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem);
    var bookmark/*:Bookmark*/ = clickedItem ? clickedItem.getBookmark() : undefined;
    if (bookmark) {
      this.getSelectedBookmarkValueExpression$s6jJ().setValue(bookmark);
    }
  }/*

  private static*/ function findComponentUpward$static(el/*:Element*/, xtype/*:String*/)/*:Component*/ {
    if (!el) {
      return undefined;
    }
    var comp/*:Component*/ = Ext.getCmp(el.id);
    if (comp && comp.isXType(xtype)) {
      return comp;
    }
    return findComponentUpward$static(el.parentNode, xtype);
  }/*

  private*/ function getPreventHideMenuValueExpression()/*:ValueExpression*/ {
    if (!this.preventHideMenu$s6jJ) {
      this.preventHideMenu$s6jJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.preventHideMenu$s6jJ;
  }/*

  private*/ function getSelectedBookmarkValueExpression()/*:ValueExpression*/ {
    if (!this.selectedBookmarkValueExpression$s6jJ) {
      this.selectedBookmarkValueExpression$s6jJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.selectedBookmarkValueExpression$s6jJ;
  }/*

  protected static*/ function addDummyMenuItemWhenEmpty$static(menu/*:Menu*/, bookmarks/*:ValueExpression*/)/*:void*/ {
    if (!bookmarks.getValue() || (AS3.as(bookmarks.getValue(),  Array)).length === 0) {
      var menuItem/*:Item*/ = AS3.cast(Ext.menu.Item,{});
      menuItem.baseAction = new com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction(AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction,{}));
      menu.add(menuItem);
    }
  }/*

  private*/ function initDropTarget()/*:void*/ {var this$=this;
    var dropTargetConfig/*:DropTarget*/ = AS3.cast(Ext.dd.DropTarget,{});
    dropTargetConfig.ddGroup = 'ContentLinkDD';
    dropTargetConfig.notifyEnter =AS3.bind( this,"notifyEnter$s6jJ");
    dropTargetConfig.notifyOver =AS3.bind( this,"notifyOver$s6jJ");
    dropTargetConfig.notifyDrop =AS3.bind( this,"notifyDrop$s6jJ");
    dropTargetConfig.notifyOut =AS3.bind( this,"notifyOut$s6jJ");
    AS3.getBindable(this,"menu","DUMMY").on('afterrender', function ()/*:void*/ {
      this$.dropTarget$s6jJ = new Ext.dd.DropTarget(AS3.getBindable(this$,"menu","DUMMY").getEl(),
              dropTargetConfig);
    });
  }/*

  private*/ function notifyEnter()/*:void*/ {
    // While dragging, prevent focus/active styles on menu items
    AS3.getBindable(this,"menu","DUMMY").itemCollection.each(function (item/*:Item*/)/*:void*/ {
      item.removeCls("x-menu-item-active");
      item["onFocus"] = Ext.emptyFn;
    });
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function notifyOver(d/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var eventPos/*:Number*/ = this.getDragDropOverPosition$s6jJ(e);

    this.highlightInsertionPoint$s6jJ(eventPos);

    return this.dropTarget$s6jJ.dropAllowed;
  }/*

  private*/ function highlightInsertionPoint(eventPos/*:Number*/)/*:void*/ {
    this.clearDragDropStyles$s6jJ();

    this.computeOverBookmark$s6jJ(eventPos);

    if (this.currentOverBookmark$s6jJ) {
      var insertBelow/*:Boolean*/ = eventPos === AS3.getBindable(this,"menu","DUMMY").itemCollection.getCount();
      if (!insertBelow) {
        this.currentOverBookmark$s6jJ.addCls(CM_ROW_INSERT_ABOVE_CLS$static);
      } else {
        this.currentOverBookmark$s6jJ.addCls(CM_ROW_INSERT_BELOW_CLS$static);
      }
    }
  }/*

  private*/ function clearDragDropStyles()/*:void*/ {
    if (this.currentOverBookmark$s6jJ) {
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_ABOVE_CLS$static);
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_BELOW_CLS$static);
    }
  }/*

  private*/ function computeOverBookmark(eventPos/*:Number*/)/*:void*/ {
    var bookmark/*:BookmarkButtonMenuItem*/;

    if (eventPos === AS3.getBindable(this,"menu","DUMMY").itemCollection.getCount()) {
      bookmark =AS3.as( AS3.getBindable(this,"menu","DUMMY").itemCollection.get(eventPos - 1),  com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem);
    } else {
      bookmark =AS3.as( AS3.getBindable(this,"menu","DUMMY").itemCollection.get(eventPos),  com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem);
    }

    this.currentOverBookmark$s6jJ = bookmark ? bookmark : undefined;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function notifyDrop(d/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {var this$=this;
    this.restoreItemFocus$s6jJ();

    var dropPosition/*:Number*/ = this.getDragDropOverPosition$s6jJ(e);

    // After drop with re-ordering effect, do not close the bookmark menu.
    var draggedBookmarkItemIndex/*:int*/ = AS3.getBindable(this,"menu","DUMMY").itemCollection.indexOf(data.draggedItem);
    if (dropPosition - draggedBookmarkItemIndex !== 1
            && dropPosition - draggedBookmarkItemIndex !== 0) {
      this.preventHideMenuFlag$s6jJ = true;

      // But allow closing as soon as the items were reordered.
      AS3.getBindable(this,"menu","DUMMY").on("add", function ()/*:void*/ {
        this$.preventHideMenuFlag$s6jJ = false;
      }, null, {single:true});
    }

    if (this.currentOverBookmark$s6jJ) {
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_ABOVE_CLS$static);
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_BELOW_CLS$static);
      this.currentOverBookmark$s6jJ = null;
    }

    return com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().insertAtOrMoveTo(dropPosition, data.contents[0]);
  }/*

  private*/ function getDragDropOverPosition(e/*:Event*/)/*:Number*/ {
    var rowHeight/*:Number*/ = AS3.getBindable(this,"menu","DUMMY").getHeight() / AS3.getBindable(this,"menu","DUMMY").itemCollection.getCount();
    /* get the current position of the mouse pointer wrt to the menu entries:
     distance of the mouse pointer from the top of the menu, divided by the height of one menu entry */
    var eventPos/*:Number*/ = Math.round((e.getY() - AS3.getBindable(this,"menu","DUMMY").getEl().getY()) / rowHeight);
    return eventPos;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function notifyOut(d/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.restoreItemFocus$s6jJ();

    if (this.currentOverBookmark$s6jJ) {
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_ABOVE_CLS$static);
      this.currentOverBookmark$s6jJ.removeCls(CM_ROW_INSERT_BELOW_CLS$static);
    }
  }/*

  private*/ function restoreItemFocus()/*:void*/ {
    AS3.getBindable(this,"menu","DUMMY").itemCollection.each(function (item/*:BookmarkButtonMenuItem*/)/*:void*/ {
      item["onFocus"] = Ext.menu.Item["prototype"].onFocus;
    });
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.dropTarget$s6jJ && this.dropTarget$s6jJ.unreg();
    Ext.button.Button.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      selectedBookmarkValueExpression$s6jJ: null,
      preventHideMenu$s6jJ: null,
      preventHideMenuFlag$s6jJ: false,
      dropTarget$s6jJ: null,
      currentOverBookmark$s6jJ: null,
      contextMenu$s6jJ: null,
      constructor: BookmarkFavouritesToolbarButtonBase$,
      super$s6jJ: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      addContextMenuListeners$s6jJ: addContextMenuListeners,
      onContextMenu$s6jJ: onContextMenu,
      selectedMenuItemChanged$s6jJ: selectedMenuItemChanged,
      getPreventHideMenuValueExpression$s6jJ: getPreventHideMenuValueExpression,
      getSelectedBookmarkValueExpression$s6jJ: getSelectedBookmarkValueExpression,
      initDropTarget$s6jJ: initDropTarget,
      notifyEnter$s6jJ: notifyEnter,
      notifyOver$s6jJ: notifyOver,
      highlightInsertionPoint$s6jJ: highlightInsertionPoint,
      clearDragDropStyles$s6jJ: clearDragDropStyles,
      computeOverBookmark$s6jJ: computeOverBookmark,
      notifyDrop$s6jJ: notifyDrop,
      getDragDropOverPosition$s6jJ: getDragDropOverPosition,
      notifyOut$s6jJ: notifyOut,
      restoreItemFocus$s6jJ: restoreItemFocus,
      beforeDestroy: beforeDestroy,
      statics: {addDummyMenuItemWhenEmpty: addDummyMenuItemWhenEmpty$static},
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.dd.DropTarget",
        "Ext.menu.Item",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ContextMenuUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager",
        "com.coremedia.cms.editor.sdk.bookmarks.OpenBookmarkAction"
      ]
    };
});
