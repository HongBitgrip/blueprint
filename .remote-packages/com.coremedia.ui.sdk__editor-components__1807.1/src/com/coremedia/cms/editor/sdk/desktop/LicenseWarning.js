Ext.define("com.coremedia.cms.editor.sdk.desktop.LicenseWarning", function(LicenseWarning) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.components.IconDisplayField;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A panel used to warn a Studio user that a certain feature is not licensed.
 * /
public class LicenseWarning extends LicenseWarningBase{

    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.licenseWarning";

    public*/function LicenseWarning$(config/*:LicenseWarning = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase,{});
    var defaults_$1/*:LicenseWarning*/ =AS3.cast(LicenseWarning,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindVisibilityPlugin_26_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_26_5_$1.bindTo = this.isLicenseWarningVisibleVE();
    config_$1.plugins = [ui_BindVisibilityPlugin_26_5_$1];
    var ui_IconDisplayField_29_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_29_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase.LICENSE_WARNING_FIELD_ITEMID);
    ui_IconDisplayField_29_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LICENSE_WARNING.getSkin());
    AS3.setBindable(ui_IconDisplayField_29_5_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_29_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'warning')));
    AS3.setBindable(ui_IconDisplayField_29_5_$1,"value" , com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase.getTitle());
    config_$1.items = [ui_IconDisplayField_29_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Svn7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.licenseWarning",
      constructor: LicenseWarning$,
      super$Svn7: function() {
        com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
