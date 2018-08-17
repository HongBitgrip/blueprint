Ext.define("com.coremedia.cap.content.results.DeleteResultItem", function(DeleteResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.user.User;

/**
 * A result item of a DeleteResult. Result codes are taken from the constants defined in DeleteResultCodes.
 *
 * @see DeleteResult
 * @see DeleteResultCodes
 * /
[PublicApi]
public interface DeleteResultItem extends BulkOperationResultItem {

  /**
   * If a delete failed because another user has checked out a document to be deleted,
   * this field stores the user object.
   *
   * @see DeleteResultCodes#DOCUMENT_CHECKED_OUT_BY_OTHER
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
