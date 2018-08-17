Ext.define("com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase", function(ApproveCommentActionBase) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;

public class ApproveCommentActionBase extends ContributionAction {

  public*/ function ApproveCommentActionBase$(config/*:ApproveCommentAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"approveComment$MVaG"));

    this.super$MVaG(config);
  }/*

  override protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    return !contributions.some(function (contribution/*:Contribution*/)/*:Boolean*/ {
              return contribution.hasStageChanges()
                      || contribution.hasLocalModifications()
                      || contribution.getContributionState() !== "APPROVED"
                      || contribution.getLastComplaintDate();
            }
    );
  }/*

  private*/ function approveComment()/*:void*/ {
    var comment/*:Comment*/ = this.getContributions() ?AS3.as( this.getContributions()[0],  com.coremedia.elastic.social.studio.model.Comment) : null;
    comment && comment.approve(com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getActiveContributionAdministration(), function ()/*:void*/ {
      var author/*:User*/ = comment.getAuthor();
      if (author && !author.isAnonymous()) {
        author.invalidate();
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ContributionAction",
      constructor: ApproveCommentActionBase$,
      super$MVaG: function() {
        com.coremedia.elastic.social.studio.actions.ContributionAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      approveComment$MVaG: approveComment,
      requires: ["com.coremedia.elastic.social.studio.actions.ContributionAction"],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl"
      ]
    };
});
