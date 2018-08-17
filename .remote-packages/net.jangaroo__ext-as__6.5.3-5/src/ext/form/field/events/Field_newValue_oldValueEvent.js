Ext.define("ext.form.field.events.Field_newValue_oldValueEvent", function(Field_newValue_oldValueEvent) {/*package ext.form.field.events {
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class Field_newValue_oldValueEvent extends FlExtEvent {
  /**
   * Fires when the value of a field is changed. The value of a field is
   * checked for changes when the field's →<code>setValue()</code> method
   * is called and when any of the events listed in
   * →<code>ext.form.field.BaseField.checkChangeEvents</code> are fired.
   * @see ext.form.field.Field#setValue()
   * @see ext.form.field.BaseField#checkChangeEvents
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Field.html#event-change Original Ext JS documentation of 'change'
   * @see ext.form.field.Field
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Field_newValue_oldValueEvent.__PARAMETER_SEQUENCE__=( ["source", "newValue", "oldValue", "eOpts"]);}/*;

  public*/ function Field_newValue_oldValueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$4uQh(type, arguments);
  }/*

  /**
   * The new value
   * /
  public native function get newValue():Object;

  /**
   * The original value
   * /
  public native function get oldValue():Object;

  public native function get source():Field;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Field_newValue_oldValueEvent$,
      super$4uQh: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
