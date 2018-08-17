Ext.define("com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase", function(SwitchViewActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;

import ext.Action;
import ext.Component;
import ext.button.Button;

public class SwitchViewActionBase extends Action {
  private var collectionViewModel:CollectionViewModel;
  private var view:String;
  private var onUnpressSwitchToView:String;
  internal native function get items():Array;

  /**
   * @param config the config object
   * /
  public*/ function SwitchViewActionBase$(config/*:SwitchViewAction = null*/) {if(arguments.length<=0)config=null;
    this.collectionViewModel$xGFh = AS3.getBindable(config,"collectionViewModel");
    this.view$xGFh = AS3.getBindable(config,"view") ? AS3.getBindable(config,"view") : undefined;
    this.onUnpressSwitchToView$xGFh = AS3.getBindable(config,"onUnpressSwitchToView") ? AS3.getBindable(config,"onUnpressSwitchToView") : undefined;
    delete config['collectionViewModel'];
    delete config['view'];
    delete config['onUnpressSwitchToView'];
    this.super$xGFh(config);
    this.collectionViewModel$xGFh.getMainStateBean().addPropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY,AS3.bind( this,"setPressed"));
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.addComponent.call(this,comp);
    this.setPressed();
  }/*

  internal*/ function _handler()/*:void*/ {
    if (this.view$xGFh) {
      if (this.onUnpressSwitchToView$xGFh && this.collectionViewModel$xGFh.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY) === this.view$xGFh) {
        this.collectionViewModel$xGFh.getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY, this.onUnpressSwitchToView$xGFh);
      } else {
        this.collectionViewModel$xGFh.getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY, this.view$xGFh);
      }
    }
  }/*

  public*/ function setPressed()/*:void*/ {
    var pressed/*:Boolean*/;
    if (this.view$xGFh) {
      pressed = this.collectionViewModel$xGFh.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY) === this.view$xGFh;
      this.each(function (component/*:Component*/)/*:void*/ {
        var button/*:Button*/ =AS3.as( component,  Ext.button.Button);
        if (button) {
          button.toggle(pressed);
        }
      });
    }
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      this.collectionViewModel$xGFh.getMainStateBean().removePropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY,AS3.bind( this,"setPressed"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      collectionViewModel$xGFh: null,
      view$xGFh: null,
      onUnpressSwitchToView$xGFh: null,
      constructor: SwitchViewActionBase$,
      super$xGFh: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      _handler: _handler,
      setPressed: setPressed,
      removeComponent: removeComponent,
      requires: [
        "Ext.Action",
        "Ext.button.Button"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel"]
    };
});
