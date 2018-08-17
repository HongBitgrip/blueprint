Ext.define("com.coremedia.ui.util.Deque", function(Deque) {/* /**
 * Created by mwe on 8/22/16.
 * /
package com.coremedia.ui.util {
public class Deque {
  // first node: loop.next
  // last node: loop.previous
  private var loop:DequeNode;
  private var theSize:Number = 0;

  public*/ function Deque$() {
    this.loop$9pau = new com.coremedia.ui.util.DequeNode(undefined);
    this.loop$9pau.next = this.loop$9pau;
    this.loop$9pau.previous = this.loop$9pau;
  }/*

  public*/ function insertFirst(value/*:**/)/*:void*/ {
    var newNode/*:DequeNode*/ = new com.coremedia.ui.util.DequeNode(value);
    newNode.next = this.loop$9pau.next;
    newNode.previous = this.loop$9pau;
    this.loop$9pau.next.previous = newNode;
    this.loop$9pau.next = newNode;
    this.theSize$9pau++;
  }/*

  public*/ function insertLast(value/*:**/)/*:void*/ {
    var newNode/*:DequeNode*/ = new com.coremedia.ui.util.DequeNode(value);
    newNode.previous = this.loop$9pau.previous;
    newNode.next = this.loop$9pau;
    this.loop$9pau.previous.next = newNode;
    this.loop$9pau.previous = newNode;
    this.theSize$9pau++;
  }/*

  public*/ function removeFirst()/*:**/ {
    this.checkNotEmpty$9pau();
    var result/*:**/ = this.loop$9pau.next.value;
    this.loop$9pau.next = this.loop$9pau.next.next;
    this.loop$9pau.next.previous = this.loop$9pau;
    this.theSize$9pau--;

    return result;
  }/*

  public*/ function removeLast()/*:**/ {
    this.checkNotEmpty$9pau();
    var result/*:**/ = this.loop$9pau.previous.value;
    this.loop$9pau.previous = this.loop$9pau.previous.previous;
    this.loop$9pau.previous.next = this.loop$9pau;
    this.theSize$9pau--;

    return result;
  }/*

  private*/ function checkNotEmpty()/*:void*/ {
    if (this.isEmpty()) {
      throw new AS3.Error("cannot remove from empty deque");
    }
  }/*

  public*/ function isEmpty()/*:Boolean*/ {
    return this.theSize$9pau === 0;
  }/*

  public*/ function size()/*:Number*/ {
    return this.theSize$9pau;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      loop$9pau: null,
      theSize$9pau: 0,
      constructor: Deque$,
      insertFirst: insertFirst,
      insertLast: insertLast,
      removeFirst: removeFirst,
      removeLast: removeLast,
      checkNotEmpty$9pau: checkNotEmpty,
      isEmpty: isEmpty,
      size: size,
      requires: ["AS3.Error"],
      uses: ["com.coremedia.ui.util.DequeNode"]
    };
});
