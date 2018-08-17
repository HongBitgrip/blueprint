Ext.define("com.coremedia.ui.components.AsynchronouslyClosable", function(AsynchronouslyClosable) {/*package com.coremedia.ui.components {
/**
 * This interface has to be implemented by panels of a tab panel
 * if: (1) Closing of the tab possibly takes place asynchronously
 * and (2) the tab is subject to scenarios where multiple tabs
 * are closed in a 'bulk' manner.
 *
 * @see ext.panel.Panel
 * /
[PublicApi]
public interface AsynchronouslyClosable {

  /**
   * Closes the panel, possibly in an asynchronous way.
   * An optional callback function is provided.
   * This callback is used when multiple panels
   * shall be closed in a 'bulk' manner. After closing
   * this panel, the callback is called with 'true' as argument
   * in order to signal that closing of remaining panels should
   * continue. It is called with 'false' as argument if the
   * remainder of the bulk close operation is to be cancelled
   * (remaining tabs stay open).
   *
   * @param continueClosingCallback The callback to signal whether
   *        the closing of remaining panels in a bulk close operation
   *        shall continue
   * @return true if the panel could be closed synchronously, false otherwise
   * /
  function closeAsynchronously(continueClosingCallback:Function = null):Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
