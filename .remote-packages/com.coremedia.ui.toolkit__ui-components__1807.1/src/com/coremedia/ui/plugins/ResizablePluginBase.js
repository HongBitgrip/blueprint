Ext.define("com.coremedia.ui.plugins.ResizablePluginBase", function(ResizablePluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.components.StatefulResizer;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.container.Container;

public class ResizablePluginBase implements Plugin {

  [ExtConfig(create=false)]
  public var resizableConfig:StatefulResizer;

  [Bindable]
  public var fitComponent:Boolean;

  private var resizer:StatefulResizer;

  public*/ function ResizablePluginBase$(config/*:ResizablePluginBase = null*/) {if(arguments.length<=0)config=null;
    this.resizableConfig = config.resizableConfig;
    AS3.setBindable(this,"fitComponent" , AS3.getBindable(config,"fitComponent") || false);
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    component.addListener("afterrender",AS3.bind( this,"onAfterRender"));
    component.addListener("destroy",AS3.bind( this,"onDestroy$jgST"));

    var validationStateHolder/*:IValidationStateMixin*/ =AS3.as( component,  com.coremedia.ui.mixins.ValidationStateMixin);
    if (validationStateHolder) {
      component.addListener("validationStateChanged",AS3.bind( this,"onValidationStateChanged$jgST"));
      component.addListener("validationMessageChanged",AS3.bind( this,"onValidationMessageChanged$jgST"));
      this.onValidationStateChanged$jgST(component, AS3.getBindable(validationStateHolder,"validationState"));
      this.onValidationMessageChanged$jgST(component, AS3.getBindable(validationStateHolder,"validationMessage"));
    }

    var highlightedStateHolder/*:IHighlightableMixin*/ =AS3.as( component,  com.coremedia.ui.mixins.HighlightableMixin);
    if (highlightedStateHolder) {
      component.addListener("highlightedChanged",AS3.bind( this,"onHighlightedChanged$jgST"));
    }
  }/*

  protected*/ function onAfterRender(component/*:Component*/)/*:void*/ {var this$=this;
    this.resizableConfig.target = component;
    this.resizer$jgST = Ext.create(this.resizableConfig);

    if (AS3.getBindable(this,"fitComponent")) {
      var container/*:Container*/ = component instanceof Ext.container.Container ? AS3.cast(Ext.container.Container,component) : component.up();
      container.on("afterlayout", function ()/*:void*/ {
        this$.doFitComponent$jgST(component);
      }, null, {single: true});
    }
    // tell listeners we are there
    this.resizer$jgST.fireEvent('created', this.resizer$jgST, component);
  }/*

  private*/ function onDestroy()/*:void*/ {
    if (this.resizer$jgST) {
      var target/*:Component*/ = this.resizer$jgST.getTarget();
      if (target) {
        target.removeListener("afterrender",AS3.bind( this,"onAfterRender"));
        target.removeListener("destroy",AS3.bind( this,"onDestroy$jgST"));
        target.removeListener("validationStateChanged",AS3.bind( this,"onValidationStateChanged$jgST"));
        target.removeListener("validationMessageChanged",AS3.bind( this,"onValidationMessageChanged$jgST"));
        target.removeListener("hightlightedChanged",AS3.bind( this,"onHighlightedChanged$jgST"));
      }
      this.resizer$jgST.destroy(true);
      this.resizer$jgST = null;
    }
  }/*

  private*/ function onValidationStateChanged(cmp/*:Component*/,
                                            newValidationState/*:ValidationState*/)/*:void*/ {
    this.resizer$jgST && (AS3.setBindable(this.resizer$jgST,"validationState" , newValidationState));
  }/*

  private*/ function onValidationMessageChanged(cmp/*:Component*/,
                                              newValidationMessage/*:String*/)/*:void*/ {
    this.resizer$jgST && (AS3.setBindable(this.resizer$jgST,"validationMessage" , newValidationMessage));
  }/*

  private*/ function onHighlightedChanged(cmp/*:Component*/,
                                             newHighlighted/*:Boolean*/)/*:void*/ {
    this.resizer$jgST && (AS3.setBindable(this.resizer$jgST,"highlighted" , newHighlighted));
  }/*

  private*/ function doFitComponent(component/*:Component*/)/*:void*/ {
    if (this.resizer$jgST['north']) {
      component.setStyle("padding-top", (this.resizer$jgST["north"].getHeight() - 2) + "px");
    }
    if (this.resizer$jgST['south']) {
      component.setStyle("padding-bottom", (this.resizer$jgST["south"].getHeight() - 2) + "px");
    }
    if (this.resizer$jgST['west']) {
      component.setStyle("padding-left", (this.resizer$jgST["west"].getWidth() - 2) + "px");
    }
    if (this.resizer$jgST['east']) {
      component.setStyle("padding-right", (this.resizer$jgST["east"].getWidth() - 2) + "px");
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      resizableConfig: null,
      resizer$jgST: null,
      constructor: ResizablePluginBase$,
      init: init,
      onAfterRender: onAfterRender,
      onDestroy$jgST: onDestroy,
      onValidationStateChanged$jgST: onValidationStateChanged,
      onValidationMessageChanged$jgST: onValidationMessageChanged,
      onHighlightedChanged$jgST: onHighlightedChanged,
      doFitComponent$jgST: doFitComponent,
      config: {fitComponent: false},
      requires: [
        "Ext",
        "Ext.container.Container",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
