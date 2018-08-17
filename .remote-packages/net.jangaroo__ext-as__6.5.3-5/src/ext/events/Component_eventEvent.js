Ext.define("ext.events.Component_eventEvent", function(Component_eventEvent) {/*package ext.events {
import ext.Component;
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class Component_eventEvent extends FlExtEvent {
  /**
   * Fires when this Component's →<code>focusEl</code> loses focus.
   * @see ext.Component#focusEl
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-blur Original Ext JS documentation of 'blur'
   * @see ext.Component
   * @eventType onBlur
   * /
  public static const BLUR:String = "onBlur";
  /**
   * Fires when this Component's →<code>focusEl</code> receives focus.
   * @see ext.Component#focusEl
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focus Original Ext JS documentation of 'focus'
   * @see ext.Component
   * @eventType onFocus
   * /
  public static const FOCUS:String = "onFocus";
  /**
   * Fires when focus enters this Component's hierarchy.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focusenter Original Ext JS documentation of 'focusenter'
   * @see ext.Component
   * @eventType onFocusEnter
   * /
  public static const FOCUS_ENTER:String = "onFocusEnter";
  /**
   * Fires when focus leaves this Component's hierarchy.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Focusable.html#event-focusleave Original Ext JS documentation of 'focusleave'
   * @see ext.Component
   * @eventType onFocusLeave
   * /
  public static const FOCUS_LEAVE:String = "onFocusLeave";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_eventEvent.__PARAMETER_SEQUENCE__=( ["source", "event", "eOpts"]);}/*;

  public*/ function Component_eventEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$3cGg(type, arguments);
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
      constructor: Component_eventEvent$,
      super$3cGg: function() {
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
