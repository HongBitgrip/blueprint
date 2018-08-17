Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusSiteUtil", function(TranslationStatusSiteUtil) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.util.EncodingUtil;

public class TranslationStatusSiteUtil {
  public static*/ function getSiteDisplayName$static(site/*:Site*/, escape/*:Boolean = true*/)/*:String*/ {if(arguments.length<=1)escape=true;
    var displayName/*:String*/ = site.getName() + ' - ' + site.getLocale().getDisplayName();
    return escape ?
            com.coremedia.ui.util.EncodingUtil.encodeForHTML(displayName) :
            displayName;
  }/*
}*/function TranslationStatusSiteUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationStatusSiteUtil$,
      statics: {getSiteDisplayName: getSiteDisplayName$static},
      requires: ["com.coremedia.ui.util.EncodingUtil"]
    };
});
