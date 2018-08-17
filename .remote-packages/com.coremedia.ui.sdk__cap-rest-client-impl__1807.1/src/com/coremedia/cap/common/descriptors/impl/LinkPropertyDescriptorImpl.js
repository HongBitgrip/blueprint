Ext.define("com.coremedia.cap.common.descriptors.impl.LinkPropertyDescriptorImpl", function(LinkPropertyDescriptorImpl) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.LinkPropertyDescriptor;
import com.coremedia.cap.content.ContentRepository;

import ext.Ext;

internal class LinkPropertyDescriptorImpl extends CapPropertyDescriptorImpl implements LinkPropertyDescriptor {
  public*/ function LinkPropertyDescriptorImpl$(config/*:Object*/) {
    this.super$TvJn(config);
    var linkType/*:CapType*/ =AS3.as( config.linkType,  com.coremedia.cap.common.CapType);
    if (!linkType) {
      var contentRepository/*:ContentRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
      if (AS3.is(config.linkType,  String)) {
        linkType = contentRepository.getContentType(config.linkType);
      }
      if (!linkType) {
        linkType = contentRepository.getContentContentType();
      }
    }
    this["linkType"] = linkType;
  }/*

  override internal*/ function toObject()/*:Object*/ {
    return Ext.apply(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.toObject.call(this), {
      linkType: this.linkType
    });
  }/*


  public native function get linkType():CapType;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl",
      mixins: ["com.coremedia.cap.common.descriptors.LinkPropertyDescriptor"],
      constructor: LinkPropertyDescriptorImpl$,
      super$TvJn: function() {
        com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.constructor.apply(this, arguments);
      },
      toObject: toObject,
      requires: [
        "Ext",
        "com.coremedia.cap.common.CapType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.LinkPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl"
      ]
    };
});
