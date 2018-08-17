Ext.define("com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights", function(WorkflowObjectRights) {/*package com.coremedia.cap.workflow.authorization.impl {
import com.coremedia.ui.data.impl.RemoteBeanImpl;

/**
 * An internal bean representing the rights on workflow objects.
 * /
public class WorkflowObjectRights extends RemoteBeanImpl {
  /**
   * The name of the bean property that contains the list of granted rights for
   * WorkflowObject given from the server.
   * /
  private static const*/var ITEMS_PROPERTY_NAME$static/*:String*/ = 'items';/*

  /**
   * The name of the bean property that contains the list of granted rights to the
   * WorkflowObject.
   * /
  private static const*/var RIGHTS_ARRAY_PROPERTY_NAME$static/*:String*/ = 'rights';/*

  public*/ function WorkflowObjectRights$(uri/*:String*/) {
    this.super$fNrn(uri);
  }/*

  override protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    // Convert the array of rights strings ...
    var items/*:Array*/ = newValues[ITEMS_PROPERTY_NAME$static];

    var rights/*:Array*/ = [];
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      rights.push(com.coremedia.cap.workflow.authorization.impl.Right.fromString(items[i]));
    }
    // ... and add the new list into the read result as an implicit property.
    newValues[RIGHTS_ARRAY_PROPERTY_NAME$static] = rights;
    return com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.processReadResult.call(this,newValues);
  }/*

  /**
   * Returns, if the list of rights contains the given Right
   *
   * @param right the Right to check for
   * @return true if the list of rights contains the given Right,
   *   false if not, undefined if the list has not yet been loaded
   * /
  public*/ function hasRight(right/*:Right*/)/*:**/ {
    var rights/*:Array*/ = this.get(RIGHTS_ARRAY_PROPERTY_NAME$static);
    if (rights === undefined) {
      return undefined;
    }
    for (var i/*:int*/ = 0; i < rights.length; i++) {
      if (rights[i] === right) {
        return true;
      }
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      constructor: WorkflowObjectRights$,
      super$fNrn: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      processReadResult: processReadResult,
      hasRight: hasRight,
      requires: ["com.coremedia.ui.data.impl.RemoteBeanImpl"],
      uses: ["com.coremedia.cap.workflow.authorization.impl.Right"]
    };
});
