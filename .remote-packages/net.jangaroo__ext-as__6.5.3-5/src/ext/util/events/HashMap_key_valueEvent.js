Ext.define("ext.util.events.HashMap_key_valueEvent", function(HashMap_key_valueEvent) {/*package ext.util.events {
import ext.util.HashMap;

import net.jangaroo.ext.FlExtEvent;

public class HashMap_key_valueEvent extends FlExtEvent {
  /**
   * Fires when a new item is added to the hash.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.HashMap.html#event-add Original Ext JS documentation of 'add'
   * @see ext.util.HashMap
   * @eventType onAdd
   * /
  public static const ADD:String = "onAdd";
  /**
   * Fires when an item is removed from the hash.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.HashMap.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.util.HashMap
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HashMap_key_valueEvent.__PARAMETER_SEQUENCE__=( ["source", "key", "value", "eOpts"]);}/*;

  public*/ function HashMap_key_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SMyG(type, arguments);
  }/*

  /**
   * The key of the added item.
   * /
  public native function get key():String;

  public native function get source():HashMap;

  /**
   * The value of the added item.
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HashMap_key_valueEvent$,
      super$SMyG: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD: "onAdd",
        REMOVE: "onRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
