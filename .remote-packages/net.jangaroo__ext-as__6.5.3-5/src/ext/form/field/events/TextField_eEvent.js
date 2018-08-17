Ext.define("ext.form.field.events.TextField_eEvent", function(TextField_eEvent) {/*package ext.form.field.events {
import ext.event.Event;
import ext.form.field.TextField;

import net.jangaroo.ext.FlExtEvent;

public class TextField_eEvent extends FlExtEvent {
  /**
   * Keypress input field event. This event only fires if <b>→<code>enableKeyEvents</code></b> is set to true.
   * @see ext.form.field.TextField#enableKeyEvents
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Text.html#event-keypress Original Ext JS documentation of 'keypress'
   * @see ext.form.field.TextField
   * @eventType onKeypress
   * /
  public static const KEYPRESS:String = "onKeypress";
  /**
   * Keydown input field event. This event only fires if <b>→<code>enableKeyEvents</code></b> is set to true.
   * @see ext.form.field.TextField#enableKeyEvents
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Text.html#event-keydown Original Ext JS documentation of 'keydown'
   * @see ext.form.field.TextField
   * @eventType onKeyDown
   * /
  public static const KEY_DOWN:String = "onKeyDown";
  /**
   * Keyup input field event. This event only fires if <b>→<code>enableKeyEvents</code></b> is set to true.
   * @see ext.form.field.TextField#enableKeyEvents
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Text.html#event-keyup Original Ext JS documentation of 'keyup'
   * @see ext.form.field.TextField
   * @eventType onKeyUp
   * /
  public static const KEY_UP:String = "onKeyUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TextField_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function TextField_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$AOIB(type, arguments);
  }/*

  public native function get e():Event;

  /**
   * This text field
   * /
  public native function get source():TextField;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TextField_eEvent$,
      super$AOIB: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        KEYPRESS: "onKeypress",
        KEY_DOWN: "onKeyDown",
        KEY_UP: "onKeyUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
