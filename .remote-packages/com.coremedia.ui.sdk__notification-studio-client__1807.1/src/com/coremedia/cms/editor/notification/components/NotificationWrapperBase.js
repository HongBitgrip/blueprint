Ext.define("com.coremedia.cms.editor.notification.components.NotificationWrapperBase", function(NotificationWrapperBase) {/*package com.coremedia.cms.editor.notification.components {
import com.coremedia.cms.editor.notification.NotificationsManager;
import com.coremedia.cms.editor.notification.actions.NotificationAction;
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ExecuteEventually;

import ext.Component;
import ext.ComponentManager;
import ext.button.Button;
import ext.container.Container;
import ext.event.Event;

[ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class NotificationWrapperBase extends Container {

  /**
   * The notification as the underlying model.
   * /
  [Bindable]
  public var notification:Notification;

  /**
   * The handler to call when the wrapper's button on the right-hand side is clicked.
   * /
  public var buttonHandler:Function;

  /**
   * The icon class provided by the context.
   * /
  public var buttonIconCls:String;

  private var stateIndicatorCt:Container;
  private var detailsCt:Container;
  private var details:Component;
  private var button:Button;

  private var modifiersVE:ValueExpression;
  private var notificationStateVE:ValueExpression;

  private var notificationAction:NotificationAction;
  private var actionInitialized:Boolean = false;
  private var actionHolderVE:ValueExpression;

  public*/ function NotificationWrapperBase$(config/*:NotificationWrapperBase = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$jiJ_(config);
    this.stateIndicatorCt$jiJ_ =AS3.as( this.queryById(com.coremedia.cms.editor.notification.components.NotificationWrapper.STATE_INDICATOR_ITEM_ID),  Ext.container.Container);
    this.detailsCt$jiJ_ =AS3.as( this.queryById(com.coremedia.cms.editor.notification.components.NotificationWrapper.DETAILS_ITEM_ID),  Ext.container.Container);
    this.button$jiJ_ =AS3.as( this.queryById(com.coremedia.cms.editor.notification.components.NotificationWrapper.BTN_ITEM_ID),  Ext.button.Button);

    if (AS3.is(AS3.getBindable(this,"notification"),  com.coremedia.ui.data.RemoteBean)) {
      (AS3.as(AS3.getBindable(this,"notification"),  com.coremedia.ui.data.RemoteBean)).load(function ()/*:void*/ {
        this$.initNotification$jiJ_();
      });
    } else {
      this.initNotification$jiJ_();
    }
  }/*

  private*/ function attachAction()/*:void*/ {var this$=this;
    if (!this.actionInitialized$jiJ_) {
      this.actionInitialized$jiJ_ = true;

      // For corner cases (e.g. tests) it is important that the
      // style class marking the NotificationWrapper as an action
      // holder is only attached after the click handlers
      // are in place. Might seem a bit desperate to use an
      // ExecuteEventually here, but is does the job.
      var markAsActionHolderEventually/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
        this$.actionHolderVE$jiJ_.setValue(true);
      });

      attachActionOnEnterKeyHandlerAfterRender();
      this.stateIndicatorCt$jiJ_ && attachActionClickHandler(this.stateIndicatorCt$jiJ_);
      this.detailsCt$jiJ_ && attachActionClickHandler(this.detailsCt$jiJ_);

      markAsActionHolderEventually.proceed();
    }

    function attachActionOnEnterKeyHandlerAfterRender()/*:void*/ {
      markAsActionHolderEventually.delay();
      if (this$.rendered) {
        attachActionOnEnterKeyHandler();
      } else {
        this$.on("afterrender", attachActionOnEnterKeyHandler, null, {single: true});
      }
    }

    function attachActionOnEnterKeyHandler()/*:void*/ {
      this$.mon(this$.getEl(), "keydown",AS3.bind( this$,"triggerActionOnEnterKey$jiJ_"));
      markAsActionHolderEventually.proceed();
    }

    function attachActionClickHandler(cmp/*: Component*/)/*:void*/ {
      markAsActionHolderEventually.delay();
      if (cmp.rendered) {
        attachActionClickHandlerAfterRender(cmp);
      } else {
        this$.mon(cmp, "afterrender", attachActionClickHandlerAfterRender, null, {single: true});
      }
    }

    function attachActionClickHandlerAfterRender(cmp/*: Component*/)/*:void*/ {
      this$.mon(cmp.getEl(), "click",AS3.bind( this$,"triggerAction$jiJ_"));
      markAsActionHolderEventually.proceed();
    }
  }/*

  private*/ function triggerActionOnEnterKey(evt/*:Event*/)/*:void*/ {
    if (evt.getKey() === Ext.event.Event.ENTER || evt.getKey() === Ext.event.Event.SPACE) {
      this.triggerAction$jiJ_();
    }
  }/*

  private*/ function removeAction()/*:void*/ {var this$=this;
    if (this.actionInitialized$jiJ_) {
      this.actionInitialized$jiJ_ = false;

      this.actionHolderVE$jiJ_.setValue(false);
      removeActionOnEnterKeyHandler();
      this.stateIndicatorCt$jiJ_ && removeActionClickHandler(this.stateIndicatorCt$jiJ_);
      this.detailsCt$jiJ_ && removeActionClickHandler(this.detailsCt$jiJ_);
    }

    function removeActionOnEnterKeyHandler()/*:void*/ {
      if (this$.rendered) {
        removeActionOnEnterKeyHandlerAfterRender();
      } else {
        this$.on("afterrender", removeActionOnEnterKeyHandlerAfterRender, null, {single: true});
      }
    }

    function removeActionOnEnterKeyHandlerAfterRender()/*:void*/ {
      this$.mun(this$.getEl(), "keydown",AS3.bind( this$,"triggerActionOnEnterKey$jiJ_"));
    }

    function removeActionClickHandler(cmp/*: Component*/)/*:void*/ {
      if (cmp.rendered) {
        removeActionClickHandlerAfterRender(cmp);
      } else {
        this$.mon(cmp, "afterrender", removeActionClickHandlerAfterRender, null, {single: true});
      }
    }

    function removeActionClickHandlerAfterRender(cmp/*: Component*/)/*:void*/ {
      this$.mun(cmp.getEl(), "click",AS3.bind( this$,"triggerAction$jiJ_"));
    }
  }/*

  private*/ function triggerAction()/*:void*/ {
    this.notificationAction$jiJ_.execute();
    AS3.getBindable(this,"notification").markAsRead();

    // Hide NotificationsMenu
    var notificationsMenuCmp/*:NotificationsMenu*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.notification.components.NotificationsMenu.xtype),  com.coremedia.cms.editor.notification.components.NotificationsMenu);
    if (notificationsMenuCmp && notificationsMenuCmp.isVisible(true)) {
      notificationsMenuCmp.hide();
    }
  }/*
  private*/ function initNotification()/*:void*/ {
    this.addDetailsCmp$jiJ_();
    this.initActionHandling$jiJ_();
    this.initButtonActionHandling$jiJ_();
  }/*

  private*/ function addDetailsCmp()/*:void*/ {var this$=this;
    var detailsComponentCfg/*:Component*/ = com.coremedia.cms.editor.notification.NotificationsManager.getInstance().getNotificationComponentConfig(AS3.getBindable(this,"notification").getType());
    if (!detailsComponentCfg) {
      detailsComponentCfg = AS3.cast(com.coremedia.cms.editor.notification.components.DefaultNotificationDetails,{});
    }
    detailsComponentCfg["notification"] = AS3.getBindable(this,"notification");
    detailsComponentCfg["bemElement"] = "text";

    this.details$jiJ_ = Ext.ComponentManager.create(detailsComponentCfg);

    this.detailsCt$jiJ_.insert(0, this.details$jiJ_);

    // listen to disable/enable events of attached details component
    this.mon(this.details$jiJ_, "disable", function ()/*:void*/ {
      this$.removeAction$jiJ_();
    });
    this.mon(this.details$jiJ_, "enable", function ()/*:void*/ {
      this$.attachAction$jiJ_();
    });

    // EXT6_PERFORMANCE updateLayout();
  }/*

  private*/ function initActionHandling()/*:void*/ {
    this.notificationAction$jiJ_ = this.details$jiJ_ && (AS3.as(this.details$jiJ_.baseAction,  com.coremedia.cms.editor.notification.actions.NotificationAction));
    if (this.notificationAction$jiJ_) {
      this.notificationAction$jiJ_.setNotification(AS3.getBindable(this,"notification"));
      if (!this.notificationAction$jiJ_.isDisabled()) {
        this.attachAction$jiJ_();
      }
    }
  }/*

  private*/ function initButtonActionHandling()/*:void*/ {var this$=this;
    if (this.button$jiJ_) {
      this.mon(this.button$jiJ_, "afterrender", function ()/*:void*/ {
        this$.mon(this$.button$jiJ_.getEl(), "click",AS3.bind( this$,"callButtonHandler$jiJ_"));
        this$.mon(this$.button$jiJ_.getEl(), "keydown", function (evt/*:Event*/)/*:void*/ {
          if (evt.getKey() === 13) {
            evt.stopEvent();
            this$.callButtonHandler$jiJ_();
          }
        });
      }, null, {single: true});
    }
  }/*

  private*/ function callButtonHandler()/*:void*/ {
    this.buttonHandler(AS3.getBindable(this,"notification"));
  }/*

  protected*/ function getModifiersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.modifiersVE$jiJ_) {
      this.modifiersVE$jiJ_ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var notificationState/*:String*/ = AS3.getBindable(this$,"notification").getNotificationState();
        var modifiers/*:Array*/ = ["state-" + (notificationState ? notificationState.toLowerCase() : "unread")];
        if (this$.getActionHolderVE$jiJ_().getValue()) {
          modifiers.push("action-holder");
        }
        return modifiers;
      });
    }

    return this.modifiersVE$jiJ_;
  }/*

  private*/ function getActionHolderVE()/*:ValueExpression*/ {
    if (!this.actionHolderVE$jiJ_) {
      this.actionHolderVE$jiJ_ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.actionHolderVE$jiJ_;
  }/*

  private*/ function getNotificationStateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.notificationStateVE$jiJ_) {
      this.notificationStateVE$jiJ_ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return AS3.getBindable(this$,"notification").getNotificationState();
      });
    }
    return this.notificationStateVE$jiJ_;
  }/*

  protected*/ function computeNotificationUIVE()/*:ValueExpression*/ {
    return this.getNotificationStateVE$jiJ_();
  }/*

  protected*/ function computeStateIndicatorUIVE()/*:ValueExpression*/ {
    return this.getNotificationStateVE$jiJ_();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      buttonHandler: null,
      buttonIconCls: null,
      stateIndicatorCt$jiJ_: null,
      detailsCt$jiJ_: null,
      details$jiJ_: null,
      button$jiJ_: null,
      modifiersVE$jiJ_: null,
      notificationStateVE$jiJ_: null,
      notificationAction$jiJ_: null,
      actionInitialized$jiJ_: false,
      actionHolderVE$jiJ_: null,
      constructor: NotificationWrapperBase$,
      super$jiJ_: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      attachAction$jiJ_: attachAction,
      triggerActionOnEnterKey$jiJ_: triggerActionOnEnterKey,
      removeAction$jiJ_: removeAction,
      triggerAction$jiJ_: triggerAction,
      initNotification$jiJ_: initNotification,
      addDetailsCmp$jiJ_: addDetailsCmp,
      initActionHandling$jiJ_: initActionHandling,
      initButtonActionHandling$jiJ_: initButtonActionHandling,
      callButtonHandler$jiJ_: callButtonHandler,
      getModifiersVE: getModifiersVE,
      getActionHolderVE$jiJ_: getActionHolderVE,
      getNotificationStateVE$jiJ_: getNotificationStateVE,
      computeNotificationUIVE: computeNotificationUIVE,
      computeStateIndicatorUIVE: computeStateIndicatorUIVE,
      config: {notification: null},
      requires: [
        "Ext.ComponentManager",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.event.Event",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: [
        "com.coremedia.cms.editor.notification.NotificationsManager",
        "com.coremedia.cms.editor.notification.actions.NotificationAction",
        "com.coremedia.cms.editor.notification.components.DefaultNotificationDetails",
        "com.coremedia.cms.editor.notification.components.NotificationWrapper",
        "com.coremedia.cms.editor.notification.components.NotificationsMenu"
      ]
    };
});
