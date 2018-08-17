Ext.define("ext.form.field.events.BaseField_errorEvent", function(BaseField_errorEvent) {/*package ext.form.field.events {
import ext.form.Labelable;

import net.jangaroo.ext.FlExtEvent;

public class BaseField_errorEvent extends FlExtEvent {
  /**
   * Fires when the active error message is changed via →<code>setActiveError()</code>.
   * @see ext.form.field.BaseField#setActiveError()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Labelable.html#event-errorchange Original Ext JS documentation of 'errorchange'
   * @see ext.form.field.BaseField
   * @eventType onErrorChange
   * /
  public static const ERROR_CHANGE:String = "onErrorChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){BaseField_errorEvent.__PARAMETER_SEQUENCE__=( ["source", "error", "eOpts"]);}/*;

  public*/ function BaseField_errorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Yvzi(type, arguments);
  }/*

  /**
   * The active error message
   * /
  public native function get error():String;

  public native function get source():Labelable;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: BaseField_errorEvent$,
      super$Yvzi: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ERROR_CHANGE: "onErrorChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
