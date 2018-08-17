Ext.define("com.coremedia.elastic.social.studio.model.BlacklistAdministration", function(BlacklistAdministration) {/*package com.coremedia.elastic.social.studio.model {

/**
 * This interface provides methods for administrating a blacklist of words
 * for user generated content. Implementations of this interface may be used
 * for example to highlight blacklisted words within comments to support editors
 * in finding bad comments.
 * /
public interface BlacklistAdministration {
  /**
   * Returns the locally cached array of blacklisted words. Clients may force the
   * blacklist to be invalidated and refreshed with a new list from the server by
   * setting <code>invalidate</code> to <code>true</code>. Invalidating is an
   * asynchronous process. This method does not block until the server call returns
   * but instead returns always the currently cached blacklist. For getting the
   * refreshed version from the server there are two ways:
   * <ul>
   *   <li>Provide a <code>Function</code> as second parameter which is called
   *   as soon as the server returned the fresh blacklist. This callback will be
   *   passed the blacklist as the only parameter.</li>
   *   <li>Register a change listener on a <code>ValueExpression</code> observing
   *   the property named <code>BlacklistAdministrationPropertyNames.BLACKLIST</code></li>
   * </ul>
   *
   * @param invalidate <code>true</code> if the locally chached blacklist should be invalidated.
   * @param success a callback <code>Function</code> which is called as soon as the server call
   * from invalidating the blacklist returns. This function needs exactly one <code>Array</code>
   * parameter, which will be used to pass in the refreshed blacklist.
   * @return <strong>always</strong> the locally cached blacklist, no matter if
   * <code>invalidate</code> was set to <code>true</code> or not.
   *
   * @see com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST
   * /
  function getBlacklist(invalidate:Boolean = false, success:Function = null):Array;

  /**
   * Highlights the given <code>text</code> by surrounding all words of the text which
   * are blacklisted with the given <code>prefix</code> and <code>suffix</code>. This
   * method <strong>always</strong> uses the locally cached blacklist for highlighting
   * even if <code>invalidate</code> is set to <code>true</code> which is the default.
   * As adding and removing words from the blacklist is robust against duplicates
   * performance of the ui is considered more important than freshness of the locally
   * cached blacklist.
   *
   * @param text the text to be highlighted
   * @param prefix the string which will preceed a blacklisted word within text
   * @param suffix the string which will follow a blacklisted word within text
   * @param invalidate <code>true</code> if the locally cached blacklist shall be
   * invalidated.
   * @return the highlighted text as described above
   *
   * /
  function highlightBlacklisted(text:String, prefix:String, suffix:String, invalidate:Boolean = true):String;

  /**
   * Adds a word to the blacklist.
   *
   * @param word the word to be added
   * /
  function addBlacklistedWord(word:String):void;

  /**
   * Removes the given <code>word</code> from the blacklist.
   *
   * @param word the word to be removed.
   * /
  function removeBlacklistedWord(word:String):void;

  /**
   * Checks whether the given <code>word</code> is blacklisted or not.
   *
   * @param word the word to be checked.
   * @return <code>true</code> if the given word is blacklisted.
   * /
  function isInBlacklist(word:String):Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
