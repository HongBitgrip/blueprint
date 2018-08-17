Ext.define("ext.data.events.Store_grouperEvent", function(Store_grouperEvent) {/*package ext.data.events {
import ext.data.Store;
import ext.util.Grouper;

import net.jangaroo.ext.FlExtEvent;

public class Store_grouperEvent extends FlExtEvent {
  /**
   * Fired whenever the grouping in the grid changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Store.html#event-groupchange Original Ext JS documentation of 'groupchange'
   * @see ext.data.Store
   * @eventType onGroupChange
   * /
  public static const GROUP_CHANGE:String = "onGroupChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Store_grouperEvent.__PARAMETER_SEQUENCE__=( ["store", "grouper", "eOpts"]);}/*;

  public*/ function Store_grouperEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gVHg(type, arguments);
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
      constructor: Store_grouperEvent$,
      super$gVHg: function() {
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
