Ext.define("com.coremedia.cms.editor.todo.components.TodoPanelBase", function(TodoPanelBase) {/*package com.coremedia.cms.editor.todo.components {
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
import com.coremedia.ui.components.DraggableItem;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.MutableMousedownListener;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.dd.DragDropManager;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.Checkbox;
import ext.form.field.TextArea;
import ext.panel.Panel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
public class TodoPanelBase extends Panel {

  public static const MODE_SWITCH_DELAY:int = 200;

  private static const*/var SWITCH_TO_DISPLAY_MODE_EVENT_NAME$static/*:String*/ = "todoPanel.switchToDisplayMode";/*
  private static const*/var WARNING_IF_SELECTED_MODIFIER$static/*:String*/ = "warning-if-selected";/*
  private static const*/var ERROR_IF_SELECTED_MODIFIER$static/*:String*/ = "error-if-selected";/*

  private static const*/var GROW_APPEND_DUMMY$static/*:String*/ = "\n ";/*

  /**
   * The Todo assigned to this TodoPanel
   * /
  [Bindable]
  public var todo:Todo;

  private var checkbox:Checkbox;
  private var assigneeBtn:Button;
  private var textDisplay:Component;
  private var textInput:TextArea;
  private var dueDateContainer:Container;
  private var removeButton:Button;

  private var isEditorModeVE:ValueExpression;
  private var isDueDateFieldActiveVE:ValueExpression;
  private var displayFieldModifierVE:ValueExpression;
  private var textDisplayOrInputVE:ValueExpression;
  private var todoAssignmentButtonVisibleVE:ValueExpression;
  private var todoPanelModifiersVE:ValueExpression;
  private var todoDueDateContainerVisibleVE:ValueExpression;
  private var dueDateField:StatefulDateField;

  /**
   * (optional) A listener that will be notified when toggling between display and editor mode.
   * /
  [ExtConfig]
  public var editorModeListener:Function;

  /**
   * (optional) attaches additional modifiers to days in due date picker.
   * /
  [ExtConfig]
  public var dueDateIssueBuilder:Function;

  /**
   * A function to validate the Todo's due date. It is required to have the signature
   * <code>function (date:Date):Issue</code>.
   * /
  [ExtConfig]
  public var additionalDueDatePickerModifiers:Function;

  /**
   * Handles switching to display mode if clicked outside this panel
   * /
  private var windowListener:MutableMousedownListener;

  /**
   * Handles switching to editor mode if clicked inside this panel
   * /
  private var panelListener:MutableMousedownListener;

  public*/ function TodoPanelBase$(config/*:TodoPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$_7Dv(config);

    this.checkbox$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.CHECKBOX_ITEM_ID),  Ext.form.field.Checkbox);
    this.textDisplay$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.TEXT_DISPLAY_ITEM_ID),  Ext.Component);
    this.textInput$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.TEXT_INPUT_ITEM_ID),  Ext.form.field.TextArea);
    this.assigneeBtn$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.ASSIGNEE_BUTTON_ITEM_ID),  Ext.button.Button);
    this.dueDateContainer$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.DUE_DATE_CT_ID),  Ext.container.Container);
    this.removeButton$_7Dv =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.REMOVE_BUTTON_ITEM_ID),  Ext.button.Button);

    // close editor mode when clicked anywhere outside TodoPanel
    this.windowListener$_7Dv = new com.coremedia.ui.util.MutableMousedownListener(getEditorMainView$static().getEl().dom, function (evt/*:Event*/)/*:void*/ {
      this$.switchToDisplayMode();

      this$.handlePossibleButtonClick$_7Dv(evt);

    }, true);

    getEditorMainView$static().addListener(SWITCH_TO_DISPLAY_MODE_EVENT_NAME$static,AS3.bind( this.windowListener$_7Dv,"trigger"));

    // open editor mode when clicked anywhere on TodoPanel
    this.on("afterrender", function ()/*:void*/ {
      this$.panelListener$_7Dv = new com.coremedia.ui.util.MutableMousedownListener(this$.getEl().dom, function ()/*:void*/ {
        // prevent instant leaving of editor mode
        this$.windowListener$_7Dv.muteNextEvent();
        this$.switchToEditorMode();
      });
      this$.panelListener$_7Dv.enable();
    });

    // set focus to textfield if switched in editor mode via click on textDisplay
    this.mon(this.textDisplay$_7Dv, "afterrender", function ()/*:void*/ {
      this$.mon(this$.textDisplay$_7Dv.getEl(), "mousedown", function ()/*:void*/ {
        this$.textInput$_7Dv.focus(false, TodoPanelBase.MODE_SWITCH_DELAY);
      });
    });

    // prevent switching modes by clicking the dnd of a surrounding DraggableItem if dnd is active
    // improvement needed!
    var draggableItem/*:DraggableItem*/ =AS3.as( this.up(),  com.coremedia.ui.components.DraggableItem);
    if (draggableItem) {
      var dragHandle/*:Component*/ = draggableItem.queryById(com.coremedia.ui.components.DraggableItem.DND_ITEM_ID);
      dragHandle && this.mon(dragHandle, "afterrender", function ()/*:void*/ {
        this$.mon(dragHandle.getEl(), "mousedown", function ()/*:void*/ {
          if (!AS3.getBindable(draggableItem,"enabledVE","DUMMY") ||AS3.as( AS3.getBindable(draggableItem,"enabledVE","DUMMY").getValue(),  Boolean)) {
            // special treatment if DragDropMgr uses stopPropagation (which is the default)
            if (Ext.dd.DragDropManager.stopPropagation) {
              this$.specialBehaviourForStopPropagation$_7Dv();
            } else {
              // when stopPropagation is disabled the normal preventNextSwitch(true) call can be made
              this$.preventNextSwitch$_7Dv(false);
            }
          }
        });
      });
    }

    // prevent switching modes by clicking the checkbox if dnd is not active (otherwise already handled)
    this.mon(this.checkbox$_7Dv, "afterrender", function ()/*:void*/ {
      // checkbox component creates a new parent container in DOM
      this$.mon(this$.checkbox$_7Dv.getEl().parent(), "mousedown", function ()/*:void*/ {
        this$.preventNextSwitch$_7Dv(true);
      });
    });

    // prevent switching modes by clicking the delete button
    this.mon(this.removeButton$_7Dv, "afterrender", function ()/*:void*/ {
      this$.mon(this$.removeButton$_7Dv.getEl(), "mousedown", function ()/*:void*/ {
        this$.preventNextSwitch$_7Dv(true);
      });
    });

    // prevent switching modes by clicking the assignee button
    this.mon(this.assigneeBtn$_7Dv, "afterrender", function ()/*:void*/ {
      this$.mon(this$.assigneeBtn$_7Dv.getEl(), "mousedown", function ()/*:void*/ {
        this$.preventNextSwitch$_7Dv(true);
      });
    });

    // prevent switching modes by clicking the assignee menu
    this.mon(AS3.getBindable(this.assigneeBtn$_7Dv,"menu","DUMMY"), "afterrender", function ()/*:void*/ {
      this$.mon(AS3.getBindable(this$.assigneeBtn$_7Dv,"menu","DUMMY").getEl(), "mousedown", function ()/*: void*/ {
        // menu is not part of TodoPanel DOM, so next switch to editor mode does not need to be prevented.
        // Otherwise the next real switch is ignored!
        this$.preventNextSwitch$_7Dv(false);
      });
    });

    // prevent switching modes by clicking the due date container
    this.mon(this.dueDateContainer$_7Dv, "afterrender", function ()/*:void*/ {
      this$.mon(this$.dueDateContainer$_7Dv.getEl(), "mousedown", function ()/*:void*/ {
        this$.preventNextSwitch$_7Dv(true);
      });
    });

    this.dueDateField$_7Dv =AS3.as( this.dueDateContainer$_7Dv.query(com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.todo.components.TodoDueDateContainer.DUE_DATE_FIELD_ITEM_ID).build())[0],  com.coremedia.ui.components.StatefulDateField);
    this.mon(this.dueDateField$_7Dv, "expand", function ()/*:void*/ {
      var picker/*:Component*/ = this$.dueDateField$_7Dv.getPicker();
      if (picker) {
        this$.mon(picker.getEl(), "mousedown", function ()/*:void*/ {
          this$.preventNextSwitch$_7Dv(false);
        });
      }
    }, null, {single: true});
  }/*

  // This is a patch.
  // When switching from edit to display mode, the TodoPanel changes its size.
  // If the action to switch from edit to display was a click on an outside button,
  // the button click might get lost because of changing xy coordinates.
  // Thus, we we call the buttons handler explicitly.
  // ... better ideas welcome
  private*/ function handlePossibleButtonClick(evt/*:Event*/)/*:void*/ {
    if (!evt) {
      return;
    }

    function handleButtonClick(btn/*:Button*/)/*:void*/ {
      if (btn.destroyed) {
        return;
      }
      // call handler
      btn.handler();
      // see to it that the handler does not get calles twice.
      var oldHandler/*:Function*/ = btn.handler;
      AS3.setBindable(btn,"handler" , Ext.emptyFn);
      window.setTimeout(function ()/*:void*/ {
        // restore old handler
        !btn.destroyed && (AS3.setBindable(btn,"handler" , oldHandler));
      }, 500);
    }

    var target/*:Element*/ = Ext.get(evt.target);
    while (target) {
      var cmp/*:Component*/ = Ext.getCmp(target.getId());
      if (AS3.is(cmp,  Ext.button.Button)) {
        handleButtonClick(AS3.as(cmp,  Ext.button.Button));
        break;
      }
      target = target.parent();
    }
  }/*

  private*/ function specialBehaviourForStopPropagation()/*:void*/ {
    // DragDropMgr will stop the mousedown event after the DragSource / DragZone starts the drag initialization.
    // Because of this switch of modes needs to be handled differently.

    // disable default behaviour of panel
    this.panelListener$_7Dv.muteNextEvent();

    // in case editor mode is active, ignore the next switch to keep the mode
    if (this.getIsEditorModeVE().getValue() === true) {
      this.windowListener$_7Dv.muteNextEvent();
    }

    // trigger alternative event for mouse down, causing the same behaviour
    getEditorMainView$static().fireEvent(SWITCH_TO_DISPLAY_MODE_EVENT_NAME$static);
  }/*

  private*/ function preventNextSwitch(isPartOfTodoPanel/*:Boolean*/)/*:void*/ {
    if (this.getIsEditorModeVE().getValue() === true) {
      if (!isPartOfTodoPanel) {
        this.windowListener$_7Dv.muteNextEvent();
      }
    } else {
      if (isPartOfTodoPanel) {
        this.panelListener$_7Dv.muteNextEvent();
      }
    }
  }/*

  protected*/ function getDueDatePickerModifiers(date/*:Date*/)/*:Array*/ {
    var modifiers/*:Array*/ = (this.additionalDueDatePickerModifiers &&AS3.as( this.additionalDueDatePickerModifiers(date),  Array)) || [];

    // only apply error/warning validation if IN_PROGRESS
    if (AS3.getBindable(this,"todo").getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE) {
      var issues/*:Array*/ =AS3.as( this.dueDateIssueBuilder(date),  Array) || [];
      var maxIssuesSeverity/*:String*/ = com.coremedia.cms.editor.sdk.validation.ValidationUtil.computeMaximumSeverity(issues);
      if (maxIssuesSeverity === com.coremedia.ui.data.validation.Severity.WARN) {
        modifiers.push(WARNING_IF_SELECTED_MODIFIER$static);
      }
      if (maxIssuesSeverity === com.coremedia.ui.data.validation.Severity.ERROR) {
        modifiers.push(ERROR_IF_SELECTED_MODIFIER$static);
      }
    }

    return modifiers;
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    getEditorMainView$static().removeListener(SWITCH_TO_DISPLAY_MODE_EVENT_NAME$static,AS3.bind( this.windowListener$_7Dv,"trigger"));

    if (this.panelListener$_7Dv) {
      this.panelListener$_7Dv.disable();
    }

    if (this.windowListener$_7Dv) {
      this.windowListener$_7Dv.disable();
    }

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  /**
   * Switches the TodoPanel to editor mode
   * /
  public*/ function switchToEditorMode()/*:void*/ {
    // only switch once!
    if (!this.getIsEditorModeVE().getValue()) {
      this.getIsEditorModeVE().setValue(true);
      this.windowListener$_7Dv.enable();
      this.editorModeListener && this.editorModeListener(true);
    }
  }/*

  protected*/ function deleteTodo()/*:void*/ {
    AS3.getBindable(this,"todo").load(function (todo/*:Todo*/)/*:void*/ {
      todo.deleteMe();
    });
  }/*

  /**
   * Switches the TodoPanel to display mode
   * /
  public*/ function switchToDisplayMode()/*:void*/ {
    if (this.destroyed) {
      return;
    }

    // only switch once!
    if (this.getIsEditorModeVE().getValue() === true) {
      this.windowListener$_7Dv.disable();
      var value/*:String*/ = this.textInput$_7Dv.getValue();
      if (value) {
        this.textInput$_7Dv.setValue(value["trim"]());
      }
      this.getIsEditorModeVE().setValue(false);
      this.editorModeListener && this.editorModeListener(false);
    }
  }/*

  protected*/ function getIsEditorModeVE()/*:ValueExpression*/ {
    if (!this.isEditorModeVE$_7Dv) {
      this.isEditorModeVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.isEditorModeVE$_7Dv;
  }/*

  protected*/ function getIsDueDateFieldActiveVE()/*:ValueExpression*/ {
    if (!this.isDueDateFieldActiveVE$_7Dv) {
      this.isDueDateFieldActiveVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }

    return this.isDueDateFieldActiveVE$_7Dv;
  }/*

  protected*/ function getTextDisplayOrInputVE()/*:ValueExpression*/ {var this$=this;
    if (!this.textDisplayOrInputVE$_7Dv) {
      this.textDisplayOrInputVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var isEditorMode/*:Boolean*/ = this$.getIsEditorModeVE().getValue();
        if (isEditorMode) {
          return com.coremedia.cms.editor.todo.components.TodoPanel.TEXT_INPUT_ITEM_ID;
        } else {
          return com.coremedia.cms.editor.todo.components.TodoPanel.TEXT_DISPLAY_ITEM_ID;
        }
      });
    }

    return this.textDisplayOrInputVE$_7Dv;
  }/*

  protected*/ function getDisplayFieldModifiersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.displayFieldModifierVE$_7Dv) {
      this.displayFieldModifierVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var description/*:String*/ = AS3.getBindable(this$,"todo").getDescription();
        if (description) {
          description = description["trim"]();
          if (description !== "") {
            return [];
          }
        }
        return ["empty"];
      });
    }
    return this.displayFieldModifierVE$_7Dv;
  }/*

  protected*/ function getTodoAssignmentButtonVisibleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todoAssignmentButtonVisibleVE$_7Dv) {
      this.todoAssignmentButtonVisibleVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"todo"))) {
          case true: {
            var assignees/*:Array*/ = AS3.getBindable(this$,"todo").getAssignees();
            return assignees && assignees.length > 0 || this$.getIsEditorModeVE().getValue();
          }
          default:
            return false;
        }
      });
    }
    return this.todoAssignmentButtonVisibleVE$_7Dv;
  }/*

  protected*/ function getTodoDueDateContainerVisibleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todoDueDateContainerVisibleVE$_7Dv) {
      this.todoDueDateContainerVisibleVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"todo"))) {
          case true: {
            return AS3.getBindable(this$,"todo").getDueDate() || this$.getIsEditorModeVE().getValue() || this$.getIsDueDateFieldActiveVE().getValue();
          }
          default:
            return false;
        }
      });
    }
    return this.todoDueDateContainerVisibleVE$_7Dv;
  }/*

  protected*/ function getTodoControlsVisibleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      return this$.getTodoAssignmentButtonVisibleVE().getValue() || this$.getTodoDueDateContainerVisibleVE().getValue();
    });
  }/*

  protected*/ function getTodoPanelModifiersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todoPanelModifiersVE$_7Dv) {
      this.todoPanelModifiersVE$_7Dv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var todoModifiers/*:Array*/ = [];
        if (AS3.getBindable(this$,"todo").isLoaded()) {
          todoModifiers.push("state-" + AS3.getBindable(this$,"todo").getTodoState().toLowerCase());
          //noinspection JSMismatchedCollectionQueryUpdate
          var assignees/*:Array*/ = AS3.getBindable(this$,"todo").getAssignees();
          if (assignees && assignees.length > 0) {
            todoModifiers.push("has-assignee");
          }
          if (AS3.getBindable(this$,"todo").getDueDate()) {
            todoModifiers.push("has-due-date");
          }
        } else {
          AS3.getBindable(this$,"todo").load();
        }
        if (this$.getIsEditorModeVE().getValue()) {
          todoModifiers.push("editor-mode");
        }
        if (this$.getIsDueDateFieldActiveVE().getValue()) {
          todoModifiers.push("due-date-focus");
        }
        return todoModifiers;
      });
    }
    return this.todoPanelModifiersVE$_7Dv;
  }/*

  private static*/ function getEditorMainView$static()/*:Component*/ {
    return Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID);
  }/*

  protected static*/ function formatTextDisplay$static(value/*:String*/)/*:String*/ {
    if (!value || value["trim"]() === "") {
      value = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.todo.Todo', 'Todo_description_empty_text');
    }
    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(value + GROW_APPEND_DUMMY$static);
  }/*

  protected static*/ function todoStateAsBoolean$static(value/*:String*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.todo.rest.impl.TodoImpl.DONE === value;
  }/*

  protected static*/ function todoStateAsString$static(value/*:Boolean*/)/*:String*/ {
    return value ? com.coremedia.cms.editor.todo.rest.impl.TodoImpl.DONE : com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      checkbox$_7Dv: null,
      assigneeBtn$_7Dv: null,
      textDisplay$_7Dv: null,
      textInput$_7Dv: null,
      dueDateContainer$_7Dv: null,
      removeButton$_7Dv: null,
      isEditorModeVE$_7Dv: null,
      isDueDateFieldActiveVE$_7Dv: null,
      displayFieldModifierVE$_7Dv: null,
      textDisplayOrInputVE$_7Dv: null,
      todoAssignmentButtonVisibleVE$_7Dv: null,
      todoPanelModifiersVE$_7Dv: null,
      todoDueDateContainerVisibleVE$_7Dv: null,
      dueDateField$_7Dv: null,
      editorModeListener: null,
      dueDateIssueBuilder: null,
      additionalDueDatePickerModifiers: null,
      windowListener$_7Dv: null,
      panelListener$_7Dv: null,
      constructor: TodoPanelBase$,
      super$_7Dv: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      handlePossibleButtonClick$_7Dv: handlePossibleButtonClick,
      specialBehaviourForStopPropagation$_7Dv: specialBehaviourForStopPropagation,
      preventNextSwitch$_7Dv: preventNextSwitch,
      getDueDatePickerModifiers: getDueDatePickerModifiers,
      beforeDestroy: beforeDestroy,
      switchToEditorMode: switchToEditorMode,
      deleteTodo: deleteTodo,
      switchToDisplayMode: switchToDisplayMode,
      getIsEditorModeVE: getIsEditorModeVE,
      getIsDueDateFieldActiveVE: getIsDueDateFieldActiveVE,
      getTextDisplayOrInputVE: getTextDisplayOrInputVE,
      getDisplayFieldModifiersVE: getDisplayFieldModifiersVE,
      getTodoAssignmentButtonVisibleVE: getTodoAssignmentButtonVisibleVE,
      getTodoDueDateContainerVisibleVE: getTodoDueDateContainerVisibleVE,
      getTodoControlsVisibleVE: getTodoControlsVisibleVE,
      getTodoPanelModifiersVE: getTodoPanelModifiersVE,
      config: {todo: null},
      statics: {
        MODE_SWITCH_DELAY: 200,
        formatTextDisplay: formatTextDisplay$static,
        todoStateAsBoolean: todoStateAsBoolean$static,
        todoStateAsString: todoStateAsString$static
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.dd.DragDropManager",
        "Ext.form.field.Checkbox",
        "Ext.form.field.TextArea",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.ui.components.DraggableItem",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.MutableMousedownListener",
        "com.coremedia.ui.util.createComponentSelector",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.todo.components.TodoDueDateContainer",
        "com.coremedia.cms.editor.todo.components.TodoPanel",
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl"
      ]
    };
});
