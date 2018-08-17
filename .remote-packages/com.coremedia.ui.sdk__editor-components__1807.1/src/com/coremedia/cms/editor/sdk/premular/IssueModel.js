Ext.define("com.coremedia.cms.editor.sdk.premular.IssueModel", function(IssueModel) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.WithEquals;

public class IssueModel implements WithEquals {
  public var id:int;

  public var entity:RemoteBean;
  public var itemIndexPath:Array;
  public var property:String;
  public var propertyLabel:String;
  public var text:String;
  public var code:String;

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:IssueModel*/ =AS3.as( o,  IssueModel);
    if (!that) {
      return false;
    }
    return this.entity === this.entity &&
            com.coremedia.ui.util.ObjectUtils.equal(this.itemIndexPath, that.itemIndexPath) &&
            this.property === that.property &&
            this.text === that.text;
  }/*
}*/function IssueModel$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      id: 0,
      entity: null,
      itemIndexPath: null,
      property: null,
      propertyLabel: null,
      text: null,
      code: null,
      equals: equals,
      constructor: IssueModel$,
      requires: [
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.WithEquals"
      ]
    };
});
