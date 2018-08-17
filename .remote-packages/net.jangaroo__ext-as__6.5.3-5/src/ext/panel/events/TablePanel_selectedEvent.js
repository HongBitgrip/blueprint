Ext.define("ext.panel.events.TablePanel_selectedEvent", function(TablePanel_selectedEvent) {/*package ext.panel.events {
import ext.selection.SelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_selectedEvent extends FlExtEvent {
  /**
   * Fired after a selection change has occurred
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-selectionchange Original Ext JS documentation of 'selectionchange'
   * @see ext.panel.TablePanel
   * @eventType onSelectionChange
   * /
  public static const SELECTION_CHANGE:String = "onSelectionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_selectedEvent.__PARAMETER_SEQUENCE__=( ["source", "selected", "eOpts"]);}/*;

  public*/ function TablePanel_selectedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$FGHq(type, arguments);
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
      constructor: TablePanel_selectedEvent$,
      super$FGHq: function() {
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
