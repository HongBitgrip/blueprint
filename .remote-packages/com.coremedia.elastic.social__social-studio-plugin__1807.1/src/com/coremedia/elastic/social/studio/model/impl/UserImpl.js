Ext.define("com.coremedia.elastic.social.studio.model.impl.UserImpl", function(UserImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.ModerationEmailProvider;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/user/{id:[A-Za-z0-9-]+}")]
public class UserImpl extends ContributionImpl implements User {

  private static const*/var NOTE_PATH_SEGMENT$static/*:String*/ = "/note";/*
  private static const*/var APPLY_PATH_SEGMENT$static/*:String*/ = "/apply";/*
  private static const*/var CANCEL_PATH_SEGMENT$static/*:String*/ = "/cancel";/*
  private static const*/var ANONYMIZE_PATH_SEGMENT$static/*:String*/ = "/anonymize";/*
  private static const*/var VALIDATION_PATH_SEGMENT$static/*:String*/ = "/validate";/*

  public*/ function UserImpl$(path/*:String*/) {
    this.super$5D7k(path);
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
  }/*

  public*/ function setName(name/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME, name);
  }/*

  public*/ function setGivenName(givenName/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.GIVENNAME, givenName);
  }/*

  public*/ function setSurName(surName/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.SURNAME, surName);
  }/*

  public*/ function getEmailAddress()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
  }/*

  public*/ function setEmailAddress(email/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL, email);
  }/*

  public*/ function getRegistrationDate()/*:Date*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.REGISTRATION_DATE);
  }/*

  public*/ function isActivated()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "ACTIVATED";
  }/*

  public*/ function activate()/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE, "ACTIVATED");
  }/*

  public*/ function isModerationRequired()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "MODERATION_REQUIRED" ||
            this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "ACTIVATED_MODERATION_REQUIRED";
  }/*

  /**
   * Only sets the state to "ACTIVATION_MODERATION_REQUIRED" if the user
   * has already finished the registration process. Otherwise I do not know
   * if I have to set it to "MODERATION_REQUIRED" or "ACTIVATION_MODERATION_REQUIRED".
   * /
  public*/ function moderate()/*:void*/ {
    if (!this.isRegistrationRequested() && !this.isModerationRequired()) {
      this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE, "MODERATION_REQUIRED");
    }
  }/*

  public*/ function isIgnored()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "IGNORED";
  }/*

  public*/ function ignore()/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE, "IGNORED");
  }/*

  public*/ function isBlocked()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "BLOCKED";
  }/*

  public*/ function block()/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE, "BLOCKED");
  }/*

  public*/ function isAnonymous()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "ANONYMIZED";
  }/*

  public*/ function anonymize(moderationEmail/*:ModerationEmail*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    success = success || Ext.emptyFn;
    failure = failure || Ext.emptyFn;

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + ANONYMIZE_PATH_SEGMENT$static, "POST");
    rsm.request(
            {
              'params' : moderationEmail.getText()
            },
            success,
            failure
    );
  }/*

  public*/ function isRegistrationRequested()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE) === "REGISTRATION_REQUESTED";
  }/*

  public*/ function removeImage()/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE, null);
  }/*

  public*/ function getImage()/*:Blob*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE),  com.coremedia.ui.data.Blob);
  }/*

  public*/ function hasChangedSinceLastModeration()/*:Boolean*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.CHANGED_SINCE_LAST_MODERATION),  Boolean);
  }/*

  public*/ function hasLastModeratedProperties()/*:Boolean*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.HAS_LAST_MODERATED_PROPERTIES),  Boolean);
  }/*

  public*/ function getNumberOfContributions()/*:uint*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_CONTRIBUTIONS);
  }/*

  public*/ function getNumberOfRejectedContributions()/*:uint*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.REJECTED_CONTRIBUTIONS);
  }/*

  public*/ function getBlockUserMail()/*:ModerationEmail*/ {
    var email/*:String*/ = String(this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.BLOCK_USER_MAIL_TEXT));
    if (!email) {
      email = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_block_and_send_default_email');
    }

    return new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(com.coremedia.elastic.social.studio.model.UserPropertyNames.BLOCK_USER_MAIL_TEXT, email);
  }/*

  public*/ function getDeleteUserMail()/*:ModerationEmail*/ {
    var email/*:String*/ = String(this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.DELETE_USER_MAIL_TEXT));
    if (!email) {
      email = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_and_send_default_email');
    }

    return new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(com.coremedia.elastic.social.studio.model.UserPropertyNames.DELETE_USER_MAIL_TEXT, email);
  }/*

  public*/ function getRestoreUserMail()/*:ModerationEmail*/ {
    var email/*:String*/ = String(this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.RESTORE_USER_MAIL_TEXT));
    if (!email) {
      email = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_restore_and_send_default_email');
    }

    return new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(com.coremedia.elastic.social.studio.model.UserPropertyNames.RESTORE_USER_MAIL_TEXT, email);
  }/*

  public*/ function getProfileChangedMail()/*:ModerationEmail*/ {
    var email/*:String*/ = String(this.get(com.coremedia.elastic.social.studio.model.UserPropertyNames.PROFILE_CHANGED_MAIL_TEXT));
    if (!email) {
      email = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_profile_changed_default_email');
    }

    return new com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl(com.coremedia.elastic.social.studio.model.UserPropertyNames.PROFILE_CHANGED_MAIL_TEXT, email);
  }/*

  override public*/ function getDefaultModerationEmails()/*:Array*/ {
    return [this.getBlockUserMail(),
            this.getDeleteUserMail(),
            this.getRestoreUserMail(),
            this.getProfileChangedMail()];
  }/*

  override public*/ function approve(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var self/*:User*/ = this;
    abstractContributionAdministration.approve(this, this.getProfileChangedMail(),
            function ()/*:void*/ {
              if (!this$.isAnonymous() && abstractContributionAdministration instanceof com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration) {
                (AS3.as(abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration)).setLastProcessed(self);
              }
              success && success();
            }, function (messages/*:Object*/)/*:void*/ {
              failure && failure(messages);
            });
  }/*

  override public*/ function reject(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var self/*:User*/ = this;
    var emailProvider/*:ModerationEmailProvider*/ =AS3.as( abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.ModerationEmailProvider);
    var emailText/*:ModerationEmail*/;
    if (this.hasChangedSinceLastModeration()) {
      emailText = emailProvider.getModerationEmail(this.getRestoreUserMail().getType());
    } else {
      emailText = emailProvider.getModerationEmail(this.getDeleteUserMail().getType());
    }

    abstractContributionAdministration.reject(this, emailText,
            function ()/*:void*/ {
              if (!self.isAnonymous() && abstractContributionAdministration instanceof com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration) {
                (AS3.as(abstractContributionAdministration,  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration)).setLastProcessed(self);
              }
            },
            function (messages/*:Array*/)/*:void*/ {
              failure && failure(messages);
            });
  }/*

  public*/ function validateProperty(propertyName/*:String*/, invalid/*:Function*/, valid/*:Function = null*/)/*:void*/ {if(arguments.length<=2)valid=null;
    var validateService/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getValidationUrl$5D7k(propertyName), "GET");
    validateService.request(null, function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var message/*:String*/ = response.response.responseText;
      if (message) {
        invalid(message);
      } else if (valid) {
        valid();
      }
    }, function ()/*:void*/ {
      //noinspection JSUnusedGlobalSymbols
      invalid({nothing:"unknown_error"});
    });
  }/*

  /**
   * ATTENTION! You have to use encodeURIComponent instead of encodeURI because the special character
   * # is only encoded by encodeURIComponent!
   * /
  private*/ function getValidationUrl(propertyName/*:String*/)/*:String*/ {
    return this.getUriPath() + VALIDATION_PATH_SEGMENT$static +
            propertyName.charAt(0).toUpperCase() + propertyName.substr(1) +
            "?" + propertyName + "=" + encodeURIComponent(this.get(propertyName));
  }/*

  public*/ function resendRegistrationConfirmation(success/*:Function*/, failure/*:Function*/)/*:void*/ {
    var resendService/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/sendRegistrationConfirmation", "POST");
    resendService.request(
            {'params':this.getProfileChangedMail().getText()},
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var errors/*:Object*/ = response.getResponseJSON();
              if (errors) {
                failure && failure(errors);
              } else {
                success && success();
              }
            }, com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse);

  }/*

  override public*/ function loadUserNotes(abstractContributionAdministration/*:AbstractContributionAdministration*/, user/*:User*/)/*:void*/ {
    abstractContributionAdministration.initUserNotes(user);
  }/*

  public*/ function loadNotes(success/*:Function*/, failure/*:Function=null*/)/*:void*/ {if(arguments.length<=1)failure=null;
    failure = failure || Ext.emptyFn;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + NOTE_PATH_SEGMENT$static, "GET");
    rsm.request(null,
            function(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var notes/*:NotesImpl*/ =AS3.as( rsmr.getResponseJSON(),  com.coremedia.elastic.social.studio.model.impl.NotesImpl);
              success(notes);
            },
    failure
    );
  }/*

  public*/ function apply(mails/*:Array*/, success/*:Function*/, failure/*:Function = null*/)/*:void*/ {if(arguments.length<=2)failure=null;
    success = success || Ext.emptyFn;
    failure = failure || Ext.emptyFn;

   var serializedMails/*:Array*/ = toObjectArray$static(mails);

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + APPLY_PATH_SEGMENT$static, "POST", true);
    rsm.request(
            {
              state: this.getContributionState(),
              mails: serializedMails
            },
            success,
            failure
    );
  }/*

  private static*/ function toObjectArray$static(beans/*:Array*/)/*:Array*/ {
    var json/*:Array*/ = [];

    if (beans) {
      var size/*:int*/ = beans.length;
      for (var i/*:int*/ = 0; i < size; i++) {
        json.push(beans[i].toObject());
      }
    }

    return json;
  }/*

  public*/ function cancel(success/*:Function*/, failure/*:Function = null*/)/*:void*/ {if(arguments.length<=1)failure=null;
    success = success || Ext.emptyFn;
    failure = failure || Ext.emptyFn;

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + CANCEL_PATH_SEGMENT$static, "POST");
    rsm.request(
      null,
      success,
      failure
    );
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.ContributionImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.User"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/user/{id:[A-Za-z0-9-]+}"
        ]
      ]},
      constructor: UserImpl$,
      super$5D7k: function() {
        com.coremedia.elastic.social.studio.model.impl.ContributionImpl.prototype.constructor.apply(this, arguments);
      },
      getName: getName,
      setName: setName,
      setGivenName: setGivenName,
      setSurName: setSurName,
      getEmailAddress: getEmailAddress,
      setEmailAddress: setEmailAddress,
      getRegistrationDate: getRegistrationDate,
      isActivated: isActivated,
      activate: activate,
      isModerationRequired: isModerationRequired,
      moderate: moderate,
      isIgnored: isIgnored,
      ignore: ignore,
      isBlocked: isBlocked,
      block: block,
      isAnonymous: isAnonymous,
      anonymize: anonymize,
      isRegistrationRequested: isRegistrationRequested,
      removeImage: removeImage,
      getImage: getImage,
      hasChangedSinceLastModeration: hasChangedSinceLastModeration,
      hasLastModeratedProperties: hasLastModeratedProperties,
      getNumberOfContributions: getNumberOfContributions,
      getNumberOfRejectedContributions: getNumberOfRejectedContributions,
      getBlockUserMail: getBlockUserMail,
      getDeleteUserMail: getDeleteUserMail,
      getRestoreUserMail: getRestoreUserMail,
      getProfileChangedMail: getProfileChangedMail,
      getDefaultModerationEmails: getDefaultModerationEmails,
      approve: approve,
      reject: reject,
      validateProperty: validateProperty,
      getValidationUrl$5D7k: getValidationUrl,
      resendRegistrationConfirmation: resendRegistrationConfirmation,
      loadUserNotes: loadUserNotes,
      loadNotes: loadNotes,
      apply: apply,
      cancel: cancel,
      requires: [
        "Ext",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.impl.ContributionImpl",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModerationEmailProvider",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl",
        "com.coremedia.elastic.social.studio.model.impl.NotesImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler"
      ]
    };
});
