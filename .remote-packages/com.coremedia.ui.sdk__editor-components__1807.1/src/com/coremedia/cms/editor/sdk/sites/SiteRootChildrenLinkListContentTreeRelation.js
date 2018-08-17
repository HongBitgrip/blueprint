Ext.define("com.coremedia.cms.editor.sdk.sites.SiteRootChildrenLinkListContentTreeRelation", function(SiteRootChildrenLinkListContentTreeRelation) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation;
import com.coremedia.cms.editor.sdk.editorContext;

/**
 * Base class for the link-list-based tree relation whose root is the Site's root document.
 * @see SitesService#getSiteRootDocument()
 * /
public class SiteRootChildrenLinkListContentTreeRelation extends ChildrenLinkListContentTreeRelation {

  public*/ function SiteRootChildrenLinkListContentTreeRelation$(contentTypeName/*:String*/,
                                                              childrenLinkListPropertyName/*:String*/) {
    this.super$3O_t(contentTypeName, childrenLinkListPropertyName);
  }/*

  /**
   * Implementation based on <code>super.isRoot()</code>
   * /
  override public*/ function isRoot(node/*:Object*/)/*:Boolean*/ {
    var isRoot/*:Boolean*/ = com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation.prototype.isRoot.call(this,node);
    switch (isRoot) {
      case undefined: return undefined;
      case false: return false;
    }
    var content/*:Content*/ =AS3.as( node,  com.coremedia.cap.content.Content);
    if (!content) {
      return false;
    }
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var siteRootDocument/*:Content*/ = sitesService.getSiteRootDocument(sitesService.getSiteIdFor(content));
    return siteRootDocument === undefined
            ? undefined
            : content === siteRootDocument;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation",
      constructor: SiteRootChildrenLinkListContentTreeRelation$,
      super$3O_t: function() {
        com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation.prototype.constructor.apply(this, arguments);
      },
      isRoot: isRoot,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
