Ext.define("ext.menu.events.ItemEvent", function(ItemEvent) {/*package ext.menu.events {
import ext.menu.Item;

import net.jangaroo.ext.FlExtEvent;

public class ItemEvent extends FlExtEvent {
  /**
   * Fires when this item is activated
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Item.html#event-activate Original Ext JS documentation of 'activate'
   * @see ext.menu.Item
   * @eventType onActivate
   * /
  public static const ACTIVATE:String = "onActivate";
  /**
   * Fires when this item is deactivated
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Item.html#event-deactivate Original Ext JS documentation of 'deactivate'
   * @see ext.menu.Item
   * @eventType onDeactivate
   * /
  public static const DEACTIVATE:String = "onDeactivate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ItemEvent.__PARAMETER_SEQUENCE__=( ["item", "eOpts"]);}/*;

  public*/ function ItemEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$34q(type, arguments);
  }/*

  /**
   * The activated item
   * /
  public native function get item():Item;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ItemEvent$,
      super$$34q: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTIVATE: "onActivate",
        DEACTIVATE: "onDeactivate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
