Ext.define("com.coremedia.cms.editor.notification.components.NotificationsMenuBase", function(NotificationsMenuBase) {/*package com.coremedia.cms.editor.notification.components {
import com.coremedia.cms.editor.notification.NotificationsManager;
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.data.ValueExpression;

import ext.dom.Element;
import ext.menu.Menu;
import ext.util.IPositionable;

public class NotificationsMenuBase extends Menu {

  private var arrow:Element;

  /**
   * ValueExpression holding the user's current notifications.
   * /
  [Bindable]
  public var notificationsVE:ValueExpression;

  public static const HEADER_TOOLBAR_ITEM_ID:String = "headerToolbarItemId";

  public*/ function NotificationsMenuBase$(config/*:NotificationsMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$OgVz(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.menu.Menu.prototype.afterRender.call(this);
    this.arrow$OgVz = this.getEl().createChild({
      cls: "cm-notifications-menu-arrow"
    }, this.getEl().dom);
  }/*

  override protected*/ function afterShow(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    Ext.menu.Menu.prototype.afterShow.call(this,animateTarget, callback, scope);
    // zIndex is only calculated when element becomes visible
    this.arrow$OgVz.setZIndex(this.getEl().getZIndex() + 1);
    this.arrow$OgVz.show();
  }/*

  override protected*/ function afterHide(callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(arguments.length){case 0:callback=null;case 1:scope=null;}
    Ext.menu.Menu.prototype.afterHide.call(this,callback, scope);
    this.arrow$OgVz.hide();
  }/*

  override public*/ function alignTo(element/*:**/, position/*:String = "tl-bl?"*/, offsets/*:Array = null*/, animate/*:* = undefined*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position="tl-bl?";case 2:offsets=null;}
    Ext.menu.Menu.prototype.alignTo.call(this,element, position, offsets || [0, 10], animate);
    this.arrow$OgVz.alignTo(element, "tc-b", [0, -10], animate);
  }/*

  protected static*/ function markAllAsRead$static()/*:void*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    com.coremedia.cms.editor.notification.NotificationsManager.getInstance().getUnreadNotificationsVE().loadValue(function (unreadNotifications/*:Array*/)/*:void*/ {
      unreadNotifications.forEach(function (notification/*:Notification*/)/*:void*/ {
        notification.markAsRead();
      });
    });
  }/*

  protected static*/ function notificationButtonHandler$static(notification/*:Notification*/)/*:void*/ {
    notification.markAsRead();
  }/*

  /**
   * A BindPropertyPlugin transformer method to compute the menu height from the number of notifications shown in the menu.
   * This is a workaround for the not working menu config attribute maxHeight.
   *
   * @param notifications an array of notifications
   * @return the menu height
   * /
  protected static*/ function computeHeight$static(notifications/*:Array*/)/*:Number*/ {
    if (notifications && notifications.length > 4) {
      return 430;
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      arrow$OgVz: null,
      constructor: NotificationsMenuBase$,
      super$OgVz: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      afterShow: afterShow,
      afterHide: afterHide,
      alignTo: alignTo,
      config: {notificationsVE: null},
      statics: {
        HEADER_TOOLBAR_ITEM_ID: "headerToolbarItemId",
        markAllAsRead: markAllAsRead$static,
        notificationButtonHandler: notificationButtonHandler$static,
        computeHeight: computeHeight$static
      },
      requires: ["Ext.menu.Menu"],
      uses: ["com.coremedia.cms.editor.notification.NotificationsManager"]
    };
});
