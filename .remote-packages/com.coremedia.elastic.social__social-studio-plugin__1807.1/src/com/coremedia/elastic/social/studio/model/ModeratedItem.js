Ext.define("com.coremedia.elastic.social.studio.model.ModeratedItem", function(ModeratedItem) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Bean;

/**
 * A <code>ModeratedItem</code> is a <code>RemoteBean</code> that represents a certain
 * elastic social <code>Model</code> that shall be moderated. You may get it via
 * <code>getTarget()</code>. <code>ModeratedItem</code>s are used for display within the
 * <code>ModerationListView</code>.
 *
 * @see RemoteBean
 * @see ModerationListView
 * @see ContributionAdministration#getModeratedItems
 * /
public interface ModeratedItem extends Bean {
  /**
   * Returns the date, this <code>ModeratedItem</code>s <code>#getTarget</code> was last complained about.
   *
   * @return the date, this <code>ModeratedItem</code>s  <code>#getTarget</code> was last complained about
   *
   * @see com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE
   * /
  function getLastComplaintDate():Date;

  /**
   * Returns the target this <code>ModeratedItem</code> represents.
   *
   * @return the target this <code>ModeratedItem</code> represents
   *
   * @see com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET
   * /
  function getTarget():Contribution;

  /**
   * Returns the ID of the target this <code>ModeratedItem</code> represents.
   *
   * @return the ID of the target this <code>ModeratedItem</code> represents
   *
   * @see com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET_ID
   * /
  function getTargetId():String;

  /**
   * Returns the id which references the object that shall be seen as the priority to which
   * this moderated item belongs to. This may be used to sort a list of moderated items by
   * priority.
   *
   * @return the id which references the object that shall be seen as the priority to which
   * this moderated item belongs to
   * /
  function getPriorityId():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
