Ext.define("com.coremedia.elastic.social.studio.model.UserAdministration", function(UserAdministration) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.elastic.social.studio.model.impl.NotesImpl;

/**
 * The <code>UserAdministration</code> provides all the methods necessary to administrate
 * the users.
 * You can obtain a reference to a <code>UserAdministration</code> via
 * the <code>Moderation</code> interface.
 *
 * @see Moderation
 * @see User
 * /
public interface UserAdministration extends ModerationEmailProvider {
  /**
   * Starts editing the given <code>User</code>. In fact "starts editing" simply means,
   * to provide a reference to a <code>User</code> object within this property plus
   * loading its default moderation emails to provide it via the <code>ModerationEmailProvider</code>
   * interface.
   *
   * @param user the <code>User</code> which shall be edited.
   *
   * @see com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED
   * @see ModerationEmailProvider
   * /
  function startEditing(user:User):void;

  /**
   * Cancels the editing of a <code>User</code>. While a <code>User</code> is edited,
   * that is after <code>startEditing()</code> was triggered, changes are automatically
   * pushed to the server. That means you have to tell the server explicitly to discard
   * those changes when the editor decides to cancel the editing process.
   *
   * @param user the <code>User</code> for which the changes pushed so far shall be
   * discarded. If it is not given, the currently edited user is chosen.
   * @param cancelled a callback that is called after cancelling succeeded on the server
   * @param hasChanges Specifies if the user has been modified
   *
   * @see #startEditing()
   * @see #getEdited()
   * /
  function cancelEditing(user:User = null, cancelled:Function = null, hasChanges:Boolean = true):void;

  /**
   * Tells the server to accept all changes staged so far as being published.
   *
   * @param user the user, for which all staged changes should be applyed. If it is
   * null <code>getEdited()</code> is used.
   * @param success a callback with no parameters that is executed after successfully applied the changes of
   * the given user.
   * @param failure a callback with no parameters that is executed if applying the changes failed
   * in case of invalid changes.
   * /
  function applyChanges(user:User = null, success:Function = null, failure:Function = null):void;

  /**
   * Anonymizes the given <code>User</code>.
   *
   * @param user the <code>User</code> which shall be anonymized.
   * @param email the text, which is sent to the <code>User</code> to inform about the fact
   * that he was deleted
   * @param anonymized a function with no parameters that may be used as callback when the user
   * was deleted successfully
   * /
  function anonymize(user:User, email:ModerationEmail, anonymized:Function = null):void;

  /**
   * Returns the <code>User</code> which is currently edited.
   *
   * @return  the <code>User</code> which is currently edited.
   * /
  function getEdited():User;

  /**
   * Returns whether a <code>User</code> is currently being edited or not.
   *
   * @return <code>true</code> if a user is currently being edited.
   * /
  function hasEdited():Boolean;

  /**
   * Search <code>User</code>s matching the given query. When succeeded the
   * search result is cached locally, which may be read via
   * <code>getSearchResult</code>. Searching works asynchronously, so it might
   * take some time until the search result is present. There are two ways
   * of actually getting the search result:
   * <ul>
   *   <li>Provide a success function which is called with the
   *   <code>Array</code> of found users as its only parameter when it is arrived
   *   from the server</li>
   *   <li>Register a <code>Function</code> as change listener on a
   *   <code>ValueExpression</code> using
   *   <code>UserAdministrationPropertyNames.SEARCH_RESULT</code>
   *   as property name.</li>
   * </ul>
   *
   * @param query
   * @param success
   * @param failure
   *
   * @see SearchResult
   * @see getSearchResult()
   * @see com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_RESULT
   * /
  function search(query:String, newSearch:Boolean = true, success:Function = null, failure:Function = null):void;

  /**
   * Returns the search result of the last query as an <code>Array</code>. You may also fetch it
   * via the success <code>Function</code> provided to the <code>search()</code> method.
   *
   * @return the search result of the last query as <code>Array</code>.
   *
   * @see #search()
   * /
  function getSearchResult():Array;

  /**
   * Returns whether there is a search result or not.
   *
   * @return <code>true</code> if there is a search result.
   * /
  function hasSearchResult():Boolean;

  /**
   * Removes the given <code>User</code> from the locally cached search result. This
   * method is intended to increase the performance by not waiting for an
   * asynchronous execution of another search request. So you should only use this method
   * for updating the search result in a way you expect it to be, if you would execute
   * the query that led to the result again. An example should make it clear:
   * <p>
   * Lets assume you just had searched for all users whoes given name or email contains
   * the string "tobi". The result is a list of three users: tobi, tobi1 and tobi2. Now
   * you decide to delete tobi1. The ui element containing the list of users should
   * than only contain tobi and tobi2. And if you would search for "tobi" again, you would
   * get only those two users indeed. But to not have to sent that relatively expensive
   * request you may use <code>removeFromSearchResult()</code>.
   * </p>
   *
   * @param remove the <code>User</code> to be removed
   *
   * @see #getSearchResult()
   * /
  function removeFromSearchResult(remove:User):void;

  /**
   * Clears the current <code>SearchResult</code> such that <code>getSearchResult()===null</code>.
   * /
  function clearSearchResult():void;

  /**
   * The <code>UserAdministration</code> provides a <code>History</code> of user search
   * queries, which is returned by this function. It is updated automatically whenever
   * <code>search</code> is called.
   *
   * @return returns the <code>History</code> of user search queries
   *
   * @see #search()
   * @see com.coremedia.elastic.social.studio.model.History
   * /
  function getSearchHistory():History;

  /**
   * This function should be called as transfomrer from the bindPropertyPlugin that
   * modifies the email textField. It trims all whitespaces from the value.
   * @param email
   * @return
   * /
  function trimMail(email:String):String;


  /**
   * Get the editorial notes of the user.
   * @return the NotesImpl object
   * /
  function getUserNotes():NotesImpl;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.elastic.social.studio.model.ModerationEmailProvider"],
      requires: ["com.coremedia.elastic.social.studio.model.ModerationEmailProvider"]
    };
});
