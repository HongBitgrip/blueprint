Ext.define("com.coremedia.ui.ckeditor.AnchorUtil", function(AnchorUtil) {/*package com.coremedia.ui.ckeditor {

public class AnchorUtil {
  public*/ function AnchorUtil$() {
  }/*

  /**
   * Given a CK editor DOM anchor element (&lt;a&gt;) or its string value, return whether the element
   * uses a link without a URL scheme.
   * /
  public static*/ function isLinkWithoutUrlScheme$static(element/*:**/)/*:Boolean*/ {
    var href/*:String*/ = AnchorUtil.getHref(element);
    return href !== undefined && href.indexOf(':') < 0;
  }/*

  /**
   * Given a CK editor DOM anchor element (&lt;a&gt;) or its string value, return whether the element
   * uses a link with a URL scheme.
   * /
  public static*/ function isLinkWithUrlScheme$static(element/*:**/)/*:Boolean*/ {
    var href/*:String*/ = AnchorUtil.getHref(element);
    return href !== undefined && href.indexOf(':') >= 0;
  }/*

  /**
   * Given a CK editor DOM anchor element (&lt;a&gt;) or its string value, return whether the element
   * uses a link that targets an HTML anchor (href starts with '#').
   * /
  public static*/ function isLinkAnchorReference$static(element/*:**/)/*:Boolean*/ {
    var href/*:String*/ = AnchorUtil.getHref(element);
    return href !== undefined && href.indexOf('#') == 0;
  }/*

  /**
   * Given a CK editor DOM anchor element (&lt;a&gt;) or its string value, return whether the element
   * uses a link that does not target an HTML anchor (href does not start with '#').
   * /
  public static*/ function isLinkNoAnchorReference$static(element/*:**/)/*:Boolean*/ {
    var href/*:String*/ = AnchorUtil.getHref(element);
    return href !== undefined && href.indexOf('#') != 0;
  }/*

  /**
   * Given a CK editor DOM anchor element (&lt;a&gt;) or its string value, return the href attribute string
   * or undefined, if the href attribute is not present.
   * /
  public static*/ function getHref$static(element/*:**/)/*:String*/ {
    if (typeof element === 'string') {
      return element;
    }
    if (element && element['hasAttribute']('_xlink:href')) {
      return element.getAttribute('_xlink:href');
    }
    return undefined;
  }/*

  /**
   * Given a CK editor selection, return the selected anchor element (&lt;a&gt;).
   *
   * @return the selected anchor element
   * /
  public static*/ function getSelectedAnchor$static(selection/*:**/)/*:Object*/ {
    var range/*:**/ = selection.getRanges(true)[0];
    if (range){
      range.shrink(CKEDITOR['SHRINK_TEXT']);
      var root/*:**/ = range.getCommonAncestor();
      return root.getAscendant('a', true);
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: AnchorUtil$,
      statics: {
        isLinkWithoutUrlScheme: isLinkWithoutUrlScheme$static,
        isLinkWithUrlScheme: isLinkWithUrlScheme$static,
        isLinkAnchorReference: isLinkAnchorReference$static,
        isLinkNoAnchorReference: isLinkNoAnchorReference$static,
        getHref: getHref$static,
        getSelectedAnchor: getSelectedAnchor$static
      }
    };
});
