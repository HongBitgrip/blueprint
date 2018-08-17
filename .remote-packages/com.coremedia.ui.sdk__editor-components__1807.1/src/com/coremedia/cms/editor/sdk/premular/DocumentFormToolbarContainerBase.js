Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase", function(DocumentFormToolbarContainerBase) {/*package com.coremedia.cms.editor.sdk.premular {
import ext.container.Container;

public class DocumentFormToolbarContainerBase extends Container {

  public*/ function DocumentFormToolbarContainerBase$(config/*:Container = null*/) {if(arguments.length<=0)config=null;
    this.super$ZFXu(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: DocumentFormToolbarContainerBase$,
      super$ZFXu: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.container.Container"]
    };
});
