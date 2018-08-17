Ext.define("mx.collections.ArrayCollection", function(ArrayCollection) {/* ////////////////////////////////////////////////////////////////////////////////
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

/**
 *  The ArrayCollection class is a wrapper class that exposes an Array as
 *  a collection that can be accessed and manipulated using the methods
 *  and properties of the <code>ICollectionView</code> or <code>IList</code>
 *  interfaces. Operations on a ArrayCollection instance modify the data source;
 *  for example, if you use the <code>removeItemAt()</code> method on an
 *  ArrayCollection, you remove the item from the underlying Array.
 *
 *  @mxml
 *
 *  <p>The <code>&lt;mx:ArrayCollection&gt;</code> tag inherits all the attributes of its
 *  superclass, and adds the following attributes:</p>
 *
 *  <pre>
 *  &lt;mx:ArrayCollection
 *  <b>Properties</b>
 *  source="null"
 *  /&gt;
 *  </pre>
 *
 *  @example The following code creates a simple ArrayCollection object that
 *  accesses and manipulates an array with a single Object element.
 *  It retrieves the element using the IList interface <code>getItemAt</code>
 *  method and an IViewCursor object that it obtains using the ICollectionView
 *  <code>createCursor</code> method.
 *  <pre>
 *  var myCollection:ArrayCollection = new ArrayCollection([ { first: 'Matt', last: 'Matthews' } ]);
 *  var myCursor:IViewCursor = myCollection.createCursor();
 *  var firstItem:Object = myCollection.getItemAt(0);
 *  var firstItemFromCursor:Object = myCursor.current;
 *  if (firstItem == firstItemFromCursor)
 *        doCelebration();
 *  </pre>
 * /
public class ArrayCollection extends ListCollectionView
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

  //noinspection JSMismatchedCollectionQueryUpdate
  private static const*/var ARRAY_PROTOTYPE$static/*:Array*/;/* =*/function ARRAY_PROTOTYPE$static_(){ARRAY_PROTOTYPE$static=( Array['prototype']);};/*

  //--------------------------------------------------------------------------
  //
  //  Constructor
  //
  //--------------------------------------------------------------------------

  /**
   *  Constructor.
   *
   *  <p>Creates a new ArrayCollection using the specified source array.
   *  If no array is specified an empty array will be used.</p>
   * /
  public*/ function ArrayCollection$(source/*:Array = undefined*/)
  {
    this.super$T1MR();

    if (source) {
      for (var i/*:uint*/ = 0; i < source.length; ++i) {
        this[i] = source[i];
      }
      this.length = source.length;
    } else {
      this.length = 0;
    }
  }/*

  //--------------------------------------------------------------------------
  //
  // IList Methods
  //
  //--------------------------------------------------------------------------

  /**
   * @inheritDoc
   * /
  override public*/ function getItemAt(index/*:int*/, prefetch/*:int = 0*/)/*:Object*/ {if(arguments.length<=1)prefetch=0;
    if (index < 0 || index >= this.length)
    {
      throw new /*Range*/AS3.Error("[collections] outOfBounds: " + index);
    }

    return this[index];
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function addItem(item/*:Object*/)/*:void*/ {
    this[this.length++] = item;
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function toArray()/*:Array*/ {
    return ARRAY_PROTOTYPE$static['slice'].call(this);
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getItemIndex(item/*:Object*/)/*:int*/ {
    return ARRAY_PROTOTYPE$static['indexOf'].call(this, item);
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function removeAll()/*:void*/ {
    this.length = 0;
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setItemAt(item/*:Object*/, index/*:int*/)/*:Object*/ {
    var oldItem/*:Object*/ = this.getItemAt(index);
    this[index] = item;
    return oldItem;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "mx.collections.ListCollectionView",
      constructor: ArrayCollection$,
      super$T1MR: function() {
        mx.collections.ListCollectionView.prototype.constructor.apply(this, arguments);
      },
      getItemAt: getItemAt,
      addItem: addItem,
      toArray: toArray,
      getItemIndex: getItemIndex,
      removeAll: removeAll,
      setItemAt: setItemAt,
      statics: {
        VERSION: "3.3.0.4852",
        ARRAY_PROTOTYPE: undefined,
        __initStatics__: function() {
          ARRAY_PROTOTYPE$static_();
        }
      },
      requires: [
        "AS3.Error",
        "mx.collections.ListCollectionView"
      ]
    };
});
