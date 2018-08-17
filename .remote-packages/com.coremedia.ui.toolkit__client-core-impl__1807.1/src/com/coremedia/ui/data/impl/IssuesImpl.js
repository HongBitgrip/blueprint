Ext.define("com.coremedia.ui.data.impl.IssuesImpl", function(IssuesImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.validation.Issues;

import ext.Ext;

public class IssuesImpl extends RemoteBeanImpl implements Issues {
  public*/ function IssuesImpl$(path/*:String*/) {
    this.super$RsK8(path);
  }/*

  public*/ function getEntity()/*:RemoteBean*/ {
    return this.get('entity');
  }/*

  public*/ function isValid()/*:Boolean*/ {
    return this.get('valid');
  }/*

  public*/ function getAll()/*:Array*/ {
    return this.get('all');
  }/*

  public*/ function getByProperty()/*:Bean*/ {
    return this.get('byProperty');
  }/*

  public*/ function getGlobal()/*:Array*/ {
    return this.get('global');
  }/*

  override protected*/ function isSubObject(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    return propertyPath === 'byProperty';
  }/*

  override protected*/ function doUpdateProperties(originalValues/*:Object*/, ignoreUpdate/*:Boolean*/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:Object*/ {
    var values/*:Object*/ = Ext.apply({
      global: [],
      byProperty: {}
    }, originalValues);
    var allIssues/*:Array*/ = com.coremedia.ui.data.impl.IssuesUtil.getAllIssues(values);
    values['all'] = allIssues;
    values['valid'] = allIssues.length === 0;

    return com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.doUpdateProperties.call(this,values, ignoreUpdate, oldState, newState);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.ui.data.validation.Issues"],
      constructor: IssuesImpl$,
      super$RsK8: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getEntity: getEntity,
      isValid: isValid,
      getAll: getAll,
      getByProperty: getByProperty,
      getGlobal: getGlobal,
      isSubObject: isSubObject,
      doUpdateProperties: doUpdateProperties,
      requires: [
        "Ext",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.validation.Issues"
      ],
      uses: ["com.coremedia.ui.data.impl.IssuesUtil"]
    };
});
