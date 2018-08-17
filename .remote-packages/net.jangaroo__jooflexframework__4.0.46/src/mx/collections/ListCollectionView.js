Ext.define("mx.collections.ListCollectionView", function(ListCollectionView) {/* ////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2005-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

package mx.collections
{

import flash.events.Event;

/**
 *  Dispatched when the ICollectionView has been updated in some way.
 *
 *  @eventType mx.events.CollectionEvent.COLLECTION_CHANGE
 * /
[Event(name="collectionChange", type="mx.events.CollectionEvent")]

/**
 * The ListCollectionView class adds the properties and methods of the
 * <code>ICollectionView</code> interface to an object that conforms to the
 * <code>IList</code> interface. As a result, you can pass an object of this class
 * to anything that requires an <code>IList</code> or <code>ICollectionView</code>.
 *
 * <p>This class also lets you use [ ] array notation
 * to access the <code>getItemAt()</code> and <code>setItemAt()</code> methods.
 * If you use code such as <code>myListCollectionView[index]</code>
 * Flex calls the <code>myListCollectionView</code> object's
 * <code>getItemAt()</code> or <code>setItemAt()</code> method.</p>
 * 
 * @mxml
 *
 *  <p>The <code>&lt;mx:ListCollectionView&gt;</code> has the following attributes,
 *  which all of its subclasses inherit:</p>
 *
 *  <pre>
 *  &lt;mx:ListCollectionView
 *  <b>Properties</b>
 *  filterFunction="null"
 *  list="null"
 *  sort="null"
 *  <b>Events</b>
 *  collectionChange="<i>No default</i>"
 *  /&gt;
 *  </pre>
 * /
public class ListCollectionView 
       implements IList
{
    ////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2005-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

import mx.core.mx_internal;

/**
 *  @private
 *  Version string for this class.
 * /
mx_internal static const VERSION:String = "3.3.0.4852";*/
;/*

  public*/ function ListCollectionView$() {/*
    super()*/;
  }/*

  public native function get length():uint;
  public native function set length(value:uint):void;

  public*/ function addItem(item/*:Object*/)/*:void*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function addItemAt(item/*:Object*/, index/*:int*/)/*:void*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function getItemAt(index/*:int*/, prefetch/*:int = 0*/)/*:Object*/ {if(arguments.length<=1)prefetch=0;
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function getItemIndex(item/*:Object*/)/*:int*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function itemUpdated(item/*:Object*/, property/*:Object = null*/, oldValue/*:Object = null*/, newValue/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:property=null;case 2:oldValue=null;case 3:newValue=null;}
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function removeAll()/*:void*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function removeItemAt(index/*:int*/)/*:Object*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function setItemAt(item/*:Object*/, index/*:int*/)/*:Object*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function toArray()/*:Array*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function addEventListener(type/*:String*/, listener/*:Function*/, useCapture/*:Boolean = false*/, priority/*:int = 0*/, useWeakReference/*:Boolean = false*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:useCapture=false;case 3:priority=0;case 4:useWeakReference=false;}
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function dispatchEvent(event/*:Event*/)/*:Boolean*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function hasEventListener(type/*:String*/)/*:Boolean*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function removeEventListener(type/*:String*/, listener/*:Function*/, useCapture/*:Boolean = false*/)/*:void*/ {if(arguments.length<=2)useCapture=false;
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function willTrigger(type/*:String*/)/*:Boolean*/ {
    throw new AS3.Error("not implemented!");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["mx.collections.IList"],
      metadata: {"": [
        "Event",
        [
          "name",
          "collectionChange",
          "type",
          "mx.events.CollectionEvent"
        ]
      ]},
      constructor: ListCollectionView$,
      addItem: addItem,
      addItemAt: addItemAt,
      getItemAt: getItemAt,
      getItemIndex: getItemIndex,
      itemUpdated: itemUpdated,
      removeAll: removeAll,
      removeItemAt: removeItemAt,
      setItemAt: setItemAt,
      toArray: toArray,
      addEventListener: addEventListener,
      dispatchEvent: dispatchEvent,
      hasEventListener: hasEventListener,
      removeEventListener: removeEventListener,
      willTrigger: willTrigger,
      statics: {VERSION: "3.3.0.4852"},
      requires: [
        "AS3.Error",
        "mx.collections.IList"
      ]
    };
});
