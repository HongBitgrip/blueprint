Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel", function(CommentMetaDataPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.*;
import net.jangaroo.ext.Exml;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainer;
import ext.layout.container.CardLayout;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.HBoxLayout;
public class CommentMetaDataPanel extends CommentMetaDataPanelBase{

    import com.coremedia.elastic.social.studio.model.UserAdministration;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.commentMetaDataPanel";

    public static const CONTENT_INFORMATION_CONTAINER_ITEM_ID:String = "contentInformationContainer";

    public static const TARGET_INFORMATION_CONTAINER_ITEM_ID:String = "targetInformationContainer";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){CommentMetaDataPanel.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-comment-metadata-panel"));}/*;
    public static const ELEMENT_LEFT:BEMElement =*/function ELEMENT_LEFT$static_(){CommentMetaDataPanel.ELEMENT_LEFT=( CommentMetaDataPanel.BLOCK.createElement("left"));}/*;
    public static const ELEMENT_RIGHT:BEMElement =*/function ELEMENT_RIGHT$static_(){CommentMetaDataPanel.ELEMENT_RIGHT=( CommentMetaDataPanel.BLOCK.createElement("right"));}/*;

    public*/function CommentMetaDataPanel$(config/*:CommentMetaDataPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase,{});
    var defaults_$1/*:CommentMetaDataPanel*/ =AS3.cast(CommentMetaDataPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var es_ContributionUserInformationPanel_37_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel,{});
    es_ContributionUserInformationPanel_37_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase.USER_INFORMATION_VIEW_ID);
    es_ContributionUserInformationPanel_37_5_$1.flex = 1.0;
    AS3.setBindable(es_ContributionUserInformationPanel_37_5_$1,"userAdministration" , AS3.getBindable(config,"userAdministration"));
    AS3.setBindable(es_ContributionUserInformationPanel_37_5_$1,"authorProvider" , AS3.getBindable(config,"authorProvider"));
    es_ContributionUserInformationPanel_37_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    var ui_BEMMixin_42_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_42_9_$1,"bemElement" , CommentMetaDataPanel.ELEMENT_LEFT);

    delete ui_BEMMixin_42_9_$1['xtype'];
    delete ui_BEMMixin_42_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(es_ContributionUserInformationPanel_37_5_$1, ui_BEMMixin_42_9_$1);
    var ui_SwitchingContainer_45_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_45_5_$1.itemId =net.jangaroo.ext.Exml.asString( CommentMetaDataPanel.TARGET_INFORMATION_CONTAINER_ITEM_ID);
    ui_SwitchingContainer_45_5_$1.flex = 1.0;
    AS3.setBindable(ui_SwitchingContainer_45_5_$1,"activeItemValueExpression" , this.getActiveTargetInformationItemIdVE());
    var fx_Object_49_9_$1/*:Object*/ =Object({});
    fx_Object_49_9_$1.contributionAdministration = AS3.getBindable(config,"contributionAdministration");
    ui_SwitchingContainer_45_5_$1["defaultType"] = fx_Object_49_9_$1['xtype'];
    delete fx_Object_49_9_$1['xtype'];
    delete fx_Object_49_9_$1['xclass'];
    ui_SwitchingContainer_45_5_$1.defaults = fx_Object_49_9_$1;
    var es_ContentInformationContainer_52_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainer,{});
    es_ContentInformationContainer_52_9_$1.itemId =net.jangaroo.ext.Exml.asString( CommentMetaDataPanel.CONTENT_INFORMATION_CONTAINER_ITEM_ID);
    ui_SwitchingContainer_45_5_$1.items = [es_ContentInformationContainer_52_9_$1];
    var layout_Card_55_9_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    AS3.setBindable(ui_SwitchingContainer_45_5_$1,"layout" , layout_Card_55_9_$1);
    var ui_BEMMixin_58_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_58_9_$1,"bemElement" , CommentMetaDataPanel.ELEMENT_RIGHT);

    delete ui_BEMMixin_58_9_$1['xtype'];
    delete ui_BEMMixin_58_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_SwitchingContainer_45_5_$1, ui_BEMMixin_58_9_$1);
    config_$1.items = [es_ContributionUserInformationPanel_37_5_$1, ui_SwitchingContainer_45_5_$1];
    var ui_BEMPlugin_63_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_63_5_$1,"block" , CommentMetaDataPanel.BLOCK);
    config_$1.plugins = [ui_BEMPlugin_63_5_$1];
    var layout_HBox_66_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_66_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_66_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vImz(config_$1);
  }/*

    [Bindable]
    public var userAdministration:UserAdministration;

    [Bindable]
    public var authorProvider:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.commentMetaDataPanel",
      constructor: CommentMetaDataPanel$,
      super$vImz: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        userAdministration: null,
        authorProvider: null
      },
      statics: {
        CONTENT_INFORMATION_CONTAINER_ITEM_ID: "contentInformationContainer",
        TARGET_INFORMATION_CONTAINER_ITEM_ID: "targetInformationContainer",
        BLOCK: undefined,
        ELEMENT_LEFT: undefined,
        ELEMENT_RIGHT: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_LEFT$static_();
          ELEMENT_RIGHT$static_();
        }
      },
      requires: [
        "Ext.layout.container.Card",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel"
      ]
    };
});
