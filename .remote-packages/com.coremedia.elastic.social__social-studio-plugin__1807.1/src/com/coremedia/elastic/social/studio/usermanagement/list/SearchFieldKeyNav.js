Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav", function(SearchFieldKeyNav) {/*package com.coremedia.elastic.social.studio.usermanagement.list {
import ext.view.BoundListKeyNavView;

/**
 * A special KeyNavigation to make the disabling of auto selection in comboboxes possible.
 * The onKeyEnter is overwritten so the onKeyEnter function of the search list is called unless there is a entry selected.
 * /
public class SearchFieldKeyNav extends BoundListKeyNavView {
  public*/ function SearchFieldKeyNav$(config/*:BoundListKeyNavView = null*/) {if(arguments.length<=0)config=null;
    this.super$w6m0(config);
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Do nothing except a entry is highlighted then call the default keyEnter which cancels the event propagation and selects the entry.
   * @param event
   * /
  public*/ function onKeyEnter(event/*:**/)/*:void*/ {
    if (this['view'].highlightedItem) {
      Ext.view.BoundListKeyNav.prototype.callParent.call(this,[event]);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.BoundListKeyNav",
      constructor: SearchFieldKeyNav$,
      super$w6m0: function() {
        Ext.view.BoundListKeyNav.prototype.constructor.apply(this, arguments);
      },
      onKeyEnter: onKeyEnter,
      requires: ["Ext.view.BoundListKeyNav"]
    };
});
