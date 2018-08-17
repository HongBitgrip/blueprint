Ext.define("com.coremedia.ui.data.util.FormUtil", function(FormUtil) {/*package com.coremedia.ui.data.util {

import com.coremedia.ui.data.impl.RemoteService;

import js.Element;

public class FormUtil {

  /**
   * Performs a form post.
   * This method creates a hidden form with the given params as input attributes
   * and then submits the form using the given path as form action.
   * /
  public static*/ function submitForm$static(path/*:String*/, params/*:Object = null*/)/*:void*/ {if(arguments.length<=1)params=null;
    var form/*:Element*/ = window.document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    if (!params) {
      params = {};
    }

    // Include CSRF token if it has not been included in the params.
    if (!params[com.coremedia.ui.data.impl.RemoteService.getCsrfTokenParameterName()]) {
      params[com.coremedia.ui.data.impl.RemoteService.getCsrfTokenParameterName()] = com.coremedia.ui.data.impl.RemoteService.getCsrfTokenValue();
    }

    for (var key/*:String*/ in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField/*:Element*/ = window.document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
      }
    }

    window.document.body.appendChild(form);
    form['submit']();
  }/*
}*/function FormUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: FormUtil$,
      statics: {submitForm: submitForm$static},
      uses: ["com.coremedia.ui.data.impl.RemoteService"]
    };
});
