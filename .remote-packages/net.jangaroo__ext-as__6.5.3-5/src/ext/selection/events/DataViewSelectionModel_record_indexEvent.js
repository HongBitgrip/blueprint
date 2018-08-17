Ext.define("ext.selection.events.DataViewSelectionModel_record_indexEvent", function(DataViewSelectionModel_record_indexEvent) {/*package ext.selection.events {
import ext.data.Model;
import ext.selection.DataViewSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class DataViewSelectionModel_record_indexEvent extends FlExtEvent {
  /**
   * Fired before a record is deselected. If any listener returns false, the
   * deselection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.DataViewModel.html#event-beforedeselect Original Ext JS documentation of 'beforedeselect'
   * @see ext.selection.DataViewSelectionModel
   * @eventType onBeforeDeselect
   * /
  public static const BEFORE_DESELECT:String = "onBeforeDeselect";
  /**
   * Fired before a record is selected. If any listener returns false, the
   * selection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.DataViewModel.html#event-beforeselect Original Ext JS documentation of 'beforeselect'
   * @see ext.selection.DataViewSelectionModel
   * @eventType onBeforeSelect
   * /
  public static const BEFORE_SELECT:String = "onBeforeSelect";
  /**
   * Fired after a record is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.DataViewModel.html#event-select Original Ext JS documentation of 'select'
   * @see ext.selection.DataViewSelectionModel
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataViewSelectionModel_record_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "index", "eOpts"]);}/*;

  public*/ function DataViewSelectionModel_record_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$eQF9(type, arguments);
  }/*

  /**
   * The index within the store of the deselected record.
   * /
  public native function get index():Number;

  /**
   * The deselected record.
   * /
  public native function get record():Model;

  public native function get source():DataViewSelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataViewSelectionModel_record_indexEvent$,
      super$eQF9: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DESELECT: "onBeforeDeselect",
        BEFORE_SELECT: "onBeforeSelect",
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
