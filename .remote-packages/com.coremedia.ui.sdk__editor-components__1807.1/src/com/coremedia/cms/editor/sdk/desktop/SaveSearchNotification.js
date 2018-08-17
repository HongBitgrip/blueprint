Ext.define("com.coremedia.cms.editor.sdk.desktop.SaveSearchNotification", function(SaveSearchNotification) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.ui.components.AnimatedNotification;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
public class SaveSearchNotification extends AnimatedNotification{

    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.saveSearchNotification";

    public*/function SaveSearchNotification$(config/*:SaveSearchNotification = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AnimatedNotification*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotification,{});
    var defaults_$1/*:SaveSearchNotification*/ =AS3.cast(SaveSearchNotification,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"position" , "rc");
    var displayField_25_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_25_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.INVERTED.getSkin());
    AS3.setBindable(displayField_25_5_$1,"value" , AS3.getBindable(config,"text"));
    config_$1.items = [displayField_25_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pmSy(config_$1);
  }/*

    /**
     The text to display.
     * /
    [Bindable]
    public var text:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotification",
      alias: "widget.com.coremedia.cms.editor.sdk.config.saveSearchNotification",
      constructor: SaveSearchNotification$,
      super$pmSy: function() {
        com.coremedia.ui.components.AnimatedNotification.prototype.constructor.apply(this, arguments);
      },
      config: {text: null},
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.ui.components.AnimatedNotification",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
