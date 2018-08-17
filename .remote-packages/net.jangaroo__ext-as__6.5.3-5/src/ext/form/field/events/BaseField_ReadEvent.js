Ext.define("ext.form.field.events.BaseField_ReadEvent", function(BaseField_ReadEvent) {/*package ext.form.field.events {
import ext.form.field.BaseField;

import net.jangaroo.ext.FlExtEvent;

public class BaseField_ReadEvent extends FlExtEvent {
  /**
   * Fires when this field changes its read-only status.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Base.html#event-writeablechange Original Ext JS documentation of 'writeablechange'
   * @see ext.form.field.BaseField
   * @eventType onWriteableChange
   * /
  public static const WRITEABLE_CHANGE:String = "onWriteableChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){BaseField_ReadEvent.__PARAMETER_SEQUENCE__=( ["source", "Read", "eOpts"]);}/*;

  public*/ function BaseField_ReadEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$aSLA(type, arguments);
  }/*

  /**
   * only flag
   * /
  public native function get Read():Boolean;

  public native function get source():BaseField;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: BaseField_ReadEvent$,
      super$aSLA: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        WRITEABLE_CHANGE: "onWriteableChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
