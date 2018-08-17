Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFilters", function(ModeratedItemsSearchFilters) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems{
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.*;
import net.jangaroo.ext.Exml;
public class ModeratedItemsSearchFilters extends ModeratedItemsSearchFiltersBase{

    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderatedItemsSearchFilters";

    public*/function ModeratedItemsSearchFilters$(config/*:ModeratedItemsSearchFilters = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase,{});
    var defaults_$1/*:ModeratedItemsSearchFilters*/ =AS3.cast(ModeratedItemsSearchFilters,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200);
    var es_ContributionSearchFilterPanel_20_5_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel,{});
    AS3.setBindable(es_ContributionSearchFilterPanel_20_5_$1,"categoriesListValueExpression" , AS3.getBindable(config,"moderationContributionAdministration").getCategoryBeansValueExpression());
    AS3.setBindable(es_ContributionSearchFilterPanel_20_5_$1,"collapsed" , false);
    config_$1.items = [es_ContributionSearchFilterPanel_20_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uAkc(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderatedItemsSearchFilters",
      constructor: ModeratedItemsSearchFilters$,
      super$uAkc: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel"]
    };
});
