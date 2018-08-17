Ext.define("ext.mixin.events.Dirty_dirtyEvent", function(Dirty_dirtyEvent) {/*package ext.mixin.events {
import ext.Base;

import net.jangaroo.ext.FlExtEvent;

public class Dirty_dirtyEvent extends FlExtEvent {
  /**
   * Fires when a change in the object's →<code>dirty</code> state is detected.
   * <p><b>Note:</b> In order for this event to fire, the class that mixes in this mixin
   * must be <code>→ext.mixin.Observable</code>.</p>
   * @see ext.mixin.Dirty#dirty
   * @see ext.mixin.Observable
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Dirty.html#event-dirtychange Original Ext JS documentation of 'dirtychange'
   * @see ext.mixin.Dirty
   * @eventType onDirtyChange
   * /
  public static const DIRTY_CHANGE:String = "onDirtyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Dirty_dirtyEvent.__PARAMETER_SEQUENCE__=( ["source", "dirty", "eOpts"]);}/*;

  public*/ function Dirty_dirtyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$4XzG(type, arguments);
  }/*

  /**
   * Whether or not the object is now dirty.
   * /
  public native function get dirty():Boolean;

  public native function get source():Base;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Dirty_dirtyEvent$,
      super$4XzG: function() {
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
