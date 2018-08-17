Ext.define("ext.grid.feature.events.Grouping_view_node_group_eEvent", function(Grouping_view_node_group_eEvent) {/*package ext.grid.feature.events {
import ext.event.Event;
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class Grouping_view_node_group_eEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.feature.Grouping.html#event-groupclick Original Ext JS documentation of 'groupclick'
   * @see ext.grid.feature.Grouping
   * @eventType onGroupClick
   * /
  public static const GROUP_CLICK:String = "onGroupClick";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.feature.Grouping.html#event-groupcontextmenu Original Ext JS documentation of 'groupcontextmenu'
   * @see ext.grid.feature.Grouping
   * @eventType onGroupContextMenu
   * /
  public static const GROUP_CONTEXT_MENU:String = "onGroupContextMenu";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.feature.Grouping.html#event-groupdblclick Original Ext JS documentation of 'groupdblclick'
   * @see ext.grid.feature.Grouping
   * @eventType onGroupDblclick
   * /
  public static const GROUP_DBLCLICK:String = "onGroupDblclick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Grouping_view_node_group_eEvent.__PARAMETER_SEQUENCE__=( ["view", "node", "group", "e", "eOpts"]);}/*;

  public*/ function Grouping_view_node_group_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$hyI(type, arguments);
  }/*

  public native function get e():Event;

  /**
   * The name of the group
   * /
  public native function get group():String;

  public native function get node():HTMLElement;

  public native function get view():TableView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Grouping_view_node_group_eEvent$,
      super$$hyI: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        GROUP_CLICK: "onGroupClick",
        GROUP_CONTEXT_MENU: "onGroupContextMenu",
        GROUP_DBLCLICK: "onGroupDblclick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
