Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel", function(CuratedContentPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
public class CuratedContentPanel extends CuratedContentPanelBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.curatedContentPanel";

    [Bindable]
    public var abstractContribution:AbstractContributionAdministration;

    public*/function CuratedContentPanel$(config/*:CuratedContentPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase,{});
    var defaults_$1/*:CuratedContentPanel*/ =AS3.cast(CuratedContentPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME_200_NO_TOP_BORDER.getSkin());
    AS3.setBindable(config_$1,"title" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_tab_curated_content'));
    var local_CuratedContentButton_27_5_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton,{});
    local_CuratedContentButton_27_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    config_$1["defaultType"] = local_CuratedContentButton_27_5_$1['xtype'];
    delete local_CuratedContentButton_27_5_$1['xtype'];
    delete local_CuratedContentButton_27_5_$1['xclass'];
    config_$1.defaults = local_CuratedContentButton_27_5_$1;
    var layout_VBox_30_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(config_$1,"layout" , layout_VBox_30_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$lCys(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.curatedContentPanel",
      constructor: CuratedContentPanel$,
      super$lCys: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {abstractContribution: null},
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton"]
    };
});
