Ext.define("ext.util.events.HashMap_key_value_oldEvent", function(HashMap_key_value_oldEvent) {/*package ext.util.events {
import ext.util.HashMap;

import net.jangaroo.ext.FlExtEvent;

public class HashMap_key_value_oldEvent extends FlExtEvent {
  /**
   * Fires when an item is replaced in the hash.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.HashMap.html#event-replace Original Ext JS documentation of 'replace'
   * @see ext.util.HashMap
   * @eventType onReplace
   * /
  public static const REPLACE:String = "onReplace";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HashMap_key_value_oldEvent.__PARAMETER_SEQUENCE__=( ["source", "key", "value", "old", "eOpts"]);}/*;

  public*/ function HashMap_key_value_oldEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gdUe(type, arguments);
  }/*

  /**
   * The key of the replaced item.
   * /
  public native function get key():String;

  /**
   * The old value for the item.
   * /
  public native function get old():Object;

  public native function get source():HashMap;

  /**
   * The new value for the item.
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HashMap_key_value_oldEvent$,
      super$gdUe: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REPLACE: "onReplace",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
