Ext.define("com.coremedia.ui.data.ValueHolderAdapter", function(ValueHolderAdapter) {/*package com.coremedia.ui.data {

/**
 * A simple ad hoc ValueHolder implementation helper.
 * /
public class ValueHolderAdapter implements ValueHolder {

  public*/ function ValueHolderAdapter$(getValue/*:Function*/, setValue/*:Function*/) {
    this["getValue"] = getValue;
    this["setValue"] = setValue;
  }/*

  public native function getValue():*;

  public native function setValue(value:*):Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      constructor: ValueHolderAdapter$,
      requires: ["com.coremedia.ui.data.ValueHolder"]
    };
});
