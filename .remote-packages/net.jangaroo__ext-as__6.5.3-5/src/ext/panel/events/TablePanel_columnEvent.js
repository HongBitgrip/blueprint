Ext.define("ext.panel.events.TablePanel_columnEvent", function(TablePanel_columnEvent) {/*package ext.panel.events {
import ext.grid.GridPanel;
import ext.grid.column.Column;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_columnEvent extends FlExtEvent {
  /**
   * Fires when an inactive filter becomes active
   * @since 6.5.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-filteractivate Original Ext JS documentation of 'filteractivate'
   * @see ext.panel.TablePanel
   * @eventType onFilterActivate
   * /
  public static const FILTER_ACTIVATE:String = "onFilterActivate";
  /**
   * Fires when an active filter becomes inactive
   * @since 6.5.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-filterdeactivate Original Ext JS documentation of 'filterdeactivate'
   * @see ext.panel.TablePanel
   * @eventType onFilterDeactivate
   * /
  public static const FILTER_DEACTIVATE:String = "onFilterDeactivate";
  /**
   * Fires when a column is locked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-lockcolumn Original Ext JS documentation of 'lockcolumn'
   * @see ext.panel.TablePanel
   * @eventType onLockColumn
   * /
  public static const LOCK_COLUMN:String = "onLockColumn";
  /**
   * Fires when a column is unlocked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-unlockcolumn Original Ext JS documentation of 'unlockcolumn'
   * @see ext.panel.TablePanel
   * @eventType onUnlockColumn
   * /
  public static const UNLOCK_COLUMN:String = "onUnlockColumn";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_columnEvent.__PARAMETER_SEQUENCE__=( ["source", "column", "eOpts"]);}/*;

  public*/ function TablePanel_columnEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SydP(type, arguments);
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
      constructor: TablePanel_columnEvent$,
      super$SydP: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FILTER_ACTIVATE: "onFilterActivate",
        FILTER_DEACTIVATE: "onFilterDeactivate",
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
