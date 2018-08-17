Ext.define("com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase", function(OpenBlobActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Component;

public class OpenBlobActionBase extends Action {
  [Bindable]
  public var blobValueExpression:ValueExpression;

  internal native function get items():Array;

  /**
   * @param config
   * /
  public*/ function OpenBlobActionBase$(config/*:OpenBlobAction = null*/) {if(arguments.length<=0)config=null;
    this.super$8h8v(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenBlobAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "openBlob", {handler:AS3.bind( this,"openBlob$8h8v")})));

    AS3.setBindable(this,"blobValueExpression" , AS3.getBindable(config,"blobValueExpression"));
    AS3.getBindable(this,"blobValueExpression").addChangeListener(AS3.bind(this,"updateDisabled$8h8v"));
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.addComponent.call(this,comp);
    //broadcast the disable state after the add of an component
    this.updateDisabled$8h8v();
  }/*

  private*/ function updateDisabled()/*:void*/ {
    var newValue/*:Blob*/ = AS3.getBindable(this,"blobValueExpression").getValue();
    this.setDisabled(!newValue || newValue.getSize() === undefined);
  }/*

  private*/ function openBlob()/*:void*/ {
    var newValue/*:Blob*/ = AS3.getBindable(this,"blobValueExpression").getValue();
    window.open(newValue.getUri());
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      AS3.getBindable(this,"blobValueExpression") && AS3.getBindable(this,"blobValueExpression").removeChangeListener(AS3.bind(this,"updateDisabled$8h8v"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      constructor: OpenBlobActionBase$,
      super$8h8v: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      updateDisabled$8h8v: updateDisabled,
      openBlob$8h8v: openBlob,
      removeComponent: removeComponent,
      config: {blobValueExpression: null},
      requires: ["Ext.Action"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenBlobAction"
      ]
    };
});
