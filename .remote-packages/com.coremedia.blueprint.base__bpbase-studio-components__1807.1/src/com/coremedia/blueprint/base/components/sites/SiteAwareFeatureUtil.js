Ext.define("com.coremedia.blueprint.base.components.sites.SiteAwareFeatureUtil", function(SiteAwareFeatureUtil) {/*package com.coremedia.blueprint.base.components.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class SiteAwareFeatureUtil {

  private static const*/var STRINGLIST_PROPERTY_NAME$static/*:String*/ = 'features';/*
  private static const*/var STUDIO_FEATURES_BUNDLE_NAME$static/*:String*/ = "Studio Features";/*

  public*/ function SiteAwareFeatureUtil$() {
    throw new AS3.Error("utility class");
  }/*

  public static*/ function createFeatureEnabledVE$static(bindTo/*:ValueExpression*/, feature/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var listOfFeatures/*:Array*/;
      if (bindTo) {
        listOfFeatures = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration(STUDIO_FEATURES_BUNDLE_NAME$static, STRINGLIST_PROPERTY_NAME$static,
            bindTo.getValue());
      } else {
        listOfFeatures = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration(STUDIO_FEATURES_BUNDLE_NAME$static, STRINGLIST_PROPERTY_NAME$static);
      }

      if (listOfFeatures === undefined) {
        return undefined;
      }

      return listOfFeatures !== null && listOfFeatures.indexOf(feature) > -1;
    });
  }/*

  public static*/ function createFeatureDisabledVE$static(bindTo/*:ValueExpression*/, feature/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(
        SiteAwareFeatureUtil.createFeatureEnabledVE(bindTo, feature),
        invertBoolean$static,
        invertBoolean$static
    );
  }/*

  /**
   * prefetch the configuration to avoid rendering issues, if configuration state is unknown.
   * Is called in BlueprintStudioPluginBase
   * /
  public static*/ function preLoadConfiguration$static()/*:void*/ {
    var valueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var sites/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSites();

      if (sites === undefined) {
        return undefined;
      }
      for/* each*/(var $1=0;$1</* in*/ sites.length;++$1) {var site/*:Site*/ =sites[$1];
        var siteRootDocument/*:Content*/ = site.getSiteRootDocument();
        if (siteRootDocument === undefined) {
          return undefined;
        }
        var configuration/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration(STUDIO_FEATURES_BUNDLE_NAME$static, STRINGLIST_PROPERTY_NAME$static, siteRootDocument);
        if (configuration === undefined) {
          return undefined;
        }
      }

      var globalConfiguration/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration(STUDIO_FEATURES_BUNDLE_NAME$static, STRINGLIST_PROPERTY_NAME$static);
      if (globalConfiguration === undefined) {
        return undefined;
      }
      return true;
    });
    valueExpression.loadValue(function(value/*:Boolean*/)/*:void*/ {
      valueExpression = null;
    });
  }/*

  private static*/ function invertBoolean$static(b/*:Boolean*/)/*:Boolean*/ {
    return !b;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SiteAwareFeatureUtil$,
      statics: {
        createFeatureEnabledVE: createFeatureEnabledVE$static,
        createFeatureDisabledVE: createFeatureDisabledVE$static,
        preLoadConfiguration: preLoadConfiguration$static
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
