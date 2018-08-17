Ext.define("com.coremedia.cms.editor.sdk.util.StructLinkListWrapper", function(StructLinkListWrapper) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class StructLinkListWrapper extends LinkListWrapperBase implements IAnnotatedLinkListProvider {

  [Bindable]
  public var bindTo:ValueExpression;

  [Bindable]
  public var propertyName:String;

  [Bindable]
  public var structListPropertyName:String;

  [Bindable]
  public var beanPropertyName:String;

  [Bindable]
  public var maxCardinality:int;

  [Bindable]
  public var readOnlyVE:ValueExpression;

  private var linksVE:ValueExpression;
  private var structPropertyVE:ValueExpression;
  private var structListVE:ValueExpression;
  private var structListAsStringVE:ValueExpression;

  public*/ function StructLinkListWrapper$(config/*:StructLinkListWrapper = null*/) {if(arguments.length<=0)config=null;
    this.super$WMSK(config);
    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(this,"propertyName" , AS3.getBindable(config,"propertyName"));
    AS3.setBindable(this,"structListPropertyName" , AS3.getBindable(config,"structListPropertyName"));
    AS3.setBindable(this,"beanPropertyName" , AS3.getBindable(config,"beanPropertyName"));
    AS3.setBindable(this,"maxCardinality" , AS3.getBindable(config,"maxCardinality") || 0);
    AS3.setBindable(this,"readOnlyVE" , AS3.getBindable(config,"readOnlyVE"));

    this.getStructPropertyVE$WMSK();
    this.structListVEChanged$WMSK();
    this.getAnnotatedLinksAsStringVE().addChangeListener(AS3.bind(this,"structListVEChanged$WMSK"));
  }/*

  override public*/ function getVE()/*:ValueExpression*/ {
    if (!this.linksVE$WMSK) {
      this.linksVE$WMSK = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.linksVE$WMSK;
  }/*

  override public*/ function getTotalCapacity()/*:int*/ {
    return AS3.getBindable(this,"maxCardinality") > 0 ? AS3.getBindable(this,"maxCardinality") : AS3.int_.MAX_VALUE;
  }/*

  override public*/ function getFreeCapacity()/*:int*/ {
    return this.getTotalCapacity() - (this.getLinks() ? this.getLinks().length : 0);
  }/*

  override public*/ function acceptsLinks(links/*:Array*/)/*:Boolean*/ {
    return !(!links || !(AS3.is(links,  Array)));
  }/*

  protected*/ function acceptsLinksToAdd(links/*:Array*/)/*:Boolean*/ {
    return this.acceptsLinks(links);
  }/*

  override public*/ function getLinks()/*:Array*/ {
    var rawValue/*:**/ = this.getVE().getValue();
    if (rawValue === undefined) {
      return undefined;
    }
    return AS3.as( rawValue,  Array) || [];
  }/*

  override public*/ function setLinks(links/*:Array*/)/*:void*/ {var this$=this;
    links =AS3.as( links,  Array) || [];

    if (!this.acceptsLinks(links)) {
      return;
    }

    var newAnnotatedLinkEntries/*:Array*/ = [];
    links.forEach(function (link/*:Bean*/)/*:void*/ {

      var newAnnotatedLinkEntry/*:Object*/ = {};
      newAnnotatedLinkEntry[AS3.getBindable(this$,"beanPropertyName")] = link;

      newAnnotatedLinkEntries.push(newAnnotatedLinkEntry);
    });

    this.writeAnnotatedLinksToStruct$WMSK(newAnnotatedLinkEntries);
  }/*

  override public*/ function addLinksAtIndex(links/*:Array*/, index/*:int*/)/*:void*/ {var this$=this;
    links =AS3.as( links,  Array) || [];
    //noinspection JSMismatchedCollectionQueryUpdate
    var currentLinks/*:Array*/ = this.getLinks() || [];

    if (index < 0
            || index > currentLinks.length
            || !this.acceptsLinksToAdd(links)) {
      return;
    }

    var struct/*:Struct*/ = this.getStruct$WMSK();

    // initialize struct list property
    this.getStructList$WMSK(struct);

    links.forEach(function (link/*:Object*/)/*:void*/ {
      var newStruct/*:Object*/ = {};
      newStruct[AS3.getBindable(this$,"beanPropertyName")] = link;
      struct.addAt(AS3.getBindable(this$,"structListPropertyName"), index, newStruct);
      index++;
    });
  }/*

  override public*/ function removeLinksAtIndexes(indexes/*:Array*/)/*:void*/ {var this$=this;
    indexes =AS3.as( indexes,  Array) || [];

    var struct/*:Struct*/ = this.getStruct$WMSK();

    indexes.sort().reverse();
    indexes.forEach(function (index/*:int*/)/*:void*/ {
      struct.removeAt(AS3.getBindable(this$,"structListPropertyName"), index);
    });
  }/*

  override public*/ function isReadOnly()/*:Boolean*/ {
    return AS3.getBindable(this,"readOnlyVE") && AS3.getBindable(this,"readOnlyVE").getValue() ? AS3.getBindable(this,"readOnlyVE").getValue() : false;
  }/*

  private*/ function structListVEChanged()/*:void*/ {
    this.getVE().setValue(this.structToBeanArrayTransformer$WMSK(this.getAnnotatedLinkListVE().getValue()));
  }/*

  override public*/ function moveLinks(fromIndexToIndexMap/*:Object*/)/*:void*/ {
    var toIndexFromIndexMap/*:Object*/ = this.getCompleteToFromMap(fromIndexToIndexMap);
    if (!toIndexFromIndexMap) {
      return;
    }

    var struct/*:Struct*/ = this.getStruct$WMSK();

    var currentAnnotatedLinks/*:Array*/ = this.getStructList$WMSK(struct);
    //noinspection JSMismatchedCollectionQueryUpdate
    var newAnnotatedLinks/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < currentAnnotatedLinks.length; i++) {
      var linkStruct/*:Struct*/ = currentAnnotatedLinks[toIndexFromIndexMap[i]];
      newAnnotatedLinks.push(linkStruct.toObject());
    }

    this.writeAnnotatedLinksToStruct$WMSK(newAnnotatedLinks);
  }/*

  private*/ function writeAnnotatedLinksToStruct(annotatedLinks/*:Array*/)/*:void*/ {var this$=this;
    var struct/*:Struct*/ = this.getStruct$WMSK();
    //noinspection JSMismatchedCollectionQueryUpdate
    var currentAnnotatedLinks/*:Array*/ = this.getStructList$WMSK(struct);

    // clear all entries,to avoid that the struct reference is removed
    for (var i/*:int*/ = currentAnnotatedLinks.length - 1; i >= 0; i--) {
      struct.removeAt(AS3.getBindable(this,"structListPropertyName"), i);
    }

    i = 0;
    annotatedLinks.forEach(function (newStruct/*:Struct*/)/*:void*/ {
      struct.addAt(AS3.getBindable(this$,"structListPropertyName"), i, newStruct);
      i++;
    });
  }/*

  private*/ function getStruct()/*:Struct*/ {
    var struct/*:Struct*/ = this.getStructPropertyVE$WMSK().getValue();
    if (!struct) {
      this.getStructPropertyVE$WMSK().setValue({});
      struct = this.getStructPropertyVE$WMSK().getValue();
      if (!struct) {
        throw new AS3.Error("Could not initialize struct");
      }
    }
    return struct;
  }/*

  private*/ function getStructList(struct/*:Struct*/)/*:Array*/ {
    var structList/*:Array*/ = struct.get(AS3.getBindable(this,"structListPropertyName"));

    if (!structList) {
      this.initializeStructListProperty$WMSK(struct);
    }
    return structList;
  }/*

  private*/ function initializeStructListProperty(struct/*:Struct*/)/*:void*/ {
    var structType/*:StructType*/ = struct.getType();
    if (!structType.getDescriptor(AS3.getBindable(this,"structListPropertyName"))) {
      structType.addStructListProperty(AS3.getBindable(this,"structListPropertyName"));
    }
  }/*

  private*/ function getStructPropertyVE()/*:ValueExpression*/ {
    if (!this.structPropertyVE$WMSK) {
      this.structPropertyVE$WMSK = AS3.getBindable(this,"bindTo").extendBy("properties").extendBy(AS3.getBindable(this,"propertyName"));
    }
    return this.structPropertyVE$WMSK;
  }/*

  public*/ function getAnnotatedLinkListVE()/*:ValueExpression*/ {
    if (!this.structListVE$WMSK) {
      this.structListVE$WMSK = this.getStructPropertyVE$WMSK().extendBy(AS3.getBindable(this,"structListPropertyName"));
    }
    return this.structListVE$WMSK;
  }/*

  /**
   * Returns a ValueExpression that keeps a String representation
   * of the annotated link list. This is just a convenient way to
   * allow the ValueExpression to detect any changes in the link list.
   *
   * @return a ValueExpression that keeps a String representation
   * of the annotated link list.
   * /
  public*/ function getAnnotatedLinksAsStringVE()/*:ValueExpression*/ {var this$=this;
    if (!this.structListAsStringVE$WMSK) {
      this.structListAsStringVE$WMSK = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var structList/*:Array*/ = this$.getStructPropertyVE$WMSK().extendBy(AS3.getBindable(this$,"structListPropertyName")).getValue();
        if (!structList) {
          return undefined;
        }

        var listAsString/*:String*/ = "";

        structList.forEach(function (listEntry/*:Struct*/)/*:String*/ {
          listAsString = listAsString + listEntry.toJson();
        });

        return listAsString;
      });
    }
    return this.structListAsStringVE$WMSK;
  }/*

  private*/ function structToBeanArrayTransformer(structList/*:Array*/)/*:Array*/ {var this$=this;
    return structList ? structList.map(function (struct/*:Struct*/)/*:Bean*/ {
      return struct.get(AS3.getBindable(this$,"beanPropertyName"));
    }) : [];
  }/*

  override public*/ function destroy()/*:void*/ {
    this.getAnnotatedLinksAsStringVE().removeChangeListener(AS3.bind(this,"structListVEChanged$WMSK"));
  }/*

  public*/ function getPrimaryPropertyName()/*:String*/ {
    return AS3.getBindable(this,"beanPropertyName");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase",
      mixins: ["com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider"],
      linksVE$WMSK: null,
      structPropertyVE$WMSK: null,
      structListVE$WMSK: null,
      structListAsStringVE$WMSK: null,
      constructor: StructLinkListWrapper$,
      super$WMSK: function() {
        com.coremedia.cms.editor.sdk.util.LinkListWrapperBase.prototype.constructor.apply(this, arguments);
      },
      getVE: getVE,
      getTotalCapacity: getTotalCapacity,
      getFreeCapacity: getFreeCapacity,
      acceptsLinks: acceptsLinks,
      acceptsLinksToAdd: acceptsLinksToAdd,
      getLinks: getLinks,
      setLinks: setLinks,
      addLinksAtIndex: addLinksAtIndex,
      removeLinksAtIndexes: removeLinksAtIndexes,
      isReadOnly: isReadOnly,
      structListVEChanged$WMSK: structListVEChanged,
      moveLinks: moveLinks,
      writeAnnotatedLinksToStruct$WMSK: writeAnnotatedLinksToStruct,
      getStruct$WMSK: getStruct,
      getStructList$WMSK: getStructList,
      initializeStructListProperty$WMSK: initializeStructListProperty,
      getStructPropertyVE$WMSK: getStructPropertyVE,
      getAnnotatedLinkListVE: getAnnotatedLinkListVE,
      getAnnotatedLinksAsStringVE: getAnnotatedLinksAsStringVE,
      structToBeanArrayTransformer$WMSK: structToBeanArrayTransformer,
      destroy: destroy,
      getPrimaryPropertyName: getPrimaryPropertyName,
      config: {
        bindTo: null,
        propertyName: null,
        structListPropertyName: null,
        beanPropertyName: null,
        maxCardinality: 0,
        readOnlyVE: null
      },
      requires: [
        "AS3.Error",
        "AS3.int_",
        "com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider",
        "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
