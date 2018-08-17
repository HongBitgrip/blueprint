Ext.define("ext.data.events.Session_dirtyEvent", function(Session_dirtyEvent) {/*package ext.data.events {
import ext.Base;

import net.jangaroo.ext.FlExtEvent;

public class Session_dirtyEvent extends FlExtEvent {
  /**
   * Fires when a change in the object's →<code>dirty</code> state is detected.
   * <p><b>Note:</b> In order for this event to fire, the class that mixes in this mixin
   * must be <code>→ext.mixin.Observable</code>.</p>
   * @see ext.data.Session#dirty
   * @see ext.mixin.Observable
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.mixin.Dirty.html#event-dirtychange Original Ext JS documentation of 'dirtychange'
   * @see ext.data.Session
   * @eventType onDirtyChange
   * /
  public static const DIRTY_CHANGE:String = "onDirtyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Session_dirtyEvent.__PARAMETER_SEQUENCE__=( ["source", "dirty", "eOpts"]);}/*;

  public*/ function Session_dirtyEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Dr9l(type, arguments);
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
      constructor: Session_dirtyEvent$,
      super$Dr9l: function() {
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
