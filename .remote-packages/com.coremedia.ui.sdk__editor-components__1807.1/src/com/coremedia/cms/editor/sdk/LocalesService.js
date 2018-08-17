Ext.define("com.coremedia.cms.editor.sdk.LocalesService", function(LocalesService) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;

/**
 * Provides access to the locales that can be set as a document's locale.
 * /
public interface LocalesService {
  /**
   * Returns a ValueExpression which resolves to an object containing the available locales.
   * The object contains the language tags as keys and the matching Locale objects as values.
   * During initialization the values are loaded asynchronously after the tags and thus may be undefined.
   *
   * @return the ValueExpression
   *
   * @see com.coremedia.ui.data.Locale
   * /
  function getAvailableLocalesExpression():ValueExpression;

  /**
   * Return a locale object for the given language tag.
   * Return null if the language tag does not refer to a supported locale.
   * Return undefined if the set of locale has not yet been loaded.
   *
   * @param languageTag the language tag
   * @return the locale
   * /
  function getLocale(languageTag:String):Locale;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
