Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkDragZone", function(BookmarkDragZone) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;

import ext.dd.DragZone;
import ext.event.Event;

public class BookmarkDragZone extends DragZone {

  private var bookMarkMenuItem:Component;
  private var contentValueExpression:ValueExpression;

  public*/ function BookmarkDragZone$(bookmarkMenuItem/*:Component*/, contentVE/*:ValueExpression*/) {
    this.bookMarkMenuItem$RGr1 = bookmarkMenuItem;
    this.contentValueExpression$RGr1 = contentVE;

    this.super$RGr1(bookmarkMenuItem.getEl(), AS3.cast(Ext.dd.DragZone,{
      ddGroup:"ContentLinkDD",
      scroll:false
    }));
    delete this.invalidHandleTypes["A"];
  }/*

  public*/ function getContent()/*:Content*/ {
    return this.contentValueExpression$RGr1.getValue();
  }/*

  override public*/ function getDragData(e/*:Event*/)/*:Object*/ {
    // create an appropriate drag proxy
    var ddel/*:**/ = window.document.createElement("div");
    ddel.innerHTML = com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback.getHtmlFeedback([this.getContent()]);

    return {
      contents:[this.getContent()],
      draggedItem: this.bookMarkMenuItem$RGr1,
      copy:true,
      ddel:ddel
    };
  }/*

  override public*/ function getRepairXY(e/*:Event*/)/*:Array*/ {
    return this.dragData.repairXY;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DragZone",
      bookMarkMenuItem$RGr1: null,
      contentValueExpression$RGr1: null,
      constructor: BookmarkDragZone$,
      super$RGr1: function() {
        Ext.dd.DragZone.prototype.constructor.apply(this, arguments);
      },
      getContent: getContent,
      getDragData: getDragData,
      getRepairXY: getRepairXY,
      requires: ["Ext.dd.DragZone"],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback"]
    };
});
