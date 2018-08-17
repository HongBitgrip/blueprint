Ext.define("com.coremedia.personalization.ui.util.RuleXMLCoDec", function(RuleXMLCoDec) {/*package com.coremedia.personalization.ui.util {
import com.coremedia.ui.util.IdUtil;

/**
 * Utility class used to encode and decode a string in rule-language syntax to
 * the internal XML format defined by coremedia-selectionrules-1.0.xsd.
 * /
public class RuleXMLCoDec {
  // used to decode the content element in rulesFromXML
  //<content\s+xlink:href="(?:[^"]*?(?:content|resources)/(\d+)|)?"\s* />
  private static const*/var contentRegExpString$static/*:String*/ = '<content\\s+xlink:href="(?:[^"]*?(?:content|resources)/(\\d+))?"\\s*/>';/*
  private static const*/var contentRegExp$static/*:RegExp*/;/* =*/function contentRegExp$static_(){contentRegExp$static=( new RegExp(contentRegExpString$static));};/*
  private static const*/var contentRegExpGlobal$static/*:RegExp*/;/* =*/function contentRegExpGlobal$static_(){contentRegExpGlobal$static=( new RegExp(contentRegExpString$static, "g"));};/*

  public static const INTERNAL_CONTENT_ID_PREFIX:String = "content:";

  /**
   * Encodes a string containing a rule list into its XML representation.
   *
   * @param rules the rules to decode
   * @return the corresponding XML string
   * /
  public static*/ function xmlFromRules$static(rules/*:String*/)/*:String*/ {
    var result/*:String*/ = '<?xml version="1.0"?><rules version="1.0" xmlns="http://www.coremedia.com/2010/selectionrules" ' +
            'xmlns:xlink="http://www.w3.org/1999/xlink">';
    if (rules != null && rules.length > 0) {
      var rulesXML/*:String*/ = xmlEncode$static(rules);
      rulesXML = replaceContents$static(rulesXML);
      result += rulesXML;
    }
    result += '</rules>';
    return result;
  }/*

  private static*/ function xmlEncode$static(str/*:String*/)/*:String*/ {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }/*

  private static*/ function replaceContents$static(rulesXML/*:String*/)/*:String*/ {
    return rulesXML.replace(/content:(-?\d+)/g, function(str/*:String*/)/*:String*/ {/*
      const*/var match/*:Array*/ = str.match(/content:(-?\d+)/);/*
      // if the id is negative ("no content"), we use 0 as the content id- ok, that's a somewhat ugly hack,
      // but nobody is going to select the trash anyway
      const*/var link/*:String*/ = com.coremedia.ui.util.IdUtil.formatContentId(match[1] > 0 ? match[1] : 0);
      return '<content xlink:href="' + link + '"/>';});
  }/*

  /**
   * Decodes the XML representation of a rules string to a string in the rules language.
   *
   * @param xml the XML representing the rule list
   *
   * @return the decoded rule list
   * /
  public static*/ function rulesFromXML$static(xml/*:String*/)/*:String*/ {
    var result/*:String*/ = xml;
    if (xml) {
      result = replaceContentTags$static(result);
      result = removeXMLTags$static(result);
      result = xmlDecode$static(result);
      result = trim$static(result);
    }
    return result;
  }/*

  private static*/ function trim$static(str/*:String*/)/*:String*/ {
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
  }/*

  private static*/ function removeXMLTags$static(str/*:String*/)/*:String*/ {
    return str.replace(/<.*?>/g, "");
  }/*

  private static*/ function replaceContentTags$static(str/*:String*/)/*:String*/ {
    return str.replace(contentRegExpGlobal$static, function(str/*:String*/)/*:String*/ {/*
      const*/var match/*:Array*/ = contentRegExp$static.exec(str);
      return RuleXMLCoDec.INTERNAL_CONTENT_ID_PREFIX + (match[1] > 0 ? match[1] : String(com.coremedia.ui.util.IdUtil.MISSING_CONTENT_ID));
    });
  }/*

  private static*/ function xmlDecode$static(str/*:String*/)/*:String*/ {
    return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }/*
}*/function RuleXMLCoDec$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RuleXMLCoDec$,
      statics: {
        contentRegExp: undefined,
        contentRegExpGlobal: undefined,
        INTERNAL_CONTENT_ID_PREFIX: "content:",
        xmlFromRules: xmlFromRules$static,
        rulesFromXML: rulesFromXML$static,
        __initStatics__: function() {
          contentRegExp$static_();
          contentRegExpGlobal$static_();
        }
      },
      requires: ["com.coremedia.ui.util.IdUtil"]
    };
});
