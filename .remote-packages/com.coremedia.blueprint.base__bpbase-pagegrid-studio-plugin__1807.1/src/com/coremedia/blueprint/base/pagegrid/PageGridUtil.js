Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridUtil", function(PageGridUtil) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.blueprint.base.components.util.ContentLookupUtil;
import com.coremedia.blueprint.base.pagegrid.configuration.IPageGridConfiguration;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.TreeRelation;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

public class PageGridUtil {

  private static const*/var MISSING_PLACEMENT$static/*:Struct*/;/* =*/function MISSING_PLACEMENT$static_(){MISSING_PLACEMENT$static=( AS3.cast(com.coremedia.cap.struct.Struct,{}));};/*

  public static var defaultLayoutResolver:Function;

  public static*/ function getConfiguration$static()/*:IPageGridConfiguration*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getConfiguration()["pageGrid"];
  }/*

  public static*/ function getLayout$static(content/*:Content*/, placementPropertyName/*:String*/)/*:Content*/ {
    var layout/*:Content*/ = PageGridUtil.getLayoutWithoutDefault(content, placementPropertyName);
    if (layout === undefined) {
      return undefined;
    }
    if (layout === null) {
      layout = PageGridUtil.getDefaultLayout(content, placementPropertyName);
    }
    return layout;
  }/*

  public static*/ function getLayoutWithoutDefault$static(content/*:Content*/, placementPropertyName/*:String*/)/*:Content*/ {
    var layoutPropertyName/*:String*/ = [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, placementPropertyName, com.coremedia.blueprint.base.pagegrid.PageGridConstants.NEW_PLACEMENTS_BASE_PROPERTY, com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_PROPERTY_NAME].join('.');

    var layout/*:Content*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(content, layoutPropertyName, null);
    return layout;
  }/*

  /**
   * Return the default layout for the given content, or null to indicate that no default layout
   * is available, or undefined to indicate that some layouts have not been loaded.
   * A pagegridProperty name can be given to differ between multiple pagegrids per page.
   * This method can be customized/extended by "injecting" your own resolver method. For this
   * purpose set the defaultLayoutResolver field in this class.
   *
   * @param content the content to check
   * @param pagegridProperty the name of the page grid property
   * @return the default layout
   * /
  public static*/ function getDefaultLayout$static(content/*:Content*/, pagegridProperty/*:String = undefined*/)/*:Content*/ {
    var result/*:Content*/ = null;
    if (PageGridUtil.defaultLayoutResolver) {
      result =AS3.as( PageGridUtil.defaultLayoutResolver.call(null, content, pagegridProperty),  com.coremedia.cap.content.Content);
    }
    result = result || PageGridUtil.getDefaultLayoutInternal(content);
    if (result == null) {
      AS3.trace("[ERROR]", "No default layout with the name " + PageGridUtil.getConfiguration().layoutDefaultName + " found. ");
    }
    return result;
  }/*

  /**
   * The default implementation for getting the default layout for the given content,
   * or null to indicate that no default layout is available, or undefined to indicate that
   * some layouts have not been loaded. This method can be used from a custom
   * defaultLayoutResolver implementation to fallback to
   *
   * @param content the content to check
   * @return the default layout
   * /
  internal static*/ function getDefaultLayoutInternal$static(content/*:Content*/)/*:Content*/ {
    var result/*:Content*/ = null;
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
    if (site === undefined) {
      result = undefined;
    }
    var siteRootFolder/*:Content*/ = site && site.getSiteRootFolder();
    var contentRepository/*:ContentRepository*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository();
    var layoutDefaultName/*:String*/ = PageGridUtil.getConfiguration().layoutDefaultName;
    var layoutPaths/*:Array*/ = PageGridUtil.getConfiguration().layoutPaths;
    for/* each*/ (var $1=0;$1</* in*/ layoutPaths.length;++$1) {var layoutPath/*:String*/ =layoutPaths[$1];
      var defaultLayout/*:Content*/ = contentRepository.getChild(layoutPath + '/' + layoutDefaultName, null, siteRootFolder);
      if (result === null) {
        if (defaultLayout === undefined) {
          result = undefined;
        } else if (defaultLayout) {
          return defaultLayout;
        }
      }
    }
    return result;
  }/*

  public static*/ function getAvailableLayoutsFor$static(content/*:Content*/, layoutPaths/*:Array*/)/*:Array*/ {
    if(layoutPaths && layoutPaths.length > 0) {
      return com.coremedia.blueprint.base.components.util.ContentLookupUtil.findContentsOfTypeInPaths(layoutPaths, ["CMSettings"], content);
    }
    return com.coremedia.blueprint.base.components.util.ContentLookupUtil.findContentsOfTypeInPaths(PageGridUtil.getConfiguration().layoutPaths, ["CMSettings"], content);
  }/*

  public static*/ function getSections$static(layout/*:Content*/)/*:Array*/ {
    var layoutItems/*:Array*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(layout, com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_SECTIONS_PROPERTY_PATH, null);
    if (layoutItems === undefined) {
      return undefined;
    }
    if (!layoutItems) {
      return [];
    }

    var sections/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ layoutItems.length;++$1) {var layoutItem/*:Struct*/ =layoutItems[$1];
      if (layoutItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_EDITABLE_PROPERTY) !== false) {
        var section/*:Content*/ =AS3.as( layoutItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.SECTION_PROPERTY_NAME),  com.coremedia.cap.content.Content);
        if (section) {
          if (section.getName() === undefined) {
            sections = undefined;
          } else if (sections) {
            sections.push(section);
          }
        }
      }
    }
    return sections;
  }/*

  public static*/ function getPlacementPropertyPath$static(placementStructPropertyName/*:String*/, section/*:Content*/)/*:String*/ {
    return [
      placementStructPropertyName,
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.NEW_PLACEMENTS_BASE_PROPERTY,
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENTS_LIST_PROPERTY,
      section.getUriPath()
    ].join(".");
  }/*

  public static*/ function computePageStoringPlacement$static(startPageValueExpression/*:ValueExpression*/,
                                                     pageTreeRelation/*:TreeRelation*/,
                                                     structPropertyName/*:String*/,
                                                     section/*:Content*/)/*:Content*/ {
    var content/*:Content*/ = startPageValueExpression.getValue();
    if (content === undefined) {
      return undefined;
    }
    var pageDeclaringSection/*:Content*/ = PageGridUtil.computePageDeclaringSection(content, pageTreeRelation, structPropertyName, section);
    if (pageDeclaringSection === undefined) {
      return undefined;
    }
    if (pageDeclaringSection && PageGridUtil.isLockingChildren(PageGridUtil.getPlacementUnchecked(pageDeclaringSection,
                    structPropertyName, section))) {
      return pageDeclaringSection;
    }
    var placement/*:Struct*/ = PageGridUtil.getPlacementUnchecked(content, structPropertyName, section);
    if (placement === undefined) {
      return undefined;
    }
    return placement ? content : pageDeclaringSection;
  }/*

  public static*/ function computePageDeclaringSection$static(startPage/*:Content*/, pageTreeRelation/*:TreeRelation*/,
                                                     placementStructPropertyName/*:String*/, section/*:Content*/)/*:Content*/ {
    var parentPages/*:Array*/ = pageTreeRelation.pathToRoot(startPage);
    if (parentPages === undefined) {
      return undefined;
    }
    if (parentPages === null) {
      return null;
    }

    var parentPageDefiningSection/*:Content*/ = null;
    var parentPageDeclaringSection/*:Content*/ = null;
    for (var i/*:int*/ = 1; i < parentPages.length; i++) {
      var parentPage/*:Content*/ =AS3.as( parentPages[i],  com.coremedia.cap.content.Content);
      if (!parentPage) {
        return null;
      }
      if(!parentPage.isInProduction()) {
        continue;
      }
      var placement/*:Struct*/ = getPlacement$static(parentPage, placementStructPropertyName, section);
      if (placement === undefined) {
        return undefined;
      }
      if (placement) {
        if (placement === MISSING_PLACEMENT$static) {
          parentPageDeclaringSection = parentPage;
        } else if (!parentPageDefiningSection || PageGridUtil.isLockingChildren(placement)) {
          parentPageDefiningSection = parentPage;
        }
      }
    }
    if (!parentPageDefiningSection) {
      parentPageDefiningSection = parentPageDeclaringSection;
    }
    if (!parentPageDefiningSection) {
      // none found: part of a site navigation?
      var rootPage/*:Content*/ = parentPages[parentPages.length - 1];
      var isRoot/*:Boolean*/ = pageTreeRelation.isRoot(rootPage);
      if (isRoot === undefined) {
        return undefined;
      }
      if (isRoot) {
        // yes: exceptionally return this page, although it does not (yet) define the placement, but it should!
        parentPageDefiningSection = startPage;
      }
    }

    return parentPageDefiningSection;
  }/*

  private static*/ function getPlacement$static(parentPage/*:Content*/, placementStructPropertyName/*:String*/, section/*:Content*/)/*:Struct*/ {
    var pageLayout/*:Content*/ = PageGridUtil.getLayout(parentPage, placementStructPropertyName);
    if (pageLayout === undefined) {
      return undefined;
    }

    if (pageLayout === null) {
      return null;
    }

    var declaredSections/*:Array*/ = PageGridUtil.getSections(pageLayout);
    if (declaredSections === undefined) {
      return undefined;
    }
    if (declaredSections.indexOf(section) !== -1) {
      // the page *should* define this section, so return the value at the corresponding Struct path:
      return PageGridUtil.getPlacementUnchecked(parentPage, placementStructPropertyName, section) || MISSING_PLACEMENT$static;
    }
    return null;
  }/*

  public static*/ function getPlacementUnchecked$static(page/*:Content*/, placementStructPropertyName/*:String*/, section/*:Content*/)/*:Struct*/ {
    var fullPlacementPropertyPath/*:String*/ = com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + "."
            + PageGridUtil.getPlacementPropertyPath(placementStructPropertyName, section);
    return com.coremedia.ui.util.ObjectUtils.getPropertyAt(page, fullPlacementPropertyPath, null);
  }/*

  public static*/ function isLockingChildren$static(placement/*:Struct*/)/*:Boolean*/ {
    if (!placement) {
      return placement === undefined ? undefined : false;
    }
    return placement.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LOCKED_PROPERTY_NAME);
  }/*

  public static*/ function getLayoutPropertyPath$static(placementStructPropertyName/*:String*/)/*:String*/ {
    return [
      placementStructPropertyName,
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.NEW_PLACEMENTS_BASE_PROPERTY,
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_PROPERTY_NAME
    ].join(".");
  }/*

  public static*/ function createDefaultLayoutValueExpression$static(pageValueExpression/*:ValueExpression*/, pagegridProperty/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Content*/ {
      return PageGridUtil.getDefaultLayout(pageValueExpression.getValue(), pagegridProperty);
    });
  }/*

  public static*/ function createLayoutValueExpression$static(pageValueExpression/*:ValueExpression*/,
                                                     placementStructPropertyName/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(PageGridUtil.computeLayout,
            pageValueExpression, com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + "." + PageGridUtil.getLayoutPropertyPath(placementStructPropertyName));
  }/*

  public static*/ function computeLayout$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/)/*:Content*/ {
    var content/*:Content*/ = contentValueExpression.getValue();
    if (!content) {
      return undefined;
    }
    var layout/*:Content*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(content, propertyPath, null);
    return layout === null ? PageGridUtil.getDefaultLayout(content) : layout;
  }/*

}*/function PageGridUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PageGridUtil$,
      statics: {
        MISSING_PLACEMENT: undefined,
        defaultLayoutResolver: null,
        getConfiguration: getConfiguration$static,
        getLayout: getLayout$static,
        getLayoutWithoutDefault: getLayoutWithoutDefault$static,
        getDefaultLayout: getDefaultLayout$static,
        getDefaultLayoutInternal: getDefaultLayoutInternal$static,
        getAvailableLayoutsFor: getAvailableLayoutsFor$static,
        getSections: getSections$static,
        getPlacementPropertyPath: getPlacementPropertyPath$static,
        computePageStoringPlacement: computePageStoringPlacement$static,
        computePageDeclaringSection: computePageDeclaringSection$static,
        getPlacementUnchecked: getPlacementUnchecked$static,
        isLockingChildren: isLockingChildren$static,
        getLayoutPropertyPath: getLayoutPropertyPath$static,
        createDefaultLayoutValueExpression: createDefaultLayoutValueExpression$static,
        createLayoutValueExpression: createLayoutValueExpression$static,
        computeLayout: computeLayout$static,
        __initStatics__: function() {
          MISSING_PLACEMENT$static_();
        }
      },
      requires: [
        "AS3.trace",
        "com.coremedia.blueprint.base.components.util.ContentLookupUtil",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.blueprint.base.pagegrid.PageGridConstants"]
    };
});
