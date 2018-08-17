Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager", function(sidePanelManager) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

  /**
   * The global sidePanelManager singleton.
   * @see ISidePanelManager
   * /
  public const sidePanelManager:ISidePanelManager =*/function sidePanelManager_(){return( new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl());}/*;

}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: sidePanelManager_,
      requires: ["com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl"]
    };
});
