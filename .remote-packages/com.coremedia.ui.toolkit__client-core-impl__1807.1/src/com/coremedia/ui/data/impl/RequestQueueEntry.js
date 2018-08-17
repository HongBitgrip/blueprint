Ext.define("com.coremedia.ui.data.impl.RequestQueueEntry", function(RequestQueueEntry) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.util.ObjectUtils;

internal class RequestQueueEntry {
  /**
   * A callback Function to be invoked after the properties have been updated on the server.
   * /
  public var callback:Function = null;

  private var changedProperties:Object = null;
  private var remoteBean:QueuedRemoteBean;

  public*/ function RequestQueueEntry$(remoteBean/*:QueuedRemoteBean*/) {
    this.remoteBean$s7K2 = remoteBean;
  }/*

  public*/ function getRemoteBean()/*:QueuedRemoteBean*/ {
    return this.remoteBean$s7K2;
  }/*

  /**
   * A property-value map of changed properties for which no write
   * request has been sent so far.
   * <code>null</code> while no changes are pending.
   * /
  public*/ function getChangedProperties()/*:Object*/ {
    return this.changedProperties$s7K2;
  }/*

  /**
   * Remove all property changes associated with this entry.
   * /
  public*/ function clearChangedProperties()/*:void*/ {
    this.changedProperties$s7K2 = null;
  }/*

  /**
   * Add a single changed property to the map of changed properties.
   *
   * @param propertyName the property name
   * @param value the value
   * /
  public*/ function setProperty(propertyName/*:String*/, value/*:Object*/)/*:void*/ {
    if (!this.changedProperties$s7K2) {
      this.changedProperties$s7K2 = {};
    }

    var merged/*:Boolean*/ = this.tryToMergeProperty$s7K2(propertyName, value);

    if (merged) {
      return;
    }

    this.removeObsoleteCurrentProperties$s7K2(propertyName);

    this.changedProperties$s7K2[propertyName] = value;
  }/*

  /**
   * If the given propertyName (actually a serialized property path) starts
   * with one of the current property names, then the given value can be merged
   * into the object structure of the already existing property value.
   *
   * @param propertyName the property name of the new property
   * @param value the value of the new property
   * @return whether the new property could be merged.
   * /
  private*/ function tryToMergeProperty(propertyName/*:String*/, value/*:Object*/)/*:Boolean*/ {
    // Try to find a subsuming property name among the current property names.
    var subsumingPropName/*:String*/;
    for (var propName/*:String*/ in this.changedProperties$s7K2) {
      if (com.coremedia.ui.data.impl.PropertyPathUtil.pathSubsumesPath(propName, propertyName)) {
        subsumingPropName = propName;
        break;
      }
    }

    if (subsumingPropName) {
      try {
        var subsumer/*:Object*/ = this.changedProperties$s7K2[subsumingPropName];

        // Compute the sub-path from the existing property value on.
        var remainingPropPathArgs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyName.substr(subsumingPropName.length + 1));

        // Set given property as sub-property.
        var lastPropertyName/*:String*/ = remainingPropPathArgs.pop();
        var base/*:Object*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(subsumer, remainingPropPathArgs);
        com.coremedia.ui.util.ObjectUtils.setProperty(base, lastPropertyName, value);
      } catch(err){if(AS3.is (err,AS3.Error)) {
        // Should not have gone wrong... this is just to make double sure
        // nothing breaks here. Do nothing in case of error. Still return true. Change might get lost ...
      }else throw err;}

      return true;
    }

    return false;
  }/*

  /**
   * All current properties whose names (property paths) start with the given property name (path) are now
   * obsolete as their values are subsumed by the new property value.
   *
   * @param propertyName the name (path) of the new property.
   * /
  private*/ function removeObsoleteCurrentProperties(propertyName/*:String*/)/*:void*/ {var this$=this;
    var currentPropertyNames/*:Array*/ = [];
    for (var propName/*:String*/ in this.changedProperties$s7K2) {
      currentPropertyNames.push(propName);
    }

    currentPropertyNames.forEach(function (propName/*:String*/)/*:void*/ {
      if (com.coremedia.ui.data.impl.PropertyPathUtil.pathSubsumesPath(propertyName, propName)) {
        delete this$.changedProperties$s7K2[propName];
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      callback: null,
      changedProperties$s7K2: null,
      remoteBean$s7K2: null,
      constructor: RequestQueueEntry$,
      getRemoteBean: getRemoteBean,
      getChangedProperties: getChangedProperties,
      clearChangedProperties: clearChangedProperties,
      setProperty: setProperty,
      tryToMergeProperty$s7K2: tryToMergeProperty,
      removeObsoleteCurrentProperties$s7K2: removeObsoleteCurrentProperties,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.ui.data.impl.PropertyPathUtil"]
    };
});
