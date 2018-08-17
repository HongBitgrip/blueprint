Ext.define("com.coremedia.ui.components.IconSplitButton", function(IconSplitButton) {/*package com.coremedia.ui.components{
import ext.button.SplitButton;
import net.jangaroo.ext.Exml;
/**
 A Button that does not display its text (only as overflowText).
 * /
public class IconSplitButton extends SplitButton{

    public static const xtype:String = "com.coremedia.ui.config.iconSplitButton";

    public*/function IconSplitButton$(config/*:IconSplitButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.button.SplitButton*/ =AS3.cast(Ext.button.Split,{});
    var defaults_$1/*:IconSplitButton*/ =AS3.cast(IconSplitButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$utLV(config_$1);
  }/*

    override protected*/ function initComponent()/*:void*/ {
      Ext.button.Split.prototype.initComponent.call(this);
      this["_textCls"] = this["_noTextCls"];
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Split",
      alias: "widget.com.coremedia.ui.config.iconSplitButton",
      constructor: IconSplitButton$,
      super$utLV: function() {
        Ext.button.Split.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      requires: [
        "Ext.button.Split",
        "net.jangaroo.ext.Exml"
      ]
    };
});
