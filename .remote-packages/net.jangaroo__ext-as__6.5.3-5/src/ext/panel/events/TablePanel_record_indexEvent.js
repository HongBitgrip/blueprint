Ext.define("ext.panel.events.TablePanel_record_indexEvent", function(TablePanel_record_indexEvent) {/*package ext.panel.events {
import ext.data.Model;
import ext.selection.RowSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_record_indexEvent extends FlExtEvent {
  /**
   * Fired before a record is deselected. If any listener returns false, the
   * deselection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforedeselect Original Ext JS documentation of 'beforedeselect'
   * @see ext.panel.TablePanel
   * @eventType onBeforeDeselect
   * /
  public static const BEFORE_DESELECT:String = "onBeforeDeselect";
  /**
   * Fired before a record is selected. If any listener returns false, the
   * selection is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeselect Original Ext JS documentation of 'beforeselect'
   * @see ext.panel.TablePanel
   * @eventType onBeforeSelect
   * /
  public static const BEFORE_SELECT:String = "onBeforeSelect";
  /**
   * Fired after a record is deselected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-deselect Original Ext JS documentation of 'deselect'
   * @see ext.panel.TablePanel
   * @eventType onDeselect
   * /
  public static const DESELECT:String = "onDeselect";
  /**
   * Fired after a record is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-select Original Ext JS documentation of 'select'
   * @see ext.panel.TablePanel
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_record_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "index", "eOpts"]);}/*;

  public*/ function TablePanel_record_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$FlBB(type, arguments);
  }/*

  /**
   * The row index deselected
   * /
  public native function get index():Number;

  /**
   * The deselected record
   * /
  public native function get record():Model;

  public native function get source():RowSelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_record_indexEvent$,
      super$FlBB: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DESELECT: "onBeforeDeselect",
        BEFORE_SELECT: "onBeforeSelect",
        DESELECT: "onDeselect",
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});