Ext.define("com.coremedia.ui.actions.DependencyTrackedToggleActionBase", function(DependencyTrackedToggleActionBase) {/*package com.coremedia.ui.actions {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.tip.QuickTipManager;

public class DependencyTrackedToggleActionBase extends DependencyTrackedAction {
  private var pressedValueExpression:ValueExpression;

  private var myTooltip:String;
  private var myTooltipPressed:String;

  public*/ function DependencyTrackedToggleActionBase$(config/*:DependencyTrackedToggleAction = null*/) {if(arguments.length<=0)config=null;
    this.myTooltip$3$yb = config.tooltip;
    this.myTooltipPressed$3$yb = AS3.getBindable(config,"tooltipPressed") === undefined ? config.tooltip : AS3.getBindable(config,"tooltipPressed");

    this.pressedValueExpression$3$yb = AS3.getBindable(config,"pressedValueExpression") || com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculatePressed"));
    this.super$3$yb(AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleAction,Ext.apply({handler:AS3.bind( this,"handle$3$yb")}, config)));
  }/*

  protected*/ function calculatePressed()/*:Boolean*/ {
    return false;
  }/*

  private*/ function handle()/*:void*/ {
    // Make the current quick tip disappear.
    // It might have to change soon.
    Ext.tip.QuickTipManager.getQuickTip().hide();

    if (this.pressedValueExpression$3$yb.getValue()) {
      this.handleUnpress();
    } else {
      this.handlePress();
    }
  }/*

  protected*/ function handleUnpress()/*:void*/ {
    this.pressedValueExpression$3$yb.setValue(false);
  }/*

  protected*/ function handlePress()/*:void*/ {
    this.pressedValueExpression$3$yb.setValue(true);
  }/*

  ///////////////////////////////////////////
  // Status update
  ///////////////////////////////////////////

  public override*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.DependencyTrackedAction.prototype.addComponent.call(this,comp);
    this.updateComponentPressedState$3$yb(comp, this.calculatePressed());

    if (this.items.length === 1) {
      this.pressedValueExpression$3$yb.addChangeListener(AS3.bind(this,"updatePressedState$3$yb"));
    }

    var pressed/*:Boolean*/ = this.pressedValueExpression$3$yb.getValue();
    if (pressed !== undefined) {
      this.updateComponentPressedState$3$yb(comp, pressed);
    }
  }/*

  private*/ function updatePressedState(inheritValueExpression/*:ValueExpression*/)/*:void*/ {var this$=this;
    var pressed/*:Boolean*/ = inheritValueExpression.getValue();
    this.each(function (comp/*:Component*/)/*:void*/ {
      this$.updateComponentPressedState$3$yb(comp, pressed);
    });
  }/*

  private*/ function updateComponentPressedState(comp/*:Component*/, pressed/*:Boolean*/)/*:void*/ {
    var button/*:Button*/ =AS3.as( comp,  Ext.button.Button);
    if (button) {
      button.toggle(pressed, true);
      var newTooltip/*:String*/ = pressed ? this.myTooltipPressed$3$yb : this.myTooltip$3$yb;
      if (newTooltip !== undefined) {
        button.setTooltip(newTooltip);
      }
    }
  }/*

  public override*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.DependencyTrackedAction.prototype.removeComponent.call(this,comp);

    if (this.items.length === 0) {
      this.pressedValueExpression$3$yb.removeChangeListener(AS3.bind(this,"updatePressedState$3$yb"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      pressedValueExpression$3$yb: null,
      myTooltip$3$yb: null,
      myTooltipPressed$3$yb: null,
      constructor: DependencyTrackedToggleActionBase$,
      super$3$yb: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      calculatePressed: calculatePressed,
      handle$3$yb: handle,
      handleUnpress: handleUnpress,
      handlePress: handlePress,
      addComponent: addComponent,
      updatePressedState$3$yb: updatePressedState,
      updateComponentPressedState$3$yb: updateComponentPressedState,
      removeComponent: removeComponent,
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.tip.QuickTipManager",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.ui.actions.DependencyTrackedToggleAction"]
    };
});
