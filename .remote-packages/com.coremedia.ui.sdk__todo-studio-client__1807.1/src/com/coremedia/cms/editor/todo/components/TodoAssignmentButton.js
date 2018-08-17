Ext.define("com.coremedia.cms.editor.todo.components.TodoAssignmentButton", function(TodoAssignmentButton) {/*package com.coremedia.cms.editor.todo.components{
import com.coremedia.cms.editor.todo.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.menu.Menu;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import ext.menu.Item;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.menu.Separator;

    [ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class TodoAssignmentButton extends TodoAssignmentButtonBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.todo.config.todoAssignmentButton";

    public*/function TodoAssignmentButton$(config/*:TodoAssignmentButton = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase,{});
    var defaults_$1/*:TodoAssignmentButton*/ =AS3.cast(TodoAssignmentButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'user')));
    var ui_BindPropertyPlugin_25_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_25_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeButtonText"));
    ui_BindPropertyPlugin_25_5_$1.componentProperty = "text";
    var ui_BindPropertyPlugin_27_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_27_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeButtonAriaLabel"));
    ui_BindPropertyPlugin_27_5_$1.componentProperty = "ariaLabel";
    config_$1.plugins = [ui_BindPropertyPlugin_25_5_$1, ui_BindPropertyPlugin_27_5_$1];
    var menu_31_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_BindComponentsPlugin_33_9_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"valueExpression" , this.getSortedSelectableAssigneesVE());
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"configBeanParameterName" , "user");
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"reuseComponents" , true);
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"clearBeforeUpdate" , true);
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"removeFunction" ,AS3.bind( this,"menuRemoveFunction"));
    var todo_TodoAssignmentMenuItem_39_13_$1/*: com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItem*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItem,{});
    todo_TodoAssignmentMenuItem_39_13_$1.userSelectionHandler =AS3.bind( this,"assignUser");
    todo_TodoAssignmentMenuItem_39_13_$1.userTransformer = com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase.getUserNameOrMe;
    AS3.setBindable(ui_BindComponentsPlugin_33_9_$1,"template" , todo_TodoAssignmentMenuItem_39_13_$1);
    menu_31_5_$1.plugins = [ui_BindComponentsPlugin_33_9_$1];
    var menuItem_45_9_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_45_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase.UNASSIGN_BUTTON_ITEM_ID);
    AS3.setBindable(menuItem_45_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.todo.Todo', 'Todo_remove_assignment_text')));
    AS3.setBindable(menuItem_45_9_$1,"handler" , function ()/*:void*/ { this$.unassignUsers(); });
    var ui_BindVisibilityPlugin_49_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_13_$1.bindTo = this.getHasAssigneeVE();
    menuItem_45_9_$1.plugins = [ui_BindVisibilityPlugin_49_13_$1];
    var menuSeparator_52_9_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    menuSeparator_52_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase.SEPARATOR_ITEM_ID);
    var ui_BindVisibilityPlugin_54_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_54_13_$1.bindTo = this.getHasAssigneeAndSelectableAssigneesVE();
    menuSeparator_52_9_$1.plugins = [ui_BindVisibilityPlugin_54_13_$1];
    menu_31_5_$1.items = [menuItem_45_9_$1, menuSeparator_52_9_$1];
    config_$1.menu = menu_31_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xnzR(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase",
      alias: "widget.com.coremedia.cms.editor.todo.config.todoAssignmentButton",
      constructor: TodoAssignmentButton$,
      super$xnzR: function() {
        com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.cms.editor.todo.components.TodoAssignmentButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItem"]
    };
});
