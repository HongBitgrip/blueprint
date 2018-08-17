Ext.define("ext.grid.column.events.CheckColumn_checked_eEvent", function(CheckColumn_checked_eEvent) {/*package ext.grid.column.events {
import ext.event.Event;
import ext.grid.column.CheckColumn;

import net.jangaroo.ext.FlExtEvent;

public class CheckColumn_checked_eEvent extends FlExtEvent {
  /**
   * Fires when the header is clicked and before the mass check/uncheck takes place.
   * The change may be vetoed by returning <code>false</code> from a listener.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.column.Check.html#event-beforeheadercheckchange Original Ext JS documentation of 'beforeheadercheckchange'
   * @see ext.grid.column.CheckColumn
   * @eventType onBeforeHeaderCheckChange
   * /
  public static const BEFORE_HEADER_CHECK_CHANGE:String = "onBeforeHeaderCheckChange";
  /**
   * Fires after the header is clicked and a mass check/uncheck operation has been completed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.column.Check.html#event-headercheckchange Original Ext JS documentation of 'headercheckchange'
   * @see ext.grid.column.CheckColumn
   * @eventType onHeaderCheckChange
   * /
  public static const HEADER_CHECK_CHANGE:String = "onHeaderCheckChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CheckColumn_checked_eEvent.__PARAMETER_SEQUENCE__=( ["source", "checked", "e", "eOpts"]);}/*;

  public*/ function CheckColumn_checked_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xyB6(type, arguments);
  }/*

  /**
   * <code>true</code> if all boxes are to be checked.
   * /
  public native function get checked():Boolean;

  /**
   * The underlying event which caused the check change.
   * /
  public native function get e():Event;

  /**
   * CheckColumn.
   * /
  public native function get source():CheckColumn;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CheckColumn_checked_eEvent$,
      super$xyB6: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_HEADER_CHECK_CHANGE: "onBeforeHeaderCheckChange",
        HEADER_CHECK_CHANGE: "onHeaderCheckChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
