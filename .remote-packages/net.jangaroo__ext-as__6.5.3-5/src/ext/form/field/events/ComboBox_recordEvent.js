Ext.define("ext.form.field.events.ComboBox_recordEvent", function(ComboBox_recordEvent) {/*package ext.form.field.events {
import ext.form.field.ComboBox;

import net.jangaroo.ext.FlExtEvent;

public class ComboBox_recordEvent extends FlExtEvent {
  /**
   * Fires when at least one list item is selected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.ComboBox.html#event-select Original Ext JS documentation of 'select'
   * @see ext.form.field.ComboBox
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ComboBox_recordEvent.__PARAMETER_SEQUENCE__=( ["combo", "record", "eOpts"]);}/*;

  public*/ function ComboBox_recordEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$VKcB(type, arguments);
  }/*

  /**
   * This combo box
   * /
  public native function get combo():ComboBox;

  /**
   * With →<code>multiSelect</code>
   * <code>false</code>, the value will be a single record. With →<code>multiSelect</code> <code>true</code>, the
   * value will be an array of records.
   * @see ext.form.field.ComboBox#multiSelect
   * /
  public native function get record():*;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ComboBox_recordEvent$,
      super$VKcB: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
