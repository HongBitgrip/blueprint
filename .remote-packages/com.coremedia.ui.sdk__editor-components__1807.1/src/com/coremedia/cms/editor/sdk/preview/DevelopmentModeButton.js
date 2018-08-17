Ext.define("com.coremedia.cms.editor.sdk.preview.DevelopmentModeButton", function(DevelopmentModeButton) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class DevelopmentModeButton extends DevelopmentModeButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.AriaUtils;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.developmentModeButton";

    public*/function DevelopmentModeButton$(config/*:DevelopmentModeButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase,{});
    var defaults_$1/*:DevelopmentModeButton*/ =AS3.cast(DevelopmentModeButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableToggle = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_DARK.getSkin());
    config_$1.itemId = "bookmarkButton";
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'type_theming')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$0lzG(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.developmentModeButton",
      constructor: DevelopmentModeButton$,
      super$0lzG: function() {
        com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.AriaUtils",
        "net.jangaroo.ext.Exml"
      ]
    };
});
