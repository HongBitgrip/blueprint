Ext.define("com.coremedia.cms.studio.imageeditor.history.UndoHistory", function(UndoHistory) {/*package com.coremedia.cms.studio.imageeditor.history {
import com.coremedia.ui.actions.DependencyTrackedActionBase;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

import ext.menu.Item;

public class UndoHistory {

  private var imageEditorViewModel:Bean;
  private var undoHistoryValueExpression:ValueExpression;
  private var redoHistoryValueExpression:ValueExpression;

  public*/ function UndoHistory$(viewModel/*:Bean*/) {
    this.imageEditorViewModel$vOoJ = viewModel ;
    this.undoHistoryValueExpression$vOoJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    this.redoHistoryValueExpression$vOoJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
  }/*

  public*/ function createViewModelValueExpression(property/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.create(property, this.imageEditorViewModel$vOoJ);
  }/*

  public*/ function createStateSavingViewModelValueExpression(property/*:String*/, commandDescription/*:String*/,
                                                              defaultValue/*:* = undefined*/, resetCommandDescription/*:String = null*/)/*:ValueExpression*/ {var this$=this;if(arguments.length<=3)resetCommandDescription=null;
    var viewModelPropertyValueExpression/*:ValueExpression*/ = this.createViewModelValueExpression(property);
    return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(viewModelPropertyValueExpression,
            null,
            function(value/*:**/)/*:**/ {
              var oldValue/*:**/ = viewModelPropertyValueExpression.getValue();
              if (oldValue !== undefined && oldValue !== value && (typeof value !== "object" || !com.coremedia.ui.util.ObjectUtils.compareObjects(oldValue, value))) {
                this$.pushUndoableCommand(value === defaultValue ? resetCommandDescription : commandDescription);
              }
              return value;
            }
    );
  }/*

  public*/ function createResetStatusValueExpression(readOnlyValueExpression/*:ValueExpression*/,
                                                   property/*:String*/, resetValue/*:* = 0*/)/*:ValueExpression*/ {var this$=this;if(arguments.length<=2)resetValue=0;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:int*/ {
      var readOnly/*:Boolean*/ = readOnlyValueExpression.getValue();
      if (readOnly !== false) {
        return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
      }
      var value/*:**/ = this$.imageEditorViewModel$vOoJ.get(property);
      if (value === undefined) {
        return undefined;
      }

      return (value === resetValue) ? com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED : com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
    });
  }/*

  internal*/ function getHistoryValueExpression(isRedo/*:Boolean*/)/*:ValueExpression*/ {
    return isRedo ? this.redoHistoryValueExpression$vOoJ : this.undoHistoryValueExpression$vOoJ;
  }/*

  public*/ function pushUndoableCommand(text/*:String*/)/*:void*/ {
    this.addHistoryMenuItem$vOoJ(this.undoHistoryValueExpression$vOoJ, this.redoHistoryValueExpression$vOoJ, text, this.imageEditorViewModel$vOoJ.toObject());
    this.redoHistoryValueExpression$vOoJ.setValue([]);
  }/*

  public*/ function createCommand(undoText/*:String*/, change/*:Function*/)/*:Function*/ {var this$=this;
    return function()/*:void*/ {
      this$.pushUndoableCommand(undoText);
      change(this$.imageEditorViewModel$vOoJ);
    };
  }/*

  public*/ function createImmediateCommand(undoText/*:String*/, change/*:Function*/)/*:void*/ {
    this.pushUndoableCommand(undoText);
    change(this.imageEditorViewModel$vOoJ);
  }/*

  public*/ function createPropertyResetCommand(undoText/*:String*/, property/*:String*/, resetValue/*:* = 0*/)/*:Function*/ {var this$=this;if(arguments.length<=2)resetValue=0;
    return function()/*:void*/ {
      this$.pushUndoableCommand(undoText);
      this$.imageEditorViewModel$vOoJ.set(property, resetValue);
    };
  }/*

  internal*/ function getDisabledExpression(isRedo/*:Boolean*/, disableValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:int*/ {
      var disabled/*:Boolean*/ = disableValueExpression.getValue();
      if (disabled !== false) {
        return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
      }
      //noinspection JSMismatchedCollectionQueryUpdate
      var history/*:Array*/ = this$.getHistoryValueExpression(isRedo).getValue();
      return (!history || history.length === 0) ? com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED : com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
    });
  }/*
  
  public*/ function reset()/*:void*/ {
    this.undoHistoryValueExpression$vOoJ.setValue([]);
    this.redoHistoryValueExpression$vOoJ.setValue([]);
  }/*

  internal*/ function undo()/*:void*/ {
    this.undoOrRedo$vOoJ(1, this.undoHistoryValueExpression$vOoJ, this.redoHistoryValueExpression$vOoJ);
  }/*

  internal*/ function redo()/*:void*/ {
    this.undoOrRedo$vOoJ(1, this.redoHistoryValueExpression$vOoJ, this.undoHistoryValueExpression$vOoJ);
  }/*

  private*/ function undoOrRedo(numberOfSteps/*:uint*/, historyValueExpression/*:ValueExpression*/, otherHistoryValueExpression/*:ValueExpression*/)/*:void*/ {
    var history/*:Array*/ = historyValueExpression.getValue().concat();
    var state/*:Object*/ = this.imageEditorViewModel$vOoJ.toObject();
    for (var i/*:int*/ = 0; i < numberOfSteps; i++) {
      var firstMenuItem/*:Item*/ = history.shift();
      this.addHistoryMenuItem$vOoJ(otherHistoryValueExpression, historyValueExpression, firstMenuItem.text, state);
      historyValueExpression.setValue(history);
      state = firstMenuItem["viewModelState"];
    }
    this.imageEditorViewModel$vOoJ.updateProperties(state);
  }/*

  private*/ function addHistoryMenuItem(historyValueExpression/*:ValueExpression*/, otherHistoryValueExpression/*:ValueExpression*/,
                                      text/*:String*/, viewModelState/*:Object*/)/*:void*/ {var this$=this;
    var history/*:Array*/ = historyValueExpression.getValue();
    var newMenuItem/*:Item*/ = AS3.cast(Ext.menu.Item,{});
    var itemIndex/*:uint*/ = history.length;
    AS3.setBindable(newMenuItem,"text" , text);
    newMenuItem["viewModelState"] = viewModelState;
    AS3.setBindable(newMenuItem,"handler" , function()/*:void*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var newHistory/*:Array*/ = historyValueExpression.getValue();
      this$.undoOrRedo$vOoJ(newHistory.length - itemIndex, historyValueExpression, otherHistoryValueExpression);
    });
    historyValueExpression.setValue([newMenuItem].concat(history));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      imageEditorViewModel$vOoJ: null,
      undoHistoryValueExpression$vOoJ: null,
      redoHistoryValueExpression$vOoJ: null,
      constructor: UndoHistory$,
      createViewModelValueExpression: createViewModelValueExpression,
      createStateSavingViewModelValueExpression: createStateSavingViewModelValueExpression,
      createResetStatusValueExpression: createResetStatusValueExpression,
      getHistoryValueExpression: getHistoryValueExpression,
      pushUndoableCommand: pushUndoableCommand,
      createCommand: createCommand,
      createImmediateCommand: createImmediateCommand,
      createPropertyResetCommand: createPropertyResetCommand,
      getDisabledExpression: getDisabledExpression,
      reset: reset,
      undo: undo,
      redo: redo,
      undoOrRedo$vOoJ: undoOrRedo,
      addHistoryMenuItem$vOoJ: addHistoryMenuItem,
      requires: [
        "Ext.menu.Item",
        "com.coremedia.ui.actions.DependencyTrackedActionBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
