Ext.define("com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil", function(ViewtypeLocalizationUtil) {/*package com.coremedia.blueprint.base.components.viewtypes {
import com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.ui.util.ObjectUtils;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.components.viewtypes.Viewtypes')]
public class ViewtypeLocalizationUtil {

  private static const*/var NO_IMAGE_TOOLTIP$static/*:String*/;/* =*/function NO_IMAGE_TOOLTIP$static_(){NO_IMAGE_TOOLTIP$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.viewtypes.Viewtypes', 'no_image'));};/*

  /**
   * Localization of the viewtype name. The display name is looked
   * up in the properties of the Viewtypes resource bundle.
   * The method returns undefined if the return value cannot be determined yet.
   * The value of the layout property (if set) takes precedence over
   * the content name for the purposes of localization.
   *
   * @param content the content identifying the viewtype
   * @return the formatted display name
   * /
  public static*/ function localizeText$static(content/*:Content*/)/*:String*/ {
    return com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil.localize(content, '_text', mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.components.viewtypes.Viewtypes').content, getName$static);
  }/*

  private static*/ function getName$static(content/*:Content*/)/*:String*/ {
    var properties/*:ContentProperties*/ = content.getProperties();
    if (!properties) {
      return undefined;
    }
    var name/*:String*/ = properties.get('layout');
    if(!name || name.length == 0) {
      name = content.getName();
    }
    return name;
  }/*

  /**
   * Localization of the viewtype description. The description is looked
   * up in the properties of the Viewtypes resource bundle.
   * The method returns undefined if the return value cannot be determined yet.
   *
   * @param content the content identifying the viewtype
   * @return the formatted description
   * /
  public static*/ function localizeDescription$static(content/*:Content*/)/*:String*/ {
    return com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil.localize(content, '_description', mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.components.viewtypes.Viewtypes').content, null, getContentDescription$static);
  }/*

  private static*/ function getContentDescription$static(viewtypeContent/*:Content*/)/*:Object*/ {
    return viewtypeContent
            ? com.coremedia.ui.util.ObjectUtils.getPropertyAt(viewtypeContent, [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, 'description'])
            : null;
  }/*


  public static*/ function getThumbnailTooltip$static(content/*:Content*/)/*:String*/ {
    return com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil.getThumbnailUri(content) ? ViewtypeLocalizationUtil.localizeText(content) : NO_IMAGE_TOOLTIP$static;
  }/*
}*/function ViewtypeLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ViewtypeLocalizationUtil$,
      statics: {
        NO_IMAGE_TOOLTIP: undefined,
        localizeText: localizeText$static,
        localizeDescription: localizeDescription$static,
        getThumbnailTooltip: getThumbnailTooltip$static,
        __initStatics__: function() {
          NO_IMAGE_TOOLTIP$static_();
        }
      },
      requires: [
        "com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil"
      ]
    };
});
