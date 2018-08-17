Ext.define("ext.grid.header.events.HeaderContainer_column_e_tEvent", function(HeaderContainer_column_e_tEvent) {/*package ext.grid.header.events {
import ext.event.Event;
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_column_e_tEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-headerclick Original Ext JS documentation of 'headerclick'
   * @see ext.grid.header.HeaderContainer
   * @eventType onHeaderClick
   * /
  public static const HEADER_CLICK:String = "onHeaderClick";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-headercontextmenu Original Ext JS documentation of 'headercontextmenu'
   * @see ext.grid.header.HeaderContainer
   * @eventType onHeaderContextMenu
   * /
  public static const HEADER_CONTEXT_MENU:String = "onHeaderContextMenu";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-headertriggerclick Original Ext JS documentation of 'headertriggerclick'
   * @see ext.grid.header.HeaderContainer
   * @eventType onHeaderTriggerClick
   * /
  public static const HEADER_TRIGGER_CLICK:String = "onHeaderTriggerClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_column_e_tEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "e", "t", "eOpts"]);}/*;

  public*/ function HeaderContainer_column_e_tEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$OMvl(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get e():Event;

  public native function get t():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_column_e_tEvent$,
      super$OMvl: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        HEADER_CLICK: "onHeaderClick",
        HEADER_CONTEXT_MENU: "onHeaderContextMenu",
        HEADER_TRIGGER_CLICK: "onHeaderTriggerClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
