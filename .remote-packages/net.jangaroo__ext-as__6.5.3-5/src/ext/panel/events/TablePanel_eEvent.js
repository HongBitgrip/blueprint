Ext.define("ext.panel.events.TablePanel_eEvent", function(TablePanel_eEvent) {/*package ext.panel.events {
import ext.event.Event;
import ext.view.DataView;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_eEvent extends FlExtEvent {
  /**
   * Fires before the click event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainerclick Original Ext JS documentation of 'beforecontainerclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerClick
   * /
  public static const BEFORE_CONTAINER_CLICK:String = "onBeforeContainerClick";
  /**
   * Fires before the contextmenu event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainercontextmenu Original Ext JS documentation of 'beforecontainercontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerContextMenu
   * /
  public static const BEFORE_CONTAINER_CONTEXT_MENU:String = "onBeforeContainerContextMenu";
  /**
   * Fires before the dblclick event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainerdblclick Original Ext JS documentation of 'beforecontainerdblclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerDblclick
   * /
  public static const BEFORE_CONTAINER_DBLCLICK:String = "onBeforeContainerDblclick";
  /**
   * Fires before the keypress event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainerkeypress Original Ext JS documentation of 'beforecontainerkeypress'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerKeypress
   * /
  public static const BEFORE_CONTAINER_KEYPRESS:String = "onBeforeContainerKeypress";
  /**
   * Fires before the keydown event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainerkeydown Original Ext JS documentation of 'beforecontainerkeydown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerKeyDown
   * /
  public static const BEFORE_CONTAINER_KEY_DOWN:String = "onBeforeContainerKeyDown";
  /**
   * Fires before the keyup event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainerkeyup Original Ext JS documentation of 'beforecontainerkeyup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerKeyUp
   * /
  public static const BEFORE_CONTAINER_KEY_UP:String = "onBeforeContainerKeyUp";
  /**
   * Fires before the mousedown event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainermousedown Original Ext JS documentation of 'beforecontainermousedown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerMouseDown
   * /
  public static const BEFORE_CONTAINER_MOUSE_DOWN:String = "onBeforeContainerMouseDown";
  /**
   * Fires before the mouseout event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainermouseout Original Ext JS documentation of 'beforecontainermouseout'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerMouseOut
   * /
  public static const BEFORE_CONTAINER_MOUSE_OUT:String = "onBeforeContainerMouseOut";
  /**
   * Fires before the mouseover event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainermouseover Original Ext JS documentation of 'beforecontainermouseover'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerMouseOver
   * /
  public static const BEFORE_CONTAINER_MOUSE_OVER:String = "onBeforeContainerMouseOver";
  /**
   * Fires before the mouseup event on the container is processed. Returns false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforecontainermouseup Original Ext JS documentation of 'beforecontainermouseup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeContainerMouseUp
   * /
  public static const BEFORE_CONTAINER_MOUSE_UP:String = "onBeforeContainerMouseUp";
  /**
   * Fires when the container is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containerclick Original Ext JS documentation of 'containerclick'
   * @see ext.panel.TablePanel
   * @eventType onContainerClick
   * /
  public static const CONTAINER_CLICK:String = "onContainerClick";
  /**
   * Fires when the container is right clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containercontextmenu Original Ext JS documentation of 'containercontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onContainerContextMenu
   * /
  public static const CONTAINER_CONTEXT_MENU:String = "onContainerContextMenu";
  /**
   * Fires when the container is double clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containerdblclick Original Ext JS documentation of 'containerdblclick'
   * @see ext.panel.TablePanel
   * @eventType onContainerDblclick
   * /
  public static const CONTAINER_DBLCLICK:String = "onContainerDblclick";
  /**
   * Fires when a key is pressed while the container is focused, and no item is currently selected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containerkeypress Original Ext JS documentation of 'containerkeypress'
   * @see ext.panel.TablePanel
   * @eventType onContainerKeypress
   * /
  public static const CONTAINER_KEYPRESS:String = "onContainerKeypress";
  /**
   * Fires when a key is pressed down while the container is focused, and no item is currently selected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containerkeydown Original Ext JS documentation of 'containerkeydown'
   * @see ext.panel.TablePanel
   * @eventType onContainerKeyDown
   * /
  public static const CONTAINER_KEY_DOWN:String = "onContainerKeyDown";
  /**
   * Fires when a key is released while the container is focused, and no item is currently selected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containerkeyup Original Ext JS documentation of 'containerkeyup'
   * @see ext.panel.TablePanel
   * @eventType onContainerKeyUp
   * /
  public static const CONTAINER_KEY_UP:String = "onContainerKeyUp";
  /**
   * Fires when there is a mousedown on the container
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containermousedown Original Ext JS documentation of 'containermousedown'
   * @see ext.panel.TablePanel
   * @eventType onContainerMouseDown
   * /
  public static const CONTAINER_MOUSE_DOWN:String = "onContainerMouseDown";
  /**
   * Fires when you move the mouse out of the container.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containermouseout Original Ext JS documentation of 'containermouseout'
   * @see ext.panel.TablePanel
   * @eventType onContainerMouseOut
   * /
  public static const CONTAINER_MOUSE_OUT:String = "onContainerMouseOut";
  /**
   * Fires when you move the mouse over the container.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containermouseover Original Ext JS documentation of 'containermouseover'
   * @see ext.panel.TablePanel
   * @eventType onContainerMouseOver
   * /
  public static const CONTAINER_MOUSE_OVER:String = "onContainerMouseOver";
  /**
   * Fires when there is a mouseup on the container
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-containermouseup Original Ext JS documentation of 'containermouseup'
   * @see ext.panel.TablePanel
   * @eventType onContainerMouseUp
   * /
  public static const CONTAINER_MOUSE_UP:String = "onContainerMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function TablePanel_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$A7yW(type, arguments);
  }/*

  /**
   * The raw event object
   * /
  public native function get e():Event;

  public native function get source():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_eEvent$,
      super$A7yW: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CONTAINER_CLICK: "onBeforeContainerClick",
        BEFORE_CONTAINER_CONTEXT_MENU: "onBeforeContainerContextMenu",
        BEFORE_CONTAINER_DBLCLICK: "onBeforeContainerDblclick",
        BEFORE_CONTAINER_KEYPRESS: "onBeforeContainerKeypress",
        BEFORE_CONTAINER_KEY_DOWN: "onBeforeContainerKeyDown",
        BEFORE_CONTAINER_KEY_UP: "onBeforeContainerKeyUp",
        BEFORE_CONTAINER_MOUSE_DOWN: "onBeforeContainerMouseDown",
        BEFORE_CONTAINER_MOUSE_OUT: "onBeforeContainerMouseOut",
        BEFORE_CONTAINER_MOUSE_OVER: "onBeforeContainerMouseOver",
        BEFORE_CONTAINER_MOUSE_UP: "onBeforeContainerMouseUp",
        CONTAINER_CLICK: "onContainerClick",
        CONTAINER_CONTEXT_MENU: "onContainerContextMenu",
        CONTAINER_DBLCLICK: "onContainerDblclick",
        CONTAINER_KEYPRESS: "onContainerKeypress",
        CONTAINER_KEY_DOWN: "onContainerKeyDown",
        CONTAINER_KEY_UP: "onContainerKeyUp",
        CONTAINER_MOUSE_DOWN: "onContainerMouseDown",
        CONTAINER_MOUSE_OUT: "onContainerMouseOut",
        CONTAINER_MOUSE_OVER: "onContainerMouseOver",
        CONTAINER_MOUSE_UP: "onContainerMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
