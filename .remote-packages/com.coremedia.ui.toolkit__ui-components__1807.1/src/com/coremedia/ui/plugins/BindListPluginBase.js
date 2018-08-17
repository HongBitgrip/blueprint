Ext.define("com.coremedia.ui.plugins.BindListPluginBase", function(BindListPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.data.JsonStore;
import ext.data.Store;
import ext.dom.Element;
import ext.form.field.ComboBox;
import ext.grid.GridPanel;
import ext.plugin.AbstractPlugin;
import ext.util.Sorter;
import ext.view.DataView;
import ext.view.TableView;

import js.CSS2Properties;

import js.HTMLElement;

/**
 * A plugin to let an ext.grid.GridPanel or an ext.DataView fetch its data from an array-valued Bean from the
 * BeanFactory and inform of row selections by setting a configured property path to the Bean corresponding
 * to the selected row.
 * /
[PublicApi]
public class BindListPluginBase extends AbstractPlugin {

  private static const*/var DEFAULT_VIEW_LIMIT_INCREMENT$static/*:int*/ = 100;/*

  private var recordType:Class;
  private var bindToArray:ValueExpression;
  private var transformer:Function;
  private var ifUndefined:Array;

  /** @private * /
  protected var component:Component;
  private var store:Store;
  private var fields:Array;
  private var sortField:String;
  private var sortDirection:String;
  private var lazy:Boolean;
  private var visibleItems:Object =*/function visibleItems_(){this.visibleItems$_UfH=( {});}/*;
  private var initialViewLimit:int;
  private var viewLimitIncrement:int;
  private var viewLimit:int;
  private var beforeloadFired:Boolean = false;
  private var idProperty:String;
  private var dataViewScroller:Element;
  private var preventIncrementalUpdate:Boolean;

  /**
   * Create a plugin to let an ext.grid.GridPanel or an ext.DataView fetch its data from an array-valued Bean.
   *
   * @param config the configuration attributes of ext.grid.GridPanel plus the new options described above.
   * /
  public*/ function BindListPluginBase$(config/*:BindListPlugin = null*/) {if(arguments.length<=0)config=null;
    this.bindToArray$_UfH = AS3.getBindable(config,"bindTo");
    this.transformer$_UfH = AS3.getBindable(config,"transformer");
    this.ifUndefined$_UfH = AS3.getBindable(config,"ifUndefined");

    this.fields$_UfH = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"fields"));
    this.sortField$_UfH = AS3.getBindable(config,"sortField");
    this.sortDirection$_UfH = AS3.getBindable(config,"sortDirection") || 'ASC';
    this.lazy$_UfH = ! !AS3.getBindable(config,"lazy");
    this.viewLimit$_UfH = this.initialViewLimit$_UfH = AS3.getBindable(config,"initialViewLimit") || Number.MAX_VALUE;
    this.viewLimitIncrement$_UfH = AS3.getBindable(config,"viewLimitIncrement") || DEFAULT_VIEW_LIMIT_INCREMENT$static;
    this.idProperty$_UfH = AS3.getBindable(config,"idProperty");
    this.preventIncrementalUpdate$_UfH = AS3.getBindable(config,"preventIncrementalUpdate");
    this.super$_UfH(config);visibleItems_.call(this);;
  }/*

  private*/ function setupStore()/*:void*/ {
    this.recordType$_UfH = com.coremedia.ui.store.BeanRecord.create(this.fields$_UfH, this.lazy$_UfH);/*
    const*/var storeConfig/*:JsonStore*/ = AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(storeConfig,"model" , this.recordType$_UfH);
    if (this.sortField$_UfH) {
      var sorter/*:Sorter*/ = AS3.cast(Ext.util.Sorter,{});
      AS3.setBindable(sorter,"property" , this.sortField$_UfH);
      AS3.setBindable(sorter,"direction" , this.sortDirection$_UfH);
      AS3.setBindable(storeConfig,"sorters" , [sorter]);
    }
    //TODO: EXT6_API. #bindStore is not pubic API when the component is a grid
    // http://docs.sencha.com/extjs/6.0/6.0.1-classic/#!/api/Ext.grid.Panel-method-bindStore
    this.component['bindStore'](new Ext.data.JsonStore(storeConfig));

    this.afterSetupStore();
  }/*

  /** @private * /
  protected*/ function afterSetupStore()/*:void*/ {
    // Override in subclasses
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (!this.bindToArray$_UfH) {
      throw new AS3.Error(component.constructor.$class + " bindListPlugin must specify 'bindTo'");
    }
    if (AS3.is(component,  Ext.grid.Panel) ||AS3.is( component,  Ext.view.View) ||AS3.is( component,  Ext.form.field.ComboBox)) {
      if (AS3.is(component,  Ext.form.field.ComboBox)) {
        if ((AS3.as(component,  Ext.form.field.ComboBox)).queryMode !== "local") {
          AS3.cast(Ext.form.field.ComboBox,component.initialConfig).queryMode = AS3.cast(Ext.form.field.ComboBox,component).queryMode = "local";  // pretend we can still change the configuration!
        }
      } else if (AS3.is(component,  Ext.grid.Panel)) {
        component['getVisibleRowRange'] = function ()/*:Array*/ {
          return getVisibleRowRange$static(AS3.cast(Ext.grid.Panel,component));
        };
      }
      this.component =AS3.as( component,  Ext.Component); // least common type is BoxComponent
      component.addListener('beforerender',AS3.bind( this,"onBeforeRender$_UfH"), null, { single:true });

      this.setupStore$_UfH();
      this.store$_UfH = component['store'];
      //fire the datachanged event on store for grid panel
      //because otherwise the grid somehow forgets its first row entry. That leads to errors in styling and methods like selectFirstRow fail....
    } else {
      throw new AS3.Error(component.constructor.$class + " bindListPlugin plugin only works with grids, dataviews or comboboxes.");
    }
  }/*

  private*/ function onBeforeRender()/*:void*/ {var this$=this;
    if (this.lazy$_UfH) {
      this.component.addListener('afterrender',AS3.bind( this,"updateVisibility$_UfH"));
      this.component.addListener('show',AS3.bind( this,"updateVisibility$_UfH"));
      if (AS3.is(this.component,  Ext.grid.Panel)) {
        this.component.addListener("afterrender", function ()/*:void*/ {
          this$.component["getScrollTarget"]().getEl().addListener("scroll", function ()/*:void*/ {com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this$,"updateVisibility$_UfH"));});
        });
        this.component.addListener('afterlayout',AS3.bind( this,"updateVisibility$_UfH"));
        this.component.addListener('resize',AS3.bind( this,"updateVisibility$_UfH"));
      } else if (AS3.is(this.component,  Ext.view.View)) {
        // the afterlayout, bodyscroll, resize events are not available at the dataview but on the parent.
        this.component.up().addListener('afterlayout',AS3.bind( this,"updateVisibility$_UfH"));
        this.component.up().addListener('resize',AS3.bind( this,"updateVisibility$_UfH"));
        // the scroll event is fired by the parent container with a scroller
        this.component.addListener('afterrender', function()/*:void*/ {
          this$.getParentWithScroll$_UfH().addListener('scroll',AS3.bind( this$,"updateVisibility$_UfH"));
        }, null, { single:true });
      }
    }

    this.component.addListener('afterrender',AS3.bind( this,"componentRendered$_UfH"));
    this.component.addListener('beforedestroy',AS3.bind( this,"componentDestroyed$_UfH"));
  }/*

  private*/ function componentDestroyed()/*:void*/ {
    this.bindToArray$_UfH.removeChangeListener(AS3.bind(this,"updateStoreAfterArrayChange$_UfH"));
    this.bindToArray$_UfH = null;

    if (this.lazy$_UfH) {
      this.component.removeListener('afterrender',AS3.bind( this,"updateVisibility$_UfH"));
      this.component.removeListener('afterlayout',AS3.bind( this,"updateVisibility$_UfH"));
      this.component.removeListener('show',AS3.bind( this,"updateVisibility$_UfH"));
      this.component.removeListener('bodyscroll',AS3.bind( this,"updateVisibility$_UfH"));
      this.component.removeListener('resize',AS3.bind( this,"updateVisibility$_UfH"));
      if (AS3.is(this.component,  Ext.view.View)) {
        this.component.up() && this.component.up().removeListener('afterlayout',AS3.bind( this,"updateVisibility$_UfH"));
        this.component.up() && this.component.up().removeListener('resize',AS3.bind( this,"updateVisibility$_UfH"));
      }
    }

    this.component.removeListener('afterrender',AS3.bind( this,"componentRendered$_UfH"));
    this.component.removeListener('beforedestroy',AS3.bind( this,"componentDestroyed$_UfH"));

    this.store$_UfH.destroy();
    this.component = null;
  }/*

  private*/ function componentRendered()/*:void*/ {
    this.bindToArray$_UfH.addChangeListener(AS3.bind(this,"updateStoreAfterArrayChange$_UfH"));
    this.updateStoreAfterLayout$_UfH();
  }/*

  private*/ function updateStoreAfterArrayChange()/*:void*/ {
    this.viewLimit$_UfH = this.initialViewLimit$_UfH;
    this.updateStore$_UfH(com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE);
  }/*

  private*/ function updateStoreAfterLayout()/*:void*/ {
    this.updateStore$_UfH(com.coremedia.ui.plugins.UpdateStoreReason.UPDATE_STORE_REASON_AFTER_LAYOUT);
  }/*

  private*/ function updateStore(reason/*:UpdateStoreReason*/)/*:void*/ {
    if (!this.component) {
      return;
    }

    this.dataUpdated$_UfH(reason);
  }/*

  private*/ function truncateToViewLimit(array/*:Array*/)/*:Array*/ {
    if (!array || array.length <= this.viewLimit$_UfH) {
      return array;
    } else {
      return array.slice(0, this.viewLimit$_UfH);
    }
  }/*

  private*/ function dataUpdated(reason/*:UpdateStoreReason*/)/*:void*/ {var this$=this;
    Ext.suspendLayouts();
    try {

      // clear the store's filter to ensure that
      // the store's data is synchronized to the old bound list of the plugin
      if (this.store$_UfH.isFiltered()) {
        this.store$_UfH.clearFilter(false);
      }

      var list/*:Array*/ = this.truncateToViewLimit$_UfH(this.getData$_UfH());

      if (com.coremedia.ui.util.ObjectUtils.equal(list, this.getStoredList$_UfH())) {
        // unchanged; no need to empty and refill the store
        // the store cannot distinguish between empty or undefined and therefore we send
        // the load event also when the result and the store are equal
        // but tag the event as 'unchanged'. See BindListPlugin

        //fixes STUDIO-791, data view needs a refresh in order in order to get rid of the 'loading' div
        if (AS3.is(this.component,  Ext.view.View)) {
          var dataView/*:DataView*/ =AS3.as( this.component,  Ext.view.View);
          refreshDataView$static(dataView);
        }

        this.fireLoad$_UfH(list, {unchanged: true, reason: reason});
        return;
      }

      if (list === undefined) {
        return; // not yet loaded
      }

      if (list === null) {
        list = [];
      }
      // Index the existing records by the beans' uri paths.
      var recordsByUriPath/*:Object*/ = {};
      var recordIds/*:Array*/ = [];
      this.store$_UfH.each(function (record/*:BeanRecord*/)/*:Boolean*/ {
        var bean/*:Bean*/ = record.getBean();
        var beanId/*:String*/ = this$.getBeanId$_UfH(bean);
        recordIds.push(beanId);

        if (beanId && !recordsByUriPath[beanId]) {
          recordsByUriPath[beanId] = record;
        }
        return true;
      });

      var listIds/*:Array*/ = this.getBeanIds$_UfH(list);

      var commonPrefixLength/*:uint*/ = computeCommonPrefixLength$static(recordIds, listIds);
      var commonSuffixLength/*:uint*/ = computeCommonSuffixLength$static(recordIds, listIds);
      commonSuffixLength = Math.min(commonSuffixLength, recordIds.length - commonPrefixLength, listIds.length - commonPrefixLength);

      var toBeRemoved/*:int*/ = recordIds.length - commonPrefixLength - commonSuffixLength;
      // Perform an incremental update if there are few changes and
      // there is also a part of the store that did not change.
      if (!this.preventIncrementalUpdate$_UfH && toBeRemoved <= 4 && toBeRemoved < recordIds.length) {
        for (var k/*:uint*/ = 0; k < toBeRemoved; k++) {
          this.store$_UfH.removeAt(commonPrefixLength);
        }
        var newRecords/*:Array*/ = [];
        for (var i/*:uint*/ = commonPrefixLength; i < listIds.length - commonSuffixLength; i++) {
          var newRecord/*:BeanRecord*/ = new this.recordType$_UfH({bean: list[i]});
          newRecords.push(newRecord);
        }
        if (newRecords.length > 0) {
          this.store$_UfH.insert(commonPrefixLength, newRecords);
        }
      } else {
        if (!this.beforeloadFired$_UfH) {
          this.beforeloadFired$_UfH = true;
          this.store$_UfH.fireEvent("beforeload", this.store$_UfH, {});
        }
        var records/*:Array*/ = [];
        for (var j/*:int*/ = 0; j < list.length; j++) {
          var uriPath/*:String*/ = listIds[j];
          var existingRecord/*:BeanRecord*/ = undefined;
          if (uriPath) {
            existingRecord = recordsByUriPath[uriPath];
            if (existingRecord) {
              // Do not use records multiple times.
              delete recordsByUriPath[uriPath];
            }
          }
          var record/*:BeanRecord*/ = existingRecord || new this.recordType$_UfH({bean: list[j]});
          records.push(record);
        }

        // Remove all and add new records.
        this.store$_UfH.getData().replaceAll(records);
        // indicate that the store has been loaded, otherwise some checks will not be performed
        // this is normally performed using Store#setRecords or Store#loadRecords but we are doing things manually here
        ++this.store$_UfH["loadCount"];
        this.store$_UfH.fireEvent("refresh", this.store$_UfH, {});

        // Refresh data view to avoid 'dangling nodes' that no longer match the records.
        (AS3.is(this.component,  Ext.view.View)) && (AS3.as(this.component,  Ext.view.View)).refresh();

        this.viewLimit$_UfH = this.initialViewLimit$_UfH;
        this.updateVisibility$_UfH();
      }

      if (this.sortField$_UfH) {
        this.store$_UfH.sort(this.sortField$_UfH, this.sortDirection$_UfH);
      }

      // CMS-802. Refresh to hide loading spinner.
      if (AS3.is(this.component,  Ext.view.View)) {
        refreshDataView$static(AS3.as(this.component,  Ext.view.View));
      }

      this.fireLoad$_UfH(records || this.store$_UfH.getRange(), {reason: reason});

      // reset visibility cache.
      this.visibleItems$_UfH = {};
      this.updateVisibility$_UfH();

      if (AS3.is(this.component,  Ext.form.field.ComboBox)) {
        // A combo box will not update its display text automatically once the value is set.
        // We must trigger an update now.
        var comboBox/*:ComboBox*/ =AS3.as( this.component,  Ext.form.field.ComboBox);
        comboBox.setValue(comboBox.getValue());
      }
    } finally {
      Ext.resumeLayouts(true);
    }
  }/*

  private static*/ function refreshDataView$static(dataView/*:DataView*/)/*:void*/ {
    // We need a 'silent' refreshment here as the BindSelectionPlugin relies on it.
    var oldClearSelections/*:Function*/ = dataView["clearSelections"];
    dataView["clearSelections"] = Ext.emptyFn;
    dataView.refresh();
    dataView["clearSelections"] = oldClearSelections;
  }/*

  private static*/ function computeCommonPrefixLength$static(recordIds/*:Array*/, listIds/*:Array*/)/*:uint*/ {
    var commonPrefixLength/*:uint*/ = 0;
    for (var i/*:int*/ = 0; i < recordIds.length && i < listIds.length; i++) {
      var id1/*:**/ = recordIds[i];
      var id2/*:**/ = listIds[i];
      if (id1 && id2 && id1 === id2) {
        commonPrefixLength++;
      } else {
        break;
      }
    }
    return commonPrefixLength;
  }/*

  private static*/ function computeCommonSuffixLength$static(recordIds/*:Array*/, listIds/*:Array*/)/*:uint*/ {
    var maxCommonLength/*:Number*/ = Math.min(recordIds.length, listIds.length);
    for (var i/*:int*/ = 0; i < maxCommonLength; i++) {
      var id1/*:**/ = recordIds[recordIds.length - 1 - i];
      var id2/*:**/ = listIds[listIds.length - 1 - i];
      if (!(id1 && id2 && id1 === id2)) {
        return i;
      }
    }
    return maxCommonLength;
  }/*

  private*/ function getBeanIds(list/*:Array*/)/*:Array*/ {
    var beanIds/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < list.length; i++) {
      var bean/*:Bean*/ = list[i];
      var beanId/*:String*/ = this.getBeanId$_UfH(bean);
      beanIds.push(beanId);
    }
    return beanIds;
  }/*

  private*/ function getBeanId(bean/*:Bean*/)/*:String*/ {
    var uriPath/*:String*/;
    if (this.idProperty$_UfH) {
      uriPath = com.coremedia.ui.util.ObjectUtils.getProperty(bean, this.idProperty$_UfH);
    } else if (AS3.is(bean,  com.coremedia.ui.data.RemoteBean)) {
      uriPath = (AS3.as(bean,  com.coremedia.ui.data.RemoteBean)).getUriPath();
    }
    return uriPath;
  }/*

  private*/ function getData()/*:Array*/ {
    var value/*:**/ = this.bindToArray$_UfH.getValue();

    if (value === undefined){
      return this.ifUndefined$_UfH;
    }

    var list/*:Array*/ = this.transformer$_UfH ? this.transformer$_UfH(value) : value;
    return list;
  }/*

  private*/ function fireLoad(records/*:Array*/, options/*:Object*/)/*:void*/ {
    this.store$_UfH.fireEvent("load", this.store$_UfH, records, options);
    this.beforeloadFired$_UfH = false;
  }/*

  private*/ function getStoredList()/*:Array*/ {
    var list/*:Array*/ = [];
    this.store$_UfH.each(function (record/*:BeanRecord*/)/*:void*/ {
      list.push(record.getBean());
    });
    return list;
  }/*

  private*/ function adjustViewLimit(lastVisibleIndex/*:int*/)/*:void*/ {
    if (lastVisibleIndex + 1 >= this.viewLimit$_UfH) {
      var list/*:Array*/ = this.getData$_UfH();
      if (list) {
        var records/*:Array*/ = [];
        for (var i/*:int*/ = this.viewLimit$_UfH; i < Math.min(this.viewLimit$_UfH + this.viewLimitIncrement$_UfH, list.length); i++) {
          var bean/*:Bean*/ = list[i];
          var record/*:BeanRecord*/ = new this.recordType$_UfH({bean: bean});
          records.push(record);
        }
        this.viewLimit$_UfH += this.viewLimitIncrement$_UfH;
        //add new records.
        this.store$_UfH.add(records);
      }
    }
  }/*

  private*/ function updateVisibility()/*:Array*/ {
    var gridPanel/*:GridPanel*/ =AS3.as( this.component,  Ext.grid.Panel);
    var range/*:Array*/ = EMPTY_RANGE$static;
    if (gridPanel && gridPanel.rendered && gridPanel["layoutCounter"] > 0) {
      range = getVisibleRowRange$static(gridPanel);
      this.loadItems$_UfH(range);
    }

    var dataView/*:DataView*/ =AS3.as( this.component,  Ext.view.View);
    if (dataView && dataView.rendered && dataView.up()["layoutCounter"] > 0) {
      if (dataView.getStore().getCount() > 0) {
        range = this.getVisibleNodeRange$_UfH(dataView);
        this.loadItems$_UfH(range);
      }

    }
    return range;
  }/*

  private*/ function loadItems(range/*:Array*/)/*:void*/ {
    this.adjustViewLimit$_UfH(range[1]);
    for (var i/*:uint*/ = range[0]; i <= range[1]; ++i) {
      if (!this.visibleItems$_UfH[i]) {
        var record/*:BeanRecord*/ =AS3.as( this.store$_UfH.getAt(i),  com.coremedia.ui.store.BeanRecord);
        if (record) {
          this.visibleItems$_UfH[i] = true;
          record.startMonitoringBeanData();
        }
      }
    }
  }/*

  private static const*/var EMPTY_RANGE$static/*:Array*/;/* =*/function EMPTY_RANGE$static_(){EMPTY_RANGE$static=( [0, -1]);};/*

  private static*/ function getVisibleRowRange$static(grid/*:GridPanel*/)/*:Array*/ {
    var range/*:Array*/;
    var firstVisibleRow/*:Number*/ = getFirstVisibleRow$static(grid);
    if (firstVisibleRow < 0) {
      range = EMPTY_RANGE$static;
    } else {
      range = [firstVisibleRow, getLastVisibleRow$static(grid)];
    }
    return range;
  }/*

  private static*/ function getFirstVisibleRow$static(grid/*:GridPanel*/)/*:Number*/ {
    var view/*:TableView*/ = grid.getView();
    var scrollTop/*:Number*/ = view.getScrollY();
    var rowHeight/*:int*/ = getRowHeight$static(view);
    if (rowHeight === -1) {
      return -1;
    } else {
      return Math.floor(scrollTop / rowHeight);
    }
  }/*

  private static*/ function getLastVisibleRow$static(grid/*:GridPanel*/)/*:Number*/ {
    var view/*:TableView*/ = grid.getView();
    var scrollTop/*:Number*/ = view.getScrollY();
    var rowHeight/*:int*/ = getRowHeight$static(view);
    if (rowHeight === -1) {
      return -1;
    } else {
      var height/*:Number*/ = grid.body.getHeight(true);
      return Math.ceil((scrollTop + height - 1) / rowHeight) - 1;
    }
  }/*

  private static*/ function getRowHeight$static(view/*:TableView*/)/*:int*/ {
    var viewCount/*:int*/ = view.getStore().getCount();
    if (viewCount > 0) {
      for (var index/*:int*/ = 0; index < viewCount; index++) {
        var row/*:HTMLElement*/ = view.getRow(index);
        var fly/*:Element*/ = Ext.fly(row);
        if (fly && fly.isVisible()) {
          /* fly is the 'tr' element but the outermost element of a row is the 'table' element
          which in our case adds a 1px border. */
          var parent/*:Element*/ = fly.parent('table');
          var height/*:int*/;
          if (parent) {
            height = parent.getHeight();
            // manually remove cache entry for the parent element generated by Ext
            // this seems to be timing issue when we measure the height of an element while updating a grid
            // if not removed from the cache Ext will in some cases not properly update Grids leaving "dead" items due
            // to mapping to a DOM element that no longer exists
            delete Ext["cache"][parent.dom.id];
          } else {
            height = fly.getHeight();
          }
          return height;
        }
      }
    }

    return -1;
  }/*

  private*/ function getVisibleNodeRange(dataView/*:DataView*/)/*:Array*/ {
    var range/*:Array*/ = EMPTY_RANGE$static;
    var firstNode/*:HTMLElement*/ = dataView.getNode(0);
    if (firstNode) {
      var scrollContainer/*:Element*/ = this.getParentWithScroll$_UfH();
      // the width without the vertical scroll bar
      var width/*:Number*/ = scrollContainer.dom.clientWidth;
      var height/*:Number*/ = scrollContainer.dom.clientHeight;
      var nodeSize/*:Array*/ = getSizeWithMargins$static(firstNode);
      //don't use this offsetLeft anymore, doesn't work in WATF/size:
      //Ext.getCmp('collection-view').up().up().setSize(630, 489)
      var offsetLeftContainer/*:Number*/ = 0;//firstNode.offsetLeft;
      var nodesInARow/*:Number*/ = Math.floor((width - offsetLeftContainer)/ nodeSize[0]);
      var lastNodeInFirstRow/*:HTMLElement*/ = dataView.getNode(nodesInARow - 1);
      //test if the last node in the first row has the same offsetTop as the first node
      //if the test is negative decrement nodesInRow
      //the test is necessary as the scroll container has a right offset which cannot be calculated properly
      if (lastNodeInFirstRow && lastNodeInFirstRow.offsetTop !== firstNode.offsetTop) {
        nodesInARow--;
      }

      var offsetTopContainer/*:Number*/ = firstNode.offsetTop;
      var scrollTop/*:Number*/ = scrollContainer.dom.scrollTop;
      //consider the offset of the container to the nodes in the first row
      if (scrollTop > offsetTopContainer) {
        scrollTop = scrollTop - offsetTopContainer;
      }

      var firstVisibleNode/*:Number*/ = Math.floor(scrollTop / nodeSize[1]) * nodesInARow;
      var lastVisibleNode/*:Number*/ = Math.ceil((scrollTop + height - 1) / nodeSize[1]) * nodesInARow - 1;
      range = [firstVisibleNode, lastVisibleNode];
    }

    return range;
  }/*

  /**
   * The dataview itself has no scroller. So the parent dom element is supposed to have the scroller
   * TODO: make is configurable.
   * @return
   * /
  private*/ function getParentWithScroll()/*:Element*/ {
    if (!this.dataViewScroller$_UfH) {
      this.dataViewScroller$_UfH = this.component.el.parent();
      while (this.dataViewScroller$_UfH) {
        var style/*:CSS2Properties*/ = this.dataViewScroller$_UfH.dom.style;
        if (style.overflow === "auto" || (style["overflowX"] === "auto" && style["overflowY"] === "auto")) {
          break;
        }
        this.dataViewScroller$_UfH = this.dataViewScroller$_UfH.parent();
      }
    }

    return this.dataViewScroller$_UfH || this.component.el.parent();
  }/*

  /*
   Calculate the size of the given element including the margins
   * /
  private static*/ function getSizeWithMargins$static(element/*:HTMLElement*/)/*:Array*/ {
    var currentStyle/*:**/ = element['currentStyle'];
    var width/*:Number*/;
    var height/*:Number*/;
    if (currentStyle) {
      // Only IE has currentStyle
      width = parseInt(currentStyle.marginLeft) + Ext.fly(element).getWidth() + parseInt(currentStyle.marginRight);
      height = parseInt(currentStyle.marginTop) + Ext.fly(element).getHeight() + parseInt(currentStyle.marginBottom);
    } else {
      //DOM Level 2 standard
      width = parseInt(window.getComputedStyle(element, '').marginLeft) + Ext.fly(element).getWidth() +
              parseInt(window.getComputedStyle(element, '').marginRight);
      height = parseInt(window.getComputedStyle(element, '').marginTop) + Ext.fly(element).getHeight() +
              parseInt(window.getComputedStyle(element, '').marginBottom);
    }
    return [width, height];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      recordType$_UfH: null,
      bindToArray$_UfH: null,
      transformer$_UfH: null,
      ifUndefined$_UfH: null,
      component: null,
      store$_UfH: null,
      fields$_UfH: null,
      sortField$_UfH: null,
      sortDirection$_UfH: null,
      lazy$_UfH: false,
      initialViewLimit$_UfH: 0,
      viewLimitIncrement$_UfH: 0,
      viewLimit$_UfH: 0,
      beforeloadFired$_UfH: false,
      idProperty$_UfH: null,
      dataViewScroller$_UfH: null,
      preventIncrementalUpdate$_UfH: false,
      constructor: BindListPluginBase$,
      super$_UfH: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      setupStore$_UfH: setupStore,
      afterSetupStore: afterSetupStore,
      init: init,
      onBeforeRender$_UfH: onBeforeRender,
      componentDestroyed$_UfH: componentDestroyed,
      componentRendered$_UfH: componentRendered,
      updateStoreAfterArrayChange$_UfH: updateStoreAfterArrayChange,
      updateStoreAfterLayout$_UfH: updateStoreAfterLayout,
      updateStore$_UfH: updateStore,
      truncateToViewLimit$_UfH: truncateToViewLimit,
      dataUpdated$_UfH: dataUpdated,
      getBeanIds$_UfH: getBeanIds,
      getBeanId$_UfH: getBeanId,
      getData$_UfH: getData,
      fireLoad$_UfH: fireLoad,
      getStoredList$_UfH: getStoredList,
      adjustViewLimit$_UfH: adjustViewLimit,
      updateVisibility$_UfH: updateVisibility,
      loadItems$_UfH: loadItems,
      getVisibleNodeRange$_UfH: getVisibleNodeRange,
      getParentWithScroll$_UfH: getParentWithScroll,
      statics: {
        EMPTY_RANGE: undefined,
        __initStatics__: function() {
          EMPTY_RANGE$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.data.JsonStore",
        "Ext.form.field.ComboBox",
        "Ext.grid.Panel",
        "Ext.plugin.Abstract",
        "Ext.util.Sorter",
        "Ext.view.View",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.ui.plugins.UpdateStoreReason",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
