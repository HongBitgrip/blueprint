Ext.define("com.coremedia.cms.editor.sdk.util.RichTextUtil", function(RichTextUtil) {/*package com.coremedia.cms.editor.sdk.util {

[PublicApi]
public class RichTextUtil {

  /**
   * Determines, if a given Markup / Richtext content is empty in plaintext view.
   * This means, there is overall no text content within any XML Tags
   * @param markup the markup to check for empty
   * @return if the markup is empty or not
   * /
  public static*/ function isEmpty$static(markup/*:String*/)/*:Boolean*/ {
    if (!markup) {
      return true;
    }
    var plainText/*:String*/ = com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToPlainText(markup);
    return plainText.length === 0;
  }/*

  /**
   * @private
   * /
  public*/ function RichTextUtil$() {
    throw new AS3.Error("Not implemented!");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: RichTextUtil$,
      statics: {isEmpty: isEmpty$static},
      requires: ["AS3.Error"],
      uses: ["com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer"]
    };
});
