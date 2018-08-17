Ext.define("com.coremedia.cms.studio.imageeditor.actions.RotateImageActionBase", function(RotateImageActionBase) {/*package com.coremedia.cms.studio.imageeditor.actions {

import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class RotateImageActionBase extends AdjustCropsAction {

  private var angle:int = 0;
  private var orientedImageDimensionsValueExpression:ValueExpression;
  private var undoHistory:UndoHistory;
  private var newOrientation:int;

  private const BUNDLE:Object =*/function BUNDLE_(){this.BUNDLE$J41p=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content);}/*;

  public*/ function RotateImageActionBase$(config/*:RotateImageAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$J41p(AS3.cast(com.coremedia.cms.studio.imageeditor.actions.RotateImageAction,Ext.apply(config, {handler:AS3.bind( this,"rotateImage$J41p")})));BUNDLE_.call(this);;

    this.angle$J41p = AS3.getBindable(config,"angle");
    AS3.setBindable(this,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    this.orientedImageDimensionsValueExpression$J41p = AS3.getBindable(config,"orientedImageDimensionsValueExpression");
    this.undoHistory$J41p = AS3.getBindable(config,"undoHistory");
  }/*

  private*/ function rotateImage()/*:Function*/ {
    var commandName/*:String*/;
    var originalOrientation/*:int*/ = AS3.getBindable(this,"imageEditorViewModel").get('orientation');
    var rotationAngle/*:int*/;

    if(this.angle$J41p === 0) {
      rotationAngle = 360 - originalOrientation;
      this.newOrientation$J41p = 0;
      commandName = this.BUNDLE$J41p.IEC_history_rotated_reset;
    } else {
      rotationAngle = this.angle$J41p;
      this.newOrientation$J41p = (originalOrientation + this.angle$J41p) % 360;
      commandName = this.BUNDLE$J41p.IEC_history_rotated_crude;
    }

    if(rotationAngle === 180) {
      this.undoHistory$J41p.createImmediateCommand(commandName,AS3.bind( this,"switchOverCenter$J41p"));
    } else if (rotationAngle === 90 || rotationAngle === -270) {
      this.undoHistory$J41p.createImmediateCommand(commandName,AS3.bind( this,"rotateImageRight$J41p"));
    } else if (rotationAngle === -90 || rotationAngle === 270) {
      this.undoHistory$J41p.createImmediateCommand(commandName,AS3.bind( this,"rotateImageLeft$J41p"));
    }
  }/*

  private*/ function switchOverCenter()/*:void*/ {
    AS3.getBindable(this,"imageEditorViewModel").set("orientation", this.newOrientation$J41p);
    this.adjustCrops(rotate180$static);
  }/*
  private*/ function rotateImageRight()/*:void*/ {
    AS3.getBindable(this,"imageEditorViewModel").set("orientation", this.newOrientation$J41p);
    this.adjustCrops(AS3.bind(this,"rotate90$J41p"));
  }/*

  private*/ function rotateImageLeft()/*:void*/ {
    AS3.getBindable(this,"imageEditorViewModel").set("orientation", this.newOrientation$J41p);
    this.adjustCrops(AS3.bind(this,"rotate270$J41p"));
  }/*

  private*/ function rotate270(crop/*:Object*/)/*:Rectangle*/ {
    return rotate180$static(this.rotate90$J41p(crop));
  }/*

  /**
   * Switch over center
   * @param crop original crop
   * @return rotated crop
   * /
  private static*/ function rotate180$static(crop/*:Object*/)/*:Rectangle*/ {
    var x1/*:Number*/ = 1 - (crop.x + crop.width);
    var y1/*:Number*/ = 1 - (crop.y + crop.height);

    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(x1, y1, crop.width, crop.height);
  }/*

  /**
   * Rotate the crop variant right
   * @param crop the original crop
   * @return the rotated crop
   * /
  private*/ function rotate90(crop/*:Object*/)/*:Rectangle*/ {

    var orientedImageDimensions/*:ImageDimensions*/ = this.orientedImageDimensionsValueExpression$J41p.getValue();

    //crop widths in pixels rather than percent
    var cropWidth/*:Number*/ = crop.width * orientedImageDimensions.height;
    var cropHeight/*:Number*/ = crop.height * orientedImageDimensions.width;

    var aspectRatio/*:Number*/ = cropWidth / cropHeight;

    //old top left position of crop in pixels
    var oldX/*:Number*/ = crop.x * orientedImageDimensions.height;
    var oldY/*:Number*/ = crop.y * orientedImageDimensions.width;

    //calculate new crop center after rotation
    var cropCenterX/*:Number*/ = orientedImageDimensions.width - (oldY + cropHeight / 2);
    var cropCenterY/*:Number*/ = oldX + cropWidth / 2;

    //new top left point of crop after rotation
    var newX/*:Number*/ = cropCenterX - (cropWidth / 2);
    var newY/*:Number*/ = cropCenterY - (cropHeight / 2);

    //new image dimensions after rotation
    //noinspection JSSuspiciousNameCombination
    var imageWidth/*:Number*/ = orientedImageDimensions.width;
    //noinspection JSSuspiciousNameCombination
    var imageHeight/*:Number*/ = orientedImageDimensions.height;

    var correctHeight/*:Function*/ = function ()/*:void*/ {
      cropHeight = cropWidth / aspectRatio;
      newY = cropCenterY - (cropHeight / 2);
    };

    var correctWidth/*:Function*/ = function ()/*:void*/ {
      cropWidth = aspectRatio * cropHeight;
      newX = cropCenterX - (cropWidth / 2);
    };

    if (newX < 0) {
      cropWidth = cropCenterX * 2;
      newX = 0;
      correctHeight();
    } else if ((cropWidth + newX) > imageWidth) {
      cropWidth = (imageWidth - cropCenterX) * 2;
      newX = imageWidth - cropWidth;
      correctHeight();
    }

    if (newY < 0) {
      cropHeight = cropCenterY * 2;
      newY = 0;
      correctWidth();
    } else if ((cropHeight + newY) > imageHeight) {
      cropHeight = (imageHeight - cropCenterY) * 2;
      newY = imageHeight - cropHeight;
      correctWidth();
    }
    //put all values back in percent
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(newX / imageWidth, newY / imageHeight, cropWidth / imageWidth, cropHeight / imageHeight);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction",
      angle$J41p: 0,
      orientedImageDimensionsValueExpression$J41p: null,
      undoHistory$J41p: null,
      newOrientation$J41p: 0,
      constructor: RotateImageActionBase$,
      super$J41p: function() {
        com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction.prototype.constructor.apply(this, arguments);
      },
      rotateImage$J41p: rotateImage,
      switchOverCenter$J41p: switchOverCenter,
      rotateImageRight$J41p: rotateImageRight,
      rotateImageLeft$J41p: rotateImageLeft,
      rotate270$J41p: rotate270,
      rotate90$J41p: rotate90,
      requires: [
        "Ext",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.actions.RotateImageAction",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle"
      ]
    };
});
