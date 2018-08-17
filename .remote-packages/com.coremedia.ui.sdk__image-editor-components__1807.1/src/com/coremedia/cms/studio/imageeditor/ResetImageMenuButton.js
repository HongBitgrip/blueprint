Ext.define("com.coremedia.cms.studio.imageeditor.ResetImageMenuButton", function(ResetImageMenuButton) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.ui.actions.DependencyTrackedAction;
public class ResetImageMenuButton extends ResetImageMenuButtonBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.resetImageMenuButton";
    private var BUNDLE:Object;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ResetImageMenuButton*/)/*:void*/ {
      this.BUNDLE$Y6_W = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
    }/*

    public*/function ResetImageMenuButton$(config/*:ResetImageMenuButton = null*/){if(arguments.length<=0)config=null;this.__initialize__$Y6_W(config);
    var config_$1/*: com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase,{});
    var defaults_$1/*:ResetImageMenuButton*/ =AS3.cast(ResetImageMenuButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_reset_to_initial_iconCls));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_resetmenu_tooltip);
    AS3.setBindable(config_$1,"tooltip" , this.BUNDLE$Y6_W.IEC_action_resetmenu_tooltip);
    var menu_37_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_39_9_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_39_9_$1.itemId = "resetAll";
    var ui_DependencyTrackedAction_41_13_$1/*:com.coremedia.ui.actions.DependencyTrackedAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,{});
    AS3.setBindable(ui_DependencyTrackedAction_41_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_reset_to_initial_iconCls));
    ui_DependencyTrackedAction_41_13_$1["tooltip"] = this.BUNDLE$Y6_W.IEC_action_resetimage_toolTip;
    AS3.setBindable(ui_DependencyTrackedAction_41_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_resetimage_text));
    AS3.setBindable(ui_DependencyTrackedAction_41_13_$1,"statusExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeResetImageStatus"), AS3.getBindable(config,"disabledValueExpression"), AS3.getBindable(config,"imageEditorViewModel")));
    AS3.setBindable(ui_DependencyTrackedAction_41_13_$1,"handler" , AS3.getBindable(config,"undoHistory").createCommand(this.BUNDLE$Y6_W.IEC_history_image_reseted,AS3.bind( this,"resetImage")));
    menuItem_39_9_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedAction(ui_DependencyTrackedAction_41_13_$1);
    var menuItem_48_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_48_9_$1.itemId = "resetFocal";
    var ui_DependencyTrackedAction_50_13_$1/*: com.coremedia.ui.actions.DependencyTrackedAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,{});
    AS3.setBindable(ui_DependencyTrackedAction_50_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_resetfocal_iconCls));
    ui_DependencyTrackedAction_50_13_$1["tooltip"] = this.BUNDLE$Y6_W.IEC_action_resetfocal_toolTip;
    AS3.setBindable(ui_DependencyTrackedAction_50_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$Y6_W.IEC_action_resetfocal_text));
    AS3.setBindable(ui_DependencyTrackedAction_50_13_$1,"statusExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeResetFocusStatus"), AS3.getBindable(config,"disabledValueExpression"), AS3.getBindable(config,"imageEditorViewModel")));
    AS3.setBindable(ui_DependencyTrackedAction_50_13_$1,"handler" , AS3.getBindable(config,"undoHistory").createCommand(this.BUNDLE$Y6_W.IEC_history_resetfocal,AS3.bind( this,"resetFocusAreaAndCrops")));
    menuItem_48_9_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedAction(ui_DependencyTrackedAction_50_13_$1);
    menu_37_5_$1.items = [menuItem_39_9_$1, menuItem_48_9_$1];
    config_$1.menu = menu_37_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Y6_W(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var variantsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.resetImageMenuButton",
      BUNDLE$Y6_W: null,
      __initialize__$Y6_W: __initialize__,
      constructor: ResetImageMenuButton$,
      super$Y6_W: function() {
        com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        undoHistory: null,
        variantsValueExpression: null
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ]
    };
});
