Ext.define("ext.menu.events.Item_oldText_newTextEvent", function(Item_oldText_newTextEvent) {/*package ext.menu.events {
import ext.menu.Item;

import net.jangaroo.ext.FlExtEvent;

public class Item_oldText_newTextEvent extends FlExtEvent {
  /**
   * Fired when the item's text is changed by the →<code>setText()</code> method.
   * @see ext.menu.Item#setText()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Item.html#event-textchange Original Ext JS documentation of 'textchange'
   * @see ext.menu.Item
   * @eventType onTextChange
   * /
  public static const TEXT_CHANGE:String = "onTextChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Item_oldText_newTextEvent.__PARAMETER_SEQUENCE__=( ["source", "oldText", "newText", "eOpts"]);}/*;

  public*/ function Item_oldText_newTextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Dakn(type, arguments);
  }/*

  public native function get newText():String;

  public native function get oldText():String;

  public native function get source():Item;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Item_oldText_newTextEvent$,
      super$Dakn: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TEXT_CHANGE: "onTextChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
