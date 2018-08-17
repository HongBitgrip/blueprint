Ext.define("ext.panel.events.TablePanel_menu_headerCtEvent", function(TablePanel_menu_headerCtEvent) {/*package ext.panel.events {
import ext.grid.header.HeaderContainer;
import ext.menu.Menu;
import ext.panel.TablePanel;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_menu_headerCtEvent extends FlExtEvent {
  /**
   * Fired immediately after the column header menu is created.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-headermenucreate Original Ext JS documentation of 'headermenucreate'
   * @see ext.panel.TablePanel
   * @eventType onHeaderMenuCreate
   * /
  public static const HEADER_MENU_CREATE:String = "onHeaderMenuCreate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_menu_headerCtEvent.__PARAMETER_SEQUENCE__=( ["grid", "menu", "headerCt", "eOpts"]);}/*;

  public*/ function TablePanel_menu_headerCtEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$VLFd(type, arguments);
  }/*

  /**
   * This grid instance
   * /
  public native function get grid():TablePanel;

  /**
   * This header container
   * /
  public native function get headerCt():HeaderContainer;

  /**
   * The Menu that was created
   * /
  public native function get menu():Menu;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_menu_headerCtEvent$,
      super$VLFd: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        HEADER_MENU_CREATE: "onHeaderMenuCreate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
