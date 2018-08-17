Ext.define("com.coremedia.cap.workflow.impl.WorkflowObjectImpl", function(WorkflowObjectImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.CapObjectImpl;
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.data.impl.SubBean;

public class WorkflowObjectImpl extends CapObjectImpl implements WorkflowObject {
  public*/ function WorkflowObjectImpl$(path/*:String*/) {
    this.super$38Fl(path);
  }/*

  /**
   * Methods to enable properties read and write back of this remote bean
   * /
  override protected*/ function isSubObject(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    return propertyPath === "properties";
  }/*

  override protected*/ function createSubBean(propertyPathPrefix/*:String*/)/*:SubBean*/ {
    return new com.coremedia.cap.workflow.impl.WorkflowObjectPropertiesImpl(this, propertyPathPrefix);
  }/*

  public*/ function getRepository()/*:WorkflowRepository*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
  }/*

  public*/ function getProperties()/*:WorkflowObjectProperties*/ {
    return this.get('properties');
  }/*

  public*/ function isProcess()/*:Boolean*/ {
    return AS3.is( this,  com.coremedia.cap.workflow.Process);
  }/*

  public*/ function isTask()/*:Boolean*/ {
    return AS3.is( this,  com.coremedia.cap.workflow.Task);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.CapObjectImpl",
      mixins: ["com.coremedia.cap.workflow.WorkflowObject"],
      constructor: WorkflowObjectImpl$,
      super$38Fl: function() {
        com.coremedia.cap.common.impl.CapObjectImpl.prototype.constructor.apply(this, arguments);
      },
      isSubObject: isSubObject,
      createSubBean: createSubBean,
      getRepository: getRepository,
      getProperties: getProperties,
      isProcess: isProcess,
      isTask: isTask,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.CapObjectImpl",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.WorkflowObject"
      ],
      uses: ["com.coremedia.cap.workflow.impl.WorkflowObjectPropertiesImpl"]
    };
});
