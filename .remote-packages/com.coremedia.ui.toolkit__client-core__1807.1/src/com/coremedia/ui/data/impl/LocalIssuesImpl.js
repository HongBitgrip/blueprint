Ext.define("com.coremedia.ui.data.impl.LocalIssuesImpl", function(LocalIssuesImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.LocalIssues;
import com.coremedia.ui.util.ArrayUtils;

public class LocalIssuesImpl implements LocalIssues {

  private var issues:Vector.<Issue> =*/function issues_(){this.issues$qdrt=(/* new <Issue>*/[]);}/*;
  private var entity:*;
  private var pending:Boolean = false;

  public*/ function LocalIssuesImpl$(entity/*:**/) {issues_.call(this);
    this.entity$qdrt = entity;
  }/*

  public*/ function addIssue(severity/*:String*/, code/*:String*/, property/*:String = null, ...arguments*/)/*:void*/ {if(arguments.length<=2)property=null;arguments=Array.prototype.slice.call(arguments,3);
    if (!this.issues$qdrt) {
      throw new AS3.Error("LocalIssues#addIssue() called after issues have been returned.");
    }
    var issue/*:IssueImpl*/ = new com.coremedia.ui.data.impl.IssueImpl({
      'entity': this.entity$qdrt,
      'severity': severity,
      'property': property,
      'code': code,
      'arguments': arguments
    });

    if (!com.coremedia.ui.util.ArrayUtils.containsWithEquals(AS3.as(this.issues$qdrt,  Array), issue)) {
      this.issues$qdrt.push(issue);
    }
  }/*

  public*/ function addFromIssue(issue/*:Issue*/)/*:void*/ {
    if (!this.issues$qdrt) {
      throw new AS3.Error("LocalIssues#addFromIssue() called after issues have been returned.");
    }
    this.issues$qdrt.push(issue);
  }/*

  public*/ function setPending()/*:void*/ {
    this.pending$qdrt = true;
  }/*

  public*/ function getIssues(resetIssues/*:Boolean = true*/)/*:Vector.<Issue>*/ {if(arguments.length<=0)resetIssues=true;
    var result/*:**/ = this.pending$qdrt ? undefined : this.issues$qdrt.concat();
    resetIssues && (this.issues$qdrt = null);
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.validation.LocalIssues"],
      entity$qdrt: undefined,
      pending$qdrt: false,
      constructor: LocalIssuesImpl$,
      addIssue: addIssue,
      addFromIssue: addFromIssue,
      setPending: setPending,
      getIssues: getIssues,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.validation.LocalIssues"
      ],
      uses: [
        "com.coremedia.ui.data.impl.IssueImpl",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
