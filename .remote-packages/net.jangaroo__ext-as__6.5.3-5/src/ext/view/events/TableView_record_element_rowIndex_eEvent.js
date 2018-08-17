Ext.define("ext.view.events.TableView_record_element_rowIndex_eEvent", function(TableView_record_element_rowIndex_eEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.event.Event;
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TableView_record_element_rowIndex_eEvent extends FlExtEvent {
  /**
   * Fired when a table row is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowclick Original Ext JS documentation of 'rowclick'
   * @see ext.view.TableView
   * @eventType onRowClick
   * /
  public static const ROW_CLICK:String = "onRowClick";
  /**
   * Fired when table row is double clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowdblclick Original Ext JS documentation of 'rowdblclick'
   * @see ext.view.TableView
   * @eventType onRowDblclick
   * /
  public static const ROW_DBLCLICK:String = "onRowDblclick";
  /**
   * Fired when the keydown event is captured on the row.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowkeydown Original Ext JS documentation of 'rowkeydown'
   * @see ext.view.TableView
   * @eventType onRowKeyDown
   * /
  public static const ROW_KEY_DOWN:String = "onRowKeyDown";
  /**
   * Fired when the mouseup event is captured on the row.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowmouseup Original Ext JS documentation of 'rowmouseup'
   * @see ext.view.TableView
   * @eventType onRowMouseUp
   * /
  public static const ROW_MOUSE_UP:String = "onRowMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TableView_record_element_rowIndex_eEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "element", "rowIndex", "e", "eOpts"]);}/*;

  public*/ function TableView_record_element_rowIndex_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$K5Rm(type, arguments);
  }/*

  /**
   * <ul>
   * <li><code>position:ext.grid.CellContext</code> (optional) —
   * A CellContext object which defines
   * the target row.
   * </li>
   * </ul>
   * /
  public native function get e():Event;

  /**
   * The TR element for the row.
   * /
  public native function get element():HTMLElement;

  public native function get record():Model;

  public native function get rowIndex():Number;

  public native function get source():TableView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TableView_record_element_rowIndex_eEvent$,
      super$K5Rm: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ROW_CLICK: "onRowClick",
        ROW_DBLCLICK: "onRowDblclick",
        ROW_KEY_DOWN: "onRowKeyDown",
        ROW_MOUSE_UP: "onRowMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
