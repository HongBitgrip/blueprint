Ext.define("com.coremedia.cms.editor.sdk.premular.fields.StringListUpdateAction", function(StringListUpdateAction) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cms.editor.sdk.actions.ContentUpdateAction;
import com.coremedia.ui.data.ValueExpression;

public class StringListUpdateAction extends ContentUpdateAction {
  public var selectedPositions:ValueExpression;
  public var selectedValues:ValueExpression;
  public var stringListEntriesValueExpression:ValueExpression;

  public*/ function StringListUpdateAction$(config/*:StringListUpdateAction = null*/) {if(arguments.length<=0)config=null;
    this.selectedPositions = config.selectedPositions;
    this.selectedValues = config.selectedValues;
    this.stringListEntriesValueExpression = config.stringListEntriesValueExpression;
    this.super$ExA1(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction",
      selectedPositions: null,
      selectedValues: null,
      stringListEntriesValueExpression: null,
      constructor: StringListUpdateAction$,
      super$ExA1: function() {
        com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cms.editor.sdk.actions.ContentUpdateAction"]
    };
});
