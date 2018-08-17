Ext.define("com.coremedia.cms.studio.imageeditor.model.Rectangle", function(Rectangle) {/*package com.coremedia.cms.studio.imageeditor.model {
import com.coremedia.ui.util.WithEquals;

public class Rectangle implements WithEquals {
  public*/ function Rectangle$(x/*:Number*/, y/*:Number*/, width/*:Number*/, height/*:Number*/) {
    this['x'] = x;
    this['y'] = y;
    this['width'] = width;
    this['height'] = height;
  }/*

  public native function get x():Number;

  public native function get y():Number;

  public native function get width():Number;

  public native function get height():Number;

  public*/ function  get$left()/*:Number*/ {
    return this.x;
  }/*

  public*/ function  get$right()/*:Number*/ {
    return this.x + this.width;
  }/*

  public*/ function  get$top()/*:Number*/ {
    return this.y;
  }/*

  public*/ function  get$bottom()/*:Number*/ {
    return this.y + this.height;
  }/*

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:Rectangle*/ =AS3.as( o,  Rectangle);
    if (!that) {
      return false;
    }
    return this.x === that.x && this.y === that.y && this.width === that.width && this.height === that.height;
  }/*

  public*/ function scale(widthFactor/*:Number*/, heightFactor/*:Number*/)/*:Rectangle*/ {
    var scaledWidth/*:Number*/ = preciseToOne$static(this.width * widthFactor);
    var scaledHeight/*:Number*/ = preciseToOne$static(this.height * heightFactor);
    var scaledX/*:Number*/ = preciseToOne$static(this.x * widthFactor);
    var scaledY/*:Number*/ = preciseToOne$static(this.y * heightFactor);
    return new Rectangle(scaledX, scaledY, scaledWidth, scaledHeight);
  }/*

  public*/ function round()/*:Rectangle*/ {
    return new Rectangle(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height));
  }/*

  public*/ function constrain(preserveRatio/*:Number = NaN*/)/*:Rectangle*/ {if(arguments.length<=0)preserveRatio=NaN;
    var constrainedX/*:Number*/;
    var constrainedY/*:Number*/;
    var constrainedWidth/*:Number*/;
    var constrainedHeight/*:Number*/;
    if(preserveRatio === undefined){
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
    if (!isNaN(preserveRatio)) {
      if (this.width > 1 || this.height > 1) {
        var normalizeScale/*:Number*/ = Math.max(this.width, this.height);
        constrainedWidth = this.width / normalizeScale;
        constrainedHeight = this.height / normalizeScale;
      } else {
        constrainedWidth = this.width;
        constrainedHeight = this.height;
      }
      // make sure the "maximized" side stays as-is and the other side is computed:
      if (this.x + this.width >= 1 - 1e-8 && constrainedWidth / preserveRatio <= 1) {
        constrainedHeight = constrainedWidth / preserveRatio;
      } else {
        constrainedWidth = constrainedHeight * preserveRatio;
      }
      constrainedX = Math.max(Math.min(this.x, 1 - constrainedWidth), 0);
      constrainedY = Math.max(Math.min(this.y, 1 - constrainedHeight), 0);
    } else {
      constrainedX = constrainNumber$static(this.x);
      constrainedY = constrainNumber$static(this.y);
      constrainedWidth = constrainNumber$static(this.x + this.width) - constrainedX;
      constrainedHeight = constrainNumber$static(this.y + this.height) - constrainedY;
    }
    return new Rectangle(constrainedX, constrainedY, constrainedWidth, constrainedHeight);
  }/*

  private static*/ function constrainNumber$static(number/*:Number*/)/*:Number*/ {
    //sometimes x * (1/x) = 0.9999999999 :(
    number = preciseToOne$static(number);
    return number < 0 ? 0 : number > 1 ? 1 : number;
  }/*

  private static*/ function preciseToOne$static(number/*:Number*/)/*:Number*/ {
    if (Number(number.toPrecision(12)) === 1) {
      return 1;
    }
    return number;
  }/*

  public*/ function isUnitSquare()/*:Boolean*/ {
    return this.x === 0 && this.y === 0 &&
            this.width === 1 && this.height === 1;
  }/*

  public static*/ function getUnitSquare$static()/*:Rectangle*/ {
    return new Rectangle(0, 0, 1, 1);
  }/*

  public*/ function grow(by/*:Number*/)/*:Rectangle*/ {
    return new Rectangle(this.x - by, this.y - by, this.width + 2 * by, this.height + 2 * by);
  }/*

  public*/ function containsPoint(testX/*:Number*/, testY/*:Number*/)/*:Boolean*/ {
    return (testX >= this.x && testX < this.x + this.width) &&
            (testY >= this.y && testY < this.y + this.height);
  }/*

  public static*/ function fromBox$static(box/*:Object*/)/*:Rectangle*/ {
    return new Rectangle(box.x, box.y, box.width, box.height);
  }/*

  public*/ function hasAllValues()/*:Boolean*/ {
    return !isNaN(this.x) && !isNaN(this.y) && !isNaN(this.width) && !isNaN(this.height);
  }/*

  public*/ function move(dx/*:Number*/, dy/*:Number*/)/*:Rectangle*/ {
    return new Rectangle(this.x + dx, this.y + dy, this.width, this.height);
  }/*

  /**
   * Map this rectangle (relative coordinates to oldBounds) from old to new bounds, possibly cutting down the area to fit
   * the new bounds. Assume the bounds are centered w/ respect to each other.
   * If aspectRatio is given and not NaN, the aspect ratio is preserved when cutting this rectangle down.
   * /
  public*/ function adjust(oldBounds/*:ImageDimensions*/, newBounds/*:ImageDimensions*/, aspectRatio/*:Number*/)/*:Rectangle*/ {
    var oldWidth/*:Number*/ = oldBounds.width;
    var oldHeight/*:Number*/ = oldBounds.height;
    var newWidth/*:Number*/ = newBounds.width;
    var newHeight/*:Number*/ = newBounds.height;

    var oldRect/*:Rectangle*/ = this.scale(oldWidth, oldHeight);
    var diffX/*:Number*/ = (newWidth - oldWidth) / 2;
    var diffY/*:Number*/ = (newHeight - oldHeight) / 2;
    var newRect/*:Rectangle*/ = new Rectangle(
            oldRect.x + diffX,
            oldRect.y + diffY,
            oldRect.width, oldRect.height);

    var newCrop/*:Rectangle*/ = newRect.scale(1 / newWidth, 1 / newHeight);
    var cropRatio/*:Number*/ = aspectRatio ? aspectRatio / (newWidth / newHeight) : Number.NaN;
    newCrop = newCrop.constrain(cropRatio);
    return newCrop;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      constructor: Rectangle$,
      equals: equals,
      scale: scale,
      round: round,
      constrain: constrain,
      isUnitSquare: isUnitSquare,
      grow: grow,
      containsPoint: containsPoint,
      hasAllValues: hasAllValues,
      move: move,
      adjust: adjust,
      statics: {
        getUnitSquare: getUnitSquare$static,
        fromBox: fromBox$static
      },
      __accessors__: {
        left: {get: get$left},
        right: {get: get$right},
        top: {get: get$top},
        bottom: {get: get$bottom}
      },
      requires: ["com.coremedia.ui.util.WithEquals"]
    };
});
