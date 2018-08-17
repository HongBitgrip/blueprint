Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidget", function(QuickSearchWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.Component;
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchField;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.HBoxLayout;
import com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class QuickSearchWidget extends QuickSearchWidgetBase{

    import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.quickSearchWidget";

    public static const CONTENT_LIST_ITEM_ID:String = "contentList";

    public static const SEARCH_BAR_ITEM_ID:String = "searchBar";

    public static const CONTENT_TYPE_SELECTOR_ITEM_ID:String = "contentTypeSelector";

    public static const SEARCH_FIELD_ITEM_ID:String = "searchField";

    public*/function QuickSearchWidget$(config/*:QuickSearchWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase,{});
    var defaults_$1/*:QuickSearchWidget*/ =AS3.cast(QuickSearchWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , "100%");
    var container_48_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_48_5_$1.itemId =net.jangaroo.ext.Exml.asString( QuickSearchWidget.SEARCH_BAR_ITEM_ID);
    var component_50_9_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_50_9_$1.flex = 1.0;
    var editor_ContentTypeSelector_51_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector,{});
    editor_ContentTypeSelector_51_9_$1.itemId =net.jangaroo.ext.Exml.asString( QuickSearchWidget.CONTENT_TYPE_SELECTOR_ITEM_ID);
    AS3.setBindable(editor_ContentTypeSelector_51_9_$1,"entries" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getAvailableContentTypeEntries());
    var ui_ValueExpression_54_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_54_13_$1,"expression" , "contentType");
    AS3.setBindable(ui_ValueExpression_54_13_$1,"context" , this.getCollectionViewModel().getMainStateBean());
    AS3.setBindable(editor_ContentTypeSelector_51_9_$1,"contentTypeValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_54_13_$1));
    var editor_SearchField_58_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.SearchField*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchField,{});
    editor_SearchField_58_9_$1.flex = 3.0;
    editor_SearchField_58_9_$1.itemId =net.jangaroo.ext.Exml.asString( QuickSearchWidget.SEARCH_FIELD_ITEM_ID);
    AS3.setBindable(editor_SearchField_58_9_$1,"collectionViewModel" , this.getCollectionViewModel());
    var ui_IconButton_61_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_61_9_$1.itemId = "startSearch";
    AS3.setBindable(ui_IconButton_61_9_$1,"scale" , "small");
    ui_IconButton_61_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_61_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_search_btn_tooltip'));
    AS3.setBindable(ui_IconButton_61_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_61_9_$1,"handler" ,AS3.bind( this,"executeSearch"));
    var component_67_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_67_9_$1.flex = 1.0;
    container_48_5_$1.items = [component_50_9_$1, editor_ContentTypeSelector_51_9_$1, editor_SearchField_58_9_$1, ui_IconButton_61_9_$1, component_67_9_$1];
    var layout_HBox_70_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_70_9_$1,"align" , "middle");
    AS3.setBindable(layout_HBox_70_9_$1,"padding" , "10 0 10 0");
    AS3.setBindable(container_48_5_$1,"layout" , layout_HBox_70_9_$1);
    var editor_WidgetContentList_75_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList,{});
    editor_WidgetContentList_75_5_$1.itemId =net.jangaroo.ext.Exml.asString( QuickSearchWidget.CONTENT_LIST_ITEM_ID);
    AS3.setBindable(editor_WidgetContentList_75_5_$1,"contentList" , this.getContentValueExpression());
    var container_77_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_77_5_$1,"height" , 16);
    AS3.setBindable(container_77_5_$1,"region" , "south");
    var button_80_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_80_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_80_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'show_all_text')));
    AS3.setBindable(button_80_9_$1,"handler" ,AS3.bind( this,"showLibrary"));
    var component_83_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_83_9_$1.flex = 1.0;
    AS3.setBindable(component_83_9_$1,"height" , 16);
    container_77_5_$1.items = [button_80_9_$1, component_83_9_$1];
    var layout_HBox_88_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_77_5_$1,"layout" , layout_HBox_88_9_$1);
    config_$1.items = [container_48_5_$1, editor_WidgetContentList_75_5_$1, container_77_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$V8yc(config_$1);
  }/*

    /**
     The search text that is used for the collection view.
     Default "".
     * /
    [Bindable]
    public var searchText:String;


    /**
     The content type that is used in the content type filter.
     Default "Document_".
     * /
    [Bindable]
    public var contentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.quickSearchWidget",
      constructor: QuickSearchWidget$,
      super$V8yc: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        searchText: null,
        contentType: null
      },
      statics: {
        CONTENT_LIST_ITEM_ID: "contentList",
        SEARCH_BAR_ITEM_ID: "searchBar",
        CONTENT_TYPE_SELECTOR_ITEM_ID: "contentTypeSelector",
        SEARCH_FIELD_ITEM_ID: "searchField"
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.QuickSearchWidgetBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchField",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList"
      ]
    };
});
