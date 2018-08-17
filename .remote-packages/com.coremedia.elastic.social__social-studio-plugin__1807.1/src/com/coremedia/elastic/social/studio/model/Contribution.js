Ext.define("com.coremedia.elastic.social.studio.model.Contribution", function(Contribution) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;

/**
 * A contribution is the parent of all <code>RemoteBeans</code> which shall be subject of moderation. They
 * all need to have a date of creation, one can complain about them, they may have a target to which they are
 * associated, one can approve or reject them, they bear a set of emails which may be sent during the
 * process of moderation and they need to be previewed.
 *
 * /
public interface Contribution extends RemoteBean {
  /**
   * Returns the globally unique if of this contribution.
   *
   * @return the globally unique if of this contribution
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionPropertyNames.ID
   * /
  function getId():String;

  /**
   * Returns the creation date of this <code>Contribution</code>.
   *
   * @return the creation date of this <code>Contribution</code>
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionPropertyNames.CREATION_DATE
   * /
  function getCreationDate():Date;

  /**
   * Returns the number of complaints for this <code>Contribution</code>.
   *
   * @return the number of complaints for this <code>Contribution</code>
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_COMPLAINTS
   * /
  function getNumberOfComplaints():uint;

  /**
   * Returns the date of the last complaint for this contribution.
   *
   * Only complaints since the last approval of the contribution are considered.
   *
   * @return the date of the last complaint since the last approval
   * /
  function getLastComplaintDate():Date;

  /**
   * Returns the name of the state this <code>Contribution</code> is in.
   *
   * @return the name of the state this <code>Contribution</code> is in
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE
   * /
  function getContributionState():String;

  /**
   * Returns the target this <code>Contribution</code> was written for. If you do not know
   * whether the referenced target bean is loaded already or not, you may fetch it as
   * the first parameter to the optional callback function named loaded, where it is
   * guaranteed to exist.
   *
   * @param loaded a callback function with one parameter of type <code>Content</code>
   * which is called after it is loaded.
   * @return the target this <code>Contribution</code> was written for if it is loaded already
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionPropertyNames.TARGET
   * /
  function getTarget(loaded:Function = null):*;

  /**
   * Returns the preview url for this <code>Contribution</code>.
   * @return the preview url for this <code>Contribution</code>
   * /
  function getPreviewUrl():String;

  /**
   * Returns the curated contents for this <code>Contribution</code>
   * Deleted curated contents will not be returned.
   *
   * @param isReadable a boolean, which defines if contents are returned only if they are readable. defaults to true.
   * @param doesExist a boolean, which defines if contents are returned only if they exist. defaults to true.
   *
   * @return an <code>Array</code> of curated contents fot this <code>Contribution</code>
   * /
  function getCuratedContents(isReadable:Boolean = true, doesExist:Boolean = true):Array;

  /**
   * Returns a set of emails which may be sent to someone during the process of moderation.
   * During moderation it may be necessary to let someone know about the changes made to a
   * contribution while being moderated. For example: The author of a <code>Comment</code> shall
   * receive an email in case a comment he wrote was rejected.
   *
   * @return an <code>Array</code> of <code>ModerationEmail</code>s specific for this contribution
   * /
  function getDefaultModerationEmails():Array;

  /**
   * Approves this contribution by using the <code>ContributionAdministration</code>.
   *
   * @param abstractContributionAdministration the <code>AbstractContributionAdministration</code> which actually
   * will do the job.
   * @param success a callback which is called after successfully approving the contribution.
   * @param failure a callback which is called if approving returns with an error. The function expects
   * one parameter, an associative Array where the keys are user property names and the values error codes
   *
   * @see AbstractContributionAdministration#approve
   * /
  function approve(abstractContributionAdministration:AbstractContributionAdministration, success:Function = null, failure:Function = null):void;

  /**
   * Rejects this contribution by using the given contribution administration. You may use
   * <code>ContributionAdministration.reject()</code> instead but this method gives you the chance
   * to do contribution specific things prior to actually rejecting it. For example you might want
   * to seek a certain email which is known by the specific contribution only.
   *
   * @param abstractContributionAdministration the <code>AbstractContributionAdministration</code> which actually
   * will do the job.
   * @param success a callback which is called after successfully rejecting the contribution.
   * @param failure a callback with one parameter, an associative array where the keys are user property
   * names and the values are error codes, which is called in case of a validation error
   * /
  function reject(abstractContributionAdministration:AbstractContributionAdministration, success:Function = null, failure:Function = null):void;


  /**
   * Loads the user notes from the given user and puts them into <code>ContributionAdministrationPropertyNames.NOTES</code>
   * (which also should be used for accessing the notes). If the forwarded user is <code>null</code>, the value of
   * <code>ContributionAdministrationPropertyNames.NOTES</code> will also be <code>null</code>.
   * @param abstractContributionAdministration the <code>AbstractContributionAdministration</code> which actually
   * will do the job.
   * @param user the user (or author) who's notes will be fetched
   * /
  function loadUserNotes(abstractContributionAdministration:AbstractContributionAdministration, user:User):void;

  /**
   * Returns, whether this contribution has been changed by moderator (from the server - after invalidating)
   *
   * @return <code>true</code> if there are staged changes (from the server - after invalidating)
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionPropertyNames.HAS_STAGE_CHANGES
   * /
  function hasStageChanges():Boolean;

  /**
   * Returns, whether this contribution has been changed by moderator (from the client - even before invalidating)
   * @return <code>true</code> if this contribution has been changed by moderator (from the client - even before
   * invalidating)
   * /
  function hasLocalModifications():Boolean;

  /**
   * Returns a ValueExpression that is bound to the localModificationState. Every time a moderator changes a contribution's
   * moderated property, the ValueExpression will notify you and return <code>true</code> as its value. When the contribution gets
   * invalidated (re-selected, approved or rejected), this ValueExpression will notify you and return <code>false</code>.
   * @return a ValueExpression that is bound to the localModificationState
   * /
  function hasLocalModificationValueExpression():ValueExpression;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
