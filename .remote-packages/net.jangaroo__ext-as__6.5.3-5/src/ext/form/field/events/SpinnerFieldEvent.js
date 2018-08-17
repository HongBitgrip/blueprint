Ext.define("ext.form.field.events.SpinnerFieldEvent", function(SpinnerFieldEvent) {/*package ext.form.field.events {
import ext.form.field.SpinnerField;

import net.jangaroo.ext.FlExtEvent;

public class SpinnerFieldEvent extends FlExtEvent {
  /**
   * Fires when the spinner is made to spin down.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Spinner.html#event-spindown Original Ext JS documentation of 'spindown'
   * @see ext.form.field.SpinnerField
   * @eventType onSpinDown
   * /
  public static const SPIN_DOWN:String = "onSpinDown";
  /**
   * Fires when a spin command has been finished. For example on mouseup
   * on the spin buttons, when an <code>UP</code> or <code>DOWN</code> arrow key is released
   * of when a mousewheel stops spinning.
   * <p>When this event fires, the field's value has stabilized.</p>
   * @since 6.2.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Spinner.html#event-spinend Original Ext JS documentation of 'spinend'
   * @see ext.form.field.SpinnerField
   * @eventType onSpinEnd
   * /
  public static const SPIN_END:String = "onSpinEnd";
  /**
   * Fires when the spinner is made to spin up.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Spinner.html#event-spinup Original Ext JS documentation of 'spinup'
   * @see ext.form.field.SpinnerField
   * @eventType onSpinUp
   * /
  public static const SPIN_UP:String = "onSpinUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SpinnerFieldEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function SpinnerFieldEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8AQL(type, arguments);
  }/*

  public native function get source():SpinnerField;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SpinnerFieldEvent$,
      super$8AQL: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SPIN_DOWN: "onSpinDown",
        SPIN_END: "onSpinEnd",
        SPIN_UP: "onSpinUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
