Ext.define("com.coremedia.cap.content.search.impl.SuggestionResultImpl", function(SuggestionResultImpl) {/* /**
 * Created by ${PRODUCT_NAME}.
 * User: fwienber
 * Date: 19.04.11
 * Time: 10:52
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.content.search.impl {
import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.cap.content.search.Suggestion;
import com.coremedia.cap.content.search.SuggestionResult;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="content/suggestions?{query:.+}")]
public class SuggestionResultImpl extends RemoteBeanImpl implements SuggestionResult {

  public*/ function SuggestionResultImpl$(path/*:String*/) {
    this.super$m2UG(path);
  }/*

  public*/ function getSuggestions()/*:Array*/ {
    return this.get(com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTIONS);
  }/*

  public*/ function getSuggestion(index/*:uint*/)/*:Suggestion*/ {
    return this.getSuggestions()[index];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.content.search.SuggestionResult"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/suggestions?{query:.+}"
        ]
      ]},
      constructor: SuggestionResultImpl$,
      super$m2UG: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getSuggestions: getSuggestions,
      getSuggestion: getSuggestion,
      requires: [
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.cap.content.search.SuggestionResult",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
