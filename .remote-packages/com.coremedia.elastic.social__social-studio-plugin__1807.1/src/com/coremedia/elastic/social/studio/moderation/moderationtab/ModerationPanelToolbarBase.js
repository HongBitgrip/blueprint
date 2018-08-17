Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase", function(ModerationPanelToolbarBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.toolbar.Toolbar;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationPanelToolbarBase extends Toolbar {
  private var moderation:Moderation;
  private var activeTabValueExpression:ValueExpression;
  private var moderationContributionAdministrationImpl:ModerationContributionAdministration;
  private var curatedButtonsDisabledValueExpression:ValueExpression;

  public*/ function ModerationPanelToolbarBase$(config/*:ModerationPanelToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$DHLF(config);

    if (config) {
      this.moderation$DHLF = AS3.getBindable(config,"moderation");
      this.moderationContributionAdministrationImpl$DHLF =AS3.as( this.moderation$DHLF.getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);
      this.activeTabValueExpression$DHLF = AS3.getBindable(config,"activeTabValueExpression");
    }
  }/*

  //noinspection JSUnusedGlobalSymbols
  protected static*/ function transformer$static(displayedContribution/*:**/)/*:String*/ {
    var resultText/*:String*/ = "profile";
    if (AS3.is(displayedContribution,  com.coremedia.elastic.social.studio.model.Comment)) {
      resultText = (AS3.cast(com.coremedia.elastic.social.studio.model.Comment,displayedContribution)).getAttachments().length > 0 ? "media" : "comment";
    }
    return resultText;
  }/*

  protected*/ function getCuratedButtonsDisabledValueExpression(moderation/*:Moderation*/)/*:ValueExpression*/ {
    if (!this.curatedButtonsDisabledValueExpression$DHLF) {
      this.curatedButtonsDisabledValueExpression$DHLF = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var selectedItems/*:Array*/ = moderation.getArchiveContributionAdministration().getSelectedContributionItems();
        return selectedItems && selectedItems.length !== 0;
      });
    }
    return this.curatedButtonsDisabledValueExpression$DHLF;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      moderation$DHLF: null,
      activeTabValueExpression$DHLF: null,
      moderationContributionAdministrationImpl$DHLF: null,
      curatedButtonsDisabledValueExpression$DHLF: null,
      constructor: ModerationPanelToolbarBase$,
      super$DHLF: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      getCuratedButtonsDisabledValueExpression: getCuratedButtonsDisabledValueExpression,
      statics: {transformer: transformer$static},
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration"
      ]
    };
});
