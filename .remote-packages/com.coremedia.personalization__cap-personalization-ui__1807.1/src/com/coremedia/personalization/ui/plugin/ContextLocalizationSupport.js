Ext.define("com.coremedia.personalization.ui.plugin.ContextLocalizationSupport", function(ContextLocalizationSupport) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2011. All rights reserved.
 * /
package com.coremedia.personalization.ui.plugin {
import ext.DateUtil;

import joo.debug;

import mx.resources.ResourceManager;

/**
 * Support class used for localizing user contexts shown in the profile debugger.
 *
 * @see PersonalizationProfileDebugger
 * @see PersonalizationProfileInformationButton
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
[ResourceBundle('com.coremedia.personalization.ui.PersonalizationContextNames')]
internal class ContextLocalizationSupport {

  private static const*/var PROPERTY_PREFIX$static/*:String*/ = "p13n_context_";

  function ContextLocalizationSupport$() {}/*

  //
  // property localization
  //

  /**
   * The supplied contextName with added prefix 'p13n_context_' is used to look up its localized form  in the
   * global resource bundle. All non-word characters in contextName are removed before the look-up is performed. If
   * the look-up doesn't returned a value, the supplied contextName is returned.
   *
   * @param contextName
   *
   * @return the localized context name
   * /
  public static*/ function localizeContextName$static(contextName/*:String*/)/*:String*/ {
    var localizedName/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.PersonalizationContextNames', PROPERTY_PREFIX$static + propertyEncode$static(contextName));
    return (localizedName !== undefined && localizedName !== null) ? localizedName : contextName;
  }/*

  /**
   * Localizes a property key by looking up the property 'p13n_context_' + contextName + '_' + propertyKey in the
   * global resource bundle. All non-word characters in the arguments are removed before the look-up.  If
   * the look-up doesn't returned a value, the supplied propertyKey is returned.
   *
   * @param contextName
   * @param propertyKey
   *
   * @return the localized property key
   * /
  public static*/ function localizePropertyKey$static(contextName/*:String*/, propertyKey/*:String*/)/*:String*/ {
    var computedKey/*:String*/ = PROPERTY_PREFIX$static + propertyEncode$static(contextName + '_' + propertyKey);
    var localizedName/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.PersonalizationContextNames', computedKey);
    return (localizedName !== undefined && localizedName !== null) ? localizedName : propertyKey;
  }/*

  /**
   * Localizes a property value by looking up the property 'p13n_context_' + contextName + '_' + propertyKey + '_' +
   * propertyValue in the global resource bundle if the value is neither a time, date, nor date+time value. All non-word
   * characters in the arguments are removed before the look-up.  If the look-up doesn't returned a value, the supplied
   * propertyValue is returned.
   *
   * If the value is one of the recognized date/time values (see date/time parsing), the corresponding localization methods
   * are used instead of looking-up a property in the resource bundle.
   *
   * @param contextName
   * @param propertyKey
   * @param propertyValue
   *
   * @return the localized property value
   * /
  public static*/ function localizePropertyValue$static(contextName/*:String*/, propertyKey/*:String*/, propertyValue/*:String*/)/*:String*/ {
    // special date/time handling
    if (ContextLocalizationSupport.isTime(propertyValue)) return ContextLocalizationSupport.localizeTime(propertyValue);
    if (ContextLocalizationSupport.isDate(propertyValue)) return ContextLocalizationSupport.localizeDate(propertyValue);
    if (ContextLocalizationSupport.isDateTime(propertyValue)) return ContextLocalizationSupport.localizeDateTime(propertyValue);

    // not a date/time, so proceed with the default look-up
    var computedKey/*:String*/ = PROPERTY_PREFIX$static + propertyEncode$static(contextName + '_' + propertyKey + '_' + propertyValue);
    var localizedName/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.PersonalizationContextNames', computedKey);

    return (localizedName !== undefined && localizedName !== null) ? localizedName : propertyValue;
  }/*

  private static*/ function propertyEncode$static(value/*:String*/)/*:String*/ {
    // remove all non-word characters from the supplied value to make it a valid property name
    return value.replace(/\W/g, '');
  }/*

  //
  // date/time parsing
  //

  public static*/ function isTime$static(value/*:String*/)/*:Boolean*/ {
    return Ext.Date.parse(value, "H:i:s") != null;
  }/*

  public static*/ function localizeTime$static(value/*:String*/)/*:String*/ {
    var d/*:Date*/ = Ext.Date.parse(value, "H:i:s");
    var df/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_time_format');
    if (d != null && df != null) {
      return Ext.Date.format(d, df);
    } else {
      if(joo.debug) {
        AS3.trace("supplied value is not in the correct format 'H:i:s':" + value);
      }
      return value;
    }
  }/*

  public static*/ function isDate$static(value/*:String*/)/*:Boolean*/ {
    return Ext.Date.parse(value, "Y-m-d") != null;
  }/*

  public static*/ function localizeDate$static(value/*:String*/)/*:String*/ {
    var d/*:Date*/ = Ext.Date.parse(value, "Y-m-d");
    var df/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_format');
    if (d != null && df != null) {
      return Ext.Date.format(d, df);
    } else {
      if(joo.debug) {
        AS3.trace("supplied value is not in the correct format 'Y-m-d':" + value);
      }
      return value;
    }
  }/*

  public static*/ function isDateTime$static(value/*:String*/)/*:Boolean*/ {
    return Ext.Date.parse(value, "Y-m-d\\TH:i:s") != null;
  }/*

  public static*/ function localizeDateTime$static(value/*:String*/)/*:String*/ {
    var d/*:Date*/ = Ext.Date.parse(value, "Y-m-d\\TH:i:s");
    var df/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_time_format');
    if (d != null && df != null) {
      return Ext.Date.format(d, df);
    } else {
      if(joo.debug) {
        AS3.trace("supplied value is not in the correct format 'Y-m-d\\TH:i:s':" + value);
      }
      return value;
    }
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContextLocalizationSupport$,
      statics: {
        localizeContextName: localizeContextName$static,
        localizePropertyKey: localizePropertyKey$static,
        localizePropertyValue: localizePropertyValue$static,
        isTime: isTime$static,
        localizeTime: localizeTime$static,
        isDate: isDate$static,
        localizeDate: localizeDate$static,
        isDateTime: isDateTime$static,
        localizeDateTime: localizeDateTime$static
      },
      requires: [
        "AS3.trace",
        "Ext.Date",
        "com.coremedia.personalization.ui.PersonalizationContextNames_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
