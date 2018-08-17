Ext.define("com.coremedia.cms.editor.sdk.desktop.ExtensionsMenu", function(ExtensionsMenu) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.AnchorLayout;
[PublicApi]
/**
 The extension menu contains all additional studio plugins, like elastic social, third party content integration,
 CAE console and taxonomies. The menu is used by the MoveFavBarButton plugin that moves the favorites toolbar
 buttons of plugins into this menu, so that the Favorites-Toolbar is not too crowded.
 * /
public class ExtensionsMenu extends ExtensionsMenuBase{

    import com.coremedia.ui.skins.MenuSkin;
    // B.E.M. entity
    public static const BLOCK:String = "cm-extensions-menu";

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.extensionsMenu";

    public*/function ExtensionsMenu$(config/*:ExtensionsMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase,{});
    var defaults_$1/*:ExtensionsMenu*/ =AS3.cast(ExtensionsMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.SIDE.getSkin());
    var ui_BEMPlugin_28_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_28_5_$1,"block" , ExtensionsMenu.BLOCK);
    config_$1.plugins = [ui_BEMPlugin_28_5_$1];
    var local_ExtensionsMenuToolbar_31_5_$1/*: com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar,{});
    local_ExtensionsMenuToolbar_31_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase.TOOLBAR_ITEM_ID);
    config_$1.items = [local_ExtensionsMenuToolbar_31_5_$1];
    var layout_Anchor_35_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_35_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9B_$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.extensionsMenu",
      constructor: ExtensionsMenu$,
      super$9B_$: function() {
        com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {BLOCK: "cm-extensions-menu"},
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar"]
    };
});
