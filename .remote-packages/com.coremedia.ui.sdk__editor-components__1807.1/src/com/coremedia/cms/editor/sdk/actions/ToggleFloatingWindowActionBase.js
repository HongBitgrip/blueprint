Ext.define("com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase", function(ToggleFloatingWindowActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer;
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow;
import com.coremedia.ui.util.EventUtil;

import ext.Action;
import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.panel.Panel;

/**
 * Floating windows are instances of SidePanelFloatingWindow.
 * The action is used to toggle between the windowed and docked stated.
 * If docked, the corresponding component is on docked on the left or right side of
 * the Studio's work area.
 *
 * @see com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow
 * /
[PublicApi]
public class ToggleFloatingWindowActionBase extends Action {

  private var parentComponent:Container;

  public*/ function ToggleFloatingWindowActionBase$(config/*:ToggleFloatingWindowAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"handleAction$RQJy"));
    this.parentComponent$RQJy = AS3.getBindable(config,"component");
    this.super$RQJy(config);
  }/*

  private*/ function handleAction()/*:Boolean*/ {
    var floatingWindow/*:SidePanelFloatingWindow*/ =AS3.as( this.parentComponent$RQJy.findParentByType(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow.xtype),  com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow);
    if(floatingWindow) {
      //dock window, we use the side panel on the west for this
      var targetPanel/*:SidePanel*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.SIDE_PANEL_WEST_ID),  com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel);
      targetPanel.dockItem(floatingWindow);
    }
    else {
      //undock to window mode, the side panel is the parent
      var sidePanel/*:SidePanel*/ =AS3.as( this.parentComponent$RQJy.findParentByType(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel.xtype),  com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel);

      //well somehow the library is different...
      if(this.parentComponent$RQJy.xtype === com.coremedia.cms.editor.sdk.collectionview.CollectionView.xtype) {
        var container/*:CollectionViewContainer*/ =AS3.as( this.parentComponent$RQJy.findParentByType(com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer.xtype),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer);
        sidePanel.undockItem(container);
      }
      else {
        sidePanel.undockItem(this.parentComponent$RQJy);
      }
    }

    this.updateFocus();
    return true;
  }/*

  public*/ function updateFocus()/*:void*/ {var this$=this;
    com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
      this$.parentComponent$RQJy.focus();

      //focus collapse button
      if(!this$.parentComponent$RQJy.isFocusable()) {
        var tools/*:Array*/ = this$.parentComponent$RQJy.down()['tools'];
        if(tools && tools.length > 0) {
          tools[0].focus();
        }
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      parentComponent$RQJy: null,
      constructor: ToggleFloatingWindowActionBase$,
      super$RQJy: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      handleAction$RQJy: handleAction,
      updateFocus: updateFocus,
      requires: [
        "Ext",
        "Ext.Action",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow"
      ]
    };
});
