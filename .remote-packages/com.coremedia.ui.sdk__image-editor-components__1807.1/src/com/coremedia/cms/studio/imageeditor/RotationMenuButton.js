Ext.define("com.coremedia.cms.studio.imageeditor.RotationMenuButton", function(RotationMenuButton) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.menu.Menu;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.button.Button;
import com.coremedia.cms.studio.imageeditor.actions.RotateImageAction;
import ext.Component;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
public class RotationMenuButton extends MenuButtonBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.MenuSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.rotationMenuButton";
    private var BUNDLE:Object;

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:RotationMenuButton*/)/*:void*/ {
      this.BUNDLE$9cWI = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
    }/*

    public*/function RotationMenuButton$(config/*:RotationMenuButton = null*/){if(arguments.length<=0)config=null;this.__initialize__$9cWI(config);
    var config_$1/*: com.coremedia.cms.studio.imageeditor.MenuButtonBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.MenuButtonBase,{});
    var defaults_$1/*:RotationMenuButton*/ =AS3.cast(RotationMenuButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_action_rotate_iconCls));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_label_rotate);
    AS3.setBindable(config_$1,"tooltip" , this.BUNDLE$9cWI.IEC_label_rotate);
    var menu_52_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_52_5_$1.plain = true;
    menu_52_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.GRID_100.getSkin());
    var container_55_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_55_9_$1.itemId = "crude-rotation";
    AS3.setBindable(container_55_9_$1,"width" , 260);
    var displayField_58_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_58_13_$1,"value" , this.BUNDLE$9cWI.IEC_label_rotate);
    var container_59_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_59_13_$1.flex = 1.0;
    var button_61_17_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_61_17_$1.itemId = "btn_rotate_left";
    button_61_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    var ie_RotateImageAction_64_21_$1/*:com.coremedia.cms.studio.imageeditor.actions.RotateImageAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.RotateImageAction,{});
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.imageeditor.ImageEditor','IEC_action_rotateLeft_iconCls')));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_label_left));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"statusExpression" , AS3.getBindable(config,"statusValueExpression"));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"angle" , 270);
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"orientedImageDimensionsValueExpression" , AS3.getBindable(config,"orientedImageDimensionsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"variantsValueExpression" , AS3.getBindable(config,"variantsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_64_21_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    button_61_17_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.RotateImageAction(ie_RotateImageAction_64_21_$1);
    var button_75_17_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_75_17_$1.itemId = "btn_rotate_right";
    button_75_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    var ie_RotateImageAction_78_21_$1/*: com.coremedia.cms.studio.imageeditor.actions.RotateImageAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.RotateImageAction,{});
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.imageeditor.ImageEditor','IEC_action_rotateRight_iconCls')));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_label_right));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"statusExpression" , AS3.getBindable(config,"statusValueExpression"));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"angle" , 90);
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"orientedImageDimensionsValueExpression" , AS3.getBindable(config,"orientedImageDimensionsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"variantsValueExpression" , AS3.getBindable(config,"variantsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_78_21_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    button_75_17_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.RotateImageAction(ie_RotateImageAction_78_21_$1);
    var component_89_17_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_89_17_$1.flex = 1.0;
    var button_90_17_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_90_17_$1.itemId = "rotateReset";
    button_90_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    var ie_RotateImageAction_93_21_$1/*: com.coremedia.cms.studio.imageeditor.actions.RotateImageAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.RotateImageAction,{});
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_label_reset));
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"statusExpression" , AS3.getBindable(config,"undoHistory").createResetStatusValueExpression(
                                                                      AS3.getBindable(config,"disabledValueExpression"), 'orientation'));
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"angle" , 0);
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"orientedImageDimensionsValueExpression" , AS3.getBindable(config,"orientedImageDimensionsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"variantsValueExpression" , AS3.getBindable(config,"variantsValueExpression"));
    AS3.setBindable(ie_RotateImageAction_93_21_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    button_90_17_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.RotateImageAction(ie_RotateImageAction_93_21_$1);
    container_59_13_$1.items = [button_61_17_$1, button_75_17_$1, component_89_17_$1, button_90_17_$1];
    var ui_HorizontalSpacingPlugin_105_17_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    container_59_13_$1.plugins = [ui_HorizontalSpacingPlugin_105_17_$1];
    var layout_HBox_108_17_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_108_17_$1,"align" , "stretch");
    AS3.setBindable(container_59_13_$1,"layout" , layout_HBox_108_17_$1);
    container_55_9_$1.items = [displayField_58_13_$1, container_59_13_$1];
    var layout_VBox_113_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_113_13_$1,"align" , "stretch");
    AS3.setBindable(container_55_9_$1,"layout" , layout_VBox_113_13_$1);
    var container_116_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_116_9_$1.itemId = "fine-rotation";
    var displayField_118_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_118_13_$1,"value" , this.BUNDLE$9cWI.IEC_label_align);
    var ie_ImageTransformationSlider_119_13_$1/*: com.coremedia.cms.studio.imageeditor.ImageTransformationSlider*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageTransformationSlider,{});
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"disabledValueExpression" , AS3.getBindable(config,"disabledValueExpression"));
    ie_ImageTransformationSlider_119_13_$1.itemId = "slider_rotation";
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"propertyName" , "straighten");
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"commandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_history_rotated_fine));
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"resetCommandDescription" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$9cWI.IEC_history_rotated_fine_reset));
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"minValue" , -45.0);
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"maxValue" , 45.0);
    AS3.setBindable(ie_ImageTransformationSlider_119_13_$1,"defaultValue" , 0.0);
    container_116_9_$1.items = [displayField_118_13_$1, ie_ImageTransformationSlider_119_13_$1];
    var layout_VBox_131_13_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_131_13_$1,"align" , "stretch");
    AS3.setBindable(container_116_9_$1,"layout" , layout_VBox_131_13_$1);
    menu_52_5_$1.items = [container_55_9_$1, container_116_9_$1];
    var ui_VerticalSpacingPlugin_136_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_136_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    menu_52_5_$1.plugins = [ui_VerticalSpacingPlugin_136_9_$1];
    config_$1.menu = menu_52_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9cWI(config_$1);
  }/*

    [Bindable]
    public var imageEditorViewModel:Bean;

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var orientedImageDimensionsValueExpression:ValueExpression;

    [Bindable]
    public var variantsValueExpression:ValueExpression;

    [Bindable]
    public var statusValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.rotationMenuButton",
      BUNDLE$9cWI: null,
      __initialize__$9cWI: __initialize__,
      constructor: RotationMenuButton$,
      super$9cWI: function() {
        com.coremedia.cms.studio.imageeditor.MenuButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        imageEditorViewModel: null,
        undoHistory: null,
        orientedImageDimensionsValueExpression: null,
        variantsValueExpression: null,
        statusValueExpression: null
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.menu.Menu",
        "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.MenuSkin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ImageTransformationSlider",
        "com.coremedia.cms.studio.imageeditor.actions.RotateImageAction"
      ]
    };
});
