Ext.define("ext.grid.locking.events.LockableEvent", function(LockableEvent) {/*package ext.grid.locking.events {
import ext.panel.TablePanel;

import net.jangaroo.ext.FlExtEvent;

public class LockableEvent extends FlExtEvent {
  /**
   * Fires when the grid view is available (use this for selecting a default row).
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-viewready Original Ext JS documentation of 'viewready'
   * @see ext.grid.locking.Lockable
   * @eventType onViewReady
   * /
  public static const VIEW_READY:String = "onViewReady";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){LockableEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function LockableEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$HQWo(type, arguments);
  }/*

  public native function get source():TablePanel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: LockableEvent$,
      super$HQWo: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        VIEW_READY: "onViewReady",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
