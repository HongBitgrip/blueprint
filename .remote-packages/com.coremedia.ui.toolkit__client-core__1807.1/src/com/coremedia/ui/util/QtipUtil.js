Ext.define("com.coremedia.ui.util.QtipUtil", function(QtipUtil) {/*package com.coremedia.ui.util {
import ext.Ext;
import ext.dom.Element;
import ext.tip.QuickTip;
import ext.tip.QuickTipManager;
import ext.util.Format;

public class QtipUtil {
  public static*/ function registerQtipFormatter$static()/*:void*/ {
    Ext.util.Format['qtip'] = QtipUtil.formatQtip;
    Ext.util.Format['unsafeQtip'] = QtipUtil.formatUnsafeQtip;
    Ext.util.Format['StripCodeQtip'] = QtipUtil.formatStripCodeQtip;
  }/*

  public static*/ function formatQtip$static(message/*:String*/)/*:String*/ {
    return QtipUtil.formatUnsafeQtip(com.coremedia.ui.util.EncodingUtil.encodeForHTML(message));
  }/*

  public static*/ function formatUnsafeQtip$static(message/*:String*/)/*:String*/ {
    return 'data-qtip="' + com.coremedia.ui.util.EncodingUtil.encodeForHTML(message) + '"';
  }/*

  public static*/ function formatStripCodeQtip$static(message/*:String*/)/*:String*/ {
    var allowedTags/*:String*/ = '<b><br><u>';
    // only tags in lowercase
    allowedTags = (((allowedTags || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    var tags/*:**/ = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    // no comments, no scripts
    var commentsAndScriptTags/*:**/ = /<!--[\s\S]*?-->|(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig;
    return message.replace(commentsAndScriptTags, '').replace(tags, function (currentString/*:String*/, tagName/*:String*/)/*:String*/ {
      return allowedTags.indexOf('<' + tagName.toLowerCase() + '>') > -1 ? currentString : '';
    });
  }/*

  /**
   * Registers a listener that globally hides the current QuickTip instance when a context menu is opened 
   * /
  public static*/ function registerQtipHider$static()/*:void*/ {
    var body/*:Element*/ = Ext.getBody();
    body.addListener('contextmenu',hideCurrentQtip$static);
  }/*
  
  private static*/ function hideCurrentQtip$static()/*:void*/ {
    var quickTip/*:QuickTip*/ = Ext.tip.QuickTipManager.getQuickTip();
    if(quickTip) {
      quickTip.hide();
    }
  }/*
}*/function QtipUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: QtipUtil$,
      statics: {
        registerQtipFormatter: registerQtipFormatter$static,
        formatQtip: formatQtip$static,
        formatUnsafeQtip: formatUnsafeQtip$static,
        formatStripCodeQtip: formatStripCodeQtip$static,
        registerQtipHider: registerQtipHider$static
      },
      requires: [
        "Ext",
        "Ext.tip.QuickTipManager",
        "Ext.util.Format"
      ],
      uses: ["com.coremedia.ui.util.EncodingUtil"]
    };
});
