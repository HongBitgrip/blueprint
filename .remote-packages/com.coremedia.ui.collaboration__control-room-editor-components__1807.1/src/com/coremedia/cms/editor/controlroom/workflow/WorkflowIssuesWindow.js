Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow", function(WorkflowIssuesWindow) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class WorkflowIssuesWindow extends WorkflowIssuesWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowIssuesWindow";

    public static const ERROR_ISSUES_PANEL_ITEM_ID:String = "errorIssues";

    public static const WARNING_ISSUES_PANEL_ITEM_ID:String = "warningIssues";

    public*/function WorkflowIssuesWindow$(config/*:WorkflowIssuesWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase,{});
    var defaults_$1/*:WorkflowIssuesWindow*/ =AS3.cast(WorkflowIssuesWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_title'));
    config_$1.stateId = "workflowIssuesWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 300);
    AS3.setBindable(config_$1,"height" , 400);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    var container_36_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_36_5_$1.anchor = "100%";
    AS3.setBindable(container_36_5_$1,"height" , 22);
    var ui_IconDisplayField_39_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_39_9_$1.itemId = "helpIcon";
    AS3.setBindable(ui_IconDisplayField_39_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    var ui_StatefulQuickTip_42_13_$1/*:com.coremedia.ui.components.StatefulQuickTip*/ =AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    ui_StatefulQuickTip_42_13_$1.text = this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_tooltip');
    AS3.setBindable(ui_StatefulQuickTip_42_13_$1,"width" , 200);
    AS3.setBindable(ui_IconDisplayField_39_9_$1,"tooltip" , ui_StatefulQuickTip_42_13_$1);
    container_36_5_$1.items = [ui_IconDisplayField_39_9_$1];
    var layout_HBox_49_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_49_9_$1,"pack" , "end");
    AS3.setBindable(container_36_5_$1,"layout" , layout_HBox_49_9_$1);
    var local_WorkflowIssuesPanel_52_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel,{});
    local_WorkflowIssuesPanel_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowIssuesWindow.ERROR_ISSUES_PANEL_ITEM_ID);
    AS3.setBindable(local_WorkflowIssuesPanel_52_5_$1,"bindTo" , this.getErrorIssueModelsExpression());
    AS3.setBindable(local_WorkflowIssuesPanel_52_5_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_errorHeader_text')));
    AS3.setBindable(local_WorkflowIssuesPanel_52_5_$1,"noIssuesMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_noError_text')));
    AS3.setBindable(local_WorkflowIssuesPanel_52_5_$1,"store" , this.getErrorIssuesStore());
    AS3.setBindable(local_WorkflowIssuesPanel_52_5_$1,"cmOwnerCt" , AS3.getBindable(config,"cmOwnerCt"));
    var local_WorkflowIssuesPanel_58_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel,{});
    local_WorkflowIssuesPanel_58_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowIssuesWindow.WARNING_ISSUES_PANEL_ITEM_ID);
    AS3.setBindable(local_WorkflowIssuesPanel_58_5_$1,"bindTo" , this.getWarnIssueModelsExpression());
    AS3.setBindable(local_WorkflowIssuesPanel_58_5_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_warnHeader_text')));
    AS3.setBindable(local_WorkflowIssuesPanel_58_5_$1,"noIssuesMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_noWarn_text')));
    AS3.setBindable(local_WorkflowIssuesPanel_58_5_$1,"store" , this.getWarnIssuesStore());
    AS3.setBindable(local_WorkflowIssuesPanel_58_5_$1,"cmOwnerCt" , AS3.getBindable(config,"cmOwnerCt"));
    config_$1.items = [container_36_5_$1, local_WorkflowIssuesPanel_52_5_$1, local_WorkflowIssuesPanel_58_5_$1];
    var button_66_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_66_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_66_5_$1,"scale" , "small");
    AS3.setBindable(button_66_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowInfoWindow_closeButton_label')));
    AS3.setBindable(button_66_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_66_5_$1];
    var layout_Anchor_72_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_72_5_$1);
    var ui_VerticalSpacingPlugin_75_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_75_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    AS3.setBindable(ui_VerticalSpacingPlugin_75_5_$1,"includeDocked" , false);
    config_$1.plugins = [ui_VerticalSpacingPlugin_75_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KEDS(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowIssuesWindow",
      constructor: WorkflowIssuesWindow$,
      super$KEDS: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ERROR_ISSUES_PANEL_ITEM_ID: "errorIssues",
        WARNING_ISSUES_PANEL_ITEM_ID: "warningIssues"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel"]
    };
});
