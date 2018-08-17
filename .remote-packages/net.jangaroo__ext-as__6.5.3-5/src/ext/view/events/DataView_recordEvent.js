Ext.define("ext.view.events.DataView_recordEvent", function(DataView_recordEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.selection.DataViewSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class DataView_recordEvent extends FlExtEvent {
  /**
   * Fired after a record is deselected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-deselect Original Ext JS documentation of 'deselect'
   * @see ext.view.DataView
   * @eventType onDeselect
   * /
  public static const DESELECT:String = "onDeselect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataView_recordEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "eOpts"]);}/*;

  public*/ function DataView_recordEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$c6uo(type, arguments);
  }/*

  /**
   * The deselected record
   * /
  public native function get record():Model;

  public native function get source():DataViewSelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataView_recordEvent$,
      super$c6uo: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DESELECT: "onDeselect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
