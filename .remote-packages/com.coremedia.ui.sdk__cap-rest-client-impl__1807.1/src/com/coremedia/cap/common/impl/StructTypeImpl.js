Ext.define("com.coremedia.cap.common.impl.StructTypeImpl", function(StructTypeImpl) {/*package com.coremedia.cap.common.impl {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.LinkPropertyDescriptor;
import com.coremedia.cap.common.descriptors.StringPropertyDescriptor;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Calendar;

/**
 * An implementation of a StructType for a StructSubBean. This method takes care to convert
 * type change
 * /
public class StructTypeImpl implements StructType {
  /**
   * the meta-property containing the property descriptors
   * /
  public static const DESCRIPTORS_PROPERTY:String = '$Struct';

  private var structSubBean:StructSubBean;

  public*/ function StructTypeImpl$(structSubBean/*:StructSubBean*/) {
    this.structSubBean$rtLi = structSubBean;
  }/*

  internal*/ function getStructSubBean()/*:StructSubBean*/ {
    return this.structSubBean$rtLi;
  }/*

  private*/ function add(rawDescriptor/*:Object*/, initialValue/*:**/)/*:Boolean*/ {
    return this.addProperty(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create(rawDescriptor), initialValue);
  }/*

  public*/ function addProperty(descriptor/*:CapPropertyDescriptor*/, initialValue/*:* = undefined*/)/*:Boolean*/ {
    var propertyName/*:String*/ = descriptor.name;
    var oldDescriptors/*:Array*/ = this.getDirectDescriptors();
    if (!oldDescriptors) {
      oldDescriptors = [];
    }
    if (com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(oldDescriptors, propertyName)) {
      // The descriptor exists already.
      return false;
    }
    initialValue = StructTypeImpl.getInitialValue(descriptor, false, initialValue);
    if (!StructTypeImpl.isValidValue(initialValue, descriptor)) {
      // The initial value is invalid.
      return false;
    }

    var newDescriptors/*:Array*/ = oldDescriptors.concat();
    newDescriptors.push(descriptor);
    this.updateStruct$rtLi(newDescriptors, propertyName, initialValue);
    return true;
  }/*

  internal static*/ function getInitialValue$static(descriptor/*:CapPropertyDescriptor*/,
                                           forItem/*:Boolean*/,
                                           initialValue/*:**/)/*:**/ {
    if (descriptor.collection && !forItem) {
      var objects/*:Array*/ =AS3.as( initialValue,  Array);
      if (!objects) {
        return [];
      }
      return objects.map(function(item/*:**/)/*:**/ {
        return StructTypeImpl.getInitialValue(descriptor, true, item);
      });
    }
    switch (descriptor.type) {
      case com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN: return ! !initialValue;
      case com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER: return !initialValue && initialValue !== 0 ? null : AS3.int_(initialValue);
      case com.coremedia.cap.common.CapPropertyDescriptorType.STRING:  return initialValue || "";
      case com.coremedia.cap.common.CapPropertyDescriptorType.LINK:    return initialValue || null;
      case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:    return initialValue || null;
      case com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT:  return StructTypeImpl.createStructObject(initialValue);
    }
    throw new AS3.Error("Unsupported Struct property type " + descriptor.type);
  }/*

  public*/ function addStringProperty(name/*:String*/, maxLength/*:int*/, value/*:String = ""*/)/*:Boolean*/ {if(arguments.length<=2)value="";
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.STRING, length:maxLength}, value);
  }/*

  public*/ function addStringListProperty(name/*:String*/, maxLength/*:int*/, values/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=2)values=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.STRING, length:maxLength, collection:true}, values);
  }/*

  public*/ function addIntegerProperty(name/*:String*/, value/*:Object = null*/)/*:Boolean*/ {if(arguments.length<=1)value=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER}, value);
  }/*

  public*/ function addIntegerListProperty(name/*:String*/, values/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=1)values=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER, collection:true}, values);
  }/*

  public*/ function addBooleanProperty(name/*:String*/, value/*:Object = null*/)/*:Boolean*/ {if(arguments.length<=1)value=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN}, value);
  }/*

  public*/ function addBooleanListProperty(name/*:String*/, values/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=1)values=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN, collection:true}, values);
  }/*

  public*/ function addLinkProperty(name/*:String*/, linkType/*:CapType*/, link/*:Object = null*/)/*:Boolean*/ {if(arguments.length<=2)link=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.LINK, linkType:linkType}, link);
  }/*

  public*/ function addLinkListProperty(name/*:String*/, linkType/*:CapType*/, links/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=2)links=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.LINK, linkType:linkType, collection:true}, links);
  }/*

  public*/ function addDateProperty(name/*:String*/, value/*:Date = null*/)/*:Boolean*/ {if(arguments.length<=1)value=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.DATE}, value);
  }/*

  public*/ function addDateListProperty(name/*:String*/, values/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=1)values=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.DATE, collection:true}, values);
  }/*

  public*/ function addStructProperty(name/*:String*/, object/*:Object = null*/)/*:Boolean*/ {if(arguments.length<=1)object=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT}, object);
  }/*

  public*/ function addStructListProperty(name/*:String*/, objects/*:Array = null*/)/*:Boolean*/ {if(arguments.length<=1)objects=null;
    return this.add$rtLi({name:name, type:com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT, collection:true}, objects);
  }/*

  public*/ function removeProperty(propertyName/*:String*/)/*:Boolean*/ {
    var oldDescriptors/*:Array*/ = this.structSubBean$rtLi.get(StructTypeImpl.DESCRIPTORS_PROPERTY);
    if (!oldDescriptors) {
      return false;
    }
    var newDescriptors/*:Array*/ = oldDescriptors.filter(function(descriptor/*:Object*/)/*:Boolean*/ {
      return descriptor['name'] !== propertyName;
    });
    if (newDescriptors.length === oldDescriptors.length) {
      // Property did not exist.
      return false;
    }
    this.updateStruct$rtLi(newDescriptors, propertyName);
    return true;
  }/*

  public*/ function renameProperty(oldPropertyName/*:String*/, newPropertyName/*:String*/)/*:Boolean*/ {
    if ("" === newPropertyName) {
      // fixes CMS-3752 - empty name crashes Studio
      return false;
    }
    var oldDescriptors/*:Array*/ = this.getDirectDescriptors();
    var oldDescriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(oldDescriptors, oldPropertyName);
    if (!oldDescriptor) {
      return false; // old property does not even exist!
    }
    if (oldPropertyName === newPropertyName) {
      return true; // nothing to do
    }
    if (com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(oldDescriptors, newPropertyName)) {
      return false; // another property with the new name already exists
    }
    var newDescriptors/*:Array*/ = oldDescriptors.concat();
    var oldPropertyIndex/*:int*/ = oldDescriptors.indexOf(oldDescriptor);
    newDescriptors[oldPropertyIndex] = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.withName(oldDescriptor, newPropertyName);
    var value/*:**/ = atomifyStructs$static(this.structSubBean$rtLi.get(oldPropertyName));
    this.updateStruct$rtLi(newDescriptors, newPropertyName, value, oldPropertyName);
    return true;
  }/*

  private static*/ function atomifyStructs$static(value/*:**/)/*:**/ {
    if (AS3.is(value,  com.coremedia.cap.struct.Struct)) {
      return AS3.cast(com.coremedia.cap.struct.Struct,value).toObject();
    }
    if (AS3.is(value,  Array)) {
      return (AS3.as(value,  Array)).map(atomifyStructs$static);
    }
    return value;
  }/*

  public*/ function rearrangeProperties(propertyNames/*:Array*/)/*:void*/ {
    var oldDescriptors/*:Array*/ = this.structSubBean$rtLi.get(StructTypeImpl.DESCRIPTORS_PROPERTY);
    if (!oldDescriptors) {
      return;
    }

    var descriptorIndex/*:Object*/ = {};
    for (var j/*:int*/ = 0; j < oldDescriptors.length; j++) {
      var descriptor/*:CapPropertyDescriptor*/ = oldDescriptors[j];
      descriptorIndex[descriptor.name] = descriptor;
    }

    var sorted/*:Array*/ = propertyNames.map(function(propertyName/*:String*/)/*:Boolean*/ {
      // Retrieve the descriptors in the desired order.
      var result/*:CapPropertyDescriptor*/ = descriptorIndex[propertyName];
      delete descriptorIndex[propertyName];
      return result;
    }).filter(function(descriptor/*:CapPropertyDescriptor*/)/*:Boolean*/ {
      // If a descriptor is missing, remove the list entry.
      return ! !descriptor;
    });

    var remaining/*:Array*/ = oldDescriptors.filter(function(descriptor/*:CapPropertyDescriptor*/)/*:Boolean*/ {
      // Find those descriptors that have not been processed so far.
      return descriptorIndex.hasOwnProperty(descriptor.name);
    });

    this.updateStruct$rtLi(sorted.concat(remaining));
  }/*

  private*/ function updateStruct(newDescriptors/*:Array*/, propertyName/*:String = null*/, value/*:* = undefined*/,
          propertyToRemove/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:propertyName=null;case 3:propertyToRemove=null;}
    var updateRequest/*:Object*/ = {};
    if (propertyName) {
      updateRequest[propertyName] = value;
      if (propertyToRemove) {
        updateRequest[propertyToRemove] = undefined;
      }
    }
    updateRequest[StructTypeImpl.DESCRIPTORS_PROPERTY] = newDescriptors;
    this.structSubBean$rtLi.updateProperties(updateRequest);
  }/*

  public*/ function hasProperty(propertyName/*:String*/)/*:Boolean*/ {
    return ! !this.getDescriptor(propertyName);
  }/*

  public*/ function getDescriptor(propertyName/*:String*/)/*:CapPropertyDescriptor*/ {
    return com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(this.getDescriptors(), propertyName);
  }/*

  public*/ function getParent()/*:CapType*/ {
    return null;
  }/*

  public*/ function isSubtypeOf(structType/*:**/)/*:Boolean*/ {
    return AS3.is( structType,  StructTypeImpl) && this.getStructSubBean() === (AS3.as(structType,  StructTypeImpl)).getStructSubBean();
  }/*

  public*/ function getName()/*:String*/ {
    return "";
  }/*

  public*/ function isAbstract()/*:Boolean*/ {
    return false;
  }/*

  public*/ function isConcrete()/*:Boolean*/ {
    return true;
  }/*

  public*/ function getDescription()/*:String*/ {
    return "";
  }/*

  public*/ function getDirectDescriptors()/*:Array*/ {
    return this.structSubBean$rtLi.get(StructTypeImpl.DESCRIPTORS_PROPERTY);
  }/*

  public*/ function getDescriptors()/*:Array*/ {
    return this.getDirectDescriptors();
  }/*


  public*/ function getPropertyNames()/*:Array*/ {
    var descriptors/*:Array*/ = this.getDescriptors();
    return descriptors && descriptors.map(descriptorToName$static);
  }/*

  private static*/ function descriptorToName$static(descriptor/*:CapPropertyDescriptor*/)/*:String*/ {
    return descriptor.name;
  }/*

  /**
   * Given a <code>toObject()</code> format of a struct, create a struct object suitable for adding to the internal
   * representation, adding (guessing) missing descriptors.
   * To avoid aliasing, a deep copy of nested struct objects and struct lists is created.
   * /
  internal static*/ function createStructObject$static(structValue/*:Object = null*/)/*:Object*/ {if(arguments.length<=0)structValue=null;
    if (!structValue) {
      structValue = {};
    } else if (AS3.is(structValue,  com.coremedia.cap.struct.Struct)) {
      structValue = AS3.cast(com.coremedia.cap.struct.Struct,structValue).toObject();
    }
    var structObject/*:Object*/ = {};
    var givenDescriptors/*:Array*/ =AS3.as( structValue[StructTypeImpl.DESCRIPTORS_PROPERTY],  Array);
    // since property descriptors are immutable, a flat copy of the descriptors list suffices:
    var descriptors/*:Array*/ = structObject[StructTypeImpl.DESCRIPTORS_PROPERTY] =
            givenDescriptors ? givenDescriptors.concat() : [];
    for (var property/*:String*/ in structValue) {
      if (property === StructTypeImpl.DESCRIPTORS_PROPERTY) {
        // skip $Struct, it has already been handled!
        continue;
      }
      var propertyValue/*:**/ = structValue[property];
      var descriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(descriptors, property);
      if (!descriptor) {
        descriptor = StructTypeImpl.createDescriptorImplicitly(propertyValue, property);
        descriptors.push(descriptor);
      }
      if (descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT) {
        if (descriptor.atomic) {
          propertyValue = StructTypeImpl.createStructObject(propertyValue);
        } else {
          propertyValue = propertyValue instanceof Array ? propertyValue.map(StructTypeImpl.createStructObject) : [];
        }
      }
      if (!StructTypeImpl.isValidValue(propertyValue, descriptor)) {
        throw new AS3.Error("invalid struct property value " + propertyValue + " for descriptor " + descriptor);
      }
      structObject[property] = propertyValue;
    }
    return structObject;
  }/*

  public static*/ function createDescriptorImplicitly$static(value/*:**/,
                                                    name/*:String*/,
                                                    collection/*:Boolean = false*/)/*:CapPropertyDescriptor*/ {if(arguments.length<=2)collection=false;
    var rawDescriptor/*:Object*/ = null;

    if (!collection &&AS3.is( value,  Array)) {
      var array/*:Array*/ =AS3.as( value,  Array);
      if (array.length > 0) {
        collection = true;
        value = array[0];
      }
    }

    switch (typeof value) {
      case "string":
        rawDescriptor = {
          type: com.coremedia.cap.common.CapPropertyDescriptorType.STRING,
          length: AS3.int_.MAX_VALUE,
          encodedLength: AS3.int_.MAX_VALUE
        };
        break;
      case "number":
        rawDescriptor = {
          type: com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER
        };
        break;
      case "boolean":
        rawDescriptor = {
          type: com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN
        };
        break;
      case "object":
        if (AS3.is(value,  com.coremedia.cap.content.Content)) {
          rawDescriptor = {
            type: com.coremedia.cap.common.CapPropertyDescriptorType.LINK,
            linkType: com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentContentType()
          };
        } else if (AS3.is(value,  Date) ||AS3.is( value,  com.coremedia.ui.data.Calendar)) {
          rawDescriptor = {
            type: com.coremedia.cap.common.CapPropertyDescriptorType.DATE
          };
        } else if (value && value.constructor === Object) {
          rawDescriptor = {
            type: com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT
          };
        }
        break;
    }

    if (!rawDescriptor) {
      throw new AS3.Error("unsupported untyped set of struct property: '"+name + "', type: '"+typeof value + "' to '" + value + "'");
    }

    rawDescriptor.name = name;

    if (collection) {
      rawDescriptor.atomic = false;
      rawDescriptor.collection = true;
    } else {
      rawDescriptor.atomic = true;
      rawDescriptor.collection = false;
      rawDescriptor.minCardinality = 1;
      rawDescriptor.maxCardinality = 1;
    }

    return com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create(rawDescriptor);
  }/*

  /**
   * Determines whether a value is valid for a given property descriptor.
   *
   * @param value the value
   * @param propertyDescriptor the property descriptor
   * /
  public static*/ function isValidValue$static(value/*:**/, propertyDescriptor/*:CapPropertyDescriptor*/)/*:Boolean*/ {
    if (propertyDescriptor.atomic) {
      return StructTypeImpl.isValidAtomicValue(value, propertyDescriptor);
    } else {
      var array/*:Array*/ =AS3.as( value,  Array);
      if (!array) {
        return false;
      }
      return array.every(function (element/*:**/)/*:Boolean*/ {
                return StructTypeImpl.isValidAtomicValue(element, propertyDescriptor);
              }
      );
    }
  }/*

  /**
   * Determines whether an atomic value is valid for a given property descriptor.
   * If the descriptor denotes an aggregate, the argument value is assumed to be
   * a member of an array.
   *
   * @param value the value
   * @param propertyDescriptor the property descriptor
   * /
  public static*/ function isValidAtomicValue$static(value/*:**/, propertyDescriptor/*:CapPropertyDescriptor*/)/*:Boolean*/ {
    var propertyDescriptorType/*:String*/ = propertyDescriptor.type;
    switch (propertyDescriptorType) {
      case com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN:
        return isValidBooleanValue$static(value);
      case com.coremedia.cap.common.CapPropertyDescriptorType.STRING:
        return isValidStringValue$static(value, AS3.cast(com.coremedia.cap.common.descriptors.StringPropertyDescriptor,propertyDescriptor));
      case com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER:
        return isValidIntValue$static(value);
      case com.coremedia.cap.common.CapPropertyDescriptorType.LINK:
        return isValidLinkValue$static(value, AS3.cast(com.coremedia.cap.common.descriptors.LinkPropertyDescriptor,propertyDescriptor));
      case com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT:
        return isValidStructValue$static(value);
      case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:
        return isValidDateValue$static(value);
      default:
        throw new AS3.Error("unknown property descriptor type: " + propertyDescriptorType);
    }
  }/*

  private static*/ function isValidBooleanValue$static(value/*:**/)/*:Boolean*/ {
    return value === null || value === true || value === false;
  }/*

  private static*/ function isValidStringValue$static(value/*:**/, propertyDescriptor/*:StringPropertyDescriptor*/)/*:Boolean*/ {
    return AS3.is( value,  String) && (propertyDescriptor.length === undefined || (AS3.as(value,  String)).length <= propertyDescriptor.length);
  }/*

  private static*/ function isValidIntValue$static(value/*:**/)/*:Boolean*/ {
    return value === null ||AS3.is( value,  AS3.int_);
  }/*

  private static*/ function isValidLinkValue$static(value/*:**/, propertyDescriptor/*:LinkPropertyDescriptor*/)/*:Boolean*/ {
    if (value === null) {
      return true;
    }
    var content/*:Content*/ =AS3.as( value,  com.coremedia.cap.content.Content);
    if (content) {
      // Don't try to check type if content is not loaded or not readable / destroyed!
      // If this value is actually not valid, the server will reject it.
      if (propertyDescriptor.linkType !== undefined && content.getState() === com.coremedia.ui.data.BeanState.READABLE
              && content.getType()) {
        return content.getType().isSubtypeOf(propertyDescriptor.linkType);
      }
      return true;
    }
    return false;
  }/*

  private static*/ function isValidStructValue$static(value/*:**/)/*:Boolean*/ {
    return typeof value === "object" && value.constructor === Object && value[StructTypeImpl.DESCRIPTORS_PROPERTY] instanceof Array;
  }/*

  private static*/ function isValidDateValue$static(value/*:**/)/*:Boolean*/ {
    return value === null || value === undefined || value === '' ||AS3.is( value,  Date) ||AS3.is( value,  com.coremedia.ui.data.Calendar);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.struct.StructType"],
      structSubBean$rtLi: null,
      constructor: StructTypeImpl$,
      getStructSubBean: getStructSubBean,
      add$rtLi: add,
      addProperty: addProperty,
      addStringProperty: addStringProperty,
      addStringListProperty: addStringListProperty,
      addIntegerProperty: addIntegerProperty,
      addIntegerListProperty: addIntegerListProperty,
      addBooleanProperty: addBooleanProperty,
      addBooleanListProperty: addBooleanListProperty,
      addLinkProperty: addLinkProperty,
      addLinkListProperty: addLinkListProperty,
      addDateProperty: addDateProperty,
      addDateListProperty: addDateListProperty,
      addStructProperty: addStructProperty,
      addStructListProperty: addStructListProperty,
      removeProperty: removeProperty,
      renameProperty: renameProperty,
      rearrangeProperties: rearrangeProperties,
      updateStruct$rtLi: updateStruct,
      hasProperty: hasProperty,
      getDescriptor: getDescriptor,
      getParent: getParent,
      isSubtypeOf: isSubtypeOf,
      getName: getName,
      isAbstract: isAbstract,
      isConcrete: isConcrete,
      getDescription: getDescription,
      getDirectDescriptors: getDirectDescriptors,
      getDescriptors: getDescriptors,
      getPropertyNames: getPropertyNames,
      statics: {
        DESCRIPTORS_PROPERTY: '$Struct',
        getInitialValue: getInitialValue$static,
        createStructObject: createStructObject$static,
        createDescriptorImplicitly: createDescriptorImplicitly$static,
        isValidValue: isValidValue$static,
        isValidAtomicValue: isValidAtomicValue$static
      },
      requires: [
        "AS3.Error",
        "AS3.int_",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.LinkPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.StringPropertyDescriptor",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cap.struct.StructType",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.Calendar"
      ],
      uses: ["com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil"]
    };
});
