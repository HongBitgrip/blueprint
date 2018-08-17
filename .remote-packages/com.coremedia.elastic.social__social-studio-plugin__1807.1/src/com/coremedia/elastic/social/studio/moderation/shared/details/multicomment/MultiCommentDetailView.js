Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailView", function(MultiCommentDetailView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.multicomment{
import com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.VBoxLayout;
public class MultiCommentDetailView extends MultiCommentDetailViewBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.multiCommentDetailView";

    public*/function MultiCommentDetailView$(config/*:MultiCommentDetailView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase,{});
    var defaults_$1/*:MultiCommentDetailView*/ =AS3.cast(MultiCommentDetailView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var container_22_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_22_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase.READ_ONLY_CONTAINER_ITEM_ID);
    container_22_5_$1.flex = 1.0;
    container_22_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.DARK_200.getSkin());
    AS3.setBindable(container_22_5_$1,"scrollable" , true);
    var ui_VerticalSpacingPlugin_28_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_22_5_$1.plugins = [ui_VerticalSpacingPlugin_28_9_$1];
    var layout_VBox_31_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_31_9_$1,"align" , "stretch");
    AS3.setBindable(container_22_5_$1,"layout" , layout_VBox_31_9_$1);
    config_$1.items = [container_22_5_$1];
    var layout_VBox_36_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_36_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_36_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HvJn(config_$1);
  }/*

    [Bindable]
    public var abstractContributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.multiCommentDetailView",
      constructor: MultiCommentDetailView$,
      super$HvJn: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {abstractContributionAdministration: null},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
