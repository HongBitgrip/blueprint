Ext.define("com.coremedia.elastic.social.studio.model.impl.ReviewImpl", function(ReviewImpl) {/*package com.coremedia.elastic.social.studio.model.impl {
import com.coremedia.elastic.social.studio.model.Review;

[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/review/{id:[A-Za-z0-9]+}")]
public class ReviewImpl extends CommentImpl implements Review {

  public*/ function ReviewImpl$(path/*:String*/) {
    this.super$h88x(path);
  }/*

  public*/ function getTitle()/*:String*/ {
    return this.get("title");
  }/*

  public*/ function getRating()/*:int*/ {
    return this.get("rating");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.CommentImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.Review"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/review/{id:[A-Za-z0-9]+}"
        ]
      ]},
      constructor: ReviewImpl$,
      super$h88x: function() {
        com.coremedia.elastic.social.studio.model.impl.CommentImpl.prototype.constructor.apply(this, arguments);
      },
      getTitle: getTitle,
      getRating: getRating,
      requires: [
        "com.coremedia.elastic.social.studio.model.Review",
        "com.coremedia.elastic.social.studio.model.impl.CommentImpl"
      ]
    };
});
