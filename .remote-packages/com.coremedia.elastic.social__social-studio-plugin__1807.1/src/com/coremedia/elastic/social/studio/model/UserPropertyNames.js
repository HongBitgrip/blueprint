Ext.define("com.coremedia.elastic.social.studio.model.UserPropertyNames", function(UserPropertyNames) {/*package com.coremedia.elastic.social.studio.model {

public class UserPropertyNames extends ContributionPropertyNames {
  public static const NAME:String = "name";
  public static const GIVENNAME:String = "givenName";
  public static const SURNAME:String = "surName";
  public static const STATE:String = "state";
  public static const ANONYMOUS:String = "anonymous";
  public static const IMAGE:String = "image";
  public static const REGISTRATION_DATE:String = "registrationDate";
  public static const LAST_LOGIN_DATE:String = "lastLoginDate";
  public static const LOCALE:String = "locale";
  public static const CHANGED_SINCE_LAST_MODERATION:String = "changedSinceLastModeration";
  public static const HAS_LAST_MODERATED_PROPERTIES:String = "lastModeratedProperties";
  public static const NUMBER_OF_CONTRIBUTIONS:String = "numberOfContributions";
  public static const REJECTED_CONTRIBUTIONS:String = "rejectedContributions";
  public static const NUMBER_OF_LOGINS:String = "numberOfLogins";
  public static const BLOCK_USER_MAIL_TEXT:String = "userBlocked";
  public static const DELETE_USER_MAIL_TEXT:String = "userDeleted";
  public static const RESTORE_USER_MAIL_TEXT:String = "userRestored";
  public static const PROFILE_CHANGED_MAIL_TEXT:String = "profileChanged";
  public static const EMAIL:String = "email";
}*/function UserPropertyNames$() {this.super$APxz();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
      super$APxz: function() {
        com.coremedia.elastic.social.studio.model.ContributionPropertyNames.prototype.constructor.apply(this, arguments);
      },
      constructor: UserPropertyNames$,
      statics: {
        NAME: "name",
        GIVENNAME: "givenName",
        SURNAME: "surName",
        STATE: "state",
        ANONYMOUS: "anonymous",
        IMAGE: "image",
        REGISTRATION_DATE: "registrationDate",
        LAST_LOGIN_DATE: "lastLoginDate",
        LOCALE: "locale",
        CHANGED_SINCE_LAST_MODERATION: "changedSinceLastModeration",
        HAS_LAST_MODERATED_PROPERTIES: "lastModeratedProperties",
        NUMBER_OF_CONTRIBUTIONS: "numberOfContributions",
        REJECTED_CONTRIBUTIONS: "rejectedContributions",
        NUMBER_OF_LOGINS: "numberOfLogins",
        BLOCK_USER_MAIL_TEXT: "userBlocked",
        DELETE_USER_MAIL_TEXT: "userDeleted",
        RESTORE_USER_MAIL_TEXT: "userRestored",
        PROFILE_CHANGED_MAIL_TEXT: "profileChanged",
        EMAIL: "email"
      },
      requires: ["com.coremedia.elastic.social.studio.model.ContributionPropertyNames"]
    };
});
