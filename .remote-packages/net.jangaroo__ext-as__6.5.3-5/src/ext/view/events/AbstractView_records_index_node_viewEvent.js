Ext.define("ext.view.events.AbstractView_records_index_node_viewEvent", function(AbstractView_records_index_node_viewEvent) {/*package ext.view.events {
import ext.view.DataView;

import net.jangaroo.ext.FlExtEvent;

public class AbstractView_records_index_node_viewEvent extends FlExtEvent {
  /**
   * Fires when the nodes associated with an recordset have been added to the underlying store
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-itemadd Original Ext JS documentation of 'itemadd'
   * @see ext.view.AbstractView
   * @eventType onItemAdd
   * /
  public static const ITEM_ADD:String = "onItemAdd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractView_records_index_node_viewEvent.__PARAMETER_SEQUENCE__=( ["records", "index", "node", "view", "eOpts"]);}/*;

  public*/ function AbstractView_records_index_node_viewEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$fWgX(type, arguments);
  }/*

  /**
   * The index at which the set of records was inserted
   * /
  public native function get index():Number;

  [ArrayElementType("js.HTMLElement")]
  /**
   * The node that has just been updated
   * /
  public native function get node():Array;

  [ArrayElementType("ext.data.Model")]
  /**
   * The model instance
   * /
  public native function get records():Array;

  /**
   * The view adding the item
   * /
  public native function get view():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractView_records_index_node_viewEvent$,
      super$fWgX: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_ADD: "onItemAdd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
