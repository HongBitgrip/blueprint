Ext.define("ext.toolbar.events.PagingToolbar_pageDataEvent", function(PagingToolbar_pageDataEvent) {/*package ext.toolbar.events {
import ext.toolbar.PagingToolbar;

import net.jangaroo.ext.FlExtEvent;

public class PagingToolbar_pageDataEvent extends FlExtEvent {
  /**
   * Fires after the active page has been changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.toolbar.Paging.html#event-change Original Ext JS documentation of 'change'
   * @see ext.toolbar.PagingToolbar
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PagingToolbar_pageDataEvent.__PARAMETER_SEQUENCE__=( ["source", "pageData", "eOpts"]);}/*;

  public*/ function PagingToolbar_pageDataEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5OiS(type, arguments);
  }/*

  /**
   * An object that has these properties:
   * <ul>
   * <li>
   * <p><code>total</code> : Number</p>
   * <p>The total number of records in the dataset as returned by the server</p>
   * </li>
   * <li>
   * <p><code>currentPage</code> : Number</p>
   * <p>The current page number</p>
   * </li>
   * <li>
   * <p><code>pageCount</code> : Number</p>
   * <p>The total number of pages (calculated from the total number of records in the dataset as returned by the
   * server and the current →<code>ext.data.Store.pageSize</code>)</p>
   * </li>
   * <li>
   * <p><code>toRecord</code> : Number</p>
   * <p>The starting record index for the current page</p>
   * </li>
   * <li>
   * <p><code>fromRecord</code> : Number</p>
   * <p>The ending record index for the current page</p>
   * </li>
   * </ul>
   * @see ext.data.Store#pageSize
   * /
  public native function get pageData():Object;

  public native function get source():PagingToolbar;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PagingToolbar_pageDataEvent$,
      super$5OiS: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
