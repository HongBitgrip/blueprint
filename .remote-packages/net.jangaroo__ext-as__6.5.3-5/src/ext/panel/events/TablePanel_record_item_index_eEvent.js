Ext.define("ext.panel.events.TablePanel_record_item_index_eEvent", function(TablePanel_record_item_index_eEvent) {/*package ext.panel.events {
import ext.data.Model;
import ext.event.Event;
import ext.view.DataView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_record_item_index_eEvent extends FlExtEvent {
  /**
   * Fires before the click event on an item is processed. Return false to cancel the
   * default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemclick Original Ext JS documentation of 'beforeitemclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemClick
   * /
  public static const BEFORE_ITEM_CLICK:String = "onBeforeItemClick";
  /**
   * Fires before the contextmenu event on an item is processed. Return false to
   * cancel the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemcontextmenu Original Ext JS documentation of 'beforeitemcontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemContextMenu
   * /
  public static const BEFORE_ITEM_CONTEXT_MENU:String = "onBeforeItemContextMenu";
  /**
   * Fires before the dblclick event on an item is processed. Return false to cancel
   * the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemdblclick Original Ext JS documentation of 'beforeitemdblclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemDblclick
   * /
  public static const BEFORE_ITEM_DBLCLICK:String = "onBeforeItemDblclick";
  /**
   * Fires before the keypress event on an item before it is processed. Return false to cancel
   * the default action.
   * <p><b>Note:</b> beforeitemkeypress is ONLY triggered by characters, numbers, and some action keys (esc, tab, backspace, space).
   * If you need an event that is triggered by other keys, like function keys, arrow keys, or shift, ctrl, alt, use
   * beforeitemkeydown.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemkeypress Original Ext JS documentation of 'beforeitemkeypress'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemKeypress
   * /
  public static const BEFORE_ITEM_KEYPRESS:String = "onBeforeItemKeypress";
  /**
   * Fires before the keydown event on an item is processed. Return false to cancel
   * the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemkeydown Original Ext JS documentation of 'beforeitemkeydown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemKeyDown
   * /
  public static const BEFORE_ITEM_KEY_DOWN:String = "onBeforeItemKeyDown";
  /**
   * Fires before the keyup event on an item is processed. Return false to cancel the
   * default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemkeyup Original Ext JS documentation of 'beforeitemkeyup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemKeyUp
   * /
  public static const BEFORE_ITEM_KEY_UP:String = "onBeforeItemKeyUp";
  /**
   * Fires before the longpress event on an item is processed. Return false to
   * cancel the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemlongpress Original Ext JS documentation of 'beforeitemlongpress'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemLongPress
   * /
  public static const BEFORE_ITEM_LONG_PRESS:String = "onBeforeItemLongPress";
  /**
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemmousedown Original Ext JS documentation of 'beforeitemmousedown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemMouseDown
   * /
  public static const BEFORE_ITEM_MOUSE_DOWN:String = "onBeforeItemMouseDown";
  /**
   * Fires before the mouseenter event on an item is processed. Return false to cancel
   * the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemmouseenter Original Ext JS documentation of 'beforeitemmouseenter'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemMouseEnter
   * /
  public static const BEFORE_ITEM_MOUSE_ENTER:String = "onBeforeItemMouseEnter";
  /**
   * Fires before the mouseleave event on an item is processed. Return false to cancel
   * the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemmouseleave Original Ext JS documentation of 'beforeitemmouseleave'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemMouseLeave
   * /
  public static const BEFORE_ITEM_MOUSE_LEAVE:String = "onBeforeItemMouseLeave";
  /**
   * Fires before the mouseup event on an item is processed. Return false to cancel
   * the default action.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeitemmouseup Original Ext JS documentation of 'beforeitemmouseup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeItemMouseUp
   * /
  public static const BEFORE_ITEM_MOUSE_UP:String = "onBeforeItemMouseUp";
  /**
   * Fires when an item is clicked.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemclick Original Ext JS documentation of 'itemclick'
   * @see ext.panel.TablePanel
   * @eventType onItemClick
   * /
  public static const ITEM_CLICK:String = "onItemClick";
  /**
   * Fires when an item is right clicked.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemcontextmenu Original Ext JS documentation of 'itemcontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onItemContextMenu
   * /
  public static const ITEM_CONTEXT_MENU:String = "onItemContextMenu";
  /**
   * Fires when an item is double clicked.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemdblclick Original Ext JS documentation of 'itemdblclick'
   * @see ext.panel.TablePanel
   * @eventType onItemDblclick
   * /
  public static const ITEM_DBLCLICK:String = "onItemDblclick";
  /**
   * Fires when a key is pressed while an item is currently selected.
   * <p><b>Note:</b> itemkeypress is ONLY triggered by characters, numbers, and some action keys (esc, tab, backspace, space).
   * If you need an event that is triggered by other keys, like function keys, arrow keys, or shift, ctrl, alt, use
   * itemkeydown.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemkeypress Original Ext JS documentation of 'itemkeypress'
   * @see ext.panel.TablePanel
   * @eventType onItemKeypress
   * /
  public static const ITEM_KEYPRESS:String = "onItemKeypress";
  /**
   * Fires when a key is pressed down while an item is currently selected.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemkeydown Original Ext JS documentation of 'itemkeydown'
   * @see ext.panel.TablePanel
   * @eventType onItemKeyDown
   * /
  public static const ITEM_KEY_DOWN:String = "onItemKeyDown";
  /**
   * Fires when a key is released while an item is currently selected.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemkeyup Original Ext JS documentation of 'itemkeyup'
   * @see ext.panel.TablePanel
   * @eventType onItemKeyUp
   * /
  public static const ITEM_KEY_UP:String = "onItemKeyUp";
  /**
   * Fires on a longpress event on an item.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemlongpress Original Ext JS documentation of 'itemlongpress'
   * @see ext.panel.TablePanel
   * @eventType onItemLongPress
   * /
  public static const ITEM_LONG_PRESS:String = "onItemLongPress";
  /**
   * Fires when there is a mouse down on an item
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemmousedown Original Ext JS documentation of 'itemmousedown'
   * @see ext.panel.TablePanel
   * @eventType onItemMouseDown
   * /
  public static const ITEM_MOUSE_DOWN:String = "onItemMouseDown";
  /**
   * Fires when the mouse enters an item.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemmouseenter Original Ext JS documentation of 'itemmouseenter'
   * @see ext.panel.TablePanel
   * @eventType onItemMouseEnter
   * /
  public static const ITEM_MOUSE_ENTER:String = "onItemMouseEnter";
  /**
   * Fires when the mouse leaves an item.
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemmouseleave Original Ext JS documentation of 'itemmouseleave'
   * @see ext.panel.TablePanel
   * @eventType onItemMouseLeave
   * /
  public static const ITEM_MOUSE_LEAVE:String = "onItemMouseLeave";
  /**
   * Fires when there is a mouse up on an item
   * Fires before the mousedown event on an item is processed. Return false to cancel
   * the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-itemmouseup Original Ext JS documentation of 'itemmouseup'
   * @see ext.panel.TablePanel
   * @eventType onItemMouseUp
   * /
  public static const ITEM_MOUSE_UP:String = "onItemMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_record_item_index_eEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "item", "index", "e", "eOpts"]);}/*;

  public*/ function TablePanel_record_item_index_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$sgUh(type, arguments);
  }/*

  /**
   * The raw event object
   * /
  public native function get e():Event;

  /**
   * The item's index
   * /
  public native function get index():Number;

  /**
   * The item's element
   * /
  public native function get item():HTMLElement;

  /**
   * The record that belongs to the item
   * /
  public native function get record():Model;

  public native function get source():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_record_item_index_eEvent$,
      super$sgUh: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_CLICK: "onBeforeItemClick",
        BEFORE_ITEM_CONTEXT_MENU: "onBeforeItemContextMenu",
        BEFORE_ITEM_DBLCLICK: "onBeforeItemDblclick",
        BEFORE_ITEM_KEYPRESS: "onBeforeItemKeypress",
        BEFORE_ITEM_KEY_DOWN: "onBeforeItemKeyDown",
        BEFORE_ITEM_KEY_UP: "onBeforeItemKeyUp",
        BEFORE_ITEM_LONG_PRESS: "onBeforeItemLongPress",
        BEFORE_ITEM_MOUSE_DOWN: "onBeforeItemMouseDown",
        BEFORE_ITEM_MOUSE_ENTER: "onBeforeItemMouseEnter",
        BEFORE_ITEM_MOUSE_LEAVE: "onBeforeItemMouseLeave",
        BEFORE_ITEM_MOUSE_UP: "onBeforeItemMouseUp",
        ITEM_CLICK: "onItemClick",
        ITEM_CONTEXT_MENU: "onItemContextMenu",
        ITEM_DBLCLICK: "onItemDblclick",
        ITEM_KEYPRESS: "onItemKeypress",
        ITEM_KEY_DOWN: "onItemKeyDown",
        ITEM_KEY_UP: "onItemKeyUp",
        ITEM_LONG_PRESS: "onItemLongPress",
        ITEM_MOUSE_DOWN: "onItemMouseDown",
        ITEM_MOUSE_ENTER: "onItemMouseEnter",
        ITEM_MOUSE_LEAVE: "onItemMouseLeave",
        ITEM_MOUSE_UP: "onItemMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
