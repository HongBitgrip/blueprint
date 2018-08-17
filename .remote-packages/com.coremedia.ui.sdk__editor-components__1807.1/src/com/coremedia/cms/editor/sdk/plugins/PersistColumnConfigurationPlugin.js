Ext.define("com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin", function(PersistColumnConfigurationPlugin) {/*package com.coremedia.cms.editor.sdk.plugins {
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;

import ext.Component;
import ext.container.Container;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.plugin.AbstractPlugin;

/**
 * Apply this plugin to a grid panel to persist the column configuration
 * when columns are hidden or moved.
 * The configuration is stored once per id in the user preferences.
 * The configuration is restored while the component is created.
 * /
[PublicApi]
public class PersistColumnConfigurationPlugin extends AbstractPlugin {

  /**
   * The id under which to persist the column configuration.
   * Defaults to the last component in the dot-separated xtype string
   * of the component.
   * /
  [Bindable]
  public var storeId:String;

  private var grid:GridPanel;

  /**
   * @param config the configuration object
   * /
  public*/ function PersistColumnConfigurationPlugin$(config/*:PersistColumnConfigurationPlugin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"storeId" , AS3.getBindable(config,"storeId"));
    this.super$64z7(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.grid$64z7 =AS3.as( component,  Ext.grid.Panel);
    if (!this.grid$64z7) {
      throw new AS3.Error("PersistColumnConfigurationPlugin can only be applied to GridPanels");
    }

    var columns/*:Array*/ = this.grid$64z7.getColumns();
    var columnStates/*:Array*/ = this.getColumnPreferences$64z7() || [];
    var newConfig/*:Array*/ = PersistColumnConfigurationPlugin.adaptColumnsToPreferences(columns, columnStates);

    // Remove the old columns without having them destroyed in the process.
    AS3.cast(Ext.container.Container,this.grid$64z7['headerCt']).removeAll(false);
    // Now re-add them in the right order.
    this.grid$64z7.reconfigure(null, newConfig);

    this.grid$64z7.on("columnshow",AS3.bind( this,"colModelChange$64z7"));
    this.grid$64z7.on("columnhide",AS3.bind( this,"colModelChange$64z7"));
    this.grid$64z7.on("columnmove",AS3.bind( this,"colModelChange$64z7"));
  }/*

  private*/ function colModelChange()/*:void*/ {
    // Select identifiable columns and remember their identifying properties
    // and their hidden status.
    var state/*:Array*/ = this.grid$64z7.getColumns().filter(function(col/*:Column*/)/*:Boolean*/ {
      return ! !AS3.getBindable(col,"id","DUMMY") || ! !col.dataIndex;
    }).map(function(col/*:Column*/)/*:ColumnState*/ {
      var result/*:ColumnState*/ = new com.coremedia.cms.editor.sdk.plugins.ColumnState();
      result.id = AS3.getBindable(col,"id","DUMMY") || "";
      result.dataIndex = col.dataIndex || "";
      result.hidden = ! !col.hidden;
      return result;
    });
    this.updateColumnPreferences$64z7(state);
  }/*

  /**
   * Adapt the available columns to the user's preferences.
   *
   * @param originalColumns the columns
   * @param columnStates the configured column states
   * @return the new list of columns
   * /
  internal static*/ function adaptColumnsToPreferences$static(originalColumns/*:Array*/, columnStates/*:Array*/)/*:Array*/ {
    var columns/*:Array*/ = originalColumns.concat();

    // Adapt the available columns to the user's preferences.
    var myColumns/*:Array*/ = [];
    // Match columns by id first.
    lookupColumnsById$static(columnStates, myColumns, columns);
    // Match columns by data index second.
    lookupColumnsByDataIndex$static(columnStates, myColumns, columns);
    // Remove unmatched columns.
    myColumns = myColumns.filter(function(col/*:Column*/)/*:Boolean*/ {
      return ! !col;
    });
    // Insert remaining columns to the right of their left neighbor in the original order.
    insertColumnsByNeighbor$static(columns, originalColumns, myColumns);

    return myColumns;
  }/*

  private static*/ function lookupColumnsById$static(columnStates/*:Array*/, myColumns/*:Array*/, columns/*:Array*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < columnStates.length; i++) {
      var columnStateForIdMatching/*:ColumnState*/ = columnStates[i];
      var idToMatch/*:String*/ = columnStateForIdMatching.id;
      myColumns[i] = null;
      for (var j/*:int*/ = 0; j < columns.length; j++) {
        var candidateForId/*:Column*/ = columns[j];
        if (AS3.getBindable(candidateForId,"id","DUMMY") && AS3.getBindable(candidateForId,"id","DUMMY") === idToMatch) {
          myColumns[i] = candidateForId;
          candidateForId['hidden'] = columnStateForIdMatching.hidden;
          // Do not try to match the column again.
          columns.splice(j, 1);
          break;
        }
      }
    }
  }/*

  private static*/ function lookupColumnsByDataIndex$static(columnStates/*:Array*/, myColumns/*:Array*/, columns/*:Array*/)/*:void*/ {
    for (var k/*:int*/ = 0; k < columnStates.length; k++) {
      if (!myColumns[k]) {
        var columnStateForDataIndexMatching/*:ColumnState*/ = columnStates[k];
        var dataIndexToMatch/*:String*/ = columnStateForDataIndexMatching.dataIndex;
        for (var l/*:int*/ = 0; l < columns.length; l++) {
          var candidateForDataIndex/*:Column*/ = columns[l];
          if (AS3.getBindable(candidateForDataIndex,"id","DUMMY") && candidateForDataIndex.dataIndex === dataIndexToMatch) {
            myColumns[k] = candidateForDataIndex;
            candidateForDataIndex['hidden'] = columnStateForDataIndexMatching.hidden;
            // Do not try to match the column again.
            columns.splice(l, 1);
            break;
          }
        }
      }
    }
  }/*

  private static*/ function insertColumnsByNeighbor$static(columns/*:Array*/, originalColumns/*:Array*/, myColumns/*:Array*/)/*:void*/ {
    for (var m/*:int*/ = 0; m < columns.length; m++) {
      var unmatchedColumn/*:Column*/ = columns[m];
      var originalPosition/*:Number*/ = originalColumns.indexOf(unmatchedColumn);
      var targetPosition/*:Number*/;
      if (originalPosition === 0) {
        targetPosition = myColumns.length;
      } else {
        var leftColumn/*:Column*/ = originalColumns[originalPosition - 1];
        targetPosition = myColumns.indexOf(leftColumn) + 1;
      }
      myColumns.splice(targetPosition, 0, unmatchedColumn);
    }
  }/*

  private*/ function getColumnPreferences()/*:Array*/ {
    return AS3.as( com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty({}, "persistColumnConfigurationPlugin", this.getPersistenceId()),  Array);
  }/*

  private*/ function updateColumnPreferences(state/*:Array*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(state, "persistColumnConfigurationPlugin", this.getPersistenceId());
  }/*

  internal*/ function getPersistenceId()/*:String*/ {
    return AS3.getBindable(this,"storeId") || this.grid$64z7.xtype.substr(this.grid$64z7.xtype.lastIndexOf(".") + 1);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      grid$64z7: null,
      constructor: PersistColumnConfigurationPlugin$,
      super$64z7: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      colModelChange$64z7: colModelChange,
      getColumnPreferences$64z7: getColumnPreferences,
      updateColumnPreferences$64z7: updateColumnPreferences,
      getPersistenceId: getPersistenceId,
      config: {storeId: null},
      statics: {adaptColumnsToPreferences: adaptColumnsToPreferences$static},
      requires: [
        "AS3.Error",
        "Ext.container.Container",
        "Ext.grid.Panel",
        "Ext.plugin.Abstract"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.ColumnState",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
