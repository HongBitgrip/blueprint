Ext.define("com.coremedia.cms.editor.notification.NotificationsManager", function(NotificationsManager) {/*package com.coremedia.cms.editor.notification {

import com.coremedia.cms.editor.notification.components.NotificationToast;
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.cms.editor.notification.rest.impl.NotificationImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.Component;

/**
 * The <code>NotificationsManager</code> manages <code>Notifications</code> for the current <code>User</code>.
 * It keeps track of all the user's notifications as well as their read/unread
 * status. It provides a registry for registering custom display
 * components for specific notification types. Finally, it provides a central
 * access point for showing information 'toasts' based on notifications.
 *
 * @see com.coremedia.cms.editor.notification.model.Notification
 * /
public class NotificationsManager {

  private static*/ var notificationsManager$static/*:NotificationsManager*/=null;/*

  private var notificationDetailsRegistry:Object =*/function notificationDetailsRegistry_(){this.notificationDetailsRegistry$C7nY=( {});}/*;
  private var notificationsBean:RemoteBean;

  [ArrayElementType("com.coremedia.cms.editor.notification.model.Notification")]
  private var processed:Array;
  private var toastQueue:Array =*/function toastQueue_(){this.toastQueue$C7nY=( []);}/*;
  private var isToastVisible:Boolean = false;

  private var notificationsVE:ValueExpression;
  private var unreadNotificationsVE:ValueExpression;

  public static*/ function getInstance$static()/*:NotificationsManager*/ {
    if (!notificationsManager$static) {
      notificationsManager$static = new NotificationsManager();
    }
    return notificationsManager$static;
  }/*

  public*/ function NotificationsManager$() {notificationDetailsRegistry_.call(this);toastQueue_.call(this);
    this.notificationsBean$C7nY = com.coremedia.ui.data.beanFactory.getRemoteBean("usernotifications/" + com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().get("numericId"));
  }/*

  /**
   * Starts tracking notifications for the current user.
   *
   * /
  public*/ function startNotificationTracking()/*:void*/ {
    this.getNotificationsValueExpression().addChangeListener(AS3.bind(this,"notificationsChanged$C7nY"));
  }/*

  /**
   * Allows to register a custom display component (more specifically, its config object)
   * for a specific notification type. This custom component is then used instead of
   * <code>DefaultNotificationDetails</code>.
   *
   * @param notificationType the notification type for which a custom display component is registered
   * @param notificationDetailsComponentConfig the custom display component config
   *
   * @see DefaultNotificationDetails
   * /
  public*/ function registerNotificationDetailsComponentConfig(notificationType/*:String*/, notificationDetailsComponentConfig/*:Component*/)/*:void*/ {
    this.notificationDetailsRegistry$C7nY[notificationType] = notificationDetailsComponentConfig;
  }/*

  /**
   * Retrieves the registered custom display component (more specifically, its config object)
   * for a specific notification type.
   *
   * @param notificationType the notification type for which to retrieve the custom display component config
   * @return
   * /
  public*/ function getNotificationComponentConfig(notificationType/*:String*/)/*:Component*/ {
    return this.notificationDetailsRegistry$C7nY[notificationType];
  }/*

  /**
   * Gets the <code>ValueExpression</code> that carries the user's current notifications.
   *
   * @return the ValueExpression that carries the user's current notifications.
   * /
  public*/ function getNotificationsValueExpression()/*:ValueExpression*/ {
    if (!this.notificationsVE$C7nY) {
      this.notificationsVE$C7nY = com.coremedia.ui.data.ValueExpressionFactory.create("items", this.notificationsBean$C7nY);
    }

    return this.notificationsVE$C7nY;
  }/*

  /**
   * Gets the <code>ValueExpression</code> that carries the user's current unread notifications.
   *
   * @return the ValueExpression that carries the user's current unread notifications.
   * /
  public*/ function getUnreadNotificationsVE()/*:ValueExpression*/ {var this$=this;
    if (!this.unreadNotificationsVE$C7nY) {
      this.unreadNotificationsVE$C7nY = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var notifications/*:Array*/ = this$.getNotificationsValueExpression().getValue();
        if (!notifications) {
          // No notifications? No unread notifications!
          return undefined;
        }

        var unreadNotifications/*:Array*/ = [];
        var allLoaded/*:Boolean*/ = true;
        notifications.forEach(function (notification/*:NotificationImpl*/)/*:void*/ {
          if (!notification.isLoaded()) {
            notification.load();
            allLoaded = false;
          }
          if (!notification.isRead()) {
            unreadNotifications.push(notification);
          }
        });
        return allLoaded ? unreadNotifications : undefined;
      });
    }
    return this.unreadNotificationsVE$C7nY;
  }/*

  private*/ function notificationsChanged()/*:Function*/ {
    var actual/*:Array*/ = this.getNotificationsValueExpression().getValue() || [];

    // we must ignore the first initial change containing all notifications
    if (this.processed$C7nY) {
      //noinspection JSMismatchedCollectionQueryUpdate
      var diff/*:Array*/ = this.buildDiff$C7nY(actual);
      this.showToasts(diff);
    }
    this.processed$C7nY = actual;
  }/*

  private*/ function buildDiff(actual/*:Array*/)/*:Array*/ {var this$=this;
    var diff/*:Array*/ = [];
    actual.forEach(function (notification/*:Notification*/)/*:void*/ {
      if (this$.processed$C7nY.indexOf(notification) === -1) {
        diff.push(notification);
      }
    });
    return diff;
  }/*

  /**
   * Shows the given notifications in the form of fleeting toasts.
   * The toasts are shown one after the other.
   *
   * @param notifications the notifications to show.
   * /
  public*/ function showToasts(notifications/*:Array*/)/*:void*/ {var this$=this;
    if (notifications.length > 0) {
      notifications.forEach(function (notification/*:Notification*/)/*:void*/ {
        this$.toastQueue$C7nY.push(notification);
      });
      this.showNextToast$C7nY();
    }
  }/*

  private*/ function showNextToast()/*:void*/ {
    if (this.isToastVisible$C7nY) {
      return;
    }
    var next/*:Notification*/ = this.toastQueue$C7nY.shift();

    if (next) {
      this.isToastVisible$C7nY = true;

      if (AS3.is(next,  com.coremedia.ui.data.RemoteBean)) {
        (AS3.as(next,  com.coremedia.ui.data.RemoteBean)).load(AS3.bind(this,"afterLoad$C7nY"));
      } else {
        this.afterLoad$C7nY(next);
      }
    }
  }/*

  private*/ function afterLoad(notification/*:Notification*/)/*:void*/ {
    var config/*:NotificationToast*/ = AS3.cast(com.coremedia.cms.editor.notification.components.NotificationToast,{});
    AS3.setBindable(config,"notification" , notification);
    var toast/*:NotificationToast*/ = new com.coremedia.cms.editor.notification.components.NotificationToast(config);
    toast.mon(toast, "beforehide",AS3.bind( this,"toastGone$C7nY"));
    toast.mon(toast, "beforedestroy",AS3.bind( this,"toastGone$C7nY"));
    toast.show();
  }/*

  private*/ function toastGone()/*:void*/ {
    if (this.isToastVisible$C7nY) {
      this.isToastVisible$C7nY = false;
    }
    this.showNextToast$C7nY();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      notificationsBean$C7nY: null,
      processed$C7nY: null,
      isToastVisible$C7nY: false,
      notificationsVE$C7nY: null,
      unreadNotificationsVE$C7nY: null,
      constructor: NotificationsManager$,
      startNotificationTracking: startNotificationTracking,
      registerNotificationDetailsComponentConfig: registerNotificationDetailsComponentConfig,
      getNotificationComponentConfig: getNotificationComponentConfig,
      getNotificationsValueExpression: getNotificationsValueExpression,
      getUnreadNotificationsVE: getUnreadNotificationsVE,
      notificationsChanged$C7nY: notificationsChanged,
      buildDiff$C7nY: buildDiff,
      showToasts: showToasts,
      showNextToast$C7nY: showNextToast,
      afterLoad$C7nY: afterLoad,
      toastGone$C7nY: toastGone,
      statics: {getInstance: getInstance$static},
      requires: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: ["com.coremedia.cms.editor.notification.components.NotificationToast"]
    };
});
