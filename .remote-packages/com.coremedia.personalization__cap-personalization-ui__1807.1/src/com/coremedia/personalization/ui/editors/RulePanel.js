Ext.define("com.coremedia.personalization.ui.editors.RulePanel", function(RulePanel) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.Component;
import ext.container.Container;
import ext.button.Button;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 The panel used to present a single rule to the user.
 * /
public class RulePanel extends RulePanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.util.AriaUtils;

    public static const xtype:String = "com.coremedia.personalization.ui.config.rulePanel";
    public static const DRAGBAR_BLOCK:String = "cm-p13n-dragbar";

    public*/function RulePanel$(config/*:RulePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.RulePanelBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.RulePanelBase,{});
    var defaults_$1/*:RulePanel*/ =AS3.cast(RulePanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var ui_BindPropertyPlugin_64_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_64_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_64_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('readOnly');
    var ui_VerticalSpacingPlugin_66_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_BindPropertyPlugin_64_5_$1, ui_VerticalSpacingPlugin_66_5_$1];
    var box_69_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_69_5_$1.itemId = "dragbar";
    box_69_5_$1.cls =net.jangaroo.ext.Exml.asString( RulePanel.DRAGBAR_BLOCK);
    var pui_RuleContentField_70_5_$1/*: com.coremedia.personalization.ui.editors.RuleContentField*/ =AS3.cast(com.coremedia.personalization.ui.editors.RuleContentField,{});
    AS3.setBindable(pui_RuleContentField_70_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pui_RuleContentField_70_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentPropertyName")));
    AS3.setBindable(pui_RuleContentField_70_5_$1,"showThumbnails" , AS3.getBindable(config,"showThumbnails"));
    AS3.setBindable(pui_RuleContentField_70_5_$1,"allowedContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"allowedContentType")));
    var container_74_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_74_5_$1.itemId = "controls";
    AS3.setBindable(container_74_5_$1,"height" , 25);
    AS3.setBindable(container_74_5_$1,"layout" , "hbox");
    var button_78_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_78_9_$1.itemId = "collapseButton";
    AS3.setBindable(button_78_9_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT));
    button_78_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    var component_81_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_81_9_$1.flex = 1.0;
    AS3.setBindable(component_81_9_$1,"height" , 25);
    var button_84_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_84_9_$1.itemId = "deleteButton";
    button_84_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LINK.getSkin());
    AS3.setBindable(button_84_9_$1,"handler" , AS3.getBindable(config,"deleteHandler"));
    AS3.setBindable(button_84_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_deleteRule')));
    var ui_BindPropertyPlugin_89_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_89_13_$1.componentProperty = "hidden";
    ui_BindPropertyPlugin_89_13_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('readOnly');
    button_84_9_$1.plugins = [ui_BindPropertyPlugin_89_13_$1];
    container_74_5_$1.items = [button_78_9_$1, component_81_9_$1, button_84_9_$1];
    var pui_ConditionsPanel_95_5_$1/*: com.coremedia.personalization.ui.editors.ConditionsPanel*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionsPanel,{});
    pui_ConditionsPanel_95_5_$1.itemId = "conditionsPanel";
    AS3.setBindable(pui_ConditionsPanel_95_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pui_ConditionsPanel_95_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"conditionsPropertyName")));
    AS3.setBindable(pui_ConditionsPanel_95_5_$1,"conditionItems" , AS3.getBindable(config,"conditionItems"));
    AS3.setBindable(pui_ConditionsPanel_95_5_$1,"deleteHandler" , AS3.getBindable(config,"deleteHandler"));
    AS3.setBindable(pui_ConditionsPanel_95_5_$1,"collapsed" , true);
    pui_ConditionsPanel_95_5_$1.header = false;
    config_$1.items = [box_69_5_$1, pui_RuleContentField_70_5_$1, container_74_5_$1, pui_ConditionsPanel_95_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fffc(config_$1);
  }/*

    /**
     * a property path expression leading to the bean that represents the a rule
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    /** the name of the property containing the content bean associated with the rule * /
    [Bindable]
    public var contentPropertyName:String;


    /** the name of the property containing the conditions of the rule * /
    [Bindable]
    public var conditionsPropertyName:String;


    /** definitions of the condition components to be made available in the editor * /
    [Bindable]
    public var conditionItems:Array;


    /** the handler to be called when the 'Delete Rule' button is pressed. The single argument
   supplied to the handle is a pointer to this panel.
     * /
    [Bindable]
    public var deleteHandler:Function;


    /**
     Name of the content type any content object dropped into the editor must be an instance of. If this attribute
     is not set, any content object may be dropped into the editor.
     * /
    [Bindable]
    public var allowedContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.RulePanelBase",
      alias: "widget.com.coremedia.personalization.ui.config.rulePanel",
      constructor: RulePanel$,
      super$fffc: function() {
        com.coremedia.personalization.ui.editors.RulePanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        showThumbnails: false,
        contentPropertyName: null,
        conditionsPropertyName: null,
        conditionItems: null,
        deleteHandler: null,
        allowedContentType: null
      },
      statics: {DRAGBAR_BLOCK: "cm-p13n-dragbar"},
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.RulePanelBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.util.AriaUtils",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.ConditionsPanel",
        "com.coremedia.personalization.ui.editors.RuleContentField"
      ]
    };
});
