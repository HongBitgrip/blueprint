Ext.define("ext.events.Widget_eventEvent", function(Widget_eventEvent) {/*package ext.events {
import ext.Component;
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class Widget_eventEvent extends FlExtEvent {
  /**
   * Fires when this Component's →<code>focusEl</code> loses focus.
   * @see ext.Widget#focusEl
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-blur Original Ext JS documentation of 'blur'
   * @see ext.Widget
   * @eventType onBlur
   * /
  public static const BLUR:String = "onBlur";
  /**
   * Fires when this Component's →<code>focusEl</code> receives focus.
   * @see ext.Widget#focusEl
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focus Original Ext JS documentation of 'focus'
   * @see ext.Widget
   * @eventType onFocus
   * /
  public static const FOCUS:String = "onFocus";
  /**
   * Fires when focus enters this Component's hierarchy.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focusenter Original Ext JS documentation of 'focusenter'
   * @see ext.Widget
   * @eventType onFocusEnter
   * /
  public static const FOCUS_ENTER:String = "onFocusEnter";
  /**
   * Fires when focus leaves this Component's hierarchy.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focusleave Original Ext JS documentation of 'focusleave'
   * @see ext.Widget
   * @eventType onFocusLeave
   * /
  public static const FOCUS_LEAVE:String = "onFocusLeave";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Widget_eventEvent.__PARAMETER_SEQUENCE__=( ["source", "event", "eOpts"]);}/*;

  public*/ function Widget_eventEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$U9fp(type, arguments);
  }/*

  /**
   * The blur event.
   * /
  public native function get event():Event;

  public native function get source():Component;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Widget_eventEvent$,
      super$U9fp: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BLUR: "onBlur",
        FOCUS: "onFocus",
        FOCUS_ENTER: "onFocusEnter",
        FOCUS_LEAVE: "onFocusLeave",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
