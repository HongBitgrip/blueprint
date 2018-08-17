Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsContainer", function(ModeratedItemsContainer) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel;
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFilters;
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView;
import com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout;
public class ModeratedItemsContainer extends Container{

    import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderatedItemsContainer";

    public static const MODERATED_ITEMS_VIEW_ID:String = "cm-moderation-gridPanel";

    public static const MODERATION_SEARCH_FILTERS_STATE_ID:String = "moderationSearchFiltersStateId";

    public*/function ModeratedItemsContainer$(config/*:ModeratedItemsContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:ModeratedItemsContainer*/ =AS3.cast(ModeratedItemsContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SearchFiltersPanel_26_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel,{});
    editor_SearchFiltersPanel_26_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsContainer.MODERATION_SEARCH_FILTERS_STATE_ID);
    AS3.setBindable(editor_SearchFiltersPanel_26_5_$1,"stateful" , true);
    editor_SearchFiltersPanel_26_5_$1.stateEvents = ['collapse','expand'];
    editor_SearchFiltersPanel_26_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    AS3.setBindable(editor_SearchFiltersPanel_26_5_$1,"alwaysVisible" , true);
    var es_ModeratedItemsSearchFilters_32_9_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFilters*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFilters,{});
    AS3.setBindable(es_ModeratedItemsSearchFilters_32_9_$1,"moderationContributionAdministration" , AS3.getBindable(config,"moderationContributionAdministration"));
    editor_SearchFiltersPanel_26_5_$1.items = [es_ModeratedItemsSearchFilters_32_9_$1];
    var mods_35_5_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView,{});
    mods_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( ModeratedItemsContainer.MODERATED_ITEMS_VIEW_ID);
    AS3.setBindable(mods_35_5_$1,"region" , "center");
    AS3.setBindable(mods_35_5_$1,"moderationContributionAdministration" , AS3.getBindable(config,"moderationContributionAdministration"));
    AS3.setBindable(this,"mods" , new com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView(mods_35_5_$1));
    config_$1.items = [editor_SearchFiltersPanel_26_5_$1, AS3.getBindable(this,"mods")];
    var editor_ExtendedBorderLayout_41_5_$1/*:com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout*/ =AS3.cast(com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout,{});
    AS3.setBindable(editor_ExtendedBorderLayout_41_5_$1,"showCollapsedTitles" , ['west']);
    AS3.setBindable(config_$1,"layout" , editor_ExtendedBorderLayout_41_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ie1q(config_$1);
  }/*

    [Bindable]
    public var moderationContributionAdministration:ModerationContributionAdministration;

    [Bindable]
    public var mods:com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderatedItemsContainer",
      constructor: ModeratedItemsContainer$,
      super$Ie1q: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderationContributionAdministration: null,
        mods: null
      },
      statics: {
        MODERATED_ITEMS_VIEW_ID: "cm-moderation-gridPanel",
        MODERATION_SEARCH_FILTERS_STATE_ID: "moderationSearchFiltersStateId"
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel",
        "com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFilters",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView"
      ]
    };
});
