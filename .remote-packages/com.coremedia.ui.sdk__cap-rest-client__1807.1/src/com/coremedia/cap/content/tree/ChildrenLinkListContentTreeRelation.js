Ext.define("com.coremedia.cap.content.tree.ChildrenLinkListContentTreeRelation", function(ChildrenLinkListContentTreeRelation) {/*package com.coremedia.cap.content.tree {
import com.coremedia.ui.data.AbstractTreeRelation;

/**
 * A tree relation based on Content of a certain type that has a link-list property of a given name.
 * The children are retrieved through that link-list property.
 * The parent is determined as the first referrer through that link-list.
 * A Content is said to be a root node if there is no such parent.
 * /
public class ChildrenLinkListContentTreeRelation extends AbstractTreeRelation {
  private var contentTypeName:String;
  private var childrenLinkListPropertyName:String;

  public*/ function ChildrenLinkListContentTreeRelation$(contentTypeName/*:String*/,
                                                      childrenLinkListPropertyName/*:String*/) {this.super$Hyqp();
    this.contentTypeName$Hyqp = contentTypeName;
    this.childrenLinkListPropertyName$Hyqp = childrenLinkListPropertyName;
  }/*

  override public*/ function getChildrenOf(node/*:Object*/)/*:Array*/ {
    return node.get(this.childrenLinkListPropertyName$Hyqp);
  }/*

  override public*/ function getParentUnchecked(node/*:Object*/)/*:Object*/ {
    var referrers/*:Array*/ = node.getReferrersWithNamedDescriptor(this.contentTypeName$Hyqp, this.childrenLinkListPropertyName$Hyqp);
    return referrers === undefined
            ? undefined
            : referrers.length === 0 
            ? null 
            : referrers[0];
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.AbstractTreeRelation",
      contentTypeName$Hyqp: null,
      childrenLinkListPropertyName$Hyqp: null,
      constructor: ChildrenLinkListContentTreeRelation$,
      super$Hyqp: function() {
        com.coremedia.ui.data.AbstractTreeRelation.prototype.constructor.apply(this, arguments);
      },
      getChildrenOf: getChildrenOf,
      getParentUnchecked: getParentUnchecked,
      requires: ["com.coremedia.ui.data.AbstractTreeRelation"]
    };
});
