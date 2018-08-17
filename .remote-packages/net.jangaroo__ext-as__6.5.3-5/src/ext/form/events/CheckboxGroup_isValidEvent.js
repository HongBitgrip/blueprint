Ext.define("ext.form.events.CheckboxGroup_isValidEvent", function(CheckboxGroup_isValidEvent) {/*package ext.form.events {
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class CheckboxGroup_isValidEvent extends FlExtEvent {
  /**
   * Fires when a change in the field's validity is detected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Field.html#event-validitychange Original Ext JS documentation of 'validitychange'
   * @see ext.form.CheckboxGroup
   * @eventType onValidityChange
   * /
  public static const VALIDITY_CHANGE:String = "onValidityChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CheckboxGroup_isValidEvent.__PARAMETER_SEQUENCE__=( ["source", "isValid", "eOpts"]);}/*;

  public*/ function CheckboxGroup_isValidEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$FE3(type, arguments);
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
      constructor: CheckboxGroup_isValidEvent$,
      super$$FE3: function() {
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
