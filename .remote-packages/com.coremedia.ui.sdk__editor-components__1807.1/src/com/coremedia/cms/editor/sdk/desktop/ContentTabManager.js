Ext.define("com.coremedia.cms.editor.sdk.desktop.ContentTabManager", function(ContentTabManager) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cap.content.Content;

/**
 * A tab manager keeps track of open tabs and allows to open new tabs.
 * /
[PublicApi]
public interface ContentTabManager {
  /**
   * Activate an existing tab already showing the given document, or open the given document in a new work area tab.
   * Calling this method is equivalent to calling <code>openDocuments([document])</code>.
   *
   * @param document the document to show in a work area tab
   * /
  function openDocument(document:Content):void;

  /**
   * For each given document for which there is not already a work area tab, open a new tab.
   * The tab containing the last (valid) document in the array is set active.
   *
   * @param documents the documents to show in a work area tab, represented as an Array of Content
   * @param background if set to true the opened tab will not be the active tab but only shown next to the active tab; defaults to false
   *
   * @see com.coremedia.cap.content.Content
   * /
  function openDocuments(documents:Array, background:Boolean = false):void;

  /**
   * For each given premular configuration for which there is not already a work area tab, open a new tab.
   * The tab containing the last (valid) document in the array is set active.
   *
   * @param premularConfigurations an array of premular configurations
   * @param background if set to true the opened tab will not be the active tab but only shown next to the active tab; defaults to false
   *
   * @see com.coremedia.cms.editor.sdk.premular.PremularConfiguration
   * /
  function openPremulars(premularConfigurations:Array, background:Boolean = false):void;

  /**
   * If the active work area tab is a document tab (premular) and is not in edit mode, activate an existing tab already
   * showing the given document or open the given document in the active tab, in both cases returning <code>true</code>.
   * Otherwise, <code>false</code> is returned, so that you can then decide whether to use
   * <code>openDocument()</code> to open another tab for the given document.
   *
   * @param document the document to show in a work area tab
   * @return whether the document is now shown in the active tab
   * /
  function openDocumentInActiveTab(document:Content):Boolean;

  /**
   * Close an existing tab showing the given document, if any.
   * No further user interactions are needed.
   *
   * @param document the document whose tab is to be closed
   * /
  function closeDocument(document:Content):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
