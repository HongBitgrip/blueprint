Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFilters", function(SearchFilters) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
[PublicApi]
/**
 The search filters panel of the collection view. It stores its
 filters in the items property. To be found when processing a search request,
 each filter must implement the interface SearchFilter.
 Extensions may use this type to add filters inheriting from FilterPanel using the addItemsPlugin. To simplify the implementation,
 custom search filters can inherit from the class FilterPanel.
 @see SearchFilter
 @see FilterPanel
 * /
public class SearchFilters extends SearchFiltersBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchFilters";

    public static const LAST_EDITED_FILTER_ITEM_ID:String =*/function LAST_EDITED_FILTER_ITEM_ID$static_(){SearchFilters.LAST_EDITED_FILTER_ITEM_ID=( com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel.FILTER_ID);}/*;

    public*/function SearchFilters$(config/*:SearchFilters = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase,{});
    var defaults_$1/*:SearchFilters*/ =AS3.cast(SearchFilters,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200);
    var editor_StatusFilterPanel_33_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel,{});
    var editor_LastEditedFilterPanel_34_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel,{});
    var editor_SiteFilterPanel_35_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel,{});
    var editor_RelativeDateFilterPanel_36_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel,{});
    AS3.setBindable(editor_RelativeDateFilterPanel_36_5_$1,"dateFieldName" , "modificationdate");
    var editor_RelativeDateFilterPanel_37_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel,{});
    AS3.setBindable(editor_RelativeDateFilterPanel_37_5_$1,"dateFieldName" , "publicationdate");
    var editor_TranslationStatusFilterPanel_38_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel,{});
    config_$1.items = [editor_StatusFilterPanel_33_5_$1, editor_LastEditedFilterPanel_34_5_$1, editor_SiteFilterPanel_35_5_$1, editor_RelativeDateFilterPanel_36_5_$1, editor_RelativeDateFilterPanel_37_5_$1, editor_TranslationStatusFilterPanel_38_5_$1];
    var layout_Anchor_41_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_41_5_$1);
    var ui_VerticalSpacingPlugin_44_5_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_44_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_44_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8gXU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchFilters",
      constructor: SearchFilters$,
      super$8gXU: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        LAST_EDITED_FILTER_ITEM_ID: undefined,
        __initStatics__: function() {
          LAST_EDITED_FILTER_ITEM_ID$static_();
        }
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel"
      ]
    };
});
