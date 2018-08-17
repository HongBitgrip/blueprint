Ext.define("com.coremedia.cms.editor.sdk.desktop.SaveSearchFolderHint", function(SaveSearchFolderHint) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.ui.components.AnimatedNotification;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.field.DisplayField;
public class SaveSearchFolderHint extends AnimatedNotification{

    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.saveSearchFolderHint";

    public*/function SaveSearchFolderHint$(config/*:SaveSearchFolderHint = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AnimatedNotification*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotification,{});
    var defaults_$1/*:SaveSearchFolderHint*/ =AS3.cast(SaveSearchFolderHint,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"position" , "rc");
    var container_24_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_26_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_26_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.INVERTED.getSkin());
    AS3.setBindable(displayField_26_9_$1,"value" , AS3.getBindable(config,"text"));
    container_24_5_$1.items = [displayField_26_9_$1];
    config_$1.items = [container_24_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yMQc(config_$1);
  }/*

    /**
     The text to display.
     * /
    [Bindable]
    public var text:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotification",
      alias: "widget.com.coremedia.cms.editor.sdk.config.saveSearchFolderHint",
      constructor: SaveSearchFolderHint$,
      super$yMQc: function() {
        com.coremedia.ui.components.AnimatedNotification.prototype.constructor.apply(this, arguments);
      },
      config: {text: null},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.ui.components.AnimatedNotification",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
