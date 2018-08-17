Ext.define("com.coremedia.cms.editor.sdk.desktop.SaveSearchWindow", function(SaveSearchWindow) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.StatefulTextField;
import ext.form.CheckboxGroup;
import com.coremedia.ui.components.StatefulCheckbox;
import ext.form.Labelable;
import ext.button.Button;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SaveSearchWindow extends SaveSearchWindowBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.saveSearchWindow";

    public*/function SaveSearchWindow$(config/*:SaveSearchWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase,{});
    var defaults_$1/*:SaveSearchWindow*/ =AS3.cast(SaveSearchWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'saveSearchWindow_title'));
    config_$1.stateId = "saveSearchWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 350);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var ui_VerticalSpacingPlugin_29_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_29_5_$1];
    var ui_StatefulTextField_32_5_$1/*:com.coremedia.ui.components.StatefulTextField*/ =AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    ui_StatefulTextField_32_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.NEW_SEARCH_NAME_ITEM_ID);
    AS3.setBindable(ui_StatefulTextField_32_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'newSearch_textField_label')));
    ui_StatefulTextField_32_5_$1.selectOnFocus = true;
    ui_StatefulTextField_32_5_$1.anchor = "100%";
    AS3.setBindable(ui_StatefulTextField_32_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'newSearch_defaultValue_text'));
    var object_38_9_$1/*:Object*/ = {};
    object_38_9_$1.specialkey =AS3.bind( this,"handleSpecialKey");
    AS3.setBindable(ui_StatefulTextField_32_5_$1,"listeners" , object_38_9_$1);
    var checkboxGroup_41_5_$1/*:ext.form.CheckboxGroup*/ =AS3.cast(Ext.form.CheckboxGroup,{});
    AS3.setBindable(checkboxGroup_41_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'saveSearch_saveAsLabel_text')));
    checkboxGroup_41_5_$1.labelSeparator = "";
    checkboxGroup_41_5_$1.labelAlign = "top";
    checkboxGroup_41_5_$1.allowBlank = false;
    checkboxGroup_41_5_$1.blankText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.EditorErrors', 'saveSearch_noSaveOptionSelected_tooltiptext'));
    checkboxGroup_41_5_$1.msgTarget = "side";
    AS3.setBindable(checkboxGroup_41_5_$1,"layout" , "anchor");
    var ui_StatefulCheckbox_50_9_$1/*:com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    ui_StatefulCheckbox_50_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.SAVE_AS_FOLDER_ITEM_ID);
    ui_StatefulCheckbox_50_9_$1.hideLabel = true;
    AS3.setBindable(ui_StatefulCheckbox_50_9_$1,"value" , "true");
    AS3.setBindable(ui_StatefulCheckbox_50_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'saveSearch_saveAsFolderCheckbox_text')));
    var ui_StatefulCheckbox_54_9_$1/*: com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    ui_StatefulCheckbox_54_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.SAVE_AS_WIDGET_ITEM_ID);
    ui_StatefulCheckbox_54_9_$1.hideLabel = true;
    AS3.setBindable(ui_StatefulCheckbox_54_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'saveSearch_saveAsWidgetCheckbox_text')));
    checkboxGroup_41_5_$1.items = [ui_StatefulCheckbox_50_9_$1, ui_StatefulCheckbox_54_9_$1];
    config_$1.items = [ui_StatefulTextField_32_5_$1, checkboxGroup_41_5_$1];
    var labelable_61_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_61_5_$1.labelSeparator = "";
    labelable_61_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_61_5_$1['xtype'];
    delete labelable_61_5_$1['xtype'];
    delete labelable_61_5_$1['xclass'];
    config_$1.defaults = labelable_61_5_$1;
    var button_65_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.OK_BUTTON_ITEM_ID);
    button_65_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_65_5_$1,"scale" , "small");
    AS3.setBindable(button_65_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'saveSearchSubmitButton_text')));
    AS3.setBindable(button_65_5_$1,"handler" ,AS3.bind( this,"saveSearchOrWidget"));
    var button_70_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.CANCEL_BUTTON_ITEM_ID);
    button_70_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_70_5_$1,"scale" , "small");
    AS3.setBindable(button_70_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_70_5_$1,"handler" ,AS3.bind( this,"cancel"));
    config_$1.buttons = [button_65_5_$1, button_70_5_$1];
    var layout_VBox_77_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_77_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_77_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xQi1(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.saveSearchWindow",
      constructor: SaveSearchWindow$,
      super$xQi1: function() {
        com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.CheckboxGroup",
        "Ext.form.Labelable",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.SaveSearchWindowBase",
        "com.coremedia.ui.components.StatefulCheckbox",
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
