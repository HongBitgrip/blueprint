Ext.define("ext.view.events.TableView_keyEvent_prevRow_nextRow_forwardEvent", function(TableView_keyEvent_prevRow_nextRow_forwardEvent) {/*package ext.view.events {
import ext.event.Event;
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TableView_keyEvent_prevRow_nextRow_forwardEvent extends FlExtEvent {
  /**
   * Fired when View is asked to exit Actionable mode in the current row,
   * and proceed to the previous/next row. If the handler returns <code>false</code>,
   * View processing is aborted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.Table.html#event-beforerowexit Original Ext JS documentation of 'beforerowexit'
   * @see ext.view.TableView
   * @eventType onBeforeRowExit
   * /
  public static const BEFORE_ROW_EXIT:String = "onBeforeRowExit";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TableView_keyEvent_prevRow_nextRow_forwardEvent.__PARAMETER_SEQUENCE__=( ["source", "keyEvent", "prevRow", "nextRow", "forward", "eOpts"]);}/*;

  public*/ function TableView_keyEvent_prevRow_nextRow_forwardEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gN_4(type, arguments);
  }/*

  /**
   * <code>true</code> if we're navigating forward (Tab), <code>false</code> if
   * navigating backward (Shift-Tab).
   * /
  public native function get forward():Boolean;

  /**
   * The key event that caused navigation.
   * /
  public native function get keyEvent():Event;

  /**
   * Table row that is going to be focused and activated.
   * /
  public native function get nextRow():HTMLElement;

  /**
   * Currently active table row.
   * /
  public native function get prevRow():HTMLElement;

  public native function get source():TableView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TableView_keyEvent_prevRow_nextRow_forwardEvent$,
      super$gN_4: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ROW_EXIT: "onBeforeRowExit",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
