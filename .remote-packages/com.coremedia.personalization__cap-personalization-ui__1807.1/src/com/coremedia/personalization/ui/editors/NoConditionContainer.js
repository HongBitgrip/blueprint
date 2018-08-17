Ext.define("com.coremedia.personalization.ui.editors.NoConditionContainer", function(NoConditionContainer) {/*package com.coremedia.personalization.ui.editors{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.Component;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The component shown in a RulePanel if the represented rule doesn't contain any conditions.
 * /
public class NoConditionContainer extends Container{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.personalization.ui.config.noConditionContainer";

    public*/function NoConditionContainer$(config/*:NoConditionContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:NoConditionContainer*/ =AS3.cast(NoConditionContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    var displayField_35_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_35_5_$1,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_noRulesAvailable'));
    var container_37_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_37_5_$1,"layout" , "border");
    AS3.setBindable(container_37_5_$1,"height" , 30);
    var button_40_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_40_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_40_9_$1,"region" , "west");
    AS3.setBindable(button_40_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'add')));
    AS3.setBindable(button_40_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_addCondition')));
    AS3.setBindable(button_40_9_$1,"handler" , AS3.getBindable(config,"addHandler"));
    var ui_BindPropertyPlugin_46_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_46_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_46_13_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('readOnly');
    button_40_9_$1.plugins = [ui_BindPropertyPlugin_46_13_$1];
    var component_50_9_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_50_9_$1,"region" , "center");
    AS3.setBindable(component_50_9_$1,"height" , 30);
    var button_53_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_53_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_53_9_$1,"region" , "east");
    AS3.setBindable(button_53_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_deleteRule')));
    AS3.setBindable(button_53_9_$1,"handler" , AS3.getBindable(config,"deleteHandler"));
    AS3.setBindable(button_53_9_$1,"hidden" , AS3.getBindable(config,"deleteHandler") == null);
    var ui_BindPropertyPlugin_59_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_59_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_59_13_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('readOnly');
    button_53_9_$1.plugins = [ui_BindPropertyPlugin_59_13_$1];
    container_37_5_$1.items = [button_40_9_$1, component_50_9_$1, button_53_9_$1];
    config_$1.items = [displayField_35_5_$1, container_37_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$DYI9(config_$1);
  }/*

    /** a property path expression leading to the Bean that represent the selection rule * /
    [Bindable]
    public var bindTo:Object;


    /** the handler to be associated with the 'Add Condition' button * /
    [Bindable]
    public var addHandler:Function;


    /** the handler to be associated with the 'Delete Rule' button * /
    [Bindable]
    public var deleteHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.noConditionContainer",
      constructor: NoConditionContainer$,
      super$DYI9: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        addHandler: null,
        deleteHandler: null
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
