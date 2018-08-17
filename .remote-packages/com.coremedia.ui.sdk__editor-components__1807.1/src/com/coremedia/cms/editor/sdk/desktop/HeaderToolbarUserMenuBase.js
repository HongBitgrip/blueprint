Ext.define("com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase", function(HeaderToolbarUserMenuBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.common.SESSION;

import ext.menu.Menu;

public class HeaderToolbarUserMenuBase extends Menu {

  public*/ function HeaderToolbarUserMenuBase$(config/*:HeaderToolbarUserMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$d4rT(config);
  }/*

  protected static*/ function getCMSVersion$static()/*:String*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getLoginService().getVersion();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: HeaderToolbarUserMenuBase$,
      super$d4rT: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      statics: {getCMSVersion: getCMSVersion$static},
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.cap.common.SESSION"
      ]
    };
});
