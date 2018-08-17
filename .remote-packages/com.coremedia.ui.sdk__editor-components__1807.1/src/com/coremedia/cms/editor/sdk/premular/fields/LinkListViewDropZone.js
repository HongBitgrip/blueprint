Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDropZone", function(LinkListViewDropZone) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;

import ext.data.Store;

import ext.dd.DragSource;
import ext.event.Event;
import ext.view.AbstractView;
import ext.grid.ViewDropZone;

[PublicApi]
public class LinkListViewDropZone extends ViewDropZone {

  [Bindable]
  public var ddGroups:Array;

  [Bindable]
  public var linkListWrapper:ILinkListWrapper;

  [Bindable]
  public var replaceOnDrop:Boolean;

  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AbstractItemsPlugin
   * /
  public*/ function LinkListViewDropZone$(config/*:LinkListViewDropZone = null*/) {var this$=this;if(arguments.length<=0)config=null;
    AS3.setBindable(this,"ddGroups" , AS3.getBindable(config,"ddGroups") || []);
    if (!config.ddGroup && AS3.getBindable(this,"ddGroups").length > 0) {
      config.ddGroup = AS3.getBindable(this,"ddGroups")[0];
      AS3.setBindable(this,"ddGroups" , AS3.getBindable(this,"ddGroups").slice(1));
    }

    this.super$bJdB(config);

    AS3.setBindable(this,"linkListWrapper" , AS3.getBindable(config,"linkListWrapper"));
    AS3.setBindable(this,"replaceOnDrop" , AS3.getBindable(config,"replaceOnDrop"));
    AS3.setBindable(this,"readOnlyValueExpression" , AS3.getBindable(config,"readOnlyValueExpression"));

    AS3.getBindable(this,"ddGroups").forEach(function (ddGroup/*:String*/)/*:void*/ {
      this$.addToGroup(ddGroup);
    });

    AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").addChangeListener(AS3.bind(this,"updateReadOnly$bJdB"));
    this.updateReadOnly$bJdB();
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").removeChangeListener(AS3.bind(this,"updateReadOnly$bJdB"));
    Ext.grid.ViewDropZone.prototype.destroy.call(this,params);
  }/*

  private*/ function updateReadOnly()/*:void*/ {
    if (AS3.getBindable(this,"readOnlyValueExpression")) {
      var isReadOnly/*:Boolean*/ =AS3.as( AS3.getBindable(this,"readOnlyValueExpression").getValue(),  Boolean);
      if (isReadOnly) {
        this.lock();
      } else {
        this.unlock();
      }
    }
  }/*

  public override*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);

    this.addRecordsToDragData$bJdB(data, dragInfo);

    Ext.grid.ViewDropZone.prototype.onNodeOver.call(this,nodeData, source, e, data);
    var mayDrop/*:Boolean*/ = this.allowDrop$bJdB(dragInfo, data.view);
    if (!mayDrop) {
      this.getIndicator().hide();
    }
    return mayDrop ? source.dropAllowed : source.dropNotAllowed;
  }/*

  internal native function getIndicator():Component;

  public override*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);

    this.addRecordsToDragData$bJdB(data, dragInfo);

    Ext.grid.ViewDropZone.prototype.onContainerOver.call(this,source, e, data);
    return this.allowDrop$bJdB(dragInfo, data.view) ? source.dropAllowed : source.dropNotAllowed;
  }/*

  private static*/ function createContentRecords$static(store/*:Store*/, contents/*:Array*/)/*:Array*/ {
    var records/*:Array*/ = [];

    // We assume that this is the BeanRecord class.
    var recordModel/*:Class*/ = store.getModel();

    contents.forEach(function (content/*:Content*/)/*:void*/ {
      records.push(new recordModel({bean : content}));
    });

    return records;
  }/*

  private*/ function addRecordsToDragData(data/*:Object*/, dragInfo/*:DragInfo*/)/*:void*/ {
    // If there are no records in the drag data, we have to create some to satisfy GridPanel drop requirements.
    if (!data.records) {
      data.records = createContentRecords$static(AS3.as(this.getView$bJdB().getStore(),  Ext.data.Store), dragInfo.getContents());
    }
  }/*

  private*/ function allowDrop(dragInfo/*:DragInfo*/, fromView/*:AbstractView*/)/*:Boolean*/ {
    if (!dragInfo) {
      return false;
    }
    if (!this.isWritable$bJdB()) {
      return false;
    }
    if (!AS3.getBindable(this,"linkListWrapper").acceptsLinks(dragInfo.getContents())) {
      return false;
    }
    //noinspection JSMismatchedCollectionQueryUpdate
    var links/*:Array*/ = AS3.getBindable(this,"linkListWrapper").getLinks();
    if (links === undefined) {
      return false; // cannot determine of drop is allowed when links are no loaded yet
    }
    // local drag is always allowed.
    // otherwise check if there is enough capacity.
    // In case replaceOnDrop is enabled, content may be replaced if it does not exceed the maxCardinality
    return (this.getView$bJdB() === fromView)
            || !AS3.getBindable(this,"replaceOnDrop") &&  AS3.getBindable(this,"linkListWrapper").getFreeCapacity() >= dragInfo.getContents().length
            || AS3.getBindable(this,"replaceOnDrop") && AS3.getBindable(this,"linkListWrapper").getTotalCapacity() >= dragInfo.getContents().length;
  }/*


  override public*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (!this.allowDrop$bJdB(dragInfo, data.view)) {
      // TODO: ExtJS 6 API
      this["invalidateDrop"]();
    }

    return Ext.grid.ViewDropZone.prototype.onNodeDrop.call(this,nodeData, source, e, data);
  }/*

  private*/ function isWritable()/*:Boolean*/ {
    return !(AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").getValue() === true);
  }/*

  private*/ function getView()/*:AbstractView*/ {
    return this["view"];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.ViewDropZone",
      metadata: {"": ["PublicApi"]},
      constructor: LinkListViewDropZone$,
      super$bJdB: function() {
        Ext.grid.ViewDropZone.prototype.constructor.apply(this, arguments);
      },
      destroy: destroy,
      updateReadOnly$bJdB: updateReadOnly,
      onNodeOver: onNodeOver,
      onContainerOver: onContainerOver,
      addRecordsToDragData$bJdB: addRecordsToDragData,
      allowDrop$bJdB: allowDrop,
      onNodeDrop: onNodeDrop,
      isWritable$bJdB: isWritable,
      getView$bJdB: getView,
      config: {
        ddGroups: null,
        linkListWrapper: null,
        replaceOnDrop: false,
        readOnlyValueExpression: null
      },
      requires: [
        "Ext.data.Store",
        "Ext.grid.ViewDropZone"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.DragInfo"]
    };
});
