Ext.define("com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel", function(InboxTaskListPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
/**
 A panel which switches between a workflow list and a detail panel for a selected workflow.
 * /
public class InboxTaskListPanel extends InboxTaskListPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.inboxTaskListPanel";

    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingContainer";

    public static const WORKFLOW_DETAIL_ITEM_ID:String = "workflowDetails";

    public static const WORKFLOW_LIST_ITEM_ID:String = "workflowList";

    public*/function InboxTaskListPanel$(config/*:InboxTaskListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase,{});
    var defaults_$1/*:InboxTaskListPanel*/ =AS3.cast(InboxTaskListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"activeItemValueExpression" , AS3.getBindable(config,"activeItemValueExpression"));
    var ui_SwitchingContainer_41_5_$1/*: com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( InboxTaskListPanel.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_41_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"activeItemValueExpression"));
    var collab_TaskListPanel_45_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.TaskListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskListPanel,{});
    collab_TaskListPanel_45_9_$1.itemId =net.jangaroo.ext.Exml.asString( InboxTaskListPanel.WORKFLOW_LIST_ITEM_ID);
    AS3.setBindable(collab_TaskListPanel_45_9_$1,"taskListValueExpression" , AS3.getBindable(config,"taskListValueExpression"));
    AS3.setBindable(collab_TaskListPanel_45_9_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    collab_TaskListPanel_45_9_$1.columns = AS3.getBindable(config,"columns");
    collab_TaskListPanel_45_9_$1.switchToDetailHandler =AS3.bind( this,"switchToDetail");
    var collab_InboxDetailPanelWrapper_52_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper,{});
    collab_InboxDetailPanelWrapper_52_9_$1.itemId =net.jangaroo.ext.Exml.asString( InboxTaskListPanel.WORKFLOW_DETAIL_ITEM_ID);
    AS3.setBindable(collab_InboxDetailPanelWrapper_52_9_$1,"backToListHandler" ,AS3.bind( this,"switchToList"));
    AS3.setBindable(collab_InboxDetailPanelWrapper_52_9_$1,"taskValueExpression" , this.getSelectedTaskValueExpression());
    ui_SwitchingContainer_41_5_$1.items = [collab_TaskListPanel_45_9_$1, collab_InboxDetailPanelWrapper_52_9_$1];
    config_$1.items = [ui_SwitchingContainer_41_5_$1];
    var layout_Fit_59_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_59_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pEgE(config_$1);
  }/*

    /**
     Any number of extra fields that are required for rendering the configured
     columns. By default the fields taskDefinitionName, processName and
     accepted are provided.
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
      extend: "com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.inboxTaskListPanel",
      constructor: InboxTaskListPanel$,
      super$pEgE: function() {
        com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase.prototype.constructor.apply(this, arguments);
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
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.TaskListPanel"
      ]
    };
});
