Ext.define("com.coremedia.ui.plugins.AnnotatedLinkListPlugin", function(AnnotatedLinkListPlugin) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.components.StatefulTableView;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin;
import com.coremedia.ui.mixins.IAnnotatedLinkListWidgetMixin;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.TableUtil;

import ext.Component;
import ext.Ext;
import ext.data.Store;
import ext.dom.DomHelper;
import ext.dom.Element;
import ext.event.Event;
import ext.grid.CellContext;
import ext.grid.GridPanel;
import ext.grid.plugin.RowExpanderPlugin;
import ext.grid.plugin.RowWidgetPlugin;
import ext.util.Collection;
import ext.view.DataView;

import js.HTMLElement;

public class AnnotatedLinkListPlugin extends RowWidgetPlugin {

  private var tabGuardAfter:Element;

  [Bindable]
  public var structListVE:ValueExpression;

  [Bindable]
  public var isAnnotatedDataField:String;

  public*/ function AnnotatedLinkListPlugin$(config/*:AnnotatedLinkListPlugin*/) {
    if (!config.headerWidth) {
      config.headerWidth = 22;
    }
    var widgetMixin/*:IAnnotatedLinkListWidgetMixin*/ = config &&AS3.as( config.widget,  com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin);
    if (widgetMixin) {
      AS3.setBindable(widgetMixin,"listVE" , AS3.getBindable(config,"structListVE"));
    }
    this.super$51On(config);
    // Patches (see below)
    this["getHeaderConfig"] =AS3.bind( this,"doGetHeaderConfig$51On");
    this.doAddCollapsedCls$51On(this["addCollapsedCls"]);
    this["getWidget"] =AS3.bind( this,"doGetWidget$51On");
  }/*

  override public*/ function init(host/*:Component*/)/*:void*/ {var this$=this;
    Ext.grid.plugin.RowWidget.prototype.init.call(this,host);

    this.getView$51On().on("refresh", function (tableView/*:StatefulTableView*/, eOpts/*:Array*/)/*:void*/ {
      this$.getCmp().fireEvent(com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin.ROW_WIDGETS_REFRESH_EVENT);
    });

    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this$.getView$51On(), "afterrender");
              return this$.getView$51On().rendered;
            },AS3.bind(
            this,"setupFocusManagement$51On")
    );
  }/*

  private*/ function getView()/*:DataView*/ {
    var gridPanel/*:GridPanel*/ =AS3.as( this.getCmp(),  Ext.grid.Panel);
    return gridPanel && AS3.getBindable(gridPanel,"view","DUMMY");
  }/*

  private*/ function doAddCollapsedCls(config/*:Object*/)/*:void*/ {var this$=this;
    config['fn'] = function (out/*:Array*/, values/*:Object*/, parent/*:Object*/)/*:void*/ {
      var store/*:Store*/ = this$.getView$51On().store;
      var coll/*:Collection*/ =AS3.as( store.getData(),  Ext.util.Collection);
      var rowIndex/*:Number*/ =AS3.as( values['rowIndex'],  Number);
      var beanRecord/*:BeanRecord*/ =AS3.as( coll.getAt(rowIndex),  com.coremedia.ui.store.BeanRecord);
      var isAnnotated/*:Boolean*/ =AS3.as( beanRecord.getData()[AS3.getBindable(this$,"isAnnotatedDataField")],  Boolean);
      //noinspection JSUntypedDeclaration
      var me = this.rowExpander;
      if (!me.recordsExpanded[values.record.internalId]) {
        values.itemClasses.push(me.rowCollapsedCls);
      }
      if (isAnnotated) {
        values.itemClasses.push('cm-grid-item-is-annotated');
      }
      this.nextTpl.applyOut(values, out, parent);
    };
  }/*

  private*/ function doGetWidget()/*:Object*/ {arguments=Array.prototype.slice.call(arguments);
    var widget/*:Object*/ = Ext.grid.plugin.RowWidget['prototype'].getWidget.apply(this, arguments);
    var gridPanel/*:GridPanel*/ =AS3.as( this.getCmp(),  Ext.grid.Panel);
    if (gridPanel) {
      gridPanel.fireEvent('add', gridPanel, widget);
    }
    return widget;
  }/*

  //////////////////////////////////////////////////
  ////////// PROPRIETARY FOCUS MANAGEMENT //////////
  //////////////////////////////////////////////////

  // Ext does not take into account row widgets for grid keyboard navigation.
  // We need to help quite a bit.
  private static const*/var GRID_CELL_CLS$static/*:String*/ = ".x-grid-cell";/*
  private static const*/var ROW_EXPANDER_CLS$static/*:String*/ = ".x-grid-row-expander";/*

  private*/ function doGetHeaderConfig()/*:Object*/ {
    var config/*:Object*/ = Ext.grid.plugin.RowExpander['prototype'].getHeaderConfig.apply(this);

    // We override the renderer for the row-expander column. The original render attaches a tabIndex.
    // This puts the containing cells in actionableMode=true which screws the GridPanel's keyboard navigation.
    config.renderer = function ()/*:String*/ {
      return '<div class="' + Ext.baseCSSPrefix + 'grid-row-expander" role="presentation"></div>';
    };

    return config;
  }/*

  private*/ function setupFocusManagement()/*:void*/ {var this$=this;
    this.getView$51On().getEl().on("focusmove",AS3.bind( this,"onFocusMove$51On"));
    this.getView$51On().on("focusenter",AS3.bind( this,"onFocusEnter$51On"));
    this.getView$51On().on("focusleave",AS3.bind( this,"onFocusLeave$51On"));

    // We need to introduce a separate tab guard after the view to be able
    // to track when the view is tabbed into from backwards.
    this.tabGuardAfter$51On = Ext.dom.Helper.append(this.getView$51On().getEl().dom.parentNode, {
      tag: "DIV",
      tabindex: 0
    }, true);

    this.tabGuardAfter$51On.on("focus", function (evt/*:Event*/)/*:void*/ {
      // If the tab guard is tabbed onto with forwardTab=false, focus the view instead.
      !evt['forwardTab'] && this$.getView$51On().focus();
    });
  }/*

  private*/ function onFocusEnter()/*:void*/ {
    // The tab guard should only be tabbable from outside the view.
    this.tabGuardAfter$51On.dom.setAttribute("tabindex", -1);
  }/*

  private*/ function onFocusLeave()/*:void*/ {var this$=this;
    // The tab guard should only be tabbable from outside the view.
    this.tabGuardAfter$51On.dom.setAttribute("tabindex", 0);

    // The grid saves its last focused element. There must be no internal
    // elements with tabindex=0.
    this.getRowExpanderFocusEls$51On().forEach(function (rowExpanderEl/*:Element*/)/*:void*/ {
      rowExpanderEl.removeCls(this$.getView$51On()["focusedItemCls"]);
      rowExpanderEl.dom.setAttribute("tabindex", -1);
    });
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onFocusMove(evt/*:Event*/, target/*:HTMLElement*/)/*:void*/ {
    var targetEl/*:Element*/ = Ext.get(target);

    if (targetEl === this.getView$51On().getEl()) {
      return;
    }

    if (this.targetIsWithinWidget$51On(targetEl)) {
      // If the focus moved into a row widget, we make sure that the last focused element loses
      // its focus style.
      var lastFocused/*:CellContext*/ = this.getView$51On()["lastFocused"];
      if (lastFocused) {
        var cell/*:Element*/ = com.coremedia.ui.util.TableUtil.getCell(AS3.as(this.getCmp(),  Ext.grid.Panel), lastFocused.rowIdx, lastFocused.colIdx);
        cell.removeCls(this.getView$51On()["focusedItemCls"]);
      }
      // Also, we give all row expander focusEls tabindex=0 so that it is possible
      // to tab out of the widget onto a row expander.
      this.getRowExpanderFocusEls$51On().forEach(function (rowExpanderEl/*:Element*/)/*:void*/ {
        rowExpanderEl.dom.setAttribute("tabindex", 0);
      });
    }

    var targetRowExpander/*:Element*/ = targetEl.down(ROW_EXPANDER_CLS$static, false);
    if (targetRowExpander) {
      // If the focus moved onto a row expander, we give it the focusedItemCls.
      targetRowExpander.up(GRID_CELL_CLS$static).addCls(this.getView$51On()["focusedItemCls"]);
      // We also reset the tabindex of all row expander focusEls to -1 as now
      // the normal grid keyboard navigation takes over again.
      this.getRowExpanderFocusEls$51On().forEach(function (rowExpanderEl/*:Element*/)/*:void*/ {
        rowExpanderEl.dom.setAttribute("tabindex", -1);
      });
    }
  }/*

  private*/ function targetIsWithinWidget(targetEl/*:Element*/)/*:Boolean*/ {
    while (targetEl) {
      if (targetEl.component && targetEl.component.xtype === this.widget.xtype) {
        return true;
      }
      targetEl = targetEl.parent();
    }

    return false;
  }/*

  private*/ function getRowExpanderFocusEls()/*:Array*/ {
    var viewEl/*:Element*/ = this.getView$51On().getEl();

    if (!viewEl) {
      return [];
    }

    var rowExpanders/*:Array*/ = viewEl.query(ROW_EXPANDER_CLS$static, false);
    return rowExpanders.map(function (rowExpander/*:Element*/)/*:Element*/ {
      return rowExpander.up(GRID_CELL_CLS$static);
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.plugin.RowWidget",
      tabGuardAfter$51On: null,
      constructor: AnnotatedLinkListPlugin$,
      super$51On: function() {
        Ext.grid.plugin.RowWidget.prototype.constructor.apply(this, arguments);
      },
      init: init,
      getView$51On: getView,
      doAddCollapsedCls$51On: doAddCollapsedCls,
      doGetWidget$51On: doGetWidget,
      doGetHeaderConfig$51On: doGetHeaderConfig,
      setupFocusManagement$51On: setupFocusManagement,
      onFocusEnter$51On: onFocusEnter,
      onFocusLeave$51On: onFocusLeave,
      onFocusMove$51On: onFocusMove,
      targetIsWithinWidget$51On: targetIsWithinWidget,
      getRowExpanderFocusEls$51On: getRowExpanderFocusEls,
      config: {
        structListVE: null,
        isAnnotatedDataField: null
      },
      requires: [
        "Ext",
        "Ext.dom.Helper",
        "Ext.grid.Panel",
        "Ext.grid.plugin.RowExpander",
        "Ext.grid.plugin.RowWidget",
        "Ext.util.Collection",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ConcurrentUtil"
      ],
      uses: [
        "com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.TableUtil"
      ]
    };
});
