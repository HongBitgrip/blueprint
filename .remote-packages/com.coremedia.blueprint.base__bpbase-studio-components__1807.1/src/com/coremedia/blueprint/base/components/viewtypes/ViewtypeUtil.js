Ext.define("com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil", function(ViewtypeUtil) {/*package com.coremedia.blueprint.base.components.viewtypes {
import com.coremedia.blueprint.base.components.util.ContentLookupUtil;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

[ResourceBundle('com.coremedia.blueprint.base.components.viewtypes.Viewtypes')]
public class ViewtypeUtil {

  private static const*/var NOSITE$static/*:String*/ = "no_side";/*
  private static*/ var hierarchyCache$static/*:Bean*/;/* =*/function hierarchyCache$static_(){hierarchyCache$static=( com.coremedia.ui.data.beanFactory.createLocalBean());};/*
  private static*/ var viewTypeContentCache$static/*:Bean*/;/* =*/function viewTypeContentCache$static_(){viewTypeContentCache$static=( com.coremedia.ui.data.beanFactory.createLocalBean());};/*

  public static*/ function createAvailableViewtypesExpression$static(referenceContentValueExpression/*:ValueExpression*/, viewTypePaths/*:Array*/, staticPaths/*:Array = null*/, excludedDocTypes/*:Array = null*/)/*:ValueExpression*/ {switch(Math.max(arguments.length,2)){case 2:staticPaths=null;case 3:excludedDocTypes=null;}
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(computeAvailableViewtypes$static, referenceContentValueExpression, viewTypePaths, staticPaths, excludedDocTypes);
  }/*

  private static*/ function computeAvailableViewtypes$static(referenceContentValueExpression/*:ValueExpression*/, viewTypeBasePaths/*:Array*/, staticPaths/*:Array*/, excludedDocTypes/*:Array*/)/*:Array*/ {
    var referenceContent/*:Content*/ =AS3.as( referenceContentValueExpression.getValue(),  com.coremedia.cap.content.Content);
    if (!referenceContent) {
      return undefined;
    }
    var refContentTypeName/*:String*/ = referenceContent.getType().getName();
    if (!refContentTypeName || !referenceContent.getPath()) {
      return undefined;
    }

    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(referenceContent);
    var cacheId/*:String*/ = resolveCacheId$static(site, refContentTypeName);
    var siteAwareViewtypes/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.decideAndFilterSiteRelativePaths(site, viewTypeBasePaths);


    var viewTypePaths/*:Array*/ = undefined;
    if (hierarchyCache$static.get(cacheId)) {
      viewTypePaths = hierarchyCache$static.get(cacheId);
    }

    //first try to build the type hierarchy and store them in a local bean for caching
    if (!viewTypePaths) {
      var absoluteSiteAwareViewtypePaths/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.makeAbsolute(siteAwareViewtypes, site);
      if (absoluteSiteAwareViewtypePaths === undefined) {
        return undefined;
      }

      var absoluteStaticPaths/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.makeAbsolute(staticPaths, site);
      if (absoluteStaticPaths === undefined) {
        return undefined;
      }
      viewTypePaths = computeViewTypePaths$static(referenceContent.getType(), absoluteSiteAwareViewtypePaths, absoluteStaticPaths, excludedDocTypes);
      hierarchyCache$static.set(cacheId, viewTypePaths);
    }

    var configuredContentTypes/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.readConfiguredDoctypesForViewtype();
    //load the cached viewTypes from a local bean if existent
    if (viewTypeContentCache$static.get(cacheId)) {
      return viewTypeContentCache$static.get(cacheId);
    }

    var viewTypes/*:Array*/ = com.coremedia.blueprint.base.components.util.ContentLookupUtil.findContentsOfTypeInPaths(viewTypePaths, configuredContentTypes, referenceContent);
    if(!viewTypes) {
      return undefined;
    }

    // cache the found viewtypes in a local bean
    //concat a array with null in it because null will be rendered as Default
    viewTypeContentCache$static.set(cacheId, [null].concat(viewTypes));
    return viewTypeContentCache$static.get(cacheId);
  }/*

  private static*/ function resolveCacheId$static(site/*:Site*/, contentTypeName/*:String*/)/*: String*/ {
    var cacheIdSitePrefix/*:String*/ = resolveCacheIdSitePrefix$static(site);
    return cacheIdSitePrefix + contentTypeName;
  }/*

  private static*/ function resolveCacheIdSitePrefix$static(site/*:Site*/)/*:String*/ {
    if (site) {
      return site.getId();
    }

    return NOSITE$static;
  }/*

  /*
  * Computes the concrete paths of the viewtypes for the referenced content type, depending on the base paths.
  * The computed  paths also includes the paths for viewtypes in the typehierarchy of the referenced contents type.
  * For the excluded DocTpyes will be no paths computed.
  * * /
  private static*/ function computeViewTypePaths$static(refContentType/*:CapType*/, viewTypeBasePaths/*:Array*/, staticPaths/*:Array*/, excludedDocTypes/*:Array*/)/*:Array*/ {
    var typeHierarchy/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.getTypeHierarchy(refContentType, excludedDocTypes);

    registerBaseFolderChangedListeners$static(viewTypeBasePaths, staticPaths);
    var viewTypeFolderPaths/*:Array*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices.collectViewtypeFolderPaths(viewTypeBasePaths, typeHierarchy);
    registerViewtypeFolderChangedListeners$static(viewTypeFolderPaths);

    return viewTypeFolderPaths.concat(staticPaths);
  }/*

  private static*/ function registerViewtypeFolderChangedListeners$static(viewTypeFolderPaths/*:Array*/)/*:void*/ {
    for/* each*/ (var $1=0;$1</* in*/ viewTypeFolderPaths.length;++$1) {var viewTypeFolderPath/*:String*/ =viewTypeFolderPaths[$1];
      addFolderListener$static(viewTypeFolderPath, viewTypeFolderChanged$static);
    }
  }/*

  private static*/ function registerBaseFolderChangedListeners$static(viewTypeBasePaths/*:Array*/, staticPaths/*:Array*/)/*:void*/ {
    var baseFolders/*:Array*/ = viewTypeBasePaths.concat(staticPaths);
    for/* each*/(var $1=0;$1</* in*/ baseFolders.length;++$1) {var baseFolderPath/*:String*/ =baseFolders[$1];
      addFolderListener$static(baseFolderPath, viewTypeBaseFolderChanged$static);
    }
  }/*

  /**
   * Adds a folder listener to detect viewtype changes
   *
   * @param absolutePath the path to add a listener for.
   * @param onChange the function which will be called when the folder in the given path will be changed.
   * /
  private static*/ function addFolderListener$static(absolutePath/*:String*/, onChange/*:Function*/)/*:void*/ {
    com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(absolutePath, function(viewTypeBaseFolder/*:Content*/)/*:void*/ {
      if (viewTypeBaseFolder) {
        viewTypeBaseFolder.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.CHILDREN, onChange);
      }
    });
  }/*

  /**
   * Event fired when a concrete view type folder, e.g. for CMArticle has been changed.
   * In this case we can keep the existing listeners since a view type has been added or removed.
   * So we invalidate the cache until the next viewtype request reloads it.
   * /
  private static*/ function viewTypeFolderChanged$static()/*:void*/ {
    invalidateViewTypeCacheFor$static();
  }/*

  /**
   * Event listener fired for the base folder of every viewtype lookup folder.
   * Since new folder may have been added or existing deleted, we have to re-register
   * all property change listeners and finally invalidate the cache.
   * /
  private static*/ function viewTypeBaseFolderChanged$static(e/*:PropertyChangeEvent*/)/*:void*/ {
    var children/*:Array*/ = (AS3.as(e.bean,  com.coremedia.cap.content.Content)).getChildren();
    if(children) {
      children.forEach(function (subFolder/*:Content*/)/*:void*/ {
        subFolder.removePropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.CHILDREN,viewTypeFolderChanged$static);
        subFolder.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.CHILDREN, viewTypeFolderChanged$static);
      });
    }

    invalidateViewTypeCacheFor$static();
  }/*

  private static*/ function invalidateViewTypeCacheFor$static()/*:void*/ {
    viewTypeContentCache$static = com.coremedia.ui.data.beanFactory.createLocalBean();
  }/*

  public static*/ function getThumbnailUri$static(viewtype/*:Content*/)/*:String*/ {
    if (viewtype && viewtype.getProperties()) {
      var icon/*:Blob*/ = viewtype.getProperties().get("icon");
      if (icon) {
        return icon.getUri();
      }
    }
    return "";
  }/*
}*/function ViewtypeUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ViewtypeUtil$,
      statics: {
        hierarchyCache: undefined,
        viewTypeContentCache: undefined,
        createAvailableViewtypesExpression: createAvailableViewtypesExpression$static,
        getThumbnailUri: getThumbnailUri$static,
        __initStatics__: function() {
          hierarchyCache$static_();
          viewTypeContentCache$static_();
        }
      },
      requires: [
        "com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.util.ContentLookupUtil",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeServices"
      ]
    };
});
