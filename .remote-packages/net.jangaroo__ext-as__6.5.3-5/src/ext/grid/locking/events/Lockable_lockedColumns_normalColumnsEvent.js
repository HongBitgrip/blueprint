Ext.define("ext.grid.locking.events.Lockable_lockedColumns_normalColumnsEvent", function(Lockable_lockedColumns_normalColumnsEvent) {/*package ext.grid.locking.events {
import net.jangaroo.ext.FlExtEvent;

public class Lockable_lockedColumns_normalColumnsEvent extends FlExtEvent {
  /**
   * Fires when the configured (or <b>reconfigured</b>) column set is split into two depending on the →<code>ext.grid.column.Column.locked</code> flag.
   * @see ext.grid.column.Column#locked
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-processcolumns Original Ext JS documentation of 'processcolumns'
   * @see ext.grid.locking.Lockable
   * @eventType onProcessColumns
   * /
  public static const PROCESS_COLUMNS:String = "onProcessColumns";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Lockable_lockedColumns_normalColumnsEvent.__PARAMETER_SEQUENCE__=( ["lockedColumns", "normalColumns", "eOpts"]);}/*;

  public*/ function Lockable_lockedColumns_normalColumnsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5$Ud(type, arguments);
  }/*

  [ArrayElementType("ext.grid.column.Column")]
  /**
   * The locked columns.
   * /
  public native function get lockedColumns():Array;

  [ArrayElementType("ext.grid.column.Column")]
  /**
   * The normal columns.
   * /
  public native function get normalColumns():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Lockable_lockedColumns_normalColumnsEvent$,
      super$5$Ud: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROCESS_COLUMNS: "onProcessColumns",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
