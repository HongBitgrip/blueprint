Ext.define("com.coremedia.personalization.ui.editors.RuleListPanel", function(RuleListPanel) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.DraggableItemsPlugin;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 The panel within the RuleListEditor that lists the rules. It contains a list of RulePanels.
 * /
public class RuleListPanel extends RuleListPanelBase{

    import com.coremedia.ui.bem.SeparatorBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.BEMUtils;

    public static const xtype:String = "com.coremedia.personalization.ui.config.ruleListPanel";
    public static const RULE_LIST_GROUP:String = "p13nRuleDDGroup";

    public*/function RuleListPanel$(config/*:RuleListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.RuleListPanelBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.RuleListPanelBase,{});
    var defaults_$1/*:RuleListPanel*/ =AS3.cast(RuleListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_selectionRuleList_description'));
    config_$1.header = false;
    var ui_BEMPlugin_62_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_62_5_$1,"block" , com.coremedia.ui.bem.SeparatorBEMEntities.VERTICAL_SEPARATOR_BLOCK);
    AS3.setBindable(ui_BEMPlugin_62_5_$1,"defaultElement" , com.coremedia.ui.bem.SeparatorBEMEntities.VERTICAL_SEPARATOR_ELEMENT_ITEM);
    var ui_DraggableItemsPlugin_64_5_$1/*:com.coremedia.ui.plugins.DraggableItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DraggableItemsPlugin,{});
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"ddGroup" ,net.jangaroo.ext.Exml.asString( RuleListPanel.RULE_LIST_GROUP));
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"dropHandler" ,AS3.bind( this,"onRuleDrop"));
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"hideGhostWrapper" , true);
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"itemSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.bem.SeparatorBEMEntities.VERTICAL_SEPARATOR_ELEMENT_ITEM.getCSSSelector()));
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"handleSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.BEMUtils.getBlockSelector(com.coremedia.personalization.ui.editors.RulePanel.DRAGBAR_BLOCK)));
    AS3.setBindable(ui_DraggableItemsPlugin_64_5_$1,"repairHighlightingColor" , "ignore");
    config_$1.plugins = [ui_BEMPlugin_62_5_$1, ui_DraggableItemsPlugin_64_5_$1];
    var layout_VBox_73_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_73_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_73_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6Qje(config_$1);
  }/*

    /**
     * expression referencing the bean whose property is to be edited (required)
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    /**
     name of the property containing the selection rules to be edited. The prefix 'properties.' will be appended to this name to retrieve the property value from the bean referenced by bindTo (required)
     * /
    [Bindable]
    public var propertyName:String;


    /**
     UI condition components to be used for editing rule constraints (required)
     * /
    [Bindable]
    public var conditionItems:Array;


    /**
     name of the content type that may be dropped into this box. If not set, any type is allowed
     * /
    [Bindable]
    public var allowedContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.RuleListPanelBase",
      alias: "widget.com.coremedia.personalization.ui.config.ruleListPanel",
      constructor: RuleListPanel$,
      super$6Qje: function() {
        com.coremedia.personalization.ui.editors.RuleListPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        showThumbnails: false,
        propertyName: null,
        conditionItems: null,
        allowedContentType: null
      },
      statics: {RULE_LIST_GROUP: "p13nRuleDDGroup"},
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.RuleListPanelBase",
        "com.coremedia.ui.bem.SeparatorBEMEntities",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.DraggableItemsPlugin",
        "com.coremedia.ui.util.BEMUtils",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.editors.RulePanel"]
    };
});
