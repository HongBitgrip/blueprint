Ext.define("com.coremedia.cms.editor.sdk.actions.MoveDialogActionBase", function(MoveDialogActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import ext.window.Window;

/**
 * The MoveDialogAction is subclassing MoveAction to applying changes to dialogs.
 * It allows to change the size and position of the dialog passed to the config object of the action.
 * /
[PublicApi]
public class MoveDialogActionBase extends MoveAction {
  public static const OFFSET:int = 10;

  private var action:String;
  private var dialog:Window;
  
  public*/ function MoveDialogActionBase$(config/*:MoveDialogAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"handleAction$Alnh"));
    this.action$Alnh = AS3.getBindable(config,"command");
    this.dialog$Alnh = AS3.getBindable(config,"dialog");
    if(!this.dialog$Alnh) {
      throw new AS3.Error("MoveDialogAction must be added to an instance of ext.Window");
    }
    this.super$Alnh(config);
  }/*

  private*/ function handleAction()/*:Boolean*/ {
    if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.INCREASE) {
      return this.updateWindowSize$Alnh(MoveDialogActionBase.OFFSET);
    }
    else if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.DECREASE) {
      return this.updateWindowSize$Alnh(-MoveDialogActionBase.OFFSET);
    }
    else if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.RIGHT) {
      return this.moveBy$Alnh(MoveDialogActionBase.OFFSET, 0);
    }
    else if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.LEFT) {
      return this.moveBy$Alnh(-MoveDialogActionBase.OFFSET, 0);
    }
    else if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.UP) {
      return this.moveBy$Alnh(0, -MoveDialogActionBase.OFFSET);
    }
    else if (this.action$Alnh === com.coremedia.cms.editor.sdk.actions.MoveAction.DOWN) {
      return this.moveBy$Alnh(0, MoveDialogActionBase.OFFSET);
    }
    return false;
  }/*

  /**
   * Moves the collection view window by the given pixel sizes.
   * /
  private*/ function moveBy(x/*:Number*/, y/*:Number*/)/*:Boolean*/ {
    var positionX/*:Number*/ = this.dialog$Alnh.getPosition()[0];
    var positionY/*:Number*/ = this.dialog$Alnh.getPosition()[1];
    positionX += x;
    positionY += y;
    this.dialog$Alnh.setPagePosition(positionX, positionY, false);
    return true;
  }/*

  /**
   * Updates the window size if the window is resizeable.
   * /
  private*/ function updateWindowSize(delta/*:int*/)/*:Boolean*/ {
    if(this.dialog$Alnh.resizable) {
      this.dialog$Alnh.setSize(this.dialog$Alnh.getWidth() + delta, this.dialog$Alnh.getHeight() + delta);
      this.moveBy$Alnh(delta/2*-1, delta/2*-1);
      return true;
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.MoveAction",
      metadata: {"": ["PublicApi"]},
      action$Alnh: null,
      dialog$Alnh: null,
      constructor: MoveDialogActionBase$,
      super$Alnh: function() {
        com.coremedia.cms.editor.sdk.actions.MoveAction.prototype.constructor.apply(this, arguments);
      },
      handleAction$Alnh: handleAction,
      moveBy$Alnh: moveBy,
      updateWindowSize$Alnh: updateWindowSize,
      statics: {OFFSET: 10},
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.actions.MoveAction"
      ]
    };
});
