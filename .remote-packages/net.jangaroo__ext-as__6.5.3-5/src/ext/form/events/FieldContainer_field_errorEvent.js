Ext.define("ext.form.events.FieldContainer_field_errorEvent", function(FieldContainer_field_errorEvent) {/*package ext.form.events {
import ext.form.FieldAncestor;
import ext.form.Labelable;

import net.jangaroo.ext.FlExtEvent;

public class FieldContainer_field_errorEvent extends FlExtEvent {
  /**
   * Fires when the active error message is changed for any one of the →<code>ext.form.Labelable</code> instances
   * within this container.
   * @see ext.form.Labelable
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldAncestor.html#event-fielderrorchange Original Ext JS documentation of 'fielderrorchange'
   * @see ext.form.FieldContainer
   * @eventType onFieldErrorChange
   * /
  public static const FIELD_ERROR_CHANGE:String = "onFieldErrorChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FieldContainer_field_errorEvent.__PARAMETER_SEQUENCE__=( ["source", "field", "error", "eOpts"]);}/*;

  public*/ function FieldContainer_field_errorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$96N(type, arguments);
  }/*

  /**
   * The active error message
   * /
  public native function get error():String;

  /**
   * The Labelable instance whose active error was changed
   * /
  public native function get field():Labelable;

  public native function get source():FieldAncestor;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FieldContainer_field_errorEvent$,
      super$$96N: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FIELD_ERROR_CHANGE: "onFieldErrorChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
