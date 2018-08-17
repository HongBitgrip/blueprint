Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar", function(LinkListPropertyFieldToolbar) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.FloatingToolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import com.coremedia.ui.components.IconButton;
import ext.ActionRef;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.toolbar.Separator;
import com.coremedia.ui.plugins.AddItemsPlugin;
[PublicApi]
/**
 Toolbar of a link list property field.
 * /
public class LinkListPropertyFieldToolbar extends FloatingToolbar{

    import com.coremedia.cms.editor.sdk.actions.LinkListCopyAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListCutAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListPasteAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListPropertyFieldToolbar";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const LINK_LIST_SEP_FIRST_ITEM_ID:String = "GridPanelSepFirst";

    public*/function LinkListPropertyFieldToolbar$(config/*:LinkListPropertyFieldToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.FloatingToolbar*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbar,{});
    var defaults_$1/*:LinkListPropertyFieldToolbar*/ =AS3.cast(LinkListPropertyFieldToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    config_$1.excludeInputFields = true;
    var editor_PropertyField_72_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_72_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyField_72_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    config_$1["defaultType"] = editor_PropertyField_72_5_$1['xtype'];
    delete editor_PropertyField_72_5_$1['xtype'];
    delete editor_PropertyField_72_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_72_5_$1;
    var ui_IconButton_77_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_77_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.DELETE_BUTTON_ITEM_ID);
    var actionRef_79_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_79_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction.ACTION_ID);
    ui_IconButton_77_5_$1.baseAction = actionRef_79_9_$1;
    var ui_IconButton_83_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_83_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.OPEN_BUTTON_ITEM_ID);
    var editor_OpenInTabAction_85_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_85_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME));
    ui_IconButton_83_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_85_9_$1);
    var tbSeparator_88_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_88_5_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyFieldToolbar.LINK_LIST_SEP_FIRST_ITEM_ID);
    var ui_IconButton_90_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_90_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.CUT_BUTTON_ITEM_ID);
    var actionRef_92_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_92_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListCutAction.ACTION_ID);
    ui_IconButton_90_5_$1.baseAction = actionRef_92_9_$1;
    var ui_IconButton_96_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_96_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.COPY_BUTTON_ITEM_ID);
    var actionRef_98_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_98_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListCopyAction.ACTION_ID);
    ui_IconButton_96_5_$1.baseAction = actionRef_98_9_$1;
    var ui_IconButton_102_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_102_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.PASTE_BUTTON_ITEM_ID);
    var actionRef_104_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_104_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListPasteAction.ACTION_ID);
    ui_IconButton_102_5_$1.baseAction = actionRef_104_9_$1;
    config_$1.items = [ui_IconButton_77_5_$1, ui_IconButton_83_5_$1, tbSeparator_88_5_$1, ui_IconButton_90_5_$1, ui_IconButton_96_5_$1, ui_IconButton_102_5_$1];
    var ui_AddItemsPlugin_109_5_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    AS3.setBindable(ui_AddItemsPlugin_109_5_$1,"items" , AS3.getBindable(config,"additionalToolbarItems"));
    config_$1.plugins = [ui_AddItemsPlugin_109_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rCrX(config_$1);
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited. This property editor
     * assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    [Bindable]
    public var selectedValuesExpression:ValueExpression;

    [Bindable]
    public var selectedPositionsExpression:ValueExpression;

    /** The name of the link list property * /
    [Bindable]
    public var propertyName:String;


    /**
     The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
     but to override this or provide an initial value for link properties in Structs that are created by this
     property field, you may specify a custom link type.
     * /
    [Bindable]
    public var linkType:String;


    /** Optional. The maximum cardinality that the link list property should hold.
   If not specified the maximum cardinality of the property descriptor of the link list property will be applied.
     * /
    [Bindable]
    public var maxCardinality:int;


    /* Additional items that are appended to the toolbar * /
    [Bindable]
    public var additionalToolbarItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.FloatingToolbar",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListPropertyFieldToolbar",
      constructor: LinkListPropertyFieldToolbar$,
      super$rCrX: function() {
        com.coremedia.ui.components.FloatingToolbar.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        selectedValuesExpression: null,
        selectedPositionsExpression: null,
        propertyName: null,
        linkType: null,
        maxCardinality: 0,
        additionalToolbarItems: null
      },
      statics: {LINK_LIST_SEP_FIRST_ITEM_ID: "GridPanelSepFirst"},
      requires: [
        "Ext.toolbar.Separator",
        "com.coremedia.ui.components.FloatingToolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.LinkListCopyAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListCutAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField"
      ]
    };
});
