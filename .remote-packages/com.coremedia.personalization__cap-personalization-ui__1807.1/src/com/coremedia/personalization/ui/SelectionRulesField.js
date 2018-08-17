Ext.define("com.coremedia.personalization.ui.SelectionRulesField", function(SelectionRulesField) {/*package com.coremedia.personalization.ui{
import com.coremedia.personalization.ui.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import ext.container.Container;
import ext.button.Button;
import com.coremedia.personalization.ui.editors.RuleListEditor;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class SelectionRulesField extends SelectionRulesFieldBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.personalization.ui.config.selectionRulesField";

    public static const RULE_LIST_EDITOR_ITEM_ID:String = "ruleListEditor";

    public*/function SelectionRulesField$(config/*:SelectionRulesField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.SelectionRulesFieldBase*/ =AS3.cast(com.coremedia.personalization.ui.SelectionRulesFieldBase,{});
    var defaults_$1/*:SelectionRulesField*/ =AS3.cast(SelectionRulesField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(SelectionRulesField.RULE_LIST_EDITOR_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_63_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_63_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyLabelPlugin_63_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var ui_BindBlobPropertyPlugin_65_5_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_65_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_63_5_$1, ui_BindBlobPropertyPlugin_65_5_$1];
    var container_68_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_68_5_$1.itemId = "buttons";
    AS3.setBindable(container_68_5_$1,"height" , 26);
    var button_71_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_71_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.SelectionRulesFieldBase.EXPAND_ALL_BUTTON_ITEM_ID);
    button_71_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LINK.getSkin());
    AS3.setBindable(button_71_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_expandAllButton')));
    AS3.setBindable(button_71_9_$1,"handler" ,AS3.bind( this,"expandConditionPanels"));
    var button_75_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_75_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.SelectionRulesFieldBase.COLLAPSE_ALL_BUTTON_ITEM_ID);
    button_75_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LINK.getSkin());
    AS3.setBindable(button_75_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_collapseAllButton')));
    AS3.setBindable(button_75_9_$1,"handler" ,AS3.bind( this,"collapseConditionPanels"));
    container_68_5_$1.items = [button_71_9_$1, button_75_9_$1];
    var perso_RuleListEditor_81_5_$1/*:com.coremedia.personalization.ui.editors.RuleListEditor*/ =AS3.cast(com.coremedia.personalization.ui.editors.RuleListEditor,{});
    perso_RuleListEditor_81_5_$1.itemId =net.jangaroo.ext.Exml.asString( SelectionRulesField.RULE_LIST_EDITOR_ITEM_ID);
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"allowedContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"allowedContentType")));
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"showThumbnails" , AS3.getBindable(config,"showThumbnails"));
    AS3.setBindable(perso_RuleListEditor_81_5_$1,"conditionItems" , this.getConditionItems());
    config_$1.items = [container_68_5_$1, perso_RuleListEditor_81_5_$1];
    var layout_Anchor_90_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_90_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ql2r(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
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

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /**
     Name of the content type any content object dropped into the editor must be an instance of. If this attribute
     is not set, any content object may be dropped into the editor.
     * /
    [Bindable]
    public var allowedContentType:String;


    /**
     Definitions of the different conditions types and their mapping to context properties.
     * /
    [Bindable]
    public var conditionItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.SelectionRulesFieldBase",
      alias: "widget.com.coremedia.personalization.ui.config.selectionRulesField",
      constructor: SelectionRulesField$,
      super$ql2r: function() {
        com.coremedia.personalization.ui.SelectionRulesFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        showThumbnails: false,
        propertyName: null,
        allowedContentType: null,
        conditionItems: null
      },
      statics: {RULE_LIST_EDITOR_ITEM_ID: "ruleListEditor"},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.SelectionRulesFieldBase",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.editors.RuleListEditor"]
    };
});
