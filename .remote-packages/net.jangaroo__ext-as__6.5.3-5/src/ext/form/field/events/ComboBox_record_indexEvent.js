Ext.define("ext.form.field.events.ComboBox_record_indexEvent", function(ComboBox_record_indexEvent) {/*package ext.form.field.events {
import ext.data.Model;
import ext.form.field.ComboBox;

import net.jangaroo.ext.FlExtEvent;

public class ComboBox_record_indexEvent extends FlExtEvent {
  /**
   * Fires before the deselected item is removed from the collection
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.ComboBox.html#event-beforedeselect Original Ext JS documentation of 'beforedeselect'
   * @see ext.form.field.ComboBox
   * @eventType onBeforeDeselect
   * /
  public static const BEFORE_DESELECT:String = "onBeforeDeselect";
  /**
   * Fires before the selected item is added to the collection
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.ComboBox.html#event-beforeselect Original Ext JS documentation of 'beforeselect'
   * @see ext.form.field.ComboBox
   * @eventType onBeforeSelect
   * /
  public static const BEFORE_SELECT:String = "onBeforeSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ComboBox_record_indexEvent.__PARAMETER_SEQUENCE__=( ["combo", "record", "index", "eOpts"]);}/*;

  public*/ function ComboBox_record_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$2zZO(type, arguments);
  }/*

  /**
   * This combo box
   * /
  public native function get combo():ComboBox;

  /**
   * The index of the deselected record
   * /
  public native function get index():Number;

  /**
   * The deselected record
   * /
  public native function get record():Model;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ComboBox_record_indexEvent$,
      super$2zZO: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DESELECT: "onBeforeDeselect",
        BEFORE_SELECT: "onBeforeSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
