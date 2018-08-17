Ext.define("com.coremedia.cap.content.results.CheckInResultItem", function(CheckInResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.content.Version;
import com.coremedia.cap.user.User;

/**
 * A result item of a CheckInResult. Result codes are taken from the constants defined in CheckInResultCodes.
 *
 * @see CheckInResult
 * @see CheckInResultCodes
 * /
[PublicApi]
public interface CheckInResultItem extends BulkOperationResultItem {

  /**
   * If an approve failed because another user has checked out a document to be approved,
   * this field stores the user object.
   *
   * @see CheckInResultCodes#DOCUMENT_CHECKED_OUT_BY_OTHER
   * /
  function get editor():User;

  /**
   * If an approve suceeded or was not necessary, this field indicates the
   * version to which the content is checked in now.
   *
   * @see CheckInResultCodes#DOCUMENT_CHECKED_IN
   * @see CheckInResultCodes#DOCUMENT_ALREADY_CHECKED_IN
   * /
  function get version():Version;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResultItem"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResultItem"]
    };
});
