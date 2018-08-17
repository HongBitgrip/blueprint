Ext.define("com.coremedia.cap.content.results.PublicationResultItem", function(PublicationResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.user.User;

/**
 * A result item of a PublicationResult. Result codes are taken from the constants defined in PublicationResultCodes.
 *
 * @see PublicationResult
 * @see PublicationResultCodes
 * /
[PublicApi]
public interface PublicationResultItem extends BulkOperationResultItem {
  /**
   * If a publication failed because another user has checked out a document to be published,
   * this field stores the user object.
   *
   * @see PublicationResultCodes#DOCUMENT_CHECKED_OUT_BY_OTHER
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
