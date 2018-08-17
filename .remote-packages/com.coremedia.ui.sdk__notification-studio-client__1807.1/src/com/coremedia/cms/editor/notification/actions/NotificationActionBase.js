Ext.define("com.coremedia.cms.editor.notification.actions.NotificationActionBase", function(NotificationActionBase) {/*package com.coremedia.cms.editor.notification.actions {
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;

/**
 * <p>Base class for notification actions.</p>
 *
 * <p>For this purpose, there is a protected method <code>getActionState()</code>
 * which is supposed to be overridden in subclasses. This method determines in which
 * state the action currently is in (which should happen on triggering).</p>
 *
 * <p>Pre-defined action states are:</p>
 * <ul>
 *   <li>ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE</li>
 *   <li>ACTION_STATE_EXECUTABLE</li>
 *   <li>ACTION_STATE_DISABLED</li>
 * </ul>
 *
 * <p>For each possible action state (except ACTION_STATE_DISABLED),
 * a specific handler has to be registered.</p>
 *
 * <p>Note that <code>getActionState()</code> is used in the context of a
 * <code>FunctionValueExpression</code>. It is recommended to return
 * <code>undefined</code> if no meaningful action state can be determined yet
 * (and trigger dependency-tracked operations alongside to be able to determine
 * a value in the future). When the action is triggered, the FunctionValueExpression
 * is loaded and only in the callback (meaning after a value different
 * from <code>undefined</code> was determined) the action is really executed.</p>
 *
 * <p>This mechanism just described (determining action states and registering handlers)
 * only comes into play if the subclass does NOT provide its own action handler
 * function. If it does, this action handler is simply used instead. In this case,
 * you have to provide your own implementation of <code>calculateDisabled()</code>.</p>
 *
 * @see Notification
 * @see FunctionValueExpression
 * @see DependencyTracker
 * /
[PublicApi]
public class NotificationActionBase extends DependencyTrackedAction {

  private var notificationVE:ValueExpression;

  //noinspection JSFieldCanBeLocal
  protected const ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE:String = "notificationNotAccessible";
  //noinspection JSFieldCanBeLocal
  protected const ACTION_STATE_EXECUTABLE:String = "notificationActionExecutable";
  //noinspection JSFieldCanBeLocal
  protected const ACTION_STATE_DISABLED:String = "notificationActionDisabled";

  protected var actionStateVE:ValueExpression;

  // NOSONAR
  private var actionStateHandlers:Object =*/function actionStateHandlers_(){this.actionStateHandlers$yRG0=( {});}/*;

  public*/ function NotificationActionBase$(config/*:NotificationAction = null*/) {if(arguments.length<=0)config=null;
    // only set handler if no handler is defined
    if (config.handler === undefined) {
      AS3.setBindable(config,"handler" ,AS3.bind( this,"executeAction$yRG0"));
    }
    this.super$yRG0(config);actionStateHandlers_.call(this);;
    this.registerActionStateHandler(this.ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE, handleActionStateNotificationNotAccessible$static);
  }/*

  /**
   * Sets the notification that this action refers to.
   *
   * @param notification the notification.
   * /
  public*/ function setNotification(notification/*:Notification*/)/*:void*/ {
    this.getNotificationVE$yRG0().setValue(notification);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var actionState/*:String*/ = this.getActionState();
    return actionState === undefined || actionState === this.ACTION_STATE_DISABLED;
  }/*

  /**
   * Retrieves the notification that this action refers to.
   *
   * @return the notification.
   * /
  protected*/ function getNotification()/*:Notification*/ {
    return this.getNotificationVE$yRG0().getValue();
  }/*

  private static*/ function handleActionStateNotificationNotAccessible$static()/*:void*/ {
    com.coremedia.ui.logging.Logger.error("Notification not accessible");
  }/*

  private*/ function getNotificationVE()/*:ValueExpression*/ {
    if (!this.notificationVE$yRG0) {
      this.notificationVE$yRG0 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }

    return this.notificationVE$yRG0;
  }/*

  /**
   * Registers an action handler for a specific action state.
   *
   * @param actionState the action state for which a handler is registered.
   * @param actionStateHandler the handler to be registered.
   * /
  protected*/ function registerActionStateHandler(actionState/*:String*/, actionStateHandler/*:Function*/)/*:void*/ {
    if (this.actionStateHandlers$yRG0[actionState] !== undefined) {
      com.coremedia.ui.logging.Logger.debug("Notification Action State Handler for '" + actionState + "' is overriden");
    }
    this.actionStateHandlers$yRG0[actionState] = actionStateHandler;
  }/*

  /**
   * Base implementation for determining the action state.
   *
   * Unless <code>undefined</code> (not yet determined) it returns the state
   * <code>ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE</code> if the notification
   * is not accessible or <code>ACTION_STATE_EXECUTABLE</code> if it
   * is accessible.
   *
   * @return
   * /
  protected*/ function getActionState()/*:String*/ {
    // Is there a Notification?
    var notification/*:Notification*/ = this.getNotification();
    if (!notification) {
      return this.ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE;
    }

    // If notification is RemoteBean, load and check accessibility.
    if (AS3.is(notification,  com.coremedia.ui.data.RemoteBean)) {
      switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.as(notification,  com.coremedia.ui.data.RemoteBean))) {
        case undefined: return undefined;
        case false: return this.ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE;
      }
    }
    return this.ACTION_STATE_EXECUTABLE;
  }/*

  private*/ function executeAction()/*:void*/ {var this$=this;
    this.getActionStateVE$yRG0().loadValue(function(actionState/*:String*/)/*:void*/ {
      var handler/*:Function*/ = this$.actionStateHandlers$yRG0[actionState];
      if (handler !== undefined &&AS3.is( handler,  Function)) {
        handler();
      } else {
        com.coremedia.ui.logging.Logger.debug("Notification Action State Handler not defined for '" + actionState + "'");
      }
    });
  }/*

  private*/ function getActionStateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.actionStateVE) {
      this.actionStateVE = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return this$.getActionState();
      });
    }

    return this.actionStateVE;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      notificationVE$yRG0: null,
      ACTION_STATE_NOTIFICATION_NOT_ACCESSIBLE: "notificationNotAccessible",
      ACTION_STATE_EXECUTABLE: "notificationActionExecutable",
      ACTION_STATE_DISABLED: "notificationActionDisabled",
      actionStateVE: null,
      constructor: NotificationActionBase$,
      super$yRG0: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setNotification: setNotification,
      calculateDisabled: calculateDisabled,
      getNotification: getNotification,
      getNotificationVE$yRG0: getNotificationVE,
      registerActionStateHandler: registerActionStateHandler,
      getActionState: getActionState,
      executeAction$yRG0: executeAction,
      getActionStateVE$yRG0: getActionStateVE,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
