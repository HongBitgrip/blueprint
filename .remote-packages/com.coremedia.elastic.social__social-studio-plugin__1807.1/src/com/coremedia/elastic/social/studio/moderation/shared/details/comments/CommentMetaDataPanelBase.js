Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanelBase", function(CommentMetaDataPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.panel.Panel;

public class CommentMetaDataPanelBase extends Panel {
  protected static const USER_INFORMATION_VIEW_ID:String = "cm-elastic-social-detail-user-information";

  private var userInformationView:ContributionUserInformationPanel;
  private var activeTargetInformationItemIdVE:ValueExpression;

  [Bindable]
  public var contributionAdministration:AbstractContributionAdministration;

  public*/ function CommentMetaDataPanelBase$(config/*:CommentMetaDataPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$wa2k(config);
  }/*

  public*/ function showNumberOfContributions(user/*:User*/)/*:void*/ {
    this.getUserInformationView$wa2k().showNumberOfContributions(user);
  }/*

  public*/ function checkAuthor(user/*:User*/)/*:void*/ {
    this.getUserInformationView$wa2k().checkAuthor(user);
  }/*

  public*/ function toggleUserDetailsButton(user/*:User*/)/*:void*/ {
    this.getUserInformationView$wa2k().toggleUserDetailsButton(user);
  }/*

  public*/ function setUserDetailsButtonText(text/*:String*/)/*:void*/ {
    this.getUserInformationView$wa2k().setUserDetailsButtonText(text);
  }/*

  private*/ function getUserInformationView()/*:ContributionUserInformationPanel*/ {
    if (!this.userInformationView$wa2k) {
      this.userInformationView$wa2k =AS3.as( this.getComponent(CommentMetaDataPanelBase.USER_INFORMATION_VIEW_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel);
    }

    return this.userInformationView$wa2k;
  }/*

  protected*/ function getActiveTargetInformationItemIdVE()/*:ValueExpression*/ {var this$=this;
    if (!this.activeTargetInformationItemIdVE$wa2k) {
      this.activeTargetInformationItemIdVE$wa2k = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var comment/*:Comment*/ =AS3.as( AS3.getBindable(this$,"contributionAdministration").getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
        if (comment) {
          var target/*:**/ = comment.getTarget();
          if (target) {
            var name/*:String*/ = target["$className"];
            while (name.indexOf(".") !== -1) {
              name = name.replace('.', '-');
            }
            return name;
          }
        }
        return undefined;
      });
    }
    return this.activeTargetInformationItemIdVE$wa2k;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      userInformationView$wa2k: null,
      activeTargetInformationItemIdVE$wa2k: null,
      constructor: CommentMetaDataPanelBase$,
      super$wa2k: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      showNumberOfContributions: showNumberOfContributions,
      checkAuthor: checkAuthor,
      toggleUserDetailsButton: toggleUserDetailsButton,
      setUserDetailsButtonText: setUserDetailsButtonText,
      getUserInformationView$wa2k: getUserInformationView,
      getActiveTargetInformationItemIdVE: getActiveTargetInformationItemIdVE,
      config: {contributionAdministration: null},
      statics: {USER_INFORMATION_VIEW_ID: "cm-elastic-social-detail-user-information"},
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel"
      ]
    };
});
