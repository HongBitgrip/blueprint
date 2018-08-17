Ext.define("com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer", function(RichTextPlainTextTransformer) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.util.EncodingUtil;

/**
 * Transforms a RichText into text stripped by HTML elements and vice versa.<br/>
 * </p><p> new paragraphs and selected other elements will be replaced by Newlines.
 *
 * While converting from plain text to Richtext, only newlines will be replaced by new paragraphs
 * /
public class RichTextPlainTextTransformer {

  private static const*/var markupHeader$static/*:String*/ = '<?xml version="1.0" encoding="utf-8"?>\n'+
          '<div xmlns="http://www.coremedia.com/2003/richtext-1.0" xmlns:xlink="http://www.w3.org/1999/xlink"><p>';/*
  private static const*/var emptyMarkup$static/*:String*/ = '<?xml version="1.0" encoding="utf-8"?>\r\n'+
          '<div xmlns="http://www.coremedia.com/2003/richtext-1.0" xmlns:xlink="http://www.w3.org/1999/xlink"><p/></div>';/*

  private static const*/var markupFooter$static/*:String*/ = '</p></div>';/*

  private static const*/var WHITESPACE$static/*:String*/ = " ";/*
  private static const*/var NEW_LINE$static/*:String*/ = "\n";/*
  private static const*/var IE_NEW_LINE$static/*:String*/ = "\r\n";/*
  private static const*/var NEXT_PARAGRAPH$static/*:String*/ = "</p><p>";/*
  private static const*/var EMPTY_PARAGRAPH$static/*:String*/ = "<p></p>";/*

  /**
   * converts a richtext markup to plaintext
   * @param markup the markup to convert
   * @return the markup stripped as plaintext
   * /
  public static*/ function convertToPlainText$static(markup/*:String*/)/*:String*/ {
    var plainText/*:String*/ = convertHtmlToText$static(markup);
    return plainText;
  }/*

  /**
   * converts plaintext with possible newlines to richtext markup
   * @param plainText the plaintext to convert
   * @return the created markup
   * /
  public static*/ function convertToMarkup$static(plainText/*:String*/)/*:String*/ {

    if (plainText.length == 0){
      return emptyMarkup$static;
    }

    plainText = com.coremedia.ui.util.EncodingUtil.encodeForHTML(plainText);
    plainText = encodeHtmlEntities$static(plainText);

    // Handle IE Newlines
    plainText = plainText.split(IE_NEW_LINE$static).join(NEXT_PARAGRAPH$static);

    // Handle rest of other Newlines
    plainText = plainText.split(NEW_LINE$static).join(NEXT_PARAGRAPH$static);

    // Build valid Markup
    var markup/*:String*/ = markupHeader$static + plainText + markupFooter$static;
    return markup;
  }/*

  private static*/ function convertHtmlToText$static(markup/*:String*/)/*:String*/ {

    if (markup === undefined) {
      return undefined;
    }

    if (markup === null) {
      return null;
    }
    // Strip XML Tag and after that trim the String
    markup = markup.split(/<\?xml.*\?>/g).join("");
    markup = markup['trim']();
    // Replace <p/> with <p><p/> for easier processing
    markup = markup.split(/<p\/>/g).join(EMPTY_PARAGRAPH$static);

    // Replace each </p><p> with \n
    markup = markup.split(/<\/p><p[^<]*>/g).join(NEW_LINE$static);
    //Replace each <tr>, </table>, </ul>, </ol>, <li>, <br>, <br/> with \n
    markup = markup.split(/<(?:\/ul|\/ol|li|br|tr|\/table)(?:\/)?>/g).join(NEW_LINE$static);
    //Replace each <th> and <td> with a whitespace
    markup = markup.split(/<(?:th|\/td)>/g).join(WHITESPACE$static);

    // Strip all other Tags away
    var plainText/*:String*/ = markup.split(/<[^<]*>/g).join("");

    plainText = decodeHTML$static(plainText);
    return plainText;
  }/*

  private static*/ function decodeHTML$static(plainText/*:String*/)/*:**/ {
    plainText =  com.coremedia.ui.util.EncodingUtil.decodeFromHTML(plainText);
    plainText = decodeHtmlEntities$static(plainText);
    return plainText;
  }/*

  private static*/ function encodeHtmlEntities$static(text/*:String*/)/*:String*/ {
    return text.replace(/[\u00A0-\uFFFF]/g, function(c/*:String*/)/*:String*/ {
      return '&' + ('#'+c.charCodeAt(0)) + ';';
    });
  }/*

  private static*/ function decodeHtmlEntities$static(text/*:String*/)/*:String*/ {
    return text
            .replace(/&#(\d+);/g, function(match/*:String*/, num/*:String*/)/*:String*/ {
              return String.fromCharCode(num);
            })
            .replace(/&#x([A-Za-z0-9]+);/g, function(match/*:String*/, num/*:String*/)/*:String*/ {
              return String.fromCharCode(parseInt(num, 16));
            });  }/*

  /**
   * @private
   * /
  public*/ function RichTextPlainTextTransformer$() {
    throw new AS3.Error("Not implemented!");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RichTextPlainTextTransformer$,
      statics: {
        convertToPlainText: convertToPlainText$static,
        convertToMarkup: convertToMarkup$static
      },
      requires: [
        "AS3.Error",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
