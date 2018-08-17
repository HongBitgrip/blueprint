Ext.define("com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal", function(MessageBoxUtilInternal) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.MessageBox;
import ext.form.field.TextField;


public class MessageBoxUtilInternal {
  /**
   * Show a wait dialog box with the given text.
   * @param title the wait dialog title
   * @param message the wait dialog text
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * @param paragraphWrap whether message parts separated by newlines should be wrapped in p-elements
   * /
  public static*/ function showWait$static(title/*:String*/, message/*:String*/, escapeHtml/*:Boolean = true*/, paragraphWrap/*:Boolean = false*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:escapeHtml=true;case 3:paragraphWrap=false;}
    var processedTitle/*:String*/ = processTitle$static(title, escapeHtml);
    var processedMsg/*:String*/ = processMessage$static(message, escapeHtml, paragraphWrap);

    Ext.MessageBox.wait(processedMsg, processedTitle, {
      minWidth: 300
    });
  }/*

  /**
   * Hides the message box if it is displayed.
   * /
  public static*/ function hide$static()/*:void*/ {
    Ext.MessageBox.hide();
  }/*

  /**
   * Return true, if the given message is currently begin shown in the message box.
   * @param title the dialog title
   * @param message the dialog text
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * @param paragraphWrap whether message parts separated by newlines should be wrapped in p-elements
   * /
  public static*/ function isShowing$static(title/*:String*/, message/*:String*/, escapeHtml/*:Boolean = true*/, paragraphWrap/*:Boolean = false*/)/*:Boolean*/ {switch(Math.max(arguments.length,2)){case 2:escapeHtml=true;case 3:paragraphWrap=false;}
    var processedTitle/*:String*/ = processTitle$static(title, escapeHtml);
    var processedMsg/*:String*/ = processMessage$static(message, escapeHtml, paragraphWrap);

    return Ext.MessageBox.isVisible() && AS3.getBindable(Ext.MessageBox,"title","DUMMY") === processedTitle && Ext.MessageBox['msg'] && Ext.MessageBox['msg'].html === processedMsg;
  }/*

  /**
   * Hides the message box if it is displayed and shows the given title and message.
   * @param title the dialog title
   * @param message the dialog text
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * @param paragraphWrap whether message parts separated by newlines should be wrapped in p-elements
   * /
  public static*/ function hideIf$static(title/*:String*/, message/*:String*/, escapeHtml/*:Boolean = true*/, paragraphWrap/*:Boolean = false*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:escapeHtml=true;case 3:paragraphWrap=false;}
    if (MessageBoxUtilInternal.isShowing(title, message, escapeHtml, paragraphWrap)) {
      Ext.MessageBox.hide();
    }
  }/*

  //noinspection OverlyComplexFunctionJS
  /**
   * Show a message box with the given title and message.
   * /
  public static*/ function show$static(title/*:String*/, message/*:String*/, icon/*:String*/, buttons/*:Object*/, callback/*:Function = null*/,
                              escapeHtml/*:Boolean = true*/, paragraphWrap/*:Boolean = false*/, containerCls/*:String = null*/,
                              okButtonText/*:String = null*/, yesButtonText/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,4)){case 4:callback=null;case 5:escapeHtml=true;case 6:paragraphWrap=false;case 7:containerCls=null;case 8:okButtonText=null;case 9:yesButtonText=null;}
    var processedTitle/*:String*/ = processTitle$static(title, escapeHtml);
    var processedMsg/*:String*/ = processMessage$static(message, escapeHtml, paragraphWrap);

    // since EXT6 we need BOTH 'buttons' parameter as number like MessageBoxWindow.OK
    // and buttonText as Object like {yes : "Ja, no : "Nein"}
    var buttonNumber/*:Number*/ = Ext.isNumber(buttons) ?AS3.as( buttons,  Number) : undefined;
    var buttonText/*:Object*/ = Ext.isObject(buttons) ? buttons : {};
    if (okButtonText) {
      buttonText.ok = okButtonText;
    }
    if (yesButtonText) {
      buttonText.yes = yesButtonText;
    }

    /**
     * When a message box is shown for a modal window, it gets a lower z-index than the modal window and is displayed behind it.
     * Initially the z-index for the message box is calculated correctly, then a "toFront" call for the modal window changes it.
     * Invoking the message box later ensures that it is shown last and displayed correctly on top of the modal window.
     */
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      Ext.MessageBox.show({
        title: processedTitle,
        msg: processedMsg,
        icon: icon,
        alwaysOnTop: true,
        buttons: buttonNumber,
        buttonText: buttonText,
        minWidth: 300,
        fn: callback,
        cls: containerCls
      });
    });
  }/*

  //noinspection OverlyComplexFunctionJS
  /**
   * Show a message prompt with the given title and message.
   * /
  public static*/ function prompt$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, value/*:String = ""*/,
                                escapeHtml/*:Boolean = true*/, paragraphWrap/*:Boolean = false*/, multiline/*:Object = false*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:value="";case 4:escapeHtml=true;case 5:paragraphWrap=false;case 6:multiline=false;}
    var processedTitle/*:String*/ = processTitle$static(title, escapeHtml);
    var processedMsg/*:String*/ = processMessage$static(message, escapeHtml, paragraphWrap);

    var textField/*:TextField*/ = (AS3.as(Ext.MessageBox['textField'],  Ext.form.field.Text));
    textField.selectOnFocus = true; // required to select text
    Ext.MessageBox.prompt(processedTitle, processedMsg, callback, window, multiline, value);
  }/*

  private static*/ function processMessage$static(message/*:String*/, escapeHtml/*:Boolean*/, paragraphWrap/*:Boolean*/)/*:String*/ {
    var processedMsg/*:String*/ = escapeHtml ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(message) : message;
    if (paragraphWrap) {
      var lineBreakPattern/*:RegExp*/ = /\n/g;
      processedMsg = "<p>" + processedMsg.replace(lineBreakPattern, "</p><p>") + "</p>";
    }
    return processedMsg;
  }/*

  private static*/ function processTitle$static(title/*:String*/, escapeHtml/*:Boolean*/)/*:String*/ {
    var processedTitle/*:String*/ = escapeHtml ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(title) : title;
    return processedTitle;
  }/*
}*/function MessageBoxUtilInternal$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: MessageBoxUtilInternal$,
      statics: {
        showWait: showWait$static,
        hide: hide$static,
        isShowing: isShowing$static,
        hideIf: hideIf$static,
        show: show$static,
        prompt: prompt$static
      },
      requires: [
        "Ext",
        "Ext.form.field.Text",
        "Ext.window.MessageBox",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.EventUtil"
      ]
    };
});
