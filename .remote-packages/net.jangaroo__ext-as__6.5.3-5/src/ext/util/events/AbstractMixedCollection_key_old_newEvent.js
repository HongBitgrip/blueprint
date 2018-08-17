Ext.define("ext.util.events.AbstractMixedCollection_key_old_newEvent", function(AbstractMixedCollection_key_old_newEvent) {/*package ext.util.events {
import net.jangaroo.ext.FlExtEvent;

public class AbstractMixedCollection_key_old_newEvent extends FlExtEvent {
  /**
   * Fires when an item is replaced in the collection.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.AbstractMixedCollection.html#event-replace Original Ext JS documentation of 'replace'
   * @see ext.util.AbstractMixedCollection
   * @eventType onReplace
   * /
  public static const REPLACE:String = "onReplace";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractMixedCollection_key_old_newEvent.__PARAMETER_SEQUENCE__=( ["key", "old", "new_", "eOpts"]);}/*;

  public*/ function AbstractMixedCollection_key_old_newEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5fMm(type, arguments);
  }/*

  /**
   * he key associated with the new added.
   * /
  public native function get key():String;

  /**
   * The new item.
   * /
  public native function get new_():Object;

  /**
   * The item being replaced.
   * /
  public native function get old():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractMixedCollection_key_old_newEvent$,
      super$5fMm: function() {
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
