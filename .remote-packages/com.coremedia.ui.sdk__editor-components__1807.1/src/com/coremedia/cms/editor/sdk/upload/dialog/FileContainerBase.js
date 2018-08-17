Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase", function(FileContainerBase) {/*package com.coremedia.cms.editor.sdk.upload.dialog {
import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.mixins.OverflowBehaviour;
import com.coremedia.ui.mixins.TextAlign;
import com.coremedia.ui.skins.IconDisplayFieldSkin;

import ext.Ext;
import ext.container.Container;
import ext.dom.Element;
import ext.layout.container.CenterLayout;

import mx.resources.ResourceManager;

/**
 * The file container wraps the preview information for each
 * upload, including the name and mime type of the uploading document.
 * /
public class FileContainerBase extends Container {

  /**
   * Preview container for images and and documents without preview but text
   * /
  protected static const PREVIEW_WIDTH:int = 90;
  protected static const PREVIEW_HEIGHT:int = 70;
  protected static const PREVIEW_CONTAINER_BORDER_WIDTH:int = 2;
  protected static const STANDARD_GRID_100:int = 6;


  private var fileWrapper:FileWrapper;

  [Bindable]
  public var removeFileHandler:Function;

  [Bindable]
  public var settings:UploadSettings;

  public*/ function FileContainerBase$(config/*:FileContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$aHWZ(config);
    AS3.setBindable(this,"removeFileHandler" , AS3.getBindable(config,"removeFileHandler"));
    this.fileWrapper$aHWZ = AS3.getBindable(config,"file");
    this.addListener('afterlayout',AS3.bind( this,"layoutPanel$aHWZ"));
  }/*

  /**
   * Returns the file wrapper used for this panel.
   * Getter is used for the global validation.
   * @return
   * /
  public*/ function getFileWrapper()/*:FileWrapper*/ {
    return this.fileWrapper$aHWZ;
  }/*

  /**
   * Layout preview after render
   * /
  private*/ function layoutPanel()/*:void*/ {var this$=this;
    this.removeListener('afterlayout',AS3.bind( this,"layoutPanel$aHWZ"));

    var previewFileSizeBytes/*:Number*/ = com.coremedia.cms.editor.sdk.upload.UploadSettings.DEFAULT_PREVIEW_MAX_FILE_SIZE_MB * 1048576;
    if (AS3.getBindable(this,"settings")) {
      previewFileSizeBytes = AS3.getBindable(this,"settings").getMaxPreviewFileSizeBytes();
    }

    if ((AS3.getBindable(this,"settings") && AS3.getBindable(this,"settings").isPreviewDisabled()) || this.getFileWrapper().getSize() > previewFileSizeBytes) {
      this.setEmptyPreview$aHWZ();
      return;
    }

    var previewContainer/*:Container*/ =AS3.as( this.queryById('preview'),  Ext.container.Container);
    previewContainer.setDisabled(true);
    this.appendPreviewElement$aHWZ(function ()/*:void*/ {
      previewContainer.setDisabled(!this$.isVisible(true));
    });
  }/*


  /**
   * Appends an image tag that contains the preview image.
   * @param callback The callback to call after the image preview has been set up.
   * /
  private*/ function appendPreviewElement(callback/*:Function*/)/*:void*/ {var this$=this;
    var reader/*:**/ = new window.FileReader();
    reader.onload = (function ()/*:Function*/ {
      return function (e/*:**/)/*:void*/ {
        var previewable/*:Boolean*/ = this$.appendPreviewImage$aHWZ(e, callback);
        if (!previewable) {
          this$.setEmptyPreview$aHWZ();
          callback.call(null);
        }
      };
    })();

    reader.readAsDataURL(this.getFileWrapper().getFile());
  }/*

  /**
   * Uses the browsers file API to create an image preview
   * if the given file type is supported
   * @param e the drop event
   * @param callback the callback to call when finished
   * @return true if the preview image was generated
   * /
  private*/ function appendPreviewImage(e/*:**/, callback/*:Function*/)/*:Boolean*/ {
    if (!e.target || !e.target.result || e.target.result.indexOf('data:image') === -1) {
      return false;
    }

    var imgPath/*:String*/ = this.getFileWrapper().getFile()['name'];
    if (imgPath.lastIndexOf('.') === -1) {
      return false;
    }

    var extn/*:String*/ = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
    if (extn !== "gif" && extn !== "png" && extn !== "jpg" && extn !== "jpeg") {
      return false;
    }

    try {
      var previewContainer/*:Container*/ =AS3.as( this.queryById('preview'),  Ext.container.Container);

      var image/*:Image*/ = Ext.create(com.coremedia.ui.components.Image, {});
      image.setSrc(e.target.result);
      image.setStyle("max-height:" + (FileContainerBase.PREVIEW_HEIGHT - FileContainerBase.PREVIEW_CONTAINER_BORDER_WIDTH) + "px; max-width:" + (FileContainerBase.PREVIEW_WIDTH - FileContainerBase.PREVIEW_CONTAINER_BORDER_WIDTH) + "px;");
      previewContainer.add(image);
      var imgEl/*:Element*/ = image.getEl();
      var layout/*:CenterLayout*/ = AS3.cast(Ext.layout.container.Center,previewContainer.getLayout());
      previewContainer.updateLayout();
      callback.call(null);
      return true;
    }
    catch (error/*:**/) {
      com.coremedia.ui.logging.Logger.error('Failed to create preview: ' + error);
    }
  }/*

  /**
   * The UI for non-previewable upload items
   * /
  private*/ function setEmptyPreview()/*:void*/ {
    var previewContainer/*:Container*/ =AS3.as( this.queryById('preview'),  Ext.container.Container);
    var text/*:IconDisplayField*/ = Ext.create(com.coremedia.ui.components.IconDisplayField, {});
    AS3.setBindable(text,"value" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_mimetype_text'));
    text.ui = com.coremedia.ui.skins.IconDisplayFieldSkin.EMBEDDED.getSkin();
    AS3.setBindable(text,"maxWidth" , FileContainerBase.PREVIEW_WIDTH - (FileContainerBase.STANDARD_GRID_100 * 2));
    AS3.setBindable(text,"textAlign" , com.coremedia.ui.mixins.TextAlign.CENTER);
    AS3.setBindable(text,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(text,"scale" , "medium");
    text.setFieldStyle("padding-top: 0");
    previewContainer.add(text);
    previewContainer.updateLayout();
  }/*

  protected*/ function callRemoveHandler()/*:void*/ {
    AS3.getBindable(this,"removeFileHandler")(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      fileWrapper$aHWZ: null,
      constructor: FileContainerBase$,
      super$aHWZ: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getFileWrapper: getFileWrapper,
      layoutPanel$aHWZ: layoutPanel,
      appendPreviewElement$aHWZ: appendPreviewElement,
      appendPreviewImage$aHWZ: appendPreviewImage,
      setEmptyPreview$aHWZ: setEmptyPreview,
      callRemoveHandler: callRemoveHandler,
      config: {
        removeFileHandler: null,
        settings: null
      },
      statics: {
        PREVIEW_WIDTH: 90,
        PREVIEW_HEIGHT: 70,
        PREVIEW_CONTAINER_BORDER_WIDTH: 2,
        STANDARD_GRID_100: 6
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.layout.container.Center",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.mixins.TextAlign",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.upload.UploadSettings"]
    };
});
