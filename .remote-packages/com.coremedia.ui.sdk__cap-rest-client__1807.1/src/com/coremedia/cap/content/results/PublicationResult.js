Ext.define("com.coremedia.cap.content.results.PublicationResult", function(PublicationResult) {/*package com.coremedia.cap.content.results {

/**
 * The result of a publication or withdrawal.
 * The result items returned by this result are instances of <code>PublicationResultItem</code>.
 *
 * @see PublicationResultItem
 * @see com.coremedia.cap.content.publication.PublicationService
 * /
[PublicApi]
public interface PublicationResult extends BulkOperationResult {
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
