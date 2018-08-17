Ext.define("com.coremedia.ui.data.impl.IssuesUtil", function(IssuesUtil) {/*package com.coremedia.ui.data.impl {
public class IssuesUtil {
  public static*/ function getAllIssues$static(issuesJson/*:Object*/)/*:Array*/ {
    var allIssues/*:Array*/ = [];
    if (issuesJson) {
      allIssues = allIssues.concat(issuesJson['global']);
      for (var property/*:String*/ in issuesJson['byProperty']) {
        allIssues = allIssues.concat(AS3.as(issuesJson['byProperty'][property],  Array));
      }
    }
    return allIssues;
  }/*
}*/function IssuesUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: IssuesUtil$,
      statics: {getAllIssues: getAllIssues$static}
    };
});
