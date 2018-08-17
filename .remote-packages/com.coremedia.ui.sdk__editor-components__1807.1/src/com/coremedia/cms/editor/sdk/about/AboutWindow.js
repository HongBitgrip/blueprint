Ext.define("com.coremedia.cms.editor.sdk.about.AboutWindow", function(AboutWindow) {/*package com.coremedia.cms.editor.sdk.about{
import com.coremedia.cms.editor.sdk.about.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.Component;
import ext.button.Button;
import ext.view.DataView;
import ext.data.ArrayStore;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class AboutWindow extends AboutWindowBase{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    import ext.StringUtil;
    import ext.XTemplate;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.aboutWindow";
    public static const PROPERTIES_BLOCK:BEMBlock =*/function PROPERTIES_BLOCK$static_(){AboutWindow.PROPERTIES_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-about-window-properties"));}/*;
    public static const PROPERTIES_ELEMENT_PROPERTY:BEMElement =*/function PROPERTIES_ELEMENT_PROPERTY$static_(){AboutWindow.PROPERTIES_ELEMENT_PROPERTY=( AboutWindow.PROPERTIES_BLOCK.createElement("property"));}/*;
    public static const PROPERTIES_ELEMENT_KEY:BEMElement =*/function PROPERTIES_ELEMENT_KEY$static_(){AboutWindow.PROPERTIES_ELEMENT_KEY=( AboutWindow.PROPERTIES_BLOCK.createElement("key"));}/*;
    public static const PROPERTIES_ELEMENT_VALUE:BEMElement =*/function PROPERTIES_ELEMENT_VALUE$static_(){AboutWindow.PROPERTIES_ELEMENT_VALUE=( AboutWindow.PROPERTIES_BLOCK.createElement("value"));}/*;

    public*/function AboutWindow$(config/*:AboutWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.about.AboutWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.about.AboutWindowBase,{});
    var defaults_$1/*:AboutWindow*/ =AS3.cast(AboutWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_title'));
    config_$1.stateId = "aboutWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 500);
    AS3.setBindable(config_$1,"height" , 400);
    config_$1.resizable = true;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var container_56_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_56_5_$1,"layout" , "hbox");
    var ui_IconDisplayField_58_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_58_9_$1,"scale" , "medium");
    ui_IconDisplayField_58_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LOGO.getSkin());
    AS3.setBindable(ui_IconDisplayField_58_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'coremedia')));
    AS3.setBindable(ui_IconDisplayField_58_9_$1,"value" , Ext.String.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_coremedia_text'),
                             com.coremedia.cap.common.SESSION.getConnection().getLoginService().getVersion()));
    container_56_5_$1.items = [ui_IconDisplayField_58_9_$1];
    var ui_HorizontalSpacingPlugin_65_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    container_56_5_$1.plugins = [ui_HorizontalSpacingPlugin_65_9_$1];
    var box_68_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_68_5_$1,"height" , 9);
    var button_69_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_69_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_69_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_selectAll_text')));
    AS3.setBindable(button_69_5_$1,"handler" ,AS3.bind( this,"selectAll"));
    var box_72_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_72_5_$1,"height" , 9);
    var dataView_73_5_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    dataView_73_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.about.AboutWindowBase.PROPERTIES_TABLE_ITEM_ID);
    dataView_73_5_$1.itemSelector =net.jangaroo.ext.Exml.asString( AboutWindow.PROPERTIES_ELEMENT_PROPERTY.getCSSSelector());
    dataView_73_5_$1.disableSelection = true;
    dataView_73_5_$1.tpl = AboutWindow.PROPERTIES_TABLE_TEMPLATE;
    var store_Array_78_9_$1/*:ext.data.ArrayStore*/ =AS3.cast(Ext.data.ArrayStore,{});
    AS3.setBindable(store_Array_78_9_$1,"data" , this.getAboutProperties());
    AS3.setBindable(store_Array_78_9_$1,"fields" , ['prop','value']);
    AS3.setBindable(dataView_73_5_$1,"store" , new Ext.data.ArrayStore(store_Array_78_9_$1));
    config_$1.items = [container_56_5_$1, box_68_5_$1, button_69_5_$1, box_72_5_$1, dataView_73_5_$1];
    var button_85_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_85_5_$1.itemId = "cancelBtn";
    button_85_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_85_5_$1,"scale" , "small");
    AS3.setBindable(button_85_5_$1,"handler" ,AS3.bind( this,"close"));
    AS3.setBindable(button_85_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_closeButton_text')));
    config_$1.buttons = [button_85_5_$1];
    var layout_Anchor_92_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_92_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_7IY(config_$1);
  }/*

    public static const PROPERTIES_TABLE_TEMPLATE:XTemplate =*/function PROPERTIES_TABLE_TEMPLATE$static_(){AboutWindow.PROPERTIES_TABLE_TEMPLATE=( new Ext.XTemplate([
      '<table class="' + AboutWindow.PROPERTIES_BLOCK + '">',
      '<tpl for=".">',
      '<tpl if="value">',
      '<tr class="' + AboutWindow.PROPERTIES_ELEMENT_PROPERTY + '">',
      '<td class="' + AboutWindow.PROPERTIES_ELEMENT_KEY + '">{prop}</td>',
      '<td class="' + AboutWindow.PROPERTIES_ELEMENT_VALUE + '">{value}</td>',
      '</tr>',
      '</tpl>',
      '</tpl>',
      '</table>'
    ]));}/*;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.about.AboutWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.aboutWindow",
      constructor: AboutWindow$,
      super$_7IY: function() {
        com.coremedia.cms.editor.sdk.about.AboutWindowBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROPERTIES_BLOCK: undefined,
        PROPERTIES_ELEMENT_PROPERTY: undefined,
        PROPERTIES_ELEMENT_KEY: undefined,
        PROPERTIES_ELEMENT_VALUE: undefined,
        PROPERTIES_TABLE_TEMPLATE: undefined,
        __initStatics__: function() {
          PROPERTIES_BLOCK$static_();
          PROPERTIES_ELEMENT_PROPERTY$static_();
          PROPERTIES_ELEMENT_KEY$static_();
          PROPERTIES_ELEMENT_VALUE$static_();
          PROPERTIES_TABLE_TEMPLATE$static_();
        }
      },
      requires: [
        "Ext.Component",
        "Ext.String",
        "Ext.XTemplate",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.data.ArrayStore",
        "Ext.layout.container.Anchor",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.about.AboutWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
