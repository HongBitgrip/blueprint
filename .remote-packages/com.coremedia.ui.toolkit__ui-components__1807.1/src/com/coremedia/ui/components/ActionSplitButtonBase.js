Ext.define("com.coremedia.ui.components.ActionSplitButtonBase", function(ActionSplitButtonBase) {/*package com.coremedia.ui.components {

import ext.Action;
import ext.Ext;
import ext.FunctionUtil;
import ext.button.SplitButton;
import ext.menu.Item;
import ext.menu.Menu;

public class ActionSplitButtonBase extends SplitButton {

  public*/ function ActionSplitButtonBase$(config/*:ActionSplitButton = null*/) {if(arguments.length<=0)config=null;
    this.super$K9fp(this.createSuperConfig$K9fp(config));
  }/*

  private*/ function createSuperConfig(config/*:ActionSplitButton*/)/*:ActionSplitButton*/ {
    var superConfig/*:ActionSplitButton*/ = AS3.cast(com.coremedia.ui.components.ActionSplitButton,Ext.apply({}, config));
    // TODO: sanity checks!
    var menuItems/*:Array*/ = AS3.cast(Ext.menu.Menu,AS3.getBindable(config,"menu","DUMMY")).items;
    superConfig.baseAction = AS3.cast(Ext.menu.Item,menuItems[0]).baseAction;
    AS3.setBindable(superConfig,"handler" , superConfig.baseAction.initialConfig.handler);
    for (var i/*:int*/ = 0; i < menuItems.length; i++) {
      var item/*:Item*/ = menuItems[i];
      if (item.baseAction) {
        var itemAction/*:Action*/ = AS3.cast(Ext.Action,item.baseAction.initialConfig);
        AS3.setBindable(itemAction,"handler" , Ext.Function.createSequence(itemAction.handler,
                Ext.Function.bind(AS3.bind(this,"setDelegateAction$K9fp"), this, [item])));
      }
    }
    return superConfig;
  }/*

  private*/ function setDelegateAction(item/*:Item*/)/*:void*/ {
    var initialConfig/*:ActionSplitButtonBase*/ = AS3.cast(ActionSplitButtonBase,this.initialConfig);
    this.setText(item.text || AS3.getBindable(initialConfig,"text","DUMMY"));
    this.setIconCls(item.iconCls || initialConfig.iconCls);
    this.setTooltip(item.tooltip || initialConfig.tooltip);
    this.setHandler(item.handler);
    // TODO: for the general case, the ActionSplitButton must reuse the delegate Action's disabling logic,
    //   but item.baseAction.addComponent(this) does not work because of Ext AS Action#addComponent() patch. :-(
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Split",
      constructor: ActionSplitButtonBase$,
      super$K9fp: function() {
        Ext.button.Split.prototype.constructor.apply(this, arguments);
      },
      createSuperConfig$K9fp: createSuperConfig,
      setDelegateAction$K9fp: setDelegateAction,
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.Function",
        "Ext.button.Split",
        "Ext.menu.Item",
        "Ext.menu.Menu"
      ],
      uses: ["com.coremedia.ui.components.ActionSplitButton"]
    };
});
