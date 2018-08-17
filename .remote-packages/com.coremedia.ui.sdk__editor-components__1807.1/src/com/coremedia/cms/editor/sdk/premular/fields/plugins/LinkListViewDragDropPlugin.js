Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.LinkListViewDragDropPlugin", function(LinkListViewDragDropPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {
import com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDropZone;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.cms.editor.sdk.util.StoreUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.data.Model;
import ext.data.Store;
import ext.grid.GridPanel;
import ext.grid.ViewDropZone;
import ext.grid.plugin.GridViewDragDropPlugin;
import ext.view.AbstractView;
import ext.view.ViewDragZone;

import js.HTMLElement;

[PublicApi]
public class LinkListViewDragDropPlugin extends GridViewDragDropPlugin {

  [Bindable]
  public var dragGroups:Array;

  [Bindable]
  public var dropGroups:Array;

  [Bindable]
  public var linkListWrapper:ILinkListWrapper;

  [Bindable]
  public var replaceOnDrop:Boolean;

  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  [Bindable]
  public var htmlFeedback:Function;

  private var view:AbstractView;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AbstractItemsPlugin
   * /
  public*/ function LinkListViewDragDropPlugin$(config/*:LinkListViewDragDropPlugin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"dragGroups" , AS3.getBindable(config,"dragGroups") || []);
    AS3.setBindable(this,"dropGroups" , AS3.getBindable(config,"dropGroups") || []);

    if(config.ddGroup && config.ddGroup.length > 0){
      AS3.setBindable(this,"dragGroups" , AS3.getBindable(this,"dragGroups").concat(config.ddGroup));
      AS3.setBindable(this,"dropGroups" , AS3.getBindable(this,"dropGroups").concat(config.ddGroup));
    }
    this.super$$4tq(config);

    var dragZoneCfg/*:LinkListViewDragZone*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone,{});
    AS3.setBindable(dragZoneCfg,"ddGroups" , AS3.getBindable(this,"dragGroups"));
    AS3.setBindable(dragZoneCfg,"htmlFeedback" , AS3.getBindable(config,"htmlFeedback"));
    this.dragZone = AS3.cast(Ext.view.DragZone,Ext.apply(dragZoneCfg, this.dragZone));

    var dropZoneCfg/*:LinkListViewDropZone*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDropZone,{});
    AS3.setBindable(dropZoneCfg,"ddGroups" , AS3.getBindable(this,"dropGroups"));
    AS3.setBindable(dropZoneCfg,"linkListWrapper" , AS3.getBindable(this,"linkListWrapper"));
    AS3.setBindable(dropZoneCfg,"replaceOnDrop" , AS3.getBindable(this,"replaceOnDrop"));
    AS3.setBindable(dropZoneCfg,"readOnlyValueExpression" , AS3.getBindable(this,"readOnlyValueExpression"));
    this.dropZone = AS3.cast(Ext.grid.ViewDropZone,Ext.apply(dropZoneCfg, this.dropZone));
  }/*

  public override*/ function init(component/*:Component*/)/*:void*/ {
    Ext.grid.plugin.DragDrop.prototype.init.call(this,component);

    this.view$$4tq =AS3.as( component,  Ext.view.AbstractView);
    if (!this.view$$4tq) {
      throw new AS3.Error("Plugin can only be attached to TableViews");
    }

    this.view$$4tq.on("render",AS3.bind( this,"onViewRender$$4tq"), this, { single: true });
  }/*

  private*/ function getGridPanel()/*:GridPanel*/ {
    var gridPanel/*:GridPanel*/ =AS3.as( this.view$$4tq.up(com.coremedia.ui.util.createComponentSelector()._xtype("gridpanel").build()),  Ext.grid.Panel);
    if (!gridPanel) {
      throw new AS3.Error("Could not find the GridPanel the TableView is attached to");
    }
    return gridPanel;
  }/*

  private*/ function onViewRender()/*:void*/ {
    var gridPanel/*:GridPanel*/ = this.getGridPanel$$4tq();
    gridPanel.on("drop",AS3.bind( this,"onDrop$$4tq"));
    gridPanel.on("beforedrop",AS3.bind( this,"onBeforeDrop$$4tq"));
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onBeforeDrop(node/*:HTMLElement*/, data/*:Object*/, overModel/*:Model*/, dropPosition/*:String*/)/*:Boolean*/ {
    var store/*:Store*/ = this.getGridPanel$$4tq().getStore();
    if (AS3.getBindable(this,"replaceOnDrop")) {
      this.clearSelection$$4tq();
      store.removeAll();
    }

    // Possible type conversion, e.g. drop from tree
    data.records = com.coremedia.cms.editor.sdk.util.StoreUtil.asBeanRecords(data.records, store);
    return true;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onDrop(dropNode/*:HTMLElement*/, data/*:Object*/, overModel/*:Model*/, dropPosition/*:String*/)/*:void*/ {
    var records/*:Array*/ =AS3.as( data.records,  Array) || [];

    if (data.sourceView === this.view$$4tq) {

      // link movement inside this plugin's component
      var fromIndexes/*:Array*/ = [];
      var recordFromIndexes/*:Object*/ = data.recordFromIndexes || {};
      for (var recordId/*:String*/ in recordFromIndexes) {
        fromIndexes.push(recordFromIndexes[recordId]);
      }

      AS3.getBindable(this,"linkListWrapper").moveLinksToIndex(fromIndexes, (AS3.as(this.view$$4tq.getStore(),  Ext.data.Store)).indexOf(records[0]));
    } else {

      // new links from outside
      var links/*:Array*/ = records.map(function (rec/*:BeanRecord*/)/*:Bean*/ {
        return rec.getBean();
      });
      if (AS3.getBindable(this,"replaceOnDrop")) {
        if (AS3.getBindable(this,"linkListWrapper").acceptsLinks(links)) {
          AS3.getBindable(this,"linkListWrapper").setLinks(links);
        }
      } else {
        var currentLinks/*:Array*/ = AS3.getBindable(this,"linkListWrapper").getLinks() || [];
        if (AS3.getBindable(this,"linkListWrapper").acceptsLinks(currentLinks.concat(links))) {
          AS3.getBindable(this,"linkListWrapper").addLinksAtIndex(links, (AS3.as(this.view$$4tq.getStore(),  Ext.data.Store)).indexOf(records[0]));
        }
      }
    }
  }/*


  private*/ function clearSelection()/*:void*/ {
    this.getGridPanel$$4tq().getSelectionModel().deselectAll();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.plugin.DragDrop",
      metadata: {"": ["PublicApi"]},
      view$$4tq: null,
      constructor: LinkListViewDragDropPlugin$,
      super$$4tq: function() {
        Ext.grid.plugin.DragDrop.prototype.constructor.apply(this, arguments);
      },
      init: init,
      getGridPanel$$4tq: getGridPanel,
      onViewRender$$4tq: onViewRender,
      onBeforeDrop$$4tq: onBeforeDrop,
      onDrop$$4tq: onDrop,
      clearSelection$$4tq: clearSelection,
      config: {
        dragGroups: null,
        dropGroups: null,
        linkListWrapper: null,
        replaceOnDrop: false,
        readOnlyValueExpression: null,
        htmlFeedback: null
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.data.Store",
        "Ext.grid.Panel",
        "Ext.grid.ViewDropZone",
        "Ext.grid.plugin.DragDrop",
        "Ext.view.AbstractView",
        "Ext.view.DragZone",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDropZone",
        "com.coremedia.cms.editor.sdk.util.StoreUtil"
      ]
    };
});
