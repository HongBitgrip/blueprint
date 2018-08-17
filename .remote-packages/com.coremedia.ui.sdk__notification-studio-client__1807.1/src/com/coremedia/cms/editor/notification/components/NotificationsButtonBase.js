Ext.define("com.coremedia.cms.editor.notification.components.NotificationsButtonBase", function(NotificationsButtonBase) {/*package com.coremedia.cms.editor.notification.components {

import com.coremedia.cms.editor.notification.NotificationsManager;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.AriaUtils;

import ext.dom.Element;

[ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
public class NotificationsButtonBase extends IconButton {

  private var notificationsVE:ValueExpression;
  private var ariaDescription:Element;

  public*/ function NotificationsButtonBase$(config/*:NotificationsButton = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$Gu4G(config);

    this.on("afterrender", function ()/*:void*/ {
      this$.ariaDescription$Gu4G = com.coremedia.ui.util.AriaUtils.createReferenceableAriaEl(this, "description");
      com.coremedia.ui.util.AriaUtils.addDescribedBy(this$.el, this$.ariaDescription$Gu4G.id);
      this$.getNotificationsVE().addChangeListener(AS3.bind(this$,"updateTooltip$Gu4G"));
      this$.updateTooltip$Gu4G();
    });
  }/*

  private*/ function updateTooltip()/*:void*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var notifications/*:Array*/ = this.getNotificationsVE().getValue();
    if (notifications.length > 0) {
      var s/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'NotificationsButton_tooltip', [notifications.length]);
      AS3.setBindable(this,"tooltip" , s);
      this.ariaDescription$Gu4G.dom.innerHTML = s;
    } else {
      var t/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'NotificationsButton_noNotifications_tooltip');
      AS3.setBindable(this,"tooltip" , t);
      this.ariaDescription$Gu4G.dom.innerHTML = t;
    }
  }/*

  protected*/ function getNotificationsVE()/*:ValueExpression*/ {
    if (!this.notificationsVE$Gu4G) {
      this.notificationsVE$Gu4G = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        return com.coremedia.cms.editor.notification.NotificationsManager.getInstance().getNotificationsValueExpression().getValue() || [];
      });
    }

    return this.notificationsVE$Gu4G;
  }/*

  protected*/ function getUnreadNotificationsVE()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      return com.coremedia.cms.editor.notification.NotificationsManager.getInstance().getUnreadNotificationsVE().getValue() || [];
    });
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.getNotificationsVE().removeChangeListener(AS3.bind(this,"updateTooltip$Gu4G"));
    com.coremedia.ui.components.IconButton.prototype.destroy.call(this,params);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      notificationsVE$Gu4G: null,
      ariaDescription$Gu4G: null,
      constructor: NotificationsButtonBase$,
      super$Gu4G: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      updateTooltip$Gu4G: updateTooltip,
      getNotificationsVE: getNotificationsVE,
      getUnreadNotificationsVE: getUnreadNotificationsVE,
      destroy: destroy,
      requires: [
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.AriaUtils"
      ],
      uses: ["com.coremedia.cms.editor.notification.NotificationsManager"]
    };
});
