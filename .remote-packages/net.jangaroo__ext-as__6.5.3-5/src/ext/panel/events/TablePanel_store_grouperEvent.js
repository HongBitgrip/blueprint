Ext.define("ext.panel.events.TablePanel_store_grouperEvent", function(TablePanel_store_grouperEvent) {/*package ext.panel.events {
import ext.data.Store;
import ext.util.Grouper;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_store_grouperEvent extends FlExtEvent {
  /**
   * Fired whenever the grouping in the grid changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-groupchange Original Ext JS documentation of 'groupchange'
   * @see ext.panel.TablePanel
   * @eventType onGroupChange
   * /
  public static const GROUP_CHANGE:String = "onGroupChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_store_grouperEvent.__PARAMETER_SEQUENCE__=( ["store", "grouper", "eOpts"]);}/*;

  public*/ function TablePanel_store_grouperEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$tOgN(type, arguments);
  }/*

  /**
   * The grouper object.
   * /
  public native function get grouper():Grouper;

  /**
   * The store.
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_store_grouperEvent$,
      super$tOgN: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        GROUP_CHANGE: "onGroupChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});