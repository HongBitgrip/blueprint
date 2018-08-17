Ext.define("ext.form.events.FormPanel_validEvent", function(FormPanel_validEvent) {/*package ext.form.events {
import ext.form.BasicForm;

import net.jangaroo.ext.FlExtEvent;

public class FormPanel_validEvent extends FlExtEvent {
  /**
   * Fires when the validity of the entire form changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Panel.html#event-validitychange Original Ext JS documentation of 'validitychange'
   * @see ext.form.FormPanel
   * @eventType onValidityChange
   * /
  public static const VALIDITY_CHANGE:String = "onValidityChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FormPanel_validEvent.__PARAMETER_SEQUENCE__=( ["source", "valid", "eOpts"]);}/*;

  public*/ function FormPanel_validEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$3TlL(type, arguments);
  }/*

  public native function get source():BasicForm;

  /**
   * <code>true</code> if the form is now valid, <code>false</code> if it is now invalid.
   * /
  public native function get valid():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FormPanel_validEvent$,
      super$3TlL: function() {
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