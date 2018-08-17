Ext.define("com.coremedia.cms.studio.imageeditor.FocusAreaImageAreaBase", function(FocusAreaImageAreaBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class FocusAreaImageAreaBase extends ImageArea {

  private var focusAreaValueExpression:ValueExpression;

  public*/ function FocusAreaImageAreaBase$(config/*:FocusAreaImageArea = null*/) {if(arguments.length<=0)config=null;
    this.super$KqJt(config);
  }/*

  internal*/ function addChangeListener(listener/*:Function*/)/*:void*/ {
    this.getFocusAreaValueExpression().addChangeListener(listener);
  }/*

  /**
   * Get bounds of this ImageArea - here the bounds of the focus area
   * @param config
   * @return ValueExpression
   * /
  override internal*/ function getBoundsValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    return this.getFocusAreaValueExpression(config);
  }/*

  internal*/ function getFocusAreaValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    if (!this.focusAreaValueExpression$KqJt) {
      this.focusAreaValueExpression$KqJt = com.coremedia.ui.data.ValueExpressionFactory.create("focusArea", (config || this).imageEditorViewModel);
    }
    return this.focusAreaValueExpression$KqJt;
  }/*

  /**
   * Get <b style="color:blue">x</b> value of <b>focus area</b> [in pixel] based upon screen bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                  |
   *   |        <b style="color:blue">x</b>---focusArea    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  internal*/ function getLeftX()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">x</b> value of <b>focus area</b> [in pixel] based upon screen bounds:
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
  internal*/ function getCenterX()/*:Number*/ {
    return this.getLeftX() + this.getMyWidth() / 2;
  }/*

  /**
   * Get <b style="color:blue">y</b> value of <b>focus area</b> [in pixel] based upon screen bounds:
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
  internal*/ function getCenterY()/*:Number*/ {
    return this.getUpperY() + this.getMyHeight() / 2;
  }/*

  internal*/ function getMyWidth()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getWidth(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">right x</b> value of <b>focus area</b> [in pixel] based upon screen bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                  |
   *   |        focusArea---<b style="color:blue">x</b>    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  internal*/ function getRightX()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getValueOfRightX(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">Y</b> value of <b>focus area</b> [in pixel] based upon screen bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                  |
   *   |        <b style="color:blue">y</b> -focusArea     |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  internal*/ function getUpperY()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  internal*/ function getMyHeight()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getHeight(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*

  /**
   * Get <b style="color:blue">lower y</b> value of <b>focus area</b> [in pixel] based upon adjusted image bounds:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | screen                  |
   *   |        focusArea---     |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        <b style="color:blue">y</b>-----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @return Number
   * /
  internal*/ function getLowerY()/*:Number*/ {
    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getLowerY(this.getPercentageRectangle(), this.getAdjustedImageBounds());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageArea",
      focusAreaValueExpression$KqJt: null,
      constructor: FocusAreaImageAreaBase$,
      super$KqJt: function() {
        com.coremedia.cms.studio.imageeditor.ImageArea.prototype.constructor.apply(this, arguments);
      },
      addChangeListener: addChangeListener,
      getBoundsValueExpression: getBoundsValueExpression,
      getFocusAreaValueExpression: getFocusAreaValueExpression,
      getLeftX: getLeftX,
      getCenterX: getCenterX,
      getCenterY: getCenterY,
      getMyWidth: getMyWidth,
      getRightX: getRightX,
      getUpperY: getUpperY,
      getMyHeight: getMyHeight,
      getLowerY: getLowerY,
      requires: [
        "com.coremedia.cms.studio.imageeditor.ImageArea",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil"]
    };
});
