Ext.define("com.coremedia.personalization.ui.editors.ConditionConjunctionPanel", function(ConditionConjunctionPanel) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.button.Button;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 Represents a conjunction of conditions in the selection-rule editor.
 * /
public class ConditionConjunctionPanel extends ConditionConjunctionPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.personalization.ui.config.conditionConjunctionPanel";

    public*/function ConditionConjunctionPanel$(config/*:ConditionConjunctionPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase,{});
    var defaults_$1/*:ConditionConjunctionPanel*/ =AS3.cast(ConditionConjunctionPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.buttonAlign = "left";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DARK_100.getSkin());
    var toolbar_33_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    AS3.setBindable(toolbar_33_5_$1,"dock" , "bottom");
    toolbar_33_5_$1["focusableContainer"] = false;
    toolbar_33_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER.getSkin());
    var button_37_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_37_9_$1.itemId = "andBtn";
    button_37_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_37_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_and_icon')));
    AS3.setBindable(button_37_9_$1,"scale" , "small");
    AS3.setBindable(button_37_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_and')));
    AS3.setBindable(button_37_9_$1,"handler" ,AS3.bind( this,"addHandler"));
    toolbar_33_5_$1.items = [button_37_9_$1];
    config_$1.dockedItems = [toolbar_33_5_$1];
    var layout_VBox_47_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_47_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_47_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ks87(config_$1);
  }/*

    /*
      configuration of the ConditionFrames shown in this panel. see ConditionFrame for details
     * /
    [Bindable]
    public var conditionItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase",
      alias: "widget.com.coremedia.personalization.ui.config.conditionConjunctionPanel",
      constructor: ConditionConjunctionPanel$,
      super$ks87: function() {
        com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {conditionItems: null},
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
