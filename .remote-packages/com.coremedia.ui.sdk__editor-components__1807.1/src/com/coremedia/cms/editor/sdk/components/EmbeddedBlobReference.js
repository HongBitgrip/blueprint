Ext.define("com.coremedia.cms.editor.sdk.components.EmbeddedBlobReference", function(EmbeddedBlobReference) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.PropertyPathExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.UrlUtil;

import ext.Ext;

/**
 * This class is responsible for updating embedded images in CoreMedia Richtext in order to transform
 * it towards CKEditor HTML.
 * /
internal class EmbeddedBlobReference {
  /**
   * Characters for random ID to track img element.
   * /
  private static const*/var RANDOM_GENERATOR_CHARACTERS$static/*:String*/ =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";/*
  /**
   * Prefix for IDs especially to ensure that they are valid.
   * /
  private static const*/var RANDOM_ID_PREFIX$static/*:String*/ = 'embeddedBlob_';/*
  /**
   * Length of the Postfix for the ID.
   * /
  private static const*/var RANDOM_ID_POSTFIX_LENGTH$static/*:int*/ = 10;/*
  /**
   * Property path prefix to remove in order to access the bare property name.
   * /
  private static const*/var PROPERTY_PREFIX_PATH$static/*:String*/ = "properties";/*

  /**
   * Function which provides the CKEditor.
   * /
  private var ckEditorSupplier:Function;
  /**
   * Original img element. Will later be tracked only by elementId and thus will be set to null later on.
   * /
  private var element:*;
  /**
   * Random ID to ensure that the element is correctly tracked.
   * /
  private var elementId:String;
  /**
   * The URI path of the blob content.
   * /
  private var contentUri:String;
  /**
   * The property path of the blob property.
   * /
  private var propertyPath:String;
  /**
   * The content containing the embedded blob.
   * /
  private var blobContent:Content;
  private var embeddedImageMaxWidth:int;
  /**
   * If required, the placeholder which is shown instead of an image. Might be null, if no placeholder is required.
   * /
  private var placeholder:IconPlaceholder;

  /**
   * <p>
   * Constructor. Mind that you should call {@link #updateAndTrack} right after creating this instance for
   * initial processing and setting up content change tracking.
   * </p>
   * <p>
   * To end tracking ensure that you call {@link #stopUpdates} to prevent memory leaks.
   * </p>
   *
   * @param ckEditorSupplier function which will provide the CKEditor instance to use
   * @param element image element to update
   * @param contentUri URI of the blob content
   * @param propertyPath property path to the blob property
   * @param embeddedImageMaxWidth max width of embedded image
   * /
  public*/ function EmbeddedBlobReference$(ckEditorSupplier/*:Function*/,
                                        element/*:**/,
                                        contentUri/*:String*/,
                                        propertyPath/*:String*/,
                                        embeddedImageMaxWidth/*:int*/) {
    this.ckEditorSupplier$__X6 = ckEditorSupplier;
    this.element$__X6 = element;
    this.contentUri$__X6 = contentUri;
    this.propertyPath$__X6 = propertyPath;
    this.embeddedImageMaxWidth$__X6 = embeddedImageMaxWidth;
  }/*

  private*/ function getCKEditor()/*:**/ {
    // Unsure if we need this. When extracting this class, the original code contained the expectation that the
    // CKEditor instance might not yet have been set. So using the same assumption here.
    return this.ckEditorSupplier$__X6();
  }/*

  /**
   * <p>
   * Get the img element to work on. As it seems CKEditor might replace the original element during processing.
   * Thus later on the only save way to retrieve the element is to look it up via its id. So as long as element
   * is known, it will be returned directly. Later on it will be located by its id.
   * </p>
   * <p>
   * Note that when deleting the img element in RichText the result of getElement() might be undefined/null.
   * So you have to deal with that - and on the other hand we must not remove any update triggers as on undo
   * exactly this element gets restored.
   * </p>
   *
   * @return element
   * /
  private*/ function getElement()/*:**/ {
    if (this.element$__X6) {
      return this.element$__X6;
    }
    return this.getCKEditor$__X6().document.getById(this.elementId$__X6);
  }/*

  /**
   * Memoize element for later reference. During data processing CKEditor might (or will) change the element
   * instance and replace it by another. The only way to keep track of that element is to set an id to find it
   * later on. And: For first data processing we must use the original element as CKEditor will not be able to
   * find an element by its ID which just got its id set.
   * /
  private*/ function memoizeElement()/*:void*/ {
    if (this.element$__X6) {
      var currentId/*:String*/ = com.coremedia.cms.editor.sdk.components.DomElementUtils.getAttribute(this.element$__X6, 'id');
      if (!currentId) {
        currentId = generateRandomId$static();
        com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(this.element$__X6, 'id', currentId);
      }
      this.element$__X6 = null;
      this.elementId$__X6 = currentId;

    }
  }/*

  /**
   * <p>
   * Initially update the element and keep track of its changes later on. Must be called only once
   * during initial data processing.
   * </p>
   * <p>
   * To end tracking ensure that you call {@link #stopUpdates} to prevent memory leaks.
   * </p>
   * /
  internal*/ function updateAndTrack()/*:void*/ {
    this.blobContent$__X6 = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContent(this.contentUri$__X6);
    this.updateImageSrc$__X6(this.blobContent$__X6);
    this.memoizeElement$__X6();
    // We listen to the complete blob content as we not only want to get updates if the blob changes, but
    // - especially for placeholders - also when the blob content is renamed or moved.
    this.blobContent$__X6.addValueChangeListener(AS3.bind(this,"onBlobContentChange$__X6"));
  }/*

  /**
   * Disables any further updates if the blob content changes. This must be called in order to
   * prevent memory leaks.
   * /
  internal*/ function stopUpdates()/*:void*/ {
    if (! !this.blobContent$__X6) {
      this.blobContent$__X6.removeValueChangeListener(AS3.bind(this,"onBlobContentChange$__X6"));
    }
  }/*

  /**
   * Listener function for blob content updates.
   * /
  private*/ function onBlobContentChange()/*:void*/ {
    var ckEditor/*:**/ = this.getCKEditor$__X6();

    if (ckEditor && ckEditor.document) {
      this.onCKEditorReady$__X6();
    } else {
      // in Firefox the document sometimes did not exist, so wait for it
      // (see wysiwygarea/plugin.js#contentDomReady())
      ckEditor && ckEditor.on('contentDom',AS3.bind( this,"onCKEditorReady$__X6"));
    }
  }/*

  /**
   * Performs updates once the CKEditor is at hand. Ensures that updates to the image element are not placed into
   * the undo buffer.
   * /
  private*/ function onCKEditorReady()/*:void*/ {
    var ckEditor/*:**/ = this.getCKEditor$__X6();
    if (ckEditor && this.blobContent$__X6) {
      // the blob may not be loaded when the CKEditor loads
      // when it does, the blob uri will change
      // but do not record the update of the blob uri in the undo history
      ckEditor.fire('lockSnapshot', null, ckEditor);
      try {
        this.updateImageSrc$__X6(this.blobContent$__X6);
      } catch(e){if(AS3.is (e,AS3.Error)) {
        window.console['warn']("Error while updating embedded image blob source.", e);
      }else throw e;} finally {
        // CMS-9928: We must ensure to re-enable undo-tracking even on failure.
        ckEditor.fire('unlockSnapshot', null, ckEditor);
        ckEditor.removeListener('contentDom',AS3.bind( this,"onCKEditorReady$__X6")); // removing non-existing listeners does not hurt
      }
    }
  }/*

  /**
   * Updates the src attribute of the img element according to the state of blob content and the contained blob.
   *
   * @param blobContent content containing the blob
   * /
  private*/ function updateImageSrc(blobContent/*:Content*/)/*:void*/ {
    var currentElement/*:**/ = this.getElement$__X6();
    if (!currentElement) {
      // Element vanished. It got deleted for example. We still must not detach the listener as on undo/
      // redo or paste it might re-appear.
      return;
    }
    // Dunno: Is it ok just to create the PPE in order to resolve the property path? If you know any better
    // feel free to change it.
    var blobVE/*:PropertyPathExpression*/ = AS3.cast(com.coremedia.ui.data.PropertyPathExpression,com.coremedia.ui.data.ValueExpressionFactory.create(
            this.propertyPath$__X6, blobContent));
    if (! !this.placeholder$__X6) {
      this.placeholder$__X6.reset(currentElement);
    }
    this.placeholder$__X6 = getPlaceholder$static(blobContent, this.propertyPath$__X6, blobVE.getValue());
    if (! !this.placeholder$__X6) {
      this.placeholder$__X6.apply(currentElement);
    } else {
      var imageUri/*:String*/ = computeImageUri$static(blobVE.getValue(), this.embeddedImageMaxWidth$__X6);
      com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(currentElement, 'src', imageUri);
    }
  }/*

  /**
   * Retrieve a placeholder, if a placeholder is required.
   * @param blobContent content containing the blob
   * @param propertyPath property path
   * @param blob blob to possibly create the placeholder for
   * @return a placeholder object or null, if no placeholder is required
   * /
  private static*/ function getPlaceholder$static(blobContent/*:Content*/, propertyPath/*:String*/, blob/*:Blob*/)/*:IconPlaceholder*/ {
    if (!blobContent || !blobContent.getState().readable) {
      return getUnreadablePlaceholder$static(blobContent);
    }
    var contentType/*:String*/ = getMimeType$static(blob, blobContent, propertyPath);
    // Blob empty or not of type image: Requires a placeholder.
    if (!blob || contentType.indexOf('image/') !== 0) {
      return getMimeTypePlaceholder$static(blobContent, contentType);
    }
    // no placeholder required
    return null;
  }/*

  /**
   * Create a placeholder for contents which are not readable.
   * @param blobContent blob content to get placeholder for
   * @return a placeholder which can be applied to an element
   * /
  private static*/ function getUnreadablePlaceholder$static(blobContent/*:Content*/)/*:IconPlaceholder*/ {
    var placeholder/*:IconPlaceholder*/ = new com.coremedia.cms.editor.sdk.components.IconPlaceholder();
    placeholder.title = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(blobContent);
    placeholder.placeholderResourcePath = getResourcePath$static("images/restricted-document_24.svg");
    return placeholder;
  }/*

  /**
   * Create a placeholder representing the blob according to its mime-type.
   * @param blobContent blob content
   * @param contentType mime-type
   * @return placeholder which can be applied to an element
   * /
  private static*/ function getMimeTypePlaceholder$static(blobContent/*:Content*/, contentType/*:String*/)/*:IconPlaceholder*/ {
    var placeholder/*:IconPlaceholder*/ = new com.coremedia.cms.editor.sdk.components.IconPlaceholder();
    placeholder.title = blobContent.getName();
    if (contentType.indexOf("image/") === 0) {
      placeholder.placeholderResourcePath = getResourcePath$static("images/type-picture_24.svg");
    } else if (contentType.indexOf("video/") === 0) {
      placeholder.placeholderResourcePath = getResourcePath$static("images/type-video_24.svg");
    } else if (contentType.indexOf("audio/") === 0) {
      placeholder.placeholderResourcePath = getResourcePath$static("images/type-audio_24.svg");
    } else {
      // Fallback, assuming that we already know, that it is not an image.
      placeholder.placeholderResourcePath = getResourcePath$static("images/type-object_24.svg");
    }
    return placeholder;
  }/*

  /**
   * Determine the mime-type of the given blob. If the blob is empty the mime-type configured for the blob
   * property will be used instead.
   * @param blob blob to preferably get the mime-type from
   * @param blobContent blob content to determine mime type as fallback
   * @param propertyPath property path to determine mime type as fallback
   * @return mime-type string; fall back to application/octet-stream if unavailable
   * /
  private static*/ function getMimeType$static(blob/*:Blob*/, blobContent/*:Content*/, propertyPath/*:String*/)/*:String*/ {
    var contentType/*:String*/ = undefined;
    if (blob) {
      contentType = blob.getContentType();
    } else if (blobContent && blobContent.getState().readable) {
      if (blobContent.getType()) {
        contentType = blobContent.getType().getDescriptor(plainProperty$static(propertyPath))['contentType'];
      }
    }
    return contentType || "application/octet-stream";
  }/*

  /**
   * Strip the property path prefix from the property path.
   * @param propertyPath property path
   * @return stripped property path; unmodified if not identified as property path
   * /
  private static*/ function plainProperty$static(propertyPath/*:String*/)/*:String*/ {
    if (propertyPath.indexOf(PROPERTY_PREFIX_PATH$static + '.') === 0) {
      return propertyPath.substr(PROPERTY_PREFIX_PATH$static.length + 1);
    }
    return propertyPath;
  }/*

  /**
   * Resolves resource path.
   * @param path path to resolve
   * @return resolved resource path
   * /
  private static*/ function getResourcePath$static(path/*:String*/)/*:String*/ {
    return Ext.getResourcePath(path, null, 'com.coremedia.ui.sdk__editor-components');
  }/*

  /**
   * Computes an URI for an image to embed into RichText. If the blob is not an image a fallback URI might be
   * provided instead like a data-uri.
   *
   * @param blob blob to get URI for
   * @param embeddedImageMaxWidth maximum width of image
   * @return URI, possibly data URI
   * /
  private static*/ function computeImageUri$static(blob/*:Blob*/, embeddedImageMaxWidth/*:int*/)/*:String*/ {
    return blob.getUri() + com.coremedia.ui.util.UrlUtil.getImgFitInstruction(embeddedImageMaxWidth);
  }/*

  /**
   * Generates some random ID suitable for DOM elements.
   * @return random ID
   * /
  private static*/ function generateRandomId$static()/*:String*/ {
    var num_chars/*:Number*/ = RANDOM_GENERATOR_CHARACTERS$static.length - 1;
    var randomChar/*:String*/ = "";

    for (var i/*:Number*/ = 0; i < RANDOM_ID_POSTFIX_LENGTH$static; i++) {
      randomChar += RANDOM_GENERATOR_CHARACTERS$static.charAt(Math.floor(Math.random() * num_chars));
    }
    return RANDOM_ID_PREFIX$static + randomChar;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      ckEditorSupplier$__X6: null,
      element$__X6: undefined,
      elementId$__X6: null,
      contentUri$__X6: null,
      propertyPath$__X6: null,
      blobContent$__X6: null,
      embeddedImageMaxWidth$__X6: 0,
      placeholder$__X6: null,
      constructor: EmbeddedBlobReference$,
      getCKEditor$__X6: getCKEditor,
      getElement$__X6: getElement,
      memoizeElement$__X6: memoizeElement,
      updateAndTrack: updateAndTrack,
      stopUpdates: stopUpdates,
      onBlobContentChange$__X6: onBlobContentChange,
      onCKEditorReady$__X6: onCKEditorReady,
      updateImageSrc$__X6: updateImageSrc,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.PropertyPathExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.UrlUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.DomElementUtils",
        "com.coremedia.cms.editor.sdk.components.IconPlaceholder",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
