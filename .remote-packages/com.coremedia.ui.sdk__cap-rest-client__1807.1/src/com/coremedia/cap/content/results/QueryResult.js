Ext.define("com.coremedia.cap.content.results.QueryResult", function(QueryResult) {/*package com.coremedia.cap.content.results {

import com.coremedia.ui.data.OperationResult;

/**
 * An OperationResult containing an array of contents.
 *
 * @see com.coremedia.cap.content.ContentRepository#query
 * /
[PublicApi]
public interface QueryResult extends OperationResult {

  /**
   * The array of content items.
   * /
  function get items():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.OperationResult"],
      requires: ["com.coremedia.ui.data.OperationResult"]
    };
});
