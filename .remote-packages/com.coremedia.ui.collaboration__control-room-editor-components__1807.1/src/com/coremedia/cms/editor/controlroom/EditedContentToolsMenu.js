Ext.define("com.coremedia.cms.editor.controlroom.EditedContentToolsMenu", function(EditedContentToolsMenu) {/*package com.coremedia.cms.editor.controlroom{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
public class EditedContentToolsMenu extends Menu{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.editedContentToolsMenu";

    public*/function EditedContentToolsMenu$(config/*:EditedContentToolsMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:EditedContentToolsMenu*/ =AS3.cast(EditedContentToolsMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    config_$1.itemId = "rightToolbarButton";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$06I6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.editedContentToolsMenu",
      constructor: EditedContentToolsMenu$,
      super$06I6: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Menu",
        "net.jangaroo.ext.Exml"
      ]
    };
});
