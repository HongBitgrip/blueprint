Ext.define("com.coremedia.cms.editor.sdk.cloud.CloudStudioPlugin", function(CloudStudioPlugin) {/*package com.coremedia.cms.editor.sdk.cloud{
import com.coremedia.cms.editor.sdk.cloud.*;
import ext.plugin.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.menu.Item;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.Component;
import com.coremedia.ui.plugins.RemoveItemsPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.cloud.Cloud')]
public class CloudStudioPlugin extends CloudStudioPluginBase{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.cms.editor.sdk.login.LogoutUtil;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.StringUtil;

    import mx.resources.ResourceManager;

    public*/function CloudStudioPlugin$(config/*:CloudStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase,{});
    var defaults_$1/*:CloudStudioPlugin*/ =AS3.cast(CloudStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_HeaderToolbarUserMenu_32_5_$1/*:com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu,{});
    var ui_AddItemsPlugin_34_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_36_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_36_13_$1["id"] = "logout-from-cloud-menu-item";
    AS3.setBindable(menuItem_36_13_$1,"handler" , com.coremedia.cms.editor.sdk.login.LogoutUtil.logout);
    var ui_BindPropertyPlugin_39_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_39_17_$1.componentProperty = "text";
    ui_BindPropertyPlugin_39_17_$1.transformer = function(value/*:String*/)/*:String*/ {
                                                 return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.cloud.Cloud', 'HeaderToolbar_logoutFromCloud_btn_text'), com.coremedia.ui.util.EncodingUtil.encodeForHTML(value));
                                               };
    var ui_ValueExpression_44_21_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_44_21_$1,"expression" , "user.name");
    AS3.setBindable(ui_ValueExpression_44_21_$1,"context" , com.coremedia.cap.common.SESSION);
    ui_BindPropertyPlugin_39_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_44_21_$1);
    menuItem_36_13_$1.plugins = [ui_BindPropertyPlugin_39_17_$1];
    var menuItem_50_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_50_13_$1["id"] = "return-to-cloud-menu-item";
    AS3.setBindable(menuItem_50_13_$1,"handler" ,AS3.bind( this,"returnToCloud"));
    AS3.setBindable(menuItem_50_13_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.cloud.Cloud', 'HeaderToolbar_returnToCloud_btn_text')));
    AS3.setBindable(ui_AddItemsPlugin_34_9_$1,"items" , [menuItem_36_13_$1, menuItem_50_13_$1]);
    var component_55_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_55_13_$1.itemId = "logout-menu-item";
    AS3.setBindable(ui_AddItemsPlugin_34_9_$1,"after" , [component_55_13_$1]);
    var ui_RemoveItemsPlugin_58_9_$1/*:com.coremedia.ui.plugins.RemoveItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.RemoveItemsPlugin,{});
    var component_60_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_60_13_$1.itemId = "logout-menu-item";
    AS3.setBindable(ui_RemoveItemsPlugin_58_9_$1,"items" , [component_60_13_$1]);
    editor_HeaderToolbarUserMenu_32_5_$1.plugins = [ui_AddItemsPlugin_34_9_$1, ui_RemoveItemsPlugin_58_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_HeaderToolbarUserMenu_32_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aVSh(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase",
      constructor: CloudStudioPlugin$,
      super$aVSh: function() {
        com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "Ext.String",
        "Ext.menu.Item",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.cloud.CloudStudioPluginBase",
        "com.coremedia.cms.editor.sdk.cloud.Cloud_properties",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.RemoveItemsPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu",
        "com.coremedia.cms.editor.sdk.login.LogoutUtil"
      ]
    };
});
