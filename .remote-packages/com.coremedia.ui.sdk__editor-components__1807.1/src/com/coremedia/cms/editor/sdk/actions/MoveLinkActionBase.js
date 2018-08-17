Ext.define("com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase", function(MoveLinkActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Model;
import ext.data.Store;
import ext.grid.GridPanel;
import ext.selection.SelectionModel;

[PublicApi]
public class MoveLinkActionBase extends MoveAction {

  private var gridPanel:GridPanel;
  private var movingDirection:String;
  private var llWrapper:ILinkListWrapper;

  /**
   * @param config the config object
   * /
  public*/ function MoveLinkActionBase$(config/*:MoveLinkAction = null*/) {if(arguments.length<=0)config=null;
    this.gridPanel$nt_T = AS3.getBindable(config,"grid");
    this.movingDirection$nt_T = AS3.getBindable(config,"direction");
    this.llWrapper$nt_T = AS3.getBindable(config,"linkListWrapper");
    AS3.setBindable(config,"handler" ,AS3.bind( this,"moveLink$nt_T"));
    this.super$nt_T(config);
  }/*

  private*/ function moveLink()/*:void*/ {var this$=this;
    var focusRecord/*:Model*/ = null;
    // get last focused record - not public api
    var lastFocused/*:Object*/ = AS3.getBindable(this.gridPanel$nt_T,"view","DUMMY")["getLastFocused"]();
    if (lastFocused && lastFocused.record) {
      focusRecord = lastFocused.record;
    }

    var selectedRecords/*:Array*/ =AS3.as( this.gridPanel$nt_T.getSelectionModel().getSelection(),  Array) || [];
    var store/*:Store*/ =AS3.as( this.gridPanel$nt_T.getStore(),  Ext.data.Store);
    var selectedPositions/*:Array*/ = selectedRecords.map(function (record/*:BeanRecord*/)/*:int*/ {
      return store.indexOf(record);
    });

    var fromToMap/*:Object*/ = {};
    var toPositions/*:Array*/ = [];

    if (this.movingDirection$nt_T === com.coremedia.cms.editor.sdk.actions.MoveAction.UP) {
      selectedPositions.forEach(function (position/*:int*/)/*:void*/ {
        var toPosition/*:int*/ = Math.max(0, position - 1);
        fromToMap[position] = toPosition;
        toPositions.push(toPosition);
      });
    } else {
      selectedPositions.forEach(function (position/*:int*/)/*:void*/ {
        var toPosition/*:int*/ = Math.min(position + 1, store.getCount() - 1);
        fromToMap[position] = toPosition;
        toPositions.push(toPosition);
      });
    }

    var selectionModel/*:SelectionModel*/ = this.gridPanel$nt_T.getSelectionModel();

    if (focusRecord && selectedPositions.length > 0) {

      // Check if the move action will really change the store's records.
      var recordsWillChange/*:Boolean*/ = false;
      var links/*:Array*/ = this.llWrapper$nt_T.getLinks() || [];
      for (var from/*:String*/ in fromToMap) {
        if (links[from] !== links[fromToMap[parseInt(from)]]) {
          recordsWillChange = true;
          break;
        }
      }

      if (recordsWillChange) {
        store.on("endupdate", function ()/*:void*/ {
          this$.restoreSelectionAndFocus$nt_T(selectionModel, toPositions, store);
        }, null, {single:true});
      } else {
        this.restoreSelectionAndFocus$nt_T(selectionModel, toPositions, store);
      }
    }

    this.llWrapper$nt_T.moveLinks(fromToMap);
  }/*

  private*/ function restoreSelectionAndFocus(selectionModel/*:SelectionModel*/, toPositions/*:Array*/, store/*:Store*/)/*:void*/ {
    selectionModel.select(toPositions.map(function (pos/*:int*/)/*:BeanRecord*/ {
      return AS3.as( store.getAt(pos),  com.coremedia.ui.store.BeanRecord);
    }));

    AS3.getBindable(this.gridPanel$nt_T,"view","DUMMY").focusNode(toPositions[0]);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.MoveAction",
      metadata: {"": ["PublicApi"]},
      gridPanel$nt_T: null,
      movingDirection$nt_T: null,
      llWrapper$nt_T: null,
      constructor: MoveLinkActionBase$,
      super$nt_T: function() {
        com.coremedia.cms.editor.sdk.actions.MoveAction.prototype.constructor.apply(this, arguments);
      },
      moveLink$nt_T: moveLink,
      restoreSelectionAndFocus$nt_T: restoreSelectionAndFocus,
      requires: [
        "Ext.data.Store",
        "com.coremedia.cms.editor.sdk.actions.MoveAction",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
