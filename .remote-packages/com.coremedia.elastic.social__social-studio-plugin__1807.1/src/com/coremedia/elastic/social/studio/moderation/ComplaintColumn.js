Ext.define("com.coremedia.elastic.social.studio.moderation.ComplaintColumn", function(ComplaintColumn) {/*package com.coremedia.elastic.social.studio.moderation{
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
public class ComplaintColumn extends IconColumn{

    import com.coremedia.elastic.social.studio.model.Comment;
    import com.coremedia.elastic.social.studio.model.Contribution;
    import com.coremedia.elastic.social.studio.model.ModeratedItem;
    import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
    import com.coremedia.elastic.social.studio.model.User;
    import com.coremedia.ui.bem.IconWithTextBEMEntities;
    import com.coremedia.ui.store.BeanRecord;

    import ext.data.Model;

    import ext.data.Store;

    public*/function ComplaintColumn$(config/*:ComplaintColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:ComplaintColumn*/ =AS3.cast(ComplaintColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header = "";
    AS3.setBindable(config_$1,"align" , "center");
    AS3.setBindable(config_$1,"width" , 16);
    config_$1.sortable = false;
    config_$1.groupable = false;
    config_$1.menuDisabled = true;
    AS3.setBindable(config_$1,"modifier" , com.coremedia.ui.bem.IconWithTextBEMEntities.MODIFIER_ERROR);
    config_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ykv$(config_$1);
  }/*

    /** @private * /
    protected override*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return value ? this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'exclamation_mark') : "";
    }/*

    /** @private * /
    protected override*/ function calculateToolTipText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      if (value) {
        var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
        var moderatedItem/*:ModeratedItem*/ = beanRecord &&AS3.as( beanRecord.getBean(),  com.coremedia.elastic.social.studio.model.ModeratedItem);
        var contribution/*:Contribution*/ = moderatedItem &&AS3.as( moderatedItem.getTarget(),  com.coremedia.elastic.social.studio.model.Contribution);
        if (AS3.is(contribution,  com.coremedia.elastic.social.studio.model.Comment)) {
          return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_comments_complaint_tooltip');
        } else if (AS3.is(contribution,  com.coremedia.elastic.social.studio.model.User)) {
          return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_users_complaint_tooltip');
        }
      }
      return null;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ComplaintColumn$,
      super$Ykv$: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      calculateToolTipText: calculateToolTipText,
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.IconWithTextBEMEntities",
        "com.coremedia.ui.store.BeanRecord",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.model.User"
      ]
    };
});
