Ext.define("com.coremedia.cap.content.results.CopyResult", function(CopyResult) {/*package com.coremedia.cap.content.results {

/**
 * The result items returned by this result are instances of <code>CopyResultItem</code>.
 *
 * @see CopyResultItem
 * @see com.coremedia.cap.content.Content#copyTo
 * /
[PublicApi]
public interface CopyResult extends BulkOperationResult {
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
