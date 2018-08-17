Ext.define("com.coremedia.cms.studio.imageeditor.FocusPointImageAreaBase", function(FocusPointImageAreaBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class FocusPointImageAreaBase extends ImageArea {

  private var radius:int;
  private var focusPointValueExpression:ValueExpression;

  public*/ function FocusPointImageAreaBase$(config/*:FocusPointImageArea = null*/) {if(arguments.length<=0)config=null;
    this.super$7omU(config);
    this.showResizeHandles = false;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.studio.imageeditor.ImageArea.prototype.afterRender.call(this);
    this.getImageEditorStage().getFocusArea().addChangeListener(AS3.bind(this,"updateFocusPoint$7omU"));
    this.activate();
  }/*

  protected*/ function getFocusPointValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    if (!this.focusPointValueExpression$7omU) {
      this.focusPointValueExpression$7omU = com.coremedia.ui.data.ValueExpressionFactory.create("focusPoint", (config || this).imageEditorViewModel);
    }
    return this.focusPointValueExpression$7omU;
  }/*

  internal*/ function getRadius()/*:int*/ {
    if (!this.radius$7omU) {
      this.radius$7omU = this.rendered ? this.outerImageArea.getWidth() / 2 : undefined;
    }
    return this.radius$7omU;
  }/*

  private*/ function getMinimumX()/*:Number*/ {
    return this.getImageEditorStage().getFocusArea().getLeftX() - this.getRadius();
  }/*

  private*/ function getMinimumY()/*:Number*/ {
    return this.getImageEditorStage().getFocusArea().getUpperY() - this.getRadius();
  }/*

  private*/ function getMaximumRightX()/*:Number*/ {
    return this.getImageEditorStage().getFocusArea().getRightX() - this.getRadius();
  }/*

  private*/ function getMaximumLowerY()/*:Number*/ {
    return this.getImageEditorStage().getFocusArea().getLowerY() - this.getRadius();
  }/*

  /**
   * Update new coordinates of focus point based upon imageEditorStage bounds and focus area coordinates
   * /
  private*/ function updateFocusPoint()/*:void*/ {
    var imageEditorStageBounds/*:Rectangle*/ = AS3.getBindable(this,"imageEditorStageBoundsValueExpression").getValue();
    var focusAreaRectangle/*:Rectangle*/ = this.getImageEditorStage().getFocusArea().getPercentageRectangle();
    var focusPointRectangle/*:Rectangle*/ = this.getPercentageRectangle();

    // do nothing if focus has not changed
    if (!imageEditorStageBounds || !focusAreaRectangle || !focusPointRectangle || focusPointRectangle.isUnitSquare()) {
      return;
    }

    // calculate new coordinates for focus point
    var newFocusPointX/*:Number*/ = Math.max(this.getCenterX() - this.getRadius(), this.getMinimumX$7omU());
    var newFocusPointY/*:Number*/ = Math.max(this.getCenterY() - this.getRadius(), this.getMinimumY$7omU());
    newFocusPointX = Math.min(newFocusPointX, this.getMaximumRightX$7omU());
    newFocusPointY = Math.min(newFocusPointY, this.getMaximumLowerY$7omU());

    var diameter/*:int*/ = this.getRadius() * 2;
    var focusPoint/*:Rectangle*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getPercentageRectangle(
            new com.coremedia.cms.studio.imageeditor.model.Rectangle(
                    newFocusPointX, newFocusPointY,
                    diameter, diameter
            ),
            this.getAdjustedImageBounds());

    this.getFocusPointValueExpression().setValue(focusPoint);
  }/*

  override protected*/ function computeRectangle(imageAreaBoundsVE/*:ValueExpression*/, imageEditorStageBoundsVE/*:ValueExpression*/)/*:Rectangle*/ {
    var imageEditorStageBounds/*:Rectangle*/ = imageEditorStageBoundsVE.getValue();
    if (!imageEditorStageBounds) {
      return undefined;
    }

    var focusPointCenterX/*:Number*/ = this.getCenterX();
    var focusPointCenterY/*:Number*/ = this.getCenterY();

    if (this.getPercentageRectangle().isUnitSquare()) {
      var focusArea/*:FocusAreaImageArea*/ = this.getImageEditorStage().getFocusArea();
      // center focus point to middle of focus area
      focusPointCenterX = focusArea.getCenterX();
      focusPointCenterY = focusArea.getCenterY();
    }

    var diameter/*:int*/ = this.getRadius() * 2;
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(focusPointCenterX - this.getRadius(), focusPointCenterY - this.getRadius(), diameter, diameter);
  }/*

  // Return undefined, to avoid resetting the X and Y value of the focus point to 0 when calling: ImageAreaBase#imageAreaChanged()
  override internal*/ function getCropRatio()/*:Number*/ {
    return undefined;
  }/*

  override protected*/ function updateDimensions()/*:void*/ {
    if (this.activeHandle === com.coremedia.cms.studio.imageeditor.ImageAreaBase.HANDLE_CENTER) {
      try {
        var offset/*:Array*/ = this.theResizable.getOffset(null);
        var diffX/*:Number*/ = offset[0];
        var diffY/*:Number*/ = offset[1];

        var ownerBox/*:Object*/ = this.ownerCt.getBox();
        var focusArea/*:FocusAreaImageArea*/ = this.getImageEditorStage().getFocusArea();
        var diameter/*:int*/ = this.getRadius() * 2;
        var extendedFocusArea/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(
                this.getMinimumX$7omU(), this.getMinimumY$7omU(),
                focusArea.getMyWidth() + diameter,
                focusArea.getMyHeight() + diameter);
        var adjustedFocusArea/*:Rectangle*/ = extendedFocusArea.move(ownerBox.x, ownerBox.y);
        diffX = Math.max(Math.min(diffX, adjustedFocusArea.right - this.start.right), adjustedFocusArea.left - this.start.left);
        diffY = Math.max(Math.min(diffY, adjustedFocusArea.bottom - this.start.bottom), adjustedFocusArea.top - this.start.top);
        this.setXY([this.start.x + diffX, this.start.y + diffY]);
      } catch (ex/*:**/) {
      }
    }
  }/*

  override public*/ function deactivate()/*:void*/ {
  }/*

  /**
   * Get bounds of this ImageArea - here the bounds of the focus point
   * @param config
   * @return ValueExpression
   * /
  override internal*/ function getBoundsValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    return this.getFocusPointValueExpression();
  }/*

  override internal*/ function getUndoText()/*:String*/ {
    return this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_history_crops_changed_focus_point');
  }/*

  internal*/ function getMyWidth()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getWidth(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">x</b> value of <b>focus point</b> [in pixel] based upon screen bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                   |
   *   |         ---focusArea-    |
   *   |        |     -fP--   |   |
   *   |        |    |  <b style="color:blue">x</b>  |  |   |
   *   |        |     -----   |   |
   *   |         -------------    |
   *   |                          |
   *   |--------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  protected*/ function getCenterX()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(this.getPercentageRectangle(), this.getAdjustedImageBounds()) + this.getMyWidth() / 2;
  }/*

  internal*/ function getMyHeight()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getHeight(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">y</b> value of <b>focus point</b> [in pixel] based upon screen bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                   |
   *   |         ---focusArea-    |
   *   |        |     -fP--   |   |
   *   |        |    |  <b style="color:blue">y</b>  |  |   |
   *   |        |     -----   |   |
   *   |         -------------    |
   *   |                          |
   *   |--------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  protected*/ function getCenterY()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(this.getPercentageRectangle(), this.getAdjustedImageBounds()) + this.getMyHeight() / 2;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageArea",
      radius$7omU: 0,
      focusPointValueExpression$7omU: null,
      constructor: FocusPointImageAreaBase$,
      super$7omU: function() {
        com.coremedia.cms.studio.imageeditor.ImageArea.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getFocusPointValueExpression: getFocusPointValueExpression,
      getRadius: getRadius,
      getMinimumX$7omU: getMinimumX,
      getMinimumY$7omU: getMinimumY,
      getMaximumRightX$7omU: getMaximumRightX,
      getMaximumLowerY$7omU: getMaximumLowerY,
      updateFocusPoint$7omU: updateFocusPoint,
      computeRectangle: computeRectangle,
      getCropRatio: getCropRatio,
      updateDimensions: updateDimensions,
      deactivate: deactivate,
      getBoundsValueExpression: getBoundsValueExpression,
      getUndoText: getUndoText,
      getMyWidth: getMyWidth,
      getCenterX: getCenterX,
      getMyHeight: getMyHeight,
      getCenterY: getCenterY,
      requires: [
        "com.coremedia.cms.studio.imageeditor.ImageArea",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ImageAreaBase",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle",
        "com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil"
      ]
    };
});
