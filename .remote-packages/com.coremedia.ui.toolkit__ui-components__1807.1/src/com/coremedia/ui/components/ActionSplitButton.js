Ext.define("com.coremedia.ui.components.ActionSplitButton", function(ActionSplitButton) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class ActionSplitButton extends ActionSplitButtonBase{

    public static const xtype:String = "com.coremedia.ui.config.actionSplitButton";

    /**
     * This is the custom CSS class for a standard Ext Split Button.
     * /
    public static const UI_TOOLBAR_SPLIT_BUTTON_CSS:String = "ui-toolbar-split-button";

    public*/function ActionSplitButton$(config/*:ActionSplitButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.ActionSplitButtonBase*/ =AS3.cast(com.coremedia.ui.components.ActionSplitButtonBase,{});
    var defaults_$1/*:ActionSplitButton*/ =AS3.cast(ActionSplitButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8J22(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ActionSplitButtonBase",
      alias: "widget.com.coremedia.ui.config.actionSplitButton",
      constructor: ActionSplitButton$,
      super$8J22: function() {
        com.coremedia.ui.components.ActionSplitButtonBase.prototype.constructor.apply(this, arguments);
      },
      statics: {UI_TOOLBAR_SPLIT_BUTTON_CSS: "ui-toolbar-split-button"},
      requires: [
        "com.coremedia.ui.components.ActionSplitButtonBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
