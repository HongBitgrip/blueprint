Ext.define("ext.grid.header.events.HeaderContainer_menuEvent", function(HeaderContainer_menuEvent) {/*package ext.grid.header.events {
import ext.grid.header.HeaderContainer;
import ext.menu.Menu;

import net.jangaroo.ext.FlExtEvent;

public class HeaderContainer_menuEvent extends FlExtEvent {
  /**
   * Fired immediately after the column header menu is created.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.header.Container.html#event-menucreate Original Ext JS documentation of 'menucreate'
   * @see ext.grid.header.HeaderContainer
   * @eventType onMenuCreate
   * /
  public static const MENU_CREATE:String = "onMenuCreate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HeaderContainer_menuEvent.__PARAMETER_SEQUENCE__=( ["ct", "menu", "eOpts"]);}/*;

  public*/ function HeaderContainer_menuEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$O441(type, arguments);
  }/*

  /**
   * This instance
   * /
  public native function get ct():HeaderContainer;

  /**
   * The Menu that was created
   * /
  public native function get menu():Menu;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HeaderContainer_menuEvent$,
      super$O441: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MENU_CREATE: "onMenuCreate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
