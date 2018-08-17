Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbnailDragZone", function(ThumbnailDragZone) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail {

import com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback;
import com.coremedia.ui.store.BeanRecord;

import ext.Ext;

import ext.data.Model;
import ext.dd.DragZone;
import ext.event.Event;
import ext.view.DataView;

import js.Element;
import js.HTMLElement;

public class ThumbnailDragZone extends DragZone {

  private var dataView:DataView;
  private var ddHtmlFeedbackFunction:Function;
  private var ddel:Element;

  /**
   * @param dataView the data view to attach the drag zone to
   * @param ddGroup the dd group
   * @param ddHtmlFeedbackFunction
   * /
  public*/ function ThumbnailDragZone$(dataView/*:ThumbDataViewBase*/, ddGroup/*:String*/, ddHtmlFeedbackFunction/*:Function*/) {
    this.super$3uav(dataView.getEl(), AS3.cast(Ext.dd.DragZone,{
      ddGroup: ddGroup,
      scroll: false
    }));
    this.dataView$3uav = dataView;
    this.ddHtmlFeedbackFunction$3uav = ddHtmlFeedbackFunction || com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback.getHtmlFeedback;
    this.ddel$3uav = window.document.createElement("div");
  }/*

  override public*/ function getDragData(e/*:Event*/)/*:Object*/ {
    var item/*:HTMLElement*/ = e.getTarget(this.dataView$3uav.itemSelector);

    // @see: Ext.view.DragZone#getDragData
    if (item) {
      return {
        copy: true,
        event: e,
        view: this.dataView$3uav,
        ddel: this.ddel$3uav,
        item: item,
        records: this.dataView$3uav.getSelectionModel().getSelection(),
        fromPosition: Ext.fly(item).getXY()
      };
    }
  }/*

  override public*/ function onInitDrag(x/*:Number*/, y/*:Number*/)/*:Boolean*/ {
    var result/*:Boolean*/ = Ext.dd.DragZone.prototype.onInitDrag.call(this,x, y);
    if (result) {

      // @see: Ext.view.DragZone#onInitDrag
      // Update the selection to match what would have been selected if the user had
      // done a full click on the target node rather than starting a drag from it
      var record/*:Model*/ = this.dataView$3uav.getRecord(this.dragData.item);
      if (!this.dataView$3uav.getSelectionModel().isSelected(record)) {
        // TODO: ExtJS 6 API
        this.dataView$3uav.getSelectionModel()["selectWithEvent"](record, this.dragData.event);
      }
      var selection/*:Array*/ = this.dataView$3uav.getSelectionModel().getSelection();
      if (selection.length == 0) {
        return false;
      }
      var beans/*:Array*/ = this.getBeans$3uav(selection, false);

      // create an appropriate drag proxy
      this.getProxy().update(this.ddHtmlFeedbackFunction$3uav(beans));

      this.dragData.contents = beans;
      this.dragData.records = this.getBeans$3uav(selection, true);

      return true;
    }
    return false;
  }/*

  /**
   * Called before a repair of an invalid drop to get the XY to animate to. Returns <code>this.dragData.repairXY</code>.
   *
   * @param e The mouse up event.
   * @return The xy location (e.g. <code>[100, 200]</code>)
   * /
  override public*/ function getRepairXY(e/*:Event*/)/*:Array*/ {
    return this.dragData ? this.dragData.fromPosition : null;
  }/*

  /**
   * For a drag info, we have to differ between the records and the contents, both build from the selection.
   * @param records the current selection
   * @param asRecord true to return the records
   * /
  private*/ function getBeans(records/*:Array*/, asRecord/*:Boolean*/)/*:Array*/ {
    var beans/*:Array*/ = [];
    records.forEach(function (record/*:Model*/)/*:void*/ {
      if (AS3.is(record,  com.coremedia.ui.store.BeanRecord)) {
        if(asRecord) {
          beans.push(record);
        }
        else {
          beans.push((AS3.as(record,  com.coremedia.ui.store.BeanRecord)).getBean());
        }
      }
    });
    return beans;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DragZone",
      dataView$3uav: null,
      ddHtmlFeedbackFunction$3uav: null,
      ddel$3uav: null,
      constructor: ThumbnailDragZone$,
      super$3uav: function() {
        Ext.dd.DragZone.prototype.constructor.apply(this, arguments);
      },
      getDragData: getDragData,
      onInitDrag: onInitDrag,
      getRepairXY: getRepairXY,
      getBeans$3uav: getBeans,
      requires: [
        "Ext",
        "Ext.dd.DragZone",
        "com.coremedia.ui.store.BeanRecord"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback"]
    };
});
