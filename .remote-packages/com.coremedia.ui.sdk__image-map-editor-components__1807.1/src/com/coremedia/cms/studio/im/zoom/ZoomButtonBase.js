Ext.define("com.coremedia.cms.studio.im.zoom.ZoomButtonBase", function(ZoomButtonBase) {/*package com.coremedia.cms.studio.im.zoom {
import com.coremedia.ui.components.IFrameMgr;

import ext.button.Button;

public class ZoomButtonBase extends Button {

  public*/ function ZoomButtonBase$(config/*:Button = null*/) {if(arguments.length<=0)config=null;
    this.super$DRba(config);
    this.on("menushow", com.coremedia.ui.components.IFrameMgr.getInstance().showShims, com.coremedia.ui.components.IFrameMgr.getInstance());
    this.on("menuhide", com.coremedia.ui.components.IFrameMgr.getInstance().hideShims, com.coremedia.ui.components.IFrameMgr.getInstance());
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      constructor: ZoomButtonBase$,
      super$DRba: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.ui.components.IFrameMgr"
      ]
    };
});
