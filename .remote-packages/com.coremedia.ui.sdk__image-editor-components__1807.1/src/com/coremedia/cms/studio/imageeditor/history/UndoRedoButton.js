Ext.define("com.coremedia.cms.studio.imageeditor.history.UndoRedoButton", function(UndoRedoButton) {/*package com.coremedia.cms.studio.imageeditor.history{
import ext.button.SplitButton;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.actions.DependencyTrackedAction;
import ext.menu.Menu;
import com.coremedia.ui.plugins.BindItemsPlugin;
public class UndoRedoButton extends SplitButton{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.undoRedoButton";

    /**
     * This is the default CSS class for a button or split button menu without icons.
     * /
    public static const BUTTON_MENU_NO_ICON_CSS:String = "button-menu-no-icons";
    private var BUNDLE:Object;

    // called by generated constructor code
    private*/ function __initialize__(config/*:UndoRedoButton*/)/*:void*/ {
      this.BUNDLE$NLfn = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
    }/*

    public*/function UndoRedoButton$(config/*:UndoRedoButton = null*/){if(arguments.length<=0)config=null;this.__initialize__$NLfn(config);
    var config_$1/*:ext.button.SplitButton*/ =AS3.cast(Ext.button.Split,{});
    var defaults_$1/*:UndoRedoButton*/ =AS3.cast(UndoRedoButton,{});
    AS3.setBindable(defaults_$1,"isRedo" , false);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_DependencyTrackedAction_38_5_$1/*:com.coremedia.ui.actions.DependencyTrackedAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,{});
    AS3.setBindable(ui_DependencyTrackedAction_38_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"isRedo") ? this.BUNDLE$NLfn.IEC_action_redo_iconCls : this.BUNDLE$NLfn.IEC_action_undo_iconCls));
    ui_DependencyTrackedAction_38_5_$1["tooltip"] = AS3.getBindable(config,"isRedo") ? this.BUNDLE$NLfn.IEC_action_redo_toolTip : this.BUNDLE$NLfn.IEC_action_undo_toolTip;
    AS3.setBindable(ui_DependencyTrackedAction_38_5_$1,"statusExpression" , AS3.getBindable(config,"undoHistory").getDisabledExpression(AS3.getBindable(config,"isRedo"), AS3.getBindable(config,"disableValueExpression")));
    AS3.setBindable(ui_DependencyTrackedAction_38_5_$1,"handler" , function()/*:void*/ {
                                    AS3.getBindable(config,"isRedo") ? AS3.getBindable(config,"undoHistory").redo() :
 AS3.getBindable(config,"undoHistory").undo();
                                    });
    config_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedAction(ui_DependencyTrackedAction_38_5_$1);
    var menu_48_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_48_5_$1.plain = true;
    var ui_BindItemsPlugin_50_9_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_50_9_$1,"valueExpression" , AS3.getBindable(config,"undoHistory").getHistoryValueExpression(AS3.getBindable(config,"isRedo")));
    AS3.setBindable(ui_BindItemsPlugin_50_9_$1,"reuseComponents" , false);
    menu_48_5_$1.plugins = [ui_BindItemsPlugin_50_9_$1];
    config_$1.menu = menu_48_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NLfn(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var disableValueExpression:ValueExpression;

    [Bindable]
    public var isRedo:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Split",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.undoRedoButton",
      BUNDLE$NLfn: null,
      __initialize__$NLfn: __initialize__,
      constructor: UndoRedoButton$,
      super$NLfn: function() {
        Ext.button.Split.prototype.constructor.apply(this, arguments);
      },
      config: {
        undoHistory: null,
        disableValueExpression: null,
        isRedo: false
      },
      statics: {BUTTON_MENU_NO_ICON_CSS: "button-menu-no-icons"},
      requires: [
        "Ext.button.Split",
        "Ext.menu.Menu",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
