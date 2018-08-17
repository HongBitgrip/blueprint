Ext.define("com.coremedia.cms.editor.sdk.util.SiteUtil", function(SiteUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.Locale;

/**
 * Utility class to show site information in the UI.
 * The methods in this class are designed to be used in a function value expression.
 * /
[PublicApi]
public class SiteUtil {
  /**
   * Returns the name of the content's site, or the empty string if not in any site, or undefined if still loading.
   * /
  public static*/ function getSiteNameFor$static(content/* :Content*/)/*:String*/ {
    var siteName/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteNameFor(content);
    if(siteName === undefined) {
      return undefined;
    }
    return siteName || '';
  }/*

  /**
   * Returns the display name of the content's site's locale, or the empty string if not in any site,
   * or undefined if still loading.
   * /
  public static*/ function getSiteLocaleNameFor$static(content/* :Content*/)/*:String*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
    if (site === undefined) {
      // not loaded
      return undefined;
    }
    if (!site) {
      // content has no site
      return '';
    }
    var locale/*:Locale*/ = site.getLocale();
    if (!locale) {
      return ''; // attributes of Site can never by "undefined"
    }
    return locale.getDisplayName();
  }/*
}*/function SiteUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: SiteUtil$,
      statics: {
        getSiteNameFor: getSiteNameFor$static,
        getSiteLocaleNameFor: getSiteLocaleNameFor$static
      },
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
