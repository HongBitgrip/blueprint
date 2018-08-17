Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel", function(SearchFiltersPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.panel.PanelHeader;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SearchFiltersPanel extends SearchFiltersPanelBase{

    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchFiltersPanel";

    public*/function SearchFiltersPanel$(config/*:SearchFiltersPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase,{});
    var defaults_$1/*:SearchFiltersPanel*/ =AS3.cast(SearchFiltersPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filters'));
    AS3.setBindable(config_$1,"region" , "west");
    AS3.setBindable(config_$1,"width" , 230);
    config_$1["floatable"] = false;
    AS3.setBindable(config_$1,"minWidth" , 230.0);
    AS3.setBindable(config_$1,"maxWidth" , 500.0);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    config_$1["split"] = {width: '3px', collapsible: false};
    config_$1.collapsible = true;
    AS3.setBindable(config_$1,"collapsed" , true);
    config_$1.titleCollapse = true;
    AS3.setBindable(config_$1,"scrollable" , "y");
    var header_46_5_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    header_46_5_$1["focusableContainer"] = false;
    config_$1.header = header_46_5_$1;
    var ui_BindVisibilityPlugin_49_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_5_$1.bindTo = this.getVisibilityExpression();
    ui_BindVisibilityPlugin_49_5_$1["updateWithLayout"] = true;
    config_$1.plugins = [ui_BindVisibilityPlugin_49_5_$1];
    var editor_SearchFilters_53_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters,{});
    editor_SearchFilters_53_5_$1.itemId = "searchFilter";
    config_$1.items = [editor_SearchFilters_53_5_$1];
    var layout_Anchor_56_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_56_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Gln6(config_$1);
  }/*

    /**
     The initial State of the view.
     * /
    [Bindable]
    public var state:Object;


    /**
     Whether this component should always be visible independent of the active extension (defaults to false).
     * /
    [Bindable]
    public var alwaysVisible:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchFiltersPanel",
      constructor: SearchFiltersPanel$,
      super$Gln6: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        state: null,
        alwaysVisible: false
      },
      requires: [
        "Ext.layout.container.Anchor",
        "Ext.panel.Header",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters"]
    };
});
