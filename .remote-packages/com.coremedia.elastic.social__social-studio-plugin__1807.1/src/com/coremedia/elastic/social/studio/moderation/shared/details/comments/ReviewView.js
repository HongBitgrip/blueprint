Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView", function(ReviewView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.container.Container;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.form.FieldContainer;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.StatefulNumberField;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ReviewView extends CommentView{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.ReviewPropertyNames;
    import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.reviewView";

    public static const RICHTEXT_CONTAINER_HEIGHT:uint = 129;

    public static const TITLE_FIELD_ITEM_ID:String = "titleFieldItemId";

    public static const RATING_FIELD_ITEM_ID:String = "ratingFieldItemId";

    private var titleVE:ValueExpression;
    private var ratingVE:ValueExpression;

    public*/function ReviewView$(config/*:ReviewView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView,{});
    var defaults_$1/*:ReviewView*/ =AS3.cast(ReviewView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"abstractContributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    AS3.setBindable(config_$1,"blacklistAdministration" , AS3.getBindable(config,"blacklistAdministration"));
    AS3.setBindable(config_$1,"userAdministration" , AS3.getBindable(config,"userAdministration"));
    AS3.setBindable(config_$1,"richtextContainerHeight" , ReviewView.RICHTEXT_CONTAINER_HEIGHT);
    AS3.setBindable(config_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION));
    var ui_NestedRulesPlugin_58_5_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var container_60_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_60_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView.CENTER_CONTAINER_ITEM_ID);
    var ui_AddItemsPlugin_62_13_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    AS3.setBindable(ui_AddItemsPlugin_62_13_$1,"index" , 0);
    var fieldContainer_64_17_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_64_17_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'reviewdetail_title')));
    fieldContainer_64_17_$1.labelSeparator = "";
    fieldContainer_64_17_$1.labelAlign = "top";
    var textField_68_21_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_68_21_$1.itemId =net.jangaroo.ext.Exml.asString( ReviewView.TITLE_FIELD_ITEM_ID);
    textField_68_21_$1.checkChangeBuffer = 1.0;
    textField_68_21_$1.flex = 1.0;
    var ui_BindPropertyPlugin_72_25_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_72_25_$1.bindTo = this.getTitleVE$4JD4(config);
    textField_68_21_$1.plugins = [ui_BindPropertyPlugin_72_25_$1];
    var displayField_76_21_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_76_21_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'reviewDetail_rating'));
    displayField_76_21_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    AS3.setBindable(displayField_76_21_$1,"margin" , "0 6 0 12");
    var ui_StatefulNumberField_79_21_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_79_21_$1.itemId =net.jangaroo.ext.Exml.asString( ReviewView.RATING_FIELD_ITEM_ID);
    AS3.setBindable(ui_StatefulNumberField_79_21_$1,"spinDownEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_79_21_$1,"spinUpEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_79_21_$1,"minValue" , 1.0);
    AS3.setBindable(ui_StatefulNumberField_79_21_$1,"maxValue" , 5.0);
    AS3.setBindable(ui_StatefulNumberField_79_21_$1,"width" , 50);
    ui_StatefulNumberField_79_21_$1.allowBlank = false;
    ui_StatefulNumberField_79_21_$1.checkChangeBuffer = 1.0;
    var ui_BindPropertyPlugin_88_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_88_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_88_25_$1.bindTo = this.getRatingVE$4JD4(config);
    var ui_BindPropertyPlugin_90_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_90_25_$1.ifUndefined = "";
    ui_BindPropertyPlugin_90_25_$1.componentEvent = "spin";
    ui_BindPropertyPlugin_90_25_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : null;};
    ui_BindPropertyPlugin_90_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_90_25_$1.bindTo = this.getRatingVE$4JD4(config);
    ui_StatefulNumberField_79_21_$1.plugins = [ui_BindPropertyPlugin_88_25_$1, ui_BindPropertyPlugin_90_25_$1];
    fieldContainer_64_17_$1.items = [textField_68_21_$1, displayField_76_21_$1, ui_StatefulNumberField_79_21_$1];
    var layout_HBox_99_21_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_99_21_$1,"align" , "stretch");
    AS3.setBindable(fieldContainer_64_17_$1,"layout" , layout_HBox_99_21_$1);
    AS3.setBindable(ui_AddItemsPlugin_62_13_$1,"items" , [fieldContainer_64_17_$1]);
    container_60_9_$1.plugins = [ui_AddItemsPlugin_62_13_$1];
    ui_NestedRulesPlugin_58_5_$1.rules = [container_60_9_$1];
    config_$1.plugins = [ui_NestedRulesPlugin_58_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4JD4(config_$1);
  }/*

    private*/ function getTitleVE(config/*:ReviewView*/)/*:ValueExpression*/ {
      if (!this.titleVE$4JD4) {
        this.titleVE$4JD4 = com.coremedia.ui.data.ValueExpressionFactory.create(
                com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, com.coremedia.elastic.social.studio.model.ReviewPropertyNames.TITLE]),
                AS3.getBindable(config,"abstractContributionAdministration"));
      }
      return this.titleVE$4JD4;
    }/*

    private*/ function getRatingVE(config/*:ReviewView*/)/*:ValueExpression*/ {
      if (!this.ratingVE$4JD4) {
        this.ratingVE$4JD4 = com.coremedia.ui.data.ValueExpressionFactory.create(
                com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, com.coremedia.elastic.social.studio.model.ReviewPropertyNames.RATING]),
                AS3.getBindable(config,"abstractContributionAdministration"));
      }
      return this.ratingVE$4JD4;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView",
      alias: "widget.com.coremedia.elastic.social.studio.config.reviewView",
      titleVE$4JD4: null,
      ratingVE$4JD4: null,
      constructor: ReviewView$,
      super$4JD4: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView.prototype.constructor.apply(this, arguments);
      },
      getTitleVE$4JD4: getTitleVE,
      getRatingVE$4JD4: getRatingVE,
      statics: {
        RICHTEXT_CONTAINER_HEIGHT: 129,
        TITLE_FIELD_ITEM_ID: "titleFieldItemId",
        RATING_FIELD_ITEM_ID: "ratingFieldItemId"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.FieldContainer",
        "Ext.form.field.Display",
        "Ext.form.field.Text",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ReviewPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
