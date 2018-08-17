Ext.define("com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindow", function(ModerationStatisticsWindow) {/*package com.coremedia.elastic.social.studio.moderation.statistics{
import com.coremedia.elastic.social.studio.moderation.statistics.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.button.Button;
import ext.toolbar.Fill;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationStatisticsWindow extends ModerationStatisticsWindowBase{

    import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationStatisticsWindow";

    public*/function ModerationStatisticsWindow$(config/*:ModerationStatisticsWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase,{});
    var defaults_$1/*:ModerationStatisticsWindow*/ =AS3.cast(ModerationStatisticsWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    config_$1.closeAction = "close";
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase.MODERATION_STATISTICS_WINDOW_ID);
    config_$1.stateId = "moderationStatisticsWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_window_title'));
    var es_ModerationStatisticsContainer_36_5_$1/*: com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer,{});
    es_ModerationStatisticsContainer_36_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase.MODERATION_STATISTICS_PANEL_ITEM_ID);
    AS3.setBindable(es_ModerationStatisticsContainer_36_5_$1,"moderationContributionAdministration" , AS3.getBindable(config,"moderationContributionAdministration"));
    config_$1.items = [es_ModerationStatisticsContainer_36_5_$1];
    var toolbar_41_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var button_43_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_43_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase.UPDATE_BUTTON_ID);
    button_43_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_43_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_refresh')));
    AS3.setBindable(button_43_9_$1,"handler" ,AS3.bind( this,"updateStatistics"));
    var tbFill_47_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_48_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_48_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_close')));
    AS3.setBindable(button_48_9_$1,"handler" ,AS3.bind( this,"close"));
    button_48_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    button_48_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase.CLOSE_BUTTON_ID);
    toolbar_41_5_$1.items = [button_43_9_$1, tbFill_47_9_$1, button_48_9_$1];
    config_$1.fbar = toolbar_41_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iMH2(config_$1);
  }/*

    [Bindable]
    public var moderationContributionAdministration:ModerationContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationStatisticsWindow",
      constructor: ModerationStatisticsWindow$,
      super$iMH2: function() {
        com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderationContributionAdministration: null},
      requires: [
        "Ext.button.Button",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer"]
    };
});
