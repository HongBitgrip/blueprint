Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes", function(PreviewMessageTypes) {/*package com.coremedia.cms.editor.sdk.preview {
public class PreviewMessageTypes {
  // Events from the preview iframe

  public static const READY:String = 'ready';
  public static const UPDATE:String = 'update';
  public static const RESIZE:String = 'resize';
  public static const SCROLL:String = 'scroll';
  public static const CLICK:String = 'click';
  public static const HOVER:String = 'hover';

  // Commands understood by the preview iframe

  public static const DIRECT_UPDATE:String = 'updateElementsText';
  public static const HIGHLIGHT_ELEMENTS:String = "highlightElements";
  public static const SECONDARY_HIGHLIGHT_ELEMENTS:String = "secondaryHighlightElements";
  public static const RETRIEVE_DOCUMENT_DIMENSIONS:String = "retrieveDocumentDimensions";
  public static const RETRIEVE_SCROLL_POSITION:String = "retrieveScrollPosition";
  public static const RETRIEVE_GLOBAL_VARIABLE:String = "retrieveGlobalVariable";
  public static const RETRIEVE_DATA_ATTRIBUTE:String = "retrieveDataAttribute";
  public static const SCROLL_ELEMENTS_INTO_VIEW:String = "scrollElementsIntoView";
  public static const SET_SCROLL_POSITION:String = "setScrollPosition";
  public static const INIT:String = "init";
  public static const INIT_CONFIRM:String = "initConfirm";
  public static const ENABLE_DOCUMENT_SCROLL:String = "enableDocumentScroll";

  public*/ function PreviewMessageTypes$() {
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PreviewMessageTypes$,
      statics: {
        READY: 'ready',
        UPDATE: 'update',
        RESIZE: 'resize',
        SCROLL: 'scroll',
        CLICK: 'click',
        HOVER: 'hover',
        DIRECT_UPDATE: 'updateElementsText',
        HIGHLIGHT_ELEMENTS: "highlightElements",
        SECONDARY_HIGHLIGHT_ELEMENTS: "secondaryHighlightElements",
        RETRIEVE_DOCUMENT_DIMENSIONS: "retrieveDocumentDimensions",
        RETRIEVE_SCROLL_POSITION: "retrieveScrollPosition",
        RETRIEVE_GLOBAL_VARIABLE: "retrieveGlobalVariable",
        RETRIEVE_DATA_ATTRIBUTE: "retrieveDataAttribute",
        SCROLL_ELEMENTS_INTO_VIEW: "scrollElementsIntoView",
        SET_SCROLL_POSITION: "setScrollPosition",
        INIT: "init",
        INIT_CONFIRM: "initConfirm",
        ENABLE_DOCUMENT_SCROLL: "enableDocumentScroll"
      }
    };
});
