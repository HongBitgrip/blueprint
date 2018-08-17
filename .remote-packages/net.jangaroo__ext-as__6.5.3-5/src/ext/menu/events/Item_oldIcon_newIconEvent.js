Ext.define("ext.menu.events.Item_oldIcon_newIconEvent", function(Item_oldIcon_newIconEvent) {/*package ext.menu.events {
import ext.menu.Item;

import net.jangaroo.ext.FlExtEvent;

public class Item_oldIcon_newIconEvent extends FlExtEvent {
  /**
   * Fired when the item's icon is changed by the →<code>setIcon()</code> or →<code>setIconCls()</code> methods.
   * @see ext.menu.Item#setIcon()
   * @see ext.menu.Item#setIconCls()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Item.html#event-iconchange Original Ext JS documentation of 'iconchange'
   * @see ext.menu.Item
   * @eventType onIconChange
   * /
  public static const ICON_CHANGE:String = "onIconChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Item_oldIcon_newIconEvent.__PARAMETER_SEQUENCE__=( ["source", "oldIcon", "newIcon", "eOpts"]);}/*;

  public*/ function Item_oldIcon_newIconEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$r4WP(type, arguments);
  }/*

  public native function get newIcon():String;

  public native function get oldIcon():String;

  public native function get source():Item;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Item_oldIcon_newIconEvent$,
      super$r4WP: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ICON_CHANGE: "onIconChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
