Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase", function(ProcessListPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel;
import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone;
import com.coremedia.ui.components.ExtendableGrid;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.exml.ValueExpression;

import ext.dd.DropZone;

public class ProcessListPanelBase extends ExtendableGrid implements SwitchingListPanel {

  private var selectedItems:Array;

  public*/ function ProcessListPanelBase$(config/*:ProcessListPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$KVXx(config);
    this.on("afterRender",AS3.bind( this,"setupDropZone$KVXx"));
  }/*

  public*/ function switchToDetail()/*:void*/ {
    this.switchToDetailHandler && this.switchToDetailHandler();
  }/*

  [ExtConfig]
  public var switchToDetailHandler:Function;

  [ProvideToExtChildren]
  public*/ function getSelectedItems()/*:Array*/ {
    return this.selectedItems$KVXx;
  }/*

  public*/ function setSelectedItems(value/*:Array*/)/*:void*/ {
    var oldValue/*:Array*/ = this.selectedItems$KVXx;
    this.selectedItems$KVXx = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel.SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  private*/ function setupDropZone()/*:void*/ {
    // drop zone
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{});
    dropZoneConfig.ddGroup = "ContentLinkDD";
    // workflow panel drop zone
    var workflowDropZone/*:WorkflowPanelDropZone*/ = new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone(this, new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel(this), dropZoneConfig);
    workflowDropZone.addToGroup("ContentDD");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendableGrid",
      mixins: ["com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel"],
      metadata: {getSelectedItems: ["ProvideToExtChildren"]},
      selectedItems$KVXx: null,
      constructor: ProcessListPanelBase$,
      super$KVXx: function() {
        com.coremedia.ui.components.ExtendableGrid.prototype.constructor.apply(this, arguments);
      },
      switchToDetail: switchToDetail,
      switchToDetailHandler: null,
      getSelectedItems: getSelectedItems,
      setSelectedItems: setSelectedItems,
      setupDropZone$KVXx: setupDropZone,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel",
        "com.coremedia.ui.components.ExtendableGrid",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone"
      ]
    };
});
