Ext.define("com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase", function(EditedContentGridPanelBase) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDragDropModel;
import com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDropZone;
import com.coremedia.cms.editor.controlroom.dd.EditedContentPanelHeaderDropZone;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.ContextMenuUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.dd.DropZone;
import ext.menu.Menu;
import ext.toolbar.Toolbar;

public class EditedContentGridPanelBase extends ContentGridPanel {

  private var editedContentsPanelDropZone:EditedContentPanelDropZone;
  private var editedContentsPanelHeaderDropZone:EditedContentPanelHeaderDropZone;

  public*/ function EditedContentGridPanelBase$(config/*:ContentGridPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$xWRx(config);

    this.on("afterrender",AS3.bind( this,"onAfterRender$xWRx"));
  }/*

  private*/ function onAfterRender()/*:void*/ {
    this.setupDropZone();

    this.mon(this.header, "contextmenu", com.coremedia.ui.util.ContextMenuUtil.disableContextMenu);
    this.mon(this.getTopToolbar(), "contextmenu", com.coremedia.ui.util.ContextMenuUtil.disableContextMenu);
  }/*

  protected*/ function getMyEditedContentsInReverseOrderExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var editedContentsCapList/*:CapList*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents();
      var editedContents/*:Array*/ = editedContentsCapList.getItems();
      if (editedContents) {
        return editedContents.reverse();
      } else {
        return undefined;
      }
    });
  }/*

  protected*/ function setupDropZone()/*:void*/ {
    // drop zone
    var editedContentsPanelDropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{
      ddGroup: "ContentLinkDD"
    });

    this.editedContentsPanelDropZone$xWRx = new com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDropZone(this, new com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDragDropModel(AS3.as(this,  com.coremedia.cms.editor.controlroom.EditedContentGridPanel)), editedContentsPanelDropZoneConfig);
    this.editedContentsPanelDropZone$xWRx.addToGroup("ContentDD");

    this.editedContentsPanelHeaderDropZone$xWRx = new com.coremedia.cms.editor.controlroom.dd.EditedContentPanelHeaderDropZone(this, new com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDragDropModel(AS3.as(this,  com.coremedia.cms.editor.controlroom.EditedContentGridPanel)), editedContentsPanelDropZoneConfig);
    this.editedContentsPanelHeaderDropZone$xWRx.addToGroup("ContentDD");
  }/*

  protected*/ function getMenuIconButtonVisibleVE()/*:ValueExpression*/ {var this$=this;
    var me/*:EditedContentGridPanelBase*/ = this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, "afterrender");
      var toolbar/*:Toolbar*/ = this$.getTopToolbar();
      if (toolbar) {
        var menuIconBtn/*:MenuIconButton*/ =AS3.as( toolbar.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.ui.components.MenuIconButton.xtype).build()),  com.coremedia.ui.components.MenuIconButton);
        if (menuIconBtn) {
          var toolsMenu/*:Menu*/ = AS3.getBindable(menuIconBtn,"menu","DUMMY");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(toolsMenu, "add");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(toolsMenu, "remove");
          return toolsMenu.itemCollection.getCount() > 0;
        }
      }
      return false;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
      editedContentsPanelDropZone$xWRx: null,
      editedContentsPanelHeaderDropZone$xWRx: null,
      constructor: EditedContentGridPanelBase$,
      super$xWRx: function() {
        com.coremedia.cms.editor.sdk.components.ContentGridPanel.prototype.constructor.apply(this, arguments);
      },
      onAfterRender$xWRx: onAfterRender,
      getMyEditedContentsInReverseOrderExpression: getMyEditedContentsInReverseOrderExpression,
      setupDropZone: setupDropZone,
      getMenuIconButtonVisibleVE: getMenuIconButtonVisibleVE,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ContextMenuUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.EditedContentGridPanel",
        "com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDragDropModel",
        "com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDropZone",
        "com.coremedia.cms.editor.controlroom.dd.EditedContentPanelHeaderDropZone"
      ]
    };
});
