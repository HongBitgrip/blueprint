Ext.define("com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget", function(RichTextAreaDropTarget) {/*package com.coremedia.cms.editor.sdk.dragdrop {

import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.impl.ContentTypeImpl;
import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.BeanState;

import ext.Ext;
import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;

public class RichTextAreaDropTarget extends DropTarget {
  public static var DEFAULT_LINK_TYPE:String = 'replace';

  public static const TARGET_DROP_HOVER:String = "target-drop-hover";

  private var richTextArea:CoreMediaRichTextArea;

  public*/ function RichTextAreaDropTarget$(component/*:CoreMediaRichTextArea*/) {
    this.super$dVld(component.getCKEditor().editable().$, AS3.cast(Ext.dd.DropTarget,{
      ddGroup: "ContentDD"
    }));
    this.addToGroup("ContentLinkDD");
    this.richTextArea$dVld = component;
  }/*

  private*/ function allowDrop(dragInfo/*:DragInfo*/)/*:Boolean*/ {
    if (!dragInfo) {
      return false;
    }
    var draggedItems/*:Array*/ = dragInfo.getContents();
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
    // if any item was filtered out, no drop allowed
    if (draggedItems.length !== contents.length) {
      return false;
    }

    if (this.richTextArea$dVld.disabled) {
      return false;
    }

    if (AS3.getBindable(this.richTextArea$dVld,"readOnly","DUMMY")) {
      return false;
    }

    return RichTextAreaDropTarget.isValidRichTextContent(contents);
  }/*

  /**
   * Validates the types of the given contents if there are all allowed
   * to be inserted into richtext
   * @param contents the contents to validate
   * @return true if all contents can be inserted
   * /
  public static*/ function isValidRichTextContent$static(contents/*:Array*/)/*:Boolean*/ {
    var imageTypes/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getRichTextEmbeddableTypes();
    var linkableTypes/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getRichTextLinkableTypes();
    var allTypes/*:Array*/ = linkableTypes.concat(imageTypes);

    for/* each*/(var $1=0;$1</* in*/ contents.length;++$1) {var content/*:Content*/ =contents[$1];
      if(!hasValidContentType$static(content, allTypes)) {
        return false;
      }
    }
    return true;
  }/*

  /**
   * Checks if the given content matches on of the given content types or subtypes
   * @param content the content to check
   * @param validTypes the content types to check
   * /
  private static*/ function hasValidContentType$static(content/*:Content*/, validTypes/*:Array*/)/*:Boolean*/ {
    if (content.getState() !== com.coremedia.ui.data.BeanState.READABLE) {
      // Content is unreadable. Assume that it is inappropriate.
      return false;
    }

    for/* each*/(var $1=0;$1</* in*/ validTypes.length;++$1) {var cType/*:ContentType*/ =validTypes[$1];
      if(content.getType().isSubtypeOf(cType)) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Tries to find a suitable blob property of the given content. The criteria are:
   * <ul>
   * <li>it has a blob-property</li>
   * <li>the mimeType of the property is image/*</li>
   * <li>the property is not empty; has data</li>
   * </ul>
   * @param content the content to check
   * @return the name of the suitable property or null if nothing found
   *
   * @see CapPropertyDescriptorType.BLOB
   * /
  private static*/ function findMostSuitableBlobProperty$static(content/*:Content*/)/*:String*/ {
    var contentType/*:ContentTypeImpl*/ =AS3.as( content.getType(),  com.coremedia.cap.content.impl.ContentTypeImpl);
    var descriptors/*:Array*/ = contentType.getDescriptors();
    for (var i/*:Number*/ = 0; i < descriptors.length; i++) {
      var descriptor/*:Object*/ = descriptors[i];
      if(descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.BLOB && descriptor.contentType.indexOf('image/*') !== -1) {
        if(content.getProperties().get(descriptors[i].name) !== null) {
          return descriptors[i].name;
        }
      }
    }
    return null;
  }/*

  private*/ function getTargetHover(hoverClass/*:String*/)/*:void*/ {
    var dropTargetHoverID/*:String*/ = this.richTextArea$dVld.getId();
    dropTargetHoverID = "cke_" + dropTargetHoverID;
    var dropHoverDom/*:**/ = window.document.getElementById(dropTargetHoverID);
    Ext.fly(dropHoverDom).addCls(hoverClass);
  }/*

  private*/ function removeClass(cls/*:String*/)/*:void*/ {
    var dropTargetHoverID/*:String*/ = this.richTextArea$dVld.getId();
    dropTargetHoverID = "cke_" + dropTargetHoverID;
    var dropHoverDom/*:**/ = window.document.getElementById(dropTargetHoverID);
    Ext.fly(dropHoverDom).removeCls(cls);
  }/*

  override public*/ function notifyOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (this.allowDrop$dVld(dragInfo)) {
      this.getTargetHover$dVld(RichTextAreaDropTarget.TARGET_DROP_HOVER);
      return this.dropAllowed;
    } else {
      return this.dropNotAllowed;
    }
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.removeClass$dVld(RichTextAreaDropTarget.TARGET_DROP_HOVER);
  }/*

  override public*/ function notifyDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (!this.allowDrop$dVld(dragInfo)) {
      return false;
    }
    var draggedItems/*:Array*/ = dragInfo.getContents();
    // just to be sure, filter null items
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
    RichTextAreaDropTarget.createLinks(this.richTextArea$dVld, contents);
    this.removeClass$dVld(RichTextAreaDropTarget.TARGET_DROP_HOVER);
    return true;
  }/*

  /**
   * Creates the links for the given content content.
   * @param richtext
   * @param contents
   * /
  public static*/ function createLinks$static(richtext/*:CoreMediaRichTextArea*/, contents/*:Array*/)/*:void*/ {
    var ckEditor/*:**/ = richtext.getCKEditor();
    for (var i/*:Number*/ = 0; i < contents.length; i++) {
      richtext.saveSnapshot();
      if(isImage$static(contents[i])) {
        createImageLink$static(richtext, contents[i]);
      }
      else {
        createLink$static(richtext, contents[i], contents.length > 1);
      }
      richtext.saveSnapshot();
      richtext.forceSave();
    }

    var ranges/*:**/ = ckEditor.getSelection().getRanges();
    ckEditor.getSelection().selectRanges(ranges);
  }/*

  /**
   * Create the image Element in the ckeditor
   * @param richtext the richtext area of the CKEditor
   * @param content the content for the image
   * /
  private static*/ function createImageLink$static(richtext/*:CoreMediaRichTextArea*/, content/*:Content*/)/*:void*/ {
    var contentUri/*:String*/ = content.getUriPath();
    var blobProperty/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getRichTextDragDropImageBlobProperty(content.getType().getName());
    if (blobProperty === null) {
      blobProperty = findMostSuitableBlobProperty$static(content);
    }

    var attributes/*:Object*/ = {
      'alt': '',
      'xlink:href': contentUri + "#properties." + blobProperty,
      'xlink:show': 'embed',
      'xlink:actuate': 'onLoad',
      'xlink:type': 'simple'
    };

    var ckEditor/*:**/ = richtext.getCKEditor();
    var imgElement/*:**/ = ckEditor.document.createElement('img', {attributes: attributes});
    insertElement$static(ckEditor, imgElement, true);

    richtext.convertImageElement(imgElement);
  }/*

  /**
   * Creates the content element depending on the content type
   * @param richtext the CoreMedia richtext editor that contains the CKEditor
   * @param content the content to create the link for
   * @param wrap true to put a 'p' tag around the new element, ensures valid markup and better formatting
   * /
  private static*/ function createLink$static(richtext/*:CoreMediaRichTextArea*/, content/*:Content*/, wrap/*:Boolean*/)/*:void*/ {
    var ckEditor/*:**/ = richtext.getCKEditor();

    var attributes/*:Object*/ = {'href': '#', '_xlink:href': content.getUriPath(), '_xlink:show': RichTextAreaDropTarget.DEFAULT_LINK_TYPE};
    var contentElement/*:**/ = ckEditor.document.createElement('a', {attributes: attributes});
    var text/*:**/ = ckEditor.document.createText(content.getName());
    contentElement.append(text);

    insertElement$static(ckEditor, contentElement, wrap);
  }/*

  /**
   * Inserts the given element, ensures the focus and range state.
   * @param ckEditor the CKEditor instance to determine the insertion point.
   * @param newElement the new element for the dropped content
   * @param wrap true to put a 'p' tag around the new element, ensures valid markup and better formatting
   * /
  private static*/ function insertElement$static(ckEditor/*:**/, newElement/*:**/, wrap/*:Boolean*/)/*:void*/ {
    var ranges/*:**/ = ckEditor.getSelection().getRanges();
    if (ranges[0] === undefined) {
      ckEditor.focus();
      ranges = ckEditor.getSelection().getRanges();
    }

    if(wrap) {
      //create wrapper element
      var wrapperElement/*:**/ = ckEditor.document.createElement('p', {});
      wrapperElement.append(newElement);
      newElement = wrapperElement;
    }

    ckEditor.insertElement(newElement);
  }/*


  /**
   * Returns true if the given content is registered as a richtext image.
   * @param content the content to check
   * @return true if the given content is an image.
   * /
  private static*/ function isImage$static(content/*:Content*/)/*:Boolean*/ {
    var imageTypes/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getRichTextEmbeddableTypes();
    for/* each*/(var $1=0;$1</* in*/ imageTypes.length;++$1) {var contentType/*:ContentType*/ =imageTypes[$1];
      if(content.getType().isSubtypeOf(contentType)) {
        return true;
      }
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      richTextArea$dVld: null,
      constructor: RichTextAreaDropTarget$,
      super$dVld: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      allowDrop$dVld: allowDrop,
      getTargetHover$dVld: getTargetHover,
      removeClass$dVld: removeClass,
      notifyOver: notifyOver,
      notifyOut: notifyOut,
      notifyDrop: notifyDrop,
      statics: {
        DEFAULT_LINK_TYPE: 'replace',
        TARGET_DROP_HOVER: "target-drop-hover",
        isValidRichTextContent: isValidRichTextContent$static,
        createLinks: createLinks$static
      },
      requires: [
        "Ext",
        "Ext.dd.DropTarget",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cap.content.impl.ContentTypeImpl",
        "com.coremedia.ui.data.BeanState"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dragdrop.DragInfo",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
