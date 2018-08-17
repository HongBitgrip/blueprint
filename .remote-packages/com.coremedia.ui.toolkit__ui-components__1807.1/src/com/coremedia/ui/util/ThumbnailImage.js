Ext.define("com.coremedia.ui.util.ThumbnailImage", function(ThumbnailImage) {/*package com.coremedia.ui.util {

import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

import ext.Ext;
import ext.Template;
import ext.XTemplate;
import ext.data.Model;
import ext.dom.Element;
import ext.view.DataView;

import js.HTMLElement;

/**
 * My instances represent images intended to be used as thumbnails.
 *
 * <p>A thumbnail image might have the capability to be animated, in wich case the <code>animatedImageUri</code> is non-null, as well as the <code>animatedImageType</code>.
 *
 * @see #animatedImageUri
 * @see #animatedImageType
 * /
public class ThumbnailImage {

  private static const*/var ANIMATED_IMAGE_MODIFIER_PREFIX$static/*:String*/ = "animated-";/*

  /**
   * The animated image type of animated GIFs
   * /
  public static const ANIMATED_IMAGE_TYPE_GIF:String = "gif";

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){ThumbnailImage.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-thumbnail-image"));}/*;
  public static const ELEMENT_IMAGE:BEMElement =*/function ELEMENT_IMAGE$static_(){ThumbnailImage.ELEMENT_IMAGE=( ThumbnailImage.BLOCK.createElement("image"));}/*;
  public static const MODIFIER_ANIMATED_GIF:BEMModifier =*/function MODIFIER_ANIMATED_GIF$static_(){ThumbnailImage.MODIFIER_ANIMATED_GIF=( ThumbnailImage.BLOCK.createModifier(ANIMATED_IMAGE_MODIFIER_PREFIX$static + ThumbnailImage.ANIMATED_IMAGE_TYPE_GIF));}/*;
  public static const MODIFIER_ANIMATING:BEMModifier =*/function MODIFIER_ANIMATING$static_(){ThumbnailImage.MODIFIER_ANIMATING=( ThumbnailImage.BLOCK.createModifier("animating"));}/*;

  private static const*/var SRC_ATTR_NAME$static/*:String*/ = "src";/*
  private static const*/var ANIMATED_SRC_ATTR_NAME$static/*:String*/ = "data-animated-src";/*
  private static const*/var SRC_BACKUP_ATTR_NAME$static/*:String*/ = "data-src-orig";/*

  private static const*/var ANIMATED_IMAGE_MODIFIERS$static/*:Object*/;/* =*/function ANIMATED_IMAGE_MODIFIERS$static_(){ANIMATED_IMAGE_MODIFIERS$static=( { });};/*

  private static const*/var THUMBNAIL_IMG_TEMPLATE$static/*:Template*/;/* =*/function THUMBNAIL_IMG_TEMPLATE$static_(){THUMBNAIL_IMG_TEMPLATE$static=( new Ext.XTemplate([
    '<div role="presentation" class="' + ThumbnailImage.BLOCK,
    '<tpl if="additionalCssClass"> {additionalCssClass}</tpl>',
    '<tpl if="thumbnail.isAnimated"> {[values.thumbnail.getAnimatedImageModifier()]}</tpl>">',
    '<img role="presentation" class="' + ThumbnailImage.ELEMENT_IMAGE,
    '" src="{thumbnail.imageUri}"',
    ' ' + ANIMATED_SRC_ATTR_NAME$static + '="{thumbnail.animatedImageUri}"/>',
    '</div>']).compile());};/*

  public*/ function ThumbnailImage$(imageUri/*:String*/, animatedImageUri/*:String=null*/, animatedImageType/*:String=null*/) {switch(Math.max(arguments.length,1)){case 1:animatedImageUri=null;case 2:animatedImageType=null;}
    if (animatedImageUri && !animatedImageType) {
      animatedImageType = ThumbnailImage.ANIMATED_IMAGE_TYPE_GIF;
    }
    Ext.apply(this, {imageUri: imageUri, animatedImageUri: animatedImageUri, animatedImageType: animatedImageType});
  }/*

  /**
   * Return the URI for a normal (static) image thumbnail
   * /
  public native function get imageUri():String;

  /**
   * Return the URI of an animated thumbnail, or null if animation is not supported by this thumbnail image.
   * /
  public native function get animatedImageUri():String;

  /**
   * Return the animated image type, or null if animation is not supported by this thumbnail image.
   * /
  public native function get animatedImageType():String;

  /**
   * Return true if animation is supported by this thumbnail image.
   * /
  public*/ function  get$isAnimated()/*:Boolean*/ {
    return ! !this.animatedImageType;
  }/*

  /**
   * Create a BEM modifier for the given animation type.
   * /
  public static*/ function createAnimatedImageModifier$static(animatedImageType/*:String*/)/*:BEMModifier*/ {
    // lazy initialization
    if (!ANIMATED_IMAGE_MODIFIERS$static[ThumbnailImage.ANIMATED_IMAGE_TYPE_GIF]) {
      ANIMATED_IMAGE_MODIFIERS$static[ThumbnailImage.ANIMATED_IMAGE_TYPE_GIF] = ThumbnailImage.MODIFIER_ANIMATED_GIF;
    }
    var modifier/*:BEMModifier*/ = ANIMATED_IMAGE_MODIFIERS$static[animatedImageType];
    return modifier || (ANIMATED_IMAGE_MODIFIERS$static[animatedImageType] = ThumbnailImage.BLOCK.createModifier(animatedImageType));
  }/*

  //noinspection JSUnusedGlobalSymbols used in template above
  /**
   * Return the BEM modifier for the animation type of this thumbnail image, or null if animation is not supported.
   * /
  public*/ function getAnimatedImageModifier()/*:BEMModifier*/ {
    if (!this.isAnimated) {
      return null;
    }
    return ThumbnailImage.createAnimatedImageModifier(this.animatedImageType);
  }/*

  /**
   * Render this thumbnail image to HTML, with an optional additional CSS class for the outer BEM block.
   *
   * @see #BLOCK
   * /
  public*/ function render(additionalCssClass/*:String = null*/)/*:String*/ {if(arguments.length<=0)additionalCssClass=null;
    return THUMBNAIL_IMG_TEMPLATE$static.apply({
      thumbnail: this,
      additionalCssClass: additionalCssClass
    });
  }/*
  /**
   * Register event handlers on the given data view so that GIF animation starts on mouse enter and focus events,
   * and animation stops on mouse leave and blur events.
   * /
  public static*/ function registerDataViewAnimationHandlers$static(view/*:DataView*/)/*:void*/ {
    view.on("itemmouseenter", function(view/*:DataView*/, ignore/*:**/, item/*:HTMLElement*/)/*:void*/ {
      stopAllAnimation$static(view);
      ThumbnailImage.startAnimation(Ext.fly(item));
    });
    view.on("itemmouseleave", stopAllAnimation$static);
    view.on("focuschange", function(ignore/*:**/, oldFocused/*:Model*/, newFocused/*:Model*/)/*:void*/ {
      stopAllAnimation$static(view);
      var node/*:HTMLElement*/ = view.getNode(newFocused);
      if (node) {
        ThumbnailImage.startAnimation(Ext.fly(node));
      }
    });
  }/*

  private static*/ function stopAllAnimation$static(view/*: DataView*/)/*:void*/ {
    ThumbnailImage.stopAnimation(view.getEl());
  }/*


  /**
   * Start animating thumbnail images rendered in the given HTML element tree, if animation is supported by this thumbnail image.
   *
   * <p>For all animated GIF IMG elements,
   * effectively replaces the IMG source with the <code>animatedImageURI</code>, and adds the <code>MODIFIER_ANIMATING</code> modifie.
   *
   * @see #animatedImageUri
   * @see #MODIFIER_ANIMATING
   * /
  public static*/ function startAnimation$static(el/*:Element*/)/*:void*/ {
    el.select(ThumbnailImage.BLOCK.getCSSSelector()).elements.forEach(function (imgContainer/*:HTMLElement*/)/*:void*/ {
      var el/*:Element*/ = Ext.fly(imgContainer);
      if (el.hasCls(ThumbnailImage.MODIFIER_ANIMATED_GIF.getCSSClass())) {
        replaceChildAttr$static(el, ThumbnailImage.ELEMENT_IMAGE.getCSSSelector(), SRC_ATTR_NAME$static, ANIMATED_SRC_ATTR_NAME$static, SRC_BACKUP_ATTR_NAME$static);
        el.addCls(ThumbnailImage.MODIFIER_ANIMATING.getCSSClass());
      }
    });
  }/*

  /**
   * Stop animating thumbnail images rendered into the given HTML element tree.
   *
   * <p>For all animated GIF IMG elements,
   * effectively restores the IMG source with the <code>imageURI</code>, and removes the <code>MODIFIER_ANIMATING</code> modifier.
   *
   * @see #imageUri
   * @see #MODIFIER_ANIMATING
   * /
  public static*/ function stopAnimation$static(el/*:Element*/)/*:void*/ {
    el.select(ThumbnailImage.BLOCK.getCSSSelector()).elements.forEach(function (imgContainer/*:HTMLElement*/)/*:void*/ {
      var el/*:Element*/ = Ext.fly(imgContainer);
      replaceChildAttr$static(el, ThumbnailImage.ELEMENT_IMAGE.getCSSSelector(), SRC_ATTR_NAME$static, null, SRC_BACKUP_ATTR_NAME$static);
      el.removeCls(ThumbnailImage.MODIFIER_ANIMATING.getCSSClass());
    });
  }/*

  private static*/ function replaceChildAttr$static(item/*:Element*/, childSelector/*:String*/, targetAttrName/*:String*/, sourceAttrName/*:String*/, backupAttrName/*:String*/)/*:Boolean*/ {
    item.select(childSelector).elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
      var value/*:Object*/;
      if (sourceAttrName) {
        // backup and replace target attr with source attr
        value = dom.getAttribute(sourceAttrName);
        if (!dom.getAttribute(backupAttrName)) {
          dom.setAttribute(backupAttrName, dom.getAttribute(targetAttrName));
        }
        dom.setAttribute(targetAttrName, value);
      } else {
        // restore target attr from backup
        value = dom.getAttribute(backupAttrName);
        if (value) {
          dom.setAttribute(targetAttrName, value);
        }
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ThumbnailImage$,
      getAnimatedImageModifier: getAnimatedImageModifier,
      render: render,
      statics: {
        ANIMATED_IMAGE_TYPE_GIF: "gif",
        BLOCK: undefined,
        ELEMENT_IMAGE: undefined,
        MODIFIER_ANIMATED_GIF: undefined,
        MODIFIER_ANIMATING: undefined,
        ANIMATED_IMAGE_MODIFIERS: undefined,
        THUMBNAIL_IMG_TEMPLATE: undefined,
        createAnimatedImageModifier: createAnimatedImageModifier$static,
        registerDataViewAnimationHandlers: registerDataViewAnimationHandlers$static,
        startAnimation: startAnimation$static,
        stopAnimation: stopAnimation$static,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_IMAGE$static_();
          MODIFIER_ANIMATED_GIF$static_();
          MODIFIER_ANIMATING$static_();
          ANIMATED_IMAGE_MODIFIERS$static_();
          THUMBNAIL_IMG_TEMPLATE$static_();
        }
      },
      __accessors__: {isAnimated: {get: get$isAnimated}},
      requires: [
        "Ext",
        "Ext.XTemplate"
      ],
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
