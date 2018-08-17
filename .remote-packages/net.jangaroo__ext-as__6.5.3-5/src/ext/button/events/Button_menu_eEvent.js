Ext.define("ext.button.events.Button_menu_eEvent", function(Button_menu_eEvent) {/*package ext.button.events {
import ext.button.Button;
import ext.menu.Menu;

import js.Event;

import net.jangaroo.ext.FlExtEvent;

public class Button_menu_eEvent extends FlExtEvent {
  /**
   * If this button has a menu, this event fires when the mouse leaves the menu triggering element
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-menutriggerout Original Ext JS documentation of 'menutriggerout'
   * @see ext.button.Button
   * @eventType onMenuTriggerOut
   * /
  public static const MENU_TRIGGER_OUT:String = "onMenuTriggerOut";
  /**
   * If this button has a menu, this event fires when the mouse enters the menu triggering element
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-menutriggerover Original Ext JS documentation of 'menutriggerover'
   * @see ext.button.Button
   * @eventType onMenuTriggerOver
   * /
  public static const MENU_TRIGGER_OVER:String = "onMenuTriggerOver";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_menu_eEvent.__PARAMETER_SEQUENCE__=( ["source", "menu", "e", "eOpts"]);}/*;

  public*/ function Button_menu_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ab0E(type, arguments);
  }/*

  public native function get e():Event;

  public native function get menu():Menu;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_menu_eEvent$,
      super$ab0E: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MENU_TRIGGER_OUT: "onMenuTriggerOut",
        MENU_TRIGGER_OVER: "onMenuTriggerOver",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
