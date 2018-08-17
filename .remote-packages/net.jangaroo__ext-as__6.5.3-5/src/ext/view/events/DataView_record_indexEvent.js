Ext.define("ext.view.events.DataView_record_indexEvent", function(DataView_record_indexEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.selection.DataViewSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class DataView_record_indexEvent extends FlExtEvent {
  /**
   * Fired before a record is deselected. If any listener returns false, the
   * deselection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-beforedeselect Original Ext JS documentation of 'beforedeselect'
   * @see ext.view.DataView
   * @eventType onBeforeDeselect
   * /
  public static const BEFORE_DESELECT:String = "onBeforeDeselect";
  /**
   * Fired before a record is selected. If any listener returns false, the
   * selection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-beforeselect Original Ext JS documentation of 'beforeselect'
   * @see ext.view.DataView
   * @eventType onBeforeSelect
   * /
  public static const BEFORE_SELECT:String = "onBeforeSelect";
  /**
   * Fired after a record is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-select Original Ext JS documentation of 'select'
   * @see ext.view.DataView
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataView_record_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "index", "eOpts"]);}/*;

  public*/ function DataView_record_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$RAG$(type, arguments);
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
      constructor: DataView_record_indexEvent$,
      super$RAG$: function() {
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
