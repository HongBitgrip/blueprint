Ext.define("com.coremedia.cms.editor.sdk.premular.fields.DeleteStringListEntryAction", function(DeleteStringListEntryAction) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class DeleteStringListEntryAction extends StringListUpdateAction {

  public*/ function DeleteStringListEntryAction$(config/*:DeleteStringListEntryAction = null*/) {if(arguments.length<=0)config=null;
    this.super$JOmx(AS3.cast(DeleteStringListEntryAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "deleteStructNode", {handler:AS3.bind( this,"doExecute$JOmx")})));
  }/*

  /*
  * deletion of rows. multiple selection is supported.
  * after the deletion the row with the index of the last deleted row is selected * /
  private*/ function doExecute()/*:void*/ {

    var list/*:Array*/ = this.stringListEntriesValueExpression.getValue();
    var positions/*:Array*/ = this.selectedPositions.getValue();

    var newList/*:Array*/ = list.concat();

    for (var i/*:int*/ = positions.length - 1; i >= 0; i--) {
      newList.splice(positions[i], 1);
    }

    this.stringListEntriesValueExpression.setValue(newList);

    var selectedRow/*:int*/ = this.selectedPositions.getValue()[0];

    //Put selection to the last row, in case the deleted row was the last one
    if (newList.length <= selectedRow){
      selectedRow = newList.length-1;
    }
    this.selectedValues.setValue([new com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry(newList[selectedRow], selectedRow, this.selectedValues)]);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction.prototype.calculateDisabled.call(this)) {
      return true;
    }
    var selectedPositionsArray/*:Array*/ =AS3.as( this.selectedPositions.getValue(),  Array);
    return !selectedPositionsArray || selectedPositionsArray.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction",
      constructor: DeleteStringListEntryAction$,
      super$JOmx: function() {
        com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction.prototype.constructor.apply(this, arguments);
      },
      doExecute$JOmx: doExecute,
      calculateDisabled: calculateDisabled,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry"
      ]
    };
});
