Ext.define("com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices", function(ViewtypeServices) {/*package com.coremedia.blueprint.base.components.viewtypes {
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.sites.Site;

import mx.resources.ResourceManager;

internal class ViewtypeServices {

  /**
   * Collect all folders inside the folders of viewTypeBasePath which contain the content types names,
   * including the viewTypeBasePath folders itself.
   * This function does not validate the paths if they exist.
   *
   * @param viewTypeBasePaths Absolute viewtype base paths which must be scanned for the viewtypes of the given content types.
   * @param contentTypeNames names of the content types for which the viewtype folders are searched.
   * @return Array all folder paths for the given content type names in the base paths.
   * /
  internal static*/ function collectViewtypeFolderPaths$static(viewTypeBasePaths/*:Array*/, contentTypeNames/*:Array*/)/*:Array*/ {
    var viewTypePaths/*:Array*/ = [];
    //for every viewtype lookup path...
    viewTypeBasePaths.forEach(function (absolutePath/*:String*/)/*:void*/ {
      viewTypePaths.push(absolutePath);
      //Then we iterate over every subtype to detect additional viewtypes in the hierarchy
      contentTypeNames.forEach(function (contentType/*:String*/)/*:void*/ {
        var absoluteSubfolderPath/*:String*/ = absolutePath + contentType;
        viewTypePaths.push(absoluteSubfolderPath);
      });
    });
    return viewTypePaths;
  }/*

  /**
   * Ensures that all paths are absolute paths.
   *
   * @param paths a list of absolute paths or paths relative to the site.
   * @param site the site relative paths will be relative to.
   * @return Array an array of absolute paths or an empty array if pahts is `null` or `undefined`
   * /
  internal static*/ function makeAbsolute$static(paths/*:Array*/, site/*:Site*/)/*:Array*/ {
    if (!paths) {
      return [];
    }

    var absolutePaths/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ paths.length;++$1) {var path/*:String*/ =paths[$1];
      var absolutePath/*:String*/ = resolvePath$static(path, site);
      if (absolutePath === undefined) {
        return undefined;
      }
      if (absolutePath) {
        absolutePaths.push(absolutePath);
      }
    }
    return absolutePaths;
  }/*

  /**
   * Builds up the type hierarchy from the given content type, ignoring the excluded doctypes.
   *
   * @param contentType
   * @param excludedDocTypes
   * @return
   * /
  internal static*/ function getTypeHierarchy$static(contentType/*:CapType*/, excludedDocTypes/*:Array*/)/*:Array*/ {
    var typeHierarchy/*:Array*/ = [];
    traverseTypeHierarchy$static(typeHierarchy, contentType, excludedDocTypes);
    return typeHierarchy;
  }/*

  /**
   * Decides if the viewTypePaths may be site relative or not and filters out the site relative ones if necessary.
   *
   * @param site the selected site or null or undefined.
   * @param viewTypePaths the viewtype paths to analyze
   * @return Array if site is set, all viewTypePaths will be returned, otherwise only absolute viewTypePaths will be returned.
   * /
  internal static*/ function decideAndFilterSiteRelativePaths$static(site/*:Site*/, viewTypePaths/*:Array*/)/*:Array*/ {
    if (site) {
      return viewTypePaths;
    }

    return viewTypePaths.filter(function (path/*:String*/, index/*:int*/, arr/*:Array*/)/*:Boolean*/ {
      return path.indexOf("/") === 0;
    });
  }/*

  /**
   * Read the doctypes from a property file. Multiple Doctypes can be listed comma separated.
   *
   * @return Array all configured document types.
   * /
  internal static*/ function readConfiguredDoctypesForViewtype$static()/*:Array*/ {
    var viewTypeContentTypes/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.viewtypes.Viewtypes', 'contentTypes');
    var configuredContentTypes/*:Array*/ = viewTypeContentTypes.split(',');
    return configuredContentTypes;
  }/*

  /**
   * Compute the absolute path
   * /
  private static*/ function resolvePath$static(path/*:String*/, site/*:Site*/)/*:String*/ {
    //the path is already absolute
    if(path.indexOf("/") === 0) {
      return path;
    }

    // No site available to resolve a relative path.
    if (!site) {
      return null;
    }

    //path relative to the site
    var root/*:Content*/ = site.getSiteRootFolder();
    var rootFolderPath/*:String*/ = root.getPath();
    if (rootFolderPath === undefined) {
      return undefined;
    }
    return rootFolderPath + "/" + path;
  }/*

  private static*/ function traverseTypeHierarchy$static(typeHierarchy/*:Array*/, contentType/*:CapType*/, excludedDocTypes/*:Array*/)/*:void*/ {
    if (!excludedDocTypes || excludedDocTypes.indexOf(contentType.getName()) == -1) {
      typeHierarchy.push(contentType.getName());
    }

    if (contentType.getParent()) {
      traverseTypeHierarchy$static(typeHierarchy, contentType.getParent(), excludedDocTypes);
    }
  }/*
}*/function ViewtypeServices$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ViewtypeServices$,
      statics: {
        collectViewtypeFolderPaths: collectViewtypeFolderPaths$static,
        makeAbsolute: makeAbsolute$static,
        getTypeHierarchy: getTypeHierarchy$static,
        decideAndFilterSiteRelativePaths: decideAndFilterSiteRelativePaths$static,
        readConfiguredDoctypesForViewtype: readConfiguredDoctypesForViewtype$static
      },
      requires: ["mx.resources.ResourceManager"]
    };
});
