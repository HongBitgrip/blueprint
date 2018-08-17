Ext.define("ext.view.events.TableView_td_cellIndex_record_tr_rowIndex_eEvent", function(TableView_td_cellIndex_record_tr_rowIndex_eEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.event.Event;
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TableView_td_cellIndex_record_tr_rowIndex_eEvent extends FlExtEvent {
  /**
   * Fired before the cell click is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecellclick Original Ext JS documentation of 'beforecellclick'
   * @see ext.view.TableView
   * @eventType onBeforeCellClick
   * /
  public static const BEFORE_CELL_CLICK:String = "onBeforeCellClick";
  /**
   * Fired before the cell right click is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecellcontextmenu Original Ext JS documentation of 'beforecellcontextmenu'
   * @see ext.view.TableView
   * @eventType onBeforeCellContextMenu
   * /
  public static const BEFORE_CELL_CONTEXT_MENU:String = "onBeforeCellContextMenu";
  /**
   * Fired before the cell double click is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecelldblclick Original Ext JS documentation of 'beforecelldblclick'
   * @see ext.view.TableView
   * @eventType onBeforeCellDblclick
   * /
  public static const BEFORE_CELL_DBLCLICK:String = "onBeforeCellDblclick";
  /**
   * Fired before the cell key down is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecellkeydown Original Ext JS documentation of 'beforecellkeydown'
   * @see ext.view.TableView
   * @eventType onBeforeCellKeyDown
   * /
  public static const BEFORE_CELL_KEY_DOWN:String = "onBeforeCellKeyDown";
  /**
   * Fired before the cell mouse down is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecellmousedown Original Ext JS documentation of 'beforecellmousedown'
   * @see ext.view.TableView
   * @eventType onBeforeCellMouseDown
   * /
  public static const BEFORE_CELL_MOUSE_DOWN:String = "onBeforeCellMouseDown";
  /**
   * Fired before the cell mouse up is processed. Return false to cancel the default action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforecellmouseup Original Ext JS documentation of 'beforecellmouseup'
   * @see ext.view.TableView
   * @eventType onBeforeCellMouseUp
   * /
  public static const BEFORE_CELL_MOUSE_UP:String = "onBeforeCellMouseUp";
  /**
   * Fired when table cell is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-cellclick Original Ext JS documentation of 'cellclick'
   * @see ext.view.TableView
   * @eventType onCellClick
   * /
  public static const CELL_CLICK:String = "onCellClick";
  /**
   * Fired when table cell is right clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-cellcontextmenu Original Ext JS documentation of 'cellcontextmenu'
   * @see ext.view.TableView
   * @eventType onCellContextMenu
   * /
  public static const CELL_CONTEXT_MENU:String = "onCellContextMenu";
  /**
   * Fired when table cell is double clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-celldblclick Original Ext JS documentation of 'celldblclick'
   * @see ext.view.TableView
   * @eventType onCellDblclick
   * /
  public static const CELL_DBLCLICK:String = "onCellDblclick";
  /**
   * Fired when the keydown event is captured on the cell.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-cellkeydown Original Ext JS documentation of 'cellkeydown'
   * @see ext.view.TableView
   * @eventType onCellKeyDown
   * /
  public static const CELL_KEY_DOWN:String = "onCellKeyDown";
  /**
   * Fired when the mousedown event is captured on the cell.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-cellmousedown Original Ext JS documentation of 'cellmousedown'
   * @see ext.view.TableView
   * @eventType onCellMouseDown
   * /
  public static const CELL_MOUSE_DOWN:String = "onCellMouseDown";
  /**
   * Fired when the mouseup event is captured on the cell.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-cellmouseup Original Ext JS documentation of 'cellmouseup'
   * @see ext.view.TableView
   * @eventType onCellMouseUp
   * /
  public static const CELL_MOUSE_UP:String = "onCellMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TableView_td_cellIndex_record_tr_rowIndex_eEvent.__PARAMETER_SEQUENCE__=( ["source", "td", "cellIndex", "record", "tr", "rowIndex", "e", "eOpts"]);}/*;

  public*/ function TableView_td_cellIndex_record_tr_rowIndex_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$hh3G(type, arguments);
  }/*

  public native function get cellIndex():Number;

  /**
   * <ul>
   * <li><code>position:ext.grid.CellContext</code> (optional) —
   * A CellContext object which defines the target cell.
   * </li>
   * </ul>
   * /
  public native function get e():Event;

  public native function get record():Model;

  public native function get rowIndex():Number;

  public native function get source():TableView;

  /**
   * The TD element for the cell.
   * /
  public native function get td():HTMLElement;

  /**
   * The TR element for the cell.
   * /
  public native function get tr():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TableView_td_cellIndex_record_tr_rowIndex_eEvent$,
      super$hh3G: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CELL_CLICK: "onBeforeCellClick",
        BEFORE_CELL_CONTEXT_MENU: "onBeforeCellContextMenu",
        BEFORE_CELL_DBLCLICK: "onBeforeCellDblclick",
        BEFORE_CELL_KEY_DOWN: "onBeforeCellKeyDown",
        BEFORE_CELL_MOUSE_DOWN: "onBeforeCellMouseDown",
        BEFORE_CELL_MOUSE_UP: "onBeforeCellMouseUp",
        CELL_CLICK: "onCellClick",
        CELL_CONTEXT_MENU: "onCellContextMenu",
        CELL_DBLCLICK: "onCellDblclick",
        CELL_KEY_DOWN: "onCellKeyDown",
        CELL_MOUSE_DOWN: "onCellMouseDown",
        CELL_MOUSE_UP: "onCellMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
