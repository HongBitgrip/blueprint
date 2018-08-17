Ext.define("com.coremedia.cms.editor.sdk.actions.MoveAction", function(MoveAction) {/*package com.coremedia.cms.editor.sdk.actions {

import ext.Action;

[PublicApi]
public class MoveAction extends Action {
  public static const UP:String = "moveUp";
  public static const DOWN:String = "moveDown";
  public static const LEFT:String = "moveLeft";
  public static const RIGHT:String = "moveRight";
  public static const INCREASE:String = "increase";
  public static const DECREASE:String = "decrease";

  /**
   * @param config the config object
   * /
  public*/ function MoveAction$(config/*:MoveAction = null*/) {if(arguments.length<=0)config=null;
    this.super$8r0I(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      constructor: MoveAction$,
      super$8r0I: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      statics: {
        UP: "moveUp",
        DOWN: "moveDown",
        LEFT: "moveLeft",
        RIGHT: "moveRight",
        INCREASE: "increase",
        DECREASE: "decrease"
      },
      requires: ["Ext.Action"]
    };
});
