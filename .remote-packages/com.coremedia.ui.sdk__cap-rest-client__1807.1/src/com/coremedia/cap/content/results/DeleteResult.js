Ext.define("com.coremedia.cap.content.results.DeleteResult", function(DeleteResult) {/*package com.coremedia.cap.content.results {

/**
 * The result items returned by this result are instances of <code>DeleteResultItem</code>.
 *
 * @see DeleteResultItem
 * @see com.coremedia.cap.content.Content#doDelete
 * /
[PublicApi]
public interface DeleteResult extends BulkOperationResult {
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
