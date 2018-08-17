Ext.define("ext.form.field.events.Field_isDirtyEvent", function(Field_isDirtyEvent) {/*package ext.form.field.events {
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class Field_isDirtyEvent extends FlExtEvent {
  /**
   * Fires when a change in the field's →<code>isDirty()</code> state is detected.
   * @see ext.form.field.Field#isDirty()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Field.html#event-dirtychange Original Ext JS documentation of 'dirtychange'
   * @see ext.form.field.Field
   * @eventType onDirtyChange
   * /
  public static const DIRTY_CHANGE:String = "onDirtyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Field_isDirtyEvent.__PARAMETER_SEQUENCE__=( ["source", "isDirty", "eOpts"]);}/*;

  public*/ function Field_isDirtyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$KIDx(type, arguments);
  }/*

  /**
   * Whether or not the field is now dirty
   * /
  public native function get isDirty():Boolean;

  public native function get source():Field;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Field_isDirtyEvent$,
      super$KIDx: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DIRTY_CHANGE: "onDirtyChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
