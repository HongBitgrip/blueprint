Ext.define("com.coremedia.ui.components.ResizableTextAreaBase", function(ResizableTextAreaBase) {/*package com.coremedia.ui.components {
import ext.event.Event;

public class ResizableTextAreaBase extends StatefulTextArea  {

  public*/ function ResizableTextAreaBase$(config/*:ResizableTextAreaBase = null*/) {if(arguments.length<=0)config=null;
    this.super$bRD2(config);
  }/*

  override protected*/ function beforeFocus(e/*:Event*/)/*:void*/ {
    com.coremedia.ui.components.StatefulTextArea.prototype.beforeFocus.call(this,e);
    AS3.setBindable(this,"highlighted" , true);
  }/*

  override protected*/ function postBlur(e/*:Event*/)/*:void*/ {
    AS3.setBindable(this,"highlighted" , false);
    com.coremedia.ui.components.StatefulTextArea.prototype.postBlur.call(this,e);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulTextArea",
      constructor: ResizableTextAreaBase$,
      super$bRD2: function() {
        com.coremedia.ui.components.StatefulTextArea.prototype.constructor.apply(this, arguments);
      },
      beforeFocus: beforeFocus,
      postBlur: postBlur,
      requires: ["com.coremedia.ui.components.StatefulTextArea"]
    };
});
