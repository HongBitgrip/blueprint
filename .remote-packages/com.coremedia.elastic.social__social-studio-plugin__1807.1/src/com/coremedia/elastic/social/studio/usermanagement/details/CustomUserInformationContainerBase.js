Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase", function(CustomUserInformationContainerBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import ext.container.Container;

public class CustomUserInformationContainerBase extends Container {

  public static const ID:String = "cm-elastic-userwindow-additional-detail-container";

  public*/ function CustomUserInformationContainerBase$(config/*:CustomUserInformationContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$8KB8(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: CustomUserInformationContainerBase$,
      super$8KB8: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      statics: {ID: "cm-elastic-userwindow-additional-detail-container"},
      requires: ["Ext.container.Container"]
    };
});
