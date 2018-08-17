Ext.define("com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil", function(SitesLocalizationUtil) {/*package com.coremedia.blueprint.base.components.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.components.sites.Sites')]
public class SitesLocalizationUtil {

  public static*/ function localizeSiteInfo$static(referenceContent/*:Content*/)/*:String*/ {
    if (referenceContent === undefined) {
      return undefined;
    }
    if (referenceContent === null) {
      return "";
    }
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(referenceContent);
    var siteName/*:String*/ = site ? site.getName() + " - " + site.getLocale().getDisplayName() : mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.sites.Sites', 'allSites');
    var localizedSiteInfo/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.sites.Sites', 'forSiteText'), siteName);
    return localizedSiteInfo;
  }/*

}*/function SitesLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SitesLocalizationUtil$,
      statics: {localizeSiteInfo: localizeSiteInfo$static},
      requires: [
        "Ext.String",
        "com.coremedia.blueprint.base.components.sites.Sites_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "mx.resources.ResourceManager"
      ]
    };
});
