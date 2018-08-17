Ext.define("com.coremedia.elastic.social.studio.model.impl.ArchiveItemImpl", function(ArchiveItemImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/archive/{type:[A-Za-z0-9-]+}/{id:[A-Za-z0-9-]+}")]
public class ArchiveItemImpl extends ModeratedItemImpl {
  public*/ function ArchiveItemImpl$(path/*:String*/) {
    this.super$hR$o(path);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/archive/{type:[A-Za-z0-9-]+}/{id:[A-Za-z0-9-]+}"
        ]
      ]},
      constructor: ArchiveItemImpl$,
      super$hR$o: function() {
        com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl"]
    };
});
