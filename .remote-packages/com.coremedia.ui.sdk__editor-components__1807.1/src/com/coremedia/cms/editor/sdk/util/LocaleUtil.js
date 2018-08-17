Ext.define("com.coremedia.cms.editor.sdk.util.LocaleUtil", function(LocaleUtil) {/*package com.coremedia.cms.editor.sdk.util {

import joo.localeSupport;

/**
 * A collection of utilities for the application localization
 * /
[PublicApi]
public class LocaleUtil {

  /**
   * Return the current application locale.
   * @return the current application locale
   * /
  public static*/ function getLocale$static()/*:String*/ {
    return joo.localeSupport.getLocale();
  }/*

  /**
   * Return the list of all locales supported by the application.
   * @return the list of all locales supported by the application
   * /
  public static*/ function getSupportedLocales$static()/*:Array*/ {
    return joo.localeSupport.getSupportedLocales();
   }/*

}*/function LocaleUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: LocaleUtil$,
      statics: {
        getLocale: getLocale$static,
        getSupportedLocales: getSupportedLocales$static
      }
    };
});
