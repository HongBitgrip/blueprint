Ext.define("com.coremedia.ui.data.Bean", function(Bean) {/*package com.coremedia.ui.data {

/**
 * Fires when the state of the bean changes.
 * @eventType com.coremedia.ui.data.BeanState.PROPERTY_NAME
 * @see BeanState
 * /
[Event(name="_state", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * A Bean is a generic object that can be used as a model in a model-view-controller (MVC) setting.
 * <p>A Bean has arbitrary properties for which you can attach (and remove) event listeners.
 * You can also attach a "value change" listener that is invoked if any property changes.</p>
 * <p>When a property is set property change events are sent immediately.
 * You can set several properties "atomically" using <code>updateProperties()</code>.</p>
 * <p>To retrieve a snapshot of all properties and their values, use <code>toObject()</code>.
 * To convert a Bean to a plain JSON object, use <code>toJson()</code>.</p>
 * <p>Although all Beans have a "state", this property is only relevant for RemoteBeans, as local
 * Beans always have a state of BeanState.READABLE.</p>
 *
 * @see #toObject()
 * @see #toJson()
 * @see BeanState
 * @see RemoteBean
 * /
[PublicApi]
public interface Bean {

  /**
   * Add a property change listener function that is called on changes to the given property of this Bean.
   *
   * @param property the name of the property to listen to changes.
   * If the given property is not of type String, it is converted to a String before further processing.
   * @param onChange the change listener, a function that receives a PropertyChangeEvent parameter. Signature:
   *   <code>function(event:PropertyChangeEvent):void</code>
   * @see com.coremedia.ui.data.PropertyChangeEvent
   * /
  function addPropertyChangeListener(property:*, onChange:Function):void;

  /**
   * Remove a property change listener function that has been added using addPropertyChangeListener().
   *
   * @param property the name of the property to stop listening to changes.
   * If the given property is not of type String, it is converted to a String before further processing.
   * @param onChange the change listener function to remove.
   * /
  function removePropertyChangeListener(property:*, onChange:Function):void;

  /**
   * Return whether this Bean has any listeners for changes of the given property.
   *
   * @param property the name of the property to check for listeners.
   * @return whether this Bean has any listeners for changes of the given property.
   * /
  function hasPropertyChangeListener(property:*):Boolean;

  /**
   * Register for a change event if any property of the bean has been changed - even unknown ones.
   *
   * @param onChange the callback function for the change event. The signature of the callback function
   * is similar to property change listeners passed to addPropertyChangeListener().
   * @see #addPropertyChangeListener()
   * /
  function addValueChangeListener(onChange: Function):void;

  /**
   * Remove the value change listener from the list of listeners.
   *
   * @param onChange the callback function
   * /
  function removeValueChangeListener(onChange:Function):void;

  /**
   * Check if there are value change listeners registered with this bean.
   *
   * @return whether there are value change listeners
   * /
  function hasValueChangeListener():Boolean;

  /**
   * Return the value of the given property.
   * This method registers a dependency with the dependency tracker.
   *
   * @param property the name of some property, e.g. "foo",
   * If the given property is not of type String, it is converted to a String before further processing.
   * @return the value of the given property.
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function get(property:*):*;

  /**
   * Initialize the given object property with an empty object if the property is not yet set. The bean must decide which
   * value to create depending on the available type information. If the property is not object-valued or
   * if the value type cannot be determined, a bean may return <code>undefined</code> from this
   * method.
   * This method registers a dependency with the dependency tracker.
   *
   * @param property the name of some property, e.g. "foo",
   *   If the given property is not of type String, it is converted to a String before further processing.
   * @return the value of the given property, possibly a newly created object; undefined,
   *   if no object could be created
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function instantiate(property:*):*;

  /**
   * Set the given property of this Bean to the given value.
   *
   * @return whether the given value is different from the property's old value.
   * /
  function set(property:*, value:*):Boolean;

  /**
   * Return an Object containing all properties of this Bean.
   * This object is a snapshot of the Bean's state and modifying it does
   * not change the Bean.
   * This method registers a dependency with the dependency tracker.
   *
   * @return an Object containing all properties of this Bean.
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function toObject():Object;

  /**
   * Set multiple properties of this Bean.
   *
   * @param newValue an Object containing all properties to be set.
   * @return whether any actual changes have been made.
   * /
  function updateProperties(newValue:Object):Boolean;

  /**
   * Return a JSON representation of this Bean.
   * This method registers a dependency with the dependency tracker.
   *
   * @return a JSON representation of this Bean.
   *
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function toJson():String;

  /**
   * Return the state of this bean.
   * While local Beans are always in state <code>BeanState.READABLE</code>, the state of
   * <code>RemoteBean</code>s depends on their loading state.
   *
   * This method does not cause remote beans to be loaded.
   * Call <code>load()</code> if necessary.
   * The state may be known even if a remote bean has not been loaded.
   * This method registers a dependency with the dependency tracker.
   *
   * @see RemoteBean
   * @see BeanState
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * /
  function getState():BeanState;

  /**
   * Insert an element into the Array value of the given property before the given position.
   * This method may only be called if the property value actually is an Array.
   * If position is negative, the value is appended to the Array.
   * If no value is given, the default value of the Array's type is used, or <code>null</code>
   * for untyped Arrays.
   * A new value for a Struct list must be given in the serialized format (<code>toObject()</code>).
   *
   * @param property name of the property whose Array value is to be updated
   * @param position the index in the Array before which to insert the new value
   * @param value the new value to insert into the list
   * /
  function addAt(property:String, position:int = -1, value:* = null):void;

  /**
   * Remove an element from the Array value of the given property at the given position.
   * This method may only be called if the property value actually is an Array.
   * If position is negative, the last value of the Array is removed.
   * A snapshot of the removed element value is returned.
   *
   * @param property name of the property whose Array value is to be updated
   * @param position the index in the Array at which to remove the element
   * @return a snapshot of the element value that has been removed
   * /
  function removeAt(property:String, position:int = -1):*;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
