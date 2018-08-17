Ext.define("ext.form.field.events.Picker_valueEvent", function(Picker_valueEvent) {/*package ext.form.field.events {
import ext.form.field.Picker;

import net.jangaroo.ext.FlExtEvent;

public class Picker_valueEvent extends FlExtEvent {
  /**
   * Fires when a value is selected via the picker.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Picker.html#event-select Original Ext JS documentation of 'select'
   * @see ext.form.field.Picker
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Picker_valueEvent.__PARAMETER_SEQUENCE__=( ["field", "value", "eOpts"]);}/*;

  public*/ function Picker_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$R_tM(type, arguments);
  }/*

  /**
   * This field instance
   * /
  public native function get field():Picker;

  /**
   * The value that was selected. The exact type of this value is dependent on
   * the individual field and picker implementations.
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Picker_valueEvent$,
      super$R_tM: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
