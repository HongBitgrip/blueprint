Ext.define("ext.grid.header.events.HeaderContainer_column_directionEvent", function(HeaderContainer_column_directionEvent) {/*package ext.grid.header.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_column_directionEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-sortchange Original Ext JS documentation of 'sortchange'
   * @see ext.grid.header.HeaderContainer
   * @eventType onSortChange
   * /
  public static const SORT_CHANGE:String = "onSortChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_column_directionEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "direction", "eOpts"]);}/*;

  public*/ function HeaderContainer_column_directionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$mCtg(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get direction():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_column_directionEvent$,
      super$mCtg: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SORT_CHANGE: "onSortChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
