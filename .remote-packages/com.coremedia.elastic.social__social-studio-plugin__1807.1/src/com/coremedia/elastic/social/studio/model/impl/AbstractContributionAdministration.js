Ext.define("com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration", function(AbstractContributionAdministration) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.ModerationEmailProvider;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.impl.BeanImpl;

public class AbstractContributionAdministration extends BeanImpl implements ModerationEmailProvider {

  private var contributionAdministrationManager:ContributionAdministrationManager;
  private var ascSort:Boolean = false;

  public*/ function AbstractContributionAdministration$(moderation/*:Moderation*/) {this.super$6O7p();
    this.contributionAdministrationManager$6O7p = new com.coremedia.elastic.social.studio.model.impl.ContributionAdministrationManager(this, moderation);
    this.contributionAdministrationManager$6O7p.addListener("userNotesInit",AS3.bind( this,"setUserNotes$6O7p"));
  }/*

  /**
   * Starts the repeated polling process, which updates the internally stored list
   * of contribution objects. The interval for polling is chosen by the
   * implementation.
   *
   * @see #getModeratedItems()
   * @see #stopPolling()
   * @see #pausePolling()
   * /
  public*/ function startPolling(immediatelyUpdateList/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)immediatelyUpdateList=true;
    this.contributionAdministrationManager$6O7p.startPolling(immediatelyUpdateList);
  }/*

  /**
   * Pauses the polling process. Compared to <code>stopPolling</code> this method
   * more lightweight, in that it only stops requesting the list of moderated items
   * from the server without resettings other internal state properties as for
   * example the displayed or the selected contribution.
   *
   * @see #startPolling()
   * @see #stopPolling()
   * /
  public*/ function pausePolling()/*:void*/ {
    this.contributionAdministrationManager$6O7p.pausePolling();
  }/*

  /**
   * Stops the repeated polling process. This method should be called whenever all
   * ui components serving the moderation process are closed.
   *
   * @see #startPolling()
   * @see #pausePolling
   * /
  public*/ function stopPolling()/*:void*/ {
    this.contributionAdministrationManager$6O7p.stopPolling();
  }/*

  /**
   * Returns <code>true</code> if polling is active.
   *
   * @return <code>true</code> if polling is active
   * /
  public*/ function isPolling()/*:Boolean*/ {
    return this.contributionAdministrationManager$6O7p.isPolling();
  }/*


  /**
   * Sets the contribution which is displayed in detail. One may ask why this
   * is not the selected one: It is in fact the same if the moderation is in
   * list mode but if it is in last mode, selected and displayed contribution are different.
   *
   * @param displayed the new displayed contribution
   *
   * @see #getDisplayed()
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED
   * @see #getSelectedContribution()
   * /
  public*/ function setDisplayed(displayed/*:Contribution*/)/*:void*/ {
  }/*

  /**
   * Returns the currently displayed contribution. One may ask why this
   * is not the selected one: It is in fact the same if the moderation is in
   * list mode but if it is in last mode, selected and displayed contribution are different.
   * For using a <code>ValueExpression</code> to read this property use
   * <code>ContributionAdministrationPropertyNames.DISPLAYED</code> as property name.
   *
   * @return the currently displayed contribution.
   *
   * @see #setDisplayed();
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED
   * @see #getSelectedContribution()
   * /
  public*/ function getDisplayed()/*:Contribution*/ {
    return null;
  }/*

  /**
   * Returns <code>true</code> if there is a currently displayed <code>Contribution</code>.
   *
   * @return <code>true</code> if there is a currently displayed <code>Contribution</code>.
   * /
  public*/ function hasDisplayed()/*:Boolean*/ {
    return null;
  }/*

  /**
   * Approves the given contribution. As with every operation this one
   * is asynchronous as well, meaning, it might take some time until all changes
   * caused by approving the given contribution are reflected by the
   * <code>ContributionAdministration</code>, which are as follows:
   * <ul>
   *   <li>The displayed contribution is set to null, as it is the one
   *   which was approved and will now disappear from the ui.</li>
   *   <li>The selected contribution is set to null as well. If in list
   *   mode, the selected contribution is the one, which was just
   *   approved and thus should disappear from the ui now. And if in last mode
   *   there is no selected contribution anyway.</li>
   *   <li>The approved contribution is removed from the locally cached
   *   list of contributions. This is done in order to save a network
   *   call which would be necessary if we simply invalidated the list of locally
   *   cached contributions.</li>
   *   <li>And finally, if we are in list mode, the processed counter is increased</li>
   * </ul>
   *
   * @param contribution the contribution to be approved.
   * @param email the <code>ModerationEmail</code> which is sent to the user who created the contribution
   * @param success a callback function with no parameter which is called after successfully
   * approving the given contribution.
   * @param failure a callback function with which is called after approving returns with a validation error.
   * The function is called with one parameter, an associative Array with user property names as key and
   * error codes as values.
   * approving returns with an error
   *
   * @see #getDisplayed()
   * @see #invalidate()
   * /
  public*/ function approve(contribution/*:Contribution*/, email/*:ModerationEmail*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:success=null;case 3:failure=null;}
    this.contributionAdministrationManager$6O7p.approve(contribution, email, success, failure);
  }/*

  /**
   * Rejects the given contribution. As with every operation this one
   * is asynchronous as well, meaning, it might take some time until all changes
   * caused by rejecting the given contribution are reflected by the
   * <code>ContributionAdministration</code>. All changes are the same as for approving
   * a contribution.
   *
   * @param contribution the contribution to be rejected.
   * @param email the <code>ModerationEmail</code> which is sent to the user who created the contribution.
   * @param success a callback function with no parameter which is called after successfully
   * rejecting the given contribution.
   * @param failure a function with one parameter, an associative array where the keys are user property names
   * and the values are error codes, which is called in case of a validation error.
   *
   * @see #approve
   * /
  public*/ function reject(contribution/*:Contribution*/, email/*:ModerationEmail*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:success=null;case 3:failure=null;}
    this.contributionAdministrationManager$6O7p.reject(contribution, email, success, failure);
  }/*

  /**
   * Sets the <code>ModeratedItem</code> which should be seen as currently selected moderation item.
   * Most often you will not call this method directly. Instead the selected
   * <code>ModeratedItem</code> will be set via the <code>BindSelectionPlugin</code>
   * configured for a <code>GridPanel</code> displaying the list of moderated items.
   * <p>If in list mode this method guarantees after returning that the
   * selected moderated item equals the displayed one.</p>
   *
   * @param selected Sets the currently selected <code>ModeratedItem</code>
   *
   * @see #getSelectedContribution()
   * @see com.coremedia.ui.plugins.BindSelectionPlugin
   * @see #getDisplayed
   * /
  public*/ function setSelectedContribution(selected/*:ModeratedItem*/)/*:void*/ {
  }/*

  /**
   * Sets an array of <code>ModeratedItem</code>'s which should be seen as currently selected moderation items.
   * This is should be used when multiselection is enabled at the corresponding list.
   * @param items the array of ModeratedItems that needs to be selected
   * @param selectOnlyFirst true to only select the first item of the forwarded items. defaults to false
   * /
  public*/ function setSelectedContributionItems(items/*:Array*/, selectOnlyFirst/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)selectOnlyFirst=false;

  }/*

  /**
   * Removes the moderatedItem form the Array of selectedContributionItems. This is useful when one would deselect an
   * item from the list via an external handler.
   * @param moderatedItem The ModeratedItem that needs to be removed from Array of selectedContributionItems
   * /
  public*/ function removeContributionFromSelectedItems(moderatedItem/*:ModeratedItem*/)/*:void*/ {
  }/*

  /**
   * Returns the currently selected <code>ModeratedItem</code>. For reading this
   * property using a <code>ValueExpression</code> use the property name
   * <code>ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION</code>
   *
   * @return the currently selected <code>ModeratedItem</code>.
   *
   * @see #setSelectedContribution()
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION
   * /
  public*/ function getSelectedContribution()/*:ModeratedItem*/ {
    return null;
  }/*

  /**
   * Returns an Array of the currently selected <code>ModeratedItem</code>s. For reading this
   * property using a <code>ValueExpression</code> use the property name
   * <code>ContributionAdministrationPropertyNames.SELECTED_MODERATION_ITEMS</code> and <code>ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS</code>
   *
   * NOTE: currently its only a singleItemArray because there is no multi-selection enabled.
   * @return the currently selected <code>ModeratedItem</code>s Array.
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_ITEMS
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS
   * /
  public*/ function getSelectedContributionItems()/*:Array*/ {
    return null;
  }/*

  /**
   * Loads the user notes from the given user and puts them into <code>ContributionAdministrationPropertyNames.NOTES</code>
   * (which also should be used for accessing the notes). If the forwarded user is <code>null</code>, the value of
   * <code>ContributionAdministrationPropertyNames.NOTES</code> will also be <code>null</code>.
   * @param user the user (or author) who's notes will be fetched
   * /
  public*/ function initUserNotes(user/*:User*/)/*:void*/ {
    this.contributionAdministrationManager$6O7p.initUserNotes(user);
  }/*

  /**
   * Returns the locally cached list of moderated items objects as an
   * <code>Array</code>. For fetching an up to date list either invalidate it
   * manually or use the polling mechanism for doing it automatically.
   *
   * @return an <code>Array</code> of contribution objects.
   *
   * @see #invalidate()
   * @see #startPolling()
   * @see ModeratedItem
   * /
  public*/ function getModeratedItems()/*:Array*/ {
    return null;
  }/*

  /**
   * Updates the list and invalidates the current displayed contribution.
   * /
  public*/ function invalidate()/*:void*/ {
    this.updateList();
    this.invalidateDisplayed();
  }/*

  /**
   * Invalidates the current displayed contribution.
   * /
  public*/ function invalidateDisplayed()/*:void*/ {
    if (this.getDisplayed()) {
      this.getDisplayed().invalidate();
    }
  }/*

  internal*/ function registerSelectedChangeListener()/*:void*/ {
  }/*

  internal*/ function removeSelectedChangeListener()/*:void*/ {
  }/*

  internal*/ function updateList(fromFilter/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)fromFilter=false;
  }/*

  internal*/ function processedContribution()/*:void*/ {
  }/*

  internal*/ function removeFromList(remove/*:RemoteBean*/)/*:void*/ {
  }/*

  public*/ function toggleSorting()/*:Boolean*/ {
    this.ascSort$6O7p = !this.ascSort$6O7p;
    this.invalidate();
    return this.ascSort$6O7p;
  }/*

  internal*/ function getSorting()/*:String*/ {
    return this.ascSort$6O7p ? "ascending" : "descending";
  }/*

  internal*/ function loadEmails()/*:void*/ {
    var displayed/*:Contribution*/ = this.getDisplayed();
    if (displayed) {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATION_EMAILS, displayed.getDefaultModerationEmails());
    }
  }/*

  private*/ function setUserNotes(notes/*:**/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.NOTES, notes);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getModerationEmails()/*:Array*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATION_EMAILS);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function setModerationEmails(emails/*:Array*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATION_EMAILS, emails);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getModerationEmail(emailType/*:String*/)/*:ModerationEmail*/ {
    var moderationEmails/*:Array*/ = this.getModerationEmails();
    if (emailType && moderationEmails) {
      for (var i/*:int*/ = 0; i < moderationEmails.length; i++) {
        if ((AS3.as(moderationEmails[i],  com.coremedia.elastic.social.studio.model.ModerationEmail)).getType() === emailType) {
          return moderationEmails[i];
        }
      }
    }

    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.ModerationEmailProvider"],
      contributionAdministrationManager$6O7p: null,
      ascSort$6O7p: false,
      constructor: AbstractContributionAdministration$,
      super$6O7p: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      startPolling: startPolling,
      pausePolling: pausePolling,
      stopPolling: stopPolling,
      isPolling: isPolling,
      setDisplayed: setDisplayed,
      getDisplayed: getDisplayed,
      hasDisplayed: hasDisplayed,
      approve: approve,
      reject: reject,
      setSelectedContribution: setSelectedContribution,
      setSelectedContributionItems: setSelectedContributionItems,
      removeContributionFromSelectedItems: removeContributionFromSelectedItems,
      getSelectedContribution: getSelectedContribution,
      getSelectedContributionItems: getSelectedContributionItems,
      initUserNotes: initUserNotes,
      getModeratedItems: getModeratedItems,
      invalidate: invalidate,
      invalidateDisplayed: invalidateDisplayed,
      registerSelectedChangeListener: registerSelectedChangeListener,
      removeSelectedChangeListener: removeSelectedChangeListener,
      updateList: updateList,
      processedContribution: processedContribution,
      removeFromList: removeFromList,
      toggleSorting: toggleSorting,
      getSorting: getSorting,
      loadEmails: loadEmails,
      setUserNotes$6O7p: setUserNotes,
      getModerationEmails: getModerationEmails,
      setModerationEmails: setModerationEmails,
      getModerationEmail: getModerationEmail,
      requires: [
        "com.coremedia.elastic.social.studio.model.ModerationEmailProvider",
        "com.coremedia.ui.data.impl.BeanImpl"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModerationEmail",
        "com.coremedia.elastic.social.studio.model.impl.ContributionAdministrationManager"
      ]
    };
});
