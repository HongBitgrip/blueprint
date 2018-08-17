Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.HideRichTextToolbarPlugin", function(HideRichTextToolbarPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase;

import ext.Component;
import ext.Plugin;
import ext.toolbar.Toolbar;

/**
 * Hides the toolbar of a <code>RichTextPropertyField</code>.
 * /
public class HideRichTextToolbarPlugin implements Plugin {

  private var component:RichTextPropertyField;

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$FaNY =AS3.as( component,  com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField);
    //we have to wait for the toolbar to be rendered to hide it.
    this.component$FaNY.addListener('afterrender',AS3.bind( this,"hideToolbar$FaNY"));
  }/*

  private*/ function hideToolbar()/*:void*/ {
    this.component$FaNY.removeListener('afterrender',AS3.bind( this,"hideToolbar$FaNY"));
    var toolbar/*:Toolbar*/ = com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.getRichTextAreaToolbar(this.component$FaNY);
    if(toolbar) {
      toolbar.hide();
    }
  }/*
}*/function HideRichTextToolbarPlugin$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      component$FaNY: null,
      init: init,
      hideToolbar$FaNY: hideToolbar,
      constructor: HideRichTextToolbarPlugin$,
      requires: ["ext.Plugin"],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase"
      ]
    };
});
