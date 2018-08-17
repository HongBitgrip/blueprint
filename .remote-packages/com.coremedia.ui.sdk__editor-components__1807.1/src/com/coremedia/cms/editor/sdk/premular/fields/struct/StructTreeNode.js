Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode", function(StructTreeNode) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.common.impl.StructTypeImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.StringUtil;
import ext.data.TreeModel;
import ext.data.TreeStore;
import ext.grid.CellContext;
import ext.grid.plugin.CellEditingPlugin;
import ext.tree.TreePanel;
import ext.view.TableView;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField')]
public class StructTreeNode extends TreeModel {
  private var structTreeStore: StructTreeStore;
  private var structValueExpression:ValueExpression;
  private var nodeValueExpression:ValueExpression;
  private var renderDataExpression:ValueExpression;
  private var childrenValueExpression:ValueExpression;
  private var propertyPath:Array; // elements are either String or int
  private var propertyOrIndex:*; // either a String or an int

  public*/ function StructTreeNode$(attributes/*:Object*/) {var this$=this;
    this.super$ZxAR(attributes);
    this.structTreeStore$ZxAR = attributes.structTreeStore;
    this.propertyPath$ZxAR = com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreePathUtil.decodePath(this.getId());
    this.propertyOrIndex$ZxAR = this.isRootNode() ? null : this.propertyPath$ZxAR[this.propertyPath$ZxAR.length - 1];
    this.structValueExpression$ZxAR = attributes.structValueExpression;
    this.nodeValueExpression$ZxAR = this.structValueExpression$ZxAR.extendBy(this.propertyPath$ZxAR);
    this.nodeValueExpression$ZxAR.addChangeListener(AS3.bind(this,"valueChanged$ZxAR"));
    this.valueChanged$ZxAR();
    this.renderDataExpression$ZxAR = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:**/ {
      var value/*:**/ = this$.getValue();
      if (value === undefined) {
        return undefined;
      }
      if (AS3.is(value,  com.coremedia.cap.content.Content)) {
        return {
          name: AS3.cast(com.coremedia.cap.content.Content,value).getName()
        };
      } else if (AS3.is(value,  com.coremedia.cap.struct.Struct)) {
        var structType/*:StructType*/ = AS3.cast(com.coremedia.cap.struct.Struct,value).getType();
        if (structType) {
          //noinspection JSMismatchedCollectionQueryUpdate
          var descriptors/*:Array*/ = structType.getDescriptors();
          if (descriptors) {
            return {
              size: descriptors.length
            };
          }
        }
        return undefined;
      }
      return value;
    });
    this.renderDataExpression$ZxAR.addChangeListener(AS3.bind(this,"renderDataChanged$ZxAR"));
    this.renderDataChanged$ZxAR();

    if (!this.isLeaf()) {
    this.childrenValueExpression$ZxAR = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeChildren$ZxAR"));
      this.childrenValueExpression$ZxAR.addChangeListener(AS3.bind(this,"childrenChanged$ZxAR"));
      this.childrenChanged$ZxAR();
    }

    this.structTreeStore$ZxAR.nodeCreated(this);
  }/*

  override public*/ function isLoaded()/*:Boolean*/ {
    return true;
  }/*

  override public*/ function set(fieldName/*:String*/, newValue/*:**/, options/*:Object = null*/)/*:Array*/ {if(arguments.length<=2)options=null;
    return Ext.data.TreeModel.prototype.set.call(this,fieldName, newValue, {dirty:false});
  }/*

  public*/ function getParentStructTreeNode()/*:StructTreeNode*/ {
    return AS3.cast(StructTreeNode,this.parentNode);
  }/*

  public*/ function getPropertyName()/*:String*/ {
    AS3.assert(this.isPropertyNode(), "StructTreeNode.as", 99, 5);
    return this.propertyOrIndex$ZxAR;
  }/*

  public*/ function getListItemIndex()/*:int*/ {
    AS3.assert(this.isListItemNode(), "StructTreeNode.as", 104, 5);
    return this.propertyOrIndex$ZxAR;
  }/*

  public*/ function isPropertyNode()/*:Boolean*/ {
    return AS3.is( this.propertyOrIndex$ZxAR,  String);
  }/*

  public*/ function isListItemNode()/*:Boolean*/ {
    return AS3.is( this.propertyOrIndex$ZxAR,  Number);
  }/*

  public*/ function isStructNode()/*:Boolean*/ {
    var descriptor/*:CapPropertyDescriptor*/ = this.getPropertyDescriptor();
    return descriptor.atomic && descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT;
  }/*

  public*/ function isRootNode()/*:Boolean*/ {
    return this.propertyPath$ZxAR.length === 0;
  }/*

  private*/ function valueChanged()/*:void*/ {
    var value/*:**/ = this.getValue();
    if (value !== undefined) {
      this.set("value", value);
    }
  }/*

  private*/ function renderDataChanged()/*:void*/ {
    if (this.renderDataExpression$ZxAR.getValue() !== undefined) {
      this.set("renderData", this.renderDataExpression$ZxAR.getValue());
    }
  }/*

  /**
   * Force an update of the set of children.
   *
   * Detach and re-attach the children listener 1) to avoid
   * pending events to cause another update of the children and
   * 2) to make sure that the value cached in the value expression
   * is replaced by a new value.
   * /
  internal*/ function updateChildrenNow()/*:void*/ {
    if (this.childrenValueExpression$ZxAR) {
      this.childrenValueExpression$ZxAR.removeChangeListener(AS3.bind(this,"childrenChanged$ZxAR"));
      this.childrenValueExpression$ZxAR.addChangeListener(AS3.bind(this,"childrenChanged$ZxAR"));
      this.childrenChanged$ZxAR();
    }
  }/*

  private*/ function childrenChanged()/*:void*/ {
    if (!this.childrenValueExpression$ZxAR) {
      return;
    }
    var childNodes/*:Array*/ = this.childrenValueExpression$ZxAR.getValue();
    if (!childNodes) {
      return;
    }

    var treeStore/*:TreeStore*/ = this.getTreeStore();
    treeStore && treeStore.beginUpdate();
    try {
      this.updateChildren$ZxAR(childNodes);
    } finally {
      treeStore && treeStore.endUpdate();
    }
  }/*

  internal*/ function isCollection()/*:Boolean*/ {
    return this.getPropertyDescriptor().collection;
  }/*

  internal*/ function getPropertyType()/*:String*/ {
    return this.getPropertyDescriptor().type;
  }/*

  private*/ function computeChildren()/*:Array*/ {
    if (this.isCollection()) {
      return this.computeCollectionChildren$ZxAR();
    } else {
      return this.computeStructChildren$ZxAR();
    }
  }/*

  private*/ function computeCollectionChildren()/*:Array*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var collection/*:Array*/ = this.getValue();
    if (!collection) {
      return undefined;
    }
    var nodes/*:Array*/ = [];
    var descriptor/*:CapPropertyDescriptor*/ = this.getPropertyDescriptor();
    var itemDescriptor/*:CapPropertyDescriptor*/ = computeItemDescriptor$static(descriptor);
    for (var i/*:int*/ = 0; i < collection.length; i++) {
      nodes.push(this.createListItemNodeConfig$ZxAR(descriptor, i, itemDescriptor));
    }
    return nodes;
  }/*

  private static*/ function computeItemDescriptor$static(descriptor/*:CapPropertyDescriptor*/)/*:CapPropertyDescriptor*/ {
    var rawDescriptor/*:Object*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.toObject(descriptor);
    rawDescriptor.atomic = true;
    rawDescriptor.collection = false;
    return com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create(rawDescriptor);
  }/*

  private*/ function createListItemNodeConfig(descriptor/*:CapPropertyDescriptor*/, i/*:uint*/, itemDescriptor/*:CapPropertyDescriptor = null*/)/*:Object*/ {if(arguments.length<=2)itemDescriptor=null;
    if (!itemDescriptor) {
      itemDescriptor = computeItemDescriptor$static(descriptor);
    }
    var leaf/*:Boolean*/ = descriptor.type !== com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT;
    return {
      structTreeStore: this.structTreeStore$ZxAR,
      id: this.extendedPropertyPath(i),
      text: Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'nth_item_pattern'), i + 1),
      isItem: true,
      propertyDescriptor: itemDescriptor,
      leaf: leaf,
      expanded: !leaf,
      cls: "struct-list-item-node",
      structValueExpression: this.structValueExpression$ZxAR
    };
  }/*

  internal*/ function getPropertyDescriptor()/*:CapPropertyDescriptor*/ {
    return AS3.as( this.get("propertyDescriptor"),  com.coremedia.cap.common.CapPropertyDescriptor);
  }/*

  internal*/ function getParentStruct()/*:Struct*/ {
    return this.parentNode ? this.getParentStructTreeNode().getValueAsStruct() : null;
  }/*

  private*/ function computeStructChildren()/*:Array*/ {
    var struct/*:Struct*/ = this.getValue();
    if (!struct) {
      return undefined;
    }
    var structType/*:StructType*/ = struct.getType();
    if (!structType) {
      return undefined;
    }
    var descriptors/*:Array*//*CapPropertyDescriptor*/ = structType.getDescriptors();
    if (!descriptors) {
      return undefined;
    }
    return descriptors.map(AS3.bind(this,"propertyDescriptor2nodeAttributes"));
  }/*

  internal*/ function propertyDescriptor2nodeAttributes(descriptor/*:CapPropertyDescriptor*/)/*:Object*/ {
    var leaf/*:Boolean*/ = descriptor.atomic && descriptor.type !== com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT;
    var propertyName/*:String*/ = descriptor.name;
    var linkType/*:CapType*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(descriptor);
    return {
      structTreeStore: this.structTreeStore$ZxAR,
      id: this.extendedPropertyPath(propertyName),
      text: propertyName,
      propertyDescriptor: descriptor,
      leaf: leaf,
      expanded: !leaf,
      linkType: linkType ? linkType.getName() : undefined,
      structValueExpression: this.structValueExpression$ZxAR,
      cls: "struct-list-property-node"
    };
  }/*

  internal*/ function extendedPropertyPath(propertyName/*:**/)/*:String*/ {
    return com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreePathUtil.encodePath(this.propertyPath$ZxAR.concat(propertyName));
  }/*

  private*/ function updateChildren(newChildNodes/*:Array*/)/*:void*/ {
    // Index new node by id.
    var newChildNodesById/*:Object*/ = this.indexNodes$ZxAR(newChildNodes);

    // Index reusable children and remove non-reusable children.
    // Clone the old child node array, so that we do not have to worry about
    // disappearing nodes when traversing the array.
    var oldChildNodes/*:Array*/ = this.childNodes.concat();
    var oldChildNodesById/*:Object*/ = {};
    oldChildNodes.forEach(function (oldChildNode/*:StructTreeNode*/)/*:void*/ {
      var oldChildId/*:String*/ = oldChildNode.getId();
      var newChildNode/*:Object*/ = newChildNodesById[oldChildId];
      if (!newChildNode || !descriptorsCompatible$static(newChildNode.propertyDescriptor, oldChildNode.getPropertyDescriptor())) {
        // The node is no longer part of the tree or its type changed significantly: remove it
        oldChildNode.remove();
      } else {
        // The node can be reused.
        oldChildNodesById[oldChildId] = oldChildNode;
      }
    });

    for (var i/*:uint*/ = 0; i < newChildNodes.length; i++) {
      var newChild/*:**/ = newChildNodes[i];
      var oldChildNode/*:StructTreeNode*/ = oldChildNodesById[newChild.id];
      if (oldChildNode) {
        // Move existing node.
        this.insertChild(i, oldChildNode);
      } else {
        // A new node will be created from the simple Object.
        this.insertChild(i, newChild);
          }
        }
    }/*

  private*/ function indexNodes(nodes/*:Array*/)/*:Object*/ {
    var index/*:Object*/ = {};
    nodes.forEach(function (n/*:**/)/*:void*/ {
      index[n.id] = n;
    });
    return index;
  }/*

  private static*/ function descriptorsCompatible$static(propertyDescriptor1/*:CapPropertyDescriptor*/,
                                                propertyDescriptor2/*:CapPropertyDescriptor*/)/*:Boolean*/ {
    return propertyDescriptor1.type === propertyDescriptor2.type &&
            propertyDescriptor1.collection === propertyDescriptor2.collection &&
            com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(propertyDescriptor1) === com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(propertyDescriptor2);
  }/*

  public*/ function getValue()/*:**/ {
    return this.nodeValueExpression$ZxAR.getValue();
  }/*

  public*/ function getValueAsStruct()/*:Struct*/ {
    return this.isStructNode() ? this.getValue() : null;
  }/*

  private*/ function normalizeValue(value/*:**/)/*:**/ {
    switch (this.getPropertyDescriptor().type) {
      case com.coremedia.cap.common.CapPropertyDescriptorType.STRING:
        return !value ? "" : String(value);
      case com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN:
        return "true" === value || true === value;
      case com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER:
        return AS3.is( value,  AS3.int_) ? value : !value ? null : AS3.int_(parseInt(value, 10));
      case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:
        return this.normalizeDatePropertyValue$ZxAR(value);
    }
    return undefined;
  }/*

  private*/ function normalizeDatePropertyValue(value/*:**/)/*:**/ {
        if (!value) {
          return null;
        }
        if (AS3.is(value,  com.coremedia.ui.data.Calendar)) {
          return value;
        }

        var date/*:Date*/;
        if (AS3.is(value,  Date)) {
          date = value;
        } else if (AS3.is(value,  String)) {
          date = new Date();
          try {
            date.setUTCMilliseconds(Date.parse(value));
          } catch(e){if(AS3.is (e,AS3.Error)) {
            com.coremedia.ui.logging.Logger.warn("Could not parse date: " + value);
            return null;
          }else throw e;}
        }

        if (date) {
          var calendar/*:Calendar*/ = new com.coremedia.ui.data.Calendar({
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            timeZone: getDefaultTimeZone$static(),
            offset: date.getTimezoneOffset(),
            normalized: false
          });
          return calendar;
        }

        return null;
    }/*

  public*/ function isInSync()/*:Boolean*/ {
    if (this.isStructNode()) {
      // Check that the property path still points to a struct. If it does, all is well.
      return AS3.is( this.getValue(),  com.coremedia.cap.struct.Struct);
    }

    // Get rid of numeric path components. (e.g. struct list)
    var pathToStruct/*:Array*/ = this.propertyPath$ZxAR.map(convertToString$static);

    // Either a list or an atomic value.
    if (this.isListItemNode()) {
      pathToStruct.pop();
    }
    pathToStruct.pop();
    var struct/*:Struct*/ =AS3.as( com.coremedia.ui.util.ObjectUtils.getPropertyAt(this.structValueExpression$ZxAR.getValue(), pathToStruct),  com.coremedia.cap.struct.Struct);
    if (!struct) {
      // The struct no longer exists.
      return false;
    }
    var expectedDescriptor/*:CapPropertyDescriptor*/ = this.getPropertyDescriptor();
    if (!expectedDescriptor) {
      // This should not happen.
      return false;
    }
    var descriptor/*:CapPropertyDescriptor*/ = struct.getType().getDescriptor(expectedDescriptor.name);
    if (!descriptor) {
      // The property has disappeared.
      return false;
    }

    return descriptor.collection === (expectedDescriptor.collection || this.isListItemNode()) &&
                    descriptor.name === expectedDescriptor.name &&
                    descriptor.type === expectedDescriptor.type;
  }/*

  private static*/ function convertToString$static(object/*:Object*/)/*:String*/ {
    return object.toString();
  }/*

  private static*/ function getDefaultTimeZone$static()/*:String*/ {
    return (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getDefaultTimeZone();
  }/*

  internal*/ function startEditing(colIndex/*:int = 0*/)/*:void*/ {if(arguments.length<=0)colIndex=0;
    if (colIndex === 1 && this.getPropertyType() === com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN) {
      return;
    }

    this.getCellEditingPlugin$ZxAR().startEditByPosition({
      row: this.getTreeStore().indexOf(this),
      column: colIndex
    });
  }/*

  private*/ function getCellEditingPlugin()/*:CellEditingPlugin*/ {
    return AS3.cast(Ext.grid.plugin.CellEditing,this.getOwnerTree().getPlugin("cellEditing"));
  }/*

  internal*/ function valueEdited()/*:void*/ {
    if (this.isCollection() || this.isStructNode()) {
      // Edit events for collections and structs are always spurious.
      return;
  }

    var value/*:**/ = this.get("value");
    try {
      var convertedValue/*:**/ = this.normalizeValue$ZxAR(value);
      if (convertedValue !== undefined) {
        if (this.isPropertyNode()) {
          this.getParentStruct().set(this.getPropertyName(), convertedValue);
        } else {
          var parentNode/*:StructTreeNode*/ = this.getParentStructTreeNode();
          var struct/*:Struct*/ = parentNode.getParentStruct();
          var property/*:String*/ = parentNode.getPropertyName();
          var listItemIndex/*:int*/ = this.getListItemIndex();
          struct.removeAt(property, listItemIndex);
          if (convertedValue !== null) {
            struct.addAt(property, listItemIndex, convertedValue);
          } else if (!this.nextSibling) {
            AS3.cast(StructTreeNode,this.previousSibling || parentNode).select();
          }
        }
      }
    } catch (e/*:**/) {
      // ignore
      com.coremedia.ui.logging.Logger.warn("Struct property field: Cannot convert '" + value + "' to type " + this.getPropertyType());
    }
  }/*

  internal*/ function clearProperty()/*:Boolean*/ {
    // Might be in a rename, which we can accept without risk.
    this.getCellEditingPlugin$ZxAR().completeEdit();

    this.nodeValueExpression$ZxAR.setValue(null);
  }/*

  internal*/ function removeProperty()/*:Boolean*/ {
    // Editing a node that is about to be deleted has no effect.
    // We can safely reject the edit.
    this.getCellEditingPlugin$ZxAR().cancelEdit();

    if (!this.getParentStruct().getType().removeProperty(this.getPropertyName())) {
      return false;
      }

    this.getParentStructTreeNode().updateChildrenNow();
        return true;
      }/*

  internal*/ function replaceValue(propertyDescriptor/*:CapPropertyDescriptor*/, valueForExistingProperty/*:**/)/*:void*/ {
    this.getParentStruct().set(propertyDescriptor.name, valueForExistingProperty);
    this.updateChildrenNow();
  }/*

  // create a Struct property, using a new unique name:
  internal*/ function addProperty(descriptorTemplate/*:CapPropertyDescriptor*/,
                                referencePropertyName/*:String = null*/,
                                value/*:* = undefined*/)/*:StructTreeNode*/ {if(arguments.length<=1)referencePropertyName=null;
    var rawStruct/*:Object*/ = {};
    rawStruct[com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY] = [descriptorTemplate];
    rawStruct[descriptorTemplate.name] = value;
    return this.addAllProperties(rawStruct, referencePropertyName);
  }/*

  internal*/ function addAllProperties(rawStruct/*:**/, referencePropertyName/*:String*/)/*:StructTreeNode*/ {
    var struct/*:Struct*/ = this.getValueAsStruct();
    var properties/*:Object*/ = struct.toObject();

    // Remember the original array of properties while the new properties have not been added.
    var propertyNames/*:Array*/ = struct.getType().getPropertyNames().concat();

    // Add all descriptors to the end of the struct.
    var descriptorsToAdd/*:Array*/ = rawStruct[com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY];
    var namesAdded/*:Array*/ = [];
    for (var j/*:int*/ = 0; j < descriptorsToAdd.length; j++) {
      var descriptorTemplate/*:CapPropertyDescriptor*/ = descriptorsToAdd[j];
      // Determine the name prefix for the property to insert, potentially stripping a trailing duplicate counter.
      var propertyNamePrefix/*:String*/ = descriptorTemplate.name;
      var match/*:Array*/ = propertyNamePrefix.match(/^(.+) \(\d+\)$/);
      if (match) {
        propertyNamePrefix = match[1];
      }
      // Find an unused property name, potentially adding a duplicate counter.
      var propertyName/*:String*/ = propertyNamePrefix;
      for (var index/*:int*/ = 1; properties[propertyName] !== undefined; ++index) {
        propertyName = propertyNamePrefix + " (" + index + ")";
      }
      // Mark the name used.
      var value/*:**/ = rawStruct[descriptorTemplate.name];
      properties[propertyName] = value;
      namesAdded.push(propertyName);
      // Add the value.
      // While this introduces quadratic complexity, the remaining constant factor
      // at this point is small and a linear time algorithm would require changes
      // down to the UAPI.
      var descriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.withName(descriptorTemplate, propertyName);
      AS3.cast(com.coremedia.cap.common.impl.StructTypeImpl,struct.getType()).addProperty(descriptor, value);
    }

    // Rearrange the properties, inserting the new properties after the reference property.
    var referenceNodeIndex/*:int*/ = propertyNames.indexOf(referencePropertyName) + 1;
    var newPropertyNames/*:Array*/ = propertyNames.slice(0, referenceNodeIndex)
            .concat(namesAdded)
            .concat(propertyNames.slice(referenceNodeIndex));
    struct.getType().rearrangeProperties(newPropertyNames);

    // Synchronize the tree with the backing bean.
    this.updateChildrenNow();
    return AS3.cast(StructTreeNode,this.getChildAt(referenceNodeIndex + namesAdded.length - 1));
  }/*

  internal*/ function moveUpProperty()/*:void*/ {
    var structType/*:StructType*/ = this.getParentStruct().getType();
    var propertyNames/*:Array*/ = structType.getPropertyNames();
    var property/*:String*/ = this.getPropertyName();
    var index/*:int*/ = propertyNames.indexOf(property);
    propertyNames.splice(index, 1);
    propertyNames.splice(index - 1, 0, property);
    structType.rearrangeProperties(propertyNames);

    AS3.cast(StructTreeNode,this.parentNode).updateChildrenNow();
  }/*
  
  internal*/ function addAt(index/*:int*/, initialValue/*:**/)/*:StructTreeNode*/ {
    var struct/*:Struct*/ = this.getParentStruct();
    var property/*:String*/ = this.getPropertyName();
    struct.addAt(property, index, initialValue);
    // immediately create a StructTreeNode for the new last item:
    this.appendChild(this.createListItemNodeConfig$ZxAR(this.getPropertyDescriptor(), (AS3.as(struct.get(property),  Array)).length - 1));
    var changedNode/*:StructTreeNode*/ = this.childNodes[index];
    changedNode.set("value", initialValue);
    return  changedNode;
  }/*

  internal*/ function removeListItem()/*:void*/ {
    this.getCellEditingPlugin$ZxAR().cancelEdit();

    var parentNode/*:StructTreeNode*/ = this.getParentStructTreeNode();
    var struct/*:Struct*/ = parentNode.getParentStruct();
    var property/*:String*/ = parentNode.getPropertyName();
    struct.removeAt(property, this.getListItemIndex());

    parentNode.updateChildrenNow();
  }/*

  internal*/ function moveUpListItem()/*:void*/ {
    var index/*:int*/ = this.getListItemIndex();
    var parentStructNode/*:StructTreeNode*/ = this.getParentStructTreeNode();
    var struct/*:Struct*/ = parentStructNode.getParentStruct();
    var property/*:String*/ = parentStructNode.getPropertyName();
    var value/*:**/ = struct.removeAt(property, index);
    struct.addAt(property, index - 1, value);
  }/*

  public*/ function allowDropLinks(contents/*:Array*/)/*:Boolean*/ {
    // Only drop on link properties.
    var propertyDescriptor/*:CapPropertyDescriptor*/ = this.getPropertyDescriptor();
    if (!propertyDescriptor) {
      return false;
    }
    if (propertyDescriptor.type !== com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
      return false;
    }
    if (propertyDescriptor.atomic && this.isPropertyNode() && contents.length !== 1) {
      return false;
    }

    // If possible, also check for the correct content type.
    var linkType/*:CapType*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(propertyDescriptor);
    return !(linkType && com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(AS3.cast(com.coremedia.cap.content.ContentType,linkType), contents));
  }/*

  public*/ function dropLinks(contents/*:Array*/)/*:void*/ {
    if (contents.length === 0) {
      return;
    }

    if (this.isPropertyNode()) {
      if (this.isCollection()) {
        this.prependLinksToParentList$ZxAR(contents);
      } else {
        this.replaceLink$ZxAR(contents[0]);
      }
    } else if (this.isListItemNode()) {
      this.insertLinksIntoParentList$ZxAR(contents);
    }
  }/*

  private*/ function prependLinksToParentList(contents/*:Array*/)/*:void*/ {
    var propertyName/*:String*/ = this.getPropertyName();
    var struct/*:Struct*/ = this.getParentStruct();
    var oldValue/*:Array*/ = struct.get(propertyName);
    struct.set(propertyName, contents.concat(oldValue));

    this.updateChildrenNow();
    var nodeToFocus/*:StructTreeNode*/ = AS3.cast(StructTreeNode,this.getChildAt(contents.length - 1));
    nodeToFocus.refocus(1);
  }/*

  private*/ function replaceLink(content/*:Content*/)/*:void*/ {
    this.getParentStruct().set(this.getPropertyName(), content);

    this.refocus(1);
  }/*

  private*/ function insertLinksIntoParentList(contents/*:Array*/)/*:void*/ {
      var listItemIndex/*:int*/ = this.getListItemIndex();
      var parentNode/*:StructTreeNode*/ = this.getParentStructTreeNode();
    var struct/*:Struct*/ = parentNode.getParentStruct();
      var property/*:String*/ = parentNode.getPropertyName();
    var oldLinks/*:Array*/ =AS3.as( struct.get(property),  Array);
    if (oldLinks) {
      var newLinks/*:Array*/ = oldLinks.slice(0, listItemIndex).concat(contents, oldLinks.slice(listItemIndex));
      struct.set(property, newLinks);

      parentNode.updateChildrenNow();
      var nodeToFocus/*:StructTreeNode*/ = AS3.cast(StructTreeNode,parentNode.getChildAt(listItemIndex));
      nodeToFocus.refocus(1);
    }
  }/*

  public*/ function renameProperty()/*:void*/ {
    var newPropertyName/*:String*/ = String(this.get("text"));
    var struct/*:Struct*/ = this.getParentStruct();
    if (struct) {
      var oldPropertyName/*:String*/ = this.getPropertyName();
      // Old and new property name may be equal if a rename operation failed.
      // In that case, the code at the end of this method restores the original
      // name, which causes another update event and another invocation of this
      // method.
      if (oldPropertyName !== newPropertyName) {
      var structType/*:StructType*/ = struct.getType();
        var parentNode/*:StructTreeNode*/ = this.getParentStructTreeNode();
      if (AS3.cast(com.coremedia.cap.common.impl.StructTypeImpl,structType).renameProperty(oldPropertyName, newPropertyName)) {
          // The rename is complete. This node is about to disappear.
          // We'd better cancel the edit or Ext may try to access
          // a non-existing node.
          this.getCellEditingPlugin$ZxAR().cancelEdit();

          parentNode.updateChildrenNow();
          var nodeIndex/*:int*/ = structType.getPropertyNames().indexOf(newPropertyName);
          if (nodeIndex !== -1) {
            var renamedNode/*:StructTreeNode*/ = AS3.cast(StructTreeNode,parentNode.getChildAt(nodeIndex));
            renamedNode.select(false);
            renamedNode.refocusEventually(0);
      }
        } else {
      // could not rename; simply switch back to old value:
          this.set("text", oldPropertyName);
        }
      }
    }
  }/*

  internal*/ function replaceLinkType()/*:void*/ {var this$=this;
    var newLinkTypeName/*:String*/ = String(this.get("linkType"));
    var structType/*:StructType*/ = this.getParentStruct().getType();
    var oldPropertyDescriptor/*:CapPropertyDescriptor*/ = this.getPropertyDescriptor();
    var oldPropertyName/*:String*/ = oldPropertyDescriptor.name;
    var oldValue/*:**/ = this.getParentStruct().get(oldPropertyName);
    var propertyNames/*:Array*/ = structType.getPropertyNames();
    structType.removeProperty(oldPropertyName);
    var rawDescriptor/*:Object*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.toObject(oldPropertyDescriptor);
    var newLinkType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(newLinkTypeName);
    rawDescriptor.linkType = newLinkType;
    this.set("propertyDescriptor", com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create(rawDescriptor));
    this.set("linkType", newLinkTypeName);

    var newContentValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:**/ {
      if (oldValue === null) {
        return null;
      }

      if (oldPropertyDescriptor.atomic) {
        var contentType/*:ContentType*/ = AS3.cast(com.coremedia.cap.content.Content,oldValue).getType();
        if (contentType === undefined) {
          return undefined;
        }
        if (contentType.isSubtypeOf(newLinkType)) {
          return oldValue;
        }
        return null;
      } else {
        var contents/*:Array*/ =AS3.as( oldValue,  Array);
        var newContents/*:Array*/ = [];
        var returnUndefined/*:Boolean*/ = false;
        for (var i/*:int*/ = 0; i < contents.length; i++) {
          var content/*:Content*/ =AS3.as( contents[i],  com.coremedia.cap.content.Content);
          var type2/*:ContentType*/ = AS3.cast(com.coremedia.cap.content.Content,content).getType();
          if (type2 === undefined) {
            returnUndefined = true;
          }
          if (type2.isSubtypeOf(newLinkType)) {
            newContents.push(content);
          }
        }
        return returnUndefined ? undefined : newContents;
      }
    });

    newContentValueExpression.loadValue(function(value/*:**/)/*:void*/ {
      AS3.cast(com.coremedia.cap.common.impl.StructTypeImpl,structType).addProperty(this$.getPropertyDescriptor(), value);
      structType.rearrangeProperties(propertyNames);
      this$.refocus(2);
    });
  }/*

  internal*/ function select(scrollIntoView/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)scrollIntoView=true;
    var ownerTree/*:TreePanel*/ = this.getOwnerTree();
    if (ownerTree) {
      ownerTree.getSelectionModel().select(this);
      if (scrollIntoView) {
        ownerTree.ensureVisible(this);
      }
    }
  }/*

  internal*/ function refocusEventually(col/*:Number*/)/*:void*/ {
    // It is not sufficient to specify a delay for the focusCell call,
    // because that delayed call might be canceled when the editor is
    // closed.
    com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"refocus"), col);
  }/*

  internal*/ function refocus(col/*:Number*/)/*:void*/ {
    this.select();

    var ownerTree/*:TreePanel*/ = this.getOwnerTree();
    var view/*:TableView*/ = ownerTree.getView();
    var context/*:CellContext*/ = new Ext.grid.CellContext(view);
    context.setPosition(this, col);
    view.focusCell(context);
  }/*

  public*/ function removeListeners()/*:void*/ {
    this.nodeValueExpression$ZxAR.removeChangeListener(AS3.bind(this,"valueChanged$ZxAR"));
    this.renderDataExpression$ZxAR.removeChangeListener(AS3.bind(this,"renderDataChanged$ZxAR"));
    this.childrenValueExpression$ZxAR && this.childrenValueExpression$ZxAR.removeChangeListener(AS3.bind(this,"childrenChanged$ZxAR"));
  }/*

  /**
   * Create a new root node. By loading its children, the root node will
   * eventually populate the entire tree store.
   *
   * @param structValueExpression value expression providing the struct to be displayed in the tree
   * @param structTreeStore the tree store
   * @return a new root node
   * /
  public static*/ function makeStructTreeRootNode$static(structValueExpression/*:ValueExpression*/, structTreeStore/*:StructTreeStore*/)/*:StructTreeNode*/ {
    return new StructTreeNode({
      structTreeStore: structTreeStore,
      id: com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreePathUtil.ROOT_ID,
      text: "...",
      leaf: false,
      root: true,
      propertyDescriptor: com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create({
        'type': com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT
      }),
      expanded: true,
      structValueExpression: structValueExpression,
      cls: "struct-list-root-node"
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.TreeModel",
      structTreeStore$ZxAR: null,
      structValueExpression$ZxAR: null,
      nodeValueExpression$ZxAR: null,
      renderDataExpression$ZxAR: null,
      childrenValueExpression$ZxAR: null,
      propertyPath$ZxAR: null,
      propertyOrIndex$ZxAR: undefined,
      constructor: StructTreeNode$,
      super$ZxAR: function() {
        Ext.data.TreeModel.prototype.constructor.apply(this, arguments);
      },
      isLoaded: isLoaded,
      set: set,
      getParentStructTreeNode: getParentStructTreeNode,
      getPropertyName: getPropertyName,
      getListItemIndex: getListItemIndex,
      isPropertyNode: isPropertyNode,
      isListItemNode: isListItemNode,
      isStructNode: isStructNode,
      isRootNode: isRootNode,
      valueChanged$ZxAR: valueChanged,
      renderDataChanged$ZxAR: renderDataChanged,
      updateChildrenNow: updateChildrenNow,
      childrenChanged$ZxAR: childrenChanged,
      isCollection: isCollection,
      getPropertyType: getPropertyType,
      computeChildren$ZxAR: computeChildren,
      computeCollectionChildren$ZxAR: computeCollectionChildren,
      createListItemNodeConfig$ZxAR: createListItemNodeConfig,
      getPropertyDescriptor: getPropertyDescriptor,
      getParentStruct: getParentStruct,
      computeStructChildren$ZxAR: computeStructChildren,
      propertyDescriptor2nodeAttributes: propertyDescriptor2nodeAttributes,
      extendedPropertyPath: extendedPropertyPath,
      updateChildren$ZxAR: updateChildren,
      indexNodes$ZxAR: indexNodes,
      getValue: getValue,
      getValueAsStruct: getValueAsStruct,
      normalizeValue$ZxAR: normalizeValue,
      normalizeDatePropertyValue$ZxAR: normalizeDatePropertyValue,
      isInSync: isInSync,
      startEditing: startEditing,
      getCellEditingPlugin$ZxAR: getCellEditingPlugin,
      valueEdited: valueEdited,
      clearProperty: clearProperty,
      removeProperty: removeProperty,
      replaceValue: replaceValue,
      addProperty: addProperty,
      addAllProperties: addAllProperties,
      moveUpProperty: moveUpProperty,
      addAt: addAt,
      removeListItem: removeListItem,
      moveUpListItem: moveUpListItem,
      allowDropLinks: allowDropLinks,
      dropLinks: dropLinks,
      prependLinksToParentList$ZxAR: prependLinksToParentList,
      replaceLink$ZxAR: replaceLink,
      insertLinksIntoParentList$ZxAR: insertLinksIntoParentList,
      renameProperty: renameProperty,
      replaceLinkType: replaceLinkType,
      select: select,
      refocusEventually: refocusEventually,
      refocus: refocus,
      removeListeners: removeListeners,
      statics: {makeStructTreeRootNode: makeStructTreeRootNode$static},
      requires: [
        "AS3.Error",
        "AS3.int_",
        "Ext.String",
        "Ext.data.TreeModel",
        "Ext.grid.CellContext",
        "Ext.grid.plugin.CellEditing",
        "com.coremedia.cap.common.CapPropertyDescriptor",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.common.impl.StructTypeImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreePathUtil",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil"
      ]
    };
});
