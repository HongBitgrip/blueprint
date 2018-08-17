/**
 *[PublicApi]
 *//**
 * This resource bundle defines keyboard shortcuts for various standard Studio actions.
 * The values ending with <code>_key</code> use the key stroke syntax used by
 * <code>AddKeyboardShortcut.shortcut</code>.
 * @see com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut#shortcut
 */
Ext.define("com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties", {

      /**
       * Default ExtJS Shortcuts, just for documentation
 *###########################################################
      */
  "Shortcut_remove_key": "DELETE",
  "Shortcut_remove_description": "Remove item / close tab",
  "Shortcut_selectNext_key": "RIGHT",
  "Shortcut_selectNext_description": "Select next",
  "Shortcut_selectPrevious_key": "LEFT",
  "Shortcut_selectPrevious_description": "Select previous",
      /**
       *Supported global shortcuts.

 *Each property value is a shortcut format string containing an integer key code optionally prefixed
 *with a combination of 'ctrl', 'shift' or 'alt' each followed by a '+' separator, e.g. 'ctrl+shift+113'.
 *The key code numbers are defined in class Ext.event.Event (http://docs.sencha.com/extjs/6.2.1/classic/Ext.event.Event.html).

      */
  "Shortcut_closeWindow_key": "ESC",
  "Shortcut_closeWindow_description": "Close window",
  "Shortcut_toggleDashboard_key": "F2",
  "Shortcut_toggleDashboard_description": "Toggle Dashboard",
  "Shortcut_toggleLibrary_key": "F3",
  "Shortcut_toggleLibrary_description": "Toggle Library",
  "Shortcut_toggleControlRoom_key": "F4",
  "Shortcut_toggleControlRoom_description": "Toggle Control Room",
  "Shortcut_cut_key": "CmdOrCtrl+X",
  "Shortcut_cut_description": "Cut",
  "Shortcut_copy_key": "CmdOrCtrl+C",
  "Shortcut_copy_description": "Copy",
  "Shortcut_paste_key": "CmdOrCtrl+V",
  "Shortcut_paste_description": "Paste",
      /**
       * Key Assisting Shortcuts
 *########################################

      */
  "Shortcut_openHomepage_key": "ctrl+alt+H",
  "Shortcut_openHomepage_description": "Open Homepage of preferred site",
  "Shortcut_moveUp_key": "ctrl+alt+I",
  "Shortcut_moveUp_description": "Move selection up",
  "Shortcut_moveDown_key": "ctrl+alt+K",
  "Shortcut_moveDown_description": "Move selection down",
  "Shortcut_moveLeft_key": "ctrl+alt+J",
  "Shortcut_moveLeft_description": "Move selection left",
  "Shortcut_moveRight_key": "ctrl+alt+L",
  "Shortcut_moveRight_description": "Move selection right",
  "Shortcut_toggle_key": "ctrl+alt+T",
  "Shortcut_toggle_description": "Toggle docked/windowed state",
  "Shortcut_export_key": "ctrl+alt+D",
  "Shortcut_checkin_key": "ctrl+alt+U",
  "Shortcut_checkin_description": "Check In active Content",
  "Shortcut_approve_key": "ctrl+alt+O",
  "Shortcut_approve_description": "Approve active Content",
  "Shortcut_publish_key": "ctrl+alt+P",
  "Shortcut_publish_description": "Publish active Content",
  "Shortcut_withdraw_key": "ctrl+alt+A",
  "Shortcut_withdraw_description": "Withdraw active Content",
  "Shortcut_revert_key": "ctrl+alt+F",
  "Shortcut_revert_description": "Revert active Content",
  "Shortcut_bookmark_key": "ctrl+alt+B",
  "Shortcut_bookmark_description": "Bookmark active Content",
  "Shortcut_show_key": "ctrl+alt+S",
  "Shortcut_show_description": "Show in Library",
  "Shortcut_increase_key": "ctrl+alt+M",
  "Shortcut_increase_description": "Increase window size",
  "Shortcut_decrease_key": "ctrl+alt+N",
  "Shortcut_decrease_description": "Decrease window size",
      /**
       * Tab Shortcuts
 *#########################################

      */
  "Shortcut_close_current_tab_key": "ctrl+alt+W",
  "Shortcut_close_current_tab_description": "Close current tab",
  "Shortcut_close_all_tabs_key": "ctrl+alt+shift+W",
  "Shortcut_close_all_tabs_description": "Close all tabs",
  "Shortcut_select_next_tab_key": "ctrl+alt+PAGE_UP",
  "Shortcut_select_next_tab_description": "Select next tab",
  "Shortcut_select_previous_tab_key": "ctrl+alt+PAGE_DOWN",
  "Shortcut_select_previous_tab_description": "Select previous tab",
      /**
       * Regions
 *########################################

      */
  "Shortcut_nextRegion_key": "ctrl+alt+R",
  "Shortcut_nextRegion_description": "Jump to next focus region",
  "Shortcut_previousRegion_key": "ctrl+alt+shift+R",
  "Shortcut_previousRegion_description": "Jump to previous focus region"
}, function() {

  com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties.INSTANCE = new com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties();
});