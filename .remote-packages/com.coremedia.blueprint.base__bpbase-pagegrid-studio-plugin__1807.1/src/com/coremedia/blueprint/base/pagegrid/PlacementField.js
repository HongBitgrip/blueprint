Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementField", function(PlacementField) {/*package com.coremedia.blueprint.base.pagegrid{
import com.coremedia.blueprint.base.pagegrid.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.SwitchingContainer;
import ext.Component;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.toolbar.Separator;
import com.coremedia.ui.components.IconButton;
import com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;

    [ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PlacementField extends PlacementFieldBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cap.content.ContentPropertyNames;
    import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
    import com.coremedia.ui.data.TreeRelation;

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.placementField";

    public static const LINK_LINK_PROPERTY_FIELD_ITEM_ID:String = "linkListPropertyField";

    public static const INHERIT_BUTTON_ITEM_ID:String = "inheritButton";

    public static const LOCK_BUTTON_ITEM_ID:String = "lockButton";

    public static const VIEWTYPE_SELECTOR_ITEM_ID:String = "viewtypeSelector";

    public*/function PlacementField$(config/*:PlacementField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementFieldBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementFieldBase,{});
    var defaults_$1/*:PlacementField*/ =AS3.cast(PlacementField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , "loading...");
    config_$1.itemId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"section").getName());
    var ui_BindPropertyPlugin_114_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_114_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_114_5_$1.bindTo = com.coremedia.blueprint.base.pagegrid.PlacementFieldBase.createLocalizedSectionValueExpression(config);
    var ui_BindPropertyPlugin_116_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_116_5_$1.componentProperty = "ariaLabel";
    ui_BindPropertyPlugin_116_5_$1.bindTo = com.coremedia.blueprint.base.pagegrid.PlacementFieldBase.createLocalizedSectionValueExpression(config);
    config_$1.plugins = [ui_BindPropertyPlugin_114_5_$1, ui_BindPropertyPlugin_116_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_120_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_120_5_$1.itemId = "inheritOrLockedContainer";
    var layout_HBox_122_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_120_5_$1,"layout" , layout_HBox_122_9_$1);
    var ui_SwitchingContainer_125_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_125_9_$1,"activeItemValueExpression" , this.createInheritStateValueExpression(config));
    var component_127_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    ui_SwitchingContainer_125_9_$1["defaultType"] = component_127_13_$1['xtype'];
    delete component_127_13_$1['xtype'];
    delete component_127_13_$1['xclass'];
    ui_SwitchingContainer_125_9_$1.defaults = component_127_13_$1;
    var pm_PlacementInheritStateButton_130_13_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton,{});
    pm_PlacementInheritStateButton_130_13_$1.itemId = "inherited";
    AS3.setBindable(pm_PlacementInheritStateButton_130_13_$1,"height" , 50);
    AS3.setBindable(pm_PlacementInheritStateButton_130_13_$1,"storingContentValueExpression" , this.getStoringContentValueExpression(config));
    AS3.setBindable(pm_PlacementInheritStateButton_130_13_$1,"labelIconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'InheritPlacementAction_icon')));
    AS3.setBindable(pm_PlacementInheritStateButton_130_13_$1,"label" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PlacementState_inheritedFrom_text')));
    var pm_PlacementInheritStateButton_135_13_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton,{});
    pm_PlacementInheritStateButton_135_13_$1.itemId = "locked";
    AS3.setBindable(pm_PlacementInheritStateButton_135_13_$1,"height" , 50);
    AS3.setBindable(pm_PlacementInheritStateButton_135_13_$1,"storingContentValueExpression" , this.getStoringContentValueExpression(config));
    AS3.setBindable(pm_PlacementInheritStateButton_135_13_$1,"labelIconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'LockPlacementAction_icon')));
    AS3.setBindable(pm_PlacementInheritStateButton_135_13_$1,"label" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PlacementState_lockedBy_text')));
    var ui_IconDisplayField_140_13_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_140_13_$1.itemId = "missing";
    ui_IconDisplayField_140_13_$1.tooltipOnValue = true;
    AS3.setBindable(ui_IconDisplayField_140_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'inherit')));
    AS3.setBindable(ui_IconDisplayField_140_13_$1,"value" , this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PlacementState_missing_text'));
    AS3.setBindable(ui_IconDisplayField_140_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PlacementState_missing_text_tooltip'));
    var container_145_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_145_13_$1,"hidden" , true);
    container_145_13_$1.itemId = "hidden";
    ui_SwitchingContainer_125_9_$1.lazyItems = [pm_PlacementInheritStateButton_130_13_$1, pm_PlacementInheritStateButton_135_13_$1, ui_IconDisplayField_140_13_$1, container_145_13_$1];
    container_120_5_$1.items = [ui_SwitchingContainer_125_9_$1];
    var pm_PlacementLinkListPropertyField_151_5_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyField*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyField,{});
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"propertyFieldName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName")));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"structPropertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"structPropertyName")));
    pm_PlacementLinkListPropertyField_151_5_$1.fallbackPropertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fallbackPropertyName") ? AS3.getBindable(config,"fallbackPropertyName") : undefined);
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"fallbackPropertyFieldName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fallbackPropertyFieldName")));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"pageTreeRelation" , AS3.getBindable(config,"pageTreeRelation"));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"section" , AS3.getBindable(config,"section"));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"bindTo" , this.getStoringContentValueExpression(config));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"forceReadOnlyValueExpression" , this.getReadOnlyValueExpression());
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"columns" , AS3.getBindable(config,"columns"));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"fields" , AS3.getBindable(config,"fields"));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(pm_PlacementLinkListPropertyField_151_5_$1,"rowWidgetItems" , AS3.getBindable(config,"rowWidgetItems"));
    var ui_AddItemsPlugin_166_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    AS3.setBindable(ui_AddItemsPlugin_166_9_$1,"recursive" , true);
    var tbSeparator_168_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_169_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_169_13_$1.itemId =net.jangaroo.ext.Exml.asString( PlacementField.INHERIT_BUTTON_ITEM_ID);
    ui_IconButton_169_13_$1.enableToggle = true;
    var pm_InheritPlacementAction_172_17_$1/*:com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction,{});
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"bindTo" , AS3.getBindable(config,"bindTo","DUMMY"));
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"storingContentValueExpression" , this.getStoringContentValueExpression(config));
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"pageTreeRelation" , AS3.getBindable(config,"pageTreeRelation"));
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"section" , AS3.getBindable(config,"section"));
    AS3.setBindable(pm_InheritPlacementAction_172_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
    ui_IconButton_169_13_$1.baseAction = new com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction(pm_InheritPlacementAction_172_17_$1);
    var ui_IconButton_180_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_180_13_$1.itemId =net.jangaroo.ext.Exml.asString( PlacementField.LOCK_BUTTON_ITEM_ID);
    ui_IconButton_180_13_$1.enableToggle = true;
    AS3.setBindable(ui_IconButton_180_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'LockPlacementAction_icon')));
    AS3.setBindable(ui_IconButton_180_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'LockPlacementAction_tooltip')));
    AS3.setBindable(ui_IconButton_180_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'LockPlacementAction_tooltip'));
    var editor_BindDisablePlugin_186_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_186_17_$1,"forceReadOnlyValueExpression" , this.getReadOnlyValueExpression());
    var ui_BindPropertyPlugin_187_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_187_17_$1.componentProperty = "pressed";
    ui_BindPropertyPlugin_187_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_187_17_$1.ifUndefined = false;
    ui_BindPropertyPlugin_187_17_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"propertyName"), com.coremedia.blueprint.base.pagegrid.PageGridConstants.LOCKED_PROPERTY_NAME);
    ui_IconButton_180_13_$1.plugins = [editor_BindDisablePlugin_186_17_$1, ui_BindPropertyPlugin_187_17_$1];
    var pm_PlacementFieldViewtypeSelector_193_13_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelector*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelector,{});
    pm_PlacementFieldViewtypeSelector_193_13_$1.itemId =net.jangaroo.ext.Exml.asString( PlacementField.VIEWTYPE_SELECTOR_ITEM_ID);
    AS3.setBindable(pm_PlacementFieldViewtypeSelector_193_13_$1,"bindTo" , this.getStoringContentValueExpression(config));
    AS3.setBindable(pm_PlacementFieldViewtypeSelector_193_13_$1,"referenceContentValueExpression" , AS3.getBindable(config,"bindTo","DUMMY"));
    AS3.setBindable(pm_PlacementFieldViewtypeSelector_193_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( [AS3.getBindable(config,"propertyName"), com.coremedia.blueprint.base.pagegrid.PageGridConstants.VIEWTYPE_PROPERTY_NAME].join('.')));
    var ui_BindPropertyPlugin_199_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_199_17_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_199_17_$1.bindTo = this.getReadOnlyValueExpression();
    var editor_ShowIssuesPlugin_201_17_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_201_17_$1.bindTo = AS3.getBindable(config,"bindTo","DUMMY");
    AS3.setBindable(editor_ShowIssuesPlugin_201_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName") + '-viewtype'));
    pm_PlacementFieldViewtypeSelector_193_13_$1.plugins = [ui_BindPropertyPlugin_199_17_$1, editor_ShowIssuesPlugin_201_17_$1];
    pm_PlacementFieldViewtypeSelector_193_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    AS3.setBindable(ui_AddItemsPlugin_166_9_$1,"items" , [tbSeparator_168_13_$1, ui_IconButton_169_13_$1, ui_IconButton_180_13_$1, pm_PlacementFieldViewtypeSelector_193_13_$1]);
    var ui_IconButton_207_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_207_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.PASTE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_166_9_$1,"after" , [ui_IconButton_207_13_$1]);
    pm_PlacementLinkListPropertyField_151_5_$1.plugins = [ui_AddItemsPlugin_166_9_$1];
    pm_PlacementLinkListPropertyField_151_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [container_120_5_$1, pm_PlacementLinkListPropertyField_151_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kSg2(config_$1);
  }/*

    /**
     * The page tree relation to use for inheritance of section from parent pages
     * and locking of child pages.
     * /
    [Bindable]
    public var pageTreeRelation:TreeRelation;

    /**
     * The placement section
     * /
    [Bindable]
    public var section:Content;

    /**
     * The link type for the PlacementLinkListPropertyField.
     * /
    [Bindable]
    public var linkType:String;

    /**
     * Items to add to the row widget of the placement field.
     * /
    [Bindable]
    public var rowWidgetItems:Array;

    /**
     the property name of the placement struct.
     * /
    [Bindable]
    public var propertyName:String;


    /**
     The name under which to register this property field.
     Defaults to propertyName.
     * /
    [Bindable]
    public var propertyFieldName:String;


    /**
     the property name of the placement struct.
     * /
    [Bindable]
    public var fallbackPropertyName:String;


    /**
     The name under which to register this property field.
     Defaults to propertyName.
     * /
    [Bindable]
    public var fallbackPropertyFieldName:String;


    /**
     The name of the property storing the page grid struct
     * /
    [Bindable]
    public var structPropertyName:String;


    /**
     Set true to display the inheritance information even if bindTo is considered to be the source of the local pagegrid. Default: false.
     * /
    [Bindable]
    public var showLocal:Boolean;


    /**
     The data fields to be added to the store underlying the link list grid view.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;


    /**
     The columns shown in the link list grid view.
     Elements of the array are instances of Column. Unless additional fields are defined
     in the fields property, the columns may only refer to the data fields
     name, status, type, and typeCls.

     @see ext.grid.Column
     * /
    [Bindable]
    public var columns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.PlacementFieldBase",
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.placementField",
      constructor: PlacementField$,
      super$kSg2: function() {
        com.coremedia.blueprint.base.pagegrid.PlacementFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        pageTreeRelation: null,
        section: null,
        linkType: null,
        rowWidgetItems: null,
        propertyName: null,
        propertyFieldName: null,
        fallbackPropertyName: null,
        fallbackPropertyFieldName: null,
        structPropertyName: null,
        showLocal: false,
        fields: null,
        columns: null
      },
      statics: {
        LINK_LINK_PROPERTY_FIELD_ITEM_ID: "linkListPropertyField",
        INHERIT_BUTTON_ITEM_ID: "inheritButton",
        LOCK_BUTTON_ITEM_ID: "lockButton",
        VIEWTYPE_SELECTOR_ITEM_ID: "viewtypeSelector"
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Separator",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties",
        "com.coremedia.blueprint.base.pagegrid.PlacementFieldBase",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridConstants",
        "com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelector",
        "com.coremedia.blueprint.base.pagegrid.PlacementInheritStateButton",
        "com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyField",
        "com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction"
      ]
    };
});
