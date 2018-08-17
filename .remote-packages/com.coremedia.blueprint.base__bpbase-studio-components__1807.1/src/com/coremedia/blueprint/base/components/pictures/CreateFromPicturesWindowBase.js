Ext.define("com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase", function(CreateFromPicturesWindowBase) {/*package com.coremedia.blueprint.base.components.pictures {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.util.PathFormatter;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ThumbnailImage;

import ext.Ext;
import ext.form.field.TextField;
import ext.view.DataView;
import ext.window.Window;

/**
 * Base class for windows to create documents (e.g. gallery from a list of pictures);
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery')]
public class CreateFromPicturesWindowBase extends StudioDialog {

  protected const ITEM_ID_IMAGE_VIEW:String = "imageview";

  private var model:Bean;
  private var disabledExpression:ValueExpression;

  /**
   *
   * @param config the config object
   * /
  public*/ function CreateFromPicturesWindowBase$(config/*:CreateFromPicturesWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$E7wf(config);
  }/*


  override protected*/ function afterShow(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterShow.call(this,animateTarget, callback, scope);
    var nameField/*:TextField*/ =AS3.as( this.queryById('documentName'),  Ext.form.field.Text);
    nameField.focus(true,300);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    CreateFromPicturesWindowBase.calculateWindowHeight(this);
    var imageView/*:DataView*/ =AS3.as( this.queryById(this.ITEM_ID_IMAGE_VIEW),  Ext.view.View);
    com.coremedia.ui.util.ThumbnailImage.registerDataViewAnimationHandlers(imageView);
  }/*


  public static*/ function calculateWindowHeight$static(w/*:Window*/)/*:void*/ {
    var workArea/*:WorkArea*/,calcHeight/*:Number*/,windowHeight/*:Number*/,offsetY/*:Number*/;
    offsetY = 160;
    workArea =AS3.as( Ext.getCmp('workarea'),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    calcHeight = workArea.getHeight();
    windowHeight = w.getHeight();
    if (windowHeight >= calcHeight) {
      w.setHeight(calcHeight - offsetY);
    }
  }/*

  internal*/ function getModel(config/*:CreateFromPicturesWindow*/)/*:Bean*/ {
    return this.getViewModel2(AS3.getBindable(config,"preferredName"), AS3.getBindable(config,"targetFolder"), AS3.getBindable(config,"selectedPictures"));
  }/*

  public*/ function getViewModel2(preferredName/*:String*/, targetFolder/*:String*/, selectedPictures/*:Array*/)/*:Bean*/ {
    if (!this.model$E7wf) {
      this.model$E7wf = com.coremedia.ui.data.beanFactory.createLocalBean({
        name: preferredName || "",
        folder: CreateFromPicturesWindowBase.getFormattedTargetFolder(targetFolder, selectedPictures),
        pictures: selectedPictures || []
      });
    }
    return this.model$E7wf;
  }/*

  public*/ function isDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.disabledExpression$E7wf) {
      this.disabledExpression$E7wf = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return !this$.model$E7wf || !this$.model$E7wf.get("name") || !this$.model$E7wf.get("folder") || Array(this$.model$E7wf.get("pictures")).length === 0;
      });
    }
    return this.disabledExpression$E7wf;
  }/*

  internal*/ function validateName(value/*:String*/)/*:**/ {
    if (value && value.length > 0) {
      return true;
    }
    this.model$E7wf.set('name', null);
    return false;
  }/*

  internal*/ function validateFolder(value/*:String*/)/*:**/ {
    if (value && value.length > 0) {
      return true;
    }
    this.model$E7wf.set('folder', null);
    return false;
  }/*

  internal static*/ function getFormattedTargetFolder$static(targetFolder/*:String*/, selectedPictures/*:Array*/)/*:String*/ {
    var result/*:String*/ = com.coremedia.cms.editor.sdk.util.PathFormatter.formatSitePath(targetFolder || "");
    if (!result && selectedPictures && selectedPictures.length > 0) {
      var picture/*:Content*/ = selectedPictures[0];
      result = com.coremedia.cms.editor.sdk.util.PathFormatter.formatSitePath(targetFolder || "", picture);
      if (!result) {
        result = picture.getParent().getPath();
      }
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      ITEM_ID_IMAGE_VIEW: "imageview",
      model$E7wf: null,
      disabledExpression$E7wf: null,
      constructor: CreateFromPicturesWindowBase$,
      super$E7wf: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterShow: afterShow,
      afterRender: afterRender,
      getModel: getModel,
      getViewModel2: getViewModel2,
      isDisabledValueExpression: isDisabledValueExpression,
      validateName: validateName,
      validateFolder: validateFolder,
      statics: {
        calculateWindowHeight: calculateWindowHeight$static,
        getFormattedTargetFolder: getFormattedTargetFolder$static
      },
      requires: [
        "Ext",
        "Ext.form.field.Text",
        "Ext.view.View",
        "com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.util.PathFormatter",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ThumbnailImage"
      ]
    };
});
