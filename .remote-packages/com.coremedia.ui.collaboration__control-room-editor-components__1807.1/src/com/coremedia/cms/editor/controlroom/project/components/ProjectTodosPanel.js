Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel", function(ProjectTodosPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.button.Button;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.components.DraggableItemsContainer;
import com.coremedia.cms.editor.todo.components.TodoPanel;
import ext.toolbar.Toolbar;
import ext.toolbar.Fill;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectTodosPanel extends ProjectTodosPanelBase{

    import com.coremedia.cms.editor.todo.model.Todo;
    import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
    import com.coremedia.ui.components.DraggableItem;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.models.bem.BEMModifier;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectTodosPanel";

    public static const TODOS_CT_ITEM_ID:String = "todosCtItemId";

    public static const NEW_TODO_BTN_ITEM_ID:String = "newTodoBtnItemId";

    public static const FILTER_BTN_ITEM_ID:String = "filterBtnItemId";

    public*/function ProjectTodosPanel$(config/*:ProjectTodosPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase,{});
    var defaults_$1/*:ProjectTodosPanel*/ =AS3.cast(ProjectTodosPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "auto");
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_todos_title'));
    config_$1.titleCollapse = true;
    config_$1.bodyPadding = 0;
    var ui_BindPropertyPlugin_58_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_58_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_58_5_$1.bindTo = this.getTitleVE();
    config_$1.plugins = [ui_BindPropertyPlugin_58_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var button_62_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTodosPanel.FILTER_BTN_ITEM_ID);
    button_62_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_62_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_Todos_show_all')));
    AS3.setBindable(button_62_5_$1,"handler" ,AS3.bind( this,"removeDateSelection"));
    var ui_BindVisibilityPlugin_67_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_67_9_$1.bindTo = AS3.getBindable(config,"selectedDateVE");
    button_62_5_$1.plugins = [ui_BindVisibilityPlugin_67_9_$1];
    AS3.setBindable(config_$1,"filterBtnCfg" , button_62_5_$1);
    var ui_DraggableItemsContainer_72_5_$1/*:com.coremedia.ui.components.DraggableItemsContainer*/ =AS3.cast(com.coremedia.ui.components.DraggableItemsContainer,{});
    ui_DraggableItemsContainer_72_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTodosPanel.TODOS_CT_ITEM_ID);
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"itemsVE" , this.getTodosVE());
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"itemsConfigBeanParameterName" , "todo");
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"dropHandler" ,AS3.bind( this,"dropHandler"));
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"enabledVE" , this.getIsNoFilterActiveVE());
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"additionalItemModifiersFunction" , calculateAdditionalModifiers$static);
    var todo_TodoPanel_79_9_$1/*:com.coremedia.cms.editor.todo.components.TodoPanel*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoPanel,{});
    todo_TodoPanel_79_9_$1.flex = 1.0;
    AS3.setBindable(todo_TodoPanel_79_9_$1,"assigneesVE" , this.getProjectMembersVE());
    todo_TodoPanel_79_9_$1.editorModeListener =AS3.bind( this,"handleEditorModeSwitch");
    todo_TodoPanel_79_9_$1.additionalDueDatePickerModifiers =AS3.bind( this,"getAdditionalDueDatePickerModifiers");
    todo_TodoPanel_79_9_$1.dueDateIssueBuilder =AS3.bind( this,"dueDateIssueBuilder");
    AS3.setBindable(ui_DraggableItemsContainer_72_5_$1,"innerCtTemplate" , todo_TodoPanel_79_9_$1);
    config_$1.items = [ui_DraggableItemsContainer_72_5_$1];
    var toolbar_89_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_89_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER_GRID_100.getSkin());
    AS3.setBindable(toolbar_89_5_$1,"dock" , "bottom");
    toolbar_89_5_$1["focusableContainer"] = false;
    var tbFill_93_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_94_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_94_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTodosPanel.NEW_TODO_BTN_ITEM_ID);
    button_94_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    AS3.setBindable(button_94_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_todos_add_button_text')));
    AS3.setBindable(button_94_9_$1,"handler" ,AS3.bind( this,"newTodo"));
    var ui_BindVisibilityPlugin_99_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_99_13_$1.bindTo = this.getIsNoFilterActiveVE();
    button_94_9_$1.plugins = [ui_BindVisibilityPlugin_99_13_$1];
    toolbar_89_5_$1.items = [tbFill_93_9_$1, button_94_9_$1];
    config_$1.dockedItems = [toolbar_89_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$daw9(config_$1);
  }/*

    public static const DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS:BEMModifier =*/function DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS$static_(){ProjectTodosPanel.DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS=( com.coremedia.ui.components.DraggableItem.BLOCK.createModifier("todo-in-progress"));}/*;
    public static const DRAGGABLE_ITEM_MODIFIER_TODO_DONE:BEMModifier =*/function DRAGGABLE_ITEM_MODIFIER_TODO_DONE$static_(){ProjectTodosPanel.DRAGGABLE_ITEM_MODIFIER_TODO_DONE=( com.coremedia.ui.components.DraggableItem.BLOCK.createModifier("todo-done"));}/*;

    private static*/ function calculateAdditionalModifiers$static(bean/*:Bean*/)/*:Array*/ {
      var modifiers/*:Array*/ = undefined;

      var todo/*:Todo*/ =AS3.as( bean,  com.coremedia.cms.editor.todo.model.Todo);
      if (todo && todo.isLoaded()) {
        modifiers = [];
        if (todo.getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE) {
          modifiers.push(ProjectTodosPanel.DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS);
        } else {
          modifiers.push(ProjectTodosPanel.DRAGGABLE_ITEM_MODIFIER_TODO_DONE);
        }
      }

      return modifiers;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectTodosPanel",
      constructor: ProjectTodosPanel$,
      super$daw9: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TODOS_CT_ITEM_ID: "todosCtItemId",
        NEW_TODO_BTN_ITEM_ID: "newTodoBtnItemId",
        FILTER_BTN_ITEM_ID: "filterBtnItemId",
        DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS: undefined,
        DRAGGABLE_ITEM_MODIFIER_TODO_DONE: undefined,
        __initStatics__: function() {
          DRAGGABLE_ITEM_MODIFIER_TODO_IN_PROGRESS$static_();
          DRAGGABLE_ITEM_MODIFIER_TODO_DONE$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase",
        "com.coremedia.cms.editor.todo.components.TodoPanel",
        "com.coremedia.cms.editor.todo.model.Todo",
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl",
        "com.coremedia.ui.components.DraggableItem",
        "com.coremedia.ui.components.DraggableItemsContainer",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
