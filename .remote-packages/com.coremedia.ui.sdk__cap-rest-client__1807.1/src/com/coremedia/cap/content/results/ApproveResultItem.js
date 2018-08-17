Ext.define("com.coremedia.cap.content.results.ApproveResultItem", function(ApproveResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.user.User;

/**
 * A result item of an ApproveResult. Result codes are taken from the constants defined in ApproveResultCodes.
 *
 * @see ApproveResult
 * @see ApproveResultCodes
 * /
[PublicApi]
public interface ApproveResultItem extends BulkOperationResultItem {

  /**
   * If an approve failed because another user has checked out a document to be approved,
   * this field stores the user object.
   *
   * @see ApproveResultCodes#DOCUMENT_CHECKED_OUT_BY_OTHER
   * /
  function get editor():User;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResultItem"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResultItem"]
    };
});
