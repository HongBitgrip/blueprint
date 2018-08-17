Ext.define("com.coremedia.cms.editor.sdk.premular.IssuesWindow", function(IssuesWindow) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A window showing all issues associated with a content.
 * /
public class IssuesWindow extends IssuesWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.issuesWindow";

    public static const ERROR_ISSUES_PANEL_ITEM_ID:String = "errorIssues";

    public*/function IssuesWindow$(config/*:IssuesWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.IssuesWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.IssuesWindowBase,{});
    var defaults_$1/*:IssuesWindow*/ =AS3.cast(IssuesWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_title'));
    AS3.setBindable(config_$1,"width" , 300);
    AS3.setBindable(config_$1,"height" , 400);
    config_$1.stateId = "issuesWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.constrainHeader = true;
    config_$1.constrain = true;
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    var container_45_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_45_5_$1.anchor = "100%";
    AS3.setBindable(container_45_5_$1,"height" , 22);
    var ui_IconDisplayField_48_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_48_9_$1.itemId = "helpIcon";
    AS3.setBindable(ui_IconDisplayField_48_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    var ui_StatefulQuickTip_51_13_$1/*:com.coremedia.ui.components.StatefulQuickTip*/ =AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    ui_StatefulQuickTip_51_13_$1.text = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_tooltip');
    AS3.setBindable(ui_StatefulQuickTip_51_13_$1,"width" , 200);
    AS3.setBindable(ui_IconDisplayField_48_9_$1,"tooltip" , ui_StatefulQuickTip_51_13_$1);
    container_45_5_$1.items = [ui_IconDisplayField_48_9_$1];
    var layout_HBox_57_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_57_9_$1,"pack" , "end");
    AS3.setBindable(container_45_5_$1,"layout" , layout_HBox_57_9_$1);
    var editor_ContentIssuesPanel_60_5_$1/*: com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel,{});
    editor_ContentIssuesPanel_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( IssuesWindow.ERROR_ISSUES_PANEL_ITEM_ID);
    AS3.setBindable(editor_ContentIssuesPanel_60_5_$1,"issuesValueExpression" , this.getErrorIssuesExpression());
    AS3.setBindable(editor_ContentIssuesPanel_60_5_$1,"premularFocusManager" , AS3.getBindable(config,"premular").getPremularFocusManager());
    AS3.setBindable(editor_ContentIssuesPanel_60_5_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    AS3.setBindable(editor_ContentIssuesPanel_60_5_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_errorHeader_text')));
    AS3.setBindable(editor_ContentIssuesPanel_60_5_$1,"noIssuesMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_noError_text')));
    editor_ContentIssuesPanel_60_5_$1.onGlobalIssueClick =AS3.bind( this,"globalIssueClicked");
    var editor_ContentIssuesPanel_67_5_$1/*: com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel,{});
    editor_ContentIssuesPanel_67_5_$1.itemId = "warningIssues";
    AS3.setBindable(editor_ContentIssuesPanel_67_5_$1,"issuesValueExpression" , this.getWarnIssuesExpression());
    AS3.setBindable(editor_ContentIssuesPanel_67_5_$1,"premularFocusManager" , AS3.getBindable(config,"premular").getPremularFocusManager());
    AS3.setBindable(editor_ContentIssuesPanel_67_5_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    AS3.setBindable(editor_ContentIssuesPanel_67_5_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_warnHeader_text')));
    AS3.setBindable(editor_ContentIssuesPanel_67_5_$1,"noIssuesMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_noWarn_text')));
    editor_ContentIssuesPanel_67_5_$1.onGlobalIssueClick =AS3.bind( this,"globalIssueClicked");
    config_$1.items = [container_45_5_$1, editor_ContentIssuesPanel_60_5_$1, editor_ContentIssuesPanel_67_5_$1];
    var button_76_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_76_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_76_5_$1,"scale" , "small");
    AS3.setBindable(button_76_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCloseButton_text')));
    AS3.setBindable(button_76_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_76_5_$1];
    var layout_Anchor_82_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_82_5_$1);
    var ui_VerticalSpacingPlugin_85_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_85_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    AS3.setBindable(ui_VerticalSpacingPlugin_85_5_$1,"includeDocked" , false);
    config_$1.plugins = [ui_VerticalSpacingPlugin_85_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HbPi(config_$1);
  }/*

    /**
     * the property field registry for locating fields
     * /
    [Bindable]
    public var propertyFieldRegistry:PropertyFieldRegistry;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.IssuesWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.issuesWindow",
      constructor: IssuesWindow$,
      super$HbPi: function() {
        com.coremedia.cms.editor.sdk.premular.IssuesWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {propertyFieldRegistry: null},
      statics: {ERROR_ISSUES_PANEL_ITEM_ID: "errorIssues"},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.IssuesWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel"]
    };
});
