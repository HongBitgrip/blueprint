Ext.define("com.coremedia.ui.data.impl.BeanClassRegistry", function(BeanClassRegistry) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.util.Enum;

import ext.ClassManager;
import ext.DateUtil;
import ext.Ext;

import mx.resources.IResourceManager;
import mx.resources.ResourceManager;

public class BeanClassRegistry {

  private static const*/var RESOURCE_MANAGER$static/*:IResourceManager*/;/* =*/function RESOURCE_MANAGER$static_(){RESOURCE_MANAGER$static=( mx.resources.ResourceManager.getInstance());};/*

  private static const*/var PROPERTY_NAME_AND_FACTORY_FUNCTION$static/*:Array*/;/* =*/function PROPERTY_NAME_AND_FACTORY_FUNCTION$static_(){PROPERTY_NAME_AND_FACTORY_FUNCTION$static=( [
    '$Date',  function(type/*:String*/, json/*:Object*/)/*:Date*/ {
      // use Ext Date class extensions (these are not covered by AS API)
      return Ext.Date.parse(json[type], "c");
    },
    '$Calendar',  function(type/*:String*/, json/*:Object*/)/*:Calendar*/ {
      // use Ext Date class extensions (these are not covered by AS API)
      var date/*:Date*/ = Ext.Date.parse(json[type], "c");
      return new com.coremedia.ui.data.Calendar({
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        timeZone: json["timeZone"],
        offset: json["offset"],
        normalized: true
      });
    },
    '$Localized',  function(type/*:String*/, json/*:Object*/)/*:String*/ {
      var key/*:String*/ = json[type];
      var bundle/*:String*/ = json.bundle;
      var default_/*:String*/ = json['default'] || key;
      return RESOURCE_MANAGER$static.getString(bundle, key) || default_;
    },
    '$Type',  function(type/*:String*/, json/*:Object*/)/*:Blob*/ {
      var typeName/*:String*/ = json[type];
      var clazz/*:Class*/ = typeToClass$static[typeName];
      if (!clazz) {
        clazz = AS3.cast(Class,Ext.ClassManager.get(typeName));
        if (!clazz) {
          throw new AS3.Error("cannot convert JSON data with $Type='" + typeName + "', because the class is unknown");
        }
      }
      if (json.name && com.coremedia.ui.util.Enum.isEnumType(clazz)) {
        // Found a serialized Enum value.
        return com.coremedia.ui.util.Enum.namedIn(json.name, clazz);
      } else {
        // Otherwise use a constructor.
        var resolveJson/*:Object*/ = {};
        for (var propertyName/*:String*/ in json) {
          resolveJson[propertyName] = BeanClassRegistry.resolveBeans(json[propertyName]);
        }
        return new clazz(resolveJson);
      }
    }
  ]);};/*

  private static const*/var typeToClass$static;/* =*/function typeToClass$static_(){typeToClass$static=( {});};/*

  /**
   * Register a function that transforms JSON objects received from the
   * REST service. The resolver is only activated when the received JSON
   * object contains a property with the name given in the first argument
   * of this function. The signature of the resolver function is
   * <code>function(property:String, json:Object):Object</code> where
   * <code>property</code> is again the first argument of this function
   * and <code>json</code> is the received JSON object. The function
   * returns the modified JSON object or a new object replacing the
   * JSON object. If multiple resolver apply, resolvers registered
   * earlier take precedence of resolvers registered later.
   *
   * @param property the property indicating the applicability of this resolver
   * @param resolver the resolver function.
   * /
  public static*/ function registerRemoteObjectResolver$static(property/*:String*/, resolver/*:Function*/)/*:void*/ {
    PROPERTY_NAME_AND_FACTORY_FUNCTION$static.push(property, resolver);
  }/*

  public static*/ function registerTypeImplementation$static(type/*:String*/, clazz/*:Class*/)/*:void*/ {
    typeToClass$static[type] = clazz;
  }/*

  /**
   * In the given object, resolve all beans according to the registered
   * resolvers and classes.
   *
   * @param object the object to replace or rewrite
   * @return the resolved bean, potentially the rewritten argument object
   * /
  public static*/ function resolveBeans$static(object/*:Object*/)/*:Object*/ {
    if (Ext.isArray(object)) {
      for (var i/*:int*/ = 0; i < object.length; ++i) {
        object[i] = BeanClassRegistry.resolveBeans(object[i]);
      }
    } else if (Ext.isObject(object)) {
      for (var t/*:int*/ = 0; t < PROPERTY_NAME_AND_FACTORY_FUNCTION$static.length; t += 2) {
        var propertyName/*:String*/ = PROPERTY_NAME_AND_FACTORY_FUNCTION$static[t];
        if (propertyName in object) {
          return PROPERTY_NAME_AND_FACTORY_FUNCTION$static[t + 1](propertyName, object);
        }
      }
      for (var m/*:String*/ in object) {
        object[m] = BeanClassRegistry.resolveBeans(object[m]);
      }
    }
    return object;
  }/*
}*/function BeanClassRegistry$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: BeanClassRegistry$,
      statics: {
        RESOURCE_MANAGER: undefined,
        PROPERTY_NAME_AND_FACTORY_FUNCTION: undefined,
        typeToClass: undefined,
        registerRemoteObjectResolver: registerRemoteObjectResolver$static,
        registerTypeImplementation: registerTypeImplementation$static,
        resolveBeans: resolveBeans$static,
        __initStatics__: function() {
          RESOURCE_MANAGER$static_();
          PROPERTY_NAME_AND_FACTORY_FUNCTION$static_();
          typeToClass$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.ClassManager",
        "Ext.Date",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.util.Enum",
        "mx.resources.ResourceManager"
      ]
    };
});
