Ext.define("com.coremedia.cap.content.ContentErrorCodes", function(ContentErrorCodes) {/*package com.coremedia.cap.content {

/**
 * Error code constants for content operations
 *
 * @see com.coremedia.ui.data.error.RemoteError#errorCode
 * /
[PublicApi]
public class ContentErrorCodes  {

  /**
   * The given blob does not match the document type's mime type.
   * /
  public static const BLOB_MIME_CONTENT_TYPE_MISMATCH:String = "CAP-API-20016";

  /**
   * The Content is checked out by another user.
   * /
  public static const CHECKED_OUT_BY_OTHER:String = "CAP-API-20165";

  /**
   * The Content is checked out by another user.
   * /
  public static const LOCKED_BY_WORKFLOW:String = "CAP-API-20166";

  /**
   * A name for a Content already exists.
   * /
  public static const DUPLICATE_NAME:String = "CAP-API-20300";

  /**
   * The given name is rejected by the content management system.
   * /
  public static const INVALID_NAME:String = "CAP-API-20301";

  /**
   * The given XML property value is rejected by the content management system.
   * /
  public static const INVALID_XML_PROPERTY_VALUE:String = "CAP-API-16176";

  /**
   * Some list value exceeds its specified cardinality.
   * /
  public static const MAX_CARDINALITY_EXCEEDED:String = "CAP-API-16179";

  /**
   * The current user is not authorized to perform the requested operation.
   * /
  public static const NOT_AUTHORIZED:String = "CAP-API-20250";

  /**
   * The content item has been marked for deletion and can not be checked out.
   * /
  public static const MARKED_FOR_DELETION:String = "CAP-API-20254";

  /**
   * String too long
   * /
  public static const STRING_TOO_LONG:String = "CAP-API-16174";

  /**
   * @private
   * This class only defines constants.
   * /
  public*/ function ContentErrorCodes$() {}/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ContentErrorCodes$,
      statics: {
        BLOB_MIME_CONTENT_TYPE_MISMATCH: "CAP-API-20016",
        CHECKED_OUT_BY_OTHER: "CAP-API-20165",
        LOCKED_BY_WORKFLOW: "CAP-API-20166",
        DUPLICATE_NAME: "CAP-API-20300",
        INVALID_NAME: "CAP-API-20301",
        INVALID_XML_PROPERTY_VALUE: "CAP-API-16176",
        MAX_CARDINALITY_EXCEEDED: "CAP-API-16179",
        NOT_AUTHORIZED: "CAP-API-20250",
        MARKED_FOR_DELETION: "CAP-API-20254",
        STRING_TOO_LONG: "CAP-API-16174"
      }
    };
});
