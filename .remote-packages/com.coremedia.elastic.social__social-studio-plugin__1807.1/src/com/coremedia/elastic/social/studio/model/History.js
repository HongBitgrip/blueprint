Ext.define("com.coremedia.elastic.social.studio.model.History", function(History) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Bean;

/**
 * The <code>History</code> interface can be used to remember a list of strings
 * and the order in which they were used. It provides methods for navigating
 * through the list of strings. Typically this interface is used for
 * remembering a list of search queries within a dialog.
 *
 * @see com.coremedia.elastic.social.studio.model.HistoryPropertyNames
 * /
public interface History extends Bean {
  /**
   * Adds the given <code>queryObject</code> to the list of already remembered
   * query objects, increases the pointer to the current query object and updates the
   * <code>forwardEnabled</code> and <code>backwardEnabled</code> properties
   * accordingly.
   * <p>
   * The given <code>queryObject</code> is always added as the last remembered
   * query object. That means, if a client moved the current pointer to somewhere
   * in the middle of the remembered query objects, this method removes all
   * queries behind the current query and afterwards adds the given
   * <code>queryObject</code> to the end of the list.
   * </p><p>
   * For example: Lets assume we have the following list of remembered
   * query objects: a, b, c, d. If the current query is b and <code>add(e)</code>
   * is called, the new list of remembered queries will be: a, b, e
   * </p>
   *
   * @param queryObject the string to be remembered.
   *
   * @see #getCurrent()
   * @see #isForwardEnabled()
   * @see #isBackwardEnabled()
   * /
  function add(queryObject:Object):void;

  /**
   * Returns whether there is a current query or not.
   *
   * @return <code>true</code> if the <code>History</code> has a current
   * query
   * /
  function hasCurrent():Boolean;

  /**
   * Returns the current queryObject.
   *
   * @return the current queryObject
   * /
  function getCurrent():Object;

  /**
   * Returns the query object that is directly behind the current and moves the
   * pointer to the current query object one step further. If the history is
   * empty or there is no next query object behind the current one, this function
   * returns <code>null</code>.
   * <p>
   * If <code>isForwardEnabled() == true</code> this method always returns
   * a value other than <code>null</code>
   * </p>
   *
   * @return the query object right behind the current one or <code>null</code>
   * if the history is empty or there is no next query object behind
   * the current one.
   *
   * @see #isForwardEnabled()
   * @see #backward()
   * /
  function forward():Object;

  /**
   * Returns the query object that is directly in front of the current and moves the
   * pointer to the current query object one step back. If the history is
   * empty or there is no query object in front of the current one, this function
   * returns <code>null</code>.
   * <p>
   * If <code>isBackwardEnabled() == true</code> this method always returns
   * a value other than <code>null</code>
   * </p>
   *
   * @return the query object right in front of the current one or <code>null</code>
   * if the history is empty or there is no query object in front of
   * the current one.
   *
   * @see #isBackwardEnabled()
   * @see #forward()
   * /
  function backward():Object;

  /**
   * Returns whether it is possible to move forward or not. If <code>true</code>
   * <code>forward</code> will return a value different to <code>null</code>.
   * <p>
   * If you need to be informed in case this property changes, use
   * <code>com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED</code>
   * for building a value expression.
   * </p>
   *
   * @return <code>true</code> if there is at least one query behind the current one.
   *
   * @see #forward()
   * @see com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED
   * /
  function isForwardEnabled():Boolean;

  /**
   * Returns whether it is possible to move backwards or not. If <code>true</code>
   * <code>backward</code> will return a value different to <code>null</code>.
   * <p>
   * If you need to be informed in case this property changes, use
   * <code>com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED</code>
   * for building a value expression.
   * </p>
   *
   * @return <code>true</code> if there is at least one query in front of the current one.
   *
   * @see #backward()
   * @see com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED
   * /
  function isBackwardEnabled():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
