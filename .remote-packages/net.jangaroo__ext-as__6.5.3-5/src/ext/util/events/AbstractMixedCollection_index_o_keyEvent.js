Ext.define("ext.util.events.AbstractMixedCollection_index_o_keyEvent", function(AbstractMixedCollection_index_o_keyEvent) {/*package ext.util.events {
import net.jangaroo.ext.FlExtEvent;

public class AbstractMixedCollection_index_o_keyEvent extends FlExtEvent {
  /**
   * Fires when an item is added to the collection.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.AbstractMixedCollection.html#event-add Original Ext JS documentation of 'add'
   * @see ext.util.AbstractMixedCollection
   * @eventType onAdd
   * /
  public static const ADD:String = "onAdd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractMixedCollection_index_o_keyEvent.__PARAMETER_SEQUENCE__=( ["index", "o", "key", "eOpts"]);}/*;

  public*/ function AbstractMixedCollection_index_o_keyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$6VQs(type, arguments);
  }/*

  /**
   * The index at which the item was added.
   * /
  public native function get index():Number;

  /**
   * The key associated with the added item.
   * /
  public native function get key():String;

  /**
   * The item added.
   * /
  public native function get o():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractMixedCollection_index_o_keyEvent$,
      super$6VQs: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD: "onAdd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
