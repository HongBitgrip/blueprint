Ext.define("ext.view.events.DataView_oldFocused_newFocusedEvent", function(DataView_oldFocused_newFocusedEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.selection.SelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class DataView_oldFocused_newFocusedEvent extends FlExtEvent {
  /**
   * Fired when a row is focused
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-focuschange Original Ext JS documentation of 'focuschange'
   * @see ext.view.DataView
   * @eventType onFocusChange
   * /
  public static const FOCUS_CHANGE:String = "onFocusChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataView_oldFocused_newFocusedEvent.__PARAMETER_SEQUENCE__=( ["source", "oldFocused", "newFocused", "eOpts"]);}/*;

  public*/ function DataView_oldFocused_newFocusedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$PMkh(type, arguments);
  }/*

  /**
   * The newly focused record
   * /
  public native function get newFocused():Model;

  /**
   * The previously focused record
   * /
  public native function get oldFocused():Model;

  public native function get source():SelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataView_oldFocused_newFocusedEvent$,
      super$PMkh: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FOCUS_CHANGE: "onFocusChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
