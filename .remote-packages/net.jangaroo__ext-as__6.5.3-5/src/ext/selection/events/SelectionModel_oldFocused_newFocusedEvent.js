Ext.define("ext.selection.events.SelectionModel_oldFocused_newFocusedEvent", function(SelectionModel_oldFocused_newFocusedEvent) {/*package ext.selection.events {
import ext.data.Model;
import ext.selection.SelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class SelectionModel_oldFocused_newFocusedEvent extends FlExtEvent {
  /**
   * Fired when a row is focused
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.Model.html#event-focuschange Original Ext JS documentation of 'focuschange'
   * @see ext.selection.SelectionModel
   * @eventType onFocusChange
   * /
  public static const FOCUS_CHANGE:String = "onFocusChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SelectionModel_oldFocused_newFocusedEvent.__PARAMETER_SEQUENCE__=( ["source", "oldFocused", "newFocused", "eOpts"]);}/*;

  public*/ function SelectionModel_oldFocused_newFocusedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$0p8G(type, arguments);
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
      constructor: SelectionModel_oldFocused_newFocusedEvent$,
      super$0p8G: function() {
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
