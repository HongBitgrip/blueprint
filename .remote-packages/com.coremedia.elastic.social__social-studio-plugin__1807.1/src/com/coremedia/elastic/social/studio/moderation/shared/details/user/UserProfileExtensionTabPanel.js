Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileExtensionTabPanel", function(UserProfileExtensionTabPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user{
import ext.tab.TabPanel;
import net.jangaroo.ext.Exml;
public class UserProfileExtensionTabPanel extends TabPanel{

    import com.coremedia.ui.skins.TabBarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userProfileExtensionTabPanel";

    public*/function UserProfileExtensionTabPanel$(config/*:UserProfileExtensionTabPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    var defaults_$1/*:UserProfileExtensionTabPanel*/ =AS3.cast(UserProfileExtensionTabPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL.getSkin());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ctw0(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      alias: "widget.com.coremedia.elastic.social.studio.config.userProfileExtensionTabPanel",
      constructor: UserProfileExtensionTabPanel$,
      super$ctw0: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tab.Panel",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
