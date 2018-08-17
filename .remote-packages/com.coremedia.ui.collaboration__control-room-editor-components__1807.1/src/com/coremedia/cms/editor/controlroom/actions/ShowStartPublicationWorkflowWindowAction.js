Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction", function(ShowStartPublicationWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;
public class ShowStartPublicationWorkflowWindowAction extends ShowStartPublicationWorkflowWindowActionBase{

    import com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants;

    public*/function ShowStartPublicationWorkflowWindowAction$(config/*:ShowStartPublicationWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase,{});
    var defaults_$1/*:ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(ShowStartPublicationWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"actionName" , "showStartPublicationWorkflowWindow");
    AS3.setBindable(config_$1,"processDefinitionNames" , [
           com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SIMPLE_PUBLICATION_WORKFLOW_TYPE,
           com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE
          ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$LpDv(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase",
      constructor: ShowStartPublicationWorkflowWindowAction$,
      super$LpDv: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"]
    };
});
