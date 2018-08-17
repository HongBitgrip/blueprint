Ext.define("com.coremedia.cms.editor.notification.components.DefaultNotificationDetails", function(DefaultNotificationDetails) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.cms.editor.notification.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
[PublicApi]
/**
 The default display component for notifications. It contains a notification type specific icon,
 the notification message text and the notification creation date. Other custom display components
 may be registered via the {@link com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin}.

 @see com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin
 * /
public class DefaultNotificationDetails extends DefaultNotificationDetailsBase{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.notification.config.defaultNotificationDetails";

    public*/function DefaultNotificationDetails$(config/*:DefaultNotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase*/ =AS3.cast(com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase,{});
    var defaults_$1/*:DefaultNotificationDetails*/ =AS3.cast(DefaultNotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.htmlEncode = false;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.INFO.getSkin());
    AS3.setBindable(config_$1,"scale" , "large");
    AS3.setBindable(config_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    var ui_BindPropertyPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_30_5_$1.bindTo = this.getTextVE();
    var ui_BindPropertyPlugin_31_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_31_5_$1.bindTo = this.getIconClsVE();
    ui_BindPropertyPlugin_31_5_$1.componentProperty = "iconCls";
    config_$1.plugins = [ui_BindPropertyPlugin_30_5_$1, ui_BindPropertyPlugin_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IvFH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.notification.config.defaultNotificationDetails",
      constructor: DefaultNotificationDetails$,
      super$IvFH: function() {
        com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.notification.components.DefaultNotificationDetailsBase",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
