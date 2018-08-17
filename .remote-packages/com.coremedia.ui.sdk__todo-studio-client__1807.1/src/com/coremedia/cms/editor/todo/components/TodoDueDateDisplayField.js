Ext.define("com.coremedia.cms.editor.todo.components.TodoDueDateDisplayField", function(TodoDueDateDisplayField) {/*package com.coremedia.cms.editor.todo.components{
import com.coremedia.ui.components.IconDisplayField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.BindPropertyPlugin;public class TodoDueDateDisplayField extends IconDisplayField{

    import com.coremedia.cms.editor.sdk.util.TimeUtil;
    import com.coremedia.cms.editor.todo.model.Todo;
    import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.data.impl.IssueImpl;
    import com.coremedia.ui.data.validation.Severity;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.todo.config.todoDueDateDisplayField";

    public*/function TodoDueDateDisplayField$(config/*:TodoDueDateDisplayField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    var defaults_$1/*:TodoDueDateDisplayField*/ =AS3.cast(TodoDueDateDisplayField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BEMMixin_58_5_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_58_5_$1,"bemElement" , "text");

    delete ui_BEMMixin_58_5_$1['xtype'];
    delete ui_BEMMixin_58_5_$1['xclass'];
    net.jangaroo.ext.Exml.apply(config_$1, ui_BEMMixin_58_5_$1);
    var ui_BindPropertyPlugin_61_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_61_5_$1.bindTo = AS3.getBindable(config,"dueDateValueVE");
    ui_BindPropertyPlugin_61_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_61_5_$1.transformer = com.coremedia.cms.editor.sdk.util.TimeUtil.getRelativeDateString;
    var ui_BindPropertyPlugin_64_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_64_5_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_64_5_$1.bindTo = this.getDueDateWarningIconVE();
    var ui_BindPropertyPlugin_66_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_66_5_$1.componentProperty = "validationState";
    ui_BindPropertyPlugin_66_5_$1.bindTo = AS3.getBindable(config,"dueDateValidationStateVE");
    var ui_BindPropertyPlugin_68_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_68_5_$1.componentProperty = "UI";
    ui_BindPropertyPlugin_68_5_$1.bindTo = this.getDisplayFieldUIVE$bGs_();
    config_$1.plugins = [ui_BindPropertyPlugin_61_5_$1, ui_BindPropertyPlugin_64_5_$1, ui_BindPropertyPlugin_66_5_$1, ui_BindPropertyPlugin_68_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bGs_(config_$1);
  }/*

    [Bindable]
    public var todo:Todo;

    [Bindable]
    public var dueDateValueVE:ValueExpression;

    [Bindable]
    public var dueDateIssuesVE:ValueExpression;

    [Bindable]
    public var dueDateValidationStateVE:ValueExpression;

    private*/ function getDisplayFieldUIVE()/*:ValueExpression*/ {var this$=this;
      return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var dueDate/*:Date*/ = AS3.getBindable(this$,"dueDateValueVE").getValue();
        if (dueDate && AS3.getBindable(this$,"todo").getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE && com.coremedia.cms.editor.sdk.util.TimeUtil.isSoon(dueDate, 2)) {
          return com.coremedia.ui.skins.IconDisplayFieldSkin.BOLD.getSkin();
        } else {
          return com.coremedia.ui.skins.IconDisplayFieldSkin.DEFAULT.getSkin();
        }
      });
    }/*

    protected*/ function getDueDateWarningIconVE()/*:ValueExpression*/ {var this$=this;
      return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var issues/*:Array*/ =AS3.as( AS3.getBindable(this$,"dueDateIssuesVE").getValue(),  Array) || [];
        if (issues.length > 0) {
          var issue/*:IssueImpl*/ =AS3.as( issues[0],  com.coremedia.ui.data.impl.IssueImpl);
          return issue.severity === com.coremedia.ui.data.validation.Severity.WARN ? this$.resourceManager.getString('com.coremedia.icons.CoreIcons', 'warning') : null;
        } else {
          return null;
        }
      });
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconDisplayField",
      alias: "widget.com.coremedia.cms.editor.todo.config.todoDueDateDisplayField",
      constructor: TodoDueDateDisplayField$,
      super$bGs_: function() {
        com.coremedia.ui.components.IconDisplayField.prototype.constructor.apply(this, arguments);
      },
      getDisplayFieldUIVE$bGs_: getDisplayFieldUIVE,
      getDueDateWarningIconVE: getDueDateWarningIconVE,
      config: {
        todo: null,
        dueDateValueVE: null,
        dueDateIssuesVE: null,
        dueDateValidationStateVE: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.util.TimeUtil",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.IssueImpl",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.todo.rest.impl.TodoImpl"]
    };
});
