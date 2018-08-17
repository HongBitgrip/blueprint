Ext.define("com.coremedia.cms.editor.todo.components.TodoDueDateContainer", function(TodoDueDateContainer) {/*package com.coremedia.cms.editor.todo.components{
import com.coremedia.cms.editor.todo.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.ContainerLayout;
import ext.container.Container;
import com.coremedia.ui.plugins.BEMMixin;
import ext.button.Button;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class TodoDueDateContainer extends TodoDueDateContainerBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.todo.config.todoDueDateContainer";


    public static const DUE_DATE_DISPLAY_FIELD_ITEM_ID:String = "dueDateDisplayField";

    public static const DUE_DATE_FIELD_CT_ITEM_ID:String = "dueDateFieldContainer";

    public static const DUE_DATE_FIELD_ITEM_ID:String = "todoDueDateField";

    public static const DUE_DATE_RESET_ITEM_ID:String = "todoDueDateReset";

    public*/function TodoDueDateContainer$(config/*:TodoDueDateContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase,{});
    var defaults_$1/*:TodoDueDateContainer*/ =AS3.cast(TodoDueDateContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.liquidLayout = true;
    var ui_BEMPlugin_33_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_33_5_$1,"block" , "cm-todo-due-date-container");
    AS3.setBindable(ui_BEMPlugin_33_5_$1,"modifier" , this.getModifiersVE());
    config_$1.plugins = [ui_BEMPlugin_33_5_$1];
    var layout_Container_37_5_$1/*:ext.layout.container.ContainerLayout*/ =AS3.cast(Ext.layout.container.Container,{});
    AS3.setBindable(config_$1,"layout" , layout_Container_37_5_$1);
    var local_TodoDueDateDisplayField_40_5_$1/*: com.coremedia.cms.editor.todo.components.TodoDueDateDisplayField*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoDueDateDisplayField,{});
    local_TodoDueDateDisplayField_40_5_$1.itemId =net.jangaroo.ext.Exml.asString( TodoDueDateContainer.DUE_DATE_DISPLAY_FIELD_ITEM_ID);
    AS3.setBindable(local_TodoDueDateDisplayField_40_5_$1,"todo" , AS3.getBindable(config,"todo"));
    AS3.setBindable(local_TodoDueDateDisplayField_40_5_$1,"dueDateValueVE" , this.getDueDateValueExpression(AS3.getBindable(config,"todo")));
    AS3.setBindable(local_TodoDueDateDisplayField_40_5_$1,"dueDateIssuesVE" , this.getDueDateIssuesVE());
    AS3.setBindable(local_TodoDueDateDisplayField_40_5_$1,"dueDateValidationStateVE" , this.getDueDateValidationStateVE());
    var container_46_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( TodoDueDateContainer.DUE_DATE_FIELD_CT_ITEM_ID);
    container_46_5_$1.liquidLayout = true;
    var ui_BEMMixin_49_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_49_9_$1,"bemElement" , "field-container");

    delete ui_BEMMixin_49_9_$1['xtype'];
    delete ui_BEMMixin_49_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_46_5_$1, ui_BEMMixin_49_9_$1);
    var layout_Container_52_9_$1/*: ext.layout.container.ContainerLayout*/ =AS3.cast(Ext.layout.container.Container,{});
    AS3.setBindable(container_46_5_$1,"layout" , layout_Container_52_9_$1);
    var button_55_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_55_9_$1.itemId =net.jangaroo.ext.Exml.asString( TodoDueDateContainer.DUE_DATE_RESET_ITEM_ID);
    button_55_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_55_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateReset_text')));
    AS3.setBindable(button_55_9_$1,"handler" ,AS3.bind( this,"resetDueDate"));
    var ui_BEMMixin_60_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_60_13_$1,"bemElement" , "reset");

    delete ui_BEMMixin_60_13_$1['xtype'];
    delete ui_BEMMixin_60_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_55_9_$1, ui_BEMMixin_60_13_$1);
    var ui_StatefulDateField_63_9_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_63_9_$1.itemId =net.jangaroo.ext.Exml.asString( TodoDueDateContainer.DUE_DATE_FIELD_ITEM_ID);
    ui_StatefulDateField_63_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    ui_StatefulDateField_63_9_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateFormat'));
    ui_StatefulDateField_63_9_$1.enableKeyEvents = true;
    var ui_BEMMixin_68_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_68_13_$1,"bemElement" , "field");

    delete ui_BEMMixin_68_13_$1['xtype'];
    delete ui_BEMMixin_68_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_StatefulDateField_63_9_$1, ui_BEMMixin_68_13_$1);
    var ui_BindPropertyPlugin_71_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_71_13_$1.bindTo = this.getDueDateValueExpression(AS3.getBindable(config,"todo"));
    ui_BindPropertyPlugin_71_13_$1.reverseTransformer = function (date/*:**/)/*:Date*/ {return AS3.as( date,  Date);};
    ui_BindPropertyPlugin_71_13_$1.bidirectional = true;
    var ui_BindPropertyPlugin_74_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_74_13_$1.bindTo = com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase.getEmptyTextValueExpression();
    ui_BindPropertyPlugin_74_13_$1.componentProperty = "emptyText";
    var ui_BindPropertyPlugin_76_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_76_13_$1.componentProperty = "validationState";
    ui_BindPropertyPlugin_76_13_$1.bindTo = this.getDueDateFieldValidationStateVE();
    ui_StatefulDateField_63_9_$1.plugins = [ui_BindPropertyPlugin_71_13_$1, ui_BindPropertyPlugin_74_13_$1, ui_BindPropertyPlugin_76_13_$1];
    container_46_5_$1.items = [button_55_9_$1, ui_StatefulDateField_63_9_$1];
    config_$1.items = [local_TodoDueDateDisplayField_40_5_$1, container_46_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$oSdR(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase",
      alias: "widget.com.coremedia.cms.editor.todo.config.todoDueDateContainer",
      constructor: TodoDueDateContainer$,
      super$oSdR: function() {
        com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DUE_DATE_DISPLAY_FIELD_ITEM_ID: "dueDateDisplayField",
        DUE_DATE_FIELD_CT_ITEM_ID: "dueDateFieldContainer",
        DUE_DATE_FIELD_ITEM_ID: "todoDueDateField",
        DUE_DATE_RESET_ITEM_ID: "todoDueDateReset"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Container",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.todo.components.TodoDueDateDisplayField"]
    };
});
