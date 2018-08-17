Ext.define("com.coremedia.cap.content.results.RevertResultItem", function(RevertResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.user.User;

/**
 * A result item of a RevertResult. Result codes are taken from the constants defined in RevertResultCodes.
 *
 * @see RevertResult
 * @see RevertResultCodes
 * /
[PublicApi]
public interface RevertResultItem extends BulkOperationResultItem {

  /**
   * If a revert failed because another user has checked out a document to be reverted,
   * this field stores the user object.
   *
   * @see RevertResultCodes#DOCUMENT_CHECKED_OUT_BY_OTHER
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
