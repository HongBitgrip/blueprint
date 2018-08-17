Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase", function(WidgetWrapperBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.skins.PanelSkin;
import com.coremedia.ui.skins.ToolbarSkin;
import com.coremedia.ui.util.BEMUtils;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.Ext;
import ext.Template;
import ext.button.Button;
import ext.container.Container;
import ext.dom.Element;
import ext.panel.Panel;
import ext.resizer.Resizer;
import ext.toolbar.TextItem;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
public class WidgetWrapperBase extends Panel {

  public static const WIDGET_WRAPPER_BLOCK:BEMBlock =*/function WIDGET_WRAPPER_BLOCK$static_(){WidgetWrapperBase.WIDGET_WRAPPER_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-widget-wrapper"));}/*;

  public static const WIDGET_BLOCK:BEMBlock =*/function WIDGET_BLOCK$static_(){WidgetWrapperBase.WIDGET_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-widget"));}/*;
  public static const WIDGET_ELEMENT_TOOLBAR:BEMElement =*/function WIDGET_ELEMENT_TOOLBAR$static_(){WidgetWrapperBase.WIDGET_ELEMENT_TOOLBAR=( WidgetWrapperBase.WIDGET_BLOCK.createElement("toolbar"));}/*;
  public static const WIDGET_ELEMENT_ICON:BEMElement =*/function WIDGET_ELEMENT_ICON$static_(){WidgetWrapperBase.WIDGET_ELEMENT_ICON=( WidgetWrapperBase.WIDGET_BLOCK.createElement("icon"));}/*;
  public static const WIDGET_ELEMENT_TITLE:BEMElement =*/function WIDGET_ELEMENT_TITLE$static_(){WidgetWrapperBase.WIDGET_ELEMENT_TITLE=( WidgetWrapperBase.WIDGET_BLOCK.createElement("title"));}/*;
  public static const WIDGET_ELEMENT_TOOL:BEMElement =*/function WIDGET_ELEMENT_TOOL$static_(){WidgetWrapperBase.WIDGET_ELEMENT_TOOL=( WidgetWrapperBase.WIDGET_BLOCK.createElement("tool"));}/*;
  public static const WIDGET_MODIFIER_EDITOR_MODE:BEMModifier =*/function WIDGET_MODIFIER_EDITOR_MODE$static_(){WidgetWrapperBase.WIDGET_MODIFIER_EDITOR_MODE=( WidgetWrapperBase.WIDGET_BLOCK.createModifier("editor-mode"));}/*;
  public static const WIDGET_MODIFIER_FOCUS:BEMModifier =*/function WIDGET_MODIFIER_FOCUS$static_(){WidgetWrapperBase.WIDGET_MODIFIER_FOCUS=( WidgetWrapperBase.WIDGET_BLOCK.createModifier("focus"));}/*;

  public static const RESIZER_BLOCK:BEMBlock =*/function RESIZER_BLOCK$static_(){WidgetWrapperBase.RESIZER_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-widget-resizer"));}/*;

  internal static const DEFAULT_WIDGET_HEIGHT:uint = 220;
  internal static const WIDGET_SEPARATOR_HEIGHT:uint = 24;
  internal static const TOOLBAR_HEIGHT:uint = 44;
  internal static const RESIZE_HANDLE_HEIGHT:uint = 6;

  private static const*/var EDIT_MODE$static/*:String*/ = "edit-mode";/*
  private static const*/var WIDGET_MODE$static/*:String*/ = "widget-mode";/*

  public static const INNER_WRAPPER_ITEM_ID:String = "innerWrapper";
  internal static const DELEGATE_CONTAINER_ITEM_ID:String = "widgetWrapperDelegateContainer";
  internal static const LABEL_ITEM_ID:String = "widgetWrapperLabel";
  public static const TOOLBAR_ITEM_ID:String = "widgetWrapperToolbar";
  internal static const EDIT_BUTTON_ITEM_ID:String = "widgetWrapperEditButton";
  internal static const SEPARATOR_ITEM_ID:String = "widgetSeparator";

  internal static const STATE_MODEL_PROPERTY:String = "widgetState";
  internal static const WIDGET_TYPE_ID_MODEL_PROPERTY:String = "widgetTypeId";
  internal static const MANUALLY_CREATABLE_PROPERTY:String = "manuallyCreatable";
  internal static const ROW_SPAN_MODEL_PROPERTY:String = "rowSpan";

  internal static const DRAG_ICON_BLOCK:String = "cm-widget-drag-icon";
  internal static const DRAG_ICON_HANDLE:String =*/function DRAG_ICON_HANDLE$static_(){WidgetWrapperBase.DRAG_ICON_HANDLE=( com.coremedia.ui.util.BEMUtils.getElementClassName(WidgetWrapperBase.DRAG_ICON_BLOCK, "handle"));}/*;

  private var modeVE:ValueExpression;
  private var modifierVE:ValueExpression;

  private var delegateCont:Container;
  private var stateValueExpression:ValueExpression;
  private var focusStateValueExpression:ValueExpression;

  private var innerWrapper:Panel;
  private var wrapperToolbar:Container;
  private var wrapperLabel:TextItem;
  private var editButton:Button;

  private var model:Bean;

  private var resizableWrapper:Resizer;

  public*/ function WidgetWrapperBase$(config/*:WidgetWrapper = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$4LXi(config);

    // Remember all embedded components that have to be updated dynamically.
    this.innerWrapper$4LXi =AS3.as( this.queryById(WidgetWrapperBase.INNER_WRAPPER_ITEM_ID),  Ext.panel.Panel);
    this.delegateCont$4LXi =AS3.as( this.innerWrapper$4LXi.queryById(WidgetWrapperBase.DELEGATE_CONTAINER_ITEM_ID),  Ext.container.Container);
    // actually a container due to layout and remove() problems.
    this.wrapperToolbar$4LXi =AS3.as( this.innerWrapper$4LXi.queryById(WidgetWrapperBase.TOOLBAR_ITEM_ID),  Ext.container.Container);
    this.wrapperLabel$4LXi =AS3.as( this.wrapperToolbar$4LXi.queryById(WidgetWrapperBase.LABEL_ITEM_ID),  Ext.toolbar.TextItem);
    this.editButton$4LXi =AS3.as( this.wrapperToolbar$4LXi.queryById(WidgetWrapperBase.EDIT_BUTTON_ITEM_ID),  Ext.button.Button);

    // Clone the state and extract properties that are not widget-specific.
    var state/*:WidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,Ext.apply({}, AS3.getBindable(config,"widgetState")));
    var widgetTypeId/*:String*/ = state.widgetTypeId;
    var widgetType/*:WidgetType*/ = WidgetWrapperBase.getWidgetTypeWithId(widgetTypeId);
    var rowSpan/*:Number*/ = state.rowspan || widgetType.getDefaultRowSpan() || 1;
    var manuallyCreatable/*:Boolean*/ = widgetType.isManuallyCreatable();

    // Delete the well-known attributes from the config object, so that the widget type,
    // the column and the row span do not accidentally appear as a state property when
    // applying the configuration.
    delete state['widgetTypeId'];
    delete state['column'];
    delete state['rowspan'];

    // Build an internal model bean for this widget.
    this.model$4LXi = com.coremedia.ui.data.beanFactory.createLocalBean({});
    this.model$4LXi.set(WidgetWrapperBase.STATE_MODEL_PROPERTY, state);
    this.model$4LXi.set(WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY, widgetTypeId);
    this.model$4LXi.set(WidgetWrapperBase.MANUALLY_CREATABLE_PROPERTY, manuallyCreatable);
    this.model$4LXi.set(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY, rowSpan);

    this.model$4LXi.addValueChangeListener(AS3.bind(this,"updateWrapperLabel$4LXi"));
    this.updateWrapperLabel$4LXi();

    this.on("afterrender", function (p/*:Panel*/)/*:void*/ {
      // Make sure the wrapper is properly sized.
      this$.updateHeight();

      this$.setupResizable$4LXi();
      this$.mon(p.up(), "afterlayout",AS3.bind( this$,"adjustWidgetWrapperWidth$4LXi"));
      this$.mon(p.up(), "resize",AS3.bind( this$,"adjustWidgetWrapperWidth$4LXi"));
      this$.mon(this$.innerWrapper$4LXi, "focusenter", function()/*:void*/ {this$.getFocusStateVE$4LXi().setValue(true);});
      this$.mon(this$.innerWrapper$4LXi, "focusleave", function()/*:void*/ {this$.getFocusStateVE$4LXi().setValue(false);});
    }, null, {single: true});

    if (AS3.getBindable(config,"edit")) {
      this.getModeVE().setValue(EDIT_MODE$static);
      this.showEditor$4LXi();
    } else {
      this.getModeVE().setValue(WIDGET_MODE$static);
      this.showWidget$4LXi();
    }
  }/*

  private*/ function getFocusStateVE()/*:ValueExpression*/ {
    if (this.focusStateValueExpression$4LXi === null) {
      this.focusStateValueExpression$4LXi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.focusStateValueExpression$4LXi;
  }/*

  public*/ function updateWidgetWrapper()/*:void*/ {
    this.updateHeight();
    this.updateWrapperLabel$4LXi();
  }/*

  public*/ function getWidgetComponent()/*:Component*/ {
    if (this.getModeVE().getValue() === WIDGET_MODE$static) {
      return this.delegateCont$4LXi.getComponent(0);
    }

    return null;
  }/*

  protected static var dragIconTemplate:Template =*/function dragIconTemplate$static_(){WidgetWrapperBase.dragIconTemplate=( new Ext.Template(
    '<div class="' + WidgetWrapperBase.DRAG_ICON_BLOCK + '">'+
      '<div class="' + WidgetWrapperBase.DRAG_ICON_HANDLE + ' ' + mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'widget_drag') + '"></div>'+
    '</div>').compile());}/*;

  internal*/ function updateHeight()/*:void*/ {
    //set height for whole widget wrapper depending on current row span
    var height/*:int*/ = (WidgetWrapperBase.DEFAULT_WIDGET_HEIGHT + WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT) * (this.model$4LXi.get(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY) || 1);
    this.setHeight(height);
    //inner wrapper height without the bottom widget separator
    this.innerWrapper$4LXi.setHeight(height - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT);
    //delegate container height without bottom separator, toolbar and the handle for resizing
    this.delegateCont$4LXi.setHeight(height - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT - WidgetWrapperBase.TOOLBAR_HEIGHT - WidgetWrapperBase.RESIZE_HANDLE_HEIGHT);
    //if in edit mode and if widget editor wrapper exists,
    //widget editor wrapper height without bottom separator, toolbar and margins
    if (this.getModeVE().getValue() === EDIT_MODE$static) {
      (AS3.as(this.delegateCont$4LXi.getComponent(0),  Ext.container.Container)).setHeight(height - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT - WidgetWrapperBase.TOOLBAR_HEIGHT - WidgetWrapperBase.RESIZE_HANDLE_HEIGHT);
      if (this.resizableWrapper$4LXi && this.resizableWrapper$4LXi.getEl()) {
        this.resizableWrapper$4LXi.getEl().setHeight(height - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT);
      }
    }
  }/*

  private*/ function setupResizable()/*:void*/ {var this$=this;
    this.mon(this.innerWrapper$4LXi, "afterlayout", function ()/*:void*/ {
      if (!this$.resizableWrapper$4LXi) {
        this$.attachResizable$4LXi();
      }
      var southHandle/*:Element*/ = this$.resizableWrapper$4LXi['south'].el;
      southHandle.addCls(WidgetWrapperBase.RESIZER_BLOCK.getCSSClass());
      if (this$.getModeVE().getValue() === EDIT_MODE$static) {
        southHandle.show();
      } else {
        southHandle.hide();
      }
    });
  }/*

  /**
   * We use an ext.Resizable wrapper with heightIncrement config parameter.
   * However, we have to tweak the "snap" functionality that comes
   * with heightIncrement as we do not want to include the
   * bottom widget separator into the snapping. As a result, we have to
   * override the setBounds() method of the proxy.
   * /
  private*/ function attachResizable()/*:void*/ {var this$=this;
    //set 'snapping' (heightIncrement) to widget height + vertical gap
    var resizableCfg/*:Resizer*/ = AS3.cast(Ext.resizer.Resizer,{});
    resizableCfg.target = this.innerWrapper$4LXi.getEl();
    resizableCfg.handles = 's';
    resizableCfg.pinned = true;
    resizableCfg.heightIncrement = WidgetWrapperBase.DEFAULT_WIDGET_HEIGHT + WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT;
    resizableCfg.minHeight = WidgetWrapperBase.DEFAULT_WIDGET_HEIGHT;
    this.resizableWrapper$4LXi = new Ext.resizer.Resizer(resizableCfg);
    //Override the original Resizable.setBounds() method:
    // * Call original setBounds() with tweaked height
    // * Check whether the resizing would lead to a new rowspan.
    //   If so, resize the widget immediately for better visual feedback of the resizing operation.
    this.resizableWrapper$4LXi.resizeTracker['origResize'] = this.resizableWrapper$4LXi.resizeTracker['resize'];

    this.resizableWrapper$4LXi.resizeTracker['resize'] = function (box/*:Object*/, atEnd/*:Boolean*/)/*:void*/ {

      var newBox/*:Object*/ = {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT
      };
      this$.resizableWrapper$4LXi.resizeTracker['origResize'](newBox, atEnd);

      var newRowSpan/*:Number*/ = Math.floor((box.height + WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT) / (WidgetWrapperBase.DEFAULT_WIDGET_HEIGHT + WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT));
      if (this$.model$4LXi.get(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY) !== newRowSpan) {
        this$.model$4LXi.set(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY, newRowSpan);
        this$.updateHeight();
        // EXT6_PERFORMANCE getCurrentColumn().updateLayout();
        this$.resizableWrapper$4LXi.getEl().setSize(this$.innerWrapper$4LXi.getWidth(), (WidgetWrapperBase.DEFAULT_WIDGET_HEIGHT + WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT) * (this$.model$4LXi.get(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY) || 1) - WidgetWrapperBase.WIDGET_SEPARATOR_HEIGHT);
      }
    };
  }/*

  internal*/ function makeWidgetState()/*:WidgetState*/ {
    var result/*:WidgetState*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    result.widgetTypeId = this.model$4LXi.get(WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY);
    result.rowspan = this.model$4LXi.get(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY);
    Ext.apply(result, this.model$4LXi.get(WidgetWrapperBase.STATE_MODEL_PROPERTY));
    return result;
  }/* 
  
  internal*/ function getRowSpan()/*:int*/ {
    return this.model$4LXi.get(WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY) || 1;
  }/*

  // Visible for Testing
  internal*/ function getWidgetType()/*:WidgetType*/ {
    return WidgetWrapperBase.getWidgetTypeWithId(this.model$4LXi.get(WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY));
  }/*

  private*/ function adjustWidgetWrapperWidth()/*:void*/ {
    this.setWidth(this.up().getWidth());
    this.innerWrapper$4LXi.setWidth(this.up().getWidth());
    // EXT6_PERFORMANCE updateLayout();
  }/*

  private*/ function stateValueExpressionChanged()/*:void*/ {
    this.model$4LXi.set(WidgetWrapperBase.STATE_MODEL_PROPERTY, this.stateValueExpression$4LXi.getValue());
  }/*

  private*/ function updateWrapperLabel()/*:void*/ {
    var state/*:WidgetState*/ = this.model$4LXi.get(WidgetWrapperBase.STATE_MODEL_PROPERTY);
    this.wrapperLabel$4LXi.update(com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.getWidgetType().getTitle(state)));

    if (this.wrapperLabel$4LXi.rendered) {
      this.wrapperLabel$4LXi.el.dom.setAttribute("data-qtip", this.getWidgetType().getDescriptionHTML());
    }
  }/*
  
  private*/ function showWidget()/*:void*/ {
    this.innerWrapper$4LXi.setUI(com.coremedia.ui.skins.PanelSkin.WIDGET.getSkin());
    this.wrapperToolbar$4LXi.setUI(com.coremedia.ui.skins.ToolbarSkin.WIDGET_HEADER.getSkin());
    this.editButton$4LXi.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil'));
    this.editButton$4LXi.setPressed(false);

    var state/*:WidgetState*/ = this.model$4LXi.get(WidgetWrapperBase.STATE_MODEL_PROPERTY);
    var widgetComponent/*:Component*/ = this.getWidgetType().createWidget(state);
    var tools/*:Array*/ = this.getWidgetType().createTools(widgetComponent) || [];
    if (AS3.is(widgetComponent,  com.coremedia.cms.editor.sdk.dashboard.Reloadable)) {
      var reloadButtonCfg/*:ReloadButton*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ReloadButton,{});
      AS3.setBindable(reloadButtonCfg,"widget" , AS3.cast(com.coremedia.cms.editor.sdk.dashboard.Reloadable,widgetComponent));
      tools = [reloadButtonCfg].concat(tools);
    }
    if (AS3.is(widgetComponent,  com.coremedia.ui.data.StateHolder)) {
      this.stateValueExpression$4LXi = AS3.cast(com.coremedia.ui.data.StateHolder,widgetComponent).getStateValueExpression();
      this.stateValueExpression$4LXi.addChangeListener(AS3.bind(this,"stateValueExpressionChanged$4LXi"));
    }
    this.stateValueExpression$4LXi && this.stateValueExpressionChanged$4LXi();

    this.delegateCont$4LXi.add(widgetComponent);
    
    this.wrapperLabel$4LXi.addListener("afterrender",AS3.bind( this,"updateWrapperLabel$4LXi"));

    var insertPosition/*:int*/ = this.wrapperToolbar$4LXi.itemCollection.indexOf(this.wrapperLabel$4LXi);
    for (var i/*:int*/ = 0; i < tools.length; i++) {
      var tool/*:Component*/ = tools[i];
      this.wrapperToolbar$4LXi.insert(++insertPosition, tool);
    }
  }/*

  private*/ function showEditor()/*:void*/ {
    this.innerWrapper$4LXi.setUI(com.coremedia.ui.skins.PanelSkin.WIDGET_HIGHLIGHTED.getSkin());
    this.wrapperToolbar$4LXi.setUI(com.coremedia.ui.skins.ToolbarSkin.WIDGET_HEADER_HIGHLIGHTED.getSkin());
    this.editButton$4LXi.setPressed(true);
    this.editButton$4LXi.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'check_in_document'));

    var editorWrapperConfig/*:WidgetEditorWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapper,{});
    AS3.setBindable(editorWrapperConfig,"model" , this.model$4LXi);

    var editorWrapper/*:WidgetEditorWrapper*/ = new com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapper(editorWrapperConfig);
    this.delegateCont$4LXi.add(editorWrapper);
    // EXT6_PERFORMANCE delegateCont.updateLayout();
    this.updateHeight();
  }/*

  private*/ function showNothing()/*:void*/ {
    if (this.stateValueExpression$4LXi) {
      this.stateValueExpression$4LXi.removeChangeListener(AS3.bind(this,"updateWrapperLabel$4LXi"));
      this.stateValueExpression$4LXi = null;
    }
    this.delegateCont$4LXi.remove(0);

    var toolPosition/*:int*/ = this.wrapperToolbar$4LXi.itemCollection.indexOf(this.wrapperLabel$4LXi) + 1;
    while (true) {
      var tool/*:Component*/ = AS3.cast(Ext.Component,this.wrapperToolbar$4LXi.itemCollection.get(toolPosition));
      if (tool.getItemId() === WidgetWrapperBase.EDIT_BUTTON_ITEM_ID) {
        break;
      }
      this.wrapperToolbar$4LXi.remove(tool, true);
    }
  }/*

  public*/ function toggleEditMode()/*:void*/ {
    // clean up UI.
    this.showNothing$4LXi();
    if (this.getModeVE().getValue() === WIDGET_MODE$static) {
      this.getModeVE().setValue(EDIT_MODE$static);
      this.showEditor$4LXi();
    } else if (this.getModeVE().getValue() === EDIT_MODE$static) {
      this.getModeVE().setValue(WIDGET_MODE$static);
      this.showWidget$4LXi();
    }
    this.editButton$4LXi.focus();
  }/*

  internal static*/ function getWidgetTypeWithId$static(id/*:String*/)/*:WidgetType*/ {
    var dashboardConfig/*:DashboardConfiguration*/ = com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration();
    var widgetTypes/*:Array*/ = AS3.getBindable(dashboardConfig,"types");
    for (var i/*:int*/ = 0; i < widgetTypes.length; i++) {
      var widgetType/*:WidgetType*/ = widgetTypes[i];
      if (widgetType.getId() === id) {
        return widgetType;
      }
    }
    return null;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.resizableWrapper$4LXi && this.resizableWrapper$4LXi.destroy();
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  protected*/ function getModeVE()/*:ValueExpression*/ {
    if (!this.modeVE$4LXi) {
      this.modeVE$4LXi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(EDIT_MODE$static);
    }
    return this.modeVE$4LXi;
  }/*

  protected*/ function getModifierVE()/*:ValueExpression*/ {var this$=this;
    if (!this.modifierVE$4LXi) {
      this.modifierVE$4LXi = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var modifiers/*:Array*/ = [];
        var modeVE/*:ValueExpression*/ = this$.getModeVE();
        if (modeVE.getValue() === EDIT_MODE$static) {
          modifiers.push(WidgetWrapperBase.WIDGET_MODIFIER_EDITOR_MODE);
        }
        var focusStateVE/*:ValueExpression*/ = this$.getFocusStateVE$4LXi();
        if (this$.focusStateValueExpression$4LXi.getValue()) {
          modifiers.push(WidgetWrapperBase.WIDGET_MODIFIER_FOCUS);
        }
        return modifiers;
      });
    }
    return this.modifierVE$4LXi;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      modeVE$4LXi: null,
      modifierVE$4LXi: null,
      delegateCont$4LXi: null,
      stateValueExpression$4LXi: null,
      focusStateValueExpression$4LXi: null,
      innerWrapper$4LXi: null,
      wrapperToolbar$4LXi: null,
      wrapperLabel$4LXi: null,
      editButton$4LXi: null,
      model$4LXi: null,
      resizableWrapper$4LXi: null,
      constructor: WidgetWrapperBase$,
      super$4LXi: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getFocusStateVE$4LXi: getFocusStateVE,
      updateWidgetWrapper: updateWidgetWrapper,
      getWidgetComponent: getWidgetComponent,
      updateHeight: updateHeight,
      setupResizable$4LXi: setupResizable,
      attachResizable$4LXi: attachResizable,
      makeWidgetState: makeWidgetState,
      getRowSpan: getRowSpan,
      getWidgetType: getWidgetType,
      adjustWidgetWrapperWidth$4LXi: adjustWidgetWrapperWidth,
      stateValueExpressionChanged$4LXi: stateValueExpressionChanged,
      updateWrapperLabel$4LXi: updateWrapperLabel,
      showWidget$4LXi: showWidget,
      showEditor$4LXi: showEditor,
      showNothing$4LXi: showNothing,
      toggleEditMode: toggleEditMode,
      beforeDestroy: beforeDestroy,
      getModeVE: getModeVE,
      getModifierVE: getModifierVE,
      statics: {
        WIDGET_WRAPPER_BLOCK: undefined,
        WIDGET_BLOCK: undefined,
        WIDGET_ELEMENT_TOOLBAR: undefined,
        WIDGET_ELEMENT_ICON: undefined,
        WIDGET_ELEMENT_TITLE: undefined,
        WIDGET_ELEMENT_TOOL: undefined,
        WIDGET_MODIFIER_EDITOR_MODE: undefined,
        WIDGET_MODIFIER_FOCUS: undefined,
        RESIZER_BLOCK: undefined,
        DEFAULT_WIDGET_HEIGHT: 220,
        WIDGET_SEPARATOR_HEIGHT: 24,
        TOOLBAR_HEIGHT: 44,
        RESIZE_HANDLE_HEIGHT: 6,
        INNER_WRAPPER_ITEM_ID: "innerWrapper",
        DELEGATE_CONTAINER_ITEM_ID: "widgetWrapperDelegateContainer",
        LABEL_ITEM_ID: "widgetWrapperLabel",
        TOOLBAR_ITEM_ID: "widgetWrapperToolbar",
        EDIT_BUTTON_ITEM_ID: "widgetWrapperEditButton",
        SEPARATOR_ITEM_ID: "widgetSeparator",
        STATE_MODEL_PROPERTY: "widgetState",
        WIDGET_TYPE_ID_MODEL_PROPERTY: "widgetTypeId",
        MANUALLY_CREATABLE_PROPERTY: "manuallyCreatable",
        ROW_SPAN_MODEL_PROPERTY: "rowSpan",
        DRAG_ICON_BLOCK: "cm-widget-drag-icon",
        DRAG_ICON_HANDLE: undefined,
        dragIconTemplate: undefined,
        getWidgetTypeWithId: getWidgetTypeWithId$static,
        __initStatics__: function() {
          WIDGET_WRAPPER_BLOCK$static_();
          WIDGET_BLOCK$static_();
          WIDGET_ELEMENT_TOOLBAR$static_();
          WIDGET_ELEMENT_ICON$static_();
          WIDGET_ELEMENT_TITLE$static_();
          WIDGET_ELEMENT_TOOL$static_();
          WIDGET_MODIFIER_EDITOR_MODE$static_();
          WIDGET_MODIFIER_FOCUS$static_();
          RESIZER_BLOCK$static_();
          DRAG_ICON_HANDLE$static_();
          dragIconTemplate$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.Template",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.resizer.Resizer",
        "Ext.toolbar.TextItem",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.util.BEMUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.ReloadButton",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapper",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
