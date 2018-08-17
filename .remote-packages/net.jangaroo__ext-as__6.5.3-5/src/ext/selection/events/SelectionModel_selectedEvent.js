Ext.define("ext.selection.events.SelectionModel_selectedEvent", function(SelectionModel_selectedEvent) {/*package ext.selection.events {
import ext.selection.SelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class SelectionModel_selectedEvent extends FlExtEvent {
  /**
   * Fired after a selection change has occurred
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.Model.html#event-selectionchange Original Ext JS documentation of 'selectionchange'
   * @see ext.selection.SelectionModel
   * @eventType onSelectionChange
   * /
  public static const SELECTION_CHANGE:String = "onSelectionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SelectionModel_selectedEvent.__PARAMETER_SEQUENCE__=( ["source", "selected", "eOpts"]);}/*;

  public*/ function SelectionModel_selectedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$h4bZ(type, arguments);
  }/*

  [ArrayElementType("ext.data.Model")]
  /**
   * The selected records
   * /
  public native function get selected():Array;

  public native function get source():SelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SelectionModel_selectedEvent$,
      super$h4bZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECTION_CHANGE: "onSelectionChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
