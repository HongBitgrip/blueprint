Ext.define("com.coremedia.cms.editor.sdk.util.MessageBoxUtil", function(MessageBoxUtil) {/*package com.coremedia.cms.editor.sdk.util {

import ext.window.MessageBoxWindow;

/**
 * A collection of utilities for message boxes.
 * /
[PublicApi]
public class MessageBoxUtil {

  /**
   * Show an error message box with the given title and message.
   * @param title the error's title
   * @param message the error's message
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showError$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, Ext.window.MessageBox.ERROR, Ext.window.MessageBox.OK, callback, escapeHtml);
  }/*

  /**
   * Show a warning message box with the given title and message.
   * @param title the warning's title
   * @param message the warning's message
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showWarn$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, Ext.window.MessageBox.WARNING, Ext.window.MessageBox.OK, callback, escapeHtml);
  }/*

  /**
   * Show an info message box with the given title and message.
   * @param title the info's title
   * @param message the info's message
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showInfo$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, Ext.window.MessageBox.INFO, Ext.window.MessageBox.OK, callback, escapeHtml);
  }/*

  /**
   * Show a prompt message box with the given title and message. The user can either click
   * the OK or the CANCEL button.
   * @param title the prompt dialog title
   * @param message the prompt dialog message
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showPrompt$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, null, Ext.window.MessageBox.OKCANCEL, callback, escapeHtml);
  }/*

  /**
   * Show a confirmation message box with the given title and message. The user can either click
   * the OK or the CANCEL button. The title of the OK button can be customized.
   * @param title the prompt dialog title
   * @param message the prompt dialog message
   * @param confirmationButtonText the title of the OK Button
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showConfirmation$static(title/*:String*/, message/*:String*/, confirmationButtonText/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,3)){case 3:callback=null;case 4:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, null, Ext.window.MessageBox.OKCANCEL, callback, escapeHtml, false, null, confirmationButtonText);
  }/*

  /**
   * Show a decision message box with the given title and message. The user can either click
   * the YES or the NO button. The title of the YES button can be customized.
   * @param title the prompt dialog title
   * @param message the prompt dialog message
   * @param yesButtonText the title of the YES Button
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function showDecision$static(title/*:String*/, message/*:String*/, yesButtonText/*:String*/, callback/*:Function = null*/, escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,3)){case 3:callback=null;case 4:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, message, null, Ext.window.MessageBox.YESNO, callback, escapeHtml, false, null, null, yesButtonText);
  }/*

  /**
   * Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to JavaScript's
   * prompt). The prompt is a single-line textbox. If a callback function is passed it will be called after the user
   * clicks either button, and the id of the button that was clicked (could also be the top-right close button, which
   * will always report as "cancel") and the text that was entered will be passed as the two parameters to the callback.
   *
   * @param title the prompt dialog title
   * @param message the prompt dialog message
   * @param callback optional callback function which is called when the dialog is dismissed
   * @param value optional default value of the text input element
   * @param escapeHtml optional parameter to tell whether html characters shall be escaped (default = true)
   * /
  public static*/ function prompt$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/, value/*:String = ""*/,
                                escapeHtml/*:Boolean = true*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:value="";case 4:escapeHtml=true;}
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.prompt(title, message, callback, value, escapeHtml);
  }/*
}*/function MessageBoxUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: MessageBoxUtil$,
      statics: {
        showError: showError$static,
        showWarn: showWarn$static,
        showInfo: showInfo$static,
        showPrompt: showPrompt$static,
        showConfirmation: showConfirmation$static,
        showDecision: showDecision$static,
        prompt: prompt$static
      },
      requires: ["Ext.window.MessageBox"],
      uses: ["com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal"]
    };
});
