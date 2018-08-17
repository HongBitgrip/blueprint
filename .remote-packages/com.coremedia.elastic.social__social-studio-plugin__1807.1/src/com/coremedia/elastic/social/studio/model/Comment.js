Ext.define("com.coremedia.elastic.social.studio.model.Comment", function(Comment) {/*package com.coremedia.elastic.social.studio.model {

/**
 * A typed adapter for a <code>RemoteBean</code> representing a comment.
 * Find the property names for constructing <code>ValueExpressions</code> for
 * example within the <code>CommentPropertyNames</code> class.
 *
 * @see com.coremedia.elastic.social.studio.model.CommentPropertyNames
 * /
public interface Comment extends Contribution {
  /**
   * Returns the author name of this <code>Contribution</code>.
   *
   * @return the author name of this <code>Contribution</code>
   *
   * @see com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR_NAME
   * /
  function getAuthorName():String;

  /**
   * Returns this <code>Contribution</code>s author.
   *
   * @return this <code>Contribution</code>s author
   *
   * @see com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR
   * @see User
   * /
  function getAuthor():User;

  /**
   * Returns this <code>Contribution</code>s subject.
   *
   * @return this <code>Contribution</code>s subject
   *
   * @see com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR
   * @see User
   * /
  function getSubject():String;

  /**
   * Returns the mail template which should be used for rejecting this comment.
   *
   * @return the mail template which should be used for rejecting this comment.
   *
   * @see com.coremedia.elastic.social.studio.model.CommentPropertyNames.REJECT_COMMENT_MAIL_TEXT
   * /
  function getRejectCommentMail():ModerationEmail;

  /**
   * Returns a Blob-Array with the attached images.
   *
   * @return a Blob-Array with the attached images
   * /
  function getAttachments():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.elastic.social.studio.model.Contribution"],
      requires: ["com.coremedia.elastic.social.studio.model.Contribution"]
    };
});
