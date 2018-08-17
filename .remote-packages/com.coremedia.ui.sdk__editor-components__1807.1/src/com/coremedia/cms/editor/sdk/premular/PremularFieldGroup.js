Ext.define("com.coremedia.cms.editor.sdk.premular.PremularFieldGroup", function(PremularFieldGroup) {/*package com.coremedia.cms.editor.sdk.premular {

/**
 * Simple status value for property fields.
 * /
public class PremularFieldGroup {

  private var itemId:String;
  private var collapsed:Boolean;

  public*/ function PremularFieldGroup$(itemId/*:String*/, collapsed/*:Boolean*/) {
    this.itemId$VRCP = itemId;
    this.collapsed$VRCP = collapsed;
  }/*

  public*/ function getItemId()/*:String*/ {
    return this.itemId$VRCP;
  }/*

  public*/ function isCollapsed()/*:Boolean*/ {
    return this.collapsed$VRCP;
  }/*

  public*/ function setCollapsed(newCollapsed/*:Boolean*/)/*:void*/ {
    this.collapsed$VRCP = newCollapsed;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      itemId$VRCP: null,
      collapsed$VRCP: false,
      constructor: PremularFieldGroup$,
      getItemId: getItemId,
      isCollapsed: isCollapsed,
      setCollapsed: setCollapsed
    };
});
