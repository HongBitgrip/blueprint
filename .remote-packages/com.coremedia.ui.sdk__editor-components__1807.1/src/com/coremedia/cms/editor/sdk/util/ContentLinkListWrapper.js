Ext.define("com.coremedia.cms.editor.sdk.util.ContentLinkListWrapper", function(ContentLinkListWrapper) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class ContentLinkListWrapper extends LinkListWrapperBase {

  [Bindable]
  public var bindTo:ValueExpression;

  [Bindable]
  public var propertyName:String;

  [Bindable]
  public var linkTypeName:String;

  [Bindable]
  public var maxCardinality:int;

  [Bindable]
  public var readOnlyVE:ValueExpression;

  private var linksVE:ValueExpression;

  public*/ function ContentLinkListWrapper$(config/*:ContentLinkListWrapper = null*/) {this.super$JelK();if(arguments.length<=0)config=null;
    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(this,"propertyName" , AS3.getBindable(config,"propertyName"));
    AS3.setBindable(this,"linkTypeName" , AS3.getBindable(config,"linkTypeName"));
    AS3.setBindable(this,"maxCardinality" , AS3.getBindable(config,"maxCardinality") || 0);
    AS3.setBindable(this,"readOnlyVE" , AS3.getBindable(config,"readOnlyVE"));
  }/*

  override public*/ function getVE()/*:ValueExpression*/ {
    if (!this.linksVE$JelK) {
      var innerValueExpression/*:ValueExpression*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.createLinkValueExpression(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"), AS3.getBindable(this,"linkTypeName"), this.isAtomic$JelK(), null);
      this.linksVE$JelK = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(innerValueExpression,AS3.bind( this,"atomicTransformer$JelK"),AS3.bind( this,"atomicReverseTransformer$JelK"), []);
    }
    return this.linksVE$JelK;
  }/*

  override public*/ function getTotalCapacity()/*:int*/ {
    return AS3.getBindable(this,"maxCardinality") > 0 ? AS3.getBindable(this,"maxCardinality") : com.coremedia.cms.editor.sdk.util.LinkListUtil.getMaxCardinalityFromDescriptor(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"));
  }/*

  override public*/ function getFreeCapacity()/*:int*/ {
    return com.coremedia.cms.editor.sdk.util.LinkListUtil.getFreeCapacity(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"), AS3.getBindable(this,"maxCardinality"));
  }/*

  public*/ function getContentType()/*:ContentType*/ {
    var targetContentType/*:ContentType*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.getTargetContentType(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"), AS3.getBindable(this,"linkTypeName"));
    if (!targetContentType) {
      var sourceContentTypeName/*:String*/ = AS3.getBindable(this,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.TYPE, com.coremedia.cap.content.ContentPropertyNames.NAME).getValue();
      throw new AS3.Error("Illegal configuration: Content of type '" + sourceContentTypeName + "' does not have a LinkList property '" + AS3.getBindable(this,"propertyName") + "'.");
    }
    return targetContentType;
  }/*

  override public*/ function acceptsLinks(links/*:Array*/)/*:Boolean*/ {
    if (!links) {
      return false;
    }
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
    // if anything has been filtered out, do not accept
    if (links.length !== contents.length) {
      return false;
    }
    return this.acceptsContents$JelK(contents, false);
  }/*

  private*/ function acceptsContents(contents/*:Array*/, throwError/*:Boolean*/)/*:Boolean*/ {
    if (!contents) {
      return false;
    }
    var enoughCapacity/*:Boolean*/ = this.getTotalCapacity() >= contents.length;
    var failedContent/*:Content*/  = com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(this.getContentType(), contents, throwError);
    return enoughCapacity && failedContent === null;
  }/*

  override public*/ function getLinks()/*:Array*/ {
    return this.getVE().getValue();
  }/*

  override public*/ function setLinks(links/*:Array*/)/*:void*/ {
    if (links) {
      var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
      // if anything has been filtered out, do not accept
      // throw error if content to add is invalid
      if (links.length === contents.length && this.acceptsContents$JelK(contents, true)) {
        this.getVE().setValue(contents);
      }
    }
  }/*

  override public*/ function addLinksAtIndex(links/*:Array*/, index/*:int*/)/*:void*/ {
    if (links) {
      var currentLinks/*:Array*/ = this.getLinks() || [];

      if (index < 0 || index > currentLinks.length) {
        return;
      }

      var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
      // if anything has been filtered out, do not accept
      // throw error if content to add is invalid
      if (links.length === contents.length && this.acceptsContents$JelK(contents, true)) {
        var newLinks/*:Array*/ = currentLinks.concat([]);

        // insert contents into newLinks at position index
        newLinks.splice.apply(newLinks, [index, 0].concat(contents));

        this.getVE().setValue(newLinks);
      }
    }
  }/*

  override public*/ function isReadOnly()/*:Boolean*/ {
    return AS3.getBindable(this,"readOnlyVE") ? AS3.getBindable(this,"readOnlyVE").getValue() : false;
  }/*

  private*/ function atomicTransformer(value/*:**/)/*:Array*/ {
    if (value === null) {
      return [];
    }
    if (value === undefined) {
      return undefined;
    }
    return this.isAtomic$JelK() ? [value] : value;
  }/*

  private*/ function atomicReverseTransformer(value/*:Array*/)/*:**/ {
    if (this.isAtomic$JelK()) {
      return value && value.length > 0 ? value[0] : null;
    }
    return value;
  }/*

  private*/ function isAtomic()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.util.LinkListUtil.isAtomic(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"), AS3.getBindable(this,"maxCardinality"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase",
      linksVE$JelK: null,
      constructor: ContentLinkListWrapper$,
      super$JelK: function() {
        com.coremedia.cms.editor.sdk.util.LinkListWrapperBase.prototype.constructor.apply(this, arguments);
      },
      getVE: getVE,
      getTotalCapacity: getTotalCapacity,
      getFreeCapacity: getFreeCapacity,
      getContentType: getContentType,
      acceptsLinks: acceptsLinks,
      acceptsContents$JelK: acceptsContents,
      getLinks: getLinks,
      setLinks: setLinks,
      addLinksAtIndex: addLinksAtIndex,
      isReadOnly: isReadOnly,
      atomicTransformer$JelK: atomicTransformer,
      atomicReverseTransformer$JelK: atomicReverseTransformer,
      isAtomic$JelK: isAtomic,
      config: {
        bindTo: null,
        propertyName: null,
        linkTypeName: null,
        maxCardinality: 0,
        readOnlyVE: null
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.LinkListUtil"]
    };
});
