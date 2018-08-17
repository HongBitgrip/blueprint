Ext.define("com.coremedia.elastic.social.studio.model.User", function(User) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Blob;

/**
 * A typed adapter for a <code>RemoteBean</code> representing a user.
 * Find the property names for constructing <code>ValueExpression</code> for
 * example within the <code>UserPropertyNames</code> class.
 *
 * @see com.coremedia.elastic.social.studio.model.UserPropertyNames
 * /
public interface User extends Contribution, BeanValidator {
  /**
   * Returns this users unique name.
   *
   * @return this users unique name
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME
   * /
  function getName():String;

  function setName(name:String):void;

  function setGivenName(givenName:String):void;

  /**
   * Sets the surname of this user.
   *
   * @param surName the given surname
   * /
  function setSurName(surName:String):void;

  /**
   * Returns the email address of this user.
   *
   * @return the email address of this user.
   * /
  function getEmailAddress():String;

  /**
   * Sets the email address of this user.
   *
   * @param email the new email address of this user
   * /
  function setEmailAddress(email:String):void;

  /**
   * Returns this users registration date.
   *
   * @return this users registration date
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.REGISTRATION_DATE
   * /
  function getRegistrationDate():Date;

  /**
   * Removes the users image.
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE
   * /
  function removeImage():void;

  /**
   * Returns the users image as a <code>Blob</code>.
   *
   * @return the users image as a <code>Blob</code>
   * /
  function getImage():Blob;

  /**
   * Checks whether the user is activated.
   *
   * @return <code>true</code> if the user is activated
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE
   * /
  function isActivated():Boolean;

  /**
   * Activates this user.
   * /
  function activate():void;

  /**
   * Checks whether the user needs to be moderated.
   *
   * @return <code>true</code> if the user needs to be moderated.
   * /
  function isModerationRequired():Boolean;

  /**
   * Sets the users state to moderation_required. Users in this state will be displayed
   * within the list of moderated items.
   *
   * @see ContributionAdministration#getModeratedItems
   * /
  function moderate():void;

  /**
   * Checks whether the user is blocked.
   *
   * @return <code>true</code> if the user is blocked
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE
   * /
  function isBlocked():Boolean;

  /**
   * Blocks this user. A blocked user is not able to contribute.
   * /
  function block():void;

  /**
   * Checks whether the user is ignored.
   *
   * @return <code>true</code> if the user is ignored
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE
   * /
  function isIgnored():Boolean;

  /**
   * Ignores this user. An ignored user does not recognize that no single contribution he
   * made shows up within the webapp, he simply is ignored.
   * /
  function ignore():void;

  /**
   * Checks whether the user is anonymous.
   *
   * @return <code>true</code> if the user is anonymous
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.ANONYMOUS
   * /
  function isAnonymous():Boolean;

  /**
   * Deletes this user by anonymizing it. That is all properties are filled with completely
   * random values.
   *
   * @param moderationEmail the Email to be sent to the user
   * @param success function success(response:RemoteServiceMethodResponse):void
   * @param failure function failure(response:RemoteServiceMethodResponse):void
   * /
  function anonymize(moderationEmail:ModerationEmail, success:Function = null, failure:Function = null):void;

  /**
   * Checks whether the user is in state registration requested.
   *
   * @return <code>true</code> if the user is state registration requested
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE
   * /
  function isRegistrationRequested():Boolean;

  /**
   * Returns, whether this user was changed since it was last moderated.
   *
   * @return <code>true</code> if the user changed since it was last moderated.
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.CHANGED_SINCE_LAST_MODERATION
   * /
  function hasChangedSinceLastModeration():Boolean;

  /**
   * Returns, whether this has been moderated.
   *
   * @return <code>true</code> if the user has been moderated
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.HAS_LAST_MODERATED_PROPERTIES
   * /
  function hasLastModeratedProperties():Boolean;


  /**
   * Returns the number of comments and reviews a user has created.
   *
   * @return the number of comments and reviews a user has created
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_CONTRIBUTIONS
   * /
  function getNumberOfContributions():uint;

  /**
   * Returns the number of rejected comments and reviews a user has created.
   *
   * @return the number of rejected comments and reviews a user has created
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.REJECTED_CONTRIBUTIONS
   * /
  function getNumberOfRejectedContributions():uint;

  /**
   * Returns the mail template for blocking this user.
   *
   * @return the mail template for blocking this user
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.BLOCK_USER_MAIL_TEXT
   * /
  function getBlockUserMail():ModerationEmail;

  /**
   * Returns the mail template for deleting this user.
   *
   * @return the mail template for deleting this user
   *
   * @see com.coremedia.elastic.social.studio.model.UserPropertyNames.DELETE_USER_MAIL_TEXT
   * /
  function getDeleteUserMail():ModerationEmail;

  /**
   * Returns the mail template for restoring this user.
   *
   * @return the mail template for restoring this user
   * /
  function getRestoreUserMail():ModerationEmail;

  /**
   * Returns the mail template for changing this users profile.
   *
   * @return the mail template for changing this users profile
   * /
  function getProfileChangedMail():ModerationEmail;

  /**
   * Resends the registration confirmation email to the user.
   *
   * @param success a function with no parameters called after successfully sending
   * the registration confirmation email
   * @param failure a function with one parameter, an associative array where the keys
   * are user property names and the values are error codes, which is called if
   * sending the registration confirmation mail failed.
   * /
  function resendRegistrationConfirmation(success:Function, failure:Function):void;

  /**
   * Loads the notes for this user.
   *
   * @param success function success(notes:Notes):void
   * @param failure function failure(response:RemoteServiceMethodResponse):void
   * /
  function loadNotes(success:Function, failure:Function = null):void;

  /**
   * Tells the server to accept all changes staged for this <code>User</code>
   * so far as being published.
   *
   * @param mails the <code>ModerationEmail</code>s
   * @param success function success(response:RemoteServiceMethodResponse):void
   * @param failure function failure(response:RemoteServiceMethodResponse):void
   * /
  function apply(mails:Array, success:Function, failure:Function = null):void;

  /**
   * Cancels the editing of the <code>User</code>. While a <code>User</code> is being edited,
   * that is after <code>startEditing()</code> was triggered, changes are automatically
   * pushed to the server. That means you have to tell the server explicitly to discard
   * those changes when the editor decides to cancel the editing process.
   *
   * @param success function success(response:RemoteServiceMethodResponse):void
   * @param failure function failure(response:RemoteServiceMethodResponse):void
   * /
  function cancel(success:Function, failure:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.BeanValidator"
      ],
      requires: [
        "com.coremedia.elastic.social.studio.model.BeanValidator",
        "com.coremedia.elastic.social.studio.model.Contribution"
      ]
    };
});
