Ext.define("ext.form.events.BasicForm_dirtyEvent", function(BasicForm_dirtyEvent) {/*package ext.form.events {
import ext.form.BasicForm;

import net.jangaroo.ext.FlExtEvent;

public class BasicForm_dirtyEvent extends FlExtEvent {
  /**
   * Fires when the dirty state of the entire form changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Basic.html#event-dirtychange Original Ext JS documentation of 'dirtychange'
   * @see ext.form.BasicForm
   * @eventType onDirtyChange
   * /
  public static const DIRTY_CHANGE:String = "onDirtyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){BasicForm_dirtyEvent.__PARAMETER_SEQUENCE__=( ["source", "dirty", "eOpts"]);}/*;

  public*/ function BasicForm_dirtyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$07mD(type, arguments);
  }/*

  /**
   * <code>true</code> if the form is now dirty, <code>false</code> if it is no longer dirty.
   * /
  public native function get dirty():Boolean;

  public native function get source():BasicForm;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: BasicForm_dirtyEvent$,
      super$07mD: function() {
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
