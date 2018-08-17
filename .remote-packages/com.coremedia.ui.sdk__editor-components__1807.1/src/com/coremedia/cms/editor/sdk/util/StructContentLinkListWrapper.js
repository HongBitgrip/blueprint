Ext.define("com.coremedia.cms.editor.sdk.util.StructContentLinkListWrapper", function(StructContentLinkListWrapper) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.ContentType;

public class StructContentLinkListWrapper extends StructLinkListWrapper {

  [Bindable]
  public var linkTypeName:String;

  public*/ function StructContentLinkListWrapper$(config/*:StructContentLinkListWrapper = null*/) {if(arguments.length<=0)config=null;
    this.super$uM29(config);

    AS3.setBindable(this,"linkTypeName" , AS3.getBindable(config,"linkTypeName"));
  }/*

  private*/ function getContentType()/*:ContentType*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(AS3.getBindable(this,"linkTypeName"));
  }/*

  override protected*/ function acceptsLinksToAdd(links/*:Array*/)/*:Boolean*/ {
    return this.acceptsLinksInternal(links, true);
  }/*

  override public*/ function acceptsLinks(links/*:Array*/)/*:Boolean*/ {
    return this.acceptsLinksInternal(links, false);
  }/*

  protected*/ function acceptsLinksInternal(links/*:Array*/, throwError/*:Boolean*/)/*:Boolean*/ {
    if (!links) {
      return false;
    }
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(links);
    // if anything has been filtered out, do not accept
    if (links.length !== contents.length) {
      return false;
    }
    return this.acceptsContents$uM29(contents, throwError);
  }/*

  private*/ function acceptsContents(contentsToAdd/*:Array*/, throwError/*:Boolean*/)/*:Boolean*/ {
    if (!contentsToAdd) {
      return false;
    }
    var failedContent/*:Content*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(this.getContentType$uM29(), contentsToAdd, throwError);
    if (failedContent !== null) {
      return false;
    }
    var enoughCapacity/*:Boolean*/ = this.getTotalCapacity() >= contentsToAdd.length;
    return enoughCapacity;
  }/*

  override public*/ function setLinks(links/*:Array*/)/*:void*/ {
    if (this.acceptsLinks(links)) {
      com.coremedia.cms.editor.sdk.util.StructLinkListWrapper.prototype.setLinks.call(this,com.coremedia.cap.content.ContentProxyHelper.getContents(links));
    }
  }/*

  override public*/ function addLinksAtIndex(links/*:Array*/, index/*:int*/)/*:void*/ {
    if (this.acceptsLinksToAdd(links)) {
      com.coremedia.cms.editor.sdk.util.StructLinkListWrapper.prototype.addLinksAtIndex.call(this,com.coremedia.cap.content.ContentProxyHelper.getContents(links), index);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.StructLinkListWrapper",
      constructor: StructContentLinkListWrapper$,
      super$uM29: function() {
        com.coremedia.cms.editor.sdk.util.StructLinkListWrapper.prototype.constructor.apply(this, arguments);
      },
      getContentType$uM29: getContentType,
      acceptsLinksToAdd: acceptsLinksToAdd,
      acceptsLinks: acceptsLinks,
      acceptsLinksInternal: acceptsLinksInternal,
      acceptsContents$uM29: acceptsContents,
      setLinks: setLinks,
      addLinksAtIndex: addLinksAtIndex,
      config: {linkTypeName: null},
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cms.editor.sdk.util.StructLinkListWrapper"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.LinkListUtil"]
    };
});
