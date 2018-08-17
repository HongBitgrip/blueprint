Ext.define("ext.menu.events.Menu_item_eEvent", function(Menu_item_eEvent) {/*package ext.menu.events {
import ext.Component;
import ext.event.Event;
import ext.menu.Menu;

import net.jangaroo.ext.FlExtEvent;

public class Menu_item_eEvent extends FlExtEvent {
  /**
   * Fires when this menu is clicked
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Menu.html#event-click Original Ext JS documentation of 'click'
   * @see ext.menu.Menu
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  /**
   * Fires when the mouse is hovering over this menu
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Menu.html#event-mouseover Original Ext JS documentation of 'mouseover'
   * @see ext.menu.Menu
   * @eventType onMouseOver
   * /
  public static const MOUSE_OVER:String = "onMouseOver";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Menu_item_eEvent.__PARAMETER_SEQUENCE__=( ["menu", "item", "e", "eOpts"]);}/*;

  public*/ function Menu_item_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$889q(type, arguments);
  }/*

  /**
   * The underlying →<code>ext.event.Event</code>.
   * @see ext.event.Event
   * /
  public native function get e():Event;

  /**
   * The menu item that was clicked. <code>undefined</code> if not applicable.
   * /
  public native function get item():Component;

  /**
   * The menu which has been clicked
   * /
  public native function get menu():Menu;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Menu_item_eEvent$,
      super$889q: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        MOUSE_OVER: "onMouseOver",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
