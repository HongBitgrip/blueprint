Ext.define("ext.grid.header.events.HeaderContainer_column_fromIdx_toIdxEvent", function(HeaderContainer_column_fromIdx_toIdxEvent) {/*package ext.grid.header.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_column_fromIdx_toIdxEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-columnmove Original Ext JS documentation of 'columnmove'
   * @see ext.grid.header.HeaderContainer
   * @eventType onColumnMove
   * /
  public static const COLUMN_MOVE:String = "onColumnMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_column_fromIdx_toIdxEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "fromIdx", "toIdx", "eOpts"]);}/*;

  public*/ function HeaderContainer_column_fromIdx_toIdxEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$HSQJ(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get fromIdx():Number;

  public native function get toIdx():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_column_fromIdx_toIdxEvent$,
      super$HSQJ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMN_MOVE: "onColumnMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
