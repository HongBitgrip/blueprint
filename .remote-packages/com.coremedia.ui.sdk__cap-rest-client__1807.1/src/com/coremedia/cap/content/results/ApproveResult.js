Ext.define("com.coremedia.cap.content.results.ApproveResult", function(ApproveResult) {/*package com.coremedia.cap.content.results {

/**
 * The result items returned by this result are instances of <code>ApproveResultItem</code>.
 *
 * @see ApproveResultItem
 * @see com.coremedia.cap.content.publication.PublicationService#approveWithPath
 * @see com.coremedia.cap.content.publication.PublicationService#approveAllWithPath
 * /
[PublicApi]
public interface ApproveResult extends BulkOperationResult {
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
