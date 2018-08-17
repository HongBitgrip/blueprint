Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewIFrameBase", function(PreviewIFrameBase) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.ui.components.IFrameMgr;
import com.coremedia.ui.components.Shimmable;
import com.coremedia.ui.util.ShimmableUtil;

import ext.Component;
import ext.Ext;
import ext.dom.Element;

import js.Window;

/**
 * Pretty much like a stripped down IFrameComponent. Some of the IFrameComponents
 * interface does not make sense for non-same-origin content.
 * /
public class PreviewIFrameBase extends Component implements Shimmable {

  public static const LOAD_EVENT:String = "load";
  public static const UNLOAD_EVENT:String = "unload";

  public var isLoaded:Boolean = false;

  private static const*/var BLANK_URL$static/*:String*/ = "about:blank";/*

  private var frameShim:*;

  public var url:String =*/function url_(){this.url=( BLANK_URL$static);}/*;

  /**
   * @param config The configuration options.
   * @see com.coremedia.ui.components.IFrame
   * /
  public*/ function PreviewIFrameBase$(config/*:PreviewIFrame = null*/) {if(arguments.length<=0)config=null;
    this.super$EvvT(config);url_.call(this);;
    this.addListener("beforedestroy",AS3.bind( this,"onBeforeDestroy$EvvT"));
    com.coremedia.ui.components.IFrameMgr.getInstance().registerIFrame(this);
  }/*

  private*/ function onBeforeDestroy()/*:Boolean*/ {
    com.coremedia.ui.components.IFrameMgr.getInstance().unregisterIFrame(this);
    return true;
  }/*

  override protected*/ function onResize(width/*:Number*/, height/*:Number*/, oldWidth/*:Number*/, oldHeight/*:Number*/)/*:void*/ {
    this.updateShimSize$EvvT(Number(width), Number(height));
    Ext.Component.prototype.onResize.call(this,width, height, oldWidth, oldHeight);
  }/*

  private*/ function updateShimSize(rawWidth/*:Number*/, rawHeight/*:Number*/)/*:void*/ {
    if (this.frameShim$EvvT) {
      var fly/*:Element*/ = Ext.fly(this.frameShim$EvvT);
      fly.setWidth(rawWidth);
      fly.setHeight(rawHeight);
    }
  }/*

  public*/ function setUrl(url/*:String*/)/*:void*/ {
    if (url === BLANK_URL$static) {
      changeIFrameSource$static(this, url, true);
    } else {
      var me/*:PreviewIFrameBase*/ = this;
      window.setTimeout(function ()/*:void*/ {
        changeIFrameSource$static(me, url, false);
      }, 1);
    }
  }/*

  private static*/ function changeIFrameSource$static(iframe/*:PreviewIFrameBase*/, url/*:String*/, hide/*:Boolean*/)/*:void*/ {
    iframe.url = url;
    var elem/*:Element*/ = iframe.getEl();
    if (elem && elem.dom) {
      if (hide) {
        elem.hide();
      }
      elem.set({src: url});
      elem.set({location: url});
      if (!hide) {
        elem.show();
      }
    }
  }/*

  //noinspection JSUnusedGlobalSymbols
  public*/ function setCls(cls/*:String*/)/*:void*/ {
    this.cls = cls;
    var elem/*:Element*/ = this.getEl();
    if (elem && elem.dom) {
      elem.set({cls: this.cls});
    }
  }/*

  public*/ function getContentWindow()/*:Window*/ {
    return (this.el && this.el.dom) ? this.el.dom.contentWindow : null;
  }/*

  protected override*/ function onRender(parentNode/*:Element*/, containerIdx/*:Number*/)/*:void*/ {
    Ext.Component.prototype.onRender.call(this,parentNode, containerIdx);
    this['el'] = parentNode.createChild({
      tag: 'iframe',
      id: 'iframe-' + this.getId(),
      frameBorder: 0,
      cls: this.cls,
      src: this.url,
      width: '100%',
      height: '100%'
    });
    this.mon(this['el'], PreviewIFrameBase.LOAD_EVENT,AS3.bind( this,"onFrameLoad$EvvT"));
    this.mon(this['el'], PreviewIFrameBase.UNLOAD_EVENT,AS3.bind( this,"onFrameUnload$EvvT"));
  }/*

  private*/ function onFrameLoad(/*event: Event*/)/*:void*/ {
    this.isLoaded = true;
    this.fireEvent(PreviewIFrameBase.LOAD_EVENT);
  }/*

  private*/ function onFrameUnload()/*:void*/ {
    this.isLoaded = false;
    this.fireEvent(PreviewIFrameBase.UNLOAD_EVENT);
  }/*

  /**
   * Creates an (frontal) transparent shim agent for the frame.  Used primarily for masking the frame during drag operations.
   * /
  public*/ function createFrameShim()/*:void*/ {
    if (!this.getEl()) {
      return;
    }

    this.frameShim$EvvT = com.coremedia.ui.util.ShimmableUtil.createShimForElement(Ext.get(this.getEl().dom.parentNode));
  }/*

  /**
   * Toggles visibility of the (frontal) transparent shim agent for the frame.  Used primarily for masking the frame during drag operations.
   * @param {Boolean} show Optional True to activate the shim, false to hide the shim agent.
   * /
  public*/ function toggleShim(show/*:Boolean*/)/*:void*/ {
    if (!this.frameShim$EvvT) {
      this.createFrameShim();
    }

    com.coremedia.ui.util.ShimmableUtil.toggleShim(this.frameShim$EvvT, show, false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: ["com.coremedia.ui.components.Shimmable"],
      isLoaded: false,
      frameShim$EvvT: undefined,
      constructor: PreviewIFrameBase$,
      super$EvvT: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      onBeforeDestroy$EvvT: onBeforeDestroy,
      onResize: onResize,
      updateShimSize$EvvT: updateShimSize,
      setUrl: setUrl,
      setCls: setCls,
      getContentWindow: getContentWindow,
      onRender: onRender,
      onFrameLoad$EvvT: onFrameLoad,
      onFrameUnload$EvvT: onFrameUnload,
      createFrameShim: createFrameShim,
      toggleShim: toggleShim,
      statics: {
        LOAD_EVENT: "load",
        UNLOAD_EVENT: "unload"
      },
      requires: [
        "Ext",
        "Ext.Component",
        "com.coremedia.ui.components.IFrameMgr",
        "com.coremedia.ui.components.Shimmable",
        "com.coremedia.ui.util.ShimmableUtil"
      ]
    };
});
