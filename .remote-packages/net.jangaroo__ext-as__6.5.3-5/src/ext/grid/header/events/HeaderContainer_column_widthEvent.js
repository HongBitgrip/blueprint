Ext.define("ext.grid.header.events.HeaderContainer_column_widthEvent", function(HeaderContainer_column_widthEvent) {/*package ext.grid.header.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_column_widthEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-columnresize Original Ext JS documentation of 'columnresize'
   * @see ext.grid.header.HeaderContainer
   * @eventType onColumnResize
   * /
  public static const COLUMN_RESIZE:String = "onColumnResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_column_widthEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "width", "eOpts"]);}/*;

  public*/ function HeaderContainer_column_widthEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$99k3(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_column_widthEvent$,
      super$99k3: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMN_RESIZE: "onColumnResize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
