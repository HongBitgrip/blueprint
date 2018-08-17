Ext.define("ext.grid.column.events.CheckColumn_rowIndex_checked_record_eEvent", function(CheckColumn_rowIndex_checked_record_eEvent) {/*package ext.grid.column.events {
import ext.data.Model;
import ext.event.Event;
import ext.grid.column.CheckColumn;

import net.jangaroo.ext.FlExtEvent;

public class CheckColumn_rowIndex_checked_record_eEvent extends FlExtEvent {
  /**
   * Fires when the UI requests a change of check status.
   * The change may be vetoed by returning <code>false</code> from a listener.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.column.Check.html#event-beforecheckchange Original Ext JS documentation of 'beforecheckchange'
   * @see ext.grid.column.CheckColumn
   * @eventType onBeforeCheckChange
   * /
  public static const BEFORE_CHECK_CHANGE:String = "onBeforeCheckChange";
  /**
   * Fires when the UI has successfully changed the checked state of a row.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.column.Check.html#event-checkchange Original Ext JS documentation of 'checkchange'
   * @see ext.grid.column.CheckColumn
   * @eventType onCheckChange
   * /
  public static const CHECK_CHANGE:String = "onCheckChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CheckColumn_rowIndex_checked_record_eEvent.__PARAMETER_SEQUENCE__=( ["source", "rowIndex", "checked", "record", "e", "eOpts"]);}/*;

  public*/ function CheckColumn_rowIndex_checked_record_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$lWXT(type, arguments);
  }/*

  /**
   * <code>true</code> if the box is to be checked.
   * /
  public native function get checked():Boolean;

  /**
   * The underlying event which caused the check change.
   * <ul>
   * <li><code>position:ext.grid.CellContext</code> (optional) —
   * A →<code>ext.grid.CellContext</code> object
   * containing all contextual information about where the event was triggered.
   * </li>
   * </ul>
   * @see ext.grid.CellContext
   * /
  public native function get e():Event;

  /**
   * The record to be updated.
   * /
  public native function get record():Model;

  /**
   * The row index.
   * /
  public native function get rowIndex():Number;

  /**
   * CheckColumn.
   * /
  public native function get source():CheckColumn;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CheckColumn_rowIndex_checked_record_eEvent$,
      super$lWXT: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CHECK_CHANGE: "onBeforeCheckChange",
        CHECK_CHANGE: "onCheckChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
