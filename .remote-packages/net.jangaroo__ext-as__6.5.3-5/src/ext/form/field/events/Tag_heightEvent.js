Ext.define("ext.form.field.events.Tag_heightEvent", function(Tag_heightEvent) {/*package ext.form.field.events {
import ext.form.field.Tag;

import net.jangaroo.ext.FlExtEvent;

public class Tag_heightEvent extends FlExtEvent {
  /**
   * Fires when the <b>→<code>autoSize()</code></b> function is triggered and the field is resized according to the
   * →<code>grow</code>/→<code>growMin</code>/→<code>growMax</code> configs as a result. This event provides a hook for the
   * developer to apply additional logic at runtime to resize the field if needed.
   * @see ext.form.field.Tag#autoSize()
   * @see ext.form.field.Tag#grow
   * @see ext.form.field.Tag#growMin
   * @see ext.form.field.Tag#growMax
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Tag.html#event-autosize Original Ext JS documentation of 'autosize'
   * @see ext.form.field.Tag
   * @eventType onAutoSize
   * /
  public static const AUTO_SIZE:String = "onAutoSize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Tag_heightEvent.__PARAMETER_SEQUENCE__=( ["source", "height", "eOpts"]);}/*;

  public*/ function Tag_heightEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$19Lg(type, arguments);
  }/*

  /**
   * The new field height
   * /
  public native function get height():Number;

  /**
   * This field
   * /
  public native function get source():Tag;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Tag_heightEvent$,
      super$19Lg: function() {
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
