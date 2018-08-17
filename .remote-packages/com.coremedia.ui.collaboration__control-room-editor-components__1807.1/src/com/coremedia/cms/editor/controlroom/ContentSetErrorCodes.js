Ext.define("com.coremedia.cms.editor.controlroom.ContentSetErrorCodes", function(ContentSetErrorCodes) {/*package com.coremedia.cms.editor.controlroom {
/**
 * Error code constants for content set operations
 *
 * @see com.coremedia.ui.data.error.RemoteError#errorCode
 * /
public class ContentSetErrorCodes {

  /**
   * A CapList cannot be created.
   * /
  public static const CANNOT_CREATE_CAP_LIST:String = "CAP-API-40010";

  /**
   * A CapList cannot be created with a given id, because a CapList with the same id already exists.
   * /
  public static const CANNOT_CREATE_CAP_LIST_DUPLICATE_ID:String = "CAP-API-40011";

  /**
   * A CapList cannot be renamed.
   * /
  public static const CANNOT_RENAME_CAP_LIST:String = "CAP-API-40021";

  /**
   * The elements of a CapList cannot be changed.
   * /
  public static const CANNOT_CHANGE_CAP_LIST_ELEMENTS:String = "CAP-API-40022";

  /**
   * A CapList cannot be destroyed.
   * /
  public static const CANNOT_DESTROY_CAP_LIST:String = "CAP-API-40023";

  /**
   * The CapList cannot be read.
   * /
  public static const CANNOT_READ_CAP_LIST:String = "CAP-API-40030";

  /**
   * The CapLists cannot be read.
   * /
  public static const CANNOT_READ_CAP_LISTS:String = "CAP-API-40031";

  /**
   * The timestamp of a CapListRepository cannot be read.
   * /
  public static const CANNOT_READ_CAP_LIST_TIMESTAMP:String = "CAP-API-40032";

  /**
   * The CapList referrers to a CapObject cannot be read.
   * /
  public static const CANNOT_READ_CAP_LIST_REFERRERS:String = "CAP-API-40033";

  /**
   * The access control does not allow access to a CapList.
   * /
  public static const CANNOT_ACCESS_CAP_LIST_NOT_AUTHORIZED:String = "CAP-API-40034";

  /**
   * The access control permissions of a CapList cannot be set.
   * /
  public static const CANNOT_SET_CAP_LIST_PERMISSIONS:String = "CAP-API-40035";

  /**
   * The CapList has been destroyed.
   * /
  public static const CAPLIST_DESTROYED:String = "CAP-API-16151";

  /**
   * @private
   * This class only defines constants.
   * /
  public*/ function ContentSetErrorCodes$() {
    //empty constructor
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentSetErrorCodes$,
      statics: {
        CANNOT_CREATE_CAP_LIST: "CAP-API-40010",
        CANNOT_CREATE_CAP_LIST_DUPLICATE_ID: "CAP-API-40011",
        CANNOT_RENAME_CAP_LIST: "CAP-API-40021",
        CANNOT_CHANGE_CAP_LIST_ELEMENTS: "CAP-API-40022",
        CANNOT_DESTROY_CAP_LIST: "CAP-API-40023",
        CANNOT_READ_CAP_LIST: "CAP-API-40030",
        CANNOT_READ_CAP_LISTS: "CAP-API-40031",
        CANNOT_READ_CAP_LIST_TIMESTAMP: "CAP-API-40032",
        CANNOT_READ_CAP_LIST_REFERRERS: "CAP-API-40033",
        CANNOT_ACCESS_CAP_LIST_NOT_AUTHORIZED: "CAP-API-40034",
        CANNOT_SET_CAP_LIST_PERMISSIONS: "CAP-API-40035",
        CAPLIST_DESTROYED: "CAP-API-16151"
      }
    };
});
