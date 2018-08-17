Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase", function(SetScaleModeActionBase) {/*package com.coremedia.cms.editor.sdk.preview.zoom {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Component;
import ext.button.Button;

public class SetScaleModeActionBase extends Action {
  private var scaleModeValueExpression:ValueExpression;
  private var previewZoomStateWriter:PreviewZoomStateWriter;
  private var value:Boolean;
  internal native function get items():Array;

  /**
   * @param config the config object
   * /
  public*/ function SetScaleModeActionBase$(config/*:SetScaleModeAction = null*/) {if(arguments.length<=0)config=null;
    this.value$3XOD = AS3.getBindable(config,"value");
    this.super$3XOD(AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, this.value$3XOD ? 'fullWidth' : 'responsiveMode')));
    this.scaleModeValueExpression$3XOD = AS3.getBindable(config,"scaleModeValueExpression");
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.addComponent.call(this,comp);
    comp.on("menushow",AS3.bind( this,"scaleModeHandler"));
    this.scaleModeValueExpression$3XOD.addChangeListener(AS3.bind(this,"updatePressed"));
    this.updatePressed();
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    comp.un("menushow",AS3.bind( this,"scaleModeHandler"));
    if (this.items && this.items.length === 0) {
      this.scaleModeValueExpression$3XOD && this.scaleModeValueExpression$3XOD.removeChangeListener(AS3.bind(this,"updatePressed"));
    }
  }/*

  internal*/ function scaleModeHandler()/*:void*/ {
    this.scaleModeValueExpression$3XOD.setValue(this.value$3XOD);
    this.updatePressed();
    if (this.previewZoomStateWriter$3XOD) {
      this.previewZoomStateWriter$3XOD.triggerWrite();
    }
  }/*

  internal*/ function updatePressed()/*:void*/ {
    var pressed/*:Boolean*/ = ! !this.scaleModeValueExpression$3XOD.getValue() === this.value$3XOD;
    this.each(function (component/*:Component*/)/*:void*/ {
      var button/*:Button*/ =AS3.as( component,  Ext.button.Button);
      if (button) {
        button.toggle(pressed);
      }
    });
  }/*

  [InjectFromExtParent]
  public*/ function setPreviewZoomStateWriter(zoomStateWriter/*:PreviewZoomStateWriter*/)/*:void*/ {
    this.previewZoomStateWriter$3XOD = zoomStateWriter;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {setPreviewZoomStateWriter: ["InjectFromExtParent"]},
      scaleModeValueExpression$3XOD: null,
      previewZoomStateWriter$3XOD: null,
      value$3XOD: false,
      constructor: SetScaleModeActionBase$,
      super$3XOD: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      removeComponent: removeComponent,
      scaleModeHandler: scaleModeHandler,
      updatePressed: updatePressed,
      setPreviewZoomStateWriter: setPreviewZoomStateWriter,
      requires: [
        "Ext.Action",
        "Ext.button.Button"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction"
      ]
    };
});
