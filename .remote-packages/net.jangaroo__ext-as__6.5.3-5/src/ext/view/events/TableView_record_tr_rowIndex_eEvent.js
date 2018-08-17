Ext.define("ext.view.events.TableView_record_tr_rowIndex_eEvent", function(TableView_record_tr_rowIndex_eEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.event.Event;
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TableView_record_tr_rowIndex_eEvent extends FlExtEvent {
  /**
   * Fired when table row is right clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowcontextmenu Original Ext JS documentation of 'rowcontextmenu'
   * @see ext.view.TableView
   * @eventType onRowContextMenu
   * /
  public static const ROW_CONTEXT_MENU:String = "onRowContextMenu";
  /**
   * Fired when the mousedown event is captured on the row.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-rowmousedown Original Ext JS documentation of 'rowmousedown'
   * @see ext.view.TableView
   * @eventType onRowMouseDown
   * /
  public static const ROW_MOUSE_DOWN:String = "onRowMouseDown";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TableView_record_tr_rowIndex_eEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "tr", "rowIndex", "e", "eOpts"]);}/*;

  public*/ function TableView_record_tr_rowIndex_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$l9Wa(type, arguments);
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

  public native function get record():Model;

  public native function get rowIndex():Number;

  public native function get source():TableView;

  /**
   * The TR element for the row.
   * /
  public native function get tr():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TableView_record_tr_rowIndex_eEvent$,
      super$l9Wa: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ROW_CONTEXT_MENU: "onRowContextMenu",
        ROW_MOUSE_DOWN: "onRowMouseDown",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
