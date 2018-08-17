Ext.define("com.coremedia.ui.components.MenuIconButton", function(MenuIconButton) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.IconButton;
import net.jangaroo.ext.Exml;
/**
 An Icon Button that is no Split Button but displays a menu.
 * /
public class MenuIconButton extends IconButton{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.ui.config.menuIconButton";

    public*/function MenuIconButton$(config/*:MenuIconButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var defaults_$1/*:MenuIconButton*/ =AS3.cast(MenuIconButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fAMU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      alias: "widget.com.coremedia.ui.config.menuIconButton",
      constructor: MenuIconButton$,
      super$fAMU: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.IconButton",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.skins.ButtonSkin"]
    };
});
