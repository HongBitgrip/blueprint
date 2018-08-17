Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction", function(ShowStartWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;
public class ShowStartWorkflowWindowAction extends ShowStartWorkflowWindowActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function ShowStartWorkflowWindowAction$(config/*:ShowStartWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase,{});
    var defaults_$1/*:ShowStartWorkflowWindowAction*/ =AS3.cast(ShowStartWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$W_aT(config_$1);
  }/*

    [Bindable]
    public var workflowNameValueExpression:ValueExpression;

    [Bindable]
    public var actionName:String;


    [Bindable]
    public var processDefinitionNames:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase",
      constructor: ShowStartWorkflowWindowAction$,
      super$W_aT: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        workflowNameValueExpression: null,
        actionName: null,
        processDefinitionNames: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
