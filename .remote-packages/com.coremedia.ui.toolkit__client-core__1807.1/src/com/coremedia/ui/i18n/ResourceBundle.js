Ext.define("com.coremedia.ui.i18n.ResourceBundle", function(ResourceBundle) {/*package com.coremedia.ui.i18n {
import mx.resources.IResourceBundle;

/**
 * Resource bundles contain locale-specific objects via well-known keys.
 * /
[PublicApi]
public class ResourceBundle {

  private const properties:Object =*/function properties_(){this.properties$rPZy=( {});}/*;

  /**
   * Override the properties of a resource bundle with another resource bundle. This should be used to
   * override resource bundles that are provided by other libraries. The source resource bundle does not have to override
   * every property, instead it can provide a subset of the destination properties that should be changed.
   *
   * @param destination the the resource bundle class that should be overridden
   * @param source the source class with the properties that should be copied into the destination class
   * /
  public static*/ function overrideProperties$static(destination/*:IResourceBundle*/, source/*:IResourceBundle*/)/*:void*/ {
    var destObject/*:Object*/ = destination.content;
    var sourceObject/*:Object*/ = source.content;
    if(destObject && sourceObject) {
      for (var key/*:String*/ in sourceObject) {
        var value/*:**/ = sourceObject[key];
        if (typeof value !== 'function') {
          destObject[key] = value;
        }
      }
    }
  }/*

  /**
   * Return the value of the resource bundle stored under the given key if any. Else return the given default value.
   * @param key the name of the value to look up
   * @param defaultValue the default value to be used if there is no value defined for the given key
   * @return either the configured value or the given default value
   * /
  public*/ function getValue(key/*:String*/, defaultValue/*:* = undefined*/)/*:**/ {
    return this.properties$rPZy[key] !== undefined ? this.properties$rPZy[key] : defaultValue;
  }/*

}*/function ResourceBundle$() {properties_.call(this);}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      getValue: getValue,
      constructor: ResourceBundle$,
      statics: {overrideProperties: overrideProperties$static}
    };
});
