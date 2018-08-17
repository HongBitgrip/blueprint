Ext.define("com.coremedia.ui.plugins.BindSelectionPluginBase", function(BindSelectionPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.data.Model;
import ext.data.Store;
import ext.dom.Element;
import ext.grid.GridPanel;
import ext.plugin.AbstractPlugin;
import ext.selection.RowSelectionModel;
import ext.selection.SelectionModel;
import ext.view.DataView;

import js.CSS2Properties;

import js.Element;
import js.HTMLElement;

// Thank you, Ext JS, for a lot of code: all list-presenting components like DataView and GridPanel have
// slightly different selection APIs.
// TODO: maybe we can build adapters to a common model?
/**
 * Bind the selection of a component to some backing bean.
 * /
[PublicApi]
public class BindSelectionPluginBase extends AbstractPlugin {

  private var selectedValuesExpression:ValueExpression;
  private var selectedPositionsExpression:ValueExpression;

  private var ignoreEmptySelection:Boolean;
  private var gridPanel:GridPanel;
  private var rowSelectionModel:RowSelectionModel;
  private var dataView:DataView;
  private var componentStore:Store;
  private var possibleSelections:Array;
  private var possibleSelectionsLocked:Boolean = false;
  private var editedRecords:Array;
  private var willProcessGridSelectionChanged:Boolean = false;
  private var willProcessDataViewSelectionChanged:Boolean = false;

  private var equalsStrategy:Function;
  private var preventFocus:Boolean;

  /**
   * Bind a property path of a given bean to the selection of a component.
   * If neither an id nor a bean is given, the <code>applicationContext</code> bean is used.
   *
   * @param config the config object
   * @see com.coremedia.ui.data.#applicationContext
   * /
  public*/ function BindSelectionPluginBase$(config/*:BindSelectionPlugin = null*/) {if(arguments.length<=0)config=null;
    this.selectedPositionsExpression$bI91 = AS3.getBindable(config,"selectedPositions");
    this.selectedValuesExpression$bI91 = AS3.getBindable(config,"selectedValues");
    //noinspection PointlessBooleanExpressionJS
    this.ignoreEmptySelection$bI91 = ! !AS3.getBindable(config,"ignoreEmptySelection");

    this.equalsStrategy$bI91 = AS3.getBindable(config,"equalsStrategy") || function (o1/*:**/, o2/*:**/)/*:Boolean*/ {
              return o1 === o2;
            };
    this.preventFocus$bI91 = AS3.getBindable(config,"preventFocus") === true;
    this.super$bI91(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    component.addListener('beforedestroy',AS3.bind( this,"componentDestroyed$bI91"));
    if (AS3.is(component,  Ext.grid.Panel)) {
      this.gridPanel$bI91 =AS3.as( component,  Ext.grid.Panel);
      this.componentStore$bI91 = this.gridPanel$bI91.getStore();
      this.initGridPanel$bI91();
    } else if (AS3.is(component,  Ext.view.View)) {
      this.dataView$bI91 =AS3.as( component,  Ext.view.View);
      this.componentStore$bI91 = AS3.cast(Ext.data.Store,this.dataView$bI91.getStore());
      this.initDataView$bI91();
    }
  }/*

  private*/ function componentDestroyed()/*:void*/ {
    if (this.gridPanel$bI91) {
      this.gridPanelDestroyed$bI91();
    } else if (this.dataView$bI91) {
      this.dataViewDestroyed$bI91();
    }
  }/*

  private*/ function initGridPanel()/*:void*/ {var this$=this;

    this.gridPanel$bI91.addListener("afteredit",AS3.bind( this,"afterRowEdit$bI91"));

    this.rowSelectionModel$bI91 =AS3.as( this.gridPanel$bI91.getSelectionModel(),  Ext.selection.RowModel);

    this.addSelectionChangeListener$bI91();

    if (this.selectedValuesExpression$bI91) {
      this.selectedValuesExpression$bI91.addChangeListener(AS3.bind(this,"updateGridPanelSelectionOnSelectedValuesChange$bI91"));
      this.gridPanel$bI91.addListener("viewready",AS3.bind( this,"refreshGridView$bI91"));
      this.gridPanel$bI91.addListener("afterrender", function ()/*:void*/ {
        this$.gridPanel$bI91.getStore().addListener("load",AS3.bind( this$,"updateGridPanelSelectionOnSelectedValuesChange$bI91"), null, {single: true});
      }, null, {single: true});

      //restore the selection only on the load event defined by BindListPlugin
      this.gridPanel$bI91.getStore().addListener("beforeload",AS3.bind( this,"removeSelectionChangeListener$bI91"));
      this.gridPanel$bI91.getStore().addListener("load",AS3.bind( this,"preserveSelection$bI91"));
    }
  }/*


  private*/ function gridPanelDestroyed()/*:void*/ {
    this.removeSelectionChangeListener$bI91();

    if (this.selectedValuesExpression$bI91) {
      this.selectedValuesExpression$bI91.removeChangeListener(AS3.bind(this,"updateGridPanelSelectionOnSelectedValuesChange$bI91"));
      this.gridPanel$bI91.getStore().removeListener("load",AS3.bind( this,"preserveSelection$bI91"));
      this.gridPanel$bI91.getStore().removeListener("beforeload",AS3.bind( this,"removeSelectionChangeListener$bI91"));
    }

    this.gridPanel$bI91.removeListener("afteredit",AS3.bind( this,"afterRowEdit$bI91"));

    this.rowSelectionModel$bI91 = null;
    this.gridPanel$bI91 = null;
  }/*

  private*/ function refreshGridView()/*:void*/ {
    this.gridPanel$bI91.getView().refresh();
  }/*

  /**
   * Remember edited records in order to keep the selection in ListView after changing a documents name.
   * @param e the edit event object
   * /
  private*/ function afterRowEdit(e/*:Object*/)/*:void*/ {
    this.editedRecords$bI91 = [e.record];
  }/*

  /**
   * convenience method to select records of grid in bulk manner
   * @param rowSelectionModel
   * @param records
   * /
  private static*/ function selectRows$static(rowSelectionModel/*:RowSelectionModel*/, records/*:Array*/)/*:void*/ {
    var oldSelections/*:Array*/ = rowSelectionModel.getSelection();
    rowSelectionModel['silent'] = true;
    rowSelectionModel.select(records);
    var newSelections/*:Array*/ = rowSelectionModel.getSelection();
    newSelections.forEach(function (record/*:Model*/)/*:void*/ {
      if (oldSelections.indexOf(record) < 0) {
        rowSelectionModel.fireEvent('rowselect', rowSelectionModel, newSelections.indexOf(record), record);
      }
    });
    if (!com.coremedia.ui.util.ObjectUtils.equal(oldSelections, newSelections)) {
      rowSelectionModel.fireEvent('selectionchange', rowSelectionModel);
    }
    rowSelectionModel['silent'] = false;
  }/*

  /**
   * convenience method to select nodes of data view in bulk manner
   * @param dataView
   * @param records
   * /
  private static*/ function selectNodes$static(dataView/*:DataView*/, records/*:Array*/)/*:void*/ {
    var oldSelections/*:Array*/ = dataView.getSelectedNodes();
    dataView.getSelectionModel().select(records, false, true);
    var newSelections/*:Array*/ = dataView.getSelectedNodes();
    if (!com.coremedia.ui.util.ObjectUtils.equal(oldSelections, newSelections)) {
      dataView.fireEvent('selectionchange', dataView, newSelections);
    }
  }/*

  private*/ function addSelectionChangeListener()/*:void*/ {

    if (this.rowSelectionModel$bI91) {
      this.rowSelectionModel$bI91.addListener('selectionchange',AS3.bind( this,"gridSelectionChanged$bI91"));
    } else if (this.dataView$bI91) {
      this.dataView$bI91.addListener('selectionchange',AS3.bind( this,"dataViewSelectionChanged$bI91"));
    }
  }/*

  private*/ function removeSelectionChangeListener()/*:void*/ {
    if (this.rowSelectionModel$bI91) {
      this.rowSelectionModel$bI91.removeListener('selectionchange',AS3.bind( this,"gridSelectionChanged$bI91"));
    } else if (this.dataView$bI91) {
      this.dataView$bI91.removeListener('selectionchange',AS3.bind( this,"dataViewSelectionChanged$bI91"));
    }
  }/*

  // preserveSelection is called after a load/update of the underlying store, triggered by
  // the BindSelectionPlugin. A reason for updating the store is given:
  // 1. update after the store's component is layouted
  // 2. update after the store's record array has changed
  // Depending on the reason, the preserving selection mechanism does different things
  //noinspection JSUnusedLocalSymbols
  private*/ function preserveSelection(store/*:Store*/, records/*:Array*/, options/*:Object*/)/*:void*/ {
    // If an update because of a layout occurs, it is possible that the store still
    // holds an outdated record array. An update because of an array change might ensue a bit later.
    // Consequently, it might not be possible to select all the values of the
    // selectedValuesExpression just now. A copy of selectedValuesExpression's vale is stored
    // in possibleSelections, but only (!) if this is necessary, meaning that not all
    // values of selectedValuesExpression can be selected right now.
    // In addition, possibleSelections gets locked once it is written until another
    // reason than UPDATE_STORE_REASON_AFTER_LAYOUT leads to another selection (see @updateSelections()).
    if (options.reason === com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_REASON_AFTER_LAYOUT) {
      if (this.selectedValuesExpression$bI91.getValue() && (AS3.as(this.selectedValuesExpression$bI91.getValue(),  Array)).length > 0) {
        if (!this.possibleSelectionsLocked$bI91) {
          // Check whether it necessary to have the possibleSelections backup or
          // whether selectedValuesExpression can all be selected now.
          if (this.isPossibleToApplySelectedValuesExpression$bI91()) {
            this.possibleSelections$bI91 = null;
          } else {
            this.possibleSelections$bI91 = this.selectedValuesExpression$bI91.getValue() ? this.selectedValuesExpression$bI91.getValue() : null;
            this.possibleSelectionsLocked$bI91 = true;
          }
        }
        this.makeSelection$bI91(options.reason);
      }
    }

    // If an update because of an array change occurs, the selected values
    // expression is used directly for making selections only if:
    // (1) It is directly possible to apply the selected values
    // (2) the selected values are not subsumed by the possible selections
    // Elsewhise, the selected values expression is set to the possible selections.
    if (options.reason === com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE) {
      if (this.selectedValuesExpression$bI91.getValue()
              && this.isPossibleToApplySelectedValuesExpression$bI91()
              && !this.possibleSelectionsSubsumeSelectedValues$bI91()) {
        this.possibleSelections$bI91 = null;
      } else if (this.possibleSelections$bI91) {
        this.selectedValuesExpression$bI91.setValue(this.possibleSelections$bI91);
        this.possibleSelections$bI91 = null;
      }
      if (this.selectedValuesExpression$bI91.getValue() && (this.rowSelectionModel$bI91 || this.dataView$bI91)) {
        this.makeSelection$bI91(options.reason);
      }
    }

    //remove redundant selection change listener
    this.removeSelectionChangeListener$bI91();
    this.addSelectionChangeListener$bI91();
  }/*

  private*/ function possibleSelectionsSubsumeSelectedValues()/*:Boolean*/ {var this$=this;
    if (!this.possibleSelections$bI91) {
      return false;
    }
    var result/*:Boolean*/ = true;
    if (this.selectedValuesExpression$bI91 && this.selectedValuesExpression$bI91.getValue()) {
      this.selectedValuesExpression$bI91.getValue().forEach(function (item/*:**/)/*:void*/ {
        if (this$.possibleSelections$bI91.indexOf(item) === -1) {
          result = false;
        }
      });
    }
    return result;
  }/*

  private*/ function isPossibleToApplySelectedValuesExpression()/*:Boolean*/ {
    return this.getRecords$bI91(this.componentStore$bI91, this.selectedValuesExpression$bI91.getValue()).length === (AS3.as(this.selectedValuesExpression$bI91.getValue(),  Array)).length;
  }/*

  private*/ function makeSelection(reason/*:UpdateStoreReason*/)/*:void*/ {
    var selectedValues/*:Array*/ = this.selectedValuesExpression$bI91.getValue();
    if (this.rowSelectionModel$bI91) {
      selectRows$static(this.rowSelectionModel$bI91, this.getRecords$bI91(this.gridPanel$bI91.getStore(), selectedValues));
      this.scrollSelectionIntoView$bI91();
      this.gridSelectionChangedWithReason$bI91(reason);
    } else if (this.dataView$bI91) {
      selectNodes$static(this.dataView$bI91, this.getRecords$bI91(AS3.cast(Ext.data.Store,this.dataView$bI91.getStore()), selectedValues));
      this.scrollSelectionIntoView$bI91();
      this.dataViewSelectionChangedWithReason$bI91(reason);
    }
  }/*

  private*/ function initDataView()/*:void*/ {var this$=this;
    this.addSelectionChangeListener$bI91();

    this.dataView$bI91.getStore().addListener("update",AS3.bind( this,"updateRecord$bI91"));

    if (this.selectedValuesExpression$bI91) {
      this.selectedValuesExpression$bI91.addChangeListener(AS3.bind(this,"updateDataViewSelectionOnSelectedValuesChange$bI91"));
      this.dataView$bI91.addListener("afterrender", function ()/*:void*/ {
        this$.dataView$bI91.getStore().addListener("load",AS3.bind( this$,"updateDataViewSelectionOnSelectedValuesChange$bI91"), null, {single: true});
      }, null, {single: true});

      //restore the selection only on the load event defined by BindListPlugin
      this.dataView$bI91.getStore().addListener("beforeload",AS3.bind( this,"removeSelectionChangeListener$bI91"));
      this.dataView$bI91.getStore().addListener("load",AS3.bind( this,"preserveSelection$bI91"));
    }

  }/*

  private*/ function dataViewDestroyed()/*:void*/ {
    this.removeSelectionChangeListener$bI91();

    if (this.selectedValuesExpression$bI91) {
      this.selectedValuesExpression$bI91.removeChangeListener(AS3.bind(this,"updateDataViewSelectionOnSelectedValuesChange$bI91"));
      this.dataView$bI91.getStore().removeListener("load",AS3.bind( this,"preserveSelection$bI91"));
      this.dataView$bI91.getStore().removeListener("beforeload",AS3.bind( this,"removeSelectionChangeListener$bI91"));
      this.dataView$bI91.getStore().removeListener("update",AS3.bind( this,"updateRecord$bI91"));
    }

    this.dataView$bI91 = null;
  }/*

  //noinspection JSUnusedLocalSymbols
  /**
   * Remember edited records in order to keep the selection in thumbnail view  after changing a documents name.
   * @param store     the store
   * @param rs        the affected record
   * @param operation the update operation
   * /
  private*/ function updateRecord(store/*:Store*/, rs/*:Model*/, operation/*:String*/)/*:void*/ {
    if (operation === "edit") {
      this.editedRecords$bI91 = [rs];
    }
  }/*

  private*/ function dataViewSelectionChanged()/*:void*/ {
    // Selection change events for multi-section arrive in quick succession,
    // one event per selected row. Process events later to avoid duplicate work.
    if (!this.willProcessDataViewSelectionChanged$bI91) {
      this.willProcessDataViewSelectionChanged$bI91 = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"processDataViewSelectionChanged$bI91"));
    }
  }/*

  private*/ function processDataViewSelectionChanged()/*:void*/ {
    if (this.dataView$bI91) {
      this.willProcessDataViewSelectionChanged$bI91 = false;
      this.dataViewSelectionChangedWithReason$bI91(com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_UNSPECIFIC_REASON);
    }
  }/*

  private*/ function dataViewSelectionChangedWithReason(reason/*:UpdateStoreReason*/)/*:void*/ {
    this.componentSelectionsChanged$bI91(this.dataView$bI91.getSelectionModel().getSelection(), reason);
  }/*

  /**
   * synchronize the selectedValuesExpression to the selection of the data view
   * /
  private*/ function updateDataViewSelectionOnSelectedValuesChange()/*:void*/ {
    if (this.dataView$bI91.rendered) {
      if (this.selectedValuesExpression$bI91) {
        //if selection is not changed do nothing
        var selectedBeans/*:Array*/ = this.getBeans$bI91(this.dataView$bI91.getSelectionModel().getSelection());
        var selectedValues/*:**/ = this.selectedValuesExpression$bI91.getValue() || [];
        if (com.coremedia.ui.util.ObjectUtils.equal(selectedBeans, selectedValues)) {
          return;
        }

        if (selectedValues) {
          //we assume at this point that the selectedValues have been changed programmatically.
          //When a selected bean is not found in the store we assume that the selections aims to a newly loaded store
          if (this.containsRecords$bI91(AS3.cast(Ext.data.Store,this.dataView$bI91.getStore()), selectedValues)) {
            selectNodes$static(this.dataView$bI91, this.getRecords$bI91(AS3.cast(Ext.data.Store,this.dataView$bI91.getStore()), selectedValues));
            this.scrollSelectionIntoView$bI91();
          } else {
            //preserveSelection will restore the selection at the next load event
          }
        } else {
          this.dataView$bI91.getSelectionModel().deselectAll();
        }
      }
    }
  }/*

  /**
   * synchronize the selectedValuesExpression to the selections of the grid
   * /
  private*/ function updateGridPanelSelectionOnSelectedValuesChange()/*:void*/ {
    if (this.gridPanel$bI91.rendered) {
      if (this.selectedValuesExpression$bI91) {
        //if selection is not changed do nothing
        var selectedBeans/*:Array*/ = this.getBeans$bI91(this.rowSelectionModel$bI91.getSelection());
        var selectedValues/*:Array*/ = this.selectedValuesExpression$bI91.getValue() || [];
        if (com.coremedia.ui.util.ObjectUtils.equal(selectedBeans, selectedValues)) {
          return;
        }

        if (selectedValues && selectedValues.length > 0) {
          //we assume at this point that the selectedValues have been changed programmatically.
          //When a selected bean is not found in the store we assume that the selections aims to a newly loaded store
          if (this.containsRecords$bI91(this.gridPanel$bI91.getStore(), selectedValues)) {
            selectRows$static(this.rowSelectionModel$bI91, this.getRecords$bI91(this.gridPanel$bI91.getStore(), selectedValues));
            this.scrollSelectionIntoView$bI91();
          } else {
            //preserveSelection will restore the selection at the next load event
          }
        } else {
          this.rowSelectionModel$bI91.deselectAll();
        }
      }
    }
  }/*

  private*/ function gridSelectionChangedWithReason(reason/*:UpdateStoreReason*/)/*:void*/ {var this$=this;
    //update the positions expression
    if (this.selectedPositionsExpression$bI91) {
      var selectedPositions/*:Array*/ = [];
      this.rowSelectionModel$bI91.getSelection().forEach(function (record/*:Model*/)/*:void*/ {
        var position/*:Number*/ = this$.gridPanel$bI91.getStore().indexOf(record);
        if (position >= 0) {
          selectedPositions.push(position);
        }
      });
      this.selectedPositionsExpression$bI91.setValue(selectedPositions);
    }

    this.componentSelectionsChanged$bI91(this.rowSelectionModel$bI91.getSelection(), reason);
  }/*

  private*/ function gridSelectionChanged()/*:void*/ {
    // Selection change events for multi-section arrive in quick succession,
    // one event per selected row. Process events later to avoid duplicate work.
    if (!this.willProcessGridSelectionChanged$bI91) {
      this.willProcessGridSelectionChanged$bI91 = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"processGridSelectionChanged$bI91"));
    }
  }/*

  private*/ function processGridSelectionChanged()/*:void*/ {
    if (this.gridPanel$bI91) {
      this.willProcessGridSelectionChanged$bI91 = false;
      this.gridSelectionChangedWithReason$bI91(com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_UNSPECIFIC_REASON);
    }
  }/*

  private static*/ function scrollIntoViewIfNeeded$static(el/*:HTMLElement*/)/*:void*/ {
    var parent/*:js.Element*/ = el.parentNode,
            parentComputedStyle/*:CSS2Properties*/ = window.getComputedStyle(parent, null),
            parentBorderTopWidth/*:Number*/ = parseInt(parentComputedStyle.getPropertyValue('border-top-width')),
            parentBorderLeftWidth/*:Number*/ = parseInt(parentComputedStyle.getPropertyValue('border-left-width')),
            overTop/*:Boolean*/ = el.offsetTop - parent.offsetTop < parent.scrollTop,
            overBottom/*:Boolean*/ = (el.offsetTop - parent.offsetTop + el.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight),
            overLeft/*:Boolean*/ = el.offsetLeft - parent.offsetLeft < parent.scrollLeft,
            overRight/*:Boolean*/ = (el.offsetLeft - parent.offsetLeft + el.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth),
            alignWithTop/*:Boolean*/ = overTop && !overBottom;

    if (overTop || overBottom || overLeft || overRight) {
      el.scrollIntoView(alignWithTop);
    }
  }/*

  private*/ function scrollSelectionIntoView()/*:void*/ {var this$=this;
    if (this.rowSelectionModel$bI91) {
      if (!this.preventFocus$bI91 && this.rowSelectionModel$bI91.getSelection().length > 0) {
        this.rowSelectionModel$bI91.getSelection().forEach(function (record/*:Model*/)/*:void*/ {
          var row/*:HTMLElement*/ = this$.gridPanel$bI91.getView().getRow(record);
          row && scrollIntoViewIfNeeded$static(row);
        });
      }
    } else if (this.dataView$bI91) {
      if (this.dataView$bI91.getSelectedNodes().length > 0) {
        this.dataView$bI91.getSelectedNodes().forEach(function (element/*:js.Element*/)/*:void*/ {
          var thumbEl/*:ext.dom.Element*/ = Ext.get(element);
          // search scroller element for data view: go up parent hierarchy of
          // the scroll target until an element with style property 'overflow'
          // set to 'auto' is found. But search only as far as the data view's owner
          // container.
          var scrollParent/*:ext.dom.Element*/ = thumbEl.parent();
          while (scrollParent && (scrollParent != this$.dataView$bI91.up().getEl()) && (scrollParent.dom.style.overflow != "auto")) {
            scrollParent = scrollParent.parent();
          }
          if (scrollParent && (scrollParent.dom.style.overflow === "auto")) {
            thumbEl.scrollIntoView(scrollParent);
          }
        });
      }
    }
  }/*

  private*/ function componentSelectionsChanged(selectedRecords/*:Array*//*BeanRecord*/, reason/*:UpdateStoreReason*/)/*:void*/ {
    if (this.ignoreEmptySelection$bI91 && (!selectedRecords || selectedRecords.length === 0)) {
      return;
    }

    if ((!selectedRecords || selectedRecords.length === 0) && this.editedRecords$bI91 && this.editedRecords$bI91.length > 0) {
      selectedRecords = this.editedRecords$bI91;
      this.editedRecords$bI91 = [];
    }
    this.updateSelection$bI91(selectedRecords, reason);
  }/*

  // Here, current selections finally find their way into the selectedValuesExpression
  private*/ function updateSelection(selectedRecords/*:Array*/, reason/*:UpdateStoreReason*/)/*:void*/ {
    if (this.selectedValuesExpression$bI91) {
      var selectedBeans/*:Array*/ = this.getBeans$bI91(selectedRecords);
      if (reason !== com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_REASON_AFTER_LAYOUT) {
        this.possibleSelectionsLocked$bI91 = false;
      }
      this.selectedValuesExpression$bI91.setValue(selectedBeans);
    }
  }/*

  private*/ function getBeans(records/*:Array*/)/*:Array*/ {
    var beans/*:Array*/ = [];
    records.forEach(function (record/*:Model*/)/*:void*/ {
      if (AS3.is(record,  com.coremedia.ui.store.BeanRecord)) {
        beans.push((AS3.as(record,  com.coremedia.ui.store.BeanRecord)).getBean());
      }
    });
    return beans;
  }/*

  private*/ function getRecords(store/*:Store*/, beans/*:Array*/)/*:Array*/ {var this$=this;
    //noinspection JSMismatchedCollectionQueryUpdate
    var preferedRecordIndices/*:Array*/ = null;

    if (this.componentStore$bI91) {
      var selectionModel/*:SelectionModel*/ = this.gridPanel$bI91 ? this.gridPanel$bI91.getSelectionModel() : this.dataView$bI91.getSelectionModel();
      if (selectionModel) {
        preferedRecordIndices = selectionModel.getSelection().map(function (rec/*:BeanRecord*/)/*:int*/ {
          return this$.componentStore$bI91.indexOf(rec);
        });
      }
    }

    var records/*:Array*/ = [];
    var usedIndices/*:Object*/ = {};

    beans.forEach(function (bean/*:Bean*/)/*:void*/ {
      var indices/*:Array*/ = this$.findBeanRecordIndices$bI91(store, bean);
      if (indices.length > 0) {
        var indexToTake/*:Number*/ = -1;
        // always try to restore an prefered record index first
        if (preferedRecordIndices) {
          preferedRecordIndices.some(function (preferedIndex/*:Number*/)/*:Boolean*/ {
            if (!usedIndices[preferedIndex]) {
              if (indices.indexOf(preferedIndex) > -1) {
                indexToTake = preferedIndex;
                return true;
              }
            }
            return false;
          });
        }
        // if prefered record index could not be restored
        if (indexToTake === -1) {
          // take the first record representing the bean that was notused yet.
          indices.some(function (index/*:Number*/)/*:Boolean*/ {
            if (!usedIndices[index]) {
              indexToTake = index;
              return true;
            }
            return false;
          });
        }
        // if an index was found
        if (indexToTake > -1) {
          // add the index to the usedIndices hash and add it to the result
          usedIndices[indexToTake] = true;
          records.push(store.getAt(indexToTake));
        }
      }
    });

    return records;
  }/*

  private*/ function containsRecords(store/*:Store*/, beans/*:Array*/)/*:Boolean*/ {var this$=this;
    var contains/*:Boolean*/ = true;
    beans.forEach(function (bean/*:Bean*/)/*:void*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var indices/*:Array*/ = this$.findBeanRecordIndices$bI91(store, bean);
      if (indices.length === 0) {
        contains = false;
      }
    });
    return contains;
  }/*
  /**
   * Find all indices of {@link BeanRecord}s with given bean in store.
   * /
  [ArrayElementType("Number")]
  private*/ function findBeanRecordIndices(store/*:Store*/, bean/*:Bean*/)/*:Array*/ {var this$=this;
    var indices/*:Array*/ = [];
    if (bean) {
      store.each(function (record/*:BeanRecord*/)/*:void*/ {
        if (this$.equalsStrategy$bI91(record.getBean(), bean)) {
          indices.push(store.indexOf(record));
        }
      });
    }
    return indices;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      selectedValuesExpression$bI91: null,
      selectedPositionsExpression$bI91: null,
      ignoreEmptySelection$bI91: false,
      gridPanel$bI91: null,
      rowSelectionModel$bI91: null,
      dataView$bI91: null,
      componentStore$bI91: null,
      possibleSelections$bI91: null,
      possibleSelectionsLocked$bI91: false,
      editedRecords$bI91: null,
      willProcessGridSelectionChanged$bI91: false,
      willProcessDataViewSelectionChanged$bI91: false,
      equalsStrategy$bI91: null,
      preventFocus$bI91: false,
      constructor: BindSelectionPluginBase$,
      super$bI91: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      componentDestroyed$bI91: componentDestroyed,
      initGridPanel$bI91: initGridPanel,
      gridPanelDestroyed$bI91: gridPanelDestroyed,
      refreshGridView$bI91: refreshGridView,
      afterRowEdit$bI91: afterRowEdit,
      addSelectionChangeListener$bI91: addSelectionChangeListener,
      removeSelectionChangeListener$bI91: removeSelectionChangeListener,
      preserveSelection$bI91: preserveSelection,
      possibleSelectionsSubsumeSelectedValues$bI91: possibleSelectionsSubsumeSelectedValues,
      isPossibleToApplySelectedValuesExpression$bI91: isPossibleToApplySelectedValuesExpression,
      makeSelection$bI91: makeSelection,
      initDataView$bI91: initDataView,
      dataViewDestroyed$bI91: dataViewDestroyed,
      updateRecord$bI91: updateRecord,
      dataViewSelectionChanged$bI91: dataViewSelectionChanged,
      processDataViewSelectionChanged$bI91: processDataViewSelectionChanged,
      dataViewSelectionChangedWithReason$bI91: dataViewSelectionChangedWithReason,
      updateDataViewSelectionOnSelectedValuesChange$bI91: updateDataViewSelectionOnSelectedValuesChange,
      updateGridPanelSelectionOnSelectedValuesChange$bI91: updateGridPanelSelectionOnSelectedValuesChange,
      gridSelectionChangedWithReason$bI91: gridSelectionChangedWithReason,
      gridSelectionChanged$bI91: gridSelectionChanged,
      processGridSelectionChanged$bI91: processGridSelectionChanged,
      scrollSelectionIntoView$bI91: scrollSelectionIntoView,
      componentSelectionsChanged$bI91: componentSelectionsChanged,
      updateSelection$bI91: updateSelection,
      getBeans$bI91: getBeans,
      getRecords$bI91: getRecords,
      containsRecords$bI91: containsRecords,
      findBeanRecordIndices$bI91: findBeanRecordIndices,
      requires: [
        "Ext",
        "Ext.data.Store",
        "Ext.grid.Panel",
        "Ext.plugin.Abstract",
        "Ext.selection.RowModel",
        "Ext.view.View",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.ui.plugins.UpdateStoreReason",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
