Ext.define("ext.form.field.events.SpinnerField_directionEvent", function(SpinnerField_directionEvent) {/*package ext.form.field.events {
import ext.form.field.SpinnerField;

import net.jangaroo.ext.FlExtEvent;

public class SpinnerField_directionEvent extends FlExtEvent {
  /**
   * Fires when the spinner is made to spin up or down.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Spinner.html#event-spin Original Ext JS documentation of 'spin'
   * @see ext.form.field.SpinnerField
   * @eventType onSpin
   * /
  public static const SPIN:String = "onSpin";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SpinnerField_directionEvent.__PARAMETER_SEQUENCE__=( ["source", "direction", "eOpts"]);}/*;

  public*/ function SpinnerField_directionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ahxL(type, arguments);
  }/*

  /**
   * Either 'up' if spinning up, or 'down' if spinning down.
   * /
  public native function get direction():String;

  public native function get source():SpinnerField;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SpinnerField_directionEvent$,
      super$ahxL: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SPIN: "onSpin",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
