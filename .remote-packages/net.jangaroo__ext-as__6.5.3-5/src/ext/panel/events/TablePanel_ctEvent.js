Ext.define("ext.panel.events.TablePanel_ctEvent", function(TablePanel_ctEvent) {/*package ext.panel.events {
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_ctEvent extends FlExtEvent {
  /**
   * Fired after the columns change in any way, when a column has been hidden or shown, or when a column
   * is added to or removed from this header container.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-columnschanged Original Ext JS documentation of 'columnschanged'
   * @see ext.panel.TablePanel
   * @eventType onColumnsChanged
   * /
  public static const COLUMNS_CHANGED:String = "onColumnsChanged";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_ctEvent.__PARAMETER_SEQUENCE__=( ["ct", "eOpts"]);}/*;

  public*/ function TablePanel_ctEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$eymU(type, arguments);
  }/*

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_ctEvent$,
      super$eymU: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMNS_CHANGED: "onColumnsChanged",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
