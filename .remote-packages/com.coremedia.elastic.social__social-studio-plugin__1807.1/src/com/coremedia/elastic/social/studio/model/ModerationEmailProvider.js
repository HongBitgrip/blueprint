Ext.define("com.coremedia.elastic.social.studio.model.ModerationEmailProvider", function(ModerationEmailProvider) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Bean;

/**
 * Implementations of this interface serve as a cache for <code>ModerationEmail</code>s.
 * Every <code>Contribution</code> holds its own set of default emails which may be used
 * to inform someone in case of certain events during the moderation process. A author of
 * a comment, for example, shall be notified after his comment was rejected. The editor
 * may change the text of an email. The elastic studio plugin therefor provides a place
 * where it can store such emails temporarily.
 *
 * @see ModerationEmail
 * @see ContributionAdministration
 * @see UserAdministration
 * /
public interface ModerationEmailProvider extends Bean {
  /**
   * Returns the currently cached array of <code>ModerationEmail</code>s.
   *
   * @return the currently cached array of <code>ModerationEmail</code>s
   * /
  function getModerationEmails():Array;

  /**
   * Sets the currently cached array of <code>ModerationEmail</code>s to the given array
   * of <code>ModerationEmails</code>.
   *
   * @param emails the new array of <code>ModerationEmail</code>s
   * /
  function setModerationEmails(emails:Array):void;

  /**
   * Returns exactly one email referenced by the given type.
   *
   * @param type the type of the email to be sought
   * @return the email of the given type
   * /
  function getModerationEmail(type:String):ModerationEmail;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
