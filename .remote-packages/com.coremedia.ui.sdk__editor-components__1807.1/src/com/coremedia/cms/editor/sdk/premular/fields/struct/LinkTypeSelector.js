Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.LinkTypeSelector", function(LinkTypeSelector) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector;
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;

public class LinkTypeSelector extends ContentTypeSelector {

  /**
   * Create a LinkTypeSelector.
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.cms.editor.sdk.premular.fields.struct.LinkTypeSelector
   * @see com.coremedia.cms.editor.sdk.config.linkTypeSelector
   * /
  public*/ function LinkTypeSelector$(config/*:ContentTypeSelector = null*/) {var this$=this;if(arguments.length<=0)config=null;
    var superConfig/*:ContentTypeSelector*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector,Ext.apply({}, config));
    AS3.setBindable(superConfig,"entries" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getAllContentTypeEntries());
    AS3.setBindable(superConfig,"contentTypeValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue()); // may not be null :-(
    superConfig.selectOnFocus = true;
    this.super$sXcv(superConfig);
    // immediately show the drop down when the field is focused.
    this.addListener("focus", function(e/*:**/)/*:void*/ {
      this$.expand();
    });
    // immediately end edit mode when the value changes
    this.addListener("select", function(e/*:**/)/*:void*/ {
      this$.getFocusEl().blur();
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
      constructor: LinkTypeSelector$,
      super$sXcv: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase"]
    };
});
