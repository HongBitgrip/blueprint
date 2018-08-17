Ext.define("ext.util.events.AbstractMixedCollectionEvent", function(AbstractMixedCollectionEvent) {/*package ext.util.events {
import net.jangaroo.ext.FlExtEvent;

public class AbstractMixedCollectionEvent extends FlExtEvent {
  /**
   * Fires when the collection is cleared.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.AbstractMixedCollection.html#event-clear Original Ext JS documentation of 'clear'
   * @see ext.util.AbstractMixedCollection
   * @eventType onClear
   * /
  public static const CLEAR:String = "onClear";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractMixedCollectionEvent.__PARAMETER_SEQUENCE__=( ["eOpts"]);}/*;

  public*/ function AbstractMixedCollectionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$bG9v(type, arguments);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractMixedCollectionEvent$,
      super$bG9v: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLEAR: "onClear",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
