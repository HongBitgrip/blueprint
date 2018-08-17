Ext.define("com.coremedia.ui.components.ImageComponent", function(ImageComponent) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;
import ext.Ext;
import ext.dom.Element;

[PublicApi]
public class ImageComponent extends Component implements IValidationStateMixin {

  /**
   *@param config the config object
   * /
  public*/ function ImageComponent$(config/*:Image = null*/) {if(arguments.length<=0)config=null;
    this.autoEl = {
      tag: 'img'
    };
    this.setSrc(config ? AS3.getBindable(config,"src") : null);
    this.super$UZUs(config);
    this.initValidationStateMixin();
  }/*

  /**
   * The image source URL.
   * /
  [Bindable]
  public var src:String;


  /**
   * Image click handler function. For the parameters of the function
   *
   * @see ext.Element#addListener
   * /
  [Bindable]
  public var handler:Function;

  //ignore any resize
  override public*/ function setSize(width/*:**/, height/*:**/)/*:Component*/ {
    return this;
  }/*

  /**
   * Creates element and registers click handler.
   * @param parentNode
   * @param containerIdx
   * /
  override protected*/ function onRender(parentNode/*:Element*/, containerIdx/*:Number*/)/*:void*/ {var this$=this;
    Ext.Component.prototype.onRender.call(this,parentNode, containerIdx);
    if (AS3.getBindable(this,"handler")) {
      this.el.addListener('click', AS3.getBindable(this,"handler"));
    }
    this.el.addListener('error',AS3.bind( this,"handleError$UZUs"));
    this.el.addListener('load', function()/*:void*/ {
      AS3.setBindable(this$,"validationMessage" , null);
      AS3.setBindable(this$,"validationState" , null);
      this$.updateLayout();
    });
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.Component.prototype.onDestroy.call(this);
    this.setHandler$UZUs(undefined);
  }/*

  private*/ function setHandler(handler/*:Function*/)/*:void*/ {
    if (this.el && handler) {
      this.el.removeListener('click', handler);
    }
    this['handler'] = handler;
    if (this.el && AS3.getBindable(this,"handler")) {
      this.el.addListener('click', handler);
    }
  }/*

  private*/ function handleError()/*:void*/ {
    var visibleParent/*:Component*/ = getVisibleParent$static(this);
    if (!visibleParent) {
      return;
    }

    this.el.setHeight(visibleParent.getHeight());
    AS3.setBindable(this,"validationMessage" , this.resourceManager.getString("com.coremedia.ui.UI", "Image_load_error_text"));
    AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
  }/*

  private static*/ function getVisibleParent$static(cmp/*:Component*/)/*:Component*/ {
    if (!cmp) {
      return null;
    }
    if (cmp.getWidth() > 0 && cmp.getHeight() > 0) {
      return cmp;
    } else {
      return getVisibleParent$static(cmp.ownerCt);
    }
  }/*

  /** @private * /
  public*/ function setSrc(src/*:String*/)/*:void*/ {
    this['src'] = src || Ext.BLANK_IMAGE_URL;
    if (this.el) {
      this.el.dom['src'] = AS3.getBindable(this,"src");
    } else if (this.autoEl) {
      this.autoEl.src = AS3.getBindable(this,"src");
    }
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {"": ["PublicApi"]},
      constructor: ImageComponent$,
      super$UZUs: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      setSize: setSize,
      onRender: onRender,
      onDestroy: onDestroy,
      setHandler$UZUs: setHandler,
      handleError$UZUs: handleError,
      setSrc: setSrc,
      config: {
        src: null,
        handler: null
      },
      requires: [
        "Ext",
        "Ext.Component",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.mixins.ValidationState"]
    };
});
