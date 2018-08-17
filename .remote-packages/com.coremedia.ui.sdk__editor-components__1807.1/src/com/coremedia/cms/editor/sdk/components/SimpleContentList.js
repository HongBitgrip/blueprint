Ext.define("com.coremedia.cms.editor.sdk.components.SimpleContentList", function(SimpleContentList) {/*package com.coremedia.cms.editor.sdk.components{
import ext.view.DataView;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.components.SimpleContextMenu;
public class SimpleContentList extends DataView{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.data.BeanState;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.models.bem.BEMModifier;
    import com.coremedia.ui.util.ObjectUtils;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.simpleContentList";

    private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-simple-content-list"));};/*
    private static const*/var ELEMENT_ITEM$static/*:BEMElement*/;/* =*/function ELEMENT_ITEM$static_(){ELEMENT_ITEM$static=( BLOCK$static.createElement("item"));};/*
    private static const*/var ELEMENT_ICON$static/*:BEMElement*/;/* =*/function ELEMENT_ICON$static_(){ELEMENT_ICON$static=( BLOCK$static.createElement("icon"));};/*
    private static const*/var ELEMENT_TEXT$static/*:BEMElement*/;/* =*/function ELEMENT_TEXT$static_(){ELEMENT_TEXT$static=( BLOCK$static.createElement("text"));};/*
    private static const*/var MODIFIER_NO_BORDER$static/*:BEMModifier*/;/* =*/function MODIFIER_NO_BORDER$static_(){MODIFIER_NO_BORDER$static=( BLOCK$static.createModifier("no-border"));};/*

    private static*/ function getTpl$static(hideBorder/*:Boolean*/)/*:Array*/ {
      return [
        '<div class="' + BLOCK$static + (hideBorder ? ' ' + MODIFIER_NO_BORDER$static : '') + ' x-unselectable">',
          '<tpl for=".">',
            '<div {name:unsafeQtip} class="' + ELEMENT_ITEM$static + '">',
              '<div class="' + ELEMENT_TEXT$static + '">',
                '<div class="<tpl if="readable">{typeClass}</tpl>',
                  '<tpl if="!readable">{[com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.getIconStyleClassForUnreadableContent(values.id)]}</tpl> ' + ELEMENT_ICON$static + '">',
                '</div>',
                '<tpl if="readable">{name}</tpl>',
                '<tpl if="!readable">{[com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromUriPath(values.id)]}</tpl>',
              '</div>',
            '</div>',
          '</tpl>',
        '</div>'
      ];
    }/*
    private var contentPropertyPathPrefix:String;
    private var selectedContentsValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:SimpleContentList*/)/*:void*/ {
      this.contentPropertyPathPrefix$raid = AS3.getBindable(config,"contentPropertyPath") ? AS3.getBindable(config,"contentPropertyPath") + '.' : '';
      this.selectedContentsValueExpression$raid = AS3.getBindable(config,"contentPropertyPath")
              ? com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]),
                      function (x/*:**/)/*:**/ {
                        return x;
                      }, com.coremedia.ui.util.ObjectUtils.getPropertyPathMapper(AS3.getBindable(config,"contentPropertyPath")))
              : com.coremedia.ui.data.ValueExpressionFactory.createFromValue([])
      ;
    }/*

    public*/function SimpleContentList$(config/*:SimpleContentList = null*/){if(arguments.length<=0)config=null;this.__initialize__$raid(config);
    var config_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    var defaults_$1/*:SimpleContentList*/ =AS3.cast(SimpleContentList,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.tpl =/* SimpleContentList.*/getTpl$static(AS3.getBindable(config,"hideBorder"));
    config_$1.itemSelector =net.jangaroo.ext.Exml.asString( ELEMENT_ITEM$static.getCSSSelector());
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.multiSelect = true;
    var ui_BindListPlugin_92_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_92_5_$1,"bindTo" , AS3.getBindable(config,"contentList"));
    var ui_DataField_94_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_94_9_$1.name = "typeClass";
    ui_DataField_94_9_$1.ifUnreadable = "ignored";
    ui_DataField_94_9_$1.ifError = "";
    ui_DataField_94_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    ui_DataField_94_9_$1.mapping = this.contentPropertyPathPrefix$raid + 'type';
    var ui_DataField_99_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_99_9_$1.name = "name";
    ui_DataField_99_9_$1.ifUnreadable = 'ignored';
    ui_DataField_99_9_$1.ifError = "error accessing data";
    ui_DataField_99_9_$1.mapping = this.contentPropertyPathPrefix$raid + 'name';
    var ui_DataField_103_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_103_9_$1.name = "id";
    ui_DataField_103_9_$1.mapping = this.contentPropertyPathPrefix$raid + 'uriPath';
    var ui_DataField_105_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_105_9_$1.name = "readable";
    ui_DataField_105_9_$1.mapping = this.contentPropertyPathPrefix$raid + com.coremedia.ui.data.BeanState.PROPERTY_NAME + '.readable';
    AS3.setBindable(ui_BindListPlugin_92_5_$1,"fields" , [ui_DataField_94_9_$1, ui_DataField_99_9_$1, ui_DataField_103_9_$1, ui_DataField_105_9_$1]);
    var ui_BindSelectionPlugin_109_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_109_5_$1,"selectedValues" , this.selectedContentsValueExpression$raid);
    var ui_ContextMenuPlugin_110_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_SimpleContextMenu_112_9_$1/*:com.coremedia.cms.editor.sdk.components.SimpleContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContextMenu,{});
    AS3.setBindable(editor_SimpleContextMenu_112_9_$1,"selectedContentsValueExpression" , this.selectedContentsValueExpression$raid);
    AS3.setBindable(editor_SimpleContextMenu_112_9_$1,"showApprove" , AS3.getBindable(config,"showApproveContextMenuItem"));
    AS3.setBindable(editor_SimpleContextMenu_112_9_$1,"showPublish" , AS3.getBindable(config,"showPublishContextMenuItem"));
    AS3.setBindable(editor_SimpleContextMenu_112_9_$1,"showWithdraw" , AS3.getBindable(config,"showWithdrawContextMenuItem"));
    AS3.setBindable(ui_ContextMenuPlugin_110_5_$1,"contextMenu" , editor_SimpleContextMenu_112_9_$1);
    config_$1.plugins = [ui_BindListPlugin_92_5_$1, ui_BindSelectionPlugin_109_5_$1, ui_ContextMenuPlugin_110_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$raid(config_$1);
  }/*

    /**
     * A value expression evaluating to an Array of Content that is to be shown.
     * /
    [Bindable]
    public var contentList:ValueExpression;

    /**
     You can also hand in Arrays of Beans not being, but containing Content.
     Then, specify the property path that leads from Bean to Content.
     * /
    [Bindable]
    public var contentPropertyPath:String;


    /** Whether to show the approve menu item in the context menu; default true * /
    [Bindable]
    public var showApproveContextMenuItem:Boolean;


    /** Whether to show the publish menu item in the context menu; default true * /
    [Bindable]
    public var showPublishContextMenuItem:Boolean;


    /** Whether to show the withdraw menu item in the context menu; default true * /
    [Bindable]
    public var showWithdrawContextMenuItem:Boolean;


    /** Whether to hide the border or not; default false * /
    [Bindable]
    public var hideBorder:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.View",
      alias: "widget.com.coremedia.cms.editor.sdk.config.simpleContentList",
      contentPropertyPathPrefix$raid: null,
      selectedContentsValueExpression$raid: null,
      __initialize__$raid: __initialize__,
      constructor: SimpleContentList$,
      super$raid: function() {
        Ext.view.View.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentList: null,
        contentPropertyPath: null,
        showApproveContextMenuItem: false,
        showPublishContextMenuItem: false,
        showWithdrawContextMenuItem: false,
        hideBorder: false
      },
      statics: {
        BLOCK: undefined,
        ELEMENT_ITEM: undefined,
        ELEMENT_ICON: undefined,
        ELEMENT_TEXT: undefined,
        MODIFIER_NO_BORDER: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_ITEM$static_();
          ELEMENT_ICON$static_();
          ELEMENT_TEXT$static_();
          MODIFIER_NO_BORDER$static_();
        }
      },
      requires: [
        "Ext.view.View",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.ObjectUtils",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.SimpleContextMenu",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
