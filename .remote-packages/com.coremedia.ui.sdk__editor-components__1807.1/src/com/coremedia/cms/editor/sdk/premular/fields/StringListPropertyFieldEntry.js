Ext.define("com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldEntry", function(StringListPropertyFieldEntry) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.ui.data.ValueExpression;

public class StringListPropertyFieldEntry {
  private var value:Object;
  private var index:int;
  private var stringListValueExpression:ValueExpression;

  public*/ function StringListPropertyFieldEntry$(value/*:Object*/, index/*:int*/, stringListValueExpression/*:ValueExpression*/) {
    this.value$MX$l = value;
    this.index$MX$l = index;
    this.stringListValueExpression$MX$l = stringListValueExpression;
  }/*

  public*/ function getValue()/*:Object*/{
    return this.value$MX$l;
  }/*

  public*/ function setValue(newValue/* : Object*/)/*:void*/{
    var list/*:Array*/ = this.stringListValueExpression$MX$l.getValue();

    var newList/*:Array*/ = list.concat();
    newList[this.index$MX$l] = newValue;

    this.stringListValueExpression$MX$l.setValue(newList);
  }/*

  public*/ function getIndex()/*:int*/{
    return this.index$MX$l;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      value$MX$l: null,
      index$MX$l: 0,
      stringListValueExpression$MX$l: null,
      constructor: StringListPropertyFieldEntry$,
      getValue: getValue,
      setValue: setValue,
      getIndex: getIndex
    };
});
