Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase", function(StructEditorTreeGridBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.CalendarUtil;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.bem.LinkListBEMEntities;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.util.ObservablePropertyUtil;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.BEMUtils;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.StringUtil;
import ext.XTemplate;
import ext.data.Store;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.BaseField;
import ext.form.field.IField;
import ext.grid.column.Column;
import ext.grid.plugin.CellEditingPlugin;
import ext.menu.Menu;
import ext.tree.TreePanel;
import ext.tree.TreeView;

import js.HTMLElement;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField')]
public class StructEditorTreeGridBase extends TreePanel implements IValidationStateMixin {

  private var valueColumn:Column;
  private var contentValueExpression:ValueExpression;
  private var readOnlyValueExpression:ValueExpression;
  private var selectedNodeValueExpression:ValueExpression;
  private var structEditorTreeGridDropTarget:StructEditorTreeGridDropTarget;

  public static const CM_STRUCT_EDITOR_TREE_GRID_BLOCK:String = "cm-struct-editor-tree-grid";
  private static const*/var CM_STRUCT_LINK_LIST_DROP_CONTAINER$static/*:String*/ = "cm-struct-link-list-property-drop-container";/*

  private static const*/var CM_STRUCT_EDITOR_ENTRY_BLOCK$static/*:String*/ = "cm-struct-editor-entry";/*
  private static const*/var CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT$static/*:String*/;/* =*/function CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT$static_(){CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT$static=( com.coremedia.ui.util.BEMUtils.getElementClassName(CM_STRUCT_EDITOR_ENTRY_BLOCK$static, "description"));};/*
  private static const*/var CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static/*:String*/;/* =*/function CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static_(){CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static=( com.coremedia.ui.util.BEMUtils.getElementClassName(CM_STRUCT_EDITOR_ENTRY_BLOCK$static, "icon"));};/*
  private static const*/var CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT$static/*:String*/;/* =*/function CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT$static_(){CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT$static=( com.coremedia.ui.util.BEMUtils.getElementClassName(CM_STRUCT_EDITOR_ENTRY_BLOCK$static, "text"));};/*

  /**
   * The property value editors, whose itemId must match a CapPropertyDescriptorType.
   * /
  [Bindable]
  public var editors:Array;

  /**
   * A property path expression leading to the Bean whose property is edited.
   * This property editor assumes that this bean has a property 'properties'.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The property of the Bean to bind in this field.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * An optional ValueExpression which makes the component read-only if it is evaluated to true.
   * /
  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;

  public*/ function StructEditorTreeGridBase$(config/*:StructEditorTreeGrid = null*/) {if(arguments.length<=0)config=null;
    this.super$GKqT(config);

    this.initValidationStateMixin();

    this.valueColumn$GKqT = this.getColumns().filter(isValueColumn$static)[0];

    this.mon(this.getSelectionModel(), "selectionchange",AS3.bind( this,"onSelectionChange"));
    this.onSelectionChange();

    this.on("beforeedit",AS3.bind( this,"onBeforeEdit$GKqT"));
    this.on("expandnode", onExpandCollapse$static(true, this));
    this.on("collapsenode", onExpandCollapse$static(false, this));
    this.on("beforecellclick",AS3.bind( this,"onBeforeCellClick$GKqT"));

    this.mon(this.getView(), "render",AS3.bind( this,"onViewRender$GKqT"));

    this.mon(this.getStore(), "update", onStoreUpdate$static);
    com.coremedia.ui.data.util.ObservablePropertyUtil.createPropertyChangeEventsFor(this, "linkedContent");
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.tree.Panel.prototype.afterRender.call(this);
    this.getHeaderContainer().addCls(com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_HEADER.getCSSClass());
  }/*

  protected*/ function getSelectedNodeExpression()/*:ValueExpression*/ {
    if (!this.selectedNodeValueExpression$GKqT) {
      this.selectedNodeValueExpression$GKqT = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(null);
    }
    return this.selectedNodeValueExpression$GKqT;
  }/*

  private static*/ function onExpandCollapse$static(newExpandedState/*:Boolean*/, t/*:StructEditorTreeGridBase*/)/*:Function*/ {
    return function (node/*:StructTreeNode*/)/*:void*/ {
      // update "expanded" attribute:
      if (newExpandedState) {
        node.expand();
      } else {
        node.collapse();
      }
      t.ownerCt.updateLayout();
    };
  }/*

  internal*/ function onSelectionChange()/*:void*/ {
    var selection/*:Array*/ = this.getSelection();
    var selectedNode/*:StructTreeNode*/ = selection && selection.length > 0 ? AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,selection[0]) : null;
    this.selectedNodeValueExpression$GKqT.setValue(selectedNode);
  }/*

  private*/ function onViewRender()/*:void*/ {
    this.structEditorTreeGridDropTarget$GKqT = new com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridDropTarget(this);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.tree.Panel.prototype.onDestroy.call(this);

    if (this.structEditorTreeGridDropTarget$GKqT) {
      this.structEditorTreeGridDropTarget$GKqT.unreg();
    }
    // Destroy all column editors
    var columns/*:Array*/ =AS3.as( this['columns'],  Array);
    if (columns && columns.length > 0) {
      for (var i/*:int*/ = 0; i < columns.length; i++) {
        var column/*:**/ = columns[i];
        if (column['editor']) {
          // empty struct has an editor object without destroy method
          column['editor'].destroy && column['editor'].destroy();
        }
      }
    }

    this.getStore().destroy();
  }/*

  private static*/ function isValueColumn$static(column/*:Object*/)/*:Boolean*/ {
    return column.dataIndex === "value";
  }/*

  //noinspection OverlyComplexFunctionJS Ext JS defines that signature, not we.
  //noinspection JSUnusedLocalSymbols
  private*/ function onBeforeCellClick(view/*:TreeView*/,
                                     td/*:HTMLElement*/, cellIndex/*:Number*/, structTreeNode/*:StructTreeNode*/,
                                     tr/*:HTMLElement*/, rowIndex/*:Number*/, e/*:Event*/, eOpts/*:Object*/)/*:Boolean*/ {
    var column/*:Column*/ = this.getColumns()[cellIndex];
    if (column.dataIndex === "text") {
      if (e.getTarget(view['expanderSelector'])) {
        // Clicks on the expander are not intercepted.
        return true;
      }
      if (this.getSelectedNode$GKqT() !== structTreeNode) {
        // Clicking the tree column always selects the row.
        structTreeNode.select(false);
        // The event is stopped, so that the row is not renamed.
        return false;
      }
    }
    return true;
  }/*

  private*/ function onBeforeEdit(editing/*:CellEditingPlugin*/, context/*:Object*/)/*:void*/ {
    if (this.getReadOnlyExpression$GKqT().getValue()) {
      context.cancel = true;
      return;
    }
    var structTreeNode/*:StructTreeNode*/ = context.record;
    if (context.field === "text") {
      if (!structTreeNode.isPropertyNode()) {
        context.cancel = true;
        return;
      }
      return;
    }
    if (context.field === "linkType") {
      context.cancel = structTreeNode.getPropertyType() !== com.coremedia.cap.common.CapPropertyDescriptorType.LINK || structTreeNode.isListItemNode();
      return;
    }
    if (context.field !== "value") {
      return;
    }
    var propertyDescriptor/*:CapPropertyDescriptor*/ = structTreeNode.getPropertyDescriptor();
    var editorConfig/*:BaseField*/ = this.getEditorConfig$GKqT(propertyDescriptor);
    if (editorConfig) {
      // Set the value editor if no editor has been set so far or if the
      // current editor is not suitable for the property type
      if (!(AS3.is(this.valueColumn$GKqT.getEditor(),  Ext.Component)) || AS3.getBindable(AS3.cast(Ext.Component,this.valueColumn$GKqT.getEditor()),"itemId","DUMMY") !== AS3.getBindable(editorConfig,"itemId","DUMMY")) {
        Ext.destroy(this.valueColumn$GKqT.getEditor());
        this.valueColumn$GKqT.setEditor(AS3.cast(Ext.form.field.Field,Ext.ComponentManager.create(editorConfig)));
      }
    } else {
      context.cancel = true;
      // built-in editing behavior for special types:
      switch (propertyDescriptor.type) {
        case com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN:
          // special case boolean: simply toggle!
          structTreeNode.set(context.field, !structTreeNode.get(context.field));
          break;
        case com.coremedia.cap.common.CapPropertyDescriptorType.LINK:
          if (structTreeNode.isCollection() || structTreeNode.getValue() === null) {
            openCollectionViewInAppropriateState$static(propertyDescriptor);
          }
          break;
        case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:
          if (propertyDescriptor.atomic) {
            this.openDateTimeMenu$GKqT(structTreeNode, context);
          }
          break;
      }
    }
  }/*

  private*/ function openDateTimeMenu(structTreeNode/*:StructTreeNode*/, context/*:Object*/)/*:void*/ {
    var dateTimeMenuConfig/*:DateTimeMenu*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenu,{});
    AS3.setBindable(dateTimeMenuConfig,"initialCalendar" ,AS3.as( structTreeNode.getValue(),  com.coremedia.ui.data.Calendar));
    dateTimeMenuConfig.onMenuCloseCallback = function (cal/*:Calendar*/)/*:void*/ {
      structTreeNode.set(context.field, cal);
    };
    var menu/*:Menu*/ = AS3.cast(Ext.menu.Menu,Ext.ComponentManager.create(dateTimeMenuConfig));
    var element/*:Element*/ = Ext.get(this.getEl().select('.x-grid-item-focused').elements[0]);
    menu.showBy(element, "bl-tl?");
  }/*

  private static*/ function openCollectionViewInAppropriateState$static(propertyDescriptor/*:CapPropertyDescriptor*/)/*:void*/ {
    var linkType/*:CapType*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(propertyDescriptor);
    if (linkType.isSubtypeOf(com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getDocumentContentType())) {
      var searchStateConfig/*:SearchState*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchState,{});
      searchStateConfig.contentType = linkType.getName();
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(new com.coremedia.cms.editor.sdk.collectionview.SearchState(searchStateConfig));
    } else {
      // Open repository view if the linkType allows contents that are not included in search
      // results (Folder_, Content_)
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openRepository();
    }
  }/*

  private*/ function getEditorConfig(propertyDescriptor/*:CapPropertyDescriptor*/)/*:BaseField*/ {
// Find a suitable editor for the property. Collections are never appropriate for a normal editor.
    var editorConfig/*:BaseField*/ = null;
    if (!propertyDescriptor.collection) {
      for (var i/*:int*/ = 0; i < AS3.getBindable(this,"editors").length; i++) {
        var candidate/*:BaseField*/ = AS3.getBindable(this,"editors")[i];
        if (AS3.getBindable(candidate,"itemId","DUMMY") === propertyDescriptor.type) {
          editorConfig = candidate;
        }
      }
    }
    return editorConfig;
  }/*

  private static*/ function onStoreUpdate$static(store/*:Store*/,
                                        structNode/*:StructTreeNode*/,
                                        operation/*:String*/,
                                        modifiedFieldNames/*:Array*/)/*:void*/ {
    if (modifiedFieldNames) {
      for/* each*/ (var $1=0;$1</* in*/ modifiedFieldNames.length;++$1) {var field/*:String*/ =modifiedFieldNames[$1];
        switch (field) {
          case "value":
            structNode.valueEdited();
            break;
          case "linkType":
            structNode.replaceLinkType();
            break;
          case "text":
            structNode.renameProperty();
        }
      }
    }
  }/*

  private*/ function getSelectedNode()/*:StructTreeNode*/ {
    return this.getSelectedNodeExpression().getValue();
  }/*

  [ProvideToExtChildren]
  public*/ function getLinkedContent()/*:Content*/ {
    var selectedNode/*:StructTreeNode*/ = this.getSelectedNode$GKqT();
    return selectedNode && (AS3.as(selectedNode.getValue(),  com.coremedia.cap.content.Content));
  }/*


  /**
   * Inject the context variable 'content' from Premular
   * @private
   * /
  [InjectFromExtParent(variable='content')]
  public*/ function setContents(contents/*:Array*/)/*:void*/ {
    this.getContentExpression$GKqT().setValue(contents);
  }/*

  private*/ function getContentExpression()/*:ValueExpression*/ {
    if (!this.contentValueExpression$GKqT) {
      this.contentValueExpression$GKqT = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.contentValueExpression$GKqT;
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent]
  public*/ function setForceReadOnly(readOnly/*:Boolean*/)/*:void*/ {
    if (!AS3.getBindable(this,"forceReadOnlyValueExpression")) {
      AS3.setBindable(this,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(readOnly));
    }
    //when forceReadOnlyValueExpression is already set, do nothing.
  }/*

  private*/ function getReadOnlyExpression()/*:ValueExpression*/ {
    if (!this.readOnlyValueExpression$GKqT) {
      this.readOnlyValueExpression$GKqT = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(this.contentValueExpression$GKqT, AS3.getBindable(this,"forceReadOnlyValueExpression"));

    }
    return this.readOnlyValueExpression$GKqT;
  }/*


  private static const*/var STRUCT_VALUE_DESCRIPTION_HTML$static/*:String*/;/* =*/function STRUCT_VALUE_DESCRIPTION_HTML$static_(){STRUCT_VALUE_DESCRIPTION_HTML$static=( "<span class='" + CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT$static + "'>{0}</span>");};/*
  private static*/ var CM_STRUCT_EDITOR_CHECKBOX$static/*:String*/ = "cm-struct-editor-checkbox";/*
  private static*/ var CM_STRUCT_EDITOR_CHECKBOX_CHECKED$static/*:String*/;/* =*/function CM_STRUCT_EDITOR_CHECKBOX_CHECKED$static_(){CM_STRUCT_EDITOR_CHECKBOX_CHECKED$static=( com.coremedia.ui.util.BEMUtils.getModifierClassName(CM_STRUCT_EDITOR_CHECKBOX$static, "checked"));};/*


  private static*/ function renderType$static(attributes/*:Object*/)/*:String*/ {
    var descriptor/*:CapPropertyDescriptor*/ = attributes.propertyDescriptor;
    if (descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
      if (!attributes.isItem) {
        var linkType/*:ContentType*/ = AS3.cast(com.coremedia.cap.content.ContentType,com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(descriptor));
        var documentTypeName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(linkType.getName());
        var iconCls/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(linkType);
        var text/*:String*/ = Ext.String.format(STRUCT_VALUE_DESCRIPTION_HTML$static, documentTypeName);
        var linkDesc/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', "linkProperty_description"));
        return "<div class='" + CM_STRUCT_EDITOR_ENTRY_BLOCK$static + "' data-qtip='" + linkDesc + " " + documentTypeName + "'>" + "<span class='" + CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT$static + "'>" + linkDesc + "</span>" +
                Ext.String.format("<span class='" + CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static + " {0}'></span>", iconCls) + text + "</div>";
      }
    } else {
      var descriptorType/*:String*/ = descriptor.type.toLowerCase();
      if (descriptor.collection === true) {
        descriptorType = descriptorType + "s";
      }
      var descriptorTypeString/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', "propertyType_" + descriptorType + "_text");
      return "<div class='" + CM_STRUCT_EDITOR_ENTRY_BLOCK$static + "'>" + descriptorTypeString + "</div>";
    }
    return "";
  }/*

  private static*/ function renderValue$static(attributes/*:Object*/)/*:String*/ {
    var value/*:**/ = attributes.value;
    var propertyCount/*:uint*/ = attributes.renderData ? attributes.renderData.size : 0;
    var descriptor/*:CapPropertyDescriptor*/ = attributes.propertyDescriptor;

    var valueDescription/*:String*/ = null;

    if (!descriptor.collection && descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT && propertyCount === 0) {
      // empty structs
      //   -> report emptyness
      valueDescription = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_property_count_0');
    } else if (descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK && (!descriptor.collection || attributes.expanded)) {
      // links and expanded link lists
      //   -> show value or show drop target
      var iconCls/*:String*/ = "";
      var text/*:String*/ = "";
      var content/*:Content*/ =AS3.as( value,  com.coremedia.cap.content.Content);
      if (content) {
        switch (content.getState()) {
          case com.coremedia.ui.data.BeanState.UNREADABLE:
            iconCls = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForStatus("lock");
            text = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);
            break;
          case com.coremedia.ui.data.BeanState.READABLE:
            iconCls = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(content.getType());
            text = com.coremedia.ui.util.EncodingUtil.encodeForHTML(content.getName());
        }
      } else {
        iconCls = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'Action_addStructProperty_icon');
        text = descriptor.collection ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'links_drop_zone_text') : mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'link_drop_zone_text');
      }
      var toolTipText/*:**/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(text);
      return '<div class="' + CM_STRUCT_LINK_LIST_DROP_CONTAINER$static + '" data-qtip="' + toolTipText + '"><span data-qtip="' + toolTipText + '" class="' + iconCls + ' ' + CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static + '"></span><label class="icon-label-text" data-qtip="' + toolTipText + '">' + text + '</label></div>';
    } else if (descriptor.collection && (!attributes.expanded || value.length === 0)) {
      // collapsed lists and empty lists of non-links
      //   -> report type and size
      var localizedElementType/*:String*/ = com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil.localizeElementType(descriptor.type);
      var pattern/*:String*/ = value.length === 0 ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_collection_item_count_pattern_0') :
              value.length === 1 ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_collection_item_count_pattern_1')
                      : mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_collection_item_count_pattern_n');
      valueDescription = Ext.String.format(pattern, value.length, localizedElementType);
    } else if (attributes.expanded) {
      // non-empty expanded lists of non-links and non-empty expanded structs
      //   -> leave empty, use "&nbsp;" to stretch out the selection-container
      valueDescription = "&nbsp;";
    } else {
      // atomic values
      //   ->
      switch (descriptor.type) {
        case com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN:
          return Ext.String.format("<div class='{0}'>&#160;</div>", value ? CM_STRUCT_EDITOR_CHECKBOX$static + " " + CM_STRUCT_EDITOR_CHECKBOX_CHECKED$static : CM_STRUCT_EDITOR_CHECKBOX$static);
        case com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT:
          valueDescription = propertyCount === 1 ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_property_count_1')
                  : Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'struct_property_count_pattern_n'), propertyCount);
          break;
        case com.coremedia.cap.common.CapPropertyDescriptorType.STRING:
          if (value === "") {
            valueDescription = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'empty_string_text');
          }
          break;
        case com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER:
          if (value === null || value === "") { // integer value is set to "" by numberfield!
            valueDescription = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'empty_integer_text');
          }
          break;
        case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:
          if (!value) {
            valueDescription = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'empty_date_text');
          } else if (AS3.is(value,  com.coremedia.ui.data.Calendar)) {
            var calString/*:String*/ = com.coremedia.cms.editor.sdk.util.CalendarUtil.format(value);
            return '<div>' + calString + '</div>';
          }
          break;
      }
    }
    return valueDescription !== null ? Ext.String.format(STRUCT_VALUE_DESCRIPTION_HTML$static, valueDescription) : com.coremedia.ui.util.EncodingUtil.encodeForHTML(value);
  }/*

  internal static*/ function getValueTemplate$static()/*:**/ {
    return new Ext.XTemplate('{[this.renderValue(values)]}', {
      renderValue: renderValue$static
    });
  }/*

  internal static*/ function getTypeTemplate$static()/*:**/ {
    return new Ext.XTemplate('{[this.renderType(values)]}', {
      renderType: renderType$static
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tree.Panel",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {
        getLinkedContent: ["ProvideToExtChildren"],
        setContents: [
          "InjectFromExtParent",
          [
            "variable",
            "content"
          ]
        ],
        setForceReadOnly: ["InjectFromExtParent"]
      },
      valueColumn$GKqT: null,
      contentValueExpression$GKqT: null,
      readOnlyValueExpression$GKqT: null,
      selectedNodeValueExpression$GKqT: null,
      structEditorTreeGridDropTarget$GKqT: null,
      constructor: StructEditorTreeGridBase$,
      super$GKqT: function() {
        Ext.tree.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getSelectedNodeExpression: getSelectedNodeExpression,
      onSelectionChange: onSelectionChange,
      onViewRender$GKqT: onViewRender,
      onDestroy: onDestroy,
      onBeforeCellClick$GKqT: onBeforeCellClick,
      onBeforeEdit$GKqT: onBeforeEdit,
      openDateTimeMenu$GKqT: openDateTimeMenu,
      getEditorConfig$GKqT: getEditorConfig,
      getSelectedNode$GKqT: getSelectedNode,
      getLinkedContent: getLinkedContent,
      setContents: setContents,
      getContentExpression$GKqT: getContentExpression,
      setForceReadOnly: setForceReadOnly,
      getReadOnlyExpression$GKqT: getReadOnlyExpression,
      config: {
        editors: null,
        bindTo: null,
        propertyName: null,
        forceReadOnlyValueExpression: null
      },
      statics: {
        CM_STRUCT_EDITOR_TREE_GRID_BLOCK: "cm-struct-editor-tree-grid",
        CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT: undefined,
        CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT: undefined,
        CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT: undefined,
        STRUCT_VALUE_DESCRIPTION_HTML: undefined,
        CM_STRUCT_EDITOR_CHECKBOX_CHECKED: undefined,
        getValueTemplate: getValueTemplate$static,
        getTypeTemplate: getTypeTemplate$static,
        __initStatics__: function() {
          CM_STRUCT_EDITOR_ENTRY_DESCRIPTION_ELEMENT$static_();
          CM_STRUCT_EDITOR_ENTRY_ICON_ELEMENT$static_();
          CM_STRUCT_EDITOR_ENTRY_TEXT_ELEMENT$static_();
          STRUCT_VALUE_DESCRIPTION_HTML$static_();
          CM_STRUCT_EDITOR_CHECKBOX_CHECKED$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.String",
        "Ext.XTemplate",
        "Ext.form.field.Field",
        "Ext.menu.Menu",
        "Ext.tree.Panel",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.util.ObservablePropertyUtil",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.util.BEMUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenu",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridDropTarget",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode",
        "com.coremedia.cms.editor.sdk.util.CalendarUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
