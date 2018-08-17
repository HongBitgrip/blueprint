Ext.define("com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper", function(MemoryLinkListWrapper) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.ui.data.ValueExpression;

public class MemoryLinkListWrapper extends LinkListWrapperBase {

  [Bindable]
  public var linksVE:ValueExpression;

  [Bindable]
  public var linkTypeName:String;

  [Bindable]
  public var maxCardinality:int;

  public*/ function MemoryLinkListWrapper$(config/*:MemoryLinkListWrapper = null*/) {if(arguments.length<=0)config=null;
    this.super$VZXe(config);
    AS3.setBindable(this,"linksVE" , AS3.getBindable(config,"linksVE"));
    AS3.setBindable(this,"linkTypeName" , AS3.getBindable(config,"linkTypeName") || com.coremedia.cap.content.ContentTypeNames.DOCUMENT);
    AS3.setBindable(this,"maxCardinality" , AS3.getBindable(config,"maxCardinality") || 0);
  }/*

  override public*/ function getVE()/*:ValueExpression*/ {
    return AS3.getBindable(this,"linksVE");
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
    return this.acceptsContents$VZXe(contents, false);
  }/*

  private*/ function acceptsContents(contents/*:Array*/, throwError/*:Boolean*/)/*:Boolean*/ {
    if (!contents) {
      return false;
    }
    var enoughCapacity/*:Boolean*/ = this.getTotalCapacity() >= contents.length;
    var failedContent/*:Content*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(this.getContentType(), contents, throwError);
    return enoughCapacity && failedContent === null;
  }/*

  override public*/ function getLinks()/*:Array*/ {
    var rawValue/*:**/ = this.getVE().getValue();
    if (rawValue === undefined) {
      return undefined;
    }
    return AS3.as( rawValue,  Array) || [];
  }/*

  override public*/ function setLinks(links/*:Array*/)/*:void*/ {
    if (links) {
      var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
      // if anything has been filtered out, do not accept
      if (links.length === contents.length && this.acceptsContents$VZXe(contents, true)) {
        this.getVE().setValue(contents);
      }
    }
  }/*

  override public*/ function addLinksAtIndex(links/*:Array*/, index/*:int*/)/*:void*/ {
    links =AS3.as( links,  Array) || [];
    var currentLinks/*:Array*/ = this.getLinks() || [];

    if (index < 0 || index > currentLinks.length) {
      return;
    }

    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
    // if anything has been filtered out, do not accept
    if (links.length === contents.length && this.acceptsContents$VZXe(contents, true)) {
      var newLinks/*:Array*/ = currentLinks.concat([]);

      // insert contents into newLinks at position index
      newLinks.splice.apply(newLinks, [index, 0].concat(contents));
      this.getVE().setValue(newLinks);
    }
  }/*

  override public*/ function getTotalCapacity()/*:int*/ {
    return AS3.getBindable(this,"maxCardinality") > 0 ? AS3.getBindable(this,"maxCardinality") : AS3.int_.MAX_VALUE;
  }/*

  override public*/ function getFreeCapacity()/*:int*/ {
    return this.getTotalCapacity() - (this.getLinks() ? this.getLinks().length : 0);
  }/*

  override public*/ function isReadOnly()/*:Boolean*/ {
    return false;
  }/*

  public*/ function getContentType()/*:ContentType*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(AS3.getBindable(this,"linkTypeName"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase",
      constructor: MemoryLinkListWrapper$,
      super$VZXe: function() {
        com.coremedia.cms.editor.sdk.util.LinkListWrapperBase.prototype.constructor.apply(this, arguments);
      },
      getVE: getVE,
      acceptsLinks: acceptsLinks,
      acceptsContents$VZXe: acceptsContents,
      getLinks: getLinks,
      setLinks: setLinks,
      addLinksAtIndex: addLinksAtIndex,
      getTotalCapacity: getTotalCapacity,
      getFreeCapacity: getFreeCapacity,
      isReadOnly: isReadOnly,
      getContentType: getContentType,
      config: {
        linksVE: null,
        linkTypeName: null,
        maxCardinality: 0
      },
      requires: [
        "AS3.int_",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.util.LinkListWrapperBase"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.LinkListUtil"]
    };
});
