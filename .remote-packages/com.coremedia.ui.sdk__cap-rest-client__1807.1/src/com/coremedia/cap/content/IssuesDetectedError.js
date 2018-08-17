Ext.define("com.coremedia.cap.content.IssuesDetectedError", function(IssuesDetectedError) {/*package com.coremedia.cap.content {

import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.IssuesUtil;

public class IssuesDetectedError extends RemoteError {
  public*/ function IssuesDetectedError$(json/*:Object*/) {
    this.super$N4Hb(json);

    var issuesJson/*:Array*/ = json['issues'];
    this['issues'] = com.coremedia.ui.data.impl.IssuesUtil.getAllIssues(issuesJson);
  }/*

  /**
   * Return an array of issues that were detected during an attempted operation.
   * /
  public native function get issues():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.error.RemoteError",
      constructor: IssuesDetectedError$,
      super$N4Hb: function() {
        com.coremedia.ui.data.error.RemoteError.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.data.error.RemoteError",
        "com.coremedia.ui.data.impl.IssuesUtil"
      ]
    };
});
