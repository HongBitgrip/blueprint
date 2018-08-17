Ext.define("JooOverrides.Ext.menu.Menu", {
  override: "Ext.menu.Menu",

  // Method may produce infinite loop
  onShortcutKey: function (keyCode, e) {
    var shortcutChar = String.fromCharCode(e.getCharCode()),
            items = this.query('>[text]'),
            len = items.length,
            item = this.lastFocusedChild,
            focusIndex = Ext.Array.indexOf(items, item),
            i = focusIndex;

    // Fix: Added second condition
    if (len === 0 || focusIndex === -1) {
      return;
    }

    // Loop through all items which have a text property starting at the one after the current focus.
    for (; ;) {
      if (++i === len) {
        i = 0;
      }
      item = items[i];

      // Looped back to start - no matches
      if (i === focusIndex) {
        return;
      }

      // Found a text match
      if (item.text && item.text[0].toUpperCase() === shortcutChar) {
        item.focus();
        return;
      }
    }
  }
});
