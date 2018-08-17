Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil", function(TranslationStatusFilterUtil) {/*package com.coremedia.cms.editor.sdk.collectionview.search {
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.util.ArrayUtils;

/**
 * Utility methods for site handling
 * /

public class TranslationStatusFilterUtil {
  internal static*/ function getRootSite$static(site/*:Site*/)/*:Site*/ {
    var current/*:Site*/ = site;
    while (current.getMasterSite()) {
      current = current.getMasterSite();
    }
    return current;
  }/*

  internal static*/ function getSiteDisplayName$static(site/*:Site*/)/*:String*/ {
    return site.getLocale().getDisplayName();
  }/*

  internal static*/ function getAllDerivedSites$static(rootSite/*:Site*/)/*:Array*/ {
    var result/*:Array*/ = [];
    addDerivedSites$static(rootSite, result);
    com.coremedia.ui.util.ArrayUtils.sortByAspects(result, TranslationStatusFilterUtil.getSiteDisplayName);
    return result;
  }/*

  private static*/ function addDerivedSites$static(site/*:Site*/, result/*:Array*/)/*:void*/ {
    var derivedSites/*:Array*/ = site.getDerivedSites();
    if (derivedSites) {
      for (var i/*:int*/ = 0; i < derivedSites.length; i++) {
        var derivedSite/*:Site*/ = derivedSites[i];
        if (derivedSite.isLanguageTranslationTargetSite() && !derivedSite.isUnderConstruction()) {
          result.push(derivedSite);
          addDerivedSites$static(derivedSite, result);
        }
      }
    }
  }/*

  internal static*/ function isAppropriateSite$static(site/*:Site*/)/*:Boolean*/ {
    return ! !site && ! !site.getMasterSite();
  }/*
}*/function TranslationStatusFilterUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationStatusFilterUtil$,
      statics: {
        getRootSite: getRootSite$static,
        getSiteDisplayName: getSiteDisplayName$static,
        getAllDerivedSites: getAllDerivedSites$static,
        isAppropriateSite: isAppropriateSite$static
      },
      requires: ["com.coremedia.ui.util.ArrayUtils"]
    };
});
