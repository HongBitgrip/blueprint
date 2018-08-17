Ext.define("com.coremedia.elastic.social.studio.model.ReviewPropertyNames", function(ReviewPropertyNames) {/*package com.coremedia.elastic.social.studio.model {

public class ReviewPropertyNames extends CommentPropertyNames {
  public static const TITLE:String = "title";
  public static const RATING:String = "rating";
}*/function ReviewPropertyNames$() {this.super$uIzG();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
      super$uIzG: function() {
        com.coremedia.elastic.social.studio.model.CommentPropertyNames.prototype.constructor.apply(this, arguments);
      },
      constructor: ReviewPropertyNames$,
      statics: {
        TITLE: "title",
        RATING: "rating"
      },
      requires: ["com.coremedia.elastic.social.studio.model.CommentPropertyNames"]
    };
});
