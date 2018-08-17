Ext.define("com.coremedia.cap.content.impl.ContentPropertiesImpl", function(ContentPropertiesImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.ui.data.impl.SubBean;

public class ContentPropertiesImpl extends SubBean implements ContentProperties {

  public*/ function ContentPropertiesImpl$(content/*:ContentObjectImpl*/, basePath/*:String*/) {
    this.super$c_x5(content, basePath);
  }/*
  
  public*/ function getContentObject()/*:ContentObject*/ {
    return AS3.as( this.getParentBean(),  com.coremedia.cap.content.ContentObject);
  }/*
   
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.SubBean",
      mixins: ["com.coremedia.cap.content.ContentProperties"],
      constructor: ContentPropertiesImpl$,
      super$c_x5: function() {
        com.coremedia.ui.data.impl.SubBean.prototype.constructor.apply(this, arguments);
      },
      getContentObject: getContentObject,
      requires: [
        "com.coremedia.cap.content.ContentObject",
        "com.coremedia.cap.content.ContentProperties",
        "com.coremedia.ui.data.impl.SubBean"
      ]
    };
});
