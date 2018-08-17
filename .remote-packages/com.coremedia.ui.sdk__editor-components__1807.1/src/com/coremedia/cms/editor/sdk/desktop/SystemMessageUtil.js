Ext.define("com.coremedia.cms.editor.sdk.desktop.SystemMessageUtil", function(SystemMessageUtil) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.util.EncodingUtil;

import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.SystemMessages')]
public class SystemMessageUtil {
  public static*/ function attachSystemMessageListener$static()/*:void*/ {
    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).addMessageListener("systemMessage", showSystemMessage$static);
  }/*

  private static*/ function showSystemMessage$static(message/*:Message*/)/*:void*/ {
    var messageType/*:String*/ = message.body['type'];
    var messageArguments/*:Array*/ = (message.body['arguments'] || []).map(function(argument/*:**/)/*:String*/ {
      return Ext.util.Format.htmlEncode(String(argument));
    });

    var titlePattern/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.SystemMessages', messageType + '_title');
    var title/*:String*/ = com.coremedia.cms.editor.sdk.util.FormatUtil.format.apply(null, [titlePattern].concat(messageArguments));
    var messagePattern/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.SystemMessages', messageType + '_text');
    var text/*:String*/ = com.coremedia.cms.editor.sdk.util.FormatUtil.format.apply(null, [messagePattern].concat(messageArguments));

    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(title, text, null, false);
  }/*

}*/function SystemMessageUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SystemMessageUtil$,
      statics: {attachSystemMessageListener: attachSystemMessageListener$static},
      requires: [
        "Ext.util.Format",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.SystemMessages_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.FormatUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
