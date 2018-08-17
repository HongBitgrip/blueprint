Ext.define("com.coremedia.elastic.social.studio.actions.RejectCommentActionBase", function(RejectCommentActionBase) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;

public class RejectCommentActionBase extends ContributionAction {

  public*/ function RejectCommentActionBase$(config/*:RejectCommentAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"rejectComment$2wOm"));

    this.super$2wOm(config);
  }/*

  override protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    var disabled/*:Boolean*/ = true;

    contributions.forEach(function (contribution/*:Contribution*/)/*:void*/ {
      var comment/*:Comment*/ =AS3.as( contribution,  com.coremedia.elastic.social.studio.model.Comment);
      if (comment) {
        if (comment.getContributionState() !== "REJECTED") {
          disabled = false;
        }
      }
    });

    return disabled;
  }/*

  private*/ function rejectComment()/*:void*/ {
    var comment/*:Comment*/ = this.getContributions() ?AS3.as( this.getContributions()[0],  com.coremedia.elastic.social.studio.model.Comment) : null;
    comment && comment.reject(com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getActiveContributionAdministration(), function ()/*:void*/ {
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
      constructor: RejectCommentActionBase$,
      super$2wOm: function() {
        com.coremedia.elastic.social.studio.actions.ContributionAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      rejectComment$2wOm: rejectComment,
      requires: ["com.coremedia.elastic.social.studio.actions.ContributionAction"],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl"
      ]
    };
});
