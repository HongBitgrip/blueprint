Ext.define("ext.form.field.events.Field_isValidEvent", function(Field_isValidEvent) {/*package ext.form.field.events {
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class Field_isValidEvent extends FlExtEvent {
  /**
   * Fires when a change in the field's validity is detected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Field.html#event-validitychange Original Ext JS documentation of 'validitychange'
   * @see ext.form.field.Field
   * @eventType onValidityChange
   * /
  public static const VALIDITY_CHANGE:String = "onValidityChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Field_isValidEvent.__PARAMETER_SEQUENCE__=( ["source", "isValid", "eOpts"]);}/*;

  public*/ function Field_isValidEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$La6H(type, arguments);
  }/*

  /**
   * Whether or not the field is now valid
   * /
  public native function get isValid():Boolean;

  public native function get source():Field;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Field_isValidEvent$,
      super$La6H: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        VALIDITY_CHANGE: "onValidityChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
