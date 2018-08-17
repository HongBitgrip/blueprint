Ext.define("com.coremedia.cms.editor.sdk.dashboard.DashboardBase", function(DashboardBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.DraggableItemsUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.panel.Panel;
import ext.util.MixedCollection;

/**
 * The dashboard implementation.
 * /
public class DashboardBase extends Panel {

  private static const*/var SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD$static/*:BEMModifier*/;/* =*/function SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD$static_(){SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD$static=( com.coremedia.ui.util.DraggableItemsUtils.SOURCE_PLACEHOLDER_BLOCK.createModifier("dashboard"));};/*
  private static const*/var TARGET_PLACEHOLDER_MODIFIER_DASHBOARD$static/*:BEMModifier*/;/* =*/function TARGET_PLACEHOLDER_MODIFIER_DASHBOARD$static_(){TARGET_PLACEHOLDER_MODIFIER_DASHBOARD$static=( com.coremedia.ui.util.DraggableItemsUtils.TARGET_PLACEHOLDER_BLOCK.createModifier("dashboard"));};/*

  private var stateValueExpression:ValueExpression;
  private var reloadInterval:Object = null;
  private var reloadTimeout:Object = null;
  private var reloadIntervalMillis:int = 30000;
  private var lastReloadMillis:Number = 0;

  public*/ function DashboardBase$(config/*:Dashboard = null*/) {if(arguments.length<=0)config=null;
    this.super$es3H(config);

    var remoteDashboardConfiguration/*:Object*/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()['dashboard'];
    if (remoteDashboardConfiguration) {
      this.reloadIntervalMillis$es3H = remoteDashboardConfiguration['interval'];
    }

    this.on('afterrender',AS3.bind( this,"onAfterRender$es3H"));
  }/*

  private*/ function onAfterRender()/*:void*/ {
    if (this.reloadIntervalMillis$es3H > 0) {
      this.on('show',AS3.bind( this,"startReloading$es3H"));
      this.on('hide',AS3.bind( this,"cancelReloading$es3H"));
      this.isVisible(true) && this.startReloading$es3H();
    }
  }/*

  private*/ function startReloading()/*:void*/ {
    var millisSinceLastReload/*:Number*/ = new Date().getTime() - this.lastReloadMillis$es3H;
    if (millisSinceLastReload > this.reloadIntervalMillis$es3H) {
      this.doReload$es3H();
    } else if (!this.reloadTimeout$es3H) {
      this.reloadTimeout$es3H = window.setTimeout(AS3.bind(this,"doReload$es3H"), this.reloadIntervalMillis$es3H - millisSinceLastReload);
    }
  }/*

  private*/ function doReload()/*:void*/ {
    if (this.isVisible(true)) {
      this.itemCollection.each(function (item/*:Component*/)/*:void*/ {
        var column/*:DashboardColumn*/ =AS3.as( item,  com.coremedia.cms.editor.sdk.dashboard.DashboardColumn);
        column && column.reload();
      });
      this.lastReloadMillis$es3H = new Date().getTime();

      if (!this.reloadInterval$es3H) {
        this.reloadInterval$es3H = window.setInterval(AS3.bind(this,"doReload$es3H"), this.reloadIntervalMillis$es3H);
      }
    }
  }/*

  private*/ function cancelReloading()/*:void*/ {
    if (this.reloadTimeout$es3H) {
      window.clearTimeout(this.reloadTimeout$es3H);
      this.reloadTimeout$es3H = null;
    }
    if (this.reloadInterval$es3H) {
      window.clearInterval(this.reloadInterval$es3H);
      this.reloadInterval$es3H = null;
    }
  }/*

  override protected*/ function initEvents()/*:void*/ {
    Ext.panel.Panel.prototype.initEvents.call(this);
//    this.dashboardDropZone = new DashboardDropZone(this, this['dropConfig']);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    Ext.panel.Panel.prototype.initComponent.call(this);

    var widgetStates/*:Array*/ = DashboardBase.getCustomizedWidgetStates();
    var columns/*:Array*/ = [[],[],[]];
    var currentColumn/*:uint*/ = 0;
    for (var j/*:uint*/ = 0; j < widgetStates.length; j++) {
      var widget/*:WidgetState*/ = widgetStates[j];
      if (widget.column === com.coremedia.cms.editor.sdk.dashboard.WidgetState.NEXT) {
        currentColumn++;
      } else if (widget.column === com.coremedia.cms.editor.sdk.dashboard.WidgetState.SAME || widget.column === null || widget.column === undefined) {
        // Fair enough.
      } else {
        currentColumn = parseInt(widget.column + "");
      }
      // We only support 3 columns at the moment.
      currentColumn = currentColumn % 3;
      if (com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.getWidgetTypeWithId(widget.widgetTypeId)) {

        // We need to strip the state of all non-own property.
        // Otherwise everything from the prototype (some WidgetState) is included as well.
        var strippedWidgetState/*:Object*/ = {};
        for (var p/*:String*/ in widget) {
          if (widget.hasOwnProperty(p)) {
            strippedWidgetState[p] = widget[p];
          }
        }

        columns[currentColumn].push(strippedWidgetState);
      }
    }
    this.setUpColumn$es3H(com.coremedia.cms.editor.sdk.dashboard.Dashboard.LEFT_COLUMN_ITEM_ID, columns[0]);
    this.setUpColumn$es3H(com.coremedia.cms.editor.sdk.dashboard.Dashboard.CENTER_COLUMN_ITEM_ID, columns[1]);
    this.setUpColumn$es3H(com.coremedia.cms.editor.sdk.dashboard.Dashboard.RIGHT_COLUMN_ITEM_ID, columns[2]);

    /*  EXT6_PERFORMANCE
    on("activate", function():void {
      updateLayout();
    }, this);*/

    this.stateValueExpression$es3H = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"makeWidgetStates$es3H"));
    this.stateValueExpression$es3H.addChangeListener(AS3.bind(this,"saveWidgets$es3H"));
  }/*

  /**
   * @private
   * @return an array of widget states read from the preferences or, as a fallback, configured in the editor context
   * /
  public static*/ function getCustomizedWidgetStates$static()/*:Array*/ {
    var dashboardConfig/*:DashboardConfiguration*/ = com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration();
    var widgetStates/*:Array*/ =AS3.as( com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty(com.coremedia.cms.editor.sdk.util.PreferencesUtil.decodeJsonString,
                    com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DASHBOARD_STRUCT,
                    com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DASHBOARD_STRUCT_WIDGETS),  Array);
    if (!widgetStates) {
      widgetStates = AS3.getBindable(dashboardConfig,"widgets");
    }
    return widgetStates;
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    this.cancelReloading$es3H();
    this.stateValueExpression$es3H.removeChangeListener(AS3.bind(this,"saveWidgets$es3H"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  private*/ function setUpColumn(columnItemId/*:String*/, columnStates/*:Array*/)/*:void*/ {
    var column/*:DashboardColumn*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,this.getComponent(columnItemId));
    for (var i/*:uint*/ = 0; i < columnStates.length; i++) {
      var wrapper/*:WidgetWrapper*/ = DashboardBase.createWrappedWidget(columnStates[i], false);
      column.addWidgetWrapper(wrapper);
    }
  }/*

  internal static*/ function createWrappedWidget$static(originalState/*:WidgetState*/, edit/*:Boolean*/)/*:WidgetWrapper*/ {
    var widgetWrapperConfig/*:WidgetWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper,{});
    AS3.setBindable(widgetWrapperConfig,"widgetState" , originalState);
    AS3.setBindable(widgetWrapperConfig,"edit" , edit);
    return new com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper(widgetWrapperConfig);
  }/*

  private*/ function saveWidgets()/*:void*/ {
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(this.stateValueExpression$es3H.getValue(),
            com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DASHBOARD_STRUCT, com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DASHBOARD_STRUCT_WIDGETS);
  }/*

  private*/ function makeWidgetStates()/*:Array*/ {
    var result/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < this.itemCollection.length; i++) {
      var column/*:DashboardColumn*/ =AS3.as( this.itemCollection.get(i),  com.coremedia.cms.editor.sdk.dashboard.DashboardColumn);
      if (column) {
        var columnItems/*:MixedCollection*/ = column.itemCollection;
        if (columnItems) {
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(columnItems, "add");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(columnItems, "clear");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(columnItems, "remove");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(columnItems, "replace");
          for (var j/*:int*/ = 0; j < columnItems.length; j++) {
            var widgetWrapper/*:WidgetWrapper*/ =AS3.as( columnItems.get(j),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);
            if (widgetWrapper) {
              var state/*:WidgetState*/ = widgetWrapper.makeWidgetState();
              // consider separators
              state.column = Math.floor(i / 2);
              result.push(state);
            }
          }
        } else {
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(column, "add");
        }
      }
    }
    return result;
  }/*

  public*/ function addWidgetManually()/*:void*/ {
    var widget/*:WidgetWrapper*/ = this.addWidget();
    // widget was added via user interface, focus it
    widget && widget.focus();
  }/*

  public*/ function addWidget(state/*:WidgetState = null*/, inEditMode/*:Boolean = true*/)/*:WidgetWrapper*/ {switch(arguments.length){case 0:state=null;case 1:inEditMode=true;}
    var minHeight/*:int*/ = 0;
    var targetColumn/*:DashboardColumn*/ = null;
    for (var i/*:int*/ = 0; i < this.itemCollection.length; i++) {
      var column/*:DashboardColumn*/ =AS3.as( this.itemCollection.get(i),  com.coremedia.cms.editor.sdk.dashboard.DashboardColumn);
      if (column) {
        var height/*:int*/ = column.getTotalRowSpan();
        if (!targetColumn || height < minHeight) {
          targetColumn = column;
          minHeight = height;
        }
      }
    }

    return targetColumn.insertWidgetAfter(state, null, inEditMode);
  }/*

  protected static*/ function onWidgetDrop$static(dropPosition/*:int*/, draggedItem/*:WidgetWrapper*/, dropContainer/*:Container*/)/*:void*/ {
    dropContainer.insert(dropPosition, draggedItem);
  }/*

  protected*/ function columnFromEventFinder(evt/*:Event*/)/*:DashboardColumn*/ {
    var eventPosition/*:Object*/ = evt.getXY();

    // case column widths
    var columnWidthData/*:Array*/ = this.getColumns$es3H();

    // determine column
    var columnIndex/*:int*/ = 0;
    var columnFound/*:Boolean*/ = false;
    for (var len/*:int*/ = columnWidthData.length; columnIndex < len; columnIndex++) {
      if (eventPosition[0] < (columnWidthData[columnIndex].x + columnWidthData[columnIndex].w)) {
        columnFound = true;
        break;
      }
    }
    // no match, fix last index
    if (!columnFound) {
      columnIndex--;
    }

    var column/*:DashboardColumn*/ =AS3.as( this.itemCollection.getAt(columnIndex),  com.coremedia.cms.editor.sdk.dashboard.DashboardColumn);
    return column;
  }/*

  private*/ function getColumns()/*:Array*/ {
    var columns/*:Array*/ = [];
    this.itemCollection.each(function (c/*:Component*/)/*:void*/ {
      columns.push({x:c.el.getX(), w:c.el.getWidth()});
    });
    return columns;
  }/*

  protected*/ function getWidgetDragGhostBuilder()/*:Function*/ {
    return function(draggedWidgetWrapper/*:WidgetWrapper*/)/*:Element*/ {
      var widget/*:Component*/ = draggedWidgetWrapper.query(com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.INNER_WRAPPER_ITEM_ID).build())[0];
      return com.coremedia.ui.util.DraggableItemsUtils.defaultGhostBuilder(widget);
    };
  }/*

  protected*/ function getWidgetTargetPlaceholderBuilder()/*:Function*/ {
    return function(draggedWidgetWrapper/*:WidgetWrapper*/)/*:Element*/ {
      var widget/*:Component*/ = draggedWidgetWrapper.query(com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.INNER_WRAPPER_ITEM_ID).build())[0];
      var targetPlaceholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultTargetPlaceholderBuilder(widget);
      // This style is set inline and not inside the targetPlaceholder's css-class, because the original space between the widgets
      // is the result of component-heights and layouting and is therefore not set in a css-class but in the component.
      targetPlaceholder.setStyle({'margin-bottom':'32px'});
      targetPlaceholder.addCls(TARGET_PLACEHOLDER_MODIFIER_DASHBOARD$static.getCSSClass());
      return targetPlaceholder;
    };
  }/*

  protected*/ function getWidgetSourcePlaceholderBuilder()/*:Function*/ {
    return function(draggedWidgetWrapper/*:WidgetWrapper*/)/*:Element*/ {
      var widget/*:Component*/ = draggedWidgetWrapper.query(com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.INNER_WRAPPER_ITEM_ID).build())[0];
      var sourcePlaceholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultSourcePlaceholderBuilder(widget);
      // This style is set inline and not inside the sourcePlaceholder's css-class, because the original space between the widgets
      // is the result of component-heights and layouting and is therefore not set in a css-class but in the component.
      sourcePlaceholder.setStyle({'margin-bottom':'32px'});
      sourcePlaceholder.addCls(SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD$static.getCSSClass());
      return sourcePlaceholder;
    };
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      stateValueExpression$es3H: null,
      reloadInterval$es3H: null,
      reloadTimeout$es3H: null,
      reloadIntervalMillis$es3H: 30000,
      lastReloadMillis$es3H: 0,
      constructor: DashboardBase$,
      super$es3H: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onAfterRender$es3H: onAfterRender,
      startReloading$es3H: startReloading,
      doReload$es3H: doReload,
      cancelReloading$es3H: cancelReloading,
      initEvents: initEvents,
      initComponent: initComponent,
      beforeDestroy: beforeDestroy,
      setUpColumn$es3H: setUpColumn,
      saveWidgets$es3H: saveWidgets,
      makeWidgetStates$es3H: makeWidgetStates,
      addWidgetManually: addWidgetManually,
      addWidget: addWidget,
      columnFromEventFinder: columnFromEventFinder,
      getColumns$es3H: getColumns,
      getWidgetDragGhostBuilder: getWidgetDragGhostBuilder,
      getWidgetTargetPlaceholderBuilder: getWidgetTargetPlaceholderBuilder,
      getWidgetSourcePlaceholderBuilder: getWidgetSourcePlaceholderBuilder,
      statics: {
        SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD: undefined,
        TARGET_PLACEHOLDER_MODIFIER_DASHBOARD: undefined,
        getCustomizedWidgetStates: getCustomizedWidgetStates$static,
        createWrappedWidget: createWrappedWidget$static,
        onWidgetDrop: onWidgetDrop$static,
        __initStatics__: function() {
          SOURCE_PLACEHOLDER_MODIFIER_DASHBOARD$static_();
          TARGET_PLACEHOLDER_MODIFIER_DASHBOARD$static_();
        }
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.DraggableItemsUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.dashboard.DashboardColumn",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
