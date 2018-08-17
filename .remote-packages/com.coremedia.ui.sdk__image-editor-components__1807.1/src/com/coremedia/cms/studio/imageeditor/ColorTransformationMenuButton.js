Ext.define("com.coremedia.cms.studio.imageeditor.ColorTransformationMenuButton", function(ColorTransformationMenuButton) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.menu.Menu;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
public class ColorTransformationMenuButton extends MenuButtonBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.MenuSkin;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.colorTransformationMenuButton";
    private var BUNDLE:Object;

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:ColorTransformationMenuButton*/)/*:void*/ {
      this.BUNDLE$p3jw = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
    }/*

    public*/function ColorTransformationMenuButton$(config/*:ColorTransformationMenuButton = null*/){if(arguments.length<=0)config=null;this.__initialize__$p3jw(config);
    var config_$1/*: com.coremedia.cms.studio.imageeditor.MenuButtonBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.MenuButtonBase,{});
    var defaults_$1/*:ColorTransformationMenuButton*/ =AS3.cast(ColorTransformationMenuButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_action_color_iconCls));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_label_color);
    AS3.setBindable(config_$1,"tooltip" , this.BUNDLE$p3jw.IEC_label_color);
    var menu_34_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_34_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.GRID_100.getSkin());
    menu_34_5_$1.plain = true;
    var container_37_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_37_9_$1.itemId = "color-manipulation";
    AS3.setBindable(container_37_9_$1,"width" , 320);
    var container_40_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_42_17_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_42_17_$1,"value" , this.BUNDLE$p3jw.IEC_label_brightness);
    var ie_ImageTransformationSlider_43_17_$1/*: com.coremedia.cms.studio.imageeditor.ImageTransformationSlider*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageTransformationSlider,{});
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"disabledValueExpression" , AS3.getBindable(config,"disabledValueExpression"));
    ie_ImageTransformationSlider_43_17_$1.itemId = "brightness";
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"propertyName" , "brightness");
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"commandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_history_color_brightness));
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"resetCommandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_history_color_reset_brightness));
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"minValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.BRIGHTNESS_MIN);
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"maxValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.BRIGHTNESS_MAX);
    AS3.setBindable(ie_ImageTransformationSlider_43_17_$1,"defaultValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.BRIGHTNESS_DEFAULT);
    container_40_13_$1.items = [displayField_42_17_$1, ie_ImageTransformationSlider_43_17_$1];
    var container_55_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_57_17_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_57_17_$1,"value" , this.BUNDLE$p3jw.IEC_label_contrast);
    var ie_ImageTransformationSlider_58_17_$1/*: com.coremedia.cms.studio.imageeditor.ImageTransformationSlider*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageTransformationSlider,{});
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"disabledValueExpression" , AS3.getBindable(config,"disabledValueExpression"));
    ie_ImageTransformationSlider_58_17_$1.itemId = "contrast";
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"propertyName" , "contrast");
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"commandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_history_color_contrast));
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"resetCommandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$p3jw.IEC_history_color_reset_contrast));
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"minValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.CONTRAST_MIN);
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"maxValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.CONTRAST_MAX);
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"defaultValue" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.CONTRAST_DEFAULT);
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"decimalPrecision" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.CONTRAST_DECIMAL_PRECISION);
    AS3.setBindable(ie_ImageTransformationSlider_58_17_$1,"increment" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.CONTRAST_INCREMENT);
    container_55_13_$1.items = [displayField_57_17_$1, ie_ImageTransformationSlider_58_17_$1];
    container_37_9_$1.items = [container_40_13_$1, container_55_13_$1];
    var layout_VBox_74_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_74_13_$1,"align" , "stretch");
    AS3.setBindable(container_37_9_$1,"layout" , layout_VBox_74_13_$1);
    var ui_VerticalSpacingPlugin_77_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_77_13_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_37_9_$1.plugins = [ui_VerticalSpacingPlugin_77_13_$1];
    menu_34_5_$1.items = [container_37_9_$1];
    var layout_VBox_82_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_82_9_$1,"align" , "stretch");
    AS3.setBindable(menu_34_5_$1,"layout" , layout_VBox_82_9_$1);
    config_$1.menu = menu_34_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$p3jw(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.colorTransformationMenuButton",
      BUNDLE$p3jw: null,
      __initialize__$p3jw: __initialize__,
      constructor: ColorTransformationMenuButton$,
      super$p3jw: function() {
        com.coremedia.cms.studio.imageeditor.MenuButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {undoHistory: null},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "Ext.menu.Menu",
        "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ColorTransformationUtil",
        "com.coremedia.cms.studio.imageeditor.ImageTransformationSlider"
      ]
    };
});
