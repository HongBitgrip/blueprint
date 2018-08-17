Ext.define("com.coremedia.cms.editor.sdk.dashboard.ReloadButton", function(ReloadButton) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ReloadButton extends ReloadButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.reloadButton";

    public*/function ReloadButton$(config/*:ReloadButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase,{});
    var defaults_$1/*:ReloadButton*/ =AS3.cast(ReloadButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scale" , "small");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_INVERTED.getSkin());
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'reload')));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_Button_Reload_tooltip_text'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_Button_Reload_tooltip_text')));
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"reload"));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9VzV(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.reloadButton",
      constructor: ReloadButton$,
      super$9VzV: function() {
        com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.ReloadButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
