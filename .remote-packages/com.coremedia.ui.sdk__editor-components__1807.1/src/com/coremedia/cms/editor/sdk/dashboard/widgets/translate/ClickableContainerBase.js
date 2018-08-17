Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase", function(ClickableContainerBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import ext.container.Container;
import ext.dom.Element;

public class ClickableContainerBase extends Container {
  public*/ function ClickableContainerBase$(config/*:ClickableContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$grPZ(config);

    this.on('render',AS3.bind( this,"registerHandler$grPZ"));
  }/*

  [ExtConfig]
  public var event:String;

  [ExtConfig]
  public var handler:Function;

  private*/ function registerHandler()/*:void*/ {
    var el/*:Element*/ = this.getEl();

    if (this.handler && el) {
      el.on(this.event, this.handler);
      el.addClsOnOver('clickable-container-over');
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    var el/*:Element*/ = this.getEl();

    if (this.handler && el) {
      el.un(this.event, this.handler, null);
    }

    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: ClickableContainerBase$,
      super$grPZ: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      event: null,
      handler: null,
      registerHandler$grPZ: registerHandler,
      beforeDestroy: beforeDestroy,
      requires: ["Ext.container.Container"]
    };
});
