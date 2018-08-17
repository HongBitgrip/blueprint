Ext.define("ext.form.events.FormPanel_field_isValidEvent", function(FormPanel_field_isValidEvent) {/*package ext.form.events {
import ext.form.FieldAncestor;
import ext.form.Labelable;

import net.jangaroo.ext.FlExtEvent;

public class FormPanel_field_isValidEvent extends FlExtEvent {
  /**
   * Fires when the validity state of any one of the →<code>ext.form.field.Field</code> instances within this
   * container changes.
   * @see ext.form.field.Field
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldAncestor.html#event-fieldvaliditychange Original Ext JS documentation of 'fieldvaliditychange'
   * @see ext.form.FormPanel
   * @eventType onFieldValidityChange
   * /
  public static const FIELD_VALIDITY_CHANGE:String = "onFieldValidityChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FormPanel_field_isValidEvent.__PARAMETER_SEQUENCE__=( ["source", "field", "isValid", "eOpts"]);}/*;

  public*/ function FormPanel_field_isValidEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ei34(type, arguments);
  }/*

  /**
   * The Field instance whose validity changed
   * /
  public native function get field():Labelable;

  /**
   * The field's new validity state
   * /
  public native function get isValid():String;

  public native function get source():FieldAncestor;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FormPanel_field_isValidEvent$,
      super$ei34: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FIELD_VALIDITY_CHANGE: "onFieldValidityChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
