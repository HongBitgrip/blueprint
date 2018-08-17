Ext.define("com.coremedia.cap.workflow.impl.TaskDefinitionImpl", function(TaskDefinitionImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.impl.CapTypeImpl;
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.logging.Logger;

[RestResource(uriTemplate="workflow/taskdefinition/{processDefinitionId:[0-9]+}/{id:[0-9]+}")]
public class TaskDefinitionImpl extends CapTypeImpl implements TaskDefinition {*/function static$0(){

  com.coremedia.ui.logging.Logger.debug("loading TaskDefinitionType: " + com.coremedia.cap.workflow.TaskDefinitionType.values);}/*

  public*/ function TaskDefinitionImpl$(path/*:String*/, vars/*:Object*/) {
    var id/*:**/ = vars['id'];
    var processId/*:**/ = vars['processDefinitionId'];
    this.super$8W$9(path);
    var numericId/*:int*/ = parseInt(id, 10);
    var numericProcessDefinitionId/*:int*/ = parseInt(processId, 10);
    this.setId("coremedia:///cap/taskdefinition/" + numericProcessDefinitionId + "/" + numericId);
  }/*

  public*/ function getDeclaringDefinition()/*:ProcessDefinition*/ {
    return this.get("declaringDefinition");
  }/*

  public*/ function getType()/*:TaskDefinitionType*/ {
    return this.get("type");
  }/*

  public*/ function isFinal()/*:Boolean*/ {
    return this.get("final");
  }/*

  public*/ function isReexecutable()/*:Boolean*/ {
    return this.get("reexecutable");
  }/*

  public*/ function getDefaultPriority()/*:int*/ {
    return this.get("defaultPriority");
  }/*

  public*/ function getDefaultOfferTimeout()/*:int*/ {
    return this.get("defaultOfferTimeout");
  }/*

  public*/ function getSuccessorDefinitions()/*:Array*/ {
    return this.get("successorDefinitions");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.CapTypeImpl",
      mixins: ["com.coremedia.cap.workflow.TaskDefinition"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow/taskdefinition/{processDefinitionId:[0-9]+}/{id:[0-9]+}"
        ]
      ]},
      constructor: TaskDefinitionImpl$,
      super$8W$9: function() {
        com.coremedia.cap.common.impl.CapTypeImpl.prototype.constructor.apply(this, arguments);
      },
      getDeclaringDefinition: getDeclaringDefinition,
      getType: getType,
      isFinal: isFinal,
      isReexecutable: isReexecutable,
      getDefaultPriority: getDefaultPriority,
      getDefaultOfferTimeout: getDefaultOfferTimeout,
      getSuccessorDefinitions: getSuccessorDefinitions,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "com.coremedia.cap.common.impl.CapTypeImpl",
        "com.coremedia.cap.workflow.TaskDefinition",
        "com.coremedia.cap.workflow.TaskDefinitionType",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
