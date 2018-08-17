Ext.define("com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn", function(ContributionTypeColumn) {/*package com.coremedia.elastic.social.studio.moderation{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
/**
 A column object that displays the lifecycle status of a content as an icon.
 This column expects that a status field is defined, providing
 the content's status.
 * /
public class ContributionTypeColumn extends IconColumn{

    import com.coremedia.elastic.social.studio.model.Comment;
    import com.coremedia.elastic.social.studio.model.Contribution;
    import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
    import com.coremedia.elastic.social.studio.model.Review;
    import com.coremedia.elastic.social.studio.model.User;

    import ext.data.Model;

    import ext.data.Store;

    public*/function ContributionTypeColumn$(config/*:ContributionTypeColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:ContributionTypeColumn*/ =AS3.cast(ContributionTypeColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_type'));
    config_$1.sortable = false;
    config_$1.groupable = false;
    config_$1.menuDisabled = true;
    AS3.setBindable(config_$1,"width" , 40);
    AS3.setBindable(config_$1,"align" , "center");
    config_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$u7i2(config_$1);
  }/*

    /** @private * /
    protected override*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      var iconCls/*:String*/ = "";

      var contribution/*:Contribution*/ =AS3.as( value,  com.coremedia.elastic.social.studio.model.Contribution);
      if (contribution) {
        var comment/*:Comment*/ =AS3.as( contribution,  com.coremedia.elastic.social.studio.model.Comment);
        if (comment) {
          iconCls = this.resourceManager.getString("com.coremedia.icons.CoreIcons", "comment");
          if (comment.getAttachments().length > 0) {
            iconCls = this.resourceManager.getString("com.coremedia.icons.CoreIcons", "comment_attachment");
          }
          if (AS3.is(comment,  com.coremedia.elastic.social.studio.model.Review)) {
            iconCls = this.resourceManager.getString("com.coremedia.icons.CoreIcons", "review");
          }
        } else {
          if (AS3.is(contribution,  com.coremedia.elastic.social.studio.model.User)) {
            iconCls = this.resourceManager.getString("com.coremedia.icons.CoreIcons", "user");
          }
        }
      }

      return iconCls;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ContributionTypeColumn$,
      super$u7i2: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.model.Review",
        "com.coremedia.elastic.social.studio.model.User"
      ]
    };
});
