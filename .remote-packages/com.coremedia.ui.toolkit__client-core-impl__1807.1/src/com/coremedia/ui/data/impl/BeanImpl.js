Ext.define("com.coremedia.ui.data.impl.BeanImpl", function(BeanImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.*;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;
import ext.util.Observable;

public class BeanImpl extends Observable implements SubBeanParent {

  private var value:Object;
  /**
   * A hash with all correctly camel-cased property names that have any event listeners.
   * Ext's Observable always lower-cases event names, so "for (eventName in event)" does not work.
   * /
  protected var propertiesWithListeners:Object;

  private var dependencyKey:String = null;

  private static*/ var nextDependencyId$static/*:uint*/ = 0;/*

  public*/ function BeanImpl$(value/*:Object = null*/) {this.super$IuP_();if(arguments.length<=0)value=null;
    this.value$IuP_ = value || ({});
    this.propertiesWithListeners = {};
  }/*

  protected*/ function getValueObject()/*:Object*/ {
    return this.value$IuP_;
  }/*

  /**
   * Special contract between SubBean and BeanImpl: if the property name starts with
   * PropertyPathUtil.INTERNAL_PROPERTY_PATH_SEPARATOR, events should be sent on behalf of the SubBean.
   *
   * @inheritDoc
   * /
  public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    this.addListener(property, onChange);
    this.propertiesWithListeners[property] = true;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removePropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    this.removeListener(property, onChange);
    if (!this.hasListener(property)) {
      delete this.propertiesWithListeners[property];
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function hasPropertyChangeListener(property/*:**/)/*:Boolean*/ {
    return this.hasListener(property);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addValueChangeListener(onChange/*: Function*/)/*:void*/ {
    this.addPropertyChangeListener(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME, onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removeValueChangeListener(onChange/*:Function*/)/*:void*/ {
    this.removePropertyChangeListener(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME, onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function hasValueChangeListener()/*:Boolean*/ {
    return this.hasPropertyChangeListener(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME);
  }/*


  /**
   * @inheritDoc
   * /
  public*/ function get(property/*:**/)/*:**/ {
    if (property === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      return this.getState();
    }

    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanPropertyDependency(this, property));
    return this.doGet(property, false);
  }/*

  public*/ function doGet(propertyPath/*:**/, automaticallyInstantiate/*:Boolean*/)/*:**/ {
    var unwrapped/*:**/ = this.getUnwrapped(propertyPath, automaticallyInstantiate);
    if (AS3.is(unwrapped,  Array)) {
      return this.wrapSubBeansInArray$IuP_(AS3.as(unwrapped,  Array), propertyPath);
    } else if (this.isSubObjectInternal(unwrapped, propertyPath)) {
      return this.createSubBean(propertyPath);
    } else {
      return unwrapped;
    }
  }/*

  private*/ function wrapSubBeansInArray(array/*:Array*/, propertyPath/*:**/)/*:Array*/ {
    var resultArray/*:Array*/ = null;
    for (var i/*:uint*/ = 0; i < array.length; i++) {
      var extendedPropertyPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPath, i);
      var element/*:**/ = array[i];
      if (this.isSubObjectInternal(element, extendedPropertyPath)) {
        if (!resultArray) {
          // A clone must be created.
          resultArray = array.concat();
        }
        resultArray[i] = this.createSubBean(extendedPropertyPath);
      }
    }
    // Return original array if no changes were made.
    return resultArray || array;
  }/*

  public*/ function getUnwrapped(propertyPath/*:**/, automaticallyInstantiate/*:Boolean*/)/*:**/ {
    var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyPath);
    var current/*:**/ = this.value$IuP_;
    var propertyPathPrefix/*:String*/;
    for (var i/*:Number*/ = 0; i < propertyPathArcs.length; i++) {
      var property/*:String*/ = propertyPathArcs[i];
      var nextPropertyPathPrefix/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.append(propertyPathPrefix, property);
      if (i > 0 && !this.isSubObjectInternal(current, propertyPathPrefix) && !(Ext.isArray(current) && this.hasIndex$IuP_(current, property))) {
        // This is not a thing with properties.
        current = undefined;
        break;
      }

      current = automaticallyInstantiate ?
        this.getOrCreate(current, propertyPathPrefix, property) :
        current[property];
      propertyPathPrefix = nextPropertyPathPrefix;
    }
    return current;
  }/*

  /**
   *
   * @param object the object in which to create a subobject
   * @param propertyPath the property path to the object
   * @param lastProperty the property of the object to set
   * /
  protected*/ function getOrCreate(object/*:Object*/, propertyPath/*:String*/, lastProperty/*:String*/)/*:**/ {
    var result/*:**/ = object[lastProperty];
    if (result === undefined) {
      result = com.coremedia.ui.data.beanFactory.createLocalBean();
      this.set(com.coremedia.ui.data.impl.PropertyPathUtil.append(propertyPath, lastProperty), result);
      object[lastProperty] = result;
    }
    return result;
  }/*

  public*/ function instantiate(property/*:**/)/*:**/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanPropertyDependency(this, property));
    return this.doGet(property, true);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function set(property/*:**/, newValue/*:**/)/*:Boolean*/ {
    var properties/*:Object*/ = {};
    properties[property] = newValue;
    return this.updateProperties(properties);
  }/*

  private*/ function getUpdatableArray(property/*:String*/)/*:Array*/ {
    var oldValue/*:**/ = this.getUnwrapped(property, false);
    if (!(AS3.is(oldValue,  Array))) {
      throw new AS3.Error("property '" + property + "' is not array-valued, but contains: " + oldValue);
    }
    var oldArray/*:Array*/ =AS3.as( oldValue,  Array);
    // Clone the array.
    var newArray/*:Array*/ = oldArray.concat();
    return newArray;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addAt(property/*:String*/, position/*:int = -1*/, value/*:* = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position=-1;case 2:value=null;}
    var updatableArray/*:Array*/ = this.getUpdatableArray$IuP_(property);
    if (position < 0) {
      position = updatableArray.length;
    } 
    // Add element.
    updatableArray.splice(position, 0, value);
    this.set(property, updatableArray);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removeAt(property/*:String*/, position/*:int = -1*/)/*:**/ {if(arguments.length<=1)position=-1;
    var updatableArray/*:Array*/ = this.getUpdatableArray$IuP_(property);
    if (position < 0) {
      position = updatableArray.length;
    } 
    // Remove one element.
    var removedElement/*:**/ = updatableArray.splice(position, 1)[0];
    if (AS3.is(removedElement,  com.coremedia.ui.data.impl.SubBean)) {
      removedElement = AS3.cast(com.coremedia.ui.data.impl.SubBean,removedElement).toObject(); // must serialize *before* updating property!
    }
    this.set(property, updatableArray);
    return removedElement;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function toObject()/*:Object*/ {
    this.dependencyOnValue();
    return this.toObjectInternal$IuP_('', this.value$IuP_);
  }/*

  public*/ function dependencyOnValue()/*:void*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanValueDependency(this));
  }/*

  private*/ function toObjectInternal(propertyPath/*:String*/, o/*:**/)/*:**/ {
    if (Ext.isArray(o)) {
      var array/*:Array*/ =AS3.as( o,  Array);
      var resultArray/*:Array*/ = [];
      for (var i/*:uint*/ = 0; i < array.length; i++) {
        resultArray[i] = this.toObjectInternal$IuP_(com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPath, i), array[i]);
      }
      return resultArray;
    } else if (this.isSubObjectInternal(o, propertyPath)) {
      var objectResult/*:Object*/ = {};
      for (var name/*:String*/ in o) {
        objectResult[name] = this.toObjectInternal$IuP_(com.coremedia.ui.data.impl.PropertyPathUtil.append(propertyPath, name), o[name]);
      }
      return objectResult;
    } else {
      return o;
    }
  }/*

  /**
   * Update a set of properties atomically, so that listeners do not
   * see intermediate states. Values not specified in the argument object
   * are not updated.
   *
   * This method cannot be overridden. Override <code>doUpdateProperties()</code> if necessary.
   *
   * @param newValues an object containing all new values
   * @return true if any property actually changed
   *
   * @see #updatePropertiesWithoutEvents()
   * /
  public final*/ function updateProperties(newValues/*:Object*/)/*:Boolean*/ {
    return this.doUpdateProperties(newValues, false, com.coremedia.ui.data.BeanState.READABLE, com.coremedia.ui.data.BeanState.READABLE) != null;
  }/*

  /**
   * This method does nothing by default.
   * Subclasses may override it to implement read-only beans.
   * /
  protected*/ function beforeUpdateProperty()/*:void*/ {
    // Subclasses may override.
  }/*

  /**
   * Update a set of properties atomically, so that listeners do not
   * see intermediate states. Values not specified in the argument object
   * are not updated.
   * <p>
   * Subclasses may override this method to change the set of updated
   * values by cloning the newValue object and making appropriate changes.
   * </p>
   *
   * @param newValues a map from paths to primitive new property values
   * @param ignoreUpdate whether to ignore the updates with respect to
   *   remote write operations
   * @param oldState the old bean state to report in events
   * @param newState the new bean state to report in events
   * @return the overwritten values as a map from paths to primitive overwritten property values
   * /
  protected*/ function doUpdateProperties(newValues/*:Object*/, ignoreUpdate/*:Boolean*/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:Object*/ {/*
    // First, update all properties ...
    const*/var overwrittenValues/*:**/ = this.updatePropertiesWithoutEvents$IuP_(newValues, ignoreUpdate);
    // ... second, send all events ...
    this.firePropertyChangeEvents(overwrittenValues, newValues, oldState, newState);
    // ... third take action if the properties were updated explicitly, not only changed as a result of a load.
    if (!ignoreUpdate && overwrittenValues) {
      this.propertiesUpdated(overwrittenValues, newValues);
    }
    return overwrittenValues;
  }/*

  /**
   * Called after properties have been updated explicitly, not only changed as a result of a load.
   *
   * @param overwrittenValues a map from paths to primitive original property values
   * @param newValues a map from paths to primitive new property values
   * /
  protected*/ function propertiesUpdated(overwrittenValues/*:Object*/, newValues/*:Object*/)/*:void*/ {
  }/*

  /**
   * Update a set of properties
   * @param newValues a map from paths to primitive new property values. If a property value is undefined,
   *   this is interpreted as "delete this property".
   * @return an object containing the old values of changed properties, or null if no property at all has changed
   * /
  private*/ function updatePropertiesWithoutEvents(newValues/*:Object*/, ignoreUpdate/*:Boolean*/)/*:Object*/ {
    var overwrittenValues/*:**/ = {};
    var result/*:Object*/ = null;
    for (var propertyPath/*:String*/ in newValues) {
      // Just store the shortest path that is overwritten in the map overwrittenValues.
      // When that map is read, the old and new values are deeply traversed anyway.
      var alreadyOverwritten/*:Boolean*/ = false;
      var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyPath);
      // Starting from the root object ...
      var base/*:**/ = this.value$IuP_;
      // ... descend into the tree (initially omitting the last path element) ...
      var propertyPathPrefix/*:String*/ = null;
      for (var i/*:Number*/ = 0; i < propertyPathArcs.length - 1; i++) {
        // ... read the next object.
        var property/*:String*/ = propertyPathArcs[i];
        propertyPathPrefix = com.coremedia.ui.data.impl.PropertyPathUtil.append(propertyPathPrefix, property);
        var newBase/*:**/ = base[property];
        // This node should be an object with properties, ...
        if (!this.isSubObjectInternal(newBase, propertyPathPrefix) && !(Ext.isArray(newBase) && this.hasIndex$IuP_(newBase, propertyPathArcs[i + 1]))) {
          // ... but if it is not, we must replace it by an object so that we can later
          // set a value (or another object) on it.
          if (!alreadyOverwritten) {
            // Keep track of the old value.
            overwrittenValues[propertyPathPrefix] = newBase;
            result = overwrittenValues;
            alreadyOverwritten = true;
          }
          // Arrays may automatically be extended at their end.
          if (Ext.isArray(newBase) && propertyPathArcs[i + 1] === String(newBase.length)) {
            // Extend the array ...
            newBase = newBase.concat();
            newBase.push(this.createSubObject());
          } else {
            // Create a new object ...
            newBase = this.createSubObject();
          }
          // ... and insert it into the tree.
          base[property] = newBase;
        }
        // Go one step down.
        base = newBase;
      }

      // Retrieve the value to set ...
      var newValue/*:**/ = newValues[propertyPath];
      // ... and the old value.
      var lastProperty/*:String*/ = propertyPathArcs[propertyPathArcs.length - 1];
      var oldValue/*:**/ = base[lastProperty];
      // If the values actually differ, ...
      if (!com.coremedia.ui.util.ObjectUtils.equal(oldValue, newValue)) {
        if (!ignoreUpdate) {
          this.beforeUpdateProperty();
        }
        newValue = this.rescueBlobs$IuP_(oldValue, newValue, propertyPath);
        // ... store the new value ...
        if (newValue === undefined) {
          // for the local value, undefined means "delete the property":
          delete base[lastProperty];
        } else {
          base[lastProperty] = newValue;
        }
        if (!alreadyOverwritten) {
          // ... and remember to send events if no events are sent
          // for an object higher up in the tree.
          overwrittenValues[propertyPath] = oldValue;
          result = overwrittenValues;
          alreadyOverwritten = true;
        }
      }
    }
    return result;
  }/*

  private*/ function hasIndex(array/*:Array*/, property/*:String*/)/*:Boolean*/ {
    return array.hasOwnProperty(property) && property === String(Number(property));
  }/*

  /**
   * Transitively find all unloaded Blobs in newValue and replace them by the corresponding loaded Blobs from oldValue.
   * /
  private*/ function rescueBlobs(oldValue/*:**/, newValue/*:**/, propertyPath/*:String*/)/*:**/ {
    if (AS3.is(newValue,  com.coremedia.ui.data.Blob) &&AS3.is( oldValue,  com.coremedia.ui.data.Blob)) {
      var newBlob/*:BlobImpl*/ = AS3.cast(com.coremedia.ui.data.impl.BlobImpl,newValue);
      var oldBlob/*:BlobImpl*/ = AS3.cast(com.coremedia.ui.data.impl.BlobImpl,oldValue);

      if (newBlob.getSize() === oldBlob.getSize() && newBlob.getContentType() === oldBlob.getContentType()) {
        // The blobs might be equal. Prefer the old blob over the new blob,
        // because the old blob might be loaded and because listeners might
        // be attached to the old blob.

        if (newBlob.getHash() && newBlob.getHash() === oldBlob.getHash()) {
          // The matching hash code indicates that the value has not changed.
          return oldValue;
        }

        if (oldBlob.getUri() === newBlob.getUri() && newBlob.isImmutable()) {
          // The URI will always store the same value.
          return oldValue;
        }
      }
    } else if (this.isSubObjectInternal(oldValue, propertyPath) && this.isSubObjectInternal(newValue, propertyPath)) {
      for (var key/*:String*/ in newValue) {
        newValue[key] = this.rescueBlobs$IuP_(oldValue[key], newValue[key],
                com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPath, key));
      }
    }
    // Assumption: There are no blobs in arrays. (These would not be replaced.)
    return newValue;
  }/*

  /**
   * Create a SubBean that represents a sub-bean externally
   * in change events.
   *
   * @param propertyPathPrefix the path of this SubBean
   * @return the new SubBeam
   * /
  protected*/ function createSubBean(propertyPathPrefix/*:String*/)/*:SubBean*/ {
    return new com.coremedia.ui.data.impl.SubBean(this, propertyPathPrefix);
  }/*

  /**
   * Create an object that represents a sub-bean internally in the object tree.
   * Subclasses may decide to preset some attributes of the returned object.
   * By default, an empty object is created.
   *
   * @return a newly created object
   * /
  protected*/ function createSubObject()/*:Object*/ {
    return {};
  }/*

  /**
   * Determine whether the given internal value, which is stored at the given property
   * represents a sub-bean, checking for undefined, null, or primitive values before
   * delegating to <code>isSubObject</code>. Primitive values, undefined, and
   * null never represent sub-beans.
   *
   * @param value the internal value
   * @param propertyPath the property path to the value, separating multiple path arcs using dots (.)
   * @return whether the given internal value represents a sub-bean
   *
   * @link #isSubObject
   * /
  protected*/ function isSubObjectInternal(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    // The root object may always be a sub-bean.
    // Non-objects may never be a sub-bean.
    return !propertyPath ||
            value !== null && typeof value === "object" && this.isSubObject(value, propertyPath);
  }/*

  /**
   * Determine whether the given internal value, which is stored at the given property
   * represents a sub-bean. By default, no beans are sub-beans.
   *
   * @param value the internal value; never undefined, null, or a primitive value
   * @param propertyPath the property path to the value, separating multiple path arcs using dots (.)
   * @return whether the given internal value represents a sub-bean
   * /
  protected*/ function isSubObject(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    return false;
  }/*

  /**
   * Fire all events associated with a set of property changes.
   *
   * @param oldValues a map from paths to old property values
   * @param newValues a map from paths to new property values
   * @param oldState the old bean state to report
   * @param newState the new bean state to report
   * /
  protected*/ function firePropertyChangeEvents(oldValues/*:Object*/, newValues/*:Object*/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:void*/ {
    if (oldValues) {
      for (var property/*:String*/ in oldValues) {
        var oldValue/*:**/ = oldValues[property];
        var newValue/*:**/ = newValues[property];

        // Old and new values are known to differ.
        this.fireTopLevelPropertyChangeEvent(property, oldValue, newValue, oldState, newState);
        this.fireSubBeanPropertyChangeEvents$IuP_('', property, oldValue, newValue);
      }
    }
  }/*

  protected*/ function fireTopLevelPropertyChangeEvent(property/*:String*/, oldValue/*:**/, newValue/*:**/,
                                                     oldState/*:BeanState*/, newState/*:BeanState*/)/*:void*/ {
    // If both the old and the new value represent sub-beans,
    // the property has not really changed, because it still
    // resolves into the same sub-bean.
    var isPropertyChange/*:Boolean*/ = !this.isSubObjectInternal(oldValue, property) ||
            !this.isSubObjectInternal(newValue, property);
    // prevent event object creation if there is no listener!
    if (isPropertyChange && this.hasListener(property) ||
            this.hasListener(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME)) {
      var propertyChangeEvent/*:PropertyChangeEvent*/ = com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(this, property, oldValue, newValue, oldState, newState);
      if (isPropertyChange) {
        this.fireEvent(property, propertyChangeEvent);
      }
      this.fireEvent(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME, propertyChangeEvent);
    }
  }/*

  private*/ function fireSubBeanPropertyChangeEvents(propertyPathPrefix/*:String*/, property/*:String*/, oldValue/*:**/, newValue/*:**/)/*:void*/ {
    var subBeanPropertyPath/*:String*/ = propertyPathPrefix === '' ? property : com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPathPrefix, property);
    // If both the old and the new value represent sub-beans,
    // the property has not really changed, because it still
    // resolves into the same sub-bean.
    var isPropertyChange/*:Boolean*/ = !this.isSubObjectInternal(oldValue, subBeanPropertyPath) ||
            !this.isSubObjectInternal(newValue, subBeanPropertyPath);

    var listenerPropertyPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPathPrefix, property);
    var valueChangeListenerPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPathPrefix, com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME);
    // prevent event object creation if there is no listener!
    if (isPropertyChange && this.hasListener(listenerPropertyPath) ||
            this.hasListener(valueChangeListenerPath)) {
      var subBean/*:SubBean*/ = this.createSubBean(propertyPathPrefix);
      var propertyChangeEvent/*:PropertyChangeEvent*/ = com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(subBean, property, oldValue, newValue);
      if (isPropertyChange) {
        this.fireEvent(listenerPropertyPath, propertyChangeEvent);
      }
      this.fireEvent(valueChangeListenerPath, propertyChangeEvent);
    }

    // Recurse in case both values are themselves objects.
    this.fireNestedPropertyChangeEvents$IuP_(subBeanPropertyPath, oldValue, newValue);
  }/*

  /**
   * Fire all events for beans nested below the given property path prefix.
   * Do not fire events for the bean indicated by the property path exactly.
   *
   * @param oldValues the old value
   * @param newValues the new value
   * @param propertyPathPrefix the property path prefix
   * /
  private*/ function fireNestedPropertyChangeEvents(propertyPathPrefix/*:String*/, oldValues/*:**/, newValues/*:**/)/*:void*/ {
    var wasSubObject/*:Boolean*/ = this.isSubObjectInternal(oldValues, propertyPathPrefix);
    var isSubObjectNow/*:Boolean*/ = this.isSubObjectInternal(newValues, propertyPathPrefix);
    if (wasSubObject || isSubObjectNow) {
      // If the property was bound to an object, ...
      if (wasSubObject) {
        // ... traverse all properties of the object ...
        for (var prop1/*:String*/ in oldValues) {
          if (oldValues.hasOwnProperty(prop1)) {
            // ... and send property change events for the nested property path in case the properties differ.
            var overwrittenPropertyValue1/*:**/ = oldValues[prop1];
            var newPropertyValue1/*:**/ = isSubObjectNow && newValues.hasOwnProperty(prop1) ? newValues[prop1] : undefined;
            this.subBeanPropertyMightHaveChanged$IuP_(propertyPathPrefix, prop1, overwrittenPropertyValue1, newPropertyValue1);
          }
        }
      }
      // If the property is bound to an object now, ...
      if (isSubObjectNow) {
        // ... traverse all properties of the object ...
        for (var prop2/*:String*/ in newValues) {
          if (newValues.hasOwnProperty(prop2)) {
            // ... that have not yet been processed ...
            if (!(wasSubObject && oldValues.hasOwnProperty(prop2))) {
              // ... and send property change events for the nested property path in case the properties differ.
              this.subBeanPropertyMightHaveChanged$IuP_(propertyPathPrefix, prop2, undefined, newValues[prop2]);
            }
          }
        }
      }
    } else {
      // Arrays might be arrays of sub-beans.
      var overwrittenArray/*:Array*/ =AS3.as( oldValues,  Array);
      var newArray/*:Array*/ =AS3.as( newValues,  Array);
      if (overwrittenArray || newArray) {
        // Normalize.
        overwrittenArray = overwrittenArray || [];
        newArray = newArray || [];
        // Iterate over all possibly affected indices.
        var maxLength/*:Number*/ = Math.max(overwrittenArray.length, newArray.length);
        for (var i/*:uint*/ = 0; i < maxLength; i++) {
          // Recurse, detecting sub-beans if present.
          this.fireNestedPropertyChangeEvents$IuP_(com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(propertyPathPrefix, i), overwrittenArray[i], newArray[i]);
        }
      }
    }
  }/*

  private*/ function subBeanPropertyMightHaveChanged(propertyPathPrefix/*:String*/, prop/*:String*/, oldValue/*:**/, newValue/*:**/)/*:void*/ {
    if (!com.coremedia.ui.util.ObjectUtils.equal(oldValue, newValue)) {
      this.fireSubBeanPropertyChangeEvents$IuP_(propertyPathPrefix, prop, oldValue, newValue);
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function toJson()/*:String*/ {
    return com.coremedia.ui.util.ObjectUtils.toJson(this.toObject());
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function toString()/*:String*/ {
    return this.toJson();
  }/*

  /**
   * Return the state of this bean. This implementation always returns READABLE.
   * Subclasses may override this method with custom logic, e.g. <code>RemoteBeanImpl#getState()</code>.
   *
   * @see com.coremedia.ui.data.impl.RemoteBeanImpl#getState()
   * @see com.coremedia.ui.data.BeanState#READABLE
   * /
  public*/ function getState()/*:BeanState*/ {
    return com.coremedia.ui.data.BeanState.READABLE;
  }/*

  /**
   * Return a string identifier of this bean for purposes of tracking dependencies efficiently.
   * Because ordinary beans do not have an id, create an artificial id on demand..
   *
   * @return an identifier
   * /
  internal*/ function getDependencyId()/*:String*/ {
    if (this.dependencyKey$IuP_ === null) {
      this.dependencyKey$IuP_ = "local:" + nextDependencyId$static++;
    }
    return this.dependencyKey$IuP_;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.ui.data.impl.SubBeanParent"],
      value$IuP_: null,
      propertiesWithListeners: null,
      dependencyKey$IuP_: null,
      constructor: BeanImpl$,
      super$IuP_: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      getValueObject: getValueObject,
      addPropertyChangeListener: addPropertyChangeListener,
      removePropertyChangeListener: removePropertyChangeListener,
      hasPropertyChangeListener: hasPropertyChangeListener,
      addValueChangeListener: addValueChangeListener,
      removeValueChangeListener: removeValueChangeListener,
      hasValueChangeListener: hasValueChangeListener,
      get: get,
      doGet: doGet,
      wrapSubBeansInArray$IuP_: wrapSubBeansInArray,
      getUnwrapped: getUnwrapped,
      getOrCreate: getOrCreate,
      instantiate: instantiate,
      set: set,
      getUpdatableArray$IuP_: getUpdatableArray,
      addAt: addAt,
      removeAt: removeAt,
      toObject: toObject,
      dependencyOnValue: dependencyOnValue,
      toObjectInternal$IuP_: toObjectInternal,
      updateProperties: updateProperties,
      beforeUpdateProperty: beforeUpdateProperty,
      doUpdateProperties: doUpdateProperties,
      propertiesUpdated: propertiesUpdated,
      updatePropertiesWithoutEvents$IuP_: updatePropertiesWithoutEvents,
      hasIndex$IuP_: hasIndex,
      rescueBlobs$IuP_: rescueBlobs,
      createSubBean: createSubBean,
      createSubObject: createSubObject,
      isSubObjectInternal: isSubObjectInternal,
      isSubObject: isSubObject,
      firePropertyChangeEvents: firePropertyChangeEvents,
      fireTopLevelPropertyChangeEvent: fireTopLevelPropertyChangeEvent,
      fireSubBeanPropertyChangeEvents$IuP_: fireSubBeanPropertyChangeEvents,
      fireNestedPropertyChangeEvents$IuP_: fireNestedPropertyChangeEvents,
      subBeanPropertyMightHaveChanged$IuP_: subBeanPropertyMightHaveChanged,
      toJson: toJson,
      toString: toString,
      getState: getState,
      getDependencyId: getDependencyId,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.SubBeanParent",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.ui.data.impl.BeanConstants",
        "com.coremedia.ui.data.impl.BeanPropertyDependency",
        "com.coremedia.ui.data.impl.BeanValueDependency",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.data.impl.PropertyPathUtil",
        "com.coremedia.ui.data.impl.SubBean",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ]
    };
});
