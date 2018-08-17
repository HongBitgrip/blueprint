Ext.define("com.coremedia.cms.editor.sdk.util.TeaserOverlayManager", function(TeaserOverlayManager) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * Manages styles for the teaser overlay features
 * /
public class TeaserOverlayManager {

  public static var STYLE_DOCUMENT_TYPE:String = "CMSettings";
  public static var STYLE_STRUCT_PROPERTY_NAME:String = "settings";

  private static*/ var instance$static/*:TeaserOverlayManager*/=null;/*

  private var descriptorCache:Object =*/function descriptorCache_(){this.descriptorCache$hkl$=( {});}/*;*/

  function TeaserOverlayManager$() {/*
    super()*/descriptorCache_.call(this);;
  }/*

  //noinspection JSMethodCanBeStatic this allows a different implementation
  /**
   * Dependency tracked function to check if a given content is a style descriptor. If the content is not loaded yet
   * the method may return undefined.
   *
   * @param content the content to check
   * @return true if the given content is a style descriptor, otherwise false or undefined.
   * /
  public*/ function isStyleDescriptor(content/*:Content*/)/*:Boolean*/ {
    if (!content) {
      return false;
    }
    if (!content.isLoaded()) {
      content.load();
      return undefined;
    }
    return content.getType().getName() === TeaserOverlayManager.STYLE_DOCUMENT_TYPE;
  }/*

  //noinspection JSMethodCanBeStatic this allows a different implementation
  /**
   * Returns the array of contents containing styling information for the selected style.
   * The given path values may be relative to indicate site specific folders.
   * This method is dependency tracked.
   *
   * @param teaser the content representing the teaser the available styles shall be calculated for
   * @param paths the lookup path array
   * /
  public*/ function computeAvailableStylesForTeaser(teaser/*:Content*/, paths/*:Array*/)/*:Array*/ {
    if (!teaser.isLoaded()) {
      teaser.load();
      return undefined;
    }
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(teaser);
    var themeFolders/*:Array*/ = [];
    for/* each*/(var $1=0;$1</* in*/ paths.length;++$1) {var path/*:String*/ =paths[$1];
      var baseFolder/*:Content*/ = null;
      if (path.indexOf("/") === 0) {
        baseFolder = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(path);
      }
      else {
        // when not under a site, no relative paths can be applied
        if (!site) {
          continue;
        }
        baseFolder = site.getSiteRootFolder().getChild(path);
      }

      if (baseFolder === undefined) {
        return undefined;
      }
      //maybe it's not there
      if (baseFolder !== null) {
        themeFolders.push(baseFolder);
      }
    }

    var contents/*:Array*/ = [];

    for/* each*/(var $3=0;$3</* in*/ themeFolders.length;++$3) {var themeFolder/*:Content*/ =themeFolders[$3];
      var children/*:Array*/ = themeFolder.getChildDocuments();
      for/* each*/(var $2=0;$2</* in*/ children.length;++$2) {var item/*:Content*/ =children[$2];
        var check/*:Boolean*/ = this.isStyleDescriptor(item);
        if (check === undefined) {
          return undefined;
        }
        if (check) {
          contents.push(item);
        }
      }
    }

    return contents;
  }/*

  /**
   * Retrieves a style descriptor for the provided content. Calling this method for the same content multiple times
   * will result in the same object.
   *
   * @param content
   * @return the style descriptor. may return undefined if the content is not loaded yet, as a type check must be
   *         performed.
   * /
  public*/ function createStyleDescriptorFromContent(content/*:Content*/)/*:TeaserOverlayStyleDescriptor*/ {
    if (!this.isStyleDescriptor(content)) {
      return null;
    }
    if (!this.descriptorCache$hkl$[content]) {
      this.descriptorCache$hkl$[content] = new com.coremedia.cms.editor.sdk.util.TeaserOverlayStyleDescriptor(com.coremedia.ui.data.ValueExpressionFactory.create(TeaserOverlayManager.STYLE_STRUCT_PROPERTY_NAME, content.getProperties()));
    }
    return this.descriptorCache$hkl$[content];
  }/*

  //noinspection JSMethodCanBeStatic this allows a different implementation
  /**
   * Retrieves the content associated to a style descriptor.
   *
   * @param descriptor
   * @return the content associated to the style descriptor.
   * /
  public*/ function getContentFromStyleDescriptor(descriptor/*:TeaserOverlayStyleDescriptor*/)/*:Content*/ {
    if (!descriptor) {
      return null;
    }
    var struct/*:ContentStructRemoteBeanImpl*/ =AS3.as( descriptor.getVE().getValue(),  com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl);
    if (!struct) {
      return null;
    }
    return struct.getContent();
  }/*

  //noinspection JSMethodCanBeStatic this allows a different implementation
  public*/ function applyStyleToTeaserOverlaySettings(style/*:Content*/, teaserOverlaySettings/*:TeaserOverlaySettings*/)/*:void*/ {var this$=this;
    style.load(function ()/*:void*/ {
      var descriptor/*:TeaserOverlayStyleDescriptor*/ = this$.createStyleDescriptorFromContent(style);
      teaserOverlaySettings.enabled = true;
      teaserOverlaySettings.style = style;
      // check if descriptor overrides defaults for positioning and width and apply them on change
      if (!isNaN(descriptor.positionX)) {
        teaserOverlaySettings.positionX = descriptor.positionX;
      }
      if (!isNaN(descriptor.positionY)) {
        teaserOverlaySettings.positionY = descriptor.positionY;
      }
      if (!isNaN(descriptor.width)) {
        teaserOverlaySettings.width = descriptor.width;
      }
    });
  }/*

  public*/ function initializeTeaserOverlay(content/*:Content*/, settingsPath/*:String*/, styleDescriptorFolderPaths/*:Array*/, defaultStyleName/*:String*/)/*:void*/ {
    var manager/*:TeaserOverlayManager*/ = TeaserOverlayManager.getInstance();
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var result/*:Array*/ = manager.computeAvailableStylesForTeaser(content, styleDescriptorFolderPaths);
      if (result === undefined) {
        return undefined;
      }
      return result;
    }).loadValue(function (styles/*:Array*/)/*:void*/ {
      var defaultStyle/*:Content*/ = getDefaultStyle$static(styles, defaultStyleName);
      if (defaultStyle) {
        // create teaser overlay struct
        var localSettings/*:Struct*/ = content.getProperties().get("localSettings");
        // this makes sure the localSettings struct is loaded...
        // TODO: inspect, why this is necessary, maybe MWE? Without this the StructRemoteBeanImpl#getOrCreate fails
        // TeaserOverlaySettings is also used in TeaserOverlayPropertyField which is part of e.g. an article form.
        // PremularConfiguration#load makes sure that everything is loaded so the problem never happens here.
        // Assuming StructRemoteBeanImpl is not robust enough here...
        localSettings.getType().addStructProperty("teaserOverlay");

        var bindTo/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(null, content);
        var teaserOverlaySettings/*:TeaserOverlaySettings*/ = new com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings(bindTo.extendBy(settingsPath));
        manager.applyStyleToTeaserOverlaySettings(defaultStyle, teaserOverlaySettings);

        content.flush();
      }
    });
  }/*

  private static*/ function getDefaultStyle$static(styles/*:Array*/, defaultStyleName/*:String*/)/*:Content*/ {
    var first/*:Content*/ = null;
    for/* each*/ (var $1=0;$1</* in*/ styles.length;++$1) {var style/*:Content*/ =styles[$1];
      if (!first) {
        first = style;
      }
      if (style && style.getName() === defaultStyleName) {
        return style;
      }
    }
    return first;
  }/*

  public static*/ function getInstance$static()/*:TeaserOverlayManager*/ {
    if (!instance$static) {
      instance$static = new TeaserOverlayManager();
    }
    return instance$static;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TeaserOverlayManager$,
      isStyleDescriptor: isStyleDescriptor,
      computeAvailableStylesForTeaser: computeAvailableStylesForTeaser,
      createStyleDescriptorFromContent: createStyleDescriptorFromContent,
      getContentFromStyleDescriptor: getContentFromStyleDescriptor,
      applyStyleToTeaserOverlaySettings: applyStyleToTeaserOverlaySettings,
      initializeTeaserOverlay: initializeTeaserOverlay,
      statics: {
        STYLE_DOCUMENT_TYPE: "CMSettings",
        STYLE_STRUCT_PROPERTY_NAME: "settings",
        getInstance: getInstance$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings",
        "com.coremedia.cms.editor.sdk.util.TeaserOverlayStyleDescriptor"
      ]
    };
});
