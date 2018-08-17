Ext.define("com.coremedia.cap.content.results.CopyResultItem", function(CopyResultItem) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.content.Content;

/**
 * A result item of a CopyResult. Result codes are taken from the constants defined in CopyResultCodes.
 *
 * @see CopyResult
 * @see CopyResultCodes
 * /
[PublicApi]
public interface CopyResultItem extends BulkOperationResultItem {

  /**
   * The newly created content, or undefined if a content could not be copied.
   * /
  function get createdContent():Content;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResultItem"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResultItem"]
    };
});
