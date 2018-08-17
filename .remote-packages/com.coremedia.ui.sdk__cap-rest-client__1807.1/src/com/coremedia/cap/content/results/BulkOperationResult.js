Ext.define("com.coremedia.cap.content.results.BulkOperationResult", function(BulkOperationResult) {/*package com.coremedia.cap.content.results {

import com.coremedia.ui.data.OperationResult;

/**
 * The result of a bulk operation, basically an array
 * of <code>BulkOperationResultItem</code> objects.
 * <p>
 * A bulk operation is also considered successful if it had no effect.
 * The bulk operation will be marked as having failed if any part of it failed, even if
 * certain operations were executed successfully. The field
 * <code>results</code> will provide additional information about an error,
 * if the field <code>errorCode</code> is unset.
 * </p>
 *
 * @see BulkOperationResultItem
 * /
[PublicApi]
public interface BulkOperationResult extends OperationResult {
  [ArrayElementType("com.coremedia.cap.content.results.BulkOperationResultItem")]
  /**
   * An array of <code>BulkOperationResultItem</code> objects describing the effect
   * of the operation on individual contents.
   *
   * @see com.coremedia.cap.content.results.BulkOperationResultItem
   * /
  function get results():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.OperationResult"],
      requires: ["com.coremedia.ui.data.OperationResult"]
    };
});
