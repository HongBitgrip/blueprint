Ext.define("com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItem", function(TodoAssignmentMenuItem) {/*package com.coremedia.cms.editor.todo.components{
import com.coremedia.cms.editor.todo.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class TodoAssignmentMenuItem extends TodoAssignmentMenuItemBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.todo.config.todoAssignmentMenuItem";

    public*/function TodoAssignmentMenuItem$(config/*:TodoAssignmentMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase*/ =AS3.cast(com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase,{});
    var defaults_$1/*:TodoAssignmentMenuItem*/ =AS3.cast(TodoAssignmentMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'user')));
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"callSelectionHandler"));
    var ui_BindPropertyPlugin_24_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_24_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeUserName"));
    ui_BindPropertyPlugin_24_5_$1.componentProperty = "text";
    config_$1.plugins = [ui_BindPropertyPlugin_24_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hSxx(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase",
      alias: "widget.com.coremedia.cms.editor.todo.config.todoAssignmentMenuItem",
      constructor: TodoAssignmentMenuItem$,
      super$hSxx: function() {
        com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.todo.components.TodoAssignmentMenuItemBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
