Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteImageLinkActionBase", function(DeleteImageLinkActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Component;

public class DeleteImageLinkActionBase extends Action {
  protected var propertyValueExpression:ValueExpression;
  internal native function get items():Array;

  /**
   * @param config the config object
   * /
  public*/ function DeleteImageLinkActionBase$(config/*:DeleteImageLinkAction = null*/) {if(arguments.length<=0)config=null;
    this.super$lO96(AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteImageLinkAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "deleteImageLink", {handler:AS3.bind( this,"deleteImageBlob$lO96")})));

    var bindTo/*:ValueExpression*/ = AS3.getBindable(config,"bindTo");
    var propertyName/*:String*/ = AS3.getBindable(config,"propertyName");
    this.propertyValueExpression = bindTo.extendBy('properties', propertyName);
    this.propertyValueExpression.addChangeListener(AS3.bind(this,"updateDisabled$lO96"));
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.addComponent.call(this,comp);
    //broadcast the disable state after the add of an component
    this.updateDisabled$lO96();
  }/*

  private*/ function updateDisabled()/*:void*/ {
    var newValue/*:Array*/ =AS3.as( this.propertyValueExpression.getValue(),  Array);
    this.setDisabled(!newValue || newValue.length === 0);
  }/*

  private*/ function deleteImageBlob()/*:void*/ {
    this.propertyValueExpression.setValue([]);
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      this.propertyValueExpression && this.propertyValueExpression.removeChangeListener(AS3.bind(this,"updateDisabled$lO96"));
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      propertyValueExpression: null,
      constructor: DeleteImageLinkActionBase$,
      super$lO96: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      updateDisabled$lO96: updateDisabled,
      deleteImageBlob$lO96: deleteImageBlob,
      removeComponent: removeComponent,
      requires: ["Ext.Action"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DeleteImageLinkAction"
      ]
    };
});
