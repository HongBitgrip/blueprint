Ext.define("ext.grid.locking.events.Lockable_columnEvent", function(Lockable_columnEvent) {/*package ext.grid.locking.events {
import ext.grid.GridPanel;
import ext.grid.column.Column;

import net.jangaroo.ext.FlExtEvent;

public class Lockable_columnEvent extends FlExtEvent {
  /**
   * Fires when a column is locked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-lockcolumn Original Ext JS documentation of 'lockcolumn'
   * @see ext.grid.locking.Lockable
   * @eventType onLockColumn
   * /
  public static const LOCK_COLUMN:String = "onLockColumn";
  /**
   * Fires when a column is unlocked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-unlockcolumn Original Ext JS documentation of 'unlockcolumn'
   * @see ext.grid.locking.Lockable
   * @eventType onUnlockColumn
   * /
  public static const UNLOCK_COLUMN:String = "onUnlockColumn";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Lockable_columnEvent.__PARAMETER_SEQUENCE__=( ["source", "column", "eOpts"]);}/*;

  public*/ function Lockable_columnEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$a2vj(type, arguments);
  }/*

  /**
   * The column being locked.
   * /
  public native function get column():Column;

  /**
   * The gridpanel.
   * /
  public native function get source():GridPanel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Lockable_columnEvent$,
      super$a2vj: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        LOCK_COLUMN: "onLockColumn",
        UNLOCK_COLUMN: "onUnlockColumn",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
