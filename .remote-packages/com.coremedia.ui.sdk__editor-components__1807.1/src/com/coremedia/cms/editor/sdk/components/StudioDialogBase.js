Ext.define("com.coremedia.cms.editor.sdk.components.StudioDialogBase", function(StudioDialogBase) {/*package com.coremedia.cms.editor.sdk.components {

import ext.window.Window;

/**
 * Common superclass for dialogs to allow auto positioning.
 * /
public class StudioDialogBase extends Window {


  public*/ function StudioDialogBase$(config/*:StudioDialogBase = null*/) {if(arguments.length<=0)config=null;
    if(!config.stateEvents) {
      config.stateEvents = [];
    }
    config.stateEvents = config.stateEvents.concat('move');
    this.super$Oihj(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.window.Window",
      constructor: StudioDialogBase$,
      super$Oihj: function() {
        Ext.window.Window.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.window.Window"]
    };
});
