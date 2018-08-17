Ext.define("ext.button.events.Button_menuEvent", function(Button_menuEvent) {/*package ext.button.events {
import ext.button.Button;
import ext.menu.Menu;

import net.jangaroo.ext.FlExtEvent;

public class Button_menuEvent extends FlExtEvent {
  /**
   * If this button has a menu, this event fires when it is hidden
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-menuhide Original Ext JS documentation of 'menuhide'
   * @see ext.button.Button
   * @eventType onMenuHide
   * /
  public static const MENU_HIDE:String = "onMenuHide";
  /**
   * If this button has a menu, this event fires when it is shown
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-menushow Original Ext JS documentation of 'menushow'
   * @see ext.button.Button
   * @eventType onMenuShow
   * /
  public static const MENU_SHOW:String = "onMenuShow";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_menuEvent.__PARAMETER_SEQUENCE__=( ["source", "menu", "eOpts"]);}/*;

  public*/ function Button_menuEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$w0Aq(type, arguments);
  }/*

  public native function get menu():Menu;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_menuEvent$,
      super$w0Aq: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MENU_HIDE: "onMenuHide",
        MENU_SHOW: "onMenuShow",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
