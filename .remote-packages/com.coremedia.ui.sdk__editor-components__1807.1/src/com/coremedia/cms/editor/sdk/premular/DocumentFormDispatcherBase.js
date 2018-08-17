Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase", function(DocumentFormDispatcherBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.ValueExpressionFactory;

[PublicApi]
public class DocumentFormDispatcherBase extends SwitchingContainer {

  /** @private * /
  public var contentType:String;

  public*/ function DocumentFormDispatcherBase$(config/*:DocumentFormDispatcher = null*/) {if(arguments.length<=0)config=null;
    if (!AS3.getBindable(config,"singleType")) {
      AS3.setBindable(config,"activeItemValueExpression" , AS3.getBindable(config,"bindTo").extendBy('type.name'));
    } else {
      //use fix content type
      this.contentType = (AS3.as(AS3.getBindable(config,"bindTo").getValue(),  com.coremedia.cap.content.Content)).getType().getName();
      AS3.setBindable(config,"activeItemValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create("contentType", this));
    }
    this.super$zYGP(config);
  }/*

  /**
   * The title of this dispatcher when used as a tab.
   * /
  public native function get title():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      metadata: {"": ["PublicApi"]},
      contentType: null,
      constructor: DocumentFormDispatcherBase$,
      super$zYGP: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
