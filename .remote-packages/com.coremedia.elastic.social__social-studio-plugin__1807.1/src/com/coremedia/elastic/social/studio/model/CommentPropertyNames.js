Ext.define("com.coremedia.elastic.social.studio.model.CommentPropertyNames", function(CommentPropertyNames) {/*package com.coremedia.elastic.social.studio.model {

public class CommentPropertyNames extends ContributionPropertyNames {
  public static const AUTHOR_NAME:String = "authorName";
  public static const AUTHOR:String = "author";
  public static const TEXT:String = "text";
  public static const SUBJECT:String = "subject";
  public static const REJECT_COMMENT_MAIL_TEXT:String = "rejectCommentMailText";
  public static const ATTACHMENTS:String = "attachments";
}*/function CommentPropertyNames$() {this.super$zeEV();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
      super$zeEV: function() {
        com.coremedia.elastic.social.studio.model.ContributionPropertyNames.prototype.constructor.apply(this, arguments);
      },
      constructor: CommentPropertyNames$,
      statics: {
        AUTHOR_NAME: "authorName",
        AUTHOR: "author",
        TEXT: "text",
        SUBJECT: "subject",
        REJECT_COMMENT_MAIL_TEXT: "rejectCommentMailText",
        ATTACHMENTS: "attachments"
      },
      requires: ["com.coremedia.elastic.social.studio.model.ContributionPropertyNames"]
    };
});
