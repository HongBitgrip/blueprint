Ext.define("com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil", function(StudioConfigurationUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;

/**
 * Utility class providing a centralized configuration for studio, which are sites aware.
 * /
public class StudioConfigurationUtil {
  private static const*/var CONFIGURATION_NAME$static/*:String*/ = "configurationPath";/*

  private static const*/var DEFAULT_CONFIGURATION_FOLDER$static/*:String*/ = "Options/Settings";/*
  private static const*/var DEFAULT_GLOBAL_CONFIGURATION_FOLDER$static/*:String*/ = "/Settings";/*

  private static const*/var STRUCT_PROPERTY_NAME$static/*:String*/ = "settings";/*
  private static const*/var CONFIGURATION_PATH_DELIMITER$static/*:String*/ = ".";/*

  private static*/ var sitePath$static/*:String*/=null;/*
  private static*/ var globalPath$static/*:String*/=null;/*

  /**
   * Provides a studio configuration from a site specific or global configuration.
   * This method is dependency tracked and can be used within FunctionValueExpressions.
   * @param bundle the name of the settings document relative to CONFIGURATION_FOLDER
   * @param configuration the configuration name. Sub paths are separated by dots(.).
   * @param context the context to retrieve the site for configuration. This may either be a Site or a Content.
   *        If a Content is provided, the site containing the Content is used.
   *        If null is provided, the preferred site is used.
   * @param merge if true, the value type allows it, the configuration values are found globally and on the
   *        preferred site, then these values are merged.
   * @return the requested configuration, or null, if not configured. Undefined, if currently not ready.
   * /
  public static*/ function getConfiguration$static(bundle/*:String*/, configuration/*:String*/, context/*:* = null*/, merge/*:Boolean = false*/)/*:**/ {switch(Math.max(arguments.length,2)){case 2:context=null;case 3:merge=false;}
    initConfig$static();

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

    var contentRepository/*:ContentRepository*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository();

    var site/*:Site*/;
    if (AS3.is(context,  com.coremedia.cap.content.Content)) {
      site = sitesService.getSiteFor(AS3.cast(com.coremedia.cap.content.Content,context));
    } else {
      site = AS3.cast(com.coremedia.cms.editor.sdk.sites.Site,context);
    }

    if (!site) {
      site = sitesService.getPreferredSite();
    }

    var siteConfigurationResult/*:**/ = null;
    if (site) {
      siteConfigurationResult = getConfigurationInFolder$static(configuration, site.getSiteRootFolder(), sitePath$static + "/" + bundle);
      if (siteConfigurationResult === undefined) {
        return undefined;
      }
    }

    //Merge results? if not, just return the first hit
    if(siteConfigurationResult && !merge) {
      return siteConfigurationResult;
    }

    //global config look up
    var globalConfigurationResult/*:**/ = null;
    if (globalConfigurationResult === null) {
      var globalRootFolder/*:Content*/ = contentRepository.getChild(globalPath$static);
      globalConfigurationResult = getConfigurationInFolder$static(configuration, globalRootFolder, sitePath$static + "/" + bundle);
      if (globalConfigurationResult === undefined) {
        return undefined;
      }
    }

    //merge if merge is enabled and we have 2x configurations to merge
    if(merge && globalConfigurationResult && (AS3.is(globalConfigurationResult,  Array)) && (AS3.is(siteConfigurationResult,  Array))) {
      globalConfigurationResult = globalConfigurationResult.concat(siteConfigurationResult);
    }

    return globalConfigurationResult;
  }/*

  /**
   * Checks if there was a default path configuration configured on the server site.
   * This will overwrite the default used here.
   * /
  private static*/ function initConfig$static()/*:void*/ {
    if (!sitePath$static && !globalPath$static) {
      sitePath$static = DEFAULT_CONFIGURATION_FOLDER$static;
      globalPath$static = DEFAULT_GLOBAL_CONFIGURATION_FOLDER$static;

      var pathConfig/*:Object*/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()[CONFIGURATION_NAME$static];
      if (pathConfig) {
        if (pathConfig.sitePath) {
          sitePath$static = pathConfig.sitePath;
        }
        if (pathConfig.globalPath) {
          globalPath$static = pathConfig.globalPath;
        }
      }

      if(globalPath$static.lastIndexOf("/") !== (globalPath$static.length-1)) {
        globalPath$static = globalPath$static + "/";
      }
    }
  }/*

  private static*/ function getConfigurationInFolder$static(configuration/*:String*/, folder/*:Content*/, pathOfSetting/*:String*/)/*:**/ {
    if (!folder) {
      return undefined;
    }

    var settingsContent/*:Content*/ = folder.getChild(pathOfSetting);
    if (settingsContent === undefined) {
      return undefined;
    }
    if (settingsContent === null) {
      return null;
    }

    var properties/*:ContentProperties*/ = settingsContent.getProperties();
    if (!properties) {
      return undefined;
    }

    var configurationStruct/*:Struct*/ = properties.get(STRUCT_PROPERTY_NAME$static);
    if (configurationStruct === undefined) {
      return undefined;
    }

    if (configurationStruct === null) {
      return null;
    }

    var configurationPaths/*:Array*/ = configuration.split(CONFIGURATION_PATH_DELIMITER$static);
    var actualPathElement/*:**/ = configurationStruct;
    for/* each*/ (var $1=0;$1</* in*/ configurationPaths.length;++$1) {var path/*:String*/ =configurationPaths[$1];
      actualPathElement = actualPathElement.get(path);
      if (actualPathElement === undefined) {
        return undefined;
      }
      if (actualPathElement === null) {
        return null;
      }
    }
    return actualPathElement;
  }/*

  /**
   * constructor private
   * /
  public*/ function StudioConfigurationUtil$() {
    throw new AS3.Error("not implemented!");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StudioConfigurationUtil$,
      statics: {getConfiguration: getConfiguration$static},
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.Content"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.Site"
      ]
    };
});
