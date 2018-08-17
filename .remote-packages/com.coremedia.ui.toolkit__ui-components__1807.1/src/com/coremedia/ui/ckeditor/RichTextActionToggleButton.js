Ext.define("com.coremedia.ui.ckeditor.RichTextActionToggleButton", function(RichTextActionToggleButton) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.components.IconButton;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.ckeditor.RichTextAction;

    [PublicApi]
/**
 Convenience class to create an IconButton with a RichTextAction as baseAction and enableToggle set to true.
 @see com.coremedia.ui.ckeditor.RichTextAction
 * /
public class RichTextActionToggleButton extends IconButton{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.ui.config.richTextActionButton";

    /**
     * An optional ValueExpression which makes the component disabled if it is evaluated to true.
     * /
    [Bindable]
    public var forceDisabledValueExpression:ValueExpression;

    public*/function RichTextActionToggleButton$(config/*:RichTextActionToggleButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var defaults_$1/*:RichTextActionToggleButton*/ =AS3.cast(RichTextActionToggleButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableToggle = true;
    var ui_RichTextAction_47_5_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_47_5_$1,"commandName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"commandName")));
    AS3.setBindable(ui_RichTextAction_47_5_$1,"forceDisabledValueExpression" , AS3.getBindable(config,"forceDisabledValueExpression"));
    AS3.setBindable(ui_RichTextAction_47_5_$1,"commandParameter" , AS3.getBindable(config,"commandParameter"));
    config_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_47_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$goEw(config_$1);
  }/*

    /**
     The name of the desired CKEditor command. An error is thrown if the name is unknown CKEditor command.
     * /
    [Bindable]
    public var commandName:String;


    /**
     Optional data parameter to be passed through to the executed CKEditor command.
     See CKEditor.executeCommand(commandName, commandParameter) for further details.
     * /
    [Bindable]
    public var commandParameter:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.richTextActionButton",
      constructor: RichTextActionToggleButton$,
      super$goEw: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceDisabledValueExpression: null,
        commandName: null,
        commandParameter: null
      },
      requires: [
        "com.coremedia.ui.components.IconButton",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.ckeditor.RichTextAction"]
    };
});
