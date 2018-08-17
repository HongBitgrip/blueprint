Ext.define("com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButton", function(SwitchDifferencingButton) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconSplitButton;
import ext.menu.Menu;
import ext.menu.Item;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class SwitchDifferencingButton extends SwitchDifferencingButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.AriaUtils;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.switchDifferencingButton";

    public*/function SwitchDifferencingButton$(config/*:SwitchDifferencingButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase,{});
    var defaults_$1/*:SwitchDifferencingButton*/ =AS3.cast(SwitchDifferencingButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "hbox");
    var ui_IconSplitButton_25_5_$1/*:com.coremedia.ui.components.IconSplitButton*/ =AS3.cast(com.coremedia.ui.components.IconSplitButton,{});
    ui_IconSplitButton_25_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase.MAIN_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconSplitButton_25_5_$1,"scale" , "medium");
    ui_IconSplitButton_25_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconSplitButton_25_5_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT));
    AS3.setBindable(ui_IconSplitButton_25_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'version_comparison')));
    var menu_31_9_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_33_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_33_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase.MASTER_COMPARISON_MENU_ITEM_ID);
    AS3.setBindable(menuItem_33_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_master_text')));
    AS3.setBindable(menuItem_33_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'language_comparison')));
    AS3.setBindable(menuItem_33_13_$1,"handler" ,AS3.bind( this,"openMasterComparison"));
    var menuItem_37_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_37_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase.VERSION_COMPARISON_MENU_ITEM_ID);
    AS3.setBindable(menuItem_37_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_version_text')));
    AS3.setBindable(menuItem_37_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'version_comparison')));
    AS3.setBindable(menuItem_37_13_$1,"handler" ,AS3.bind( this,"openVersionComparison"));
    menu_31_9_$1.items = [menuItem_33_13_$1, menuItem_37_13_$1];
    ui_IconSplitButton_25_5_$1.menu = menu_31_9_$1;
    config_$1.items = [ui_IconSplitButton_25_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mf42(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.switchDifferencingButton",
      constructor: SwitchDifferencingButton$,
      super$mf42: function() {
        com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconSplitButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.AriaUtils",
        "net.jangaroo.ext.Exml"
      ]
    };
});
