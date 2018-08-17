Ext.define("ext.menu.events.Menu_eEvent", function(Menu_eEvent) {/*package ext.menu.events {
import ext.event.Event;
import ext.menu.Menu;

import net.jangaroo.ext.FlExtEvent;

public class Menu_eEvent extends FlExtEvent {
  /**
   * Fires when the mouse enters this menu
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Menu.html#event-mouseenter Original Ext JS documentation of 'mouseenter'
   * @see ext.menu.Menu
   * @eventType onMouseEnter
   * /
  public static const MOUSE_ENTER:String = "onMouseEnter";
  /**
   * Fires when the mouse leaves this menu
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.Menu.html#event-mouseleave Original Ext JS documentation of 'mouseleave'
   * @see ext.menu.Menu
   * @eventType onMouseLeave
   * /
  public static const MOUSE_LEAVE:String = "onMouseLeave";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Menu_eEvent.__PARAMETER_SEQUENCE__=( ["menu", "e", "eOpts"]);}/*;

  public*/ function Menu_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$2rR2(type, arguments);
  }/*

  /**
   * The underlying →<code>ext.event.Event</code>
   * @see ext.event.Event
   * /
  public native function get e():Event;

  /**
   * The menu
   * /
  public native function get menu():Menu;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Menu_eEvent$,
      super$2rR2: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MOUSE_ENTER: "onMouseEnter",
        MOUSE_LEAVE: "onMouseLeave",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
