Ext.define("com.coremedia.cms.editor.todo.components.TodoPanel", function(TodoPanel) {/*package com.coremedia.cms.editor.todo.components{
import com.coremedia.cms.editor.todo.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.form.field.Checkbox;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.SwitchingContainer;
import ext.Component;
import ext.form.field.TextArea;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.layout.container.ContainerLayout;

    [ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class TodoPanel extends TodoPanelBase{

    import com.coremedia.cms.editor.todo.model.TodoPropertyNames;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.todo.config.todoPanel";

    // B.E.M. entities
    public static const BLOCK:String = "cm-todo-panel";
    public static const ELEMENT_CHECK:String = "check";
    public static const ELEMENT_DETAILS:String = "details";
    public static const ELEMENT_DELETE:String = "delete";
    public static const ELEMENT_CONTROLS:String = "controls";
    public static const ELEMENT_ASSIGNEES:String = "assignees";
    public static const ELEMENT_DUE_DATE:String = "due-date";

    // item ids
    public static const DETAILS_CT_ITEM_ID:String = "detailsCtItemId";
    public static const TEXT_CT_ITEM_ID:String = "textCtItemId";
    public static const TEXT_DISPLAY_ITEM_ID:String = "textDisplayItemId";
    public static const TEXT_INPUT_ITEM_ID:String = "textInputItemId";
    public static const ASSIGNEE_BUTTON_ITEM_ID:String = "assigneeButtonItemId";
    public static const CHECKBOX_ITEM_ID:String = "checkboxItemId";
    public static const DUE_DATE_CT_ID:String = "todoDueDateCt";
    public static const REMOVE_BUTTON_ITEM_ID:String = "removeButtonItemId";

    public*/function TodoPanel$(config/*:TodoPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.todo.components.TodoPanelBase*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoPanelBase,{});
    var defaults_$1/*:TodoPanel*/ =AS3.cast(TodoPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BEMPlugin_53_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_53_5_$1,"block" , TodoPanel.BLOCK);
    AS3.setBindable(ui_BEMPlugin_53_5_$1,"modifier" , this.getTodoPanelModifiersVE());
    config_$1.plugins = [ui_BEMPlugin_53_5_$1];
    var layout_VBox_57_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_57_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_57_5_$1);
    var container_60_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_60_5_$1,"height" , 36);
    var checkbox_62_9_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_62_9_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.CHECKBOX_ITEM_ID);
    checkbox_62_9_$1.hideLabel = true;
    AS3.setBindable(checkbox_62_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.todo.Todo', 'Todo_done_text')));
    checkbox_62_9_$1.flex = 1.0;
    var ui_BEMMixin_67_13_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_67_13_$1,"bemElement" , TodoPanel.ELEMENT_CHECK);

    delete ui_BEMMixin_67_13_$1['xtype'];
    delete ui_BEMMixin_67_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(checkbox_62_9_$1, ui_BEMMixin_67_13_$1);
    var ui_BindPropertyPlugin_70_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_70_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.todo.model.TodoPropertyNames.STATE, AS3.getBindable(config,"todo"));
    ui_BindPropertyPlugin_70_13_$1.transformer = com.coremedia.cms.editor.todo.components.TodoPanelBase.todoStateAsBoolean;
    ui_BindPropertyPlugin_70_13_$1.reverseTransformer = com.coremedia.cms.editor.todo.components.TodoPanelBase.todoStateAsString;
    ui_BindPropertyPlugin_70_13_$1.bidirectional = true;
    checkbox_62_9_$1.plugins = [ui_BindPropertyPlugin_70_13_$1];
    var ui_IconButton_76_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_76_9_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.REMOVE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_76_9_$1,"scale" , "small");
    ui_IconButton_76_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_76_9_$1,"handler" ,AS3.bind( this,"deleteTodo"));
    AS3.setBindable(ui_IconButton_76_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove_small')));
    AS3.setBindable(ui_IconButton_76_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.todo.Todo', 'Todo_delete_btn_tooltip')));
    AS3.setBindable(ui_IconButton_76_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.todo.Todo', 'Todo_delete_btn_tooltip'));
    var ui_BEMMixin_84_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_84_13_$1,"bemElement" , TodoPanel.ELEMENT_DELETE);

    delete ui_BEMMixin_84_13_$1['xtype'];
    delete ui_BEMMixin_84_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_IconButton_76_9_$1, ui_BEMMixin_84_13_$1);
    container_60_5_$1.items = [checkbox_62_9_$1, ui_IconButton_76_9_$1];
    var layout_HBox_89_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_89_9_$1,"align" , "middle");
    AS3.setBindable(container_60_5_$1,"layout" , layout_HBox_89_9_$1);
    var container_92_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_92_5_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.DETAILS_CT_ITEM_ID);
    container_92_5_$1.flex = 1.0;
    var ui_BEMMixin_95_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_95_9_$1,"bemElement" , TodoPanel.ELEMENT_DETAILS);

    delete ui_BEMMixin_95_9_$1['xtype'];
    delete ui_BEMMixin_95_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_92_5_$1, ui_BEMMixin_95_9_$1);
    var ui_SwitchingContainer_98_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_98_9_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.TEXT_CT_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_98_9_$1,"activeItemValueExpression" , this.getTextDisplayOrInputVE());
    AS3.setBindable(ui_SwitchingContainer_98_9_$1,"margin" , "0 6px 0 0");
    ui_SwitchingContainer_98_9_$1.flex = 1.0;
    var component_103_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_103_13_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.TEXT_DISPLAY_ITEM_ID);
    var ui_BEMPlugin_105_17_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_105_17_$1,"block" , "cm-todo-text-display");
    AS3.setBindable(ui_BEMPlugin_105_17_$1,"modifier" , this.getDisplayFieldModifiersVE());
    var ui_BindPropertyPlugin_107_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_107_17_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DESCRIPTION, AS3.getBindable(config,"todo"));
    ui_BindPropertyPlugin_107_17_$1.componentProperty = "html";
    ui_BindPropertyPlugin_107_17_$1.transformer = com.coremedia.cms.editor.todo.components.TodoPanelBase.formatTextDisplay;
    component_103_13_$1.plugins = [ui_BEMPlugin_105_17_$1, ui_BindPropertyPlugin_107_17_$1];
    var textArea_113_13_$1/*:ext.form.field.TextArea*/ =AS3.cast(Ext.form.field.TextArea,{});
    textArea_113_13_$1.grow = true;
    textArea_113_13_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.TEXT_INPUT_ITEM_ID);
    var ui_BindPropertyPlugin_116_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_116_17_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DESCRIPTION, AS3.getBindable(config,"todo"));
    ui_BindPropertyPlugin_116_17_$1.reverseTransformer = function (value/*:String*/)/*:String*/ {return value['trim']();};
    ui_BindPropertyPlugin_116_17_$1.bidirectional = true;
    textArea_113_13_$1.plugins = [ui_BindPropertyPlugin_116_17_$1];
    ui_SwitchingContainer_98_9_$1.items = [component_103_13_$1, textArea_113_13_$1];
    var container_125_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_125_9_$1,"height" , 38);
    container_125_9_$1.liquidLayout = true;
    var ui_BEMMixin_128_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_128_13_$1,"bemElement" , TodoPanel.ELEMENT_CONTROLS);

    delete ui_BEMMixin_128_13_$1['xtype'];
    delete ui_BEMMixin_128_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_125_9_$1, ui_BEMMixin_128_13_$1);
    var ui_BindVisibilityPlugin_131_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_131_13_$1.bindTo = this.getTodoControlsVisibleVE();
    container_125_9_$1.plugins = [ui_BindVisibilityPlugin_131_13_$1];
    var layout_Container_134_13_$1/*:ext.layout.container.ContainerLayout*/ =AS3.cast(Ext.layout.container.Container,{});
    AS3.setBindable(container_125_9_$1,"layout" , layout_Container_134_13_$1);
    var todo_TodoAssignmentButton_137_13_$1/*: com.coremedia.cms.editor.todo.components.TodoAssignmentButton*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoAssignmentButton,{});
    todo_TodoAssignmentButton_137_13_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.ASSIGNEE_BUTTON_ITEM_ID);
    AS3.setBindable(todo_TodoAssignmentButton_137_13_$1,"todo" , AS3.getBindable(config,"todo"));
    AS3.setBindable(todo_TodoAssignmentButton_137_13_$1,"assigneesVE" , AS3.getBindable(config,"assigneesVE"));
    todo_TodoAssignmentButton_137_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    var ui_BEMMixin_142_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_142_17_$1,"bemElement" , TodoPanel.ELEMENT_ASSIGNEES);

    delete ui_BEMMixin_142_17_$1['xtype'];
    delete ui_BEMMixin_142_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(todo_TodoAssignmentButton_137_13_$1, ui_BEMMixin_142_17_$1);
    var todo_TodoDueDateContainer_145_13_$1/*: com.coremedia.cms.editor.todo.components.TodoDueDateContainer*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoDueDateContainer,{});
    todo_TodoDueDateContainer_145_13_$1.itemId =net.jangaroo.ext.Exml.asString( TodoPanel.DUE_DATE_CT_ID);
    AS3.setBindable(todo_TodoDueDateContainer_145_13_$1,"todo" , AS3.getBindable(config,"todo"));
    AS3.setBindable(todo_TodoDueDateContainer_145_13_$1,"datePickerModifiersForDay" ,AS3.bind( this,"getDueDatePickerModifiers"));
    AS3.setBindable(todo_TodoDueDateContainer_145_13_$1,"issueBuilder" , config.dueDateIssueBuilder);
    AS3.setBindable(todo_TodoDueDateContainer_145_13_$1,"isEditorModeVE" , this.getIsEditorModeVE());
    AS3.setBindable(todo_TodoDueDateContainer_145_13_$1,"isDueDateFieldActiveVE" , this.getIsDueDateFieldActiveVE());
    var ui_BEMMixin_152_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_152_17_$1,"bemElement" , TodoPanel.ELEMENT_DUE_DATE);

    delete ui_BEMMixin_152_17_$1['xtype'];
    delete ui_BEMMixin_152_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(todo_TodoDueDateContainer_145_13_$1, ui_BEMMixin_152_17_$1);
    container_125_9_$1.items = [todo_TodoAssignmentButton_137_13_$1, todo_TodoDueDateContainer_145_13_$1];
    container_92_5_$1.items = [ui_SwitchingContainer_98_9_$1, container_125_9_$1];
    var layout_VBox_159_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_159_9_$1,"align" , "stretch");
    AS3.setBindable(container_92_5_$1,"layout" , layout_VBox_159_9_$1);
    config_$1.items = [container_60_5_$1, container_92_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_do8(config_$1);
  }/*

    /**
     * A ValueExpression providing an Array of User representing all possible assignees for the Todo including the
     * currently assigned users.
     * /
    [Bindable]
    public var assigneesVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.todo.components.TodoPanelBase",
      alias: "widget.com.coremedia.cms.editor.todo.config.todoPanel",
      constructor: TodoPanel$,
      super$_do8: function() {
        com.coremedia.cms.editor.todo.components.TodoPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {assigneesVE: null},
      statics: {
        BLOCK: "cm-todo-panel",
        ELEMENT_CHECK: "check",
        ELEMENT_DETAILS: "details",
        ELEMENT_DELETE: "delete",
        ELEMENT_CONTROLS: "controls",
        ELEMENT_ASSIGNEES: "assignees",
        ELEMENT_DUE_DATE: "due-date",
        DETAILS_CT_ITEM_ID: "detailsCtItemId",
        TEXT_CT_ITEM_ID: "textCtItemId",
        TEXT_DISPLAY_ITEM_ID: "textDisplayItemId",
        TEXT_INPUT_ITEM_ID: "textInputItemId",
        ASSIGNEE_BUTTON_ITEM_ID: "assigneeButtonItemId",
        CHECKBOX_ITEM_ID: "checkboxItemId",
        DUE_DATE_CT_ID: "todoDueDateCt",
        REMOVE_BUTTON_ITEM_ID: "removeButtonItemId"
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.form.field.TextArea",
        "Ext.layout.container.Container",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.cms.editor.todo.components.TodoPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.todo.components.TodoAssignmentButton",
        "com.coremedia.cms.editor.todo.components.TodoDueDateContainer",
        "com.coremedia.cms.editor.todo.model.TodoPropertyNames"
      ]
    };
});
