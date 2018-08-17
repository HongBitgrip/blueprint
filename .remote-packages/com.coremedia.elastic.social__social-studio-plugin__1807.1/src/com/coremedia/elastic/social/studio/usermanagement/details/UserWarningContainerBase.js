Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase", function(UserWarningContainerBase) {/*package com.coremedia.elastic.social.studio.usermanagement.details {

import ext.container.Container;
import ext.form.field.DisplayField;

public class UserWarningContainerBase extends Container {
  protected static const STATE_MESSAGES_ITEM_ID:String = "stateMessages";

  private var stateMessageField:DisplayField;

  public*/ function UserWarningContainerBase$(config/*:UserDetailsExtensionPoint = null*/) {if(arguments.length<=0)config=null;
    this.super$KgT7(config);
  }/*

  private*/ function getStateMessageDisplayField()/*:DisplayField*/ {
    if (!this.stateMessageField$KgT7) {
      this.stateMessageField$KgT7 =AS3.as( this.queryById(UserWarningContainerBase.STATE_MESSAGES_ITEM_ID),  Ext.form.field.Display);
    }

    return this.stateMessageField$KgT7;
  }/*

  public*/ function setStatusMessage(msg/*:String*/)/*:void*/ {
    this.getStateMessageDisplayField$KgT7().setValue(msg);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      stateMessageField$KgT7: null,
      constructor: UserWarningContainerBase$,
      super$KgT7: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getStateMessageDisplayField$KgT7: getStateMessageDisplayField,
      setStatusMessage: setStatusMessage,
      statics: {STATE_MESSAGES_ITEM_ID: "stateMessages"},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display"
      ]
    };
});
