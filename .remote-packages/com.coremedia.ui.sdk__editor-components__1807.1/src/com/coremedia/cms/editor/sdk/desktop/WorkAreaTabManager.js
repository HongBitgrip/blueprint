Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager", function(WorkAreaTabManager) {/*package com.coremedia.cms.editor.sdk.desktop {
import ext.panel.Panel;

/**
 * A tab manager keeps track of open tabs and allows to open new tabs.
 * /
[PublicApi]
public interface WorkAreaTabManager {

  /**
   * Find the work area tab for the given entity.
   * @param entity an object describing the tab shown in the work area tab panel
   * @return the work area tab corresponding to the given entity
   * /
  function findTabForEntity(entity:Object):Panel;

  /**
   * Find the work area tab proxy for the given entity.
   * @param entity an object describing the tab shown in the work area tab panel
   * @return the work area tab proxy corresponding to the given entity
   * /
  //noinspection JSUnusedGlobalSymbols
  //Used in Tests
  function findTabProxyForEntity(entity:Object):Panel;

  /**
   * Find the work area tab corresponding to the given tab state.
   * @param tabState the tab state to find the corresponding tab for
   * @return the work area tab corresponding to the given tab state
   * /
  function findTab(tabState:Object):Panel;

  /**
   * Activate an existing tab already showing the given document, or open the given document in a new work area tab.
   * Calling this method is equivalent to calling <code>openTabs([document])</code>.
   *
   * @param entity an object describing the tab to show in the work area tab panel
   * @param background false (default) means to activate the last tab of the list;
   *   if set to true, the active tab will remain as-is.
   * /
  function openTabForEntity(entity:Object, background:Boolean = false):void;

  /**
   * For each given tab state for which there is not already a work area tab, open a new tab.
   * The tab corresponding to the last (valid) tab state in the array is set active,
   * unless <code>background</code> is explicitly set to <code>true</code>.
   *
   * @param entities the objects describing tabs to show in the work area tab panel
   * @param background false (default) means to activate the last tab of the list;
   *   if set to true, the active tab will remain as-is.
   * /
  function openTabsForEntities(entities:Array, background:Boolean = false):void;

  /**
   * Activate an existing tab already showing the given document, or open the given document in a new work area tab.
   * Calling this method is equivalent to calling <code>openTabs([document], background)</code>.
   *
   * @param tabState an object describing the tab to show in the work area tab panel
   * @param background false (default) means to activate the last tab of the list;
   *   if set to true, the active tab will remain as-is.
   * /
  function openTab(tabState:Object, background:Boolean = false):void;

  /**
   * For each given tab state for which there is not already a work area tab, open a new tab.
   * The tab corresponding to the last (valid) tab state in the array is set active,
   * unless <code>background</code> is explicitly set to <code>true</code>.
   *
   * @param tabStates the objects describing tabs to show in the work area tab panel
   * @param background false (default) means to activate the last tab of the list;
   *   if set to true, the active tab will remain as-is.
   * /
  function openTabs(tabStates:Array, background:Boolean = false):void;

  /**
   * Close an existing tab corresponding to the given entity, if any.
   * No further user interactions are needed.
   *
   * @param entity an object describing the tab shown in the work area tab panel
   * /
  //noinspection JSUnusedGlobalSymbols
  //Used in Tests
  function closeTabForEntity(entity:Object):void;

  /**
   * Close an existing tab corresponding to the given tab state, if any.
   * No further user interactions are needed.
   *
   * @param tabState the state of the tab to be closed
   * /
  function closeTab(tabState:Object):void;

  /**
   * Close an existing tab corresponding to the given old entity, if any.
   * And opens a new tab corresponding to the given new entity.
   *
   * @param oldEntity the given old entity
   * @param newEntity the given new entity
   * /
  function replaceTab(oldEntity:Object, newEntity:Object):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
