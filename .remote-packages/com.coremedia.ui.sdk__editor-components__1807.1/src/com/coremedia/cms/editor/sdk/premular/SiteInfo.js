Ext.define("com.coremedia.cms.editor.sdk.premular.SiteInfo", function(SiteInfo) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A container that shows some information about the current document's site.
 * /
public class SiteInfo extends SiteInfoBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.siteInfo";

    /**
     * The itemId of the site name field.
     * /
    public static const SITE_NAME_ITEM_ID:String = "documentPath";

    /**
     * The itemId of the site locale field.
     * /
    public static const SITE_LOCALE_ITEM_ID:String = "typeName";

    public var bindTo:ValueExpression;

    public*/function SiteInfo$(config/*:SiteInfo = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.SiteInfoBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.SiteInfoBase,{});
    var defaults_$1/*:SiteInfo*/ =AS3.cast(SiteInfo,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SiteInfo_header_text'));
    config_$1.itemId = "siteInfoForm";
    AS3.setBindable(config_$1,"collapsed" , false);
    var displayField_40_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_40_5_$1.itemId =net.jangaroo.ext.Exml.asString( SiteInfo.SITE_NAME_ITEM_ID);
    AS3.setBindable(displayField_40_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SiteInfo_name_text')));
    var ui_BindPropertyPlugin_43_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_43_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_43_9_$1.bindTo = this.getSiteValueExpression(config);
    ui_BindPropertyPlugin_43_9_$1.transformer =AS3.bind( this,"siteToName");
    displayField_40_5_$1.plugins = [ui_BindPropertyPlugin_43_9_$1];
    var displayField_48_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_48_5_$1.itemId =net.jangaroo.ext.Exml.asString( SiteInfo.SITE_LOCALE_ITEM_ID);
    AS3.setBindable(displayField_48_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SiteInfo_locale_text')));
    var ui_BindPropertyPlugin_51_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_51_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_51_9_$1.bindTo = this.getSiteValueExpression(config);
    ui_BindPropertyPlugin_51_9_$1.transformer =AS3.bind( this,"siteToLocale");
    displayField_48_5_$1.plugins = [ui_BindPropertyPlugin_51_9_$1];
    config_$1.items = [displayField_40_5_$1, displayField_48_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Hoot(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.SiteInfoBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.siteInfo",
      bindTo: null,
      constructor: SiteInfo$,
      super$Hoot: function() {
        com.coremedia.cms.editor.sdk.premular.SiteInfoBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SITE_NAME_ITEM_ID: "documentPath",
        SITE_LOCALE_ITEM_ID: "typeName"
      },
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.SiteInfoBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
