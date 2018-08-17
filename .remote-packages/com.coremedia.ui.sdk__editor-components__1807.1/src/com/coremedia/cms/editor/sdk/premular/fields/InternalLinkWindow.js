Ext.define("com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindow", function(InternalLinkWindow) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.ui.ckeditor.LinkTypeCombo;
import com.coremedia.ui.exml.ValueExpression;
import ext.view.BoundListView;
import ext.button.Button;
import ext.form.FieldContainer;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
/**
 A menu that allows the editing of an internal link in a CKEditor.
 * /
public class InternalLinkWindow extends InternalLinkWindowBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.WindowSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.internalLinkWindow";

    public static const TARGET_ITEM_ID:String = "target";

    public*/function InternalLinkWindow$(config/*:InternalLinkWindow = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase,{});
    var defaults_$1/*:InternalLinkWindow*/ =AS3.cast(InternalLinkWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"closable" , false);
    config_$1.header = false;
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_LIGHT.getSkin());
    var ui_AdvancedFieldContainer_37_5_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    AS3.setBindable(ui_AdvancedFieldContainer_37_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuName')));
    AS3.setBindable(ui_AdvancedFieldContainer_37_5_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(InternalLinkWindow.TARGET_ITEM_ID).build()));
    var editor_SingleLinkField_40_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField,{});
    editor_SingleLinkField_40_9_$1.itemId =net.jangaroo.ext.Exml.asString( InternalLinkWindow.TARGET_ITEM_ID);
    editor_SingleLinkField_40_9_$1.flex = 1.0;
    editor_SingleLinkField_40_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME.getSkin());
    AS3.setBindable(editor_SingleLinkField_40_9_$1,"valueExpression" , this.getContentVE());
    var ui_IconButton_45_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_45_9_$1.itemId = "removeLinkItemButton";
    AS3.setBindable(ui_IconButton_45_9_$1,"handler" ,AS3.bind( this,"unlink"));
    AS3.setBindable(ui_IconButton_45_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'unlink_text')));
    AS3.setBindable(ui_IconButton_45_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove')));
    var ui_BindPropertyPlugin_50_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_50_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_50_13_$1.transformer =AS3.bind( this,"enabledTransformer");
    ui_BindPropertyPlugin_50_13_$1.bindTo = this.getContentVE();
    ui_IconButton_45_9_$1.plugins = [ui_BindPropertyPlugin_50_13_$1];
    ui_AdvancedFieldContainer_37_5_$1.items = [editor_SingleLinkField_40_9_$1, ui_IconButton_45_9_$1];
    var ui_HorizontalSpacingPlugin_58_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    ui_AdvancedFieldContainer_37_5_$1.plugins = [ui_HorizontalSpacingPlugin_58_9_$1];
    var ui_AdvancedFieldContainer_61_5_$1/*: com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    AS3.setBindable(ui_AdvancedFieldContainer_61_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'targetType')));
    var ui_LinkTypeCombo_63_9_$1/*:com.coremedia.ui.ckeditor.LinkTypeCombo*/ =AS3.cast(com.coremedia.ui.ckeditor.LinkTypeCombo,{});
    ui_LinkTypeCombo_63_9_$1.name = "target.type";
    ui_LinkTypeCombo_63_9_$1.flex = 1.0;
    var ui_BindPropertyPlugin_66_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_66_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_66_13_$1.componentEvent = "change";
    ui_BindPropertyPlugin_66_13_$1.skipIfUndefined = true;
    var ui_ValueExpression_70_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_70_17_$1,"expression" , "type");
    AS3.setBindable(ui_ValueExpression_70_17_$1,"context" , this.getModel());
    ui_BindPropertyPlugin_66_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_70_17_$1);
    var ui_BindPropertyPlugin_74_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_74_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_74_13_$1.transformer =AS3.bind( this,"enabledTransformer");
    ui_BindPropertyPlugin_74_13_$1.bindTo = this.getContentVE();
    ui_LinkTypeCombo_63_9_$1.plugins = [ui_BindPropertyPlugin_66_13_$1, ui_BindPropertyPlugin_74_13_$1];
    var boundList_80_13_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_80_13_$1,"minWidth" , 200.0);
    ui_LinkTypeCombo_63_9_$1.listConfig = boundList_80_13_$1;
    var ui_IconButton_83_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_83_9_$1,"scale" , "small");
    ui_IconButton_83_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_83_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconButton_83_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuBtnTooltip')));
    AS3.setBindable(ui_IconButton_83_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuBtnTooltip'));
    AS3.setBindable(ui_IconButton_83_9_$1,"margin" , "0 0 0 24");
    var button_89_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_89_9_$1.itemId = "internalLinkSubmitButton";
    button_89_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    AS3.setBindable(button_89_9_$1,"scale" , "small");
    AS3.setBindable(button_89_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuSubmitBtn')));
    AS3.setBindable(button_89_9_$1,"handler" , function()/*:void*/ {this$.hide();});
    ui_AdvancedFieldContainer_61_5_$1.items = [ui_LinkTypeCombo_63_9_$1, ui_IconButton_83_9_$1, button_89_9_$1];
    config_$1.items = [ui_AdvancedFieldContainer_37_5_$1, ui_AdvancedFieldContainer_61_5_$1];
    var fieldContainer_98_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_98_5_$1,"layout" , "hbox");
    fieldContainer_98_5_$1.labelAlign = "top";
    fieldContainer_98_5_$1.labelSeparator = "";
    config_$1["defaultType"] = fieldContainer_98_5_$1['xtype'];
    delete fieldContainer_98_5_$1['xtype'];
    delete fieldContainer_98_5_$1['xclass'];
    config_$1.defaults = fieldContainer_98_5_$1;
    var ui_VerticalSpacingPlugin_103_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_103_5_$1];
    var layout_Anchor_106_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_106_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GM3Q(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.internalLinkWindow",
      constructor: InternalLinkWindow$,
      super$GM3Q: function() {
        com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase.prototype.constructor.apply(this, arguments);
      },
      statics: {TARGET_ITEM_ID: "target"},
      requires: [
        "Ext.button.Button",
        "Ext.form.FieldContainer",
        "Ext.layout.container.Anchor",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.LinkTypeCombo",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField"]
    };
});
