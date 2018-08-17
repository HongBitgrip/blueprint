Ext.define("com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase", function(TodoAssignmentMenuItemBase) {/*package com.coremedia.cms.editor.todo.components {
import com.coremedia.cap.user.User;

import ext.menu.Item;

public class TodoAssignmentMenuItemBase extends Item {

  [Bindable]
  public var user:User;

  [ExtConfig]
  public var userSelectionHandler:Function;

  [ExtConfig]
  public var userTransformer:Function;

  public*/ function TodoAssignmentMenuItemBase$(config/*:TodoAssignmentMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.super$1rHi(config);
  }/*

  protected*/ function callSelectionHandler()/*:void*/ {
    this.userSelectionHandler && this.userSelectionHandler(AS3.getBindable(this,"user"));
  }/*

  protected*/ function computeUserName()/*:String*/ {
    if (!AS3.getBindable(this,"user").isLoaded()) {
      AS3.getBindable(this,"user").load();
      return undefined;
    }
    return this.userTransformer(AS3.getBindable(this,"user"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      userSelectionHandler: null,
      userTransformer: null,
      constructor: TodoAssignmentMenuItemBase$,
      super$1rHi: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      callSelectionHandler: callSelectionHandler,
      computeUserName: computeUserName,
      config: {user: null},
      requires: ["Ext.menu.Item"]
    };
});
