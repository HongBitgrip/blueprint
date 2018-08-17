Ext.define("com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPluginBase", function(RichTextDropTargetPluginBase) {/*package com.coremedia.cms.editor.sdk.dragdrop {

import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;

import ext.Component;
import ext.Plugin;

public class RichTextDropTargetPluginBase implements Plugin {

  private var component:Component;
  private var imageContentType:String;
  private var richTextShimDropTarget:RichTextAreaDropTarget;

  /**
   * A plugin to create a drop target for the richtext shim.
   *
   * @param config the config object
   * /
  public*/ function RichTextDropTargetPluginBase$(config/*:RichTextDropTargetPlugin = null*/) {if(arguments.length<=0)config=null;
    this.imageContentType$uXo_ = AS3.getBindable(config,"imageContentType");
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is( component,  com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea)) {
      this.component$uXo_ = component;

      if (AS3.cast(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea,component).isCKEditorReady()) {
        this.createDropTarget$uXo_();
      } else {
        component.addListener('ckready',AS3.bind(this,"createDropTarget$uXo_"));
      }

      component.addListener('beforedestroy',AS3.bind( this,"onBeforeDestroyCmp$uXo_"));
    }
  }/*

  private*/ function onBeforeDestroyCmp()/*:void*/ {
    this.richTextShimDropTarget$uXo_ && this.richTextShimDropTarget$uXo_.unreg();
    this.component$uXo_.removeListener('ckready',AS3.bind( this,"createDropTarget$uXo_"));
    this.component$uXo_ = null;
  }/*

  private*/ function createDropTarget()/*:void*/ {
    this.richTextShimDropTarget$uXo_ = new com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget(AS3.cast(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea,this.component$uXo_));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      component$uXo_: null,
      imageContentType$uXo_: null,
      richTextShimDropTarget$uXo_: null,
      constructor: RichTextDropTargetPluginBase$,
      init: init,
      onBeforeDestroyCmp$uXo_: onBeforeDestroyCmp,
      createDropTarget$uXo_: createDropTarget,
      requires: ["ext.Plugin"],
      uses: [
        "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea",
        "com.coremedia.cms.editor.sdk.dragdrop.RichTextAreaDropTarget"
      ]
    };
});
