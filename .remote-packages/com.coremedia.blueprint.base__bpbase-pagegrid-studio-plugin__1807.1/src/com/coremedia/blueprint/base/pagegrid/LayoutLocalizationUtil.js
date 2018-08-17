Ext.define("com.coremedia.blueprint.base.pagegrid.LayoutLocalizationUtil", function(LayoutLocalizationUtil) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.ui.util.ObjectUtils;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridLayouts')]
public class LayoutLocalizationUtil {
  /**
   * Localization of the layout name. The display name is looked
   * up in the PageGridLayouts.properties resource bundle.
   * The method returns undefined if the return value cannot be determined yet.
   *
   * @param content the content identifying the layout
   * @return the formatted display name
   * /
  public static*/ function localizeText$static(content/*:Content*/)/*:String*/ {
    if (content === null) {
      return null;
    }
    return com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil.localize(content, '_text', mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.pagegrid.PageGridLayouts').content, resolveLayoutName$static);
  }/*

  /**
   * Localization of the layout description. The description is looked
   * up in the properties of the PageGridLayouts resource bundle.
   * The method returns undefined if the return value cannot be determined yet.
   *
   * @param content the content identifying the layout
   * @return the formatted description
   * /
  public static*/ function localizeDescription$static(content/*:Content*/)/*:String*/ {
    if (content === null) {
      return null;
    }
    return com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil.localize(content, '_description', mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.pagegrid.PageGridLayouts').content, resolveLayoutName$static, resolveLayoutDescription$static);
  }/*

  private static*/ function resolveLayoutName$static(layoutContent/*:Content*/)/*:Object*/ {
    return com.coremedia.ui.util.ObjectUtils.getPropertyAt(layoutContent, [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, 'settings', 'name']);
  }/*

  private static*/ function resolveLayoutDescription$static(layoutContent/*:Content*/)/*:Object*/ {
    return com.coremedia.ui.util.ObjectUtils.getPropertyAt(layoutContent, [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, 'settings', 'description']);
  }/*
}*/function LayoutLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LayoutLocalizationUtil$,
      statics: {
        localizeText: localizeText$static,
        localizeDescription: localizeDescription$static
      },
      requires: [
        "com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil",
        "com.coremedia.blueprint.base.pagegrid.PageGridLayouts_properties",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ]
    };
});
