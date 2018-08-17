Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanel", function(ModerationTabPanel) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab{
import com.coremedia.elastic.social.studio.moderation.moderationtab.*;
import net.jangaroo.ext.Exml;
import ext.resizer.Splitter;
import com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanel;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationTabPanel extends ModerationTabPanelBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.skins.SplitterSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationTabPanel";

    public*/function ModerationTabPanel$(config/*:ModerationTabPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase,{});
    var defaults_$1/*:ModerationTabPanel*/ =AS3.cast(ModerationTabPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'main_tab_title_moderation'));
    var es_ModerationPanel_27_5_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel,{});
    es_ModerationPanel_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase.MODERATION_PANEL_ID);
    es_ModerationPanel_27_5_$1.flex = 1.0;
    AS3.setBindable(es_ModerationPanel_27_5_$1,"minWidth" , 560.0);
    AS3.setBindable(es_ModerationPanel_27_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    var splitter_32_5_$1/*:ext.resizer.Splitter*/ =AS3.cast(Ext.resizer.Splitter,{});
    AS3.setBindable(splitter_32_5_$1,"width" , "4px");
    splitter_32_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.DARK.getSkin());
    var es_ModerationPreviewPanel_35_5_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanel,{});
    es_ModerationPreviewPanel_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase.MODERATION_PREVIEW_ID);
    es_ModerationPreviewPanel_35_5_$1.flex = 1.0;
    AS3.setBindable(es_ModerationPreviewPanel_35_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    config_$1.items = [es_ModerationPanel_27_5_$1, splitter_32_5_$1, es_ModerationPreviewPanel_35_5_$1];
    var layout_HBox_41_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_41_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_41_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iXTs(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationTabPanel",
      constructor: ModerationTabPanel$,
      super$iXTs: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "Ext.layout.container.HBox",
        "Ext.resizer.Splitter",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase",
        "com.coremedia.ui.skins.SplitterSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanel"
      ]
    };
});
