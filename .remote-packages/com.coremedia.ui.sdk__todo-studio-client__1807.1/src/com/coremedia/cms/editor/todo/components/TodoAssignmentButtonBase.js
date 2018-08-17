Ext.define("com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase", function(TodoAssignmentButtonBase) {/*package com.coremedia.cms.editor.todo.components {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.button.Button;
import ext.container.Container;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
public class TodoAssignmentButtonBase extends Button {

  public static const UNASSIGN_BUTTON_ITEM_ID:String = "unassignButtonItemId";

  public static const SEPARATOR_ITEM_ID:String = "separatorItemId";

  /**
   * defines the items in the button menu that shall always be kept
   * /
  private static const*/var fixedMenuItems$static/*:Array*/;/* =*/function fixedMenuItems$static_(){fixedMenuItems$static=( [TodoAssignmentButtonBase.UNASSIGN_BUTTON_ITEM_ID, TodoAssignmentButtonBase.SEPARATOR_ITEM_ID]);};/*

  [Bindable]
  public var todo:Todo;

  [Bindable]
  public var assigneesVE:ValueExpression;

  private var assigneeNameVE:ValueExpression;
  private var hasAssigneeVE:ValueExpression;
  private var selectableAssigneesVE:ValueExpression;
  private var sortedSelectableAssigneesVE:ValueExpression;
  private var hasAssigneeAndSelectableAssigneesVE:ValueExpression;

  public*/ function TodoAssignmentButtonBase$(config/*:TodoAssignmentButton = null*/) {if(arguments.length<=0)config=null;
    this.super$QNJC(config);
  }/*

  protected*/ function getLoadedAssigneeVE()/*:ValueExpression*/ {var this$=this;
    // currently only single assignees are allowed although Todos can have multiple assignees
    if (!this.assigneeNameVE$QNJC) {
      this.assigneeNameVE$QNJC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:User*/ {
        if (!AS3.getBindable(this$,"todo").isLoaded()) {
          AS3.getBindable(this$,"todo").load();
          return undefined;
        }
        var assignees/*:Array*/ = AS3.getBindable(this$,"todo").getAssignees();
        if (!assignees) {
          return undefined;
        }
        if (assignees.length === 0) {
          return null;
        }
        var assignee/*:User*/ =AS3.as( assignees[0],  com.coremedia.cap.user.User);
        if (!assignee.isLoaded()) {
          assignee.load();
          return undefined;
        }
        return assignee;
      });
    }
    return this.assigneeNameVE$QNJC;
  }/*

  protected*/ function assignUser(user/*:User*/)/*:void*/ {var this$=this;
    // currently only one assignee is supported
    AS3.getBindable(this,"todo").getAssignees(function (assignees/*:Array*/)/*:void*/ {
      // only assign user if not already attached
      if (assignees.indexOf(user) === -1) {
        AS3.getBindable(this$,"todo").setAssignees([user]);
      }
    });
  }/*

  protected*/ function unassignUsers()/*:void*/ {var this$=this;
    AS3.getBindable(this,"todo").getAssignees(function (assignees/*:Array*/)/*:void*/ {
      if (assignees.length > 0) {
        AS3.getBindable(this$,"todo").removeAssignees(assignees);
      }
    });
  }/*

  protected*/ function getSelectableAssigneesVE()/*:ValueExpression*/ {var this$=this;
    if (!this.selectableAssigneesVE$QNJC) {
      this.selectableAssigneesVE$QNJC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var allAssignees/*:Array*/ = AS3.getBindable(this$,"assigneesVE").getValue();
        var assignedUsers/*:Array*/ = AS3.getBindable(this$,"todo").getAssignees();
        if (allAssignees && assignedUsers) {
          return allAssignees.filter(function (user/*:User*/)/*:Boolean*/ {
            return assignedUsers.indexOf(user) === -1;
          });
        }
        return undefined;
      });
    }
    return this.selectableAssigneesVE$QNJC;
  }/*

  protected*/ function getSortedSelectableAssigneesVE()/*:ValueExpression*/ {var this$=this;
    if (!this.sortedSelectableAssigneesVE$QNJC) {
      this.sortedSelectableAssigneesVE$QNJC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var selectableAssignees/*:Array*/ = this$.getSelectableAssigneesVE().getValue();
        if (!selectableAssignees) {
          return undefined;
        }
        // Sort users alphabetically but put session user on top.
        var sortedSelectableAssignees/*:Array*/ = selectableAssignees.sort(function compare(user1/*:User*/, user2/*:User*/)/*:int*/ {
          var sessionUser/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
          if (user1 === sessionUser) {
            return -1;
          } else if (user2 === sessionUser) {
            return 1;
          } else {
            var user1Name/*:String*/ = user1.getName();
            var user2Name/*:String*/ = user2.getName();
            if (user1Name < user2Name) return -1;
            if (user1Name > user2Name) return 1;
            return 0;
          }
        });
        return sortedSelectableAssignees;
      });
    }
    return this.sortedSelectableAssigneesVE$QNJC;
  }/*

  protected*/ function getHasAssigneeVE()/*:ValueExpression*/ {var this$=this;
    if (!this.hasAssigneeVE$QNJC) {
      this.hasAssigneeVE$QNJC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return AS3.is( this$.getLoadedAssigneeVE().getValue(),  com.coremedia.cap.user.User);
      });
    }
    return this.hasAssigneeVE$QNJC;
  }/*

  protected*/ function getHasAssigneeAndSelectableAssigneesVE()/*:ValueExpression*/ {var this$=this;
    if (!this.hasAssigneeAndSelectableAssigneesVE$QNJC) {
      this.hasAssigneeAndSelectableAssigneesVE$QNJC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var hasAssignee/*:Boolean*/ = this$.getHasAssigneeVE().getValue();
        var selectableAssignees/*:Array*/ = this$.getSelectableAssigneesVE().getValue();
        return hasAssignee && selectableAssignees && selectableAssignees.length > 0;
      });
    }
    return this.hasAssigneeAndSelectableAssigneesVE$QNJC;
  }/*

  protected*/ function computeButtonText()/*:String*/ {
    var assignee/*:User*/ = this.getLoadedAssigneeVE().getValue();
    if (!assignee) {
      return undefined;
    }
    return TodoAssignmentButtonBase.getUserNameOrMe(assignee);
  }/*

  protected*/ function computeButtonAriaLabel()/*:String*/ {
    var text/*:String*/ = this.computeButtonText();
    return text || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.todo.Todo', 'Todo_unassigned');
  }/*

  protected*/ function menuRemoveFunction(container/*:Container*/, autoDestroy/*:Boolean*/)/*:void*/ {
    container.itemCollection.each(function (item/*:Component*/)/*:void*/ {
      if (fixedMenuItems$static.indexOf(item.getItemId()) === -1) {
        container.remove(item, autoDestroy);
      }
    });
  }/*

  protected static*/ function getUserNameOrMe$static(user/*:User*/)/*:String*/ {
    if (user === com.coremedia.cap.common.SESSION.getUser()) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.todo.Todo', 'Todo_assignee_me');
    } else {
      return user ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(user.getName()) : "";
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      assigneeNameVE$QNJC: null,
      hasAssigneeVE$QNJC: null,
      selectableAssigneesVE$QNJC: null,
      sortedSelectableAssigneesVE$QNJC: null,
      hasAssigneeAndSelectableAssigneesVE$QNJC: null,
      constructor: TodoAssignmentButtonBase$,
      super$QNJC: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      getLoadedAssigneeVE: getLoadedAssigneeVE,
      assignUser: assignUser,
      unassignUsers: unassignUsers,
      getSelectableAssigneesVE: getSelectableAssigneesVE,
      getSortedSelectableAssigneesVE: getSortedSelectableAssigneesVE,
      getHasAssigneeVE: getHasAssigneeVE,
      getHasAssigneeAndSelectableAssigneesVE: getHasAssigneeAndSelectableAssigneesVE,
      computeButtonText: computeButtonText,
      computeButtonAriaLabel: computeButtonAriaLabel,
      menuRemoveFunction: menuRemoveFunction,
      config: {
        todo: null,
        assigneesVE: null
      },
      statics: {
        UNASSIGN_BUTTON_ITEM_ID: "unassignButtonItemId",
        SEPARATOR_ITEM_ID: "separatorItemId",
        fixedMenuItems: undefined,
        getUserNameOrMe: getUserNameOrMe$static,
        __initStatics__: function() {
          fixedMenuItems$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.User",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
