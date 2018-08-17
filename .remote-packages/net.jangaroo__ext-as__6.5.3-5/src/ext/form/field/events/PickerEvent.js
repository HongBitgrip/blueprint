Ext.define("ext.form.field.events.PickerEvent", function(PickerEvent) {/*package ext.form.field.events {
import ext.form.field.Picker;

import net.jangaroo.ext.FlExtEvent;

public class PickerEvent extends FlExtEvent {
  /**
   * Fires when the field's picker is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Picker.html#event-collapse Original Ext JS documentation of 'collapse'
   * @see ext.form.field.Picker
   * @eventType onCollapse
   * /
  public static const COLLAPSE:String = "onCollapse";
  /**
   * Fires when the field's picker is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Picker.html#event-expand Original Ext JS documentation of 'expand'
   * @see ext.form.field.Picker
   * @eventType onExpand
   * /
  public static const EXPAND:String = "onExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PickerEvent.__PARAMETER_SEQUENCE__=( ["field", "eOpts"]);}/*;

  public*/ function PickerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$dEs8(type, arguments);
  }/*

  /**
   * This field instance
   * /
  public native function get field():Picker;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PickerEvent$,
      super$dEs8: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLLAPSE: "onCollapse",
        EXPAND: "onExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
