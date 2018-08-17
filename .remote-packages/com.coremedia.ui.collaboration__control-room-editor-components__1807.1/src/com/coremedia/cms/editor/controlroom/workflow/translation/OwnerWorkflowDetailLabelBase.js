Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase", function(OwnerWorkflowDetailLabelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class OwnerWorkflowDetailLabelBase extends WorkflowDetailLabel {
  public*/ function OwnerWorkflowDetailLabelBase$(config/*:OwnerWorkflowDetailLabel = null*/) {if(arguments.length<=0)config=null;
    this.super$Exto(config);
  }/*

  protected*/ function getOwnerVE(processExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var owner/*:User*/ = processExpression.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.OWNER).getValue();

      if (owner) {
        return owner === com.coremedia.cap.common.SESSION.getUser() ?
                this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_owner_me') :
                owner.getName();
      }

      return "";
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
      constructor: OwnerWorkflowDetailLabelBase$,
      super$Exto: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel.prototype.constructor.apply(this, arguments);
      },
      getOwnerVE: getOwnerVE,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
