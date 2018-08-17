Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone", function(LinkListViewDragZone) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Store;

import ext.view.TableView;

import ext.view.ViewDragZone;

[PublicApi]
public class LinkListViewDragZone extends ViewDragZone {

  [Bindable]
  public var ddGroups:Array;

  [Bindable]
  public var htmlFeedback:Function;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AbstractItemsPlugin
   * /
  public*/ function LinkListViewDragZone$(config/*:LinkListViewDragZone = null*/) {var this$=this;if(arguments.length<=0)config=null;
    AS3.setBindable(this,"ddGroups" , AS3.getBindable(config,"ddGroups") || []);
    if (!config.ddGroup && AS3.getBindable(this,"ddGroups").length > 0) {
      config.ddGroup = AS3.getBindable(this,"ddGroups")[0];
      AS3.setBindable(this,"ddGroups" , AS3.getBindable(this,"ddGroups").slice(1));
    }

    this.super$CesG(config);

    AS3.setBindable(this,"htmlFeedback" , AS3.getBindable(config,"htmlFeedback") || com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback.getHtmlFeedback);
    AS3.getBindable(this,"ddGroups").forEach(function (ddGroup/*:String*/)/*:void*/ {
      this$.addToGroup(ddGroup);
    });
  }/*


  override public*/ function onStartDrag(x/*:Number*/, y/*:Number*/)/*:void*/ {
    Ext.view.DragZone.prototype.onStartDrag.call(this,x, y);

    var view/*:TableView*/ =AS3.as( this["view"],  Ext.view.Table);
    this.dragData.sourceView = view;

    var recordFromIndexes/*:Object*/ = {};
    this.dragData.records.forEach(function (record/*:BeanRecord*/)/*:void*/ {
      recordFromIndexes[record.getId()] = (AS3.as(view.getStore(),  Ext.data.Store)).indexOf(record);
    });
    this.dragData.recordFromIndexes = recordFromIndexes;

    this.getProxy().update(AS3.getBindable(this,"htmlFeedback")(this.dragData.records));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.DragZone",
      metadata: {"": ["PublicApi"]},
      constructor: LinkListViewDragZone$,
      super$CesG: function() {
        Ext.view.DragZone.prototype.constructor.apply(this, arguments);
      },
      onStartDrag: onStartDrag,
      config: {
        ddGroups: null,
        htmlFeedback: null
      },
      requires: [
        "Ext.data.Store",
        "Ext.view.DragZone",
        "Ext.view.Table"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback"]
    };
});
