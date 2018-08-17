Ext.define("com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase", function(DefaultNotificationDetailsBase) {/*package com.coremedia.cms.editor.notification.components {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
public class DefaultNotificationDetailsBase extends NotificationDetails {

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-notification-details"));};/*
  private static const*/var ELEMENT_HIGHLIGHTED$static/*:BEMElement*/;/* =*/function ELEMENT_HIGHLIGHTED$static_(){ELEMENT_HIGHLIGHTED$static=( BLOCK$static.createElement("highlighted"));};/*
  private static const*/var ELEMENT_DATE$static/*:BEMElement*/;/* =*/function ELEMENT_DATE$static_(){ELEMENT_DATE$static=( BLOCK$static.createElement("date"));};/*

  private var textVE:ValueExpression;
  private var iconClsVE:ValueExpression;

  public*/ function DefaultNotificationDetailsBase$(config/*:DefaultNotificationDetailsBase = null*/) {if(arguments.length<=0)config=null;
    this.super$whv2(config);
  }/*

  internal*/ function getIconClsVE()/*:ValueExpression*/ {var this$=this;
    if (!this.iconClsVE$whv2) {
      this.iconClsVE$whv2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var notificationType/*:String*/ = AS3.getBindable(this$,"notification").getType();
        if (notificationType) {
          return this$.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', "Notification_" + notificationType + "_iconCls");
        }

        return undefined;
      });
    }
    return this.iconClsVE$whv2;
  }/*

  internal*/ function getTextVE()/*:ValueExpression*/ {var this$=this;
    var me/*:DefaultNotificationDetailsBase*/ = this;
    if (!this.textVE$whv2) {
      this.textVE$whv2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var parameters/*:Array*/ = AS3.getBindable(this$,"notification").getParameters() || [];
        if (AS3.is(me,  com.coremedia.cms.editor.notification.components.TextParametersPreProcessor)) {
          parameters = (AS3.as(me,  com.coremedia.cms.editor.notification.components.TextParametersPreProcessor)).preProcessTextParameters(parameters);
        }
        var message/*:String*/ = this$.computeText$whv2(parameters);
        var date/*:String*/ = computeDate$static(AS3.getBindable(this$,"notification").getCreationDate());
        if (date) {
          message += '<div class="' + ELEMENT_DATE$static + '">' + date + '</div>';
        }
        return '<div class="' + BLOCK$static + '">'
                + message.replace(/\[u]/g, '<span class="' + ELEMENT_HIGHLIGHTED$static + '">')
                        .replace(/\[\/u]/g, '</span>')
                + '</div>';
      });
    }

    return this.textVE$whv2;
  }/*

  private*/ function computeText(parameters/*:Array*/)/*:String*/ {
    parameters = parameters.map(function (param/*:Object*/)/*:Object*/ {
      if (AS3.is(param,  String)) {
        return com.coremedia.ui.util.EncodingUtil.encodeForHTML(param);
      } else {
        return param;
      }
    });
    var textKey/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', "Notification_" + AS3.getBindable(this,"notification").getType() + "_" + AS3.getBindable(this,"notification").getKey() + "_msg");
    if (textKey) {
      return Ext.String.format.apply(null, [textKey].concat(parameters));
    } else {
      return parameters[0];
    }
  }/*

  private static*/ function computeDate$static(date/*:Date*/)/*:String*/ {
    if (date) {
      return com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(date, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat')));
    }
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.NotificationDetails",
      metadata: {"": ["PublicApi"]},
      textVE$whv2: null,
      iconClsVE$whv2: null,
      constructor: DefaultNotificationDetailsBase$,
      super$whv2: function() {
        com.coremedia.cms.editor.notification.components.NotificationDetails.prototype.constructor.apply(this, arguments);
      },
      getIconClsVE: getIconClsVE,
      getTextVE: getTextVE,
      computeText$whv2: computeText,
      statics: {
        BLOCK: undefined,
        ELEMENT_HIGHLIGHTED: undefined,
        ELEMENT_DATE: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_HIGHLIGHTED$static_();
          ELEMENT_DATE$static_();
        }
      },
      requires: [
        "Ext.Date",
        "Ext.String",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.cms.editor.notification.components.NotificationDetails",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.notification.components.TextParametersPreProcessor"]
    };
});
