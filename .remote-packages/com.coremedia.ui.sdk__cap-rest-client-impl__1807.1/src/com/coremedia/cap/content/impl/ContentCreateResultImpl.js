Ext.define("com.coremedia.cap.content.impl.ContentCreateResultImpl", function(ContentCreateResultImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentCreateResult;
import com.coremedia.ui.data.error.RemoteError;

public class ContentCreateResultImpl implements ContentCreateResult {

  public*/ function ContentCreateResultImpl$(createdContent/*:Content = null*/, error/*:RemoteError = null*/) {switch(arguments.length){case 0:createdContent=null;case 1:error=null;}
    this['createdContent'] = createdContent;
    this['error'] = error;
  }/*

  public native function get createdContent():Content;

  public native function get error():RemoteError;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.ContentCreateResult"],
      constructor: ContentCreateResultImpl$,
      requires: ["com.coremedia.cap.content.ContentCreateResult"]
    };
});
