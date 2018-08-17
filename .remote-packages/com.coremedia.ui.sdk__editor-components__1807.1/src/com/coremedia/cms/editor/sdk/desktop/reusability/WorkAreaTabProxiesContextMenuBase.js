Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase", function(WorkAreaTabProxiesContextMenuBase) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.ui.components.TabContextMenu;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.Component;

[PublicApi]
public class WorkAreaTabProxiesContextMenuBase extends TabContextMenu {

  private var tabEntity:Object;

  public*/ function WorkAreaTabProxiesContextMenuBase$(config/*:WorkAreaTabProxiesContextMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$U0Xf(config);
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getContextClickedTabEntity()/*:Object*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu.CONTEXT_CLICKED_TAB_ENTITY_VARIABLE_NAME);
    return this.tabEntity$U0Xf;
  }/*

  /**
   * @private
   * /
  override public*/ function setContextClickedTab(tab/*:Component*/)/*:void*/ {
    com.coremedia.ui.components.TabContextMenu.prototype.setContextClickedTab.call(this,tab);
    var oldTabEntity/*:Object*/ = this.tabEntity$U0Xf;
    var entityTab/*:WorkAreaTabProxy*/ =AS3.as( tab,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy);
    this.tabEntity$U0Xf = entityTab && AS3.getBindable(entityTab,"proxyState").entity;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu.CONTEXT_CLICKED_TAB_ENTITY_VARIABLE_NAME, oldTabEntity, this.tabEntity$U0Xf);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.TabContextMenu",
      metadata: {
        "": ["PublicApi"],
        getContextClickedTabEntity: ["ProvideToExtChildren"]
      },
      tabEntity$U0Xf: null,
      constructor: WorkAreaTabProxiesContextMenuBase$,
      super$U0Xf: function() {
        com.coremedia.ui.components.TabContextMenu.prototype.constructor.apply(this, arguments);
      },
      getContextClickedTabEntity: getContextClickedTabEntity,
      setContextClickedTab: setContextClickedTab,
      requires: [
        "com.coremedia.ui.components.TabContextMenu",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy"
      ]
    };
});
