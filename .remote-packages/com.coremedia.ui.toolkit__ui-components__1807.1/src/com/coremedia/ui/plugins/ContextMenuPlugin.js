Ext.define("com.coremedia.ui.plugins.ContextMenuPlugin", function(ContextMenuPlugin) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.components.IFrameMgr;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.AsyncObserver;
import com.coremedia.ui.util.ContextMenuEventAdapter;
import com.coremedia.ui.util.ContextMenuUtil;

import ext.Action;
import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.data.Model;
import ext.dom.Element;
import ext.event.Event;
import ext.menu.Menu;
import ext.panel.TablePanel;
import ext.plugin.AbstractPlugin;
import ext.view.DataView;

import js.HTMLElement;
import js.Window;

/**
 * A plugin that adds a context menu to any component.
 * Also, double-click events invoke the action of the first enabled context menu item, unless the
 * config option <code>disableDoubleClick</code> is set to <code>true</code>.
 * This makes sense if none of the context menu actions is a natural default action.
 * /
[PublicApi]
public class ContextMenuPlugin extends AbstractPlugin {

  private static const*/var SPECIAL_CELL_SELECTOR$static/*:String*/;/* =*/function SPECIAL_CELL_SELECTOR$static_(){SPECIAL_CELL_SELECTOR$static=( "." + Ext.baseCSSPrefix + "grid-cell-special");};/*

  private var _theMenu:Menu;

  /**
   * The context menu to use.
   * /
  [Bindable]
  public var contextMenu:Menu;

  /**
   * If this option is set to true (default: false), no action will be triggered by this plugin on
   * double-click events.
   * /
  [Bindable]
  public var disableDoubleClick:Boolean = false;

  /**
   * Optional predicate to control the execution of the ouble-click event.<br>
   * If set, the double-click event will executed iff the predicate returns true.
   * /
  [Bindable]
  public var dblClickPrecondition:Function;

  private var component:Component;
  private var contextMenuEventAdapter:ContextMenuEventAdapter;


  public*/ function ContextMenuPlugin$(config/*:ContextMenuPlugin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"contextMenu" , AS3.getBindable(config,"contextMenu"));
    AS3.setBindable(this,"disableDoubleClick" , AS3.getBindable(config,"disableDoubleClick"));
    AS3.setBindable(this,"dblClickPrecondition" , AS3.getBindable(config,"dblClickPrecondition"));
    this.super$avrl(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    if (!AS3.getBindable(this,"contextMenu")) {
      return;
    }
    this.component$avrl = component;

    // create menu early to allow IoC to take place
    component.on("render", function ()/*:void*/ {
      this$.theMenu$avrl;
    });

    this.contextMenuEventAdapter$avrl = new com.coremedia.ui.util.ContextMenuEventAdapter(component);
    this.contextMenuEventAdapter$avrl.addListener(com.coremedia.ui.util.ContextMenuEventAdapter.EVENT_NAME,AS3.bind( this,"doHandleEvent$avrl"));
    if (!AS3.getBindable(this,"disableDoubleClick")) {
      if (AS3.is(component,  Ext.panel.Table)) {
        component.addListener("celldblclick",AS3.bind( this,"doHandleCellEvent$avrl"));
        component.addListener("cellkeydown",AS3.bind( this,"doHandleCellEvent$avrl"));
      } else if (AS3.is(component,  Ext.view.View)) {
        component.addListener("itemdblclick",AS3.bind( this,"doHandleItemDoubleClickEvent$avrl"));
        component.addListener("itemkeydown",AS3.bind( this,"doHandleItemDoubleClickEvent$avrl"));
      } else {
        component.addListener("dblclick",AS3.bind( this,"doHandleDoubleClickEvent$avrl"));
      }
    }
    component.addListener("removed",AS3.bind( this,"remove$avrl"));
  }/*

  private static*/ function findContextMenuPlugin$static(component/*:Component*/)/*:ContextMenuPlugin*/ {
    var plugins/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(component.plugins);
    for/* each*/ (var $1=0;$1</* in*/ plugins.length;++$1) {var plugin/*:Plugin*/ =plugins[$1];
      var contextMenuPlugin/*:ContextMenuPlugin*/ =AS3.as( plugin,  ContextMenuPlugin);
      if (contextMenuPlugin) {
        return contextMenuPlugin;
      }
    }

    return null;
  }/*

  /**
   * @private
   * /
  public static*/ function findMenu$static(component/*:Component*/)/*:Menu*/ {
    var contextMenuPlugin/*:ContextMenuPlugin*/ = findContextMenuPlugin$static(component);
    return contextMenuPlugin && contextMenuPlugin.theMenu$avrl;
  }/*

  /**
   * @private
   * /
  public static*/ function handleEvent$static(component/*:Component*/, event/*:Event*/)/*:Boolean*/ {
    var contextMenuPlugin/*:ContextMenuPlugin*/ = findContextMenuPlugin$static(component);
    return ! !contextMenuPlugin && contextMenuPlugin.doHandleEvent$avrl(event);
  }/*

  /**
   * The arguments for double click events fired by ExtJS may vary.
   * /
  private*/ function doHandleDoubleClickEvent(arg1/*:**/, arg2/*:**/, arg3/*:**/, arg4/*:**/)/*:Boolean*/ {
    //type check does not work for linklists, so we check a method instead
    //TODO: EXT6_API
    if (arg1['preventDefault']) {
      return this.doHandleEvent$avrl(arg1);
    }
    //TODO: EXT6_API
    if (arg2['preventDefault']) {
      return this.doHandleEvent$avrl(arg2);
    }

    return this.doHandleEvent$avrl(arg4);
  }/*

  private*/ function doHandleCellEvent(component/*:Component*/, cellItem/*:HTMLElement*/, cellIndex/*:Number*/, record/*:Model*/, rowItem/*:HTMLElement*/, rowIndex/*:Number*/, event/*:Event*/)/*:void*/ {
    var cellElement/*:Element*/ = Ext.fly(cellItem);
    if (cellElement["is"](SPECIAL_CELL_SELECTOR$static) || cellElement.up(SPECIAL_CELL_SELECTOR$static)) {
      return;
    }
    this.doHandleItemDoubleClickEvent$avrl(component, record, rowItem, rowIndex, event);
  }/*

  private*/ function doHandleItemDoubleClickEvent(component/*:Component*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, event/*:Event*/)/*:void*/ {
    if (event.type === "dblclick" ||
            (event.type === "keydown" && isEnter$static(event.getKey()) && event.target.tagName !== 'INPUT')) {
      this.doHandleEvent$avrl(event);
    }
  }/*

  private static*/ function isEnter$static(key/*:Number*/)/*:Boolean*/ {
    return key === Ext.event.Event.ENTER || key === Ext.event.Event.SPACE;
  }/*

  private*/ function doHandleEvent(event/*:Event*/)/*:Boolean*/ {var this$=this;
    // because the ContextMenuEventAdapter doesn't work for thumbnails, we prevent the default again
    //TODO: EXT6_API
    if (event['preventDefault']) {
      event.preventDefault();
    }

    var handler/*:Function*/ = null;
    if (event.type === com.coremedia.ui.util.ContextMenuEventAdapter.EVENT_NAME) {
      var xy/*:Array*/ = getXY$static(event);
      handler = function ()/*:void*/ {
        this$.handleContextMenu$avrl(xy);
      };
    } else if (!AS3.getBindable(this,"disableDoubleClick")
            && (event.type === "dblclick" || event.type === "keydown")
            && (!AS3.getBindable(this,"dblClickPrecondition") || (AS3.is(AS3.getBindable(this,"dblClickPrecondition"),  Function) && AS3.getBindable(this,"dblClickPrecondition")() === true))) {
      handler =AS3.bind( this,"handleDoubleClick$avrl");
    }
    if (handler) {
      // invoke handling the event later to give selection time to propagate to actions:
      com.coremedia.ui.util.AsyncObserver.completeEvents(handler);
      return false;
    }
    return true;
  }/*

  private*/ function remove()/*:void*/ {
    this.contextMenuEventAdapter$avrl.removeListener(com.coremedia.ui.util.ContextMenuEventAdapter.EVENT_NAME,AS3.bind( this,"doHandleEvent$avrl"));
    if (!AS3.getBindable(this,"disableDoubleClick")) {
      this.component$avrl.removeListener("dblclick",AS3.bind( this,"doHandleEvent$avrl"));
    }
    Ext.destroy(this._theMenu$avrl);
    this._theMenu$avrl = null;
  }/*

  private*/ function handleContextMenu(xy/*:Array*/)/*:void*/ {
    // All shims on:
    com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
    this.theMenu$avrl.showAt(xy[0], xy[1]);
  }/*

  private static*/ function getXY$static(event/*:Event*/)/*:Array*/ {
    var xy/*:Array*/ = event.getXY();
    var target/*:HTMLElement*/ = event.getTarget();
    // Calculate IFrame offset
    var parentWindow/*:Window*/ = getParentWindow$static(target);
    if (parentWindow.frameElement) {
      var frame/*:Element*/ = Ext.get(parentWindow.frameElement);
      xy[0] += frame.getX() - (parentWindow.scrollX || parentWindow.pageXOffset || 0);
      xy[1] += frame.getY() - (parentWindow.scrollY || parentWindow.pageYOffset || 0);
    }
    // Set coords to 0 if negative. This happens in some test setups.
    xy[0] = Math.max(xy[0], 0);
    xy[1] = Math.max(xy[1], 0);
    return xy;
  }/*

  private static*/ function getParentWindow$static(target/*:HTMLElement*/)/*:Window*/ {
    return target.ownerDocument.defaultView ? target.ownerDocument.defaultView : target.ownerDocument.parentWindow;
  }/*

  private*/ function handleDoubleClick()/*:void*/ {
    var menuItem/*:Component*/ = AS3.cast(Ext.Component,this.theMenu$avrl.itemCollection.findBy(function (component/*:Component*/)/*:Boolean*/ {
      return AS3.is( component.baseAction,  Ext.Action) && !component.hidden && !component.baseAction.isHidden();
    }));

    if (menuItem && !menuItem.baseAction.isDisabled()) {
      menuItem.baseAction.execute();
    }
  }/*

  private*/ function  get$theMenu()/*:Menu*/ {
    if (!this._theMenu$avrl) {
      //data binding: use the component's view model if available
      //TODO: EXT6_API: Why not just .viewModel?
      if (!AS3.getBindable(this,"contextMenu")['viewModel'] && this.component$avrl.lookupViewModel()) {
        AS3.getBindable(this,"contextMenu")['viewModel'] = this.component$avrl.lookupViewModel();
      }
      this._theMenu$avrl = com.coremedia.ui.util.ContextMenuUtil.createContextMenu(AS3.getBindable(this,"contextMenu"), this.component$avrl);
      this._theMenu$avrl.on('hide', function ()/*:void*/ {
        // Always switch off all shims when menu is hidden:
        com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
      });
    }
    return this._theMenu$avrl;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      _theMenu$avrl: null,
      component$avrl: null,
      contextMenuEventAdapter$avrl: null,
      constructor: ContextMenuPlugin$,
      super$avrl: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      doHandleDoubleClickEvent$avrl: doHandleDoubleClickEvent,
      doHandleCellEvent$avrl: doHandleCellEvent,
      doHandleItemDoubleClickEvent$avrl: doHandleItemDoubleClickEvent,
      doHandleEvent$avrl: doHandleEvent,
      remove$avrl: remove,
      handleContextMenu$avrl: handleContextMenu,
      handleDoubleClick$avrl: handleDoubleClick,
      config: {
        contextMenu: null,
        disableDoubleClick: false,
        dblClickPrecondition: null
      },
      statics: {
        SPECIAL_CELL_SELECTOR: undefined,
        findMenu: findMenu$static,
        handleEvent: handleEvent$static,
        __initStatics__: function() {
          SPECIAL_CELL_SELECTOR$static_();
        }
      },
      __accessors__: {theMenu$avrl: {get: get$theMenu}},
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.Component",
        "Ext.event.Event",
        "Ext.panel.Table",
        "Ext.plugin.Abstract",
        "Ext.view.View",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.AsyncObserver"
      ],
      uses: [
        "com.coremedia.ui.components.IFrameMgr",
        "com.coremedia.ui.util.ContextMenuEventAdapter",
        "com.coremedia.ui.util.ContextMenuUtil"
      ]
    };
});
