Ext.define("ext.panel.events.TablePanel_view_rowBodyEl_eEvent", function(TablePanel_view_rowBodyEl_eEvent) {/*package ext.panel.events {
import ext.event.Event;
import ext.view.DataView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_view_rowBodyEl_eEvent extends FlExtEvent {
  /**
   * Fires before the click event on a row body element is processed. Return false to
   * cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodyclick Original Ext JS documentation of 'beforerowbodyclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyClick
   * /
  public static const BEFORE_ROW_BODY_CLICK:String = "onBeforeRowBodyClick";
  /**
   * Fires before the contextmenu event on a row body element is processed. Return
   * false to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodycontextmenu Original Ext JS documentation of 'beforerowbodycontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyContextMenu
   * /
  public static const BEFORE_ROW_BODY_CONTEXT_MENU:String = "onBeforeRowBodyContextMenu";
  /**
   * Fires before the dblclick event on a row body element is processed. Return false
   * to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodydblclick Original Ext JS documentation of 'beforerowbodydblclick'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyDblclick
   * /
  public static const BEFORE_ROW_BODY_DBLCLICK:String = "onBeforeRowBodyDblclick";
  /**
   * Fires before the keypress event on a row body element is processed. Return false
   * to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodykeypress Original Ext JS documentation of 'beforerowbodykeypress'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyKeypress
   * /
  public static const BEFORE_ROW_BODY_KEYPRESS:String = "onBeforeRowBodyKeypress";
  /**
   * Fires before the keydown event on a row body element is processed. Return false
   * to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodykeydown Original Ext JS documentation of 'beforerowbodykeydown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyKeyDown
   * /
  public static const BEFORE_ROW_BODY_KEY_DOWN:String = "onBeforeRowBodyKeyDown";
  /**
   * Fires before the keyup event on a row body element is processed. Return false to
   * cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodykeyup Original Ext JS documentation of 'beforerowbodykeyup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyKeyUp
   * /
  public static const BEFORE_ROW_BODY_KEY_UP:String = "onBeforeRowBodyKeyUp";
  /**
   * Fires before the longpress event on a row body element is processed. Return
   * false to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodylongpress Original Ext JS documentation of 'beforerowbodylongpress'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyLongPress
   * /
  public static const BEFORE_ROW_BODY_LONG_PRESS:String = "onBeforeRowBodyLongPress";
  /**
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodymousedown Original Ext JS documentation of 'beforerowbodymousedown'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyMouseDown
   * /
  public static const BEFORE_ROW_BODY_MOUSE_DOWN:String = "onBeforeRowBodyMouseDown";
  /**
   * Fires before the mouseup event on a row body element is processed. Return false
   * to cancel the default action.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforerowbodymouseup Original Ext JS documentation of 'beforerowbodymouseup'
   * @see ext.panel.TablePanel
   * @eventType onBeforeRowBodyMouseUp
   * /
  public static const BEFORE_ROW_BODY_MOUSE_UP:String = "onBeforeRowBodyMouseUp";
  /**
   * Fires when a row body element is clicked.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodyclick Original Ext JS documentation of 'rowbodyclick'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyClick
   * /
  public static const ROW_BODY_CLICK:String = "onRowBodyClick";
  /**
   * Fires when a row body element is right clicked.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodycontextmenu Original Ext JS documentation of 'rowbodycontextmenu'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyContextMenu
   * /
  public static const ROW_BODY_CONTEXT_MENU:String = "onRowBodyContextMenu";
  /**
   * Fires when a row body element is double clicked.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodydblclick Original Ext JS documentation of 'rowbodydblclick'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyDblclick
   * /
  public static const ROW_BODY_DBLCLICK:String = "onRowBodyDblclick";
  /**
   * Fires when a key is pressed while a row body element is currently selected.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodykeypress Original Ext JS documentation of 'rowbodykeypress'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyKeypress
   * /
  public static const ROW_BODY_KEYPRESS:String = "onRowBodyKeypress";
  /**
   * Fires when a key is pressed down while a row body element is currently selected.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodykeydown Original Ext JS documentation of 'rowbodykeydown'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyKeyDown
   * /
  public static const ROW_BODY_KEY_DOWN:String = "onRowBodyKeyDown";
  /**
   * Fires when a key is released while a row body element is currently selected.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodykeyup Original Ext JS documentation of 'rowbodykeyup'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyKeyUp
   * /
  public static const ROW_BODY_KEY_UP:String = "onRowBodyKeyUp";
  /**
   * Fires on a row body element longpress event.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodylongpress Original Ext JS documentation of 'rowbodylongpress'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyLongPress
   * /
  public static const ROW_BODY_LONG_PRESS:String = "onRowBodyLongPress";
  /**
   * Fires when there is a mouse down on a row body element.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodymousedown Original Ext JS documentation of 'rowbodymousedown'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyMouseDown
   * /
  public static const ROW_BODY_MOUSE_DOWN:String = "onRowBodyMouseDown";
  /**
   * Fires when there is a mouse up on a row body element.
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.
   * Fires before the mousedown event on a row body element is processed. Return false
   * to cancel the default action.</p>
   * <p><b>Note:</b> This event is fired only when the Ext.grid.feature.RowBody feature is
   * used.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-rowbodymouseup Original Ext JS documentation of 'rowbodymouseup'
   * @see ext.panel.TablePanel
   * @eventType onRowBodyMouseUp
   * /
  public static const ROW_BODY_MOUSE_UP:String = "onRowBodyMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_view_rowBodyEl_eEvent.__PARAMETER_SEQUENCE__=( ["view", "rowBodyEl", "e", "eOpts"]);}/*;

  public*/ function TablePanel_view_rowBodyEl_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$FS6W(type, arguments);
  }/*

  /**
   * The raw event object
   * /
  public native function get e():Event;

  /**
   * The row body's element
   * /
  public native function get rowBodyEl():HTMLElement;

  /**
   * The rowbody's owning View
   * /
  public native function get view():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_view_rowBodyEl_eEvent$,
      super$FS6W: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ROW_BODY_CLICK: "onBeforeRowBodyClick",
        BEFORE_ROW_BODY_CONTEXT_MENU: "onBeforeRowBodyContextMenu",
        BEFORE_ROW_BODY_DBLCLICK: "onBeforeRowBodyDblclick",
        BEFORE_ROW_BODY_KEYPRESS: "onBeforeRowBodyKeypress",
        BEFORE_ROW_BODY_KEY_DOWN: "onBeforeRowBodyKeyDown",
        BEFORE_ROW_BODY_KEY_UP: "onBeforeRowBodyKeyUp",
        BEFORE_ROW_BODY_LONG_PRESS: "onBeforeRowBodyLongPress",
        BEFORE_ROW_BODY_MOUSE_DOWN: "onBeforeRowBodyMouseDown",
        BEFORE_ROW_BODY_MOUSE_UP: "onBeforeRowBodyMouseUp",
        ROW_BODY_CLICK: "onRowBodyClick",
        ROW_BODY_CONTEXT_MENU: "onRowBodyContextMenu",
        ROW_BODY_DBLCLICK: "onRowBodyDblclick",
        ROW_BODY_KEYPRESS: "onRowBodyKeypress",
        ROW_BODY_KEY_DOWN: "onRowBodyKeyDown",
        ROW_BODY_KEY_UP: "onRowBodyKeyUp",
        ROW_BODY_LONG_PRESS: "onRowBodyLongPress",
        ROW_BODY_MOUSE_DOWN: "onRowBodyMouseDown",
        ROW_BODY_MOUSE_UP: "onRowBodyMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
