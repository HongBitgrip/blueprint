Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase", function(WorkflowNameFieldBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.ui.components.StatefulTextField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.mixins.ValidationState;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class WorkflowNameFieldBase extends StatefulTextField {
  public*/ function WorkflowNameFieldBase$(config/*:WorkflowNameField = null*/) {if(arguments.length<=0)config=null;
    this.super$VEmy(config);

    AS3.getBindable(config,"workflowNameExpression").addChangeListener(AS3.bind(this,"validateSubject"));
  }/*

  [Bindable]
  public var workflowNameExpression:ValueExpression;

  protected*/ function validateSubject(subjectValueExpression/*:ValueExpression*/)/*:void*/ {
    if (!subjectValueExpression.getValue() || subjectValueExpression.getValue() === '') {
      AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      AS3.setBindable(this,"validationMessage" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_nameNotValid'));
      } else {
      AS3.setBindable(this,"validationState" , null);
      AS3.setBindable(this,"validationMessage" , null);
    }
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.ui.components.StatefulTextField.prototype.onDestroy.call(this);
    AS3.getBindable(this,"workflowNameExpression").removeChangeListener(AS3.bind(this,"validateSubject"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulTextField",
      constructor: WorkflowNameFieldBase$,
      super$VEmy: function() {
        com.coremedia.ui.components.StatefulTextField.prototype.constructor.apply(this, arguments);
      },
      validateSubject: validateSubject,
      onDestroy: onDestroy,
      config: {workflowNameExpression: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.mixins.ValidationState"
      ]
    };
});
