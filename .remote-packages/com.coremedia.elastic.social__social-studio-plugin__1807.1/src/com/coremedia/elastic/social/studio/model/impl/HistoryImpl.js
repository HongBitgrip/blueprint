Ext.define("com.coremedia.elastic.social.studio.model.impl.HistoryImpl", function(HistoryImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.History;
import com.coremedia.elastic.social.studio.model.HistoryPropertyNames;
import com.coremedia.ui.data.impl.BeanImpl;

import ext.JSON;

public class HistoryImpl extends BeanImpl implements History {
  private var queryList:Array;
  private var currentIndex:int;

  public*/ function HistoryImpl$() {this.super$14IH();
    this.queryList$14IH = new Array();
    this.currentIndex$14IH = -1;
    this.setForwardEnabled$14IH(false);
    this.setBackwardEnabled$14IH(false);
  }/*

  public*/ function add(queryObj/*:Object*/)/*:void*/ {
    // lets copy the queryObj to a new object (otherwise, if we would use the queryObj parameter directly,
    // and it is passed by reference to this function, every change to the param queryObj would immediately
    // change the queryList entry)
    var queryObject/*:Object*/ = Ext.JSON.decode(Ext.JSON.encode(queryObj));
    if (queryObject) {
      // add the first queryObject to the history
      if (this.queryList$14IH.length === 0) {
        this.queryList$14IH.push(queryObject);
      } else {
        // do not add the query object to the history if it is the same
        // as the current history item. We need to encode the object to its json representation in order compare it
        if (Ext.JSON.encode(queryObject) === Ext.JSON.encode(this.queryList$14IH[this.currentIndex$14IH])) {
          return;
        }

        // if the "forward-history" is changed (e.g. if user presses the back button
        // and queries for a new string from that point) it removes the forward-history
        // which is not needed anymore.
        if (this.currentIndex$14IH < this.queryList$14IH.length - 1) {
          this.queryList$14IH = this.queryList$14IH.slice(0, this.currentIndex$14IH + 1);
        }

        // just add to history if the last entry is not equal to the queryString
        if (this.queryList$14IH[this.queryList$14IH.length - 1] !== queryObject) {
          this.queryList$14IH.push(queryObject);
        }
      }

      this.currentIndex$14IH = this.queryList$14IH.length - 1;
      this.updateNavigation$14IH();
    }
  }/*

  public*/ function hasCurrent()/*:Boolean*/ {
    return !this.isEmpty$14IH() && this.currentIndex$14IH >= 0;
  }/*

  public*/ function getCurrent()/*:Object*/ {
    var query/*:String*/ = null;

    if (this.hasCurrent()) {
      query = this.queryList$14IH[this.currentIndex$14IH];
    }

    return query;
  }/*

  public*/ function forward()/*:Object*/ {
    var query/*:Object*/ = null;

    if (!this.isEmpty$14IH() && this.currentIndex$14IH <= this.queryList$14IH.length - 2) {
      query = this.queryList$14IH[++this.currentIndex$14IH];
      this.updateNavigation$14IH();
    }

    return query;
  }/*

  public*/ function backward()/*:Object*/ {
    var query/*:Object*/ = null;

    if (!this.isEmpty$14IH() && this.currentIndex$14IH > 0) {
      query = this.queryList$14IH[--this.currentIndex$14IH];
      this.updateNavigation$14IH();
    }

    return query;
  }/*

  public*/ function isForwardEnabled()/*:Boolean*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED),  Boolean);
  }/*

  public*/ function isBackwardEnabled()/*:Boolean*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED),  Boolean);
  }/*

  private*/ function updateNavigation()/*:void*/ {
    this.setForwardEnabled$14IH(this.queryList$14IH.length > 0 && this.currentIndex$14IH < this.queryList$14IH.length - 1);
    this.setBackwardEnabled$14IH(this.currentIndex$14IH > 0);
  }/*

  private*/ function setForwardEnabled(forwardEnabled/*:Boolean*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED, forwardEnabled);
  }/*

  private*/ function setBackwardEnabled(backwardEnabled/*:Boolean*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED, backwardEnabled);
  }/*

  private*/ function isEmpty()/*:Boolean*/ {
    return this.queryList$14IH.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.History"],
      queryList$14IH: null,
      currentIndex$14IH: 0,
      constructor: HistoryImpl$,
      super$14IH: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      add: add,
      hasCurrent: hasCurrent,
      getCurrent: getCurrent,
      forward: forward,
      backward: backward,
      isForwardEnabled: isForwardEnabled,
      isBackwardEnabled: isBackwardEnabled,
      updateNavigation$14IH: updateNavigation,
      setForwardEnabled$14IH: setForwardEnabled,
      setBackwardEnabled$14IH: setBackwardEnabled,
      isEmpty$14IH: isEmpty,
      requires: [
        "Ext.JSON",
        "com.coremedia.elastic.social.studio.model.History",
        "com.coremedia.ui.data.impl.BeanImpl"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.HistoryPropertyNames"]
    };
});
