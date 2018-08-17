Ext.define("com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction", function(MoveStringListEntryAction) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class MoveStringListEntryAction extends StringListUpdateAction {

  /**
   * "Up" or "Down"
   * /
  public var direction:String;

  public*/ function MoveStringListEntryAction$(config/*: MoveStringListEntryAction = null*/) {if(arguments.length<=0)config=null;
    this.super$K54L(AS3.cast(MoveStringListEntryAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'moveStructListItem' + config.direction,  {handler:AS3.bind( this,"doExecute$K54L") })));
  }/*

  private*/ function isUp()/*:Boolean*/ {
    return AS3.cast(MoveStringListEntryAction,this.initialConfig).direction === "Up";
  }/*

  private*/ function doExecute()/*:void*/ {
    if (this.calculateDisabled()) {
      return;
    }
    //multiple selection is not supported
    var selectedPositionsArray/*:Array*/ =AS3.as( this.selectedPositions.getValue(),  Array);
    if (selectedPositionsArray && selectedPositionsArray.length === 1) {
      var selectedRow/*:int*/ = selectedPositionsArray[0];
      var selectedValue/*:StringListPropertyFieldEntry*/ =  this.selectedValues.getValue()[0];

      var list/*:Array*/ = this.stringListEntriesValueExpression.getValue();
      var newList/*:Array*/ = list.concat();

      if (this.isUp$K54L() && selectedRow > 0) {
        this.changePlaces$K54L(newList, selectedRow-1, selectedRow);
        selectedRow = selectedRow-1;

      } else if (!this.isUp$K54L() && selectedRow < list.length-1) {
        this.changePlaces$K54L(newList, selectedRow, selectedRow+1);
        selectedRow = selectedRow+1;
      }

      this.stringListEntriesValueExpression.setValue(newList);
      this.selectedValues.setValue([new com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry(newList[selectedRow], selectedRow, this.selectedValues)]);
    }
  }/*

  private*/ function changePlaces(newList/*:Array*/, firstIndex/*:int*/, secondIndex/*:int*/)/*:void*/ {
    var first/*:String*/ = newList[firstIndex];
    var second/*:String*/ = newList[secondIndex];

    newList[firstIndex] = second;
    newList[secondIndex] = first;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
  if (com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction.prototype.calculateDisabled.call(this)) {
    return true;
  }

    var selectedPositionsArray/*:Array*/ =AS3.as( this.selectedPositions.getValue(),  Array);
    var stringListEntriesArray/*:Array*/ =AS3.as( this.stringListEntriesValueExpression.getValue(),  Array);
    //multiple selection is not supported
    if (!stringListEntriesArray || !selectedPositionsArray || selectedPositionsArray.length !== 1) {
      return true;
    }
    var isFirstRow/*:Boolean*/ = (selectedPositionsArray[0] === 0);
    var isLastRow/*:Boolean*/ = (selectedPositionsArray[0] >= stringListEntriesArray.length - 1);

    return (this.isUp$K54L() && isFirstRow) || (!this.isUp$K54L() && isLastRow);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction",
      direction: null,
      constructor: MoveStringListEntryAction$,
      super$K54L: function() {
        com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction.prototype.constructor.apply(this, arguments);
      },
      isUp$K54L: isUp,
      doExecute$K54L: doExecute,
      changePlaces$K54L: changePlaces,
      calculateDisabled: calculateDisabled,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry"
      ]
    };
});
