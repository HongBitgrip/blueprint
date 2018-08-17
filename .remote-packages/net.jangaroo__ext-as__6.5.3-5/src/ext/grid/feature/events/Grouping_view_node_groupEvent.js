Ext.define("ext.grid.feature.events.Grouping_view_node_groupEvent", function(Grouping_view_node_groupEvent) {/*package ext.grid.feature.events {
import ext.view.TableView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class Grouping_view_node_groupEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.feature.Grouping.html#event-groupcollapse Original Ext JS documentation of 'groupcollapse'
   * @see ext.grid.feature.Grouping
   * @eventType onGroupCollapse
   * /
  public static const GROUP_COLLAPSE:String = "onGroupCollapse";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.feature.Grouping.html#event-groupexpand Original Ext JS documentation of 'groupexpand'
   * @see ext.grid.feature.Grouping
   * @eventType onGroupExpand
   * /
  public static const GROUP_EXPAND:String = "onGroupExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Grouping_view_node_groupEvent.__PARAMETER_SEQUENCE__=( ["view", "node", "group", "eOpts"]);}/*;

  public*/ function Grouping_view_node_groupEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$x6Au(type, arguments);
  }/*

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
      constructor: Grouping_view_node_groupEvent$,
      super$x6Au: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        GROUP_COLLAPSE: "onGroupCollapse",
        GROUP_EXPAND: "onGroupExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
