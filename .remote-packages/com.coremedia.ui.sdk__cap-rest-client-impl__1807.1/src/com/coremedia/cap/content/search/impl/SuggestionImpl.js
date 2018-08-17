Ext.define("com.coremedia.cap.content.search.impl.SuggestionImpl", function(SuggestionImpl) {/* /**
 * Created by ${PRODUCT_NAME}.
 * User: fwienber
 * Date: 19.04.11
 * Time: 10:30
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.content.search.impl {
import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.cap.content.search.Suggestion;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RemoteClass(alias="com.coremedia.rest.cap.content.represent.SuggestionRepresentation")]
public class SuggestionImpl extends RemoteBeanImpl implements Suggestion {

  public*/ function SuggestionImpl$(uriPath/*:String*/) {
    this.super$piGJ(uriPath);
  }/*

  public*/ function getValue()/*:String*/ {
    return this.get(com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE);
  }/*

  public*/ function getCount()/*:uint*/ {
    return this.get(com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_COUNT);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.content.search.Suggestion"],
      metadata: {"": [
        "RemoteClass",
        [
          "alias",
          "com.coremedia.rest.cap.content.represent.SuggestionRepresentation"
        ]
      ]},
      constructor: SuggestionImpl$,
      super$piGJ: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getValue: getValue,
      getCount: getCount,
      requires: [
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.cap.content.search.Suggestion",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
