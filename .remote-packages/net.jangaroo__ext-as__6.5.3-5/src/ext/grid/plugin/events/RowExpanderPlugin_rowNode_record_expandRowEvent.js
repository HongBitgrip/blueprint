Ext.define("ext.grid.plugin.events.RowExpanderPlugin_rowNode_record_expandRowEvent", function(RowExpanderPlugin_rowNode_record_expandRowEvent) {/*package ext.grid.plugin.events {
import ext.data.Model;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class RowExpanderPlugin_rowNode_record_expandRowEvent extends FlExtEvent {
  /**
   * <b>Fired through the grid's View.</b>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.RowExpander.html#event-collapsebody Original Ext JS documentation of 'collapsebody'
   * @see ext.grid.plugin.RowExpanderPlugin
   * @eventType onCollapseBody
   * /
  public static const COLLAPSE_BODY:String = "onCollapseBody";
  /**
   * <b>Fired through the grid's View</b>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.RowExpander.html#event-expandbody Original Ext JS documentation of 'expandbody'
   * @see ext.grid.plugin.RowExpanderPlugin
   * @eventType onExpandBody
   * /
  public static const EXPAND_BODY:String = "onExpandBody";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){RowExpanderPlugin_rowNode_record_expandRowEvent.__PARAMETER_SEQUENCE__=( ["rowNode", "record", "expandRow", "eOpts"]);}/*;

  public*/ function RowExpanderPlugin_rowNode_record_expandRowEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$TLC5(type, arguments);
  }/*

  /**
   * The &lt;tr&gt; element containing the expanded data.
   * /
  public native function get expandRow():HTMLElement;

  /**
   * The record providing the data.
   * /
  public native function get record():Model;

  /**
   * The &lt;tr&gt; element which owns the expanded row.
   * /
  public native function get rowNode():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: RowExpanderPlugin_rowNode_record_expandRowEvent$,
      super$TLC5: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLLAPSE_BODY: "onCollapseBody",
        EXPAND_BODY: "onExpandBody",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
