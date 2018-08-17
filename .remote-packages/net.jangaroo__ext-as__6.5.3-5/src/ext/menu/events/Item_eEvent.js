Ext.define("ext.menu.events.Item_eEvent", function(Item_eEvent) {/*package ext.menu.events {
import ext.event.Event;
import ext.menu.Item;

import net.jangaroo.ext.FlExtEvent;

public class Item_eEvent extends FlExtEvent {
  /**
   * Fires when this item is clicked
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Item.html#event-click Original Ext JS documentation of 'click'
   * @see ext.menu.Item
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Item_eEvent.__PARAMETER_SEQUENCE__=( ["item", "e", "eOpts"]);}/*;

  public*/ function Item_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$LDwE(type, arguments);
  }/*

  /**
   * The underlying →<code>ext.event.Event</code>.
   * @see ext.event.Event
   * /
  public native function get e():Event;

  /**
   * The item that was clicked
   * /
  public native function get item():Item;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Item_eEvent$,
      super$LDwE: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
