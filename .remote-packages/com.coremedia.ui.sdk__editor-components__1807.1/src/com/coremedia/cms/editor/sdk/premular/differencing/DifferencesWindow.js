Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindow", function(DifferencesWindow) {/*package com.coremedia.cms.editor.sdk.premular.differencing{
import com.coremedia.cms.editor.sdk.premular.differencing.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.UpdatingTemplateRenderer;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import ext.layout.container.HBoxLayout;
import com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel;
import ext.button.Button;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A window showing all issues associated with a content.
 * /
public class DifferencesWindow extends DifferencesWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.differencesWindow";

    public*/function DifferencesWindow$(config/*:DifferencesWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase,{});
    var defaults_$1/*:DifferencesWindow*/ =AS3.cast(DifferencesWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DifferencesWindow_title'));
    config_$1.stateId = "differencesWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 300);
    AS3.setBindable(config_$1,"height" , 400);
    config_$1.constrainHeader = true;
    config_$1.constrain = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    var container_43_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_43_5_$1.anchor = "100%";
    var ui_UpdatingTemplateRenderer_45_9_$1/*:com.coremedia.ui.components.UpdatingTemplateRenderer*/ =AS3.cast(com.coremedia.ui.components.UpdatingTemplateRenderer,{});
    ui_UpdatingTemplateRenderer_45_9_$1.itemId = "diffHeader";
    ui_UpdatingTemplateRenderer_45_9_$1.flex = 1.0;
    ui_UpdatingTemplateRenderer_45_9_$1.cls = "title";
    AS3.setBindable(ui_UpdatingTemplateRenderer_45_9_$1,"bindTo" , this.getHeaderDataValueExpression());
    ui_UpdatingTemplateRenderer_45_9_$1.tpl = '{message}';
    var ui_IconDisplayField_50_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_50_9_$1.itemId = "helpIcon";
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    var ui_StatefulQuickTip_53_13_$1/*:com.coremedia.ui.components.StatefulQuickTip*/ =AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    ui_StatefulQuickTip_53_13_$1.text = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DifferencesWindow_tooltip');
    AS3.setBindable(ui_StatefulQuickTip_53_13_$1,"width" , 200);
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"tooltip" , ui_StatefulQuickTip_53_13_$1);
    container_43_5_$1.items = [ui_UpdatingTemplateRenderer_45_9_$1, ui_IconDisplayField_50_9_$1];
    var layout_HBox_60_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_43_5_$1,"layout" , layout_HBox_60_9_$1);
    var editor_ContentIssuesPanel_63_5_$1/*:com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel,{});
    editor_ContentIssuesPanel_63_5_$1.itemId = "diffIssues";
    editor_ContentIssuesPanel_63_5_$1.header = false;
    AS3.setBindable(editor_ContentIssuesPanel_63_5_$1,"issuesValueExpression" , AS3.getBindable(config,"issuesExpression"));
    AS3.setBindable(editor_ContentIssuesPanel_63_5_$1,"premularFocusManager" , AS3.getBindable(config,"premular").getPremularFocusManager());
    AS3.setBindable(editor_ContentIssuesPanel_63_5_$1,"propertyFieldRegistry" , AS3.getBindable(config,"premular").getReadOnlyPropertyFieldRegistry());
    AS3.setBindable(editor_ContentIssuesPanel_63_5_$1,"noIssuesMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DifferencesWindow_noChanges_text')));
    editor_ContentIssuesPanel_63_5_$1.collapsible = false;
    AS3.setBindable(editor_ContentIssuesPanel_63_5_$1,"titlePattern" , "");
    config_$1.items = [container_43_5_$1, editor_ContentIssuesPanel_63_5_$1];
    var button_73_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_73_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_73_5_$1,"scale" , "small");
    AS3.setBindable(button_73_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCloseButton_text')));
    AS3.setBindable(button_73_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_73_5_$1];
    var layout_Anchor_79_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_79_5_$1);
    var ui_VerticalSpacingPlugin_82_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_82_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    AS3.setBindable(ui_VerticalSpacingPlugin_82_5_$1,"includeDocked" , false);
    config_$1.plugins = [ui_VerticalSpacingPlugin_82_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mDwK(config_$1);
  }/*

    /**
     * a value expression evaluating to the array of issues
     * /
    [Bindable]
    public var issuesExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.differencesWindow",
      constructor: DifferencesWindow$,
      super$mDwK: function() {
        com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {issuesExpression: null},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.components.UpdatingTemplateRenderer",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel"]
    };
});
