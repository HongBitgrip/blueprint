Ext.define("com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase", function(CoreMediaRichTextAreaBase) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.util.FunctionUtil;
import com.coremedia.ui.util.UrlUtil;

import ext.Ext;
import ext.event.Event;

[PublicApi]
public class CoreMediaRichTextAreaBase extends RichTextArea {
  private var embeddedImageMaxWidth:int;
  private var embeddedBlobReferences:Array =*/function embeddedBlobReferences_(){this.embeddedBlobReferences$kNDk=( []);}/*;

  private var convertImageElementFuse:Function;

  private static const*/var FOCUS$static/*:String*/ = 'focus';/*
  private static const*/var BLUR$static/*:String*/ = 'blur';/*

  public*/ function CoreMediaRichTextAreaBase$(config/*:CoreMediaRichTextArea = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.embeddedImageMaxWidth$kNDk = AS3.getBindable(config,"embeddedImageMaxWidth");

    this.super$kNDk(config);embeddedBlobReferences_.call(this);;
    this.on(com.coremedia.ui.ckeditor.RichTextArea.CKREADY_EVENT, function ()/*:void*/ {
      this$.getCKEditor().on('setData',AS3.bind( this$,"clearBlobContentListeners$kNDk"));
      this$.getCKEditor().on(FOCUS$static, function(e/*:Event*/)/*:void*/ {
        this$.fireEvent(FOCUS$static);
        this$.addCls(this$.focusCls);
      });
      this$.getCKEditor().on(BLUR$static, function(e/*:Event*/)/*:void*/ {
        this$.fireEvent(BLUR$static);
        this$.removeCls(this$.focusCls);
      });
      this$.disableObjectResize();
    });
  }/*

  // Suppresses the resize handles on images when clicked in FF
  internal*/ function disableObjectResize()/*:void*/ {
    if (Ext.isGecko) {
      var _doc/*:**/ = this.getCKEditor().document.$;
      _doc.execCommand( 'enableObjectResizing', false, !this.getCKEditor().config.disableObjectResizing );
    }
  }/*

  internal*/ function getConvertImageElementFunction()/*:Function*/ {
    return this.convertImageElementFuse$kNDk || (this.convertImageElementFuse$kNDk = com.coremedia.ui.util.FunctionUtil.makeFuse(AS3.bind(this,"convertImageElement")));
  }/*

  /**
   * Convert the coremedia-richtext attributes (href, ...) in the given img element to html attributes (src, ...).
   *
   * @param element the element to convert; either a standard dom element or a CKEDITOR.dom.element
   * @private
   * /
  public*/ function convertImageElement(element/*:Object*/)/*:void*/ {
    var href/*:String*/ = getAttribute$static(element, 'xlink:href');

    if (href) {
      escapeAttribute$static(element, 'xlink:href');
      escapeAttribute$static(element, 'xlink:role');
      escapeAttribute$static(element, 'xlink:title');

      // convert the xlink:href URI into a valid image URI
      var hashPosition/*:int*/ = href.indexOf("#");
      var contentUri/*:String*/;
      var propertyPath/*:String*/;
      if (hashPosition != -1) {
        contentUri = href.substring(0, hashPosition);
        propertyPath = href.substring(hashPosition + 1);

        var reference/*:EmbeddedBlobReference*/ = new com.coremedia.cms.editor.sdk.components.EmbeddedBlobReference(AS3.bind(this,"getCKEditor"), element, contentUri, propertyPath, this.embeddedImageMaxWidth$kNDk);
        this.embeddedBlobReferences$kNDk.push(reference);
        reference.updateAndTrack();
      } else {
        setAttribute$static(element, 'src', com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(href +
                com.coremedia.ui.util.UrlUtil.getImgFitInstruction(this.embeddedImageMaxWidth$kNDk)));
      }
    } else if (getAttribute$static(element, 'name')) { // an image was pasted from another html site
      setAttribute$static(element, 'name', 'span');    // make it a span, empty spans will be removed...
      delete element.attributes;
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    com.coremedia.ui.util.FunctionUtil.blowFuse(this.convertImageElementFuse$kNDk);
    this.clearBlobContentListeners$kNDk();
    com.coremedia.ui.ckeditor.RichTextArea.prototype.beforeDestroy.call(this);
  }/*

  private*/ function clearBlobContentListeners()/*:void*/ {
    this.embeddedBlobReferences$kNDk.forEach(function(ref/*:EmbeddedBlobReference*/)/*:void*/ {
      ref.stopUpdates();
    });
    this.embeddedBlobReferences$kNDk = [];
  }/*

  private static*/ function getAttribute$static(element/*:**/, attributeName/*:String*/)/*:String*/ {
    return com.coremedia.cms.editor.sdk.components.DomElementUtils.getAttribute(element, attributeName);
  }/*

  private static*/ function setAttribute$static(element/*:**/, attributeName/*:String*/, attributeValue/*:String*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(element, attributeName, attributeValue);
  }/*

  private static*/ function removeAttribute$static(element/*:**/, attributeName/*:String*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.components.DomElementUtils.removeAttribute(element, attributeName);
  }/*

  // prepends a "_" to the attribute name
  private static*/ function escapeAttribute$static(element/*:Object*/, attributeName/*:String*/)/*:void*/ {
    var value/*:String*/ = getAttribute$static(element, attributeName);
    if (value !== undefined && value !== null) {
      setAttribute$static(element, '_' + attributeName, value);
      removeAttribute$static(element, attributeName);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextArea",
      metadata: {"": ["PublicApi"]},
      embeddedImageMaxWidth$kNDk: 0,
      convertImageElementFuse$kNDk: null,
      constructor: CoreMediaRichTextAreaBase$,
      super$kNDk: function() {
        com.coremedia.ui.ckeditor.RichTextArea.prototype.constructor.apply(this, arguments);
      },
      disableObjectResize: disableObjectResize,
      getConvertImageElementFunction: getConvertImageElementFunction,
      convertImageElement: convertImageElement,
      beforeDestroy: beforeDestroy,
      clearBlobContentListeners$kNDk: clearBlobContentListeners,
      requires: [
        "Ext",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.util.FunctionUtil",
        "com.coremedia.ui.util.UrlUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.DomElementUtils",
        "com.coremedia.cms.editor.sdk.components.EmbeddedBlobReference"
      ]
    };
});
