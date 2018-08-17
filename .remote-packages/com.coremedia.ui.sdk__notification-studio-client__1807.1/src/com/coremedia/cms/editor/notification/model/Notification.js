Ext.define("com.coremedia.cms.editor.notification.model.Notification", function(Notification) {/*package com.coremedia.cms.editor.notification.model {

/**
 * A <code>Notification</code> is a small piece of information for the current <code>User</code>.
 * It can be of rather arbitrary type, has a creation date, a state (read or unread)
 * and a message key. Depending on the type, it carries additional parameters.
 * /
[PublicApi]
public interface Notification {

  /**
   * Returns the notification's type.
   *
   * @return the notification's type.
   * /
  function getType():String;

  /**
   * Returns the notification's (message) key.
   *
   * @return the notification's (message) key.
   * /
  function getKey():String;

  /**
   * Returns the notification's parameters. Depending on the notification's type,
   * arbitrary parameters are possible.
   *
   * @return the notification's parameters.
   * /
  function getParameters():Array;

  /**
   * Returns the notification's creation <code>Date</code>.
   *
   * @return the notification's creation date.
   * /
  function getCreationDate():Date;

  /**
   * Returns the notification's state, which is restricted to
   * 'read' or 'unread'.
   *
   * @return the notification's state.
   * /
  function getNotificationState():String;

  /**
   * Marks the notification as 'read'.
   * /
  function markAsRead():void;

  /**
   * Determines whether the notification is read.
   *
   * @return
   * /
  function isRead():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
