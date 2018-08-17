Ext.define("com.coremedia.cms.editor.notification.model.impl.NotificationBase", function(NotificationBase) {/*package com.coremedia.cms.editor.notification.model.impl {

import com.coremedia.cms.editor.notification.model.Notification;

/**
 * Base class for creating <code>Notification</code> objects.
 * /
public class NotificationBase implements Notification {

  public*/ function NotificationBase$() {
    // empty
  }/*

  public*/ function getType()/*:String*/ {
    return "notification";
  }/*

  public*/ function getKey()/*:String*/ {
    throw new AS3.Error("must be overridden in subclasses");
  }/*

  public*/ function getParameters()/*:Array*/ {
    throw new AS3.Error("must be overridden in subclasses");
  }/*

  public*/ function getCreationDate()/*:Date*/ {
    return null;
  }/*

  public*/ function getNotificationState()/*:String*/ {
    return "none";
  }/*

  public*/ function markAsRead()/*:void*/ {
    // NOOP
  }/*

  public*/ function isRead()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.notification.model.Notification"],
      constructor: NotificationBase$,
      getType: getType,
      getKey: getKey,
      getParameters: getParameters,
      getCreationDate: getCreationDate,
      getNotificationState: getNotificationState,
      markAsRead: markAsRead,
      isRead: isRead,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.notification.model.Notification"
      ]
    };
});
