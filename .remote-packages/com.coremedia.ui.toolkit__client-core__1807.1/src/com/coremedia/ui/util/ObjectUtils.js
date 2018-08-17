Ext.define("com.coremedia.ui.util.ObjectUtils", function(ObjectUtils) {/*package com.coremedia.ui.util {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;

import ext.DateUtil;
import ext.Ext;
import ext.JSON;

/**
 * Object utility functions that complement Ext's and also take care
 * of objects that are instances of Bean or Blob.
 *
 * @see com.coremedia.ui.data.Bean
 * @see com.coremedia.ui.data.Blob
 * /
[PublicApi]
public class ObjectUtils {

  private static const*/var SET$static/* : String*/ = "set";/*
  private static const*/var GET$static/* : String*/ = "get";/*
  private static const*/var IS$static/*  : String*/ = "is";/*
  private static const*/var PREFIX_REG_EXP$static/* : RegExp*/ = /^(get|is)[A-Z]/;/*

  /**
   * Remove properties on the object which are set to undefined.
   * @param o Object to clean
   * @return Object The cleaned object
   * /
  public static*/ function removeUndefinedProperties$static(o/*:Object*/)/*:Object*/ {
    for (var m/*:String*/ in o) {
      if (o[m] === undefined) {
        delete o[m];
      }
    }
    return o;
  }/*

  /**
   * Remove properties on the object which are set to undefined or null.
   * @param o Object to clean
   * @return Object The cleaned object
   * /
  public static*/ function removeUndefinedOrNullProperties$static(o/*:Object*/)/*:Object*/ {
    for (var m/*:String*/ in o) {
      if (o[m] == undefined) { // exactly undefined and null are "== equal" undefined
        delete o[m];
      }
    }
    return o;
  }/*

  /**
   * From the given first argument object, extract exactly those properties that are neither
   * null nor undefined and whose name is listed in the variable argument list properties.
   * Store all found property values in a new object and return that object.
   *
   * @param object the object from which to extract properties
   * @param properties the names of the properties to extract
   * /
  public static*/ function extractNonNullProperties$static(object/*:Object*/, properties/*:Array*/)/*:Object*/ {
    var result/*:Object*/ = {};
    if (object) {
      for (var i/*:uint*/ = 0; i < properties.length; i++) {
        var property/*:**/ = properties[i];
        var value/*:**/ = object[property];
        if (value != undefined) {
          result[property] = value;
        }
      }
    }
    return result;
  }/*

  /**
   * Compare the properties of two objects (not recursively) by property identity,
   * returning true if all properties are equal.
   * Each individual property is compared using the === operator.
   *
   * @param o1 the first Object to compare
   * @param o2 the second Object to compare
   * @return Boolean whether two objects have the same properties
   * /
  public static*/ function compareObjects$static(o1/*:Object*/, o2/*:Object*/)/*:Boolean*/{
    if(o1 == null || o2 == null){
      return o1 == o2;
    }
    for(var p1/*:String*/ in o1){
      if(o1[p1] !== o2[p1]) {
        return false;
      }
    }
    for(var p2/*:String*/ in o2){
      if(o1[p2] !== o2[p2]) {
        return false;
      }
    }
    return true;
  }/*

  /**
   * Compare the properties of two objects (not recursively) by property equality,
   * returning true if all properties are equal.
   * Each individual property is compared using the equal() function as defined
   * by this class.
   *
   * @param o1 the first Object to compare
   * @param o2 the second Object to compare
   * @return Boolean whether two objects have the same properties
   *
   * @see #equal
   * /
  public static*/ function compareObjectsWithEqual$static(o1/*:Object*/, o2/*:Object*/)/*:Boolean*/{
    if(o1 == null || o2 == null){
      return o1 == o2;
    }
    for (var p1/*:String*/ in o1) {
      if (!ObjectUtils.equal(o1[p1], o2[p1])) {
        return false;
      }
    }
    for (var p2/*:String*/ in o2) {
      if (!ObjectUtils.equal(o1[p2], o2[p2])) {
        return false;
      }
    }
    return true;
  }/*

  private static const*/var PRIVATE_MEMBER_NAME$static/*:RegExp*/ = /[^$]\$[0-9]+$/;/*
  private static const*/var CONSTRUCTOR_NAME$static/*:String*/ = 'constructor';/*

  /**
   * Return a new object that contains only the public enumerable properties of the given Jangaroo object.
   * Jangaroo renames private members to avoid name clashes, so private members can be detected based on
   * their name.
   *
   * @param object the object whose public properties to return
   * @return a new object that contains only the public properties of the given object
   * /
  public static*/ function getPublicProperties$static(object/*:Object*/)/*:Object*/ {
    // TODO: move this utility to Jangaroo Runtime!
    var publicProperties/*:Object*/ = {};
    for (var name/*:String*/ in object) {
      if (!PRIVATE_MEMBER_NAME$static.test(name)
              && object.hasOwnProperty(name)
              && name !== CONSTRUCTOR_NAME$static) {
        publicProperties[name] = object[name];
      }
    }
    return publicProperties;
  }/*

  /**
   * Return whether the given object has no enumerable properties.
   * @param object the object to check for enumerable properties
   * @return whether the given object has no enumerable properties
   * /
  public static*/ function isEmpty$static(object/*:Object*/)/*:Boolean*/ {
    for (var m/*:String*/ in object) {
      return false;
    }
    return true;
  }/*

  /**
   * Comparison of two objects. Two objects are considered equal if
   * <ul>
   * <li>they are identical (===),</li>
   * <li>they are both Arrays, have the same <code>length</code>, and contain equal elements,</li>
   * <li>they are both Dates and have the same time and timezone,</li>
   * <li>they are both Blobs and have the same size, mimeType, and data, or</li>
   * <li>the first object implements WithEquals and declares itself equal to the second object.</li>
   * </ul>
   * Otherwise, the Objects are considered not equal.
   *
   * @param o1 the first Object, Array, or Blob to compare
   * @param o2 the second Object, Array, or Blob to compare
   * @return whether both objects are equal.
   * /
  public static*/ function equal$static(o1/*:Object*/, o2/*:Object*/)/*:Boolean*/ {
    if (o1 === o2) {
      // fast path:
      return true;
    }
    if (Ext.isArray(o1)) {
      if (!Ext.isArray(o2) || o1.length !== o2.length) {
        return false;
      }
      for (var i/*:int*/ = 0; i < o1.length; ++i) {
        if (!ObjectUtils.equal(o1[i], o2[i])) {
          return false;
        }
      }
      return true;
    } else if (Ext.isDate(o1)) {
      if (!Ext.isDate(o2)) {
        return false;
      }
      var d1/*:Date*/ =AS3.as( o1,  Date);
      var d2/*:Date*/ =AS3.as( o2,  Date);
      return d1.getTime() === d2.getTime() &&
              d1.getTimezoneOffset() == d2.getTimezoneOffset();
    } else if (AS3.is(o1,  com.coremedia.ui.util.WithEquals)) {
      return (AS3.as(o1,  com.coremedia.ui.util.WithEquals)).equals(o2);
    }
    return false;
  }/*

  private static*/ function toSetterName$static(prop/* : String*/)/* : String*/ {
    return SET$static + toMethodSuffix$static(prop);
  }/*

  private static*/ function toMethodSuffix$static(prop/* : String*/)/* : String*/ {
    return prop.charAt(0).toUpperCase() + prop.substring(1);
  }/*

  /**
   * Set the property of the given object to the given value proceeding according to the following strategy:
   * Use Bean#set if the given object is a bean. Else, try to use #setPropertyNoBean.
   *
   * @param bean the object to modify
   * @param prop the property to write
   * @param value the value to set
   * @throws Error an error if the given property does not exist
   * @return whether the property could be set
   *
   * @see com.coremedia.ui.data.Bean#set
   * /
  public static*/ function setProperty$static(bean/* : Object*/, prop/* : String*/, value/* : **/)/*:Boolean*/ {
    if (AS3.is(bean,  com.coremedia.ui.data.Bean)) {
      return (AS3.as(bean,  com.coremedia.ui.data.Bean)).set(prop, value);
    }
    return ObjectUtils.setPropertyNoBean(bean, prop, value);
  }/*

  /**
   * Set the property of the given object to the given value proceeding according to the following strategy:
   * Try to use the properties setter function, else use bean[prop].
   *
   * @param bean the object to modify
   * @param prop the property to write
   * @param value the value to set
   * @throws Error an error if the given property does not exist
   * @return whether the property could be set
   * /
  public static*/ function setPropertyNoBean$static(bean/* : Object*/, prop/* : String*/, value/* : **/)/*:Boolean*/ {
    var propSetterName/* : String*/ = toSetterName$static(prop);
    if (typeof bean[propSetterName] == "function") {
      // always prefer a setter method over the plain property:
      bean[propSetterName](value);
    } else if (prop in bean || !("$class" in bean.constructor)) {
      // allow to set defined public properties of a joo objects and any property of a non-joo-object:
      bean[prop] = value;
    } else {
      // do not allow to set an undefined property of a joo object:
      throw new AS3.Error("Unknown property " + bean + "." + prop + " set to '" + value + "'.");
    }
    return true;
  }/*

  /**
   * Get the named property of the given object according to the following strategy:
   * Use Bean#get if the given object is a bean. Else, try to use #getPropertyNoBean.
   *
   * @param bean the source
   * @param prop the property to read
   * @return the property value
   *
   * @see com.coremedia.ui.data.Bean#get
   * /
  public static*/ function getProperty$static(bean/* : Object*/, prop/* : String*/)/* : **/ {
    if (AS3.is(bean,  com.coremedia.ui.data.Bean)) {
      return (AS3.as(bean,  com.coremedia.ui.data.Bean)).get(prop);
    }
    return ObjectUtils.getPropertyNoBean(bean, prop);
  }/*

  /**
   * Get the named property of the given object according to the following strategy:
   * Try to use  the properties getter function, else return bean[prop].
   *
   * @param bean the source
   * @param prop the property to read
   * @return the property value
   * /
  public static*/ function getPropertyNoBean$static(bean/*:Object*/, prop/*:String*/)/*:**/ {
    var methodSuffix/* : String*/ = toMethodSuffix$static(prop);
    var propGetterName/* : String*/ = GET$static + methodSuffix;
    if (typeof bean[propGetterName] == "function") {
      // always prefer a getter method over the plain property:
      return bean[propGetterName]();
    }
    var boolPropGetterName/* : String*/ = IS$static + methodSuffix;
    if (typeof bean[boolPropGetterName] == "function") {
      // always prefer a getter method over the plain property:
      return bean[boolPropGetterName]();
    }
    return bean[prop];
  }/*

  /**
   * @private
   * Traverse the given property path from the given object according to the
   * semantics of getProperty(Object, String). The property path may be an array
   * of property names or a dot separated string. If an undefined property value
   * is encountered from any object on the path except an unloaded remote bean,
   * the result is considered unavailable. A special return value can be specified
   * for this case.
   *
   * @param bean the source
   * @param path the path to read; either an array or a dot-separated string
   * @param ifUnavailable the value to return when the property is and will be unavailable
   * @return the property value
   *
   * @see com.coremedia.ui.data.Bean#get
   * /
  public static*/ function getPropertyAt$static(bean/*:Object*/, path/*:**/, ifUnavailable/*:* = undefined*/)/*:**/ {
    var pathArr/*:Array*/ =AS3.is( path,  Array) ? path : String(path).split('.');
    var current/*:**/ = bean;
    for (var i/*:int*/ = 0; i < pathArr.length; i++) {
      var property/*:String*/ = pathArr[i];
      var value/*:**/ = ObjectUtils.getProperty(current, property);
      if (value === undefined) {
        if (AS3.is(current,  com.coremedia.ui.data.RemoteBean) && !AS3.cast(com.coremedia.ui.data.RemoteBean,current).isLoaded()) {
          // The value is not yet known.
          AS3.cast(com.coremedia.ui.data.RemoteBean,current).load();
          return undefined;
        } else {
          return ifUnavailable;
        }
      } else if (value === null) {
        return null;
      }
      current = value;
    }
    return current;
  }/*

  public static*/ function getPropertyPathMapper$static(propertyPath/*:String*/)/*:Function*/ {
    return function (beans/*:Array*/)/*:Array*/ {
      return beans.map(function (bean/*:Bean*/)/*:**/ {
        return ObjectUtils.getPropertyAt(bean, propertyPath);
      });
    };
  }/*

  /**
   * Convert a getter function name String into the corresponding property name String.
   * @param getterName the name of the getter function (e.g. getValue)
   * @return the property name (e.g. value)
   * /
  internal static*/ function toPropertyName$static(getterName/* : String*/)/* : String*/ {
    var match/* : Array*/ = getterName.match(PREFIX_REG_EXP$static);
    if (match) {
      var prefixLength/* : Number*/ = match[1].length;
      return getterName.charAt(prefixLength).toLowerCase() + getterName.substring(prefixLength + 1);
    }
    return null;
  }/*

  /**
   * Convert an object into its JSON representation.
   * Takes care of undefined values, arrays, dates and beans.
   * @param obj the object to convert
   * @return a JSON object
   * /
  public static*/ function toJson$static(obj/*:**/)/*:String*/ {
    if (!Ext.isDefined(obj) || obj === null) {
      return 'null';
    }
    var list/*:Array*/ = [];
    if (Ext.isArray(obj)) {
      // do not use JSON.encode, because it does not handle Bean property values as expected!
      for (var i/*:int*/ = 0; i < obj.length; i++) {
        list.push(ObjectUtils.toJson(obj[i]));
      }
      return '[' + list.join(',') + ']';
    }
    if (Ext.isDate(obj)) {
      // do not use JSON.encode, because we format Dates including time zone!
      return '"' + Ext.Date.format(obj, "c") + '"';
    }
    if (Ext.isObject(obj)) {
      if (AS3.is(obj,  com.coremedia.ui.data.Bean)) {
        return (AS3.as(obj,  com.coremedia.ui.data.Bean)).toJson();
      }
      // do not use JSON.encode, because it does not handle Bean property values as expected!
      obj = ObjectUtils.getPublicProperties(obj);
      for (var prop/*:String*/ in obj) {
        list.push('"' + prop + '":' + ObjectUtils.toJson(obj[prop]));
      }
      return '{' + list.join(',') + '}';
    }

    return Ext.JSON.encode(obj);
  }/*

  /**
   * Given an object, return an array containing the names of all properties of that object.
   * @param object
   * @return
   * /
  public static*/ function getPropertyNames$static(object/*:Object*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for (var prop/*:String*/ in object) {
      result.push(prop);
    }
    return result;
  }/*

  public static*/ function isA$static(classType/*:Class*/)/*:Function*/ {
    return function(any/*:**/)/*:Boolean*/ {
      return AS3.is( any,  classType);
    };
  }/*

  /**
   * Merges those own properties of the source object into the target object that
   * are not set yet there.
   * @param source the source object that should enriched with the own properties of the target
   * @param target the target object to read additional properties from
   * /
  public static*/ function mergeOwnProperties$static(source/*:Object*/, target/*:Object*/)/*:void*/ {
    for (var p1/*:String*/ in source) {
      if(source.hasOwnProperty(p1) && !target[p1]) {
        target[p1] = source[p1];
      }
    }
  }/*
}*/function ObjectUtils$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ObjectUtils$,
      statics: {
        removeUndefinedProperties: removeUndefinedProperties$static,
        removeUndefinedOrNullProperties: removeUndefinedOrNullProperties$static,
        extractNonNullProperties: extractNonNullProperties$static,
        compareObjects: compareObjects$static,
        compareObjectsWithEqual: compareObjectsWithEqual$static,
        getPublicProperties: getPublicProperties$static,
        isEmpty: isEmpty$static,
        equal: equal$static,
        setProperty: setProperty$static,
        setPropertyNoBean: setPropertyNoBean$static,
        getProperty: getProperty$static,
        getPropertyNoBean: getPropertyNoBean$static,
        getPropertyAt: getPropertyAt$static,
        getPropertyPathMapper: getPropertyPathMapper$static,
        toPropertyName: toPropertyName$static,
        toJson: toJson$static,
        getPropertyNames: getPropertyNames$static,
        isA: isA$static,
        mergeOwnProperties: mergeOwnProperties$static
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Date",
        "Ext.JSON"
      ],
      uses: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.WithEquals"
      ]
    };
});
