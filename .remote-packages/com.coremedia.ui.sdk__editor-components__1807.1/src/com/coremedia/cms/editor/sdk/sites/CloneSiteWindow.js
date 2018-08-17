Ext.define("com.coremedia.cms.editor.sdk.sites.CloneSiteWindow", function(CloneSiteWindow) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox;
import com.coremedia.ui.components.StatefulTextField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.StatefulCheckbox;
import ext.form.field.BaseField;
import ext.button.Button;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class CloneSiteWindow extends CloneSiteWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.cloneSiteWindow";

    public*/function CloneSiteWindow$(config/*:CloneSiteWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase,{});
    var defaults_$1/*:CloneSiteWindow*/ =AS3.cast(CloneSiteWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_cloneSite_text'));
    config_$1.stateId = "cloneSiteWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 300);
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"x" , 600.0);
    AS3.setBindable(config_$1,"y" , 200.0);
    config_$1.resizable = false;
    config_$1.draggable = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var editor_AvailableLocalesComboBox_46_5_$1/*:com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox*/ =AS3.cast(com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox,{});
    editor_AvailableLocalesComboBox_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.LOCALE_FIELD);
    AS3.setBindable(editor_AvailableLocalesComboBox_46_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_locale_field')));
    AS3.setBindable(editor_AvailableLocalesComboBox_46_5_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.getModel()));
    AS3.setBindable(editor_AvailableLocalesComboBox_46_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.MODEL_LOCALE));
    var ui_StatefulTextField_50_5_$1/*:com.coremedia.ui.components.StatefulTextField*/ =AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    ui_StatefulTextField_50_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.URI_SEGMENT_FIELD);
    AS3.setBindable(ui_StatefulTextField_50_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_uriSegment_field')));
    var object_53_9_$1/*:Object*/ = {};
    object_53_9_$1.specialkey =AS3.bind( this,"keyPressed");
    AS3.setBindable(ui_StatefulTextField_50_5_$1,"listeners" , object_53_9_$1);
    var ui_BindPropertyPlugin_56_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_56_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_56_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.MODEL_URI_SEGMENT, this.getModel());
    ui_StatefulTextField_50_5_$1.plugins = [ui_BindPropertyPlugin_56_9_$1];
    var ui_StatefulTextField_60_5_$1/*: com.coremedia.ui.components.StatefulTextField*/ =AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    ui_StatefulTextField_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.SITE_MANAGER_GROUP_FIELD);
    AS3.setBindable(ui_StatefulTextField_60_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_siteManagerGroup_field')));
    var object_63_9_$1/*:Object*/ = {};
    object_63_9_$1.specialkey =AS3.bind( this,"keyPressed");
    AS3.setBindable(ui_StatefulTextField_60_5_$1,"listeners" , object_63_9_$1);
    var ui_BindPropertyPlugin_66_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_66_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_66_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.MODEL_SITE_MANAGER_GROUP, this.getModel());
    ui_StatefulTextField_60_5_$1.plugins = [ui_BindPropertyPlugin_66_9_$1];
    var ui_StatefulCheckbox_70_5_$1/*:com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    ui_StatefulCheckbox_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.SITE_IN_SYNC_WITH_MASTER_FIELD);
    AS3.setBindable(ui_StatefulCheckbox_70_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_siteInSyncWithMaster_field')));
    AS3.setBindable(ui_StatefulCheckbox_70_5_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_siteInSyncWithMaster_boxlabel')));
    var object_74_9_$1/*:Object*/ = {};
    object_74_9_$1.specialkey =AS3.bind( this,"keyPressed");
    AS3.setBindable(ui_StatefulCheckbox_70_5_$1,"listeners" , object_74_9_$1);
    var ui_BindPropertyPlugin_77_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_77_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_77_9_$1.reverseTransformer = function (checked/*:Boolean*/)/*:String*/ {return checked ? 'SYNC' : null;};
    ui_BindPropertyPlugin_77_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.TRANSLATION_STRATEGY, this.getModel());
    ui_StatefulCheckbox_70_5_$1.plugins = [ui_BindPropertyPlugin_77_9_$1];
    config_$1.items = [editor_AvailableLocalesComboBox_46_5_$1, ui_StatefulTextField_50_5_$1, ui_StatefulTextField_60_5_$1, ui_StatefulCheckbox_70_5_$1];
    var field_84_5_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    field_84_5_$1.labelAlign = "top";
    field_84_5_$1.labelSeparator = "";
    config_$1["defaultType"] = field_84_5_$1['xtype'];
    delete field_84_5_$1['xtype'];
    delete field_84_5_$1['xclass'];
    config_$1.defaults = field_84_5_$1;
    var button_88_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_88_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.OK_BUTTON);
    button_88_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_88_5_$1,"scale" , "small");
    AS3.setBindable(button_88_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_ok_button')));
    AS3.setBindable(button_88_5_$1,"handler" ,AS3.bind( this,"deriveSite"));
    var ui_BindPropertyPlugin_94_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_94_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_94_9_$1.bindTo = this.getDisabledExpression();
    button_88_5_$1.plugins = [ui_BindPropertyPlugin_94_9_$1];
    var button_98_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_98_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.CANCEL_BUTTON);
    button_98_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_98_5_$1,"scale" , "small");
    AS3.setBindable(button_98_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_cancel_button')));
    AS3.setBindable(button_98_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_88_5_$1, button_98_5_$1];
    var layout_VBox_105_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_105_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_105_5_$1);
    var ui_VerticalSpacingPlugin_108_7_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_108_7_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_108_7_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uuGO(config_$1);
  }/*

    /** the sites service to use * /
    [Bindable]
    public var sitesService:com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl;


    /**
     The id of the site of which the clone should be made.
     * /
    [Bindable]
    public var siteId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.cloneSiteWindow",
      constructor: CloneSiteWindow$,
      super$uuGO: function() {
        com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        sitesService: null,
        siteId: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Base",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.StatefulCheckbox",
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox"]
    };
});
