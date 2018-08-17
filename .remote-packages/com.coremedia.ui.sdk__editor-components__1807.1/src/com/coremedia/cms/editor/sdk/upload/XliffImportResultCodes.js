Ext.define("com.coremedia.cms.editor.sdk.upload.XliffImportResultCodes", function(XliffImportResultCodes) {/*package com.coremedia.cms.editor.sdk.upload {

public class XliffImportResultCodes {

  /**
   * failed for unknown reasons
   * /
  public static const FAILED:String = "FAILED";
  /**
   * the target content does not exist
   * /
  public static const DOES_NOT_EXIST:String = "DOES_NOT_EXIST";
  /**
   * the master document has changed
   * /
  public static const MASTER_CHANGED:String = "MASTER_CHANGED";
  /**
   * the translation of a more recent version of the master has already been imported
   * /
  public static const MASTER_VERSION_OUTDATED:String = "MASTER_VERSION_OUTDATED";
  /**
   * a content id given in the XLIFF was invalid
   * /
  public static const INVALID_CONTENT_ID:String = "INVALID_CONTENT_ID";
  /**
   * a content that should receive a translation is already checked out
   * /
  public static const ALREADY_CHECKED_OUT:String = "ALREADY_CHECKED_OUT";
  /**
   * a string value is too long
   * /
  public static const STRING_TOO_LONG:String = "STRING_TOO_LONG";
  /**
   * a translation was provided for a property that does not exist
   * /
  public static const NO_SUCH_PROPERTY:String = "NO_SUCH_PROPERTY";
  /**
   * more translations than allowed were given for a string list property
   * /
  public static const STRING_LIST_TOO_LONG:String = "STRING_LIST_TOO_LONG";
  /**
   * markup generated from an XLIFF is not valid
   * /
  public static const INVALID_MARKUP:String = "INVALID_MARKUP";
  /**
   * the structure of the XLIFF file is incorrect
   * /
  public static const INVALID_XLIFF:String = "INVALID_XLIFF";
  /**
   * import succeeded
   * /
  public static const SUCCESS:String = "SUCCESS";
  /**
   * a content with the translated name already exists; the name was disambiguated
   * /
  public static const DUPLICATE_NAME:String = "DUPLICATE_NAME";
  /**
   * an internal xlink could not resolved or localized if localizable
   * /
  public static const INVALID_INTERNAL_LINK:String = "INVALID_INTERNAL_LINK";
  /**
   * the target-language defined in the XLIFF file does not match the value of the locale property of the target content
   * /
  public static const INVALID_LOCALE:String = "INVALID_LOCALE";
  /**
   * the translation unit target was empty
   * /
  public static const EMPTY_TRANSUNIT_TARGET:String = "EMPTY_TRANSUNIT_TARGET";
  /**
   * the translation unit target was empty for a whitespace-only source
   * /
  public static const EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE:String = "EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE";
}*/function XliffImportResultCodes$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: XliffImportResultCodes$,
      statics: {
        FAILED: "FAILED",
        DOES_NOT_EXIST: "DOES_NOT_EXIST",
        MASTER_CHANGED: "MASTER_CHANGED",
        MASTER_VERSION_OUTDATED: "MASTER_VERSION_OUTDATED",
        INVALID_CONTENT_ID: "INVALID_CONTENT_ID",
        ALREADY_CHECKED_OUT: "ALREADY_CHECKED_OUT",
        STRING_TOO_LONG: "STRING_TOO_LONG",
        NO_SUCH_PROPERTY: "NO_SUCH_PROPERTY",
        STRING_LIST_TOO_LONG: "STRING_LIST_TOO_LONG",
        INVALID_MARKUP: "INVALID_MARKUP",
        INVALID_XLIFF: "INVALID_XLIFF",
        SUCCESS: "SUCCESS",
        DUPLICATE_NAME: "DUPLICATE_NAME",
        INVALID_INTERNAL_LINK: "INVALID_INTERNAL_LINK",
        INVALID_LOCALE: "INVALID_LOCALE",
        EMPTY_TRANSUNIT_TARGET: "EMPTY_TRANSUNIT_TARGET",
        EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE: "EMPTY_TRANSUNIT_TARGET_FOR_WHITESPACE_SOURCE"
      }
    };
});
