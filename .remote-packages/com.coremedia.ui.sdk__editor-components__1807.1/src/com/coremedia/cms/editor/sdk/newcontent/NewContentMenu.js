Ext.define("com.coremedia.cms.editor.sdk.newcontent.NewContentMenu", function(NewContentMenu) {/*package com.coremedia.cms.editor.sdk.newcontent{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.upload.UploadMenuItem;
public class NewContentMenu extends Menu{

    import com.coremedia.ui.skins.MenuSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.newContentMenu";

    public*/function NewContentMenu$(config/*:NewContentMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:NewContentMenu*/ =AS3.cast(NewContentMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.SIDE.getSkin());
    AS3.setBindable(config_$1,"style" , "max-height: 70%;overflow-y: auto");
    config_$1["id"] = "new-content-toolbar-menu";
    var menuSeparator_20_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    menuSeparator_20_5_$1.itemId = "uploadSeparator";
    var editor_UploadMenuItem_21_5_$1/*:com.coremedia.cms.editor.sdk.upload.UploadMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.UploadMenuItem,{});
    config_$1.items = [menuSeparator_20_5_$1, editor_UploadMenuItem_21_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ixrJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.newContentMenu",
      constructor: NewContentMenu$,
      super$ixrJ: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.upload.UploadMenuItem"]
    };
});
