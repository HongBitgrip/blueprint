Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase", function(BulkResultWindowBase) {/*package com.coremedia.cms.editor.sdk.bulkOperation {
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cms.editor.sdk.components.StudioDialog;

public class BulkResultWindowBase extends StudioDialog {

  /**
   * @param config the config object
   * /
  public*/ function BulkResultWindowBase$(config/*:BulkResultWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$hWq3(config);
  }/*

  public*/ function computeHeight(bulkResultItems/*: Array*/)/*:uint*/ {
    var codes/*:Object*/ = {};
    var codeCount/*:uint*/ = 0;
    bulkResultItems.forEach(function(item/*:BulkOperationResultItem*/)/*:void*/ {
      if (!codes[item.resultCode]) {
        codeCount++;
        codes[item.resultCode]= true;
      }
    });
    return Math.min(400, Math.max(200, 75 + 22 * bulkResultItems.length + 83 * codeCount));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      constructor: BulkResultWindowBase$,
      super$hWq3: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      computeHeight: computeHeight,
      requires: ["com.coremedia.cms.editor.sdk.components.StudioDialog"]
    };
});
