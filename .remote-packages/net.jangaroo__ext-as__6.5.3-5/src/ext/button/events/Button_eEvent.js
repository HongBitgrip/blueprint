Ext.define("ext.button.events.Button_eEvent", function(Button_eEvent) {/*package ext.button.events {
import ext.button.Button;

import js.Event;

import net.jangaroo.ext.FlExtEvent;

public class Button_eEvent extends FlExtEvent {
  /**
   * Fires when this button is clicked, before the configured →<code>handler</code> is invoked. Execution of the
   * →<code>handler</code> may be vetoed by returning <code>false</code> to this event.
   * @see ext.button.Button#handler
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-click Original Ext JS documentation of 'click'
   * @see ext.button.Button
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  /**
   * Fires when the mouse exits the button
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-mouseout Original Ext JS documentation of 'mouseout'
   * @see ext.button.Button
   * @eventType onMouseOut
   * /
  public static const MOUSE_OUT:String = "onMouseOut";
  /**
   * Fires when the mouse hovers over the button
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-mouseover Original Ext JS documentation of 'mouseover'
   * @see ext.button.Button
   * @eventType onMouseOver
   * /
  public static const MOUSE_OVER:String = "onMouseOver";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function Button_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$VRcS(type, arguments);
  }/*

  /**
   * The click event
   * /
  public native function get e():Event;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_eEvent$,
      super$VRcS: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        MOUSE_OUT: "onMouseOut",
        MOUSE_OVER: "onMouseOver",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
