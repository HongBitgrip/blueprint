Ext.define("com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil", function(ContentLocalizationUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.bem.IconWithTextBEMEntities;
import com.coremedia.ui.store.BeanRecord;

import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * A collection of utilities for localizing content (properties).
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.ContentTypes')]
[PublicApi]
public class ContentLocalizationUtil {

  private static const*/var STATUS_WAS_PUBLISHED$static/*:String*/ = "was_published";/*

  /**
   * Return a localized replacement text for the name of an unreadable content.
   *
   * @param content the unreadable content to localize
   * @return the text
   * /
  public static*/ function formatNotReadableName$static(content/*:Content*/)/*:String*/ {
    return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Content_notReadable_text'), com.coremedia.cap.common.IdHelper.parseContentId(content));
  }/*

  /**
   * Return a localized replacement text for the name of an unreadable content
   * stored in a bean record.
   *
   * @param record the bean record
   * @return the text
   * /
  public static*/ function formatNotReadableNameFromBeanRecord$static(record/*:BeanRecord*/)/*:String*/ {
    var content/*:Content*/ =AS3.as( record.getBean(),  com.coremedia.cap.content.Content);
    return ContentLocalizationUtil.formatNotReadableName(content);
  }/*

  /**
   * Return a localized replacement text for the name of an unreadable content given by its URI path.
   *
   * @param contentUriPath the URI path of the unreadable content to localize
   * @return the text
   * /
  public static*/ function formatNotReadableNameFromUriPath$static(contentUriPath/*:String*/)/*:String*/ {
    return ContentLocalizationUtil.formatNotReadableName(ContentLocalizationUtil.getContentByUriPath(contentUriPath));
  }/*

  /**
   * Localize the name of a content type.
   * @param name the content name to localize
   * @return the localized name
   * /
  public static*/ function localizeDocumentTypeName$static(name/*:String*/)/*:String*/ {
    if (name === "Document_") {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'content_type_any_txt');
    }
    return ContentLocalizationUtil.getLabelForContentTypeName(name);
  }/*

  internal static*/ function getIconStyleClassFromProperties$static(typeName/*:String*/)/*:**/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', typeName + '_icon');
  }/*

  /**
   * Return the localized label for the given content type.
   * @param contentType the content type to display (may not be null)
   * @return the localized label (if any). Defaults to the internal name of the content type.
   * /
  public static*/ function getLabelForContentType$static(contentType/*:ContentType*/)/*:String*/ {
    var contentTypeName/*:String*/ = contentType.getName();
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', contentTypeName + "_" + com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.LABEL) || contentTypeName;
  }/*

  /**
   * Return the localized label for the content type given by its name.
   * @param contentTypeName the name of the content type to display
   * @return the localized label (if any). Defaults to the internal name of the content type.
   * @see #getLabelForContentType()
   * /
  public static*/ function getLabelForContentTypeName$static(contentTypeName/*:String*/)/*:String*/ {
    var contentType/*:ContentType*/ = getContentType$static(contentTypeName);
    return contentType ? ContentLocalizationUtil.getLabelForContentType(contentType) : "";
  }/*

  /**
   * Return the icon style class for the given content type.
   * @param contentType the content type to display (may not be null)
   * @return the icon style class (if any). Defaults to the empty string.
   * /
  public static*/ function getIconStyleClassForContentType$static(contentType/*:ContentType*/)/*:String*/ {
    while (contentType) {
      var result/*:String*/ = ContentLocalizationUtil.getIconStyleClassFromProperties(contentType.getName());
      if (result) {
        return result;
      }
      contentType = AS3.cast(com.coremedia.cap.content.ContentType,contentType.getParent());
    }
    return "";
  }/*

  /**
   * Return the icon style class for the given content type name.
   * @param contentTypeName the content type name
   * @return the icon style class
   * @see #getIconStyleClassForContentType()
   * /
  public static*/ function getIconStyleClassForContentTypeName$static(contentTypeName/*:String*/)/*:String*/ {
    var contentType/*:ContentType*/ = getContentType$static(contentTypeName);
    return contentType ? ContentLocalizationUtil.getIconStyleClassForContentType(contentType) : "";
  }/*

  /**
   * Return the icon style class for the given content status.
   * @param content the content
   * @return the icon style class
   * @see #getIconStyleClassForStatus()
   * /
  public static*/ function getIconStyleClassForContentStatus$static(content/*:Content*/)/*:String*/ {
    return ContentLocalizationUtil.getIconStyleClassForStatus(com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus(content));
  }/*

  /**
   * Return the ToolTip for the given content type.
   * @param contentType the content type for which to retrieve a ToolTip (may not be null)
   * @return the content type's ToolTip message (if any). Defaults to the empty string.
   * /
  public static*/ function getToolTipForContentType$static(contentType/*:ContentType*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', contentType.getName() + "_" + com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.TOOL_TIP) || "";
  }/*

  /**
   * Return the ToolTip for the given content type name.
   * @param contentTypeName the name of the content type for which to retrieve a ToolTip
   * @return the content type's ToolTip message (if any). Defaults to the empty string.
   * @see #getToolTipForContentType()
   * /
  public static*/ function getToolTipForContentTypeName$static(contentTypeName/*:String*/)/*:String*/ {
    var contentType/*:ContentType*/ = getContentType$static(contentTypeName);
    return contentType ? ContentLocalizationUtil.getToolTipForContentType(contentType) : "";
  }/*

  /**
   * Return the localized name of a given lifecycle status
   * @param status
   * @return
   * /
  public static*/ function getLocalizedLifecycleStatus$static(status/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'lifecycleStatus_' + status + "_text");
  }/*

  public static*/ function getIconStyleClassForStatus$static(status/*:String*/)/*:String*/ {
    if (status === STATUS_WAS_PUBLISHED$static) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', "lifecycleStatus_" + status + "_icon")
              + " "
              + com.coremedia.ui.bem.IconWithTextBEMEntities.MODIFIER_DISABLED.getCSSClass();
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', "lifecycleStatus_" + status + "_icon");
  }/*

  private static*/ function getContentType$static(contentTypeName/*:String*/)/*:ContentType*/ {
    return contentTypeName ? com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentTypeName) : null;
  }/*

  internal static*/ function getContentByUriPath$static(contentUriPath/*:String*/)/*:Content*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContent(contentUriPath);
  }/*
}*/function ContentLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ContentLocalizationUtil$,
      statics: {
        formatNotReadableName: formatNotReadableName$static,
        formatNotReadableNameFromBeanRecord: formatNotReadableNameFromBeanRecord$static,
        formatNotReadableNameFromUriPath: formatNotReadableNameFromUriPath$static,
        localizeDocumentTypeName: localizeDocumentTypeName$static,
        getIconStyleClassFromProperties: getIconStyleClassFromProperties$static,
        getLabelForContentType: getLabelForContentType$static,
        getLabelForContentTypeName: getLabelForContentTypeName$static,
        getIconStyleClassForContentType: getIconStyleClassForContentType$static,
        getIconStyleClassForContentTypeName: getIconStyleClassForContentTypeName$static,
        getIconStyleClassForContentStatus: getIconStyleClassForContentStatus$static,
        getToolTipForContentType: getToolTipForContentType$static,
        getToolTipForContentTypeName: getToolTipForContentTypeName$static,
        getLocalizedLifecycleStatus: getLocalizedLifecycleStatus$static,
        getIconStyleClassForStatus: getIconStyleClassForStatus$static,
        getContentByUriPath: getContentByUriPath$static
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.ContentTypes_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.bem.IconWithTextBEMEntities",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
