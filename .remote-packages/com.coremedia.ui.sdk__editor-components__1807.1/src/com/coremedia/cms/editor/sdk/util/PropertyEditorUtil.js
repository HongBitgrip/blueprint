Ext.define("com.coremedia.cms.editor.sdk.util.PropertyEditorUtil", function(PropertyEditorUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.workflow.WorkflowContentService;
import com.coremedia.cap.workflow.WorkflowObject;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.URITemplate;

import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * A collection of utilities for dealing with property editors.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.ContentTypes')]
[PublicApi]
public class PropertyEditorUtil {

  public static const LABEL:String = "text";

  public static const TOOL_TIP:String = "toolTip";

  public static const EMPTY_TEXT:String = "emptyText";

  private static const*/var DOCUMENT_TYPES_PROPERTIES$static/*:Object*/;/* =*/function DOCUMENT_TYPES_PROPERTIES$static_(){DOCUMENT_TYPES_PROPERTIES$static=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.ContentTypes').content);};/*
  private static const*/var EDITOR_PROPERTIES$static/*:Object*/;/* =*/function EDITOR_PROPERTIES$static_(){EDITOR_PROPERTIES$static=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.Editor').content);};/*

  public static const DEFAULT_BLOB_CONTENT_TYPE_ICON_KEY:String = "Blob_contentType_default_icon";

  private static*/ var templates$static/*:Array*/=null;/*

  private static*/ function getTemplates$static()/*:Array*/ {
    if (!templates$static) {
      templates$static = [];
      // scan for patterns in localization keys:
      for (var key/*:String*/ in DOCUMENT_TYPES_PROPERTIES$static) {
        if (com.coremedia.ui.data.impl.URITemplate.containsVariables(key)) {
          templates$static.push(new com.coremedia.ui.data.impl.URITemplate(key));
        }
      }
    }
    return templates$static;
  }/*

  /**
   * Returns a localized string of the given type and property name if found.
   *
   * @param contentTypeName the name of the content type in which the property is defined
   * @param propertyName the name of the property that is shown in the property editor
   * @param type the type of the localized string, i.e. text, toolTip, emptyText ...
   * @return the localized string if found, otherwise null.
   * /
  public static*/ function getLocalizedStringWithoutFallback$static(contentTypeName/*:String*/, propertyName/*:String*/, type/*:String*/)/*:String*/ {
    if (!type) {
      throw "type not set";
    }
    if (!contentTypeName || !propertyName) {
      return "---";
    }

    var uriTemplates/*:Array*/ = getTemplates$static();
    while (contentTypeName !== undefined) {
      var key/*:String*/ = contentTypeName + "_" + propertyName + "_" + type;
      var result/*:**/ = DOCUMENT_TYPES_PROPERTIES$static[key];
      if (result || result === '') {
        return result;
      }
      for/* each*/ (var $1=0;$1</* in*/ uriTemplates.length;++$1) {var template/*:URITemplate*/ =uriTemplates[$1];
        var binding/*:Object*/ = template.match(key);
        if (binding) {
          var value/*:String*/ = DOCUMENT_TYPES_PROPERTIES$static[template];
          return template.format(binding, value);
        }
      }
      var contentTypeBean/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentTypeName);
      if (!contentTypeBean) {
        break;
      }
      var parentType/*:ContentType*/ =AS3.as( contentTypeBean.getParent(),  com.coremedia.cap.content.ContentType);
      if (!parentType) {
        break;
      }
      contentTypeName = parentType.getName();
    }

    return null;
  }/*

  /**
   * Returns a localized string of the given type and property name.
   *
   * @param contentTypeName the name of the content type in which the property is defined
   * @param propertyName the name of the property that is shown in the property editor
   * @param type the type of the localized string, i.e. text, toolTip, emptyText ...
   * @param defaultString the string to return when no localized string can be found; defaults to the propertyName
   * @return the localized string
   * /
  public static*/ function getLocalizedString$static(contentTypeName/*:String*/, propertyName/*:String*/, type/*:String*/, defaultString/*:String = null*/)/*:String*/ {if(arguments.length<=3)defaultString=null;
    var localizedStringWithoutFallback/*:String*/ = PropertyEditorUtil.getLocalizedStringWithoutFallback(contentTypeName, propertyName, type);
    return localizedStringWithoutFallback !== null ? localizedStringWithoutFallback : defaultString || propertyName;
  }/*

  /**
   * @deprecated use <code>com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLabelForContentTypeName()</code> instead
   *
   * Return the localized version to the given content type
   * @param contentType the content type
   * @return the localized name
   * /
  public static*/ function localizeContentTypeName$static(contentType/*:String*/)/*:String*/ {
    var key/*:String*/ = contentType + "_text";
    return DOCUMENT_TYPES_PROPERTIES$static[key] || contentType;
  }/*

  /**
   * Returns a localized empty text for the given property and content type
   * @param contentTypeName the content type name
   * @param propertyName the property name
   * @return the localized empty text
   * /
  public static*/ function getLocalizedEmptyText$static(contentTypeName/*:String*/, propertyName/*:String*/)/*:String*/ {
    return PropertyEditorUtil.getLocalizedString(contentTypeName, propertyName, PropertyEditorUtil.EMPTY_TEXT);
  }/*

  /**
   * Returns a localized label for the given property and content type
   * @param contentTypeName  the content type name
   * @param propertyName the property name
   * @return the localized label
   * /
  public static*/ function getLocalizedLabel$static(contentTypeName/*:String*/, propertyName/*:String*/)/*:String*/ {
    return PropertyEditorUtil.getLocalizedString(contentTypeName, propertyName, PropertyEditorUtil.LABEL);
  }/*

  /**
   * Returns a localized tooltip for the given property and content type
   * @param contentTypeName the content type name
   * @param propertyName the property name
   * @return the localized tooltip
   * /
  public static*/ function getLocalizedTooltip$static(contentTypeName/*:String*/, propertyName/*:String*/)/*:String*/ {
    return PropertyEditorUtil.getLocalizedString(contentTypeName, propertyName, PropertyEditorUtil.TOOL_TIP);
  }/*

  /**
   * Returns a localized text for the given contentType. Since property files don't allow special chars in keys every possible
   * special char in the content type will be replaces with an underscore, i.e. the content type image/x-icon will be resolved to
   * image_x_icon. Therefore, the localized name of this content type should be written like this Blob_contentType_image_x_icon
   * @param contentType the content type of the blob
   * @param suffix a suffix that is added to the localization key
   * @return the localized text
   * /
  private static*/ function getBlobLocalizedText$static(contentType/*:String*/, suffix/*:String = ""*/)/*:String*/ {if(arguments.length<=1)suffix="";
    var result/*:String*/;
    if (contentType) {
      result = EDITOR_PROPERTIES$static["Blob_contentType_" + contentType.replace(/[\/-]/g, "_") + suffix];
      if (!result) {
        var mimeParts/*:Array*/ = contentType.split("/");
        if (mimeParts.length > 1) {
          result = EDITOR_PROPERTIES$static["Blob_contentType_" + mimeParts[0] + suffix];
        }
      }
    }
    if (!result) {
      result = EDITOR_PROPERTIES$static["Blob_contentType_all" + suffix];
    }
    return result;
  }/*

  /**
   * Returns the localized name for a given content type. i.e image/* would resolve to the property
   * Blob_contentType_image (the /* suffix is not allowed in property keys)
   * @param contentType the type
   * @return the localized name
   * /
  public static*/ function getBlobName$static(contentType/*:String*/)/*:String*/ {
    return getBlobLocalizedText$static(contentType);
  }/*

  /**
   * Returns the localized upload help text for a given content type. Blob_contentType_image_helpText is the property of the
   * help text for the content type image/*
   * @param contentType the type
   * @param helpText the helpText, if provided this will be returned.
   * @return the localized help text
   * /
  public static*/ function getBlobHelpText$static(contentType/*:String*/, helpText/*:String = undefined*/)/*:String*/ {
    if (helpText) {
      return helpText;
    } else {
      return getBlobLocalizedText$static(contentType, "_helpText");
    }
  }/*

  /**
   * Returns the localized upload button text for a given content type
   * @param contentType the type
   * @param buttonText the buttonText, if provided this will be returned.
   * @return the localized button text
   * /
  public static*/ function getBlobUploadButtonText$static(contentType/*:String*/, buttonText/*:String = undefined*/)/*:String*/ {
    if (buttonText) {
      return buttonText;
    } else {
      return Ext.String.format(EDITOR_PROPERTIES$static.Blob_uploadButton_text, PropertyEditorUtil.getBlobName(contentType));
    }
  }/*

  /**
   * Returns the Size and content type of the blob
   * @param blob the blob
   * @return the String
   * /
  public static*/ function getBlobMetaData$static(blob/*:Blob*/)/*:String*/ {
    var result/*:Array*/ = [];
    var size/*:String*/ = PropertyEditorUtil.getBlobSize(blob);
    if (size) {
      result.push(size);
    }
    var mimeType/*:String*/ = PropertyEditorUtil.getBlobContentType(blob);
    if (mimeType) {
      result.push(mimeType);
    }
    return result.join(", ");
  }/*

  /**
   * The blob size in bytes or '-' if there is no size
   * @param blob the blob
   * @return the size
   * /
  public static*/ function getBlobSize$static(blob/*:Blob*/)/*:String*/ {
    return blob && blob.getSize() !== undefined ? blob.getSize() + " " + EDITOR_PROPERTIES$static.Blob_size_bytes_text : "-";
  }/*

  /**
   * The blob size, formatted with a sensible unit (B, KB, MB, GB). For blob sizes greater 1 K, but smaller than 1 M,
   * the returned value will be, for example, 212.04 K, and so forth.
   * @param blob the blob
   * @return a formatted string describing the size with the smallest sensible unit, and two decimal digits, or '-' if
   * the blob is undefined
   * /
  public static*/ function getHumanReadableBlobSize$static(blob/*:Blob*/)/*:String*/ {
    if (!(blob && blob.getSize())) {
      return '-';
    }
    var units/*:Array*/ = ['B', 'KB', 'MB', 'GB', 'TB'];
    var bytes/*:Number*/ = blob.getSize();
    var unitIndex/*:int*/ = Math.floor(Math.log(bytes) / Math.log(1024));
    if (unitIndex === 0) {
      return PropertyEditorUtil.getBlobSize(blob);
    } else {
      return Number(bytes / Math.pow(1024, unitIndex)).toFixed(2) + ' ' + units[unitIndex];
    }
  }/*

  /**
   * The contenttype of the given blob or '-' if there is no contenttype
   * @param blob the blob
   * @return the contenttype, i.e image/jpeg
   * /
  public static*/ function getBlobContentType$static(blob/*:Blob*/)/*:String*/ {
    return blob && blob.getContentType() !== undefined ? blob.getContentType() : "-";
  }/*

  /**
   * The icon css class for the given blob. The css class is looked up in MimeType.properties.
   * The mime type image/x-icon would resolve to the property key Blob_contentType_image_x_icon. If no property for the specific
   * key is defined the default mediatype key is used. For the given example this would be Blob_contentType_image_default_icon
   * If all keys are unknown the default property Blob_contentType_default_icon is used.
   * @param blob the blob
   * @return the icon class
   * /
  public static*/ function getBlobContentTypeIconClass$static(blob/*:Blob*/)/*:String*/ {
    var prefix/*:String*/ = "Blob_contentType_";
    var iconPostfix/*:String*/ = "_icon";
    var defaultSubType/*:String*/ = "_default";

    var result/*:String*/;
    var type/*:String*/ = PropertyEditorUtil.getBlobContentType(blob);

    if (type !== "-") {
      var simplifiedType/*:String*/ = type.replace(/[^a-zA-Z0-9]+/g, "_");
      result = mx.resources.ResourceManager.getInstance().getString("com.coremedia.cms.editor.Editor",prefix + simplifiedType + iconPostfix);
      if (!result) {
        var firstSlash/*:int*/ = type.indexOf("/");
        if (firstSlash > 0) {
          var firstPart/*:String*/ = type.substr(0, firstSlash).replace(/[^a-zA-Z0-9]+/g, "_");
          result = mx.resources.ResourceManager.getInstance().getString("com.coremedia.cms.editor.Editor",prefix + firstPart + defaultSubType + iconPostfix);
        }
      }
    }
    if (!result) {
      return mx.resources.ResourceManager.getInstance().getString("com.coremedia.cms.editor.Editor",PropertyEditorUtil.DEFAULT_BLOB_CONTENT_TYPE_ICON_KEY);
    } else {
      return result;
    }
  }/*

  /**
   * Given a value expression and an optional value expression which forces read-only,
   * create a value expression that merges the two value expressions and can be used
   * to bind the read-only or disabled state of a component or an action:
   * <ul>
   *   <li>The resulting value expression returns true if the read-only value expression is given and evaluates to true.</li>
   *   <li>Otherwise, when no value expression is given, the resulting value expression returns false.</li>
   *   <li>Otherwise, when the value is neither a content nor a workflow object, the resulting value expression returns false.</li>
   *   <li>Otherwise, while readability of the value has not yet been determined, the resulting value expression returns undefined.</li>
   *   <li>Otherwise, the resulting value expression returns false if the value is writable and true otherwise.</li>
   * </ul>
   *
   * @param bindTo the value expression
   * @param forceReadOnlyValueExpression a optional value expression which forces read-only.
   * @return the merged value expression
   * /
  public static*/ function createReadOnlyValueExpression$static(bindTo/*:ValueExpression*/, forceReadOnlyValueExpression/*:ValueExpression = undefined*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      if (forceReadOnlyValueExpression && forceReadOnlyValueExpression.getValue()) {
        return true;
      }
      if (!bindTo) {
        return false;
      }
      return PropertyEditorUtil.isReadOnly(bindTo.getValue());
    });
  }/*

  /**
   * Given an object backing a property editor, return true if the object is read-only.
   * Return undefined if the object itself is undefined or if it cannot be determined
   * at this time whether the object is read-only.
   *
   * @param object the object
   * @return whether the object is read-only
   * /
  public static*/ function isReadOnly$static(object/*:**/)/*:Boolean*/ {
    if (object === undefined) {
      return undefined;
    }

    if (AS3.is(object,  com.coremedia.cap.content.Content)) {
      var content/*:Content*/ = AS3.cast(com.coremedia.cap.content.Content,object);
      var mayWriteContent/*:**/ = content.getRepository().getAccessControl().mayWrite(content);
      if (mayWriteContent === undefined) {
        return undefined;
      }

      var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
      if (!workflowRepository) {
        return !mayWriteContent;
      }

      var workflowContentService/*:WorkflowContentService*/ = workflowRepository.getWorkflowContentService();
      return !mayWriteContent || workflowContentService.isLockedForUser(content);

    } else if (AS3.is(object,  com.coremedia.cap.workflow.WorkflowObject)) {
      var workflowObject/*:WorkflowObject*/ = AS3.cast(com.coremedia.cap.workflow.WorkflowObject,object);
      return workflowObject.getRepository().getAccessControl().mayWrite(workflowObject);
    }

    return false;
  }/*
}*/function PropertyEditorUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PropertyEditorUtil$,
      statics: {
        LABEL: "text",
        TOOL_TIP: "toolTip",
        EMPTY_TEXT: "emptyText",
        DOCUMENT_TYPES_PROPERTIES: undefined,
        EDITOR_PROPERTIES: undefined,
        DEFAULT_BLOB_CONTENT_TYPE_ICON_KEY: "Blob_contentType_default_icon",
        getLocalizedStringWithoutFallback: getLocalizedStringWithoutFallback$static,
        getLocalizedString: getLocalizedString$static,
        localizeContentTypeName: localizeContentTypeName$static,
        getLocalizedEmptyText: getLocalizedEmptyText$static,
        getLocalizedLabel: getLocalizedLabel$static,
        getLocalizedTooltip: getLocalizedTooltip$static,
        getBlobName: getBlobName$static,
        getBlobHelpText: getBlobHelpText$static,
        getBlobUploadButtonText: getBlobUploadButtonText$static,
        getBlobMetaData: getBlobMetaData$static,
        getBlobSize: getBlobSize$static,
        getHumanReadableBlobSize: getHumanReadableBlobSize$static,
        getBlobContentType: getBlobContentType$static,
        getBlobContentTypeIconClass: getBlobContentTypeIconClass$static,
        createReadOnlyValueExpression: createReadOnlyValueExpression$static,
        isReadOnly: isReadOnly$static,
        __initStatics__: function() {
          DOCUMENT_TYPES_PROPERTIES$static_();
          EDITOR_PROPERTIES$static_();
        }
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.workflow.WorkflowObject",
        "com.coremedia.cms.editor.ContentTypes_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.URITemplate",
        "mx.resources.ResourceManager"
      ]
    };
});
