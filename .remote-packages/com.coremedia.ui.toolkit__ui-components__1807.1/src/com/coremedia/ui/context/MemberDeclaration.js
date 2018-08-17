Ext.define("com.coremedia.ui.context.MemberDeclaration", function(MemberDeclaration) {/*package com.coremedia.ui.context {
public class MemberDeclaration {

  public var memberName:String;
  public var metadata:Object;

  private var setter:String, getter:String;

  public*/ function getSetter()/*:String*/ {
    if (!this.setter$eREz) {
      this.setter$eREz = this.memberName.replace("get", "set");
    }
    return this.setter$eREz;
  }/*

  public*/ function getGetter()/*:String*/ {
    if (!this.getter$eREz) {
      this.getter$eREz = this.memberName.replace("set", "get");
    }
    return this.getter$eREz;
  }/*

}*/function MemberDeclaration$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      memberName: null,
      metadata: null,
      setter$eREz: null,
      getter$eREz: null,
      getSetter: getSetter,
      getGetter: getGetter,
      constructor: MemberDeclaration$
    };
});
