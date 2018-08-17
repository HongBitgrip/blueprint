Ext.define("com.coremedia.cms.editor.sdk.util.LinkListUtil", function(LinkListUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapStruct;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.LinkPropertyDescriptor;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.InstantiatingValueHolder;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;
import ext.StringUtil;

import mx.resources.ResourceManager;

public class LinkListUtil {

  /**
   * Computes the allowed target content type of the given link list
   * @param contentValueExpression value expression which points to the outer Content containing the Link(List)
   * @param propertyPath the property path from the outer Content's properties to the Link(List)
   * @param targetContentTypeName an override content type given by name.
   *   If not null, it is resolved to a ContentType and the other parameters are ignored.
   * @return the target content type allowed for elements in this Link(List)
   * @see LinkPropertyDescriptor#linkType
   * /
  public static*/ function getTargetContentType$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/, targetContentTypeName/*:String = null*/)/*:ContentType*/ {if(arguments.length<=2)targetContentTypeName=null;
    if (targetContentTypeName) {
      return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(targetContentTypeName);
    }
    var descriptor/*:LinkPropertyDescriptor*/ = getLinkDescriptor$static(contentValueExpression, propertyPath);
    if (descriptor) {
      return AS3.as( descriptor.linkType,  com.coremedia.cap.content.ContentType);
    }
    if (isStructPropertyPath$static(propertyPath)) {
      AS3.trace("Could not auto determine link type of link property in struct as no struct exists and no targetContentTypeName was passed.");
    }
    return null;
  }/*

  public static*/ function containsContentNotMatchingType$static(type/*:ContentType*/, contents/*:Array*/, throwError/*:Boolean=false*/)/*:Content*/ {if(arguments.length<=2)throwError=false;
    var content/*:Content*/;
    if (type === com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getDocumentContentType()) {
      // Everything is well, if only documents are dragged.
      // No need to retrieve the exact type of the dragged objects,
      // which might not be possible due to missing read rights.
      for (var i/*:Number*/ = 0; i < contents.length; i++) {
        content =AS3.as( contents[i],  com.coremedia.cap.content.Content);
        if (!content || !content.isDocument()) {
          return contents[i];
        }
      }
    } else {
      for (var j/*:Number*/ = 0; j < contents.length; j++) {
        content =AS3.as( contents[j],  com.coremedia.cap.content.Content);
        if (content) {
          if (content.getState() !== com.coremedia.ui.data.BeanState.READABLE) {
            // Content is unreadable. Assume that it is inappropriate.
            if (throwError) {
              var readMsg/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorUnreadableMessage_text');
              throw new AS3.Error(readMsg);
            }
            return content;
          }
          var sourceType/*:ContentType*/ = content.getType();
          if (!sourceType.isSubtypeOf(type)) {
            if (throwError) {
              var typePattern/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_pasteErrorMessage_text');
              var typeMsg/*:String*/ = Ext.String.format(typePattern,
                      content.getName(),
                      com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(sourceType.getName()),
                      com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(type.getName()));
              throw new AS3.Error(typeMsg);

            }
            return content;
          }
        } else {
          //this is not a content
          return contents[j];
        }
      }
    }

    return null;
  }/*

  /**
   * Determines the maxCardinality from the descriptor of the given link list. Returns -1 if maxCardinality can not be
   * calculated.
   * @param contentValueExpression value expression which points to the outer Content containing the Link(List)
   * @param propertyPath the property path from the outer Content's properties to the Link(List)
   * @return the maxCardinality or -1 if maxCardinality can not be calculated.
   * /
  public static*/ function getMaxCardinalityFromDescriptor$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/)/*:int*/ {
    var descriptor/*:LinkPropertyDescriptor*/ = getLinkDescriptor$static(contentValueExpression, propertyPath);
    if (!(descriptor && descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK)) {
      return -1;
    }
    return descriptor.maxCardinality;
  }/*

  /**
   * Computes the free capacity of the given link list. Returns -1 if capacity can not be calculated.
   * @param contentValueExpression value expression which points to the outer Content containing the Link(List)
   * @param propertyPath the property path from the outer Content's properties to the Link(List)
   * @param maxCardinality optional max cardinality which will be applied instead of the max cardinality
   * of the property descriptor
   * @return the free capacity or -1 if capacity can not be calculated.
   * /
  public static*/ function getFreeCapacity$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/, maxCardinality/*:int = undefined*/)/*:int*/ {
    maxCardinality = maxCardinality || 0;
    var listExpression/*:ValueExpression*/ = contentValueExpression.extendBy("properties", propertyPath);
    var listLength/*:uint*/ = 0;
    if (listExpression.getValue()) {
      if (AS3.is(listExpression.getValue(),  Array)) {
        listLength = (AS3.as(listExpression.getValue(),  Array)).length;
      }
      else if (AS3.is(listExpression.getValue(),  com.coremedia.cap.content.Content)) {
        listLength = 1;
      }
    }
    // if no maxCardinality is passed, retrieve it from the descriptor
    if (maxCardinality <= 0) {
      maxCardinality = LinkListUtil.getMaxCardinalityFromDescriptor(contentValueExpression, propertyPath);
    }

    return maxCardinality - listLength;
  }/*

  public static*/ function isAtomic$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/, maxCardinality/*:int = undefined*/)/*:Boolean*/ {
    var descriptor/*:LinkPropertyDescriptor*/ = getLinkDescriptor$static(contentValueExpression, propertyPath);
    if (descriptor) {
      return descriptor.atomic;
    }
    if (maxCardinality !== undefined) {
      // Guess the desired choice of atomic versus collection from maxCardinality:
      // For content properties (exactly one property path arc), always use collection (there are only link *lists*,
      // for struct properties, choose atomic exactly if maxCardinality = 1.
      return maxCardinality === 1 ? isStructPropertyPath$static(propertyPath) : false;

    }
    return false;
  }/*

  private static*/ function getLinkDescriptor$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/)/*:LinkPropertyDescriptor*/ {
    var descriptor/*:CapPropertyDescriptor*/ = getDescriptor$static(contentValueExpression, propertyPath);
    return descriptor && descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK ? AS3.cast(com.coremedia.cap.common.descriptors.LinkPropertyDescriptor,descriptor) : null;

  }/*

  private static*/ function getDescriptor$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/)/*:CapPropertyDescriptor*/ {
    var propertyPathArcs/*:Array*/ = propertyPath.split(".");
    propertyPathArcs.unshift("properties");
    var property/*:String*/ = propertyPathArcs.pop();
    var bean/*:Bean*/ =AS3.as( contentValueExpression.extendBy(propertyPathArcs).getValue(),  com.coremedia.ui.data.Bean);
    if (bean) {
      var capStruct/*:CapStruct*/;
      var contentProperties/*:ContentProperties*/ =AS3.as( bean,  com.coremedia.cap.content.ContentProperties);
      if (contentProperties) {
        capStruct = contentProperties.getContentObject();
      } else {
        capStruct =AS3.as( bean,  com.coremedia.cap.struct.Struct);
      }
      if (capStruct) {
        return capStruct.getType_().getDescriptor(property);
      }
    }
    return null;
  }/*

  public static*/ function createLinkValueExpression$static(contentValueExpression/*:ValueExpression*/, propertyPath/*:String*/,
                                                   linkTypeName/*:String*/, atomic/*:Boolean = true*/,
                                                   fallbackForNullValueExpression/*:ValueExpression = null*/)/*:ValueExpression*/ {switch(Math.max(arguments.length,3)){case 3:atomic=true;case 4:fallbackForNullValueExpression=null;}
    var linkValueExpression/*:ValueExpression*/;
    var completePropertyPath/*:String*/ = [com.coremedia.cap.content.ContentPropertyNames.PROPERTIES].concat(propertyPath).join(".");
    if (!isStructPropertyPath$static(propertyPath)) {
      // It is a LinkList property of a Content.
      linkValueExpression = contentValueExpression.extendBy(completePropertyPath);
      if (atomic) {
        // Take care to convert the selected link from / to a one-element or empty array:
        linkValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(linkValueExpression,
                transformFromArray$static, transformToArray$static);
      }
    } else {
      // It is a link property inside a Struct.
      // cannot use extendBy(), as 
      // a) it returns "undefined" for missing Struct properties, but we want "null" / the default value,
      // b) inside Structs, we want the property path to be created if it does not exist, and
      // c) if the actual link property does not exist, we want to create it with the correct link type.
      // Thus, we use an InstantiatingValueHolder.
      var contentRepository/*:ContentRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
      var linkType/*:ContentType*/ = linkTypeName
              ? contentRepository.getContentType(linkTypeName)
              : contentRepository.getDocumentContentType();
      var instantiatingValueHolder/*:InstantiatingValueHolder*/ = new com.coremedia.ui.data.InstantiatingValueHolder(contentValueExpression,
              completePropertyPath,
              createLinkPropertyInstantiator$static(linkType, atomic),
              atomic ? null : []);
      linkValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(instantiatingValueHolder);
    }
    if (fallbackForNullValueExpression) {
      return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(linkValueExpression,
              function (value/*:**/)/*:**/ {
                return value !== null ? value : fallbackForNullValueExpression.getValue();
              });
    }
    return linkValueExpression;
  }/*

  private static*/ function transformToArray$static(value/*:**/)/*:Array*/ {
    return value === null ? [] : (Ext.isArray(value) ? value : [value]);
  }/*

  private static*/ function transformFromArray$static(value/*:**/)/*:**/ {
    return Ext.isArray(value) && value[0] || null;
  }/*

  private static*/ function createLinkPropertyInstantiator$static(linkType/*:ContentType*/, atomic/*:Boolean*/)/*:Function*/ {
    return function (struct/*:Struct*/, propertyName/*:String*/)/*:void*/ {
      var structType/*:StructType*/ = struct.getType();
      if (atomic) {
        structType.addLinkProperty(propertyName, linkType);
      } else {
        structType.addLinkListProperty(propertyName, linkType);
      }
    };
  }/*

  private static*/ function isStructPropertyPath$static(propertyPath/*:String*/)/*:Boolean*/ {
    return propertyPath.split(".").length > 1;
  }/*

  public static*/ function isDisabledFor$static(links/*:Array*/)/*:Boolean*/ {
    if (links.length === 0) {
      return true;
    }
    return links.some(function(link/*:**/)/*:Boolean*/ {
      // disable the action when one of the content is not-readable or deleted or destroyed
      return !link || !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(link);
    });
  }/*
}*/function LinkListUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LinkListUtil$,
      statics: {
        getTargetContentType: getTargetContentType$static,
        containsContentNotMatchingType: containsContentNotMatchingType$static,
        getMaxCardinalityFromDescriptor: getMaxCardinalityFromDescriptor$static,
        getFreeCapacity: getFreeCapacity$static,
        isAtomic: isAtomic$static,
        createLinkValueExpression: createLinkValueExpression$static,
        isDisabledFor: isDisabledFor$static
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.String",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.LinkPropertyDescriptor",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentProperties",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.InstantiatingValueHolder",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
