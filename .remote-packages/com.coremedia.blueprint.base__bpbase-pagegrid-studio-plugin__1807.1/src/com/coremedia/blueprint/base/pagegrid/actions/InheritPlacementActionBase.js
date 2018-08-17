Ext.define("com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase", function(InheritPlacementActionBase) {/*package com.coremedia.blueprint.base.pagegrid.actions {

import com.coremedia.blueprint.base.pagegrid.PageGridConstants;
import com.coremedia.blueprint.base.pagegrid.PageGridUtil;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.actions.DependencyTrackedToggleAction;
import com.coremedia.ui.data.TreeRelation;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;

import mx.resources.ResourceManager;

/**
 * An action to toggle the dashboard tab.
 * /
[ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField')]
public class InheritPlacementActionBase extends DependencyTrackedToggleAction {

  private var bindTo:ValueExpression;
  private var storingContentValueExpression:ValueExpression;
  private var propertyName:String;
  private var forceReadOnlyValueExpression:ValueExpression;
  private var pageTreeRelation:TreeRelation;
  private var section:Content;

  private var oldExtendedItems:Array;
  private var oldViewtype:Content;

  public*/ function InheritPlacementActionBase$(config/*:InheritPlacementAction = null*/) {if(arguments.length<=0)config=null;
    // Copy values before super constructor call for calculateDisable.
    this.bindTo$HVfl = AS3.getBindable(config,"bindTo");
    this.storingContentValueExpression$HVfl = AS3.getBindable(config,"storingContentValueExpression");
    this.propertyName$HVfl = AS3.getBindable(config,"propertyName");
    this.forceReadOnlyValueExpression$HVfl = AS3.getBindable(config,"forceReadOnlyValueExpression");
    this.pageTreeRelation$HVfl = AS3.getBindable(config,"pageTreeRelation");
    this.section$HVfl = AS3.getBindable(config,"section");

    this.super$HVfl(AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleAction,Ext.apply({
      iconCls: mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'InheritPlacementAction_icon'),
      text: mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'InheritPlacementAction_text'),
      tooltip: mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'InheritPlacementAction_tooltip'),
      tooltipPressed:mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'InheritPlacementAction_tooltipPressed')
    }, config)));
  }/*

  private*/ function isInherit()/*:Boolean*/ {
    var formContent/*:Content*/ =AS3.as( this.bindTo$HVfl.getValue(),  com.coremedia.cap.content.Content);
    var storingContent/*:Content*/ =AS3.as( this.storingContentValueExpression$HVfl.getValue(),  com.coremedia.cap.content.Content);
    if (formContent === undefined || storingContent === undefined) {
      return undefined;
    }
    return formContent !== storingContent;
  }/*

  override protected*/ function handleUnpress()/*:void*/ {
    this.section$HVfl.load(AS3.bind(this,"createLocalPlacementDefinition$HVfl"));
  }/*

  private*/ function createLocalPlacementDefinition()/*:void*/ {
    // Create struct list item
    var properties/*:ContentProperties*/ = this.bindTo$HVfl.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES).getValue();
    if (!properties || !properties.getState().exists) {
      return;
    }

    var contentProperty/*:**/ = String(this.propertyName$HVfl).split('.')[0];

    var mainStruct/*:Struct*/ = properties.get(contentProperty);
    if (!mainStruct || !mainStruct.getState().exists) {
      return;
    }

    // Navigate to the struct that stores are placements, creating intermediate structs as needed.
    var placementsBaseStruct/*:Struct*/ = mainStruct.instantiate(com.coremedia.blueprint.base.pagegrid.PageGridConstants.NEW_PLACEMENTS_BASE_PROPERTY);
    if (!placementsBaseStruct) {
      return;
    }

    var placementsStruct/*:Struct*/ = placementsBaseStruct.instantiate(com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENTS_LIST_PROPERTY);
    if (!placementsStruct) {
      return;
    }

    // Get inherited items.
    var extendedItems/*:Array*/ = this.oldExtendedItems$HVfl || this.structListToArrayOfObject$HVfl(this.storingContentValueExpression$HVfl.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES,
            this.propertyName$HVfl,
            com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY).getValue());
    // Get inherited viewtype.
    var viewtype/*:Content*/ = this.oldViewtype$HVfl || this.storingContentValueExpression$HVfl.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES,
                    this.propertyName$HVfl,
                    com.coremedia.blueprint.base.pagegrid.PageGridConstants.VIEWTYPE_PROPERTY_NAME).getValue();
    this.oldExtendedItems$HVfl = null;
    this.oldViewtype$HVfl = null;
    if (!extendedItems) {
      extendedItems = [];
    }

    var newPlacementStruct/*:Struct*/ = placementsStruct.instantiate(this.section$HVfl.getUriPath());
    // Add initial values
    newPlacementStruct.getType().addStructListProperty(com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY, extendedItems);
    if (viewtype){
      var viewtypeType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType("CMViewtype");
      newPlacementStruct.getType().addLinkProperty(com.coremedia.blueprint.base.pagegrid.PageGridConstants.VIEWTYPE_PROPERTY_NAME, viewtypeType, viewtype);
    }
  }/*

  override protected*/ function handlePress()/*:void*/ {
    this.removeLocalPlacementDefinition$HVfl();
  }/*

  private*/ function removeLocalPlacementDefinition()/*:void*/ {
    var formContent/*:Content*/ =AS3.as( this.bindTo$HVfl.getValue(),  com.coremedia.cap.content.Content);
    var properties/*:ContentProperties*/ = formContent.getProperties();
    var propPath/*:Array*/ = String(this.propertyName$HVfl).split('.');
    var itemToRemove/*:String*/ = propPath.pop();
    var shortenedPath/*:String*/ = propPath.join('.');
    var struct/*:Struct*/ =AS3.as( com.coremedia.ui.util.ObjectUtils.getPropertyAt(properties, shortenedPath),  com.coremedia.cap.struct.Struct);
    this.oldExtendedItems$HVfl = null;
    this.oldViewtype$HVfl = null;
    if (struct && struct.getType().getPropertyNames().indexOf(itemToRemove) !== -1) {
      var oldPlacement/*:Struct*/ =AS3.as( struct.get(itemToRemove),  com.coremedia.cap.struct.Struct);
      if (oldPlacement) {
        this.oldExtendedItems$HVfl = this.structListToArrayOfObject$HVfl(oldPlacement.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY));
        this.oldViewtype$HVfl = oldPlacement.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.VIEWTYPE_PROPERTY_NAME);
      }
      struct.getType().removeProperty(itemToRemove);
    } else {
      com.coremedia.ui.logging.Logger.error("Could not delete local placement definition in " + this.propertyName$HVfl + " for content " + formContent.getId());
    }
  }/*

  private*/ function structListToArrayOfObject(structList/*:Array*/)/*:Array*/ {
    if (!structList) {
      return structList;
    }
    return structList.map(function (struct/*:Struct*/)/*:Object*/ {
      return struct.getType().getPropertyNames().filter(function (propertyName/*:String*/)/*:Boolean*/ {
        // filter null values as property types cannot be guessed in that case
        return struct.get(propertyName) !== null;
      }).map(function (propertyName/*:String*/)/*:Object*/ {
        var object/*:Object*/ = {};
        object[propertyName] = struct.get(propertyName);
        return object;
      }).reduce(function (acc/*:Object*/, current/*:Object*/)/*:Object*/ {
        return Ext.apply(acc, current);
      }, {});
    });
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (this.forceReadOnlyValueExpression$HVfl && this.forceReadOnlyValueExpression$HVfl.getValue()) {
      return true;
    }
    var formContent/*:Content*/ = this.bindTo$HVfl.getValue();
    if (formContent === undefined) {
      return undefined;
    }
    var readOnly/*:Boolean*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.isReadOnly(formContent);
    if (readOnly !== false) {
      return readOnly;
    }

    var placementStructPropertyName/*:String*/ = String(this.propertyName$HVfl).split('.')[0];
    var pageDeclaringSection/*:Content*/ =
            com.coremedia.blueprint.base.pagegrid.PageGridUtil.computePageDeclaringSection(formContent, this.pageTreeRelation$HVfl, placementStructPropertyName, this.section$HVfl);

    switch (pageDeclaringSection) {
      case undefined: return undefined;
      case null: return false;
      case formContent: return true;
    }

    var declaredSection/*:Struct*/ = com.coremedia.blueprint.base.pagegrid.PageGridUtil.getPlacementUnchecked(pageDeclaringSection, placementStructPropertyName, this.section$HVfl);
    return com.coremedia.blueprint.base.pagegrid.PageGridUtil.isLockingChildren(declaredSection);
  }/*

  override protected*/ function calculatePressed()/*:Boolean*/ {
    return this.isInherit$HVfl();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedToggleAction",
      bindTo$HVfl: null,
      storingContentValueExpression$HVfl: null,
      propertyName$HVfl: null,
      forceReadOnlyValueExpression$HVfl: null,
      pageTreeRelation$HVfl: null,
      section$HVfl: null,
      oldExtendedItems$HVfl: null,
      oldViewtype$HVfl: null,
      constructor: InheritPlacementActionBase$,
      super$HVfl: function() {
        com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.constructor.apply(this, arguments);
      },
      isInherit$HVfl: isInherit,
      handleUnpress: handleUnpress,
      createLocalPlacementDefinition$HVfl: createLocalPlacementDefinition,
      handlePress: handlePress,
      removeLocalPlacementDefinition$HVfl: removeLocalPlacementDefinition,
      structListToArrayOfObject$HVfl: structListToArrayOfObject,
      calculateDisabled: calculateDisabled,
      calculatePressed: calculatePressed,
      requires: [
        "Ext",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.actions.DependencyTrackedToggleAction",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridConstants",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil"
      ]
    };
});
