Ext.define("com.coremedia.cap.content.results.RevertResult", function(RevertResult) {/*package com.coremedia.cap.content.results {

/**
 * The result items returned by this result are instances of <code>RevertResultItem</code>.
 *
 * @see RevertResultItem
 * @see com.coremedia.cap.content.Content#revert
 * @see com.coremedia.cap.content.ContentRepository#revertAll
 * /
[PublicApi]
public interface RevertResult extends BulkOperationResult {
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
