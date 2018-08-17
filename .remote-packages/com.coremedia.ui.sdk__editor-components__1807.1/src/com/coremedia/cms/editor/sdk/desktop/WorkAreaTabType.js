Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType", function(WorkAreaTabType) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.ui.data.ValueExpression;

import ext.panel.Panel;

/**
 * A type of tabs that can be added to the Studio's work area tab panel.
 * It serves as a factory for work area tabs and knows how to save and restore tab state.
 * /
public interface WorkAreaTabType {

  /**
   * A string identifying this tab type.
   * @return a string identifying this tab type
   * /
  function getId():String;

  /**
   * Factory method that creates a new tab of this tab type.
   * It takes a state object, previously returned by evaluating the result of <code>getStateValueExpression()</code>,
   * and restores that state in the newly created tab.
   * @param state the state based on which the new tab is initialized
   * @param callback the callback function called with function(newTab:Panel, tabType:WorkAreaTabType, state:Object)
   * /
  function createTab(state:Object, callback:Function):void;

  /**
   * Return a value expression for the given tab that allows to retrieve its current state
   * (<code>getStateValueExpression(tab).getValue()</code>) and to observe when the tab state changes
   * (<code>getStateValueExpression(tab).addValueChangeListener(...)</code>).
   * @param tab the tab for which to return a state observing value expression
   * @return a value expression to compute and observe the state of the given tab
   * @deprecated Use StateHolder#getStateValueExpression instead
   * @see com.coremedia.ui.data.StateHolder
   * /
  function getStateValueExpression(tab:Panel):ValueExpression;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
