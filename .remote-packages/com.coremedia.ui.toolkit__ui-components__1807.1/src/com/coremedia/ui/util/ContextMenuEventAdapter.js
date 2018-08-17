Ext.define("com.coremedia.ui.util.ContextMenuEventAdapter", function(ContextMenuEventAdapter) {/*package com.coremedia.ui.util {
import ext.Base;
import ext.Component;
import ext.data.Model;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.panel.TablePanel;
import ext.selection.RowSelectionModel;
import ext.selection.SelectionModel;
import ext.tree.TreePanel;
import ext.util.Observable;
import ext.view.DataView;

import js.HTMLElement;

/**
 * Fires every time the source component fires some sort of contextmenu event.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>event:Event</code> the event fired by the source component
 *   </li>
 * </ul>
 * /
[Event(name = "contextmenu")] // NOSONAR - no type

/**
 * This class is an abstraction of the differences between various Ext components that support context menu events
 * and unfortunately feature different callback signatures. It also takes care of selecting dataView elements 
 * and grid rows and tree nodes before re-firing the "contextmenu" event with a unified callback signature:
 * <p>
 * A registered event listener receives a single parameter of type <code>IEventObject</code>.
 * </p>
 * @see ext.event.Event
 * /
public class ContextMenuEventAdapter extends Observable {

  /**
   * This event is fired by <code>ContextMenuEventAdapter</code> every time the source component fires some sort of contextmenu event.
   * /
  public static const EVENT_NAME:String = "contextmenu";

  private var component:Component;
  
  public*/ function ContextMenuEventAdapter$(component/*:Component*/) {this.super$O0gx();
    this.component$O0gx = component;
  }/*

  override public*/ function addListener(eventName/*:String*/, handler/*:Function*/, scope/*:Object = null*/, options/*:Object = null*/, order/*:String = 'current'*/)/*:Base*/ {switch(Math.max(arguments.length,2)){case 2:scope=null;case 3:options=null;case 4:order='current';}
    AS3.assert(eventName === ContextMenuEventAdapter.EVENT_NAME, "ContextMenuEventAdapter.as", 50, 5);

    if (!this.hasListener(ContextMenuEventAdapter.EVENT_NAME)) {
      if (AS3.is(this.component$O0gx,  Ext.view.View)) {
        this.component$O0gx.addListener("itemcontextmenu",AS3.bind( this,"handleContextMenuDataView$O0gx"));
        this.component$O0gx.addListener("containercontextmenu",AS3.bind( this,"handleContainerContextMenuDataView$O0gx"));
      } else if (AS3.is(this.component$O0gx,  Ext.grid.Panel)) {
        this.component$O0gx.addListener("rowcontextmenu",AS3.bind( this,"handleRowContextMenuGridPanel$O0gx"));
        this.component$O0gx.addListener("containercontextmenu",AS3.bind( this,"handleContainerContextMenuGridPanel$O0gx"));
      } else if (AS3.is(this.component$O0gx,  Ext.tree.Panel)) {
        this.component$O0gx.addListener("itemcontextmenu",AS3.bind( this,"handleContextMenuTreePanel$O0gx"));
      } else {
        this.component$O0gx.addListener("contextmenu",AS3.bind( this,"handleContextMenu$O0gx"));
      }
    }
    Ext.util.Observable.prototype.addListener.call(this,eventName, handler, scope, options);
  }/*

  override public*/ function removeListener(eventName/*:String*/, handler/*:Function*/, scope/*:Object = null*/)/*:void*/ {if(arguments.length<=2)scope=null;
    AS3.assert(eventName === ContextMenuEventAdapter.EVENT_NAME, "ContextMenuEventAdapter.as", 69, 5);

    Ext.util.Observable.prototype.removeListener.call(this,eventName, handler, scope);
    if (!this.hasListener(ContextMenuEventAdapter.EVENT_NAME)) {
      if (AS3.is(this.component$O0gx,  Ext.view.View)) {
        this.component$O0gx.removeListener("itemcontextmenu",AS3.bind( this,"handleContextMenuDataView$O0gx"));
        this.component$O0gx.removeListener("containercontextmenu",AS3.bind( this,"handleContainerContextMenuDataView$O0gx"));
      } else if (AS3.is(this.component$O0gx,  Ext.grid.Panel)) {
        this.component$O0gx.removeListener("rowcontextmenu",AS3.bind( this,"handleRowContextMenuGridPanel$O0gx"));
        this.component$O0gx.removeListener("containercontextmenu",AS3.bind( this,"handleContainerContextMenuGridPanel$O0gx"));
      } else if (AS3.is(this.component$O0gx,  Ext.tree.Panel)) {
        this.component$O0gx.removeListener("itemcontextmenu",AS3.bind( this,"handleContextMenuTreePanel$O0gx"));
      } else {
        this.component$O0gx.removeListener("contextmenu",AS3.bind( this,"handleContextMenu$O0gx"));
      }
    }
  }/*

  private*/ function handleContextMenuDataView(dataView/*:DataView*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, e/*:Event*/)/*:void*/ {
    var selectionModel/*:SelectionModel*/ = dataView.getSelectionModel();
    selectionModel.select(index, selectionModel.isSelected(record));
    this.doHandleContextClick$O0gx(e);
  }/*

  private*/ function handleContainerContextMenuDataView(dataView/*:DataView*/, e/*:Event*/)/*:void*/ {
    dataView.getSelectionModel().deselectAll();
    this.doHandleContextClick$O0gx(e);
  }/*

  private*/ function handleRowContextMenuGridPanel(grid/*:GridPanel*/, record/*:Model*/, tr/*:HTMLElement*/, rowIndex/*:Number*/, e/*:Event*/)/*:void*/ {
    var rowSelectionModel/*:SelectionModel*/ = grid.getSelectionModel();
    if (rowSelectionModel) {
      rowSelectionModel.select(rowIndex, rowSelectionModel.isSelected(rowIndex));
    }
    this.doHandleContextClick$O0gx(e);
  }/*

  private*/ function handleContainerContextMenuGridPanel(grid/*:GridPanel*/, e/*:Event*/)/*:void*/ {
    var rowSelectionModel/*:RowSelectionModel*/ =AS3.as( grid.getSelectionModel(),  Ext.selection.RowModel);
    if (rowSelectionModel) {
      rowSelectionModel.deselectAll();
    }
    this.doHandleContextClick$O0gx(e);
  }/*

  private*/ function handleContextMenuTreePanel(table/*:TablePanel*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, e/*:Event*/)/*:void*/ {
    var treeSelectionModel/*:SelectionModel*/ = table.getSelectionModel();
    if (treeSelectionModel) {
      treeSelectionModel.select(index, treeSelectionModel.isSelected(index));
    }
    this.doHandleContextClick$O0gx(e);
  }/*

  private*/ function handleContextMenu(/*...rest:Array*/)/*:void*/ {var rest=Array.prototype.slice.call(arguments);
    for/* each*/ (var $1=0;$1</* in*/ rest.length;++$1) {var argument/*:**/ =rest[$1];
      if (argument.browserEvent) {
        //DuckTyping: argument is most probably of type IEventObject
        this.doHandleContextClick$O0gx(argument);
        break;
      }
    }
  }/*

  private*/ function doHandleContextClick(e/*:Event*/)/*:void*/ {
    e.preventDefault();
    this.fireEvent(ContextMenuEventAdapter.EVENT_NAME, e);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": [
        "Event",
        [
          "name",
          "contextmenu"
        ]
      ]},
      component$O0gx: null,
      constructor: ContextMenuEventAdapter$,
      super$O0gx: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      addListener: addListener,
      removeListener: removeListener,
      handleContextMenuDataView$O0gx: handleContextMenuDataView,
      handleContainerContextMenuDataView$O0gx: handleContainerContextMenuDataView,
      handleRowContextMenuGridPanel$O0gx: handleRowContextMenuGridPanel,
      handleContainerContextMenuGridPanel$O0gx: handleContainerContextMenuGridPanel,
      handleContextMenuTreePanel$O0gx: handleContextMenuTreePanel,
      handleContextMenu$O0gx: handleContextMenu,
      doHandleContextClick$O0gx: doHandleContextClick,
      statics: {EVENT_NAME: "contextmenu"},
      requires: [
        "Ext.grid.Panel",
        "Ext.selection.RowModel",
        "Ext.tree.Panel",
        "Ext.util.Observable",
        "Ext.view.View"
      ]
    };
});
