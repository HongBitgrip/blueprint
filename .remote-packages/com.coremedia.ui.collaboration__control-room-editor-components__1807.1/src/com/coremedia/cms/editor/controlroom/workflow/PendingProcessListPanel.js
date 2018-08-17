Ext.define("com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel", function(PendingProcessListPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
/**
 A panel which switches between a process list and a detail panel for a selected process.
 * /
public class PendingProcessListPanel extends PendingProcessListPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.pendingProcessListPanel";

    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingContainer";

    public static const WORKFLOW_DETAIL_ITEM_ID:String = "workflowDetails";

    public static const WORKFLOW_LIST_ITEM_ID:String = "workflowList";

    public*/function PendingProcessListPanel$(config/*:PendingProcessListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase,{});
    var defaults_$1/*:PendingProcessListPanel*/ =AS3.cast(PendingProcessListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "fit");
    AS3.setBindable(config_$1,"activeItemValueExpression" , AS3.getBindable(config,"activeItemValueExpression"));
    var ui_SwitchingContainer_41_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( PendingProcessListPanel.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_41_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"activeItemValueExpression"));
    var collab_ProcessListPanel_45_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel,{});
    collab_ProcessListPanel_45_9_$1.itemId =net.jangaroo.ext.Exml.asString( PendingProcessListPanel.WORKFLOW_LIST_ITEM_ID);
    collab_ProcessListPanel_45_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_pending_text') + ' '  + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix'));
    AS3.setBindable(collab_ProcessListPanel_45_9_$1,"processListValueExpression" , AS3.getBindable(config,"processListValueExpression"));
    AS3.setBindable(collab_ProcessListPanel_45_9_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    collab_ProcessListPanel_45_9_$1.columns = AS3.getBindable(config,"columns");
    collab_ProcessListPanel_45_9_$1.switchToDetailHandler =AS3.bind( this,"switchToDetail");
    var collab_ProcessDetailPanelWrapper_53_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper,{});
    collab_ProcessDetailPanelWrapper_53_9_$1.itemId =net.jangaroo.ext.Exml.asString( PendingProcessListPanel.WORKFLOW_DETAIL_ITEM_ID);
    AS3.setBindable(collab_ProcessDetailPanelWrapper_53_9_$1,"backToListHandler" ,AS3.bind( this,"switchToList"));
    AS3.setBindable(collab_ProcessDetailPanelWrapper_53_9_$1,"processValueExpression" , this.getSelectedProcessValueExpression());
    ui_SwitchingContainer_41_5_$1.items = [collab_ProcessListPanel_45_9_$1, collab_ProcessDetailPanelWrapper_53_9_$1];
    config_$1.items = [ui_SwitchingContainer_41_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Gh9x(config_$1);
  }/*

    /**
     Any number of extra fields that are required for rendering the configured
     columns. By default the field processName is provided.
     * /
    [Bindable]
    public var extraFields:Array;


    /**
     An array of columns for use in the nested panel. If not provided, a default set of
     columns is used.
     * /
    [Bindable]
    public var columns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.pendingProcessListPanel",
      constructor: PendingProcessListPanel$,
      super$Gh9x: function() {
        com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        extraFields: null,
        columns: null
      },
      statics: {
        SWITCHING_CONTAINER_ITEM_ID: "switchingContainer",
        WORKFLOW_DETAIL_ITEM_ID: "workflowDetails",
        WORKFLOW_LIST_ITEM_ID: "workflowList"
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel"
      ]
    };
});
