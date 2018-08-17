Ext.define("com.coremedia.ui.actions.DependencyTrackedToggleAction", function(DependencyTrackedToggleAction) {/*package com.coremedia.ui.actions{
import com.coremedia.ui.actions.*;
import net.jangaroo.ext.Exml;
/**
 An action backing buttons that can be pressed or not, providing different
 tooltips in both cases.
 * /
public class DependencyTrackedToggleAction extends DependencyTrackedToggleActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function DependencyTrackedToggleAction$(config/*:DependencyTrackedToggleAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.actions.DependencyTrackedToggleActionBase*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleActionBase,{});
    var defaults_$1/*:DependencyTrackedToggleAction*/ =AS3.cast(DependencyTrackedToggleAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ehuq(config_$1);
  }/*

    /**
     * A boolean value expression that is read and written to synchronize the "pressed" state of this action.
     * If not set, this value expression is derived from the function calculatePressed(), which should then be
     * overridden by the action subclass.
     * /
    [Bindable]
    public var pressedValueExpression:ValueExpression;

    /**
     The tooltip to show when a button associated with this action is pressed.
     * /
    [Bindable]
    public var tooltipPressed:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedToggleActionBase",
      constructor: DependencyTrackedToggleAction$,
      super$ehuq: function() {
        com.coremedia.ui.actions.DependencyTrackedToggleActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        pressedValueExpression: null,
        tooltipPressed: null
      },
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedToggleActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
