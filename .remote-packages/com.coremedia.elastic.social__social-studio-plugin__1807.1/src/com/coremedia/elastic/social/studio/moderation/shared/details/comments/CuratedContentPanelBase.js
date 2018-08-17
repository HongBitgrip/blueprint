Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanelBase", function(CuratedContentPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.cap.content.Content;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;

import ext.panel.Panel;

public class CuratedContentPanelBase extends Panel {

  private var moderationContributionAdministration:AbstractContributionAdministration;

  public*/ function CuratedContentPanelBase$(config/*:CuratedContentPanel = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministration$rRyd =AS3.as( AS3.getBindable(config,"abstractContribution"),  com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration);
    this.super$rRyd(config);
  }/*

  protected override*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.createCuratedContentList();
  }/*

  public*/ function createCuratedContentList()/*:void*/ {
    this.removeAll();
    var comment/*:Contribution*/ =AS3.as( this.moderationContributionAdministration$rRyd.getDisplayed(),  com.coremedia.elastic.social.studio.model.Contribution);
    if (comment) {
      var curatedContents/*:Array*/ = comment.getCuratedContents();
      for (var i=0; i<curatedContents.length; i++) {
        var curatedContent/*:Content*/ = curatedContents[i];
        if (curatedContent) {
          this.add(this.createButtonFromContent$rRyd(curatedContent));
        }
      }
    }
  }/*

  private*/ function createButtonFromContent(content/*:Content*/)/*:CuratedContentButton*/ {
    var buttonConfig/*:CuratedContentButton*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton,{});
    buttonConfig.content = content;
    return buttonConfig;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      moderationContributionAdministration$rRyd: null,
      constructor: CuratedContentPanelBase$,
      super$rRyd: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      createCuratedContentList: createCuratedContentList,
      createButtonFromContent$rRyd: createButtonFromContent,
      requires: ["Ext.panel.Panel"],
      uses: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton"
      ]
    };
});
