Ext.define("ext.form.events.CheckboxGroup_isDirtyEvent", function(CheckboxGroup_isDirtyEvent) {/*package ext.form.events {
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class CheckboxGroup_isDirtyEvent extends FlExtEvent {
  /**
   * Fires when a change in the field's →<code>isDirty()</code> state is detected.
   * @see ext.form.CheckboxGroup#isDirty()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Field.html#event-dirtychange Original Ext JS documentation of 'dirtychange'
   * @see ext.form.CheckboxGroup
   * @eventType onDirtyChange
   * /
  public static const DIRTY_CHANGE:String = "onDirtyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CheckboxGroup_isDirtyEvent.__PARAMETER_SEQUENCE__=( ["source", "isDirty", "eOpts"]);}/*;

  public*/ function CheckboxGroup_isDirtyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$zzLj(type, arguments);
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
      constructor: CheckboxGroup_isDirtyEvent$,
      super$zzLj: function() {
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
