Ext.define("ext.util.events.Sortable_sortersEvent", function(Sortable_sortersEvent) {/*package ext.util.events {
import ext.util.Sortable;

import net.jangaroo.ext.FlExtEvent;

public class Sortable_sortersEvent extends FlExtEvent {
  /**
   * Fires before a sort occurs.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Sortable.html#event-beforesort Original Ext JS documentation of 'beforesort'
   * @see ext.util.Sortable
   * @eventType onBeforeSort
   * /
  public static const BEFORE_SORT:String = "onBeforeSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Sortable_sortersEvent.__PARAMETER_SEQUENCE__=( ["me", "sorters", "eOpts"]);}/*;

  public*/ function Sortable_sortersEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$BjW3(type, arguments);
  }/*

  /**
   * This object.
   * /
  public native function get me():Sortable;

  [ArrayElementType("ext.util.Sorter")]
  /**
   * The collection of Sorters being used to generate the comparator function.
   * /
  public native function get sorters():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Sortable_sortersEvent$,
      super$BjW3: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_SORT: "onBeforeSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
