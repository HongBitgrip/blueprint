Ext.define("com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase", function(FlipImageActionBase) {/*package com.coremedia.cms.studio.imageeditor.actions {

import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class FlipImageActionBase extends AdjustCropsAction {

  private var flipDirection:String;
  private var undoHistory:UndoHistory;

  private const BUNDLE:Object =*/function BUNDLE_(){this.BUNDLE$4S8X=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content);}/*;
  public static const FLIP_HORIZONTALLY:String = "h";
  public static const FLIP_VERTICALLY:String = "v";

  public*/ function FlipImageActionBase$(config/*:FlipImageAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$4S8X(AS3.cast(com.coremedia.cms.studio.imageeditor.actions.FlipImageAction,Ext.apply(config, {handler:AS3.bind( this,"flipImage$4S8X")})));BUNDLE_.call(this);;

    this.flipDirection$4S8X = AS3.getBindable(config,"flipDirection");
    this.undoHistory$4S8X = AS3.getBindable(config,"undoHistory");
    AS3.setBindable(this,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
  }/*

  private*/ function flipImage()/*:void*/ {
    if (this.flipDirection$4S8X === FlipImageActionBase.FLIP_HORIZONTALLY) {
      this.undoHistory$4S8X.createImmediateCommand(this.BUNDLE$4S8X.IEC_history_reflect_h,AS3.bind( this,"flipImageHorizontally$4S8X"));
    } else if (this.flipDirection$4S8X === FlipImageActionBase.FLIP_VERTICALLY) {
      this.undoHistory$4S8X.createImmediateCommand(this.BUNDLE$4S8X.IEC_history_reflect_v,AS3.bind( this,"flipImageVertically$4S8X"));
    }
  }/*

  private*/ function flipImageHorizontally()/*:void*/ {
    this.flip$4S8X(true);
  }/*

  private*/ function flipImageVertically()/*:void*/ {
    this.flip$4S8X(false);
  }/*

  private*/ function flip(horizontally/*:Boolean*/)/*:void*/ {
    var orientation/*:int*/ = AS3.getBindable(this,"imageEditorViewModel").get("orientation");
    var rotated/*:Boolean*/ = Math.abs(orientation % 180) === 90;

    if (horizontally === rotated) {
      var flipVertically/*:Boolean*/ = AS3.getBindable(this,"imageEditorViewModel").get("flipVertically");
      AS3.getBindable(this,"imageEditorViewModel").set("flipVertically", !flipVertically);
    } else {
      var flipHorizontally/*:Boolean*/ = AS3.getBindable(this,"imageEditorViewModel").get("flipHorizontally");
      AS3.getBindable(this,"imageEditorViewModel").set("flipHorizontally", !flipHorizontally);
    }

    if (horizontally) {
      this.adjustCrops(flipCropsHorizontally$static);
    } else {
      this.adjustCrops(flipCropsVertically$static);
    }
  }/*

  private static*/ function flipCropsVertically$static(crop/*:Object*/)/*:Rectangle*/ {
    var y1/*:Number*/ = 1 - (crop.y + crop.height);
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(crop.x, y1, crop.width, crop.height);
  }/*

  private static*/ function flipCropsHorizontally$static(crop/*:Object*/)/*:Rectangle*/ {
    var x1/*:Number*/ = 1 - (crop.x + crop.width);
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(x1, crop.y, crop.width, crop.height);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction",
      flipDirection$4S8X: null,
      undoHistory$4S8X: null,
      constructor: FlipImageActionBase$,
      super$4S8X: function() {
        com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction.prototype.constructor.apply(this, arguments);
      },
      flipImage$4S8X: flipImage,
      flipImageHorizontally$4S8X: flipImageHorizontally,
      flipImageVertically$4S8X: flipImageVertically,
      flip$4S8X: flip,
      statics: {
        FLIP_HORIZONTALLY: "h",
        FLIP_VERTICALLY: "v"
      },
      requires: [
        "Ext",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.actions.FlipImageAction",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle"
      ]
    };
});
