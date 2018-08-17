Ext.define("com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel", function(FinishedProcessListPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
public class FinishedProcessListPanel extends FinishedProcessListPanelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.finishedProcessListPanel";

    public static const WORKFLOW_LIST_ITEM_ID:String = "finishedWorkflowList";

    public*/function FinishedProcessListPanel$(config/*:FinishedProcessListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase,{});
    var defaults_$1/*:FinishedProcessListPanel*/ =AS3.cast(FinishedProcessListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var local_ProcessListPanel_43_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel,{});
    local_ProcessListPanel_43_5_$1.columns = AS3.getBindable(config,"columns") || com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase.getDefaultColumns();
    local_ProcessListPanel_43_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_finished_text') + ' '  + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix'));
    AS3.setBindable(local_ProcessListPanel_43_5_$1,"extraFields" , AS3.getBindable(config,"extraFields"));
    local_ProcessListPanel_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( FinishedProcessListPanel.WORKFLOW_LIST_ITEM_ID);
    AS3.setBindable(local_ProcessListPanel_43_5_$1,"processListValueExpression" , AS3.getBindable(config,"processListValueExpression"));
    config_$1.items = [local_ProcessListPanel_43_5_$1];
    var layout_Fit_50_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_50_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Jj0S(config_$1);
  }/*

    [Bindable]
    public var processListValueExpression:ValueExpression;

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
    public var columns:Array;


    /**
     An array of panels to display information about finished workflows.
     The panel that has the currently selected task's containing process definition name
     as itemId will be displayed on double-click.
     * /
    [Bindable]
    public var workflowInfoPanels:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.finishedProcessListPanel",
      constructor: FinishedProcessListPanel$,
      super$Jj0S: function() {
        com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        processListValueExpression: null,
        extraFields: null,
        columns: null,
        workflowInfoPanels: null
      },
      statics: {WORKFLOW_LIST_ITEM_ID: "finishedWorkflowList"},
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel"]
    };
});
