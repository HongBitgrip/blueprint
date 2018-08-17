Ext.define("com.coremedia.cms.studio.imageeditor.MenuButtonBase", function(MenuButtonBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;

public class MenuButtonBase extends IconButton {

  [Bindable]
  public var disabledValueExpression:ValueExpression;

  public*/ function MenuButtonBase$(config/*:MenuButtonBase = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$e5Nb(config);
    AS3.setBindable(this,"disabledValueExpression" , AS3.getBindable(config,"disabledValueExpression"));
    if (AS3.getBindable(this,"disabledValueExpression")) {
      AS3.getBindable(this,"disabledValueExpression").addChangeListener(AS3.bind(this,"updateDisabledStatus$e5Nb"));
      this.updateDisabledStatus$e5Nb();
    }
  }/*

  private*/ function updateDisabledStatus()/*:void*/ {
    var disabled/*:Boolean*/ = AS3.getBindable(this,"disabledValueExpression").getValue();
    this.setDisabled(disabled !== false);
  }/*

  protected override*/ function onDestroy()/*:void*/ {
    if (AS3.getBindable(this,"disabledValueExpression")) {
      AS3.getBindable(this,"disabledValueExpression").removeChangeListener(AS3.bind(this,"updateDisabledStatus$e5Nb"));
    }
    com.coremedia.ui.components.IconButton.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      constructor: MenuButtonBase$,
      super$e5Nb: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      updateDisabledStatus$e5Nb: updateDisabledStatus,
      onDestroy: onDestroy,
      config: {disabledValueExpression: null},
      requires: ["com.coremedia.ui.components.IconButton"]
    };
});
