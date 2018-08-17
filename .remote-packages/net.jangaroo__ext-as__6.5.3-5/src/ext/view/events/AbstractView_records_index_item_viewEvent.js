Ext.define("ext.view.events.AbstractView_records_index_item_viewEvent", function(AbstractView_records_index_item_viewEvent) {/*package ext.view.events {
import ext.view.DataView;

import net.jangaroo.ext.FlExtEvent;

public class AbstractView_records_index_item_viewEvent extends FlExtEvent {
  /**
   * Fires when the node associated with an individual record is removed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-itemremove Original Ext JS documentation of 'itemremove'
   * @see ext.view.AbstractView
   * @eventType onItemRemove
   * /
  public static const ITEM_REMOVE:String = "onItemRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractView_records_index_item_viewEvent.__PARAMETER_SEQUENCE__=( ["records", "index", "item", "view", "eOpts"]);}/*;

  public*/ function AbstractView_records_index_item_viewEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$jtPo(type, arguments);
  }/*

  /**
   * The index from which the records wer removed
   * /
  public native function get index():Number;

  [ArrayElementType("js.HTMLElement")]
  /**
   * The view items removed
   * /
  public native function get item():Array;

  [ArrayElementType("ext.data.Model")]
  /**
   * The model instances removed
   * /
  public native function get records():Array;

  /**
   * The view removing the item
   * /
  public native function get view():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractView_records_index_item_viewEvent$,
      super$jtPo: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_REMOVE: "onItemRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
