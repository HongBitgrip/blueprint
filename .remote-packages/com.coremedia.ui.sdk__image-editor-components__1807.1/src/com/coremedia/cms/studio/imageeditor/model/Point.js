Ext.define("com.coremedia.cms.studio.imageeditor.model.Point", function(Point) {/*package com.coremedia.cms.studio.imageeditor.model {
import com.coremedia.ui.util.WithEquals;

public class Point implements WithEquals {

  public*/ function Point$(x/*:Number*/, y/*:Number*/) {
    this['x'] = x;
    this['y'] = y;
  }/*

  public native function get x():Number;

  public native function get y():Number;

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:Point*/ =AS3.as( o,  Point);
    if (!that) {
      return false;
    }
    return this.x === that.x && this.y === that.y;
  }/*

  public*/ function move(dx/*:Number*/, dy/*:Number*/)/*:Point*/ {
    return new Point(this.x + dx, this.y + dy);
  }/*

  public*/ function round()/*:Point*/ {
    return new Point(Math.round(this.x), Math.round(this.y));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      constructor: Point$,
      equals: equals,
      move: move,
      round: round,
      requires: ["com.coremedia.ui.util.WithEquals"]
    };
});
