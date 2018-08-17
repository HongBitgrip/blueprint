Ext.define("ext.selection.events.DataViewSelectionModel_recordEvent", function(DataViewSelectionModel_recordEvent) {/*package ext.selection.events {
import ext.data.Model;
import ext.selection.DataViewSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class DataViewSelectionModel_recordEvent extends FlExtEvent {
  /**
   * Fired after a record is deselected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.DataViewModel.html#event-deselect Original Ext JS documentation of 'deselect'
   * @see ext.selection.DataViewSelectionModel
   * @eventType onDeselect
   * /
  public static const DESELECT:String = "onDeselect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataViewSelectionModel_recordEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "eOpts"]);}/*;

  public*/ function DataViewSelectionModel_recordEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Fbqy(type, arguments);
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
      constructor: DataViewSelectionModel_recordEvent$,
      super$Fbqy: function() {
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
