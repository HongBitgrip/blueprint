Ext.define("com.coremedia.cms.editor.notification.rest.impl.NotificationImpl", function(NotificationImpl) {/*package com.coremedia.cms.editor.notification.rest.impl {

import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;

[RestResource(uriTemplate="notification/{id:[a-zA-Z0-9-]+}")]
public class NotificationImpl extends RemoteBeanImpl implements Notification {

  public*/ function NotificationImpl$(path/*:String*/) {
    this.super$6AeS(path);
  }/*

  public*/ function getType()/*:String*/ {
    return this.get("type");
  }/*

  public*/ function getKey()/*:String*/ {
    return this.get("key");
  }/*

  public*/ function getParameters()/*:Array*/ {
    return this.get("parameters");
  }/*

  public*/ function getNotificationState()/*:String*/ {
    return this.get("state");
  }/*

  public*/ function getCreationDate()/*:Date*/ {
    return this.get("creationDate");
  }/*

  public*/ function markAsRead()/*:void*/ {var this$=this;
    if (this.isLoaded()) {
      this.markAsReadUnchecked$6AeS();
    } else {
      this.load(function ()/*:void*/ {
        if (this$.isLoaded()) {
          this$.markAsReadUnchecked$6AeS();
        }
      });
    }
  }/*

  private*/ function markAsReadUnchecked()/*:void*/ {
    if (!this.isRead()) {
      var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/markAsRead", "PUT");
      rsm.request(null,AS3.bind( this,"invalidate"));
    }
  }/*

  public*/ function isRead()/*:Boolean*/ {
    return this.getNotificationState() === "READ";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.notification.model.Notification"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "notification/{id:[a-zA-Z0-9-]+}"
        ]
      ]},
      constructor: NotificationImpl$,
      super$6AeS: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getType: getType,
      getKey: getKey,
      getParameters: getParameters,
      getNotificationState: getNotificationState,
      getCreationDate: getCreationDate,
      markAsRead: markAsRead,
      markAsReadUnchecked$6AeS: markAsReadUnchecked,
      isRead: isRead,
      requires: [
        "com.coremedia.cms.editor.notification.model.Notification",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ]
    };
});
