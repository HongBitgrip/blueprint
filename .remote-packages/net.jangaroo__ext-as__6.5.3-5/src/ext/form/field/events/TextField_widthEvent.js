Ext.define("ext.form.field.events.TextField_widthEvent", function(TextField_widthEvent) {/*package ext.form.field.events {
import ext.form.field.TextField;

import net.jangaroo.ext.FlExtEvent;

public class TextField_widthEvent extends FlExtEvent {
  /**
   * Fires when the <b>→<code>autoSize()</code></b> function is triggered and the field is resized according to the
   * →<code>grow</code>/→<code>growMin</code>/→<code>growMax</code> configs as a result. This event provides a hook for the
   * developer to apply additional logic at runtime to resize the field if needed.
   * @see ext.form.field.TextField#autoSize()
   * @see ext.form.field.TextField#grow
   * @see ext.form.field.TextField#growMin
   * @see ext.form.field.TextField#growMax
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Text.html#event-autosize Original Ext JS documentation of 'autosize'
   * @see ext.form.field.TextField
   * @eventType onAutoSize
   * /
  public static const AUTO_SIZE:String = "onAutoSize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TextField_widthEvent.__PARAMETER_SEQUENCE__=( ["source", "width", "eOpts"]);}/*;

  public*/ function TextField_widthEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$G$3A(type, arguments);
  }/*

  /**
   * This text field
   * /
  public native function get source():TextField;

  /**
   * The new field width
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TextField_widthEvent$,
      super$G$3A: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        AUTO_SIZE: "onAutoSize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
