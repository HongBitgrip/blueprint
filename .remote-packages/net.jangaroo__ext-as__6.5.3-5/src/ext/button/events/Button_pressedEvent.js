Ext.define("ext.button.events.Button_pressedEvent", function(Button_pressedEvent) {/*package ext.button.events {
import ext.button.Button;

import net.jangaroo.ext.FlExtEvent;

public class Button_pressedEvent extends FlExtEvent {
  /**
   * Fires before the 'pressed' state of this button changes (only if enableToggle = true)
   * If a handler returns <code>false</code>, the toggle is vetoed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-beforetoggle Original Ext JS documentation of 'beforetoggle'
   * @see ext.button.Button
   * @eventType onBeforeToggle
   * /
  public static const BEFORE_TOGGLE:String = "onBeforeToggle";
  /**
   * Fires when the 'pressed' state of this button changes (only if enableToggle = true)
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-toggle Original Ext JS documentation of 'toggle'
   * @see ext.button.Button
   * @eventType onToggle
   * /
  public static const TOGGLE:String = "onToggle";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_pressedEvent.__PARAMETER_SEQUENCE__=( ["source", "pressed", "eOpts"]);}/*;

  public*/ function Button_pressedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$7hA$(type, arguments);
  }/*

  public native function get pressed():Boolean;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_pressedEvent$,
      super$7hA$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_TOGGLE: "onBeforeToggle",
        TOGGLE: "onToggle",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
