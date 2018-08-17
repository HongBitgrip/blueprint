Ext.define("com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager", function(CollectionViewSortStateManager) {/*package com.coremedia.cms.editor.sdk.collectionview.sort {
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.util.ColumnsUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;

import ext.StringUtil;
import ext.grid.column.Column;
import ext.util.Observable;

import mx.resources.ResourceManager;

/**
 * <p>
 *  The CollectionViewSortStateManager manages the sort state of a {@link GridView}.
 *  To manage the sort state the Manager needs the underlying {@link ColumnModel} and must be unique
 *  an instance of the {@link GridView}. To ensure the uniqueness the corresponding {@link GridView} provides the
 *  CollectionViewSortStateManager by implementing {@link SortStateManagerProvider}.
 * </p>
 * <p>
 *  Managing the sort state means:
 *  <ul>
 *    <li>Knowing about the default state or how to resolve the default state</li>
 *    <li>Hold the actual state</li>
 *    <li>Expose the actual state to the {@link CollectionViewModel}</li>
 *  </ul>
 * </p>
 * <p>
 *  The actual sort state is a commaseparated list of the pattern "sortfield sortdirection" and must have at least one
 *  sortfield with sortdirection.
 *  Examples for valid states:
 *  <ul>
 *    <li>name asc</li>
 *    <li>name asc,creationdate desc</li>
 *  </ul>
 * </p>
 *
 * @see {@link SortStateManagerProvider}
 * @see {@link GridView}
 * @see {@link ColumnModel}
 * /
public class CollectionViewSortStateManager extends Observable {
  private static const*/var SORT_DIRECTION_ASC$static/*:String*/ = "asc";/*

  private var collectionViewModel:CollectionViewModel;

  private var columnModel:Array;

  private var orderByPropertyInCollectionViewModel:String;
  private var expandedOrderByExpression:ValueExpression;

  public*/ function CollectionViewSortStateManager$(collectionViewModel/*:CollectionViewModel*/, columnModel/*:Array*/, orderByPropertyInCollectionViewModel/*:String*/) {this.super$ojnS();
    this.collectionViewModel$ojnS = collectionViewModel;

    this.columnModel$ojnS = columnModel;

    this.orderByPropertyInCollectionViewModel$ojnS = orderByPropertyInCollectionViewModel;

    this.getExpandedOrderByExpression().addChangeListener(AS3.bind(this,"onSortFieldChangedInModel$ojnS"));
    this.triggerSearch();
  }/*

  private*/ function onSortFieldChangedInModel()/*:void*/ {var this$=this;
    var sortField/*:String*/ = this.getSortFieldExpression().getValue();
    var column/*:Column*/ = this.getColumnBySortField$ojnS(sortField);
    if (!column) {
      var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor',
              'SearchList_sorting_error_handling_ui_has_no_header_title');
      var messagePattern/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor',
              'SearchList_sorting_error_handling_ui_has_no_header_message');
      var message/*:String*/ = Ext.String.format(messagePattern, sortField);
      com.coremedia.ui.logging.Logger.warn(title + ': ' + message);
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        this$.getExpandedOrderByExpression().setValue("freshness desc");
        this$.triggerSearch();
      });
    }
  }/*

  public*/ function triggerSearch()/*:void*/ {
    var sortField/*:String*/ = undefined;
    var sortDirection/*:String*/ = undefined;

    if(!this.getExpandedOrderByExpression().getValue()) {

      //search for the first column that is declared as defaultSortField
      for/* each*/ (var $1=0;$1</* in*/ this.columnModel$ojnS.length;++$1) {var column/*:Column*/ =this.columnModel$ojnS[$1];
        if (column['defaultSortColumn']) {
          sortField = getSortFieldFromColumn$static(column);
          sortDirection = column['defaultSortDirection'] || SORT_DIRECTION_ASC$static;
          break;
        }
      }

      //fallback: search for the first sortable column
      if(!sortField) {
        for/* each*/ (var $2=0;$2</* in*/ this.columnModel$ojnS.length;++$2) {var sColumn/*:Column*/ =this.columnModel$ojnS[$2];
          if(sColumn.sortable) {
            sortField = getSortFieldFromColumn$static(sColumn);
            break;
          }
        }
      }

      //well, something is broken
      if(!sortField) {
        throw new AS3.Error("CollectionViewSortStateManager did not find a sortable column, please check your column model definition.");
      }

      if(!sortDirection) {
        sortDirection = SORT_DIRECTION_ASC$static;
      }
    }
    else {
      sortField = this.getSortFieldFromModel$ojnS();
      sortDirection = this.getSortDirectionFromModel();
    }
    this.updateSortState$ojnS(sortField, false, sortDirection);
  }/*

  /**
   * Sort by data index, by retrieving the sort field for this data index and starting a sort for the sort field.
   *
   * @param dataIndex String
   * @param shouldToggle true if the sort direction should be toggled, false else
   * @param dir the sort direction which will be set. Valid Parameters: 'asc' (sort ascending) or 'desc' (sort descending)
   *  This parameter is optional.
   * /
  public*/ function sortByDataIndex(dataIndex/*:String*/, shouldToggle/*:Boolean = true*/, dir/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:shouldToggle=true;case 2:dir=null;}
    var sortField/*:String*/ = this.getSortFieldFromDataIndex$ojnS(dataIndex);
    this.updateSortState$ojnS(sortField, shouldToggle, dir);
  }/*

  /**
   * Sort by column header, by retrieving the sort field for this header and starting a sort for the sort field.
   *
   * @param header the given header
   * @param shouldToggle true if the sort direction should be toggled, false else
   * @param dir the sort direction which will be set. Valid Parameters: 'asc' (sort ascending) or 'desc' (sort descending)
   *  This parameter is optional.
   * /
  public*/ function sortByHeader(header/*:String*/, shouldToggle/*:Boolean = true*/, dir/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:shouldToggle=true;case 2:dir=null;}
    var sortField/*:String*/ = this.getSortFieldFromHeader$ojnS(header);
    this.updateSortState$ojnS(sortField, shouldToggle, dir);
  }/*

  /**
   * Starting a sort with the sort field stored in model. This leads to a toggle of the sort direction.
   *
   * Valid states for the direction are asc (for ascending) and desc (for descending).
   * /
  public*/ function sortToggle()/*:void*/ {
    var sortField/*:String*/ = this.getSortFieldFromModel$ojnS();
    this.updateSortState$ojnS(sortField);
  }/*

  private*/ function updateSortState(sortField/*:String*/, shouldToggle/*:Boolean = true*/, dir/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:shouldToggle=true;case 2:dir=null;}
    dir = (dir && (['asc', 'desc'].indexOf(dir.toLowerCase()) !== -1)) ? dir.toLowerCase() : null;

    var sortDirection/*:String*/ = dir || this.getSortDirectionFromModel();

    var column/*:Column*/ = this.getColumnBySortField$ojnS(sortField);
    if (column) {
      if (!dir) {
        //TODO: EXT6_API
        if (column['sortDirection']) {
          sortDirection = readDirectionFromColumn$static(sortDirection, column);
        } else {
          if (shouldToggle) {
            sortDirection = this.toggleDirection$ojnS(sortField, sortDirection);
          }
        }
      }

      //compute the order by clause
      var orderBy/*:String*/ = sortField + ' ' + sortDirection;
      var extendOrderBy/*:Function*/ = column['extendOrderBy'];
      if (extendOrderBy) {
        //we expect an array of sortField/sortDirection pair or a String with single sortField/sortDirection
        var extended/*:Object*/ = extendOrderBy(sortField, sortDirection);
        var extendedString/*:String*/ = (AS3.is(extended,  Array)) ? (AS3.as(extended,  Array)).join(',') :AS3.as( extended,  String);
        orderBy += ',' + extendedString;
      }

      // Update the collection view state. Other authorities (like FVEs) listen for these state updates and
      // trigger a reload/resort of the list.
      this.getExpandedOrderByExpression().setValue(orderBy);
      this.collectionViewModel$ojnS.getMainStateBean().set(this.orderByPropertyInCollectionViewModel$ojnS, orderBy);
    }
  }/*

  private static*/ function readDirectionFromColumn$static(sortDirection/*:String*/, column/*:Column*/)/*:String*/ {
    var sortDirectionFromColumn/*:String*/ = column["sortDirection"];
    if (sortDirectionFromColumn === "asc" || sortDirectionFromColumn === "desc") {
      return sortDirectionFromColumn;
    }
    else {
      com.coremedia.ui.logging.Logger.warn("Invalid sortdirection in column " + column.dataIndex);
    }
    return sortDirection;
  }/*

  private*/ function toggleDirection(sortField/*:String*/, sortDirection/*:String*/)/*:String*/ {
    if (this.getSortFieldFromModel$ojnS() === sortField) {
      //toggle only the direction
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    }
    return sortDirection;
  }/*

  public*/ function getExpandedOrderByExpression()/*:ValueExpression*/ {
    if(!this.expandedOrderByExpression$ojnS) {
      this.expandedOrderByExpression$ojnS = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(null);
    }
    return this.expandedOrderByExpression$ojnS;
  }/*

  /**
   * Returns a value expression bound to the sort field model.
   *
   * @return the value expression for the sort field in model.
   * /
  public*/ function getSortFieldExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      return this$.getSortFieldFromModel$ojnS();
    });
  }/*

  /**
   * Returns a value expression bound to the sort direction in the model.
   *
   * @return the value expression for the sort direction.
   * /
  public*/ function getSortDirectionExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      return this$.getSortDirectionFromModel();
    });
  }/*

  /**
   * get the header of the column with the given sort field.
   *
   * @param sortField the given sort field of solr sortField
   * @return the column header if the column and it's header exist. Otherwise null will be returned.
   * /
  public*/ function getHeaderFromSortField(sortField/*:String*/)/*:String*/ {
    var column/*:Column*/ = this.getColumnBySortField$ojnS(sortField);
    if (!column) {
      var error/*:Error*/ = new AS3.Error(sortField);
      com.coremedia.ui.logging.Logger.error("No column is configured for the sort field: " + sortField);
      throw error;
    } else {
      if (column.header) {
        return column.header;
      } else {
        com.coremedia.ui.logging.Logger.error("No header is configured for the column with dataIndex: " + column.dataIndex);
        return column.dataIndex;
      }
    }
  }/*

  /**
   * Returns the sort direction state directly from the model.
   * If it is sorted by multiple columns, the sort direction of the first pair will be returned.
   *
   * @return the sort direction. The only possible values are 'asc' and 'desc'
   * /
  public*/ function getSortDirectionFromModel()/*:String*/ {
    var sortDirection/*:String*/ = 'desc';
    var orderByArray/*:Array*/ = this.getCurrentSortCriteria();
    if (orderByArray.length > 0) {
      var firstOrderByArray/*:Array*/ = orderByArray[0].split(' ');
      sortDirection = firstOrderByArray[1] && firstOrderByArray[1].toLowerCase();
    }
    return sortDirection;
  }/*

  /**
   * Compute the index of the column which corresponds to the currently sorted field in the model
   *
   * @return the column index
   * /
  public*/ function getSortColumnIndexFromModel()/*:Number*/ {
    var column/*:Column*/ = this.getSortColumnFromModel();
    return column ? this.columnModel$ojnS.indexOf(column) : -1;
  }/*

  /**
   * Compute the column which corresponds to the currently sorted field in the model
   *
   * @return the column
   * /
  public*/ function getSortColumnFromModel()/*:Column*/ {
    return this.getColumnBySortField$ojnS(this.getSortFieldFromModel$ojnS());
  }/*

  private static*/ function getSortFieldFromColumn$static(column/*:Column*/)/*:String*/ {
    //If sortField is not configured take the lower case of dataIndex
    //TODO: EXT6_API
    return column['sortField'] || column.dataIndex.toLowerCase();
  }/*

  private*/ function getSortFieldFromDataIndex(dataIndex/*:String*/)/*:String*/ {
    var sortField/*:String*/ = null;
    var column/*:Column*/ = com.coremedia.cms.editor.sdk.util.ColumnsUtil.getColumnByDataIndex(this.columnModel$ojnS, dataIndex);
    if (column) {
      sortField = getSortFieldFromColumn$static(column);
    }
    return sortField;
  }/*

  private*/ function getSortFieldFromHeader(header/*:String*/)/*:String*/ {
    var sortField/*:String*/ = null;
    var column/*:Column*/ = com.coremedia.cms.editor.sdk.util.ColumnsUtil.getColumnByHeader(this.columnModel$ojnS, header);
    if (column) {
      sortField = getSortFieldFromColumn$static(column);
    }
    return sortField;
  }/*

  private*/ function getColumnBySortField(sortField/*:String*/)/*:Column*/ {
    var matchedColumns/*:Array*/ = this.columnModel$ojnS.filter(function (column/*:Column*/)/*:Boolean*/ {
      return getSortFieldFromColumn$static(column) === sortField;
    });
    return matchedColumns.length >= 1 ? matchedColumns[0] : null;
  }/*

  private*/ function getSortFieldFromModel()/*:String*/ {
    var sortField/*:String*/;
    var orderByArray/*:Array*/ = this.getCurrentSortCriteria();
    if (orderByArray.length > 0) {
      var firstOrderByArray/*:Array*/ = orderByArray[0].split(' ');
      sortField = firstOrderByArray[0];
    }
    return sortField;
  }/*

  //name asc,type desc
  public*/ function getCurrentSortCriteria()/*:Array*/ {
    return this.expandedOrderByExpression$ojnS.getValue().split(',');
  }/*

  //name asc,type desc
  public*/ function setCurrentSortCriteria(sortCriteria/*:String*/)/*:void*/ {
    this.expandedOrderByExpression$ojnS.setValue(sortCriteria);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      collectionViewModel$ojnS: null,
      columnModel$ojnS: null,
      orderByPropertyInCollectionViewModel$ojnS: null,
      expandedOrderByExpression$ojnS: null,
      constructor: CollectionViewSortStateManager$,
      super$ojnS: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      onSortFieldChangedInModel$ojnS: onSortFieldChangedInModel,
      triggerSearch: triggerSearch,
      sortByDataIndex: sortByDataIndex,
      sortByHeader: sortByHeader,
      sortToggle: sortToggle,
      updateSortState$ojnS: updateSortState,
      toggleDirection$ojnS: toggleDirection,
      getExpandedOrderByExpression: getExpandedOrderByExpression,
      getSortFieldExpression: getSortFieldExpression,
      getSortDirectionExpression: getSortDirectionExpression,
      getHeaderFromSortField: getHeaderFromSortField,
      getSortDirectionFromModel: getSortDirectionFromModel,
      getSortColumnIndexFromModel: getSortColumnIndexFromModel,
      getSortColumnFromModel: getSortColumnFromModel,
      getSortFieldFromDataIndex$ojnS: getSortFieldFromDataIndex,
      getSortFieldFromHeader$ojnS: getSortFieldFromHeader,
      getColumnBySortField$ojnS: getColumnBySortField,
      getSortFieldFromModel$ojnS: getSortFieldFromModel,
      getCurrentSortCriteria: getCurrentSortCriteria,
      setCurrentSortCriteria: setCurrentSortCriteria,
      requires: [
        "AS3.Error",
        "Ext.String",
        "Ext.util.Observable",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ColumnsUtil"]
    };
});
