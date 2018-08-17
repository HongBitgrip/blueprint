Ext.define("com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowActionBase", function(OpenCreateFromPicturesWindowActionBase) {/*package com.coremedia.blueprint.base.components.pictures {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.ContentAction;

import ext.ComponentManager;
import ext.Ext;

import mx.resources.ResourceManager;

/**
 * Action for opening a 'create-new-document' wizard based on the currently selected pictures.
 * The actions is only enabled if there is a non-empty selection of images.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery')]
public class OpenCreateFromPicturesWindowActionBase extends ContentAction {

  private var multiSelect:Boolean;
  private var windowConfig:Object;

  public*/ function OpenCreateFromPicturesWindowActionBase$(config/*:OpenCreateFromPicturesWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.multiSelect$FoLf = AS3.getBindable(config,"multiSelect");
    this.windowConfig$FoLf = AS3.getBindable(config,"windowConfig");
    this.super$FoLf(AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentAction,Ext.apply({}, config, {handler:AS3.bind( this,"showWindow$FoLf")})));
  }/*

  /**
   * Displays the window.
   * /
  private*/ function showWindow()/*:void*/ {
    Ext.ComponentManager.create(Ext.apply({}, this.windowConfig$FoLf, {selectedPictures : this.getContents()})).show();
  }/*

  override protected*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    if (!this.multiSelect$FoLf && contents.length > 1) {
      return true;
    }
    if (this.multiSelect$FoLf && contents.length == 1) {
      return true;
    }
    return contents.some(function(content/*:Content*/)/*:Boolean*/ {
      return !content.getState().readable || !content.isDocument() ||
             !content.getType() ||
             !content.getType().isSubtypeOf(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery', 'image_gallery_action_content_type'));
    });
  }/*
  
  override protected*/ function calculateHidden()/*:Boolean*/ {
    /*
    * Make sure the content is not a repository tree folder
     */
    if (!this.getContents() || this.getContents().length == 0) {
      return true;
    }
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateHidden.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      multiSelect$FoLf: false,
      windowConfig$FoLf: null,
      constructor: OpenCreateFromPicturesWindowActionBase$,
      super$FoLf: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      showWindow$FoLf: showWindow,
      isHiddenFor: isHiddenFor,
      calculateHidden: calculateHidden,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "mx.resources.ResourceManager"
      ]
    };
});
