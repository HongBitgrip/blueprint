Ext.define("com.coremedia.elastic.social.studio.model.Moderation", function(Moderation) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration;
import com.coremedia.ui.data.Bean;

/**
 * The Moderation is the central model for the studio user feedback plugin, serving as
 * an entry point to the Contribution-, the User- and the BlacklistAdministration.
 *
 * In general the process of moderating with elastic social has three aspects:
 *
 * <ul>
 *   <li>Administration of contributions.</li>
 *   <li>Administration of users (in fact <code>User</code>s are <code>Contribution</code>s
 *   as well. But a separate interface for administrate them seems appropriate because
 *   of its special meaning for every kind of community. You simply need some kind of
 *   user administration).</li>
 *   <li>Administration of blacklisted words.</li>
 * </ul>
 *
 * For each of those aspects the <code>Moderation</code> interface provides access
 * to a corresponding interface:
 * <ul>
 *   <li><code>ContributionAdministration</code></li>
 *   <li><code>UserAdministration</code></li>
 *   <li><code>BlacklistAdministration</code></li>
 * </ul>
 *
 * @see #getModerationContributionAdministration()
 * @see #getUserAdministration()
 * @see #getBlacklistAdministration()
 * /
public interface Moderation extends Bean {

  /**
   * Returns an object which may be used for administration of user-generated content.
   *
   * @return administration object for handling user generated content.
   * @see ModerationContributionAdministration
   * /
  function getModerationContributionAdministration():AbstractContributionAdministration;

  /**
   * Returns an object which may be used for administration of archived user-generated content.
   *
   * @return object of type <code>AbstractContributionAdministration</code> for handling archived contributions.
   * @see AbstractContributionAdministration
   * /
  function getArchiveContributionAdministration():ArchiveContributionAdministration;

  /**
   * Returns an object for the currently active contribution administration.
   *
   * @return currently active contribution administration.
   * @see ModerationContributionAdministration
   * @see ArchiveContributionAdministration
   * /
  function getActiveContributionAdministration():AbstractContributionAdministration;

  /**
   * Returns an object which may be used for administration of users.
   *
   * @return object of type <code>UserAdministration</code> for handling users.
   * @see UserAdministration
   * /
  function getUserAdministration():UserAdministration;

  /**
   * Returns an object which may be used for administration of blacklisted text.
   *
   * @return object of type <code>BlacklistAdministration</code> for handling blacklisted text.
   * @see BlacklistAdministration
   * /
  function getBlacklistAdministration():BlacklistAdministration;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
