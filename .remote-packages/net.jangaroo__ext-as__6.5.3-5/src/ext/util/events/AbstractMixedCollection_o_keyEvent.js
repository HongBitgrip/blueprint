Ext.define("ext.util.events.AbstractMixedCollection_o_keyEvent", function(AbstractMixedCollection_o_keyEvent) {/*package ext.util.events {
import net.jangaroo.ext.FlExtEvent;

public class AbstractMixedCollection_o_keyEvent extends FlExtEvent {
  /**
   * Fires when an item is removed from the collection.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.AbstractMixedCollection.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.util.AbstractMixedCollection
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractMixedCollection_o_keyEvent.__PARAMETER_SEQUENCE__=( ["o", "key", "eOpts"]);}/*;

  public*/ function AbstractMixedCollection_o_keyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5z_f(type, arguments);
  }/*

  /**
   * The key associated with the removed item.
   * /
  public native function get key():String;

  /**
   * The item being removed.
   * /
  public native function get o():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractMixedCollection_o_keyEvent$,
      super$5z_f: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REMOVE: "onRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
