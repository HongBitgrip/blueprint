Ext.define("com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPointBase", function(CuratedTransferExtensionPointBase) {/*package com.coremedia.elastic.social.studio.plugins {

import ext.button.Button;
import ext.container.Container;

public class CuratedTransferExtensionPointBase extends Container {

  public*/ function CuratedTransferExtensionPointBase$(config/*:CuratedTransferExtensionPoint = null*/) {if(arguments.length<=0)config=null;
    this.super$yMSB(config);
  }/*

  override protected*/ function onDisable()/*:void*/ {
    this.getChildButtons$yMSB() && this.getChildButtons$yMSB().forEach(function (button/*:Button*/)/*:void*/ {
      button.setDisabled(true);
    });
  }/*

  override protected*/ function onEnable()/*:void*/ {
    this.getChildButtons$yMSB() && this.getChildButtons$yMSB().forEach(function (button/*:Button*/)/*:void*/ {
      button.setDisabled(false);
    });
  }/*

  private*/ function getChildButtons()/*:Array*/ {
    return this.query("button");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: CuratedTransferExtensionPointBase$,
      super$yMSB: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      onDisable: onDisable,
      onEnable: onEnable,
      getChildButtons$yMSB: getChildButtons,
      requires: ["Ext.container.Container"]
    };
});
