Ext.define("com.coremedia.cap.common.impl.StructRemoteBeanImpl", function(StructRemoteBeanImpl) {/*package com.coremedia.cap.common.impl {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.impl.PropertyPathUtil;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.SubBean;

import ext.Ext;

public class StructRemoteBeanImpl extends RemoteBeanImpl implements Struct {

  public*/ function StructRemoteBeanImpl$(path/*:String*/) {
    this.super$reV8(path);
  }/*

  override protected*/ function getOrCreate(object/*:Object*/, propertyPath/*:String*/, lastProperty/*:String*/)/*:**/ {
    var result/*:**/ = object[lastProperty];
    if (result === null || result === undefined) {
      // Find a preexisting descriptor.
      var descriptors/*:Array*/ =AS3.as( object[com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY],  Array);
      var matchingDescriptors/*:Array*/ = descriptors.filter(function(descriptor/*:Object*/)/*:Boolean*/ {
        return descriptor['name'] === lastProperty;
      });
      // If it does not exist, ...
      if (matchingDescriptors.length === 0 ||
              matchingDescriptors[0].type !== com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT ||
              !matchingDescriptors[0].atomic) {
        // ... instantiate the sub-bean.
        this.getStructType$reV8(propertyPath).addStructProperty(lastProperty, com.coremedia.cap.common.impl.StructTypeImpl.createStructObject());
        result = object[lastProperty];
      }
    }
    return result;
  }/*

  override protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    var augmentedNewValues/*:Object*/ = Ext.apply({}, newValues);
    // All properties that are not explicitly given are assumed to have disappeared.
    for (var propertyName/*:String*/ in this.getValueObject()) {
      if (!(propertyName in newValues)) {
        augmentedNewValues[propertyName] = undefined;
      }
    }
    return augmentedNewValues;
  }/*

  /**
   * We have to set the list of property descriptors to the empty list instead of undefined
   * /
  protected override*/ function buildUnreadableProperties()/*:Object*/ {
    var newValues/*:Object*/ = com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.buildUnreadableProperties.call(this);
    newValues[com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY] = [];
    return newValues;
  }/*

  override protected*/ function doUpdateProperties(newValues/*:Object*/, ignoreUpdate/*:Boolean*/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:Object*/ {
    var augmentedNewValues/*:Object*/ = {};
    for (var propertyPath/*:String*/ in newValues) {
      var newValue/*:**/ = newValues[propertyPath];
      // Split path into prefix and last property name:
      var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyPath);
      // Determine that path of the descriptors that contain the descriptor for the property to be updated.
      var lastProperty/*:String*/ = propertyPathArcs.pop();
      var descriptorsPropertyPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.serialize(propertyPathArcs.concat(com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY));
      if (propertyPath === descriptorsPropertyPath) {
        // This is an update of the descriptors.
        // TODO: Check that all existing and not overwritten values are still valid for the new type.
        // Copy the type, unless it has already been copied as a side effect earlier on.
        if (!augmentedNewValues[propertyPath]) {
          augmentedNewValues[propertyPath] = newValue;
        }
      } else {
        // This is an update of an ordinary property.
        // Locate the descriptors. They might have been copied, modified, or set explicitly, but they might also be stored or completely absent.
        var descriptors/*:Array*/ = augmentedNewValues[descriptorsPropertyPath] || newValues[descriptorsPropertyPath] || this.get(descriptorsPropertyPath) || [];
        var matchingDescriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(descriptors, lastProperty);
        if (!matchingDescriptor) {
          if (newValue !== undefined) {
            var augmentedDescriptors/*:Array*/ = descriptors.concat();
            // No matching descriptor was found. Invent one, if possible.
            augmentedDescriptors.push(com.coremedia.cap.common.impl.StructTypeImpl.createDescriptorImplicitly(newValue, lastProperty));
            augmentedNewValues[descriptorsPropertyPath] = augmentedDescriptors;
          }
        } else {
          // Check that the new value matches the constraints of the type.
          if (!ignoreUpdate && !com.coremedia.cap.common.impl.StructTypeImpl.isValidValue(newValue, matchingDescriptor)) {
            throw new AS3.Error("struct property " + propertyPath + " set to invalid value " + newValue);
          }
        }
        augmentedNewValues[propertyPath] = newValue;
      }
    }
    return com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.doUpdateProperties.call(this,augmentedNewValues, ignoreUpdate, oldState, newState);
  }/*

  override protected*/ function isSubObject(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    return value.constructor === Object;
  }/*

  /**
   * @inheritDoc
   * /
  override protected*/ function createSubBean(propertyPath/*:String*/)/*:SubBean*/ {
    return new com.coremedia.cap.common.impl.StructSubBean(this, propertyPath);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getType()/*:StructType*/ {
    return this.getStructType$reV8("");
  }/*

  public*/ function getType_()/*:CapType*/ {
    return this.getType();
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function addAt(propertyPath/*:String*/, position/*:int = -1*/, value/*:* = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position=-1;case 2:value=null;}
    // Split path into prefix and last property name:
    var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyPath);
    var lastProperty/*:String*/ = propertyPathArcs.pop();
    // Determine that path of the descriptors that contain the descriptor for the property to be updated.
    var descriptorsPropertyPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.serialize(propertyPathArcs.concat(com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY));
    // Determine the descriptor for the property.
    var descriptors/*:Array*/ = this.get(descriptorsPropertyPath);
    var matchingDescriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(descriptors, lastProperty);
    if (!matchingDescriptor) {
      throw new AS3.Error("struct property " + propertyPath + " is not defined");
    }
    // Check that the new value would fit into the property.
    if (!matchingDescriptor.collection) {
      throw new AS3.Error("struct property " + propertyPath + " is not a collection");
    }
    value = com.coremedia.cap.common.impl.StructTypeImpl.getInitialValue(matchingDescriptor, true, value);
    if (!com.coremedia.cap.common.impl.StructTypeImpl.isValidAtomicValue(value, matchingDescriptor)) {
      throw new AS3.Error("struct property " + propertyPath + " cannot contain invalid value " + value);
    }
    // Perform the update.
    com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.addAt.call(this,propertyPath,  position, value);
  }/*

  private*/ function getStructType(propertyPrefix/*:String*/)/*:StructType*/ {
    return new com.coremedia.cap.common.impl.StructSubBean(this, propertyPrefix).getType();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.struct.Struct"],
      constructor: StructRemoteBeanImpl$,
      super$reV8: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getOrCreate: getOrCreate,
      processReadResult: processReadResult,
      buildUnreadableProperties: buildUnreadableProperties,
      doUpdateProperties: doUpdateProperties,
      isSubObject: isSubObject,
      createSubBean: createSubBean,
      getType: getType,
      getType_: getType_,
      addAt: addAt,
      getStructType$reV8: getStructType,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.impl.PropertyPathUtil",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ],
      uses: [
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.common.impl.StructSubBean",
        "com.coremedia.cap.common.impl.StructTypeImpl"
      ]
    };
});
