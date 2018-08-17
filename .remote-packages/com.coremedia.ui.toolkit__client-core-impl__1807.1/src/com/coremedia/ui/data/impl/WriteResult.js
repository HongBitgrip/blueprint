Ext.define("com.coremedia.ui.data.impl.WriteResult", function(WriteResult) {/*package com.coremedia.ui.data.impl {
public class WriteResult {
  public*/ function WriteResult$(json/*:Object*/) {
    this['updates'] = json['updates'];

    var issuesJson/*:**/ = json['issues'];
    this['issues'] = com.coremedia.ui.data.impl.IssuesUtil.getAllIssues(issuesJson);

    this['timestamps'] = json['timestamps'];
  }/*

  public native function get updates():Object;

  /**
   * Return an array of issues that were detected during an attempted operation.
   * /
  public native function get issues():Array;

  /**
   * A mapping from identifiers of timestamped repositories to timestamps.
   * /
  public native function get timestamps():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: WriteResult$,
      uses: ["com.coremedia.ui.data.impl.IssuesUtil"]
    };
});
