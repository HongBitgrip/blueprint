Ext.define("com.coremedia.ui.data.Locale", function(Locale) {/*package com.coremedia.ui.data {

import com.coremedia.ui.util.WithEquals;

/**
 * A locale represents the combination of a language and a country,
 * possibly separated into further variants.
 * /
[PublicApi]
public class Locale extends Object implements WithEquals {
  private var languageTag:String;
  private var language:String;
  private var country:String;
  private var script:String;
  private var variant:String;
  private var displayName:String;

  /**
   * Create a new immutable locale object. The given data object should have the
   * following properties:
   * <ul>
   *   <li>languageTag (String)</li>
   *   <li>language (String)</li>
   *   <li>country (String)</li>
   *   <li>script (String)</li>
   *   <li>variant (String)</li>
   *   <li>displayName (String)</li>
   * </ul>
   *
   * @param data an object containing locale properties
   * /
  public*/ function Locale$(data/*:Object*/) {
    this.languageTag$ZOeQ = data.languageTag;
    this.language$ZOeQ = data.language;
    this.country$ZOeQ = data.country;
    this.script$ZOeQ = data.script;
    this.variant$ZOeQ = data.variant;
    this.displayName$ZOeQ = data.displayName;
  }/*

  private static const*/var UNDEFINED_LOCALE$static/*:Locale*/;/* =*/function UNDEFINED_LOCALE$static_(){UNDEFINED_LOCALE$static=(
          makeLocale$static("und", "und", "", "", "", "und"));};/*
  
  private static*/ function makeLocale$static(languageTag/*:String*/,
                                     language/*:String*/,
                                     country/*:String*/,
                                     script/*:String*/,
                                     variant/*:String*/,
                                     displayName/*:String*/)/*:Locale*/ {
    return new Locale({
      languageTag:languageTag,
      language:language,
      country:country,
      script:script,
      variant:variant,
      displayName:displayName
    });
  }/*

  /**
   * Create a locale for the given IETF BCP 47 language tag.
   * The grandfathered language tags mentioned in the specification
   * are not supported.
   * Invalid tags are parsed heuristically to create a closest match.
   *
   * @param languageTag the language tag
   * /
  public static*/ function forLanguageTag$static(languageTag/*:String*/)/*:Locale*/ {
    if (languageTag === null) {
      return null;
    }

    var components/*:Array*/ = languageTag.split("-");
    if (components.length === 0 || components[0] === "") {
      return UNDEFINED_LOCALE$static;
    }

    var language/*:String*/ = components[0];
    var country/*:String*/ = "";
    var script/*:String*/ = "";
    var variant/*:String*/ = "";

    var pos/*:int*/ = 1;
    while (pos < components.length) {
      var component/*:String*/ = components[pos];
      if (isAlpha$static(component) && component.length === 3) {
        // extension language; unsupported
      } else if (isAlpha$static(component) && component.length === 4) {
        script = component;
      } else if (isAlpha$static(component) && component.length === 2) {
        country = component;
      } else if (isNumeric$static(component) && component.length === 3) {
        country = component;
      } else if (component.length >= 5) {
        variant = component;
      } else if (startsNumeric$static(component) && component.length === 4) {
        variant = component;
      } else if (component.length === 1) {
        // extension or private use; unsupported; skip remaining components
        break;
      }
      pos++;
    }

    return makeLocale$static(languageTag,
            language,
            country,
            script,
            variant,
            languageTag);
  }/*

  private static*/ function isAlpha$static(component/*:String*/)/*:Boolean*/ {
    return component.search(/^[a-zA-Z]*$/) === 0;
  }/*

  private static*/ function isNumeric$static(component/*:String*/)/*:Boolean*/ {
    return component.search(/^[0-9]*$/) === 0;
  }/*

  private static*/ function startsNumeric$static(component/*:String*/)/*:Boolean*/ {
    return component.search(/^[0-9]/) === 0;
  }/*

  /**
   * Return the IETF BCP 47 language tag for this locale.
   * The components of this locale are separated by minus characters.
   *
   * @return the IETF BCP 47 language tag
   * /
  public*/ function getLanguageTag()/*:String*/ {
    return this.languageTag$ZOeQ;
  }/*

  /**
   * Return the language code for this locale.
   *
   * @return the language code
   * /
  public*/ function getLanguage()/*:String*/ {
    return this.language$ZOeQ;
  }/*

  /**
   * Return the country code for this locale.
   *
   * @return the country code
   * /
  public*/ function getCountry()/*:String*/ {
    return this.country$ZOeQ;
  }/*

  /**
   * Return the script for this locale.
   *
   * @return the script
   * /
  public*/ function getScript()/*:String*/ {
    return this.script$ZOeQ;
  }/*

  /**
   * Return the variant for this locale.
   *
   * @return the variant
   * /
  public*/ function getVariant()/*:String*/ {
    return this.variant$ZOeQ;
  }/*

  /**
   * Return the display name for this locale, localized in the
   * current UI language.
   *
   * @return the display name
   * /
  public*/ function getDisplayName()/*:String*/ {
    return this.displayName$ZOeQ;
  }/*

  /**
   * Two locales are equal if their language tag is equal.
   *
   * @param o the object with which to compare this object
   * @return whether the given object is a locale with the same language tag
   * /
  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:Locale*/ =AS3.as( o,  Locale);
    return that && that.languageTag$ZOeQ === this.languageTag$ZOeQ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      metadata: {"": ["PublicApi"]},
      languageTag$ZOeQ: null,
      language$ZOeQ: null,
      country$ZOeQ: null,
      script$ZOeQ: null,
      variant$ZOeQ: null,
      displayName$ZOeQ: null,
      constructor: Locale$,
      getLanguageTag: getLanguageTag,
      getLanguage: getLanguage,
      getCountry: getCountry,
      getScript: getScript,
      getVariant: getVariant,
      getDisplayName: getDisplayName,
      equals: equals,
      statics: {
        UNDEFINED_LOCALE: undefined,
        forLanguageTag: forLanguageTag$static,
        __initStatics__: function() {
          UNDEFINED_LOCALE$static_();
        }
      },
      requires: ["com.coremedia.ui.util.WithEquals"]
    };
});
