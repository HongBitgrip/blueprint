Ext.define("com.coremedia.ui.components.IconButton", function(IconButton) {/*package com.coremedia.ui.components{
import ext.button.Button;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A Button that does not display its text (only as overflowText).
 * /
public class IconButton extends Button{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.ui.config.iconButton";

    public*/function IconButton$(config/*:IconButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    var defaults_$1/*:IconButton*/ =AS3.cast(IconButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(config_$1,"scale" , "small");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BwZV(config_$1);
  }/*


    override protected*/ function afterRender()/*:void*/ {
      Ext.button.Button.prototype.afterRender.call(this);
      // always set the noTextCls, remove classes so the button will no longer switch them
      this["btnEl"].removeCls(this["_textCls"]);
      this["btnEl"].addCls(this["_noTextCls"]);
      this["_textCls"] = "";
      this["_noTextCls"] = "";
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.iconButton",
      constructor: IconButton$,
      super$BwZV: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      requires: [
        "Ext.button.Button",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.skins.ButtonSkin"]
    };
});
