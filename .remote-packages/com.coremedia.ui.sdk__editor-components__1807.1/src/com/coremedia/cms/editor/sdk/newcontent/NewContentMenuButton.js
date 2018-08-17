Ext.define("com.coremedia.cms.editor.sdk.newcontent.NewContentMenuButton", function(NewContentMenuButton) {/*package com.coremedia.cms.editor.sdk.newcontent{
import ext.button.Button;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.newcontent.NewContentMenu;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class NewContentMenuButton extends Button{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.newContentMenuButton";

    public*/function NewContentMenuButton$(config/*:NewContentMenuButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    var defaults_$1/*:NewContentMenuButton*/ =AS3.cast(NewContentMenuButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateContentMenuButton_label')));
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1["id"] = "createContentMenuButton";
    AS3.setBindable(config_$1,"iconAlign" , "top");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateContentMenuButton_icon')));
    config_$1.menuAlign = "tr";
    var editor_NewContentMenu_27_5_$1/*:com.coremedia.cms.editor.sdk.newcontent.NewContentMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.newcontent.NewContentMenu,{});
    config_$1.menu = editor_NewContentMenu_27_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7aPb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      alias: "widget.com.coremedia.cms.editor.sdk.config.newContentMenuButton",
      constructor: NewContentMenuButton$,
      super$7aPb: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.newcontent.NewContentMenu"]
    };
});
