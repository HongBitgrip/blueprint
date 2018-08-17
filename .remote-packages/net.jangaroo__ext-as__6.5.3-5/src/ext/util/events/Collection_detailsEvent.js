Ext.define("ext.util.events.Collection_detailsEvent", function(Collection_detailsEvent) {/*package ext.util.events {
import ext.util.Collection;

import net.jangaroo.ext.FlExtEvent;

public class Collection_detailsEvent extends FlExtEvent {
  /**
   * Fires after items have been added to the collection.
   * <p>All <code>→event:onAdd</code> and <code>→event:onRemove</code> events occur between
   * <code>→event:onBeginUpdate</code> and <code>→event:onEndUpdate</code>
   * events so it is best to do only the minimal amount of work in response to these
   * events and move the more expensive side-effects to an <code>→event:onEndUpdate</code> listener.</p>
   * @since 5.0.0
   * @see ext.util.Collection#event:onAdd
   * @see ext.util.Collection#event:onRemove
   * @see ext.util.Collection#event:onBeginUpdate
   * @see ext.util.Collection#event:onEndUpdate
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-add Original Ext JS documentation of 'add'
   * @see ext.util.Collection
   * @eventType onAdd
   * /
  public static const ADD:String = "onAdd";
  /**
   * This event fires before an item change is reflected in the collection. This event
   * is always followed by an <code>→event:onItemChange</code> event and, depending on the change, possibly
   * an <code>add</code>, <code>remove</code> and/or <code>→event:onUpdateKey</code> event.
   * @since 5.0.0
   * @see ext.util.Collection#event:onItemChange
   * @see ext.util.Collection#event:onUpdateKey
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-beforeitemchange Original Ext JS documentation of 'beforeitemchange'
   * @see ext.util.Collection
   * @eventType onBeforeItemChange
   * /
  public static const BEFORE_ITEM_CHANGE:String = "onBeforeItemChange";
  /**
   * This event fires after an item change is reflected in the collection. This event
   * always follows a <code>→event:onBeforeItemChange</code> event and its corresponding <code>add</code>, <code>remove</code>
   * and/or <code>→event:onUpdateKey</code> events.
   * @since 5.0.0
   * @see ext.util.Collection#event:onBeforeItemChange
   * @see ext.util.Collection#event:onUpdateKey
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-itemchange Original Ext JS documentation of 'itemchange'
   * @see ext.util.Collection
   * @eventType onItemChange
   * /
  public static const ITEM_CHANGE:String = "onItemChange";
  /**
   * Fires after items have been removed from the collection. Some properties of this
   * object may not be present if calculating them is deemed too expensive. These are
   * marked as "optional".
   * <p>All <code>→event:onAdd</code> and <code>→event:onRemove</code> events occur between
   * <code>→event:onBeginUpdate</code> and <code>→event:onEndUpdate</code>
   * events so it is best to do only the minimal amount of work in response to these
   * events and move the more expensive side-effects to an <code>→event:onEndUpdate</code> listener.</p>
   * @since 5.0.0
   * @see ext.util.Collection#event:onAdd
   * @see ext.util.Collection#event:onRemove
   * @see ext.util.Collection#event:onBeginUpdate
   * @see ext.util.Collection#event:onEndUpdate
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.util.Collection
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  /**
   * Fires after the key for an item has changed.
   * @since 5.0.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.Collection.html#event-updatekey Original Ext JS documentation of 'updatekey'
   * @see ext.util.Collection
   * @eventType onUpdateKey
   * /
  public static const UPDATE_KEY:String = "onUpdateKey";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Collection_detailsEvent.__PARAMETER_SEQUENCE__=( ["collection", "details", "eOpts"]);}/*;

  public*/ function Collection_detailsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$A$cZ(type, arguments);
  }/*

  /**
   * The collection being modified.
   * /
  public native function get collection():Collection;

  /**
   * An object describing the addition.
   * <ul>
   * <li><code>at:Number</code> (optional) —
   * The index in the collection where the add occurred.
   * </li>
   * <li><code>atItem:Object</code> (optional) —
   * The item after which the new items were inserted or
   * <code>null</code> if at the beginning of the collection.
   * </li>
   * <li><code>items:Array</code> (optional) —
   * The items that are now added to the collection.
   * </li>
   * <li><code>keys:Array</code> (optional) —
   * If available this array holds the keys (extracted by
   * <code>→getKey()</code>) for each item in the <code>→items</code> array.
   * </li>
   * <li><code>next:Object</code> (optional) —
   * If more <code>→event:onAdd</code> events are in queue
   * to be delivered this is a reference to the <code>details</code> instance for the next
   * <code>→event:onAdd</code> event. This will only be the case when the collection is
   * sorted as the new items often need to be inserted at multiple locations to maintain
   * the sort. In this case, all of the new items have already been added not just those
   * described by the first <code>→event:onAdd</code> event.
   * </li>
   * <li><code>replaced:Object</code> (optional) —
   * If this addition has a corresponding set of
   * <code>→event:onRemove</code> events this reference holds the <code>details</code> object for
   * the first <code>remove</code> event. That <code>details</code> object may have a <code>next</code> property if there
   * are multiple associated <code>remove</code> events.
   * </li>
   * </ul>
   * @see ext.util.Collection#getKey()
   * @see ext.util.Collection#items
   * @see ext.util.Collection#event:onAdd
   * @see ext.util.Collection#event:onRemove
   * /
  public native function get details():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Collection_detailsEvent$,
      super$A$cZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD: "onAdd",
        BEFORE_ITEM_CHANGE: "onBeforeItemChange",
        ITEM_CHANGE: "onItemChange",
        REMOVE: "onRemove",
        UPDATE_KEY: "onUpdateKey",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
