Ext.define("ext.util.events.CollectionEvent", function(CollectionEvent) {/*package ext.util.events {
import ext.util.Collection;

import net.jangaroo.ext.FlExtEvent;

public class CollectionEvent extends FlExtEvent {
  /**
   * Fired before changes are made to the collection. This event fires when the
   * <code>→beginUpdate()</code> method is called and the counter it manages transitions from 0 to 1.
   * <p>All <code>→event:onAdd</code> and <code>→event:onRemove</code> events occur between
   * <code>→event:onBeginUpdate</code> and <code>→event:onEndUpdate</code>
   * events so it is best to do only the minimal amount of work in response to these
   * events and move the more expensive side-effects to an <code>→event:onEndUpdate</code> listener.</p>
   * @since 5.0.0
   * @see ext.util.Collection#beginUpdate()
   * @see ext.util.Collection#event:onAdd
   * @see ext.util.Collection#event:onRemove
   * @see ext.util.Collection#event:onBeginUpdate
   * @see ext.util.Collection#event:onEndUpdate
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-beginupdate Original Ext JS documentation of 'beginupdate'
   * @see ext.util.Collection
   * @eventType onBeginUpdate
   * /
  public static const BEGIN_UPDATE:String = "onBeginUpdate";
  /**
   * Fired after changes are made to the collection. This event fires when the <code>→endUpdate()</code>
   * method is called and the counter it manages transitions from 1 to 0.
   * <p>All <code>→event:onAdd</code> and <code>→event:onRemove</code> events occur between
   * <code>→event:onBeginUpdate</code> and <code>→event:onEndUpdate</code>
   * events so it is best to do only the minimal amount of work in response to these
   * events and move the more expensive side-effects to an <code>→event:onEndUpdate</code> listener.</p>
   * @since 5.0.0
   * @see ext.util.Collection#endUpdate()
   * @see ext.util.Collection#event:onAdd
   * @see ext.util.Collection#event:onRemove
   * @see ext.util.Collection#event:onBeginUpdate
   * @see ext.util.Collection#event:onEndUpdate
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-endupdate Original Ext JS documentation of 'endupdate'
   * @see ext.util.Collection
   * @eventType onEndUpdate
   * /
  public static const END_UPDATE:String = "onEndUpdate";
  /**
   * This event fires when the collection has changed entirely. This event is fired in
   * cases where the collection's filter is updated or the items are sorted. While the
   * items previously in the collection may remain the same, the order at a minimum has
   * changed in ways that cannot be simply translated to other events.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-refresh Original Ext JS documentation of 'refresh'
   * @see ext.util.Collection
   * @eventType onRefresh
   * /
  public static const REFRESH:String = "onRefresh";
  /**
   * This event fires after the contents of the collection have been sorted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-sort Original Ext JS documentation of 'sort'
   * @see ext.util.Collection
   * @eventType onSort
   * /
  public static const SORT:String = "onSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CollectionEvent.__PARAMETER_SEQUENCE__=( ["collection", "eOpts"]);}/*;

  public*/ function CollectionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ltJ6(type, arguments);
  }/*

  /**
   * The collection being modified.
   * /
  public native function get collection():Collection;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CollectionEvent$,
      super$ltJ6: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEGIN_UPDATE: "onBeginUpdate",
        END_UPDATE: "onEndUpdate",
        REFRESH: "onRefresh",
        SORT: "onSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
