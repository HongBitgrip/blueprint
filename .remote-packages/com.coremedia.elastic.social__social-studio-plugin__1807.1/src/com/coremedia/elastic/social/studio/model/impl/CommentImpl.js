Ext.define("com.coremedia.elastic.social.studio.model.impl.CommentImpl", function(CommentImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.ModerationEmailProvider;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.Blob;

[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/comment/{id:[A-Za-z0-9]+}")]
public class CommentImpl extends ContributionImpl implements Comment {

  public*/ function CommentImpl$(path/*:String*/) {
    this.super$Qd3S(path);
  }/*

  public*/ function getAuthorName()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR_NAME);
  }/*

  public*/ function getAuthor()/*:User*/ {
    return this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR);
  }/*

  public*/ function getSubject()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.SUBJECT);
  }/*

  public*/ function getRejectCommentMail()/*:ModerationEmail*/ {
    return new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(com.coremedia.elastic.social.studio.model.CommentPropertyNames.REJECT_COMMENT_MAIL_TEXT, this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.REJECT_COMMENT_MAIL_TEXT));
  }/*

  override public*/ function getDefaultModerationEmails()/*:Array*/ {
    return new Array(this.getRejectCommentMail());
  }/*

  override public*/ function approve(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var self/*:Comment*/ = this;
    abstractContributionAdministration.approve(this, null, function ()/*:void*/ {
      this$.setLocalModificationState(false);
      if (abstractContributionAdministration instanceof com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration) {
        (AS3.as(abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration)).setLastProcessed(self);
      }
      abstractContributionAdministration.getDisplayed() && abstractContributionAdministration.getDisplayed().invalidate(function ()/*:void*/ {
        success && success();
        this$.updateListWithTimeout$Qd3S(abstractContributionAdministration);
      });
    }, function ()/*:void*/ {
      failure && failure();
    });
  }/*

  override public*/ function reject(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var self/*:Comment*/ = this;
    var emailProvider/*:ModerationEmailProvider*/ =AS3.as( abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.ModerationEmailProvider);
    abstractContributionAdministration.reject(this, emailProvider.getModerationEmail(this.getRejectCommentMail().getType()), function ()/*:void*/ {
      this$.setLocalModificationState(false);
      if (abstractContributionAdministration instanceof com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration) {
        (AS3.as(abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration)).setLastProcessed(self);
      }
      abstractContributionAdministration.getDisplayed() && abstractContributionAdministration.getDisplayed().invalidate(function ()/*:void*/ {
        success && success();
        this$.updateListWithTimeout$Qd3S(abstractContributionAdministration);
      });

    }, function ()/*:void*/ {
      failure && failure();
    });
  }/*

  private*/ function updateListWithTimeout(abstractContributionAdministration/*:AbstractContributionAdministration*/)/*:void*/ {
    window.setTimeout(function ()/*:void*/ {
      abstractContributionAdministration.updateList();
    }, 2000);
  }/*

  override public*/ function loadUserNotes(abstractContributionAdministration/*:AbstractContributionAdministration*/, user/*:User*/)/*:void*/ {
    abstractContributionAdministration.initUserNotes(user);
  }/*

  public*/ function getAttachments()/*:Array*/ {
    var array/*:Array*/ = [];

    if (this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.ATTACHMENTS)) {
      this.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.ATTACHMENTS).forEach(function (t/*:**/)/*:void*/ {
        array.push(AS3.as(t,  com.coremedia.ui.data.Blob));
      });
    }
    return array;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.ContributionImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.Comment"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/comment/{id:[A-Za-z0-9]+}"
        ]
      ]},
      constructor: CommentImpl$,
      super$Qd3S: function() {
        com.coremedia.elastic.social.studio.model.impl.ContributionImpl.prototype.constructor.apply(this, arguments);
      },
      getAuthorName: getAuthorName,
      getAuthor: getAuthor,
      getSubject: getSubject,
      getRejectCommentMail: getRejectCommentMail,
      getDefaultModerationEmails: getDefaultModerationEmails,
      approve: approve,
      reject: reject,
      updateListWithTimeout$Qd3S: updateListWithTimeout,
      loadUserNotes: loadUserNotes,
      getAttachments: getAttachments,
      requires: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.impl.ContributionImpl",
        "com.coremedia.ui.data.Blob"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModerationEmailProvider",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl"
      ]
    };
});
