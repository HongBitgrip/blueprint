Ext.define("com.coremedia.cms.editor.notification.components.NotificationDetailsBase", function(NotificationDetailsBase) {/*package com.coremedia.cms.editor.notification.components {
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.components.IconDisplayField;


[PublicApi]
public class NotificationDetailsBase extends IconDisplayField {

  [Bindable]
  public var notification:Notification;

  public*/ function NotificationDetailsBase$(config/*:NotificationDetailsBase = null*/) {if(arguments.length<=0)config=null;
    this.super$cSCj(config);
  }/*

  override public*/ function enable(silent/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)silent=false;
    this.fireEvent('enable', this);
  }/*

  override public*/ function disable(/* private */ silent/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)silent=false;
    if(silent !== true){
      this.fireEvent('disable', this);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconDisplayField",
      metadata: {"": ["PublicApi"]},
      constructor: NotificationDetailsBase$,
      super$cSCj: function() {
        com.coremedia.ui.components.IconDisplayField.prototype.constructor.apply(this, arguments);
      },
      enable: enable,
      disable: disable,
      config: {notification: null},
      requires: ["com.coremedia.ui.components.IconDisplayField"]
    };
});
