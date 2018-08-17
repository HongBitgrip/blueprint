Ext.define("com.coremedia.elastic.social.studio.moderation.ApproveCommentMenuItem", function(ApproveCommentMenuItem) {/*package com.coremedia.elastic.social.studio.moderation{
import ext.menu.Item;
import net.jangaroo.ext.Exml;
import com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter;
import com.coremedia.elastic.social.studio.actions.ApproveCommentAction;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ApproveCommentMenuItem extends Item{

    import com.coremedia.cms.editor.sdk.preview.PreviewPanelBase;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.approveCommentMenuItem";

    public*/function ApproveCommentMenuItem$(config/*:ApproveCommentMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var defaults_$1/*:ApproveCommentMenuItem*/ =AS3.cast(ApproveCommentMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var es_MetadataToContributionActionAdapter_20_5_$1/*:com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter,{});
    AS3.setBindable(es_MetadataToContributionActionAdapter_20_5_$1,"metadataVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME));
    var es_ApproveCommentAction_23_9_$1/*:com.coremedia.elastic.social.studio.actions.ApproveCommentAction*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ApproveCommentAction,{});
    AS3.setBindable(es_ApproveCommentAction_23_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_approve')));
    AS3.setBindable(es_MetadataToContributionActionAdapter_20_5_$1,"backingAction" , new com.coremedia.elastic.social.studio.actions.ApproveCommentAction(es_ApproveCommentAction_23_9_$1));
    config_$1.baseAction = new com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter(es_MetadataToContributionActionAdapter_20_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PoKc(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      alias: "widget.com.coremedia.elastic.social.studio.config.approveCommentMenuItem",
      constructor: ApproveCommentMenuItem$,
      super$PoKc: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.actions.ApproveCommentAction",
        "com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter"
      ]
    };
});
