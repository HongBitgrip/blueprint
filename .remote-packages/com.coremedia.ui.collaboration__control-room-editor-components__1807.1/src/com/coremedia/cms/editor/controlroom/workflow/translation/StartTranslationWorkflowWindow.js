Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow", function(StartTranslationWorkflowWindow) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField;
import com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.SwitchingContainer;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class StartTranslationWorkflowWindow extends StartTranslationWorkflowWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.startTranslationWorkflowWindow";

    public static const TARGET_SITES_GRID_PANEL_ITEM_ID:String = "targetSites";

    public static const START_BUTTON_ITEM_ID:String = "startButton";

    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelButton";

    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingContainer";

    public static const DELETE_FROM_MY_EDITED_CONTENTS_ITEM_ID:String = "deleteEditedContents";

    public*/function StartTranslationWorkflowWindow$(config/*:StartTranslationWorkflowWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase,{});
    var defaults_$1/*:StartTranslationWorkflowWindow*/ =AS3.cast(StartTranslationWorkflowWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartTranslationWorkflowWindow_title'));
    AS3.setBindable(config_$1,"width" , 430);
    AS3.setBindable(config_$1,"height" , 760);
    AS3.setBindable(config_$1,"minWidth" , 300.0);
    AS3.setBindable(config_$1,"minHeight" , 400.0);
    config_$1.stateId = "startTranslationWorfklowWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.onEsc =AS3.bind( this,"cancel");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    var editor_CollapsiblePanel_55_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_55_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_workflowNameTextField_label'));
    var collab_WorkflowNameField_58_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField,{});
    AS3.setBindable(collab_WorkflowNameField_58_9_$1,"workflowNameExpression" , this.getSubjectValueExpression());
    collab_WorkflowNameField_58_9_$1.anchor = "100%";
    var collab_ProcessDefinitionChooser_60_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser,{});
    AS3.setBindable(collab_ProcessDefinitionChooser_60_9_$1,"availableProcessDefinitions" , AS3.getBindable(config,"availableProcessDefinitionNames"));
    AS3.setBindable(collab_ProcessDefinitionChooser_60_9_$1,"selectedProcessDefinitionExpression" , this.getSelectedProcessDefinitionNamesValueExpression());
    collab_ProcessDefinitionChooser_60_9_$1.stateId = "translationWorkflowChooser";
    collab_ProcessDefinitionChooser_60_9_$1.anchor = "100%";
    editor_CollapsiblePanel_55_5_$1.items = [collab_WorkflowNameField_58_9_$1, collab_ProcessDefinitionChooser_60_9_$1];
    var ui_VerticalSpacingPlugin_66_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    editor_CollapsiblePanel_55_5_$1.plugins = [ui_VerticalSpacingPlugin_66_9_$1];
    var ui_SwitchingContainer_69_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_69_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartTranslationWorkflowWindow.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_69_5_$1,"activeItemValueExpression" , this.getSelectedProcessDefinitionNamesValueExpression());
    AS3.setBindable(ui_SwitchingContainer_69_5_$1,"layoutOnCardChange" , true);
    AS3.setBindable(ui_SwitchingContainer_69_5_$1,"minHeight" , 500.0);
    var collab_AbstractStartTranslationWorkflowPanel_74_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel,{});
    collab_AbstractStartTranslationWorkflowPanel_74_9_$1.pullTranslation = AS3.getBindable(config,"pullTranslation");
    ui_SwitchingContainer_69_5_$1["defaultType"] = collab_AbstractStartTranslationWorkflowPanel_74_9_$1['xtype'];
    delete collab_AbstractStartTranslationWorkflowPanel_74_9_$1['xtype'];
    delete collab_AbstractStartTranslationWorkflowPanel_74_9_$1['xclass'];
    ui_SwitchingContainer_69_5_$1.defaults = collab_AbstractStartTranslationWorkflowPanel_74_9_$1;
    config_$1.items = [editor_CollapsiblePanel_55_5_$1, ui_SwitchingContainer_69_5_$1];
    var button_79_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_79_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartTranslationWorkflowWindow.START_BUTTON_ITEM_ID);
    button_79_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_79_5_$1,"scale" , "small");
    AS3.setBindable(button_79_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'btn_start')));
    AS3.setBindable(button_79_5_$1,"handler" ,AS3.bind( this,"startWorkflow"));
    var ui_BindPropertyPlugin_85_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_85_9_$1.bindTo = this.getStartButtonDisabledValueExpression();
    ui_BindPropertyPlugin_85_9_$1.componentProperty = "disabled";
    button_79_5_$1.plugins = [ui_BindPropertyPlugin_85_9_$1];
    var button_89_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_89_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartTranslationWorkflowWindow.CANCEL_BUTTON_ITEM_ID);
    button_89_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_89_5_$1,"scale" , "small");
    AS3.setBindable(button_89_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_89_5_$1,"handler" ,AS3.bind( this,"cancel"));
    config_$1.buttons = [button_79_5_$1, button_89_5_$1];
    var layout_Anchor_96_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_96_5_$1);
    var ui_VerticalSpacingPlugin_99_5_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_99_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    AS3.setBindable(ui_VerticalSpacingPlugin_99_5_$1,"includeDocked" , false);
    config_$1.plugins = [ui_VerticalSpacingPlugin_99_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$89Yk(config_$1);
  }/*

    [Bindable]
    public var contents:Array;

    [Bindable]
    public var availableProcessDefinitionNames:Array;

    [Bindable]
    public var defaultWorkflowName:String;

    [Bindable]
    public var pullTranslation:Boolean;

    [Bindable]
    public var processStartedCallback:Function;

    [Bindable]
    public var processCancelledCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.startTranslationWorkflowWindow",
      constructor: StartTranslationWorkflowWindow$,
      super$89Yk: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contents: null,
        availableProcessDefinitionNames: null,
        defaultWorkflowName: null,
        pullTranslation: false,
        processStartedCallback: null,
        processCancelledCallback: null
      },
      statics: {
        TARGET_SITES_GRID_PANEL_ITEM_ID: "targetSites",
        START_BUTTON_ITEM_ID: "startButton",
        CANCEL_BUTTON_ITEM_ID: "cancelButton",
        SWITCHING_CONTAINER_ITEM_ID: "switchingContainer",
        DELETE_FROM_MY_EDITED_CONTENTS_ITEM_ID: "deleteEditedContents"
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField",
        "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel"
      ]
    };
});
