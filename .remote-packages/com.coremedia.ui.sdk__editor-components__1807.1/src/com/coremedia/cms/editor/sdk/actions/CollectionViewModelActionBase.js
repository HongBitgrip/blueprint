Ext.define("com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase", function(CollectionViewModelActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Action;
import ext.Component;
import ext.button.Button;

[PublicApi]
public class CollectionViewModelActionBase extends Action {

  private var property:String;
  private var value:Object;
  private var pressedExpression:ValueExpression;
  private var disabledExpression:ValueExpression;

  public*/ function CollectionViewModelActionBase$(config/*:CollectionViewModelAction = null*/) {if(arguments.length<=0)config=null;
    this.super$n$J2(config);
    this.property$n$J2 = AS3.getBindable(config,"property");
    this.value$n$J2 = AS3.getBindable(config,"value");
    this.pressedExpression$n$J2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculatePressed$n$J2"));
    this.pressedExpression$n$J2.addChangeListener(AS3.bind(this,"updatePressedStatus$n$J2"));
    this.updatePressedStatus$n$J2();
    this.disabledExpression$n$J2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateDisabled"));
    this.disabledExpression$n$J2.addChangeListener(AS3.bind(this,"updateDisabledStatus$n$J2"));
    this.updateDisabledStatus$n$J2();
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.addComponent.call(this,comp);
    this.updatePressedStatus$n$J2();
    this.updateDisabledStatus$n$J2();
  }/*

  private*/ function calculatePressed()/*:Boolean*/ {
    if (!this.getCollectionViewState$n$J2()) {
      return true;
    }

    return this.getCollectionViewState$n$J2().get(this.property$n$J2) === this.value$n$J2;
  }/*

  /**
   * @private
   * /
  protected*/ function calculateDisabled()/*:Boolean*/ {
    //per default only pressed and not disabled
    return false;
  }/*

  private*/ function updatePressedStatus()/*:void*/ {
    var value/*:**/ = this.pressedExpression$n$J2.getValue();
    var disabled/*:Boolean*/ = value === undefined || value;
    this.each(function (component/*:Component*/)/*:void*/ {
      var button/*:Button*/ =AS3.as( component,  Ext.button.Button);
      if (button) {
        button.toggle(disabled);
      }
    });
  }/*

  private*/ function updateDisabledStatus()/*:void*/ {
    var value/*:**/ = this.disabledExpression$n$J2.getValue();
    var disabled/*:Boolean*/ = value === undefined || value;
    this.setDisabled(disabled);
  }/*

  internal*/ function _handler()/*:void*/ {
    this.getCollectionViewState$n$J2().set(this.property$n$J2, this.value$n$J2);
  }/*

  /**
   * @private
   * /
  public*/ function isPressed()/*:Boolean*/ {
    return this.pressedExpression$n$J2.getValue();
  }/*

  private*/ function getCollectionViewState()/*:Bean*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel().getMainStateBean();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      property$n$J2: null,
      value$n$J2: null,
      pressedExpression$n$J2: null,
      disabledExpression$n$J2: null,
      constructor: CollectionViewModelActionBase$,
      super$n$J2: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      calculatePressed$n$J2: calculatePressed,
      calculateDisabled: calculateDisabled,
      updatePressedStatus$n$J2: updatePressedStatus,
      updateDisabledStatus$n$J2: updateDisabledStatus,
      _handler: _handler,
      isPressed: isPressed,
      getCollectionViewState$n$J2: getCollectionViewState,
      requires: [
        "Ext.Action",
        "Ext.button.Button",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
