Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialog", function(QuickCreateDialog) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.blueprint.base.components.quickcreate.*;
import net.jangaroo.ext.Exml;
import ext.panel.Panel;
import ext.layout.container.VBoxLayout;
import ext.form.Labelable;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class QuickCreateDialog extends QuickCreateDialogBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.quickCreateDialog";

    public*/function QuickCreateDialog$(config/*:QuickCreateDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase,{});
    var defaults_$1/*:QuickCreateDialog*/ =AS3.cast(QuickCreateDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.createTitle(AS3.getBindable(config,"contentType"), AS3.getBindable(config,"contentTypeExpression")));
    AS3.setBindable(config_$1,"width" , 430);
    AS3.setBindable(config_$1,"minWidth" , 430.0);
    config_$1.modal = false;
    config_$1.collapsible = false;
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"x" , 113.0);
    AS3.setBindable(config_$1,"y" , 84.0);
    config_$1.resizable = true;
    config_$1.draggable = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var panel_33_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_33_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase.EDITOR_CONTAINER_ITEM_ID);
    panel_33_5_$1.items = [];
    var layout_VBox_37_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_37_9_$1,"align" , "stretch");
    AS3.setBindable(panel_33_5_$1,"layout" , layout_VBox_37_9_$1);
    var labelable_40_9_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_40_9_$1.labelSeparator = "";
    labelable_40_9_$1.labelAlign = "top";
    panel_33_5_$1["defaultType"] = labelable_40_9_$1['xtype'];
    delete labelable_40_9_$1['xtype'];
    delete labelable_40_9_$1['xclass'];
    panel_33_5_$1.defaults = labelable_40_9_$1;
    var ui_VerticalSpacingPlugin_44_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    panel_33_5_$1.plugins = [ui_VerticalSpacingPlugin_44_9_$1];
    config_$1.items = [panel_33_5_$1];
    var layout_VBox_49_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_49_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_49_5_$1);
    var button_52_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_52_5_$1.itemId = "createBtn";
    button_52_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_52_5_$1,"scale" , "small");
    AS3.setBindable(button_52_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CreateFolder_dialog_ok_button')));
    AS3.setBindable(button_52_5_$1,"handler" ,AS3.bind( this,"handleSubmit"));
    var ui_BindPropertyPlugin_58_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_58_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_58_9_$1.bindTo = this.getDisabledExpression();
    button_52_5_$1.plugins = [ui_BindPropertyPlugin_58_9_$1];
    var button_62_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_62_5_$1.itemId = "cancelBtn";
    button_62_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_62_5_$1,"scale" , "small");
    AS3.setBindable(button_62_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_62_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_52_5_$1, button_62_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zYjW(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.quickCreateDialog",
      constructor: QuickCreateDialog$,
      super$zYjW: function() {
        com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.Labelable",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
