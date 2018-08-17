Ext.define("com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector", function(ReadOnlyVersionSelector) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindTooltipPlugin;
import ext.menu.Menu;
import com.coremedia.ui.plugins.BindItemsPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
/**
 A button to select the version to be displayed in the read only document form. The main menu shows only the
 'important' versions (newest, latest published, latest translated, selected) with sub menus containing all the
 other versions in between.
 * /
public class ReadOnlyVersionSelector extends ReadOnlyVersionSelectorBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.readOnlyVersionSelector";

    public*/function ReadOnlyVersionSelector$(config/*:ReadOnlyVersionSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase,{});
    var defaults_$1/*:ReadOnlyVersionSelector*/ =AS3.cast(ReadOnlyVersionSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    var ui_BindPropertyPlugin_24_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_24_5_$1.componentProperty = "text";
    ui_BindPropertyPlugin_24_5_$1.bindTo = this.getVersionInfoValueExpression();
    ui_BindPropertyPlugin_24_5_$1.skipIfUndefined = true;
    var ui_BindTooltipPlugin_27_5_$1/*:com.coremedia.ui.plugins.BindTooltipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTooltipPlugin,{});
    ui_BindTooltipPlugin_27_5_$1.bindTo = this.getVersionTooltipValueExpression();
    config_$1.plugins = [ui_BindPropertyPlugin_24_5_$1, ui_BindTooltipPlugin_27_5_$1];
    var menu_31_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_BindItemsPlugin_33_9_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_33_9_$1,"valueExpression" , this.getMainMenuItemsValueExpression());
    AS3.setBindable(ui_BindItemsPlugin_33_9_$1,"reuseComponents" , false);
    var ui_BEMPlugin_35_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_35_9_$1,"block" , "cm-version-selector-menu");
    AS3.setBindable(ui_BEMPlugin_35_9_$1,"defaultElement" , "item");
    menu_31_5_$1.plugins = [ui_BindItemsPlugin_33_9_$1, ui_BEMPlugin_35_9_$1];
    config_$1.menu = menu_31_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ybcp(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.readOnlyVersionSelector",
      constructor: ReadOnlyVersionSelector$,
      super$ybcp: function() {
        com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindTooltipPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
