Ext.define("net.jangaroo.ext.Exml", function(Exml) {/*package net.jangaroo.ext {

public class Exml {

  public static const PREPEND:int = -1;
  public static const APPEND:int = 0;

  private static const*/var AT$static/*:String*/ ="$at";/*

  /**
   * Merge override config object into the given config object.
   * This function is mainly used by code generated from EXML source files.
   * /
  public static*/ function apply$static(config/*:Object*/, overrideConfig/*:Object*/)/*:**/ {
    for (var property/*:String*/ in overrideConfig) {
      if (property.substr(property.length - AT$static.length) !== AT$static) {
        applyProperty$static(config, overrideConfig, property);
      }
    }
    return config;
  }/*

  private static*/ function applyProperty$static(config/*:Object*/, overrideConfig/*:Object*/, property/*:String*/)/*:void*/ {
    var overrideValue/*:**/ = overrideConfig[property];
    if (overrideValue === undefined) {
      // completely ignore properties with a value of "undefined":
      return;
    }
    var atProperty/*:String*/ = property + AT$static;
    var overrideAt/*:int*/ = overrideConfig[atProperty];
    if (overrideAt === undefined) {
      // If the override does not provide an at position,
      // make sure to forget about the at position of the original config, too.
      delete config[atProperty];
    } else {
      var value/*:**/ = config[property];
      var at/*:int*/ = config[atProperty];
      if (value === undefined && at === undefined) {
        // If the original config does not mention the property,
        // pass the at position along with the value.
        config[atProperty] = overrideAt;
      } else {
        var overrideValueArray/*:Array*/ = toArray$static(overrideValue);
        if (overrideAt === Exml.PREPEND) {
          overrideAt = overrideValueArray.length;
        }
        var valueArray/*:Array*/ = toArray$static(value);
        if (at !== undefined) {
          if (at === Exml.PREPEND) {
            at = valueArray.length;
          }
          config[atProperty] = at + overrideAt;
        }
        overrideValue = overrideValueArray.slice(0, overrideAt).concat(valueArray, overrideValueArray.slice(overrideAt));
      }
    }
    config[property] = overrideValue;
  }/*

  private static const*/var EMPTY_ARRAY$static/*:Array*/;/* =*/function EMPTY_ARRAY$static_(){EMPTY_ARRAY$static=( []);};/*

  private static*/ function toArray$static(value/*:**/)/*:Array*/ {
    return value === undefined ? EMPTY_ARRAY$static : value instanceof Array ? value : [value];
  }/*

  public static*/ function eventHandler$static(flexEventName/*:String*/, flexEventClass/*:Class*/, flexEventHandler/*:Function*/)/*:Function*/ {
    return function()/*:**/ {arguments=Array.prototype.slice.call(arguments);
      return flexEventHandler(new flexEventClass(flexEventName, arguments));
    };
  }/*

  public static*/ function asString$static(value/*:**/)/*:String*/ {
    return value === undefined || value === null ? value : String(value);
  }/*}*/function Exml$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Exml$,
      statics: {
        PREPEND: -1,
        APPEND: 0,
        apply: apply$static,
        EMPTY_ARRAY: undefined,
        eventHandler: eventHandler$static,
        asString: asString$static,
        __initStatics__: function() {
          EMPTY_ARRAY$static_();
        }
      }
    };
});
