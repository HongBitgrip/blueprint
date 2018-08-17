Ext.define("ext.view.events.AbstractView_record_index_node_viewEvent", function(AbstractView_record_index_node_viewEvent) {/*package ext.view.events {
import ext.data.Model;
import ext.view.DataView;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class AbstractView_record_index_node_viewEvent extends FlExtEvent {
  /**
   * Fires when the node associated with an individual record is updated
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-itemupdate Original Ext JS documentation of 'itemupdate'
   * @see ext.view.AbstractView
   * @eventType onItemUpdate
   * /
  public static const ITEM_UPDATE:String = "onItemUpdate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractView_record_index_node_viewEvent.__PARAMETER_SEQUENCE__=( ["record", "index", "node", "view", "eOpts"]);}/*;

  public*/ function AbstractView_record_index_node_viewEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$p_wK(type, arguments);
  }/*

  /**
   * The index of the record
   * /
  public native function get index():Number;

  /**
   * The node that has just been updated
   * /
  public native function get node():HTMLElement;

  /**
   * The model instance
   * /
  public native function get record():Model;

  /**
   * The view containing the item
   * /
  public native function get view():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractView_record_index_node_viewEvent$,
      super$p_wK: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_UPDATE: "onItemUpdate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
