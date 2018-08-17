Ext.define("ext.grid.header.events.HeaderContainer_columnEvent", function(HeaderContainer_columnEvent) {/*package ext.grid.header.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_columnEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-columnshow Original Ext JS documentation of 'columnshow'
   * @see ext.grid.header.HeaderContainer
   * @eventType onColumnsHow
   * /
  public static const COLUMNS_HOW:String = "onColumnsHow";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-columnhide Original Ext JS documentation of 'columnhide'
   * @see ext.grid.header.HeaderContainer
   * @eventType onColumnHide
   * /
  public static const COLUMN_HIDE:String = "onColumnHide";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_columnEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "eOpts"]);}/*;

  public*/ function HeaderContainer_columnEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$JPlg(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_columnEvent$,
      super$JPlg: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMNS_HOW: "onColumnsHow",
        COLUMN_HIDE: "onColumnHide",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
