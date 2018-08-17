Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase", function(UserDetailsExtensionPointBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import ext.container.Container;

public class UserDetailsExtensionPointBase extends Container {
  protected static const EXTENSION_CONTAINER_ITEM_ID:String = "extensionContainer";
  private var extensions:Container;

  public*/ function UserDetailsExtensionPointBase$(config/*:UserDetailsExtensionPoint = null*/) {if(arguments.length<=0)config=null;
    this.super$TEpp(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    if (!this.hasExtensions()) {
      this.hide();
    }
  }/*

  public*/ function hasExtensions()/*:Boolean*/ {
    return this.getExtensionContainer$TEpp().itemCollection.length > 1;
  }/*

  private*/ function getExtensionContainer()/*:Container*/ {
    if (!this.extensions$TEpp) {
      this.extensions$TEpp =AS3.as( this.getComponent(UserDetailsExtensionPointBase.EXTENSION_CONTAINER_ITEM_ID),  Ext.container.Container);
    }

    return this.extensions$TEpp;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      extensions$TEpp: null,
      constructor: UserDetailsExtensionPointBase$,
      super$TEpp: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      hasExtensions: hasExtensions,
      getExtensionContainer$TEpp: getExtensionContainer,
      statics: {EXTENSION_CONTAINER_ITEM_ID: "extensionContainer"},
      requires: ["Ext.container.Container"]
    };
});
