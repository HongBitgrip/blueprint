Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowIssueModel", function(WorkflowIssueModel) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.WithEquals;

public class WorkflowIssueModel implements WithEquals {
  public var id:int;
  public var code:String;
  public var message:String = "";
  public var contents:Array =*/function contents_(){this.contents=( []);}/*;
  public var users:Array =*/function users_(){this.users=( []);}/*;

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:WorkflowIssueModel*/ =AS3.as( o,  WorkflowIssueModel);
    if (!that) {
      return false;
    }
    var contentsEqual/*:Boolean*/ = com.coremedia.ui.util.ObjectUtils.equal(this.contents, that.contents);
    var usersEqual/*:Boolean*/ = com.coremedia.ui.util.ObjectUtils.equal(this.users, that.users);
    var messageEqual/*:Boolean*/ = com.coremedia.ui.util.ObjectUtils.equal(this.message, that.message);
    return this.code === that.code
            && contentsEqual
            && usersEqual
            && messageEqual;
  }/*
}*/function WorkflowIssueModel$() {contents_.call(this);users_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      id: 0,
      code: null,
      message: "",
      equals: equals,
      constructor: WorkflowIssueModel$,
      requires: [
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.WithEquals"
      ]
    };
});
