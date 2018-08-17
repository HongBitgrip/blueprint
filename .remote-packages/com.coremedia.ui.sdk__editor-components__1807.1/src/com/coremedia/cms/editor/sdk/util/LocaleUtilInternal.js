Ext.define("com.coremedia.cms.editor.sdk.util.LocaleUtilInternal", function(LocaleUtilInternal) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.util.UrlUtil;
import com.coremedia.ui.util.WindowUtil;

import joo.localeSupport;

public class LocaleUtilInternal {


  public static*/ function setPreferredLocale$static()/*:void*/ {
    var hashParameterLocale/*:String*/ = com.coremedia.ui.util.UrlUtil.getHashParam("preferredLocale");
    if (hashParameterLocale) {
      LocaleUtilInternal.setLocale(hashParameterLocale);
      return;
    }

    var preferredLocale/*:String*/ = LocaleUtilInternal.getLocaleFromPreferences();
    if (preferredLocale) {
      LocaleUtilInternal.setLocale(preferredLocale);
    }
  }/*

  public static*/ function getLocaleFromPreferences$static()/*:String*/ {
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    return preferences && preferences.getState() === com.coremedia.ui.data.BeanState.READABLE ?AS3.as( preferences.get("locale"),  String) : null;

  }/*

  /**
   * Sets the current locale to the given locale or, if the given locale is not supported,
   * to the longest match in the supported locales. If there is no match, the locale will
   * be set to <code>null</code>, resulting in the application locale to be retrieved from
   * the user's browser settings on next application reload.
   * <p>Note that when the resulting locale is different from the current locale, the
   * application is reloaded immediately.
   * </p>
   * <p>The resulting locale is stored in a browser Cookie (to even work for log-in)
   * as well as in the user's preferences (to be used even when the user logs in from
   * another browser). If the resulting locale is <code>null</code>, both the Cookie and
   * the preference setting are deleted, resulting in the application locale to be retrieved
   * from the user's browser settings on next application reload.
   * </p>
   *
   * @param locale the locale to use for the application
   * @return String the supported locale that has actually been set
   * /
  public static*/ function setLocale$static(locale/*:String*/)/*:String*/ {
    var currentLocale/*:String*/ = com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale();
    // while RBACL#setLocale() internally checks for the given locale being supported, we have to
    // check ourselves, as we want to allow clearing the locale in the user preferences by handing in "null":
    var supportedLocale/*:String*/ = joo.localeSupport.findSupportedLocale(locale);
    if (!supportedLocale) {
      supportedLocale = joo.localeSupport.getDefaultLocale();
    }
    var preferredLocale/*:String*/ = LocaleUtilInternal.getLocaleFromPreferences();
    var preferences/*:Struct*/;
    if (preferredLocale !== supportedLocale) {
      preferences = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
      if (preferences && preferences.getState() === com.coremedia.ui.data.BeanState.READABLE) { // if we can't read, don't bother to write.
        preferences.set("locale", supportedLocale);
      } else {
        preferences = null; // prevent flush() if not readable
      }
    }
    var newLocale/*:String*/ = joo.localeSupport.setLocale(supportedLocale);
    if (newLocale !== currentLocale) {
      if (preferredLocale !== supportedLocale &&AS3.is( preferences,  com.coremedia.ui.data.RemoteBean)) {
        AS3.cast(com.coremedia.ui.data.RemoteBean,preferences).flush(com.coremedia.ui.util.WindowUtil.forceReload);
      } else {
        com.coremedia.ui.util.WindowUtil.forceReload();
      }
    }
    return newLocale;
  }/*
}*/function LocaleUtilInternal$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LocaleUtilInternal$,
      statics: {
        setPreferredLocale: setPreferredLocale$static,
        getLocaleFromPreferences: getLocaleFromPreferences$static,
        setLocale: setLocale$static
      },
      requires: [
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.UrlUtil",
        "com.coremedia.ui.util.WindowUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil"
      ]
    };
});
