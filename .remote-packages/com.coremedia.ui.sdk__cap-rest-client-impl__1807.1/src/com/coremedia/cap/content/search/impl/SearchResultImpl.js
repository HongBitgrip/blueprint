Ext.define("com.coremedia.cap.content.search.impl.SearchResultImpl", function(SearchResultImpl) {/* /**
 * Created by ${PRODUCT_NAME}.
 * User: fwienber
 * Date: 19.04.11
 * Time: 10:04
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.content.search.impl {
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="content/search?{query:.+}")]
public class SearchResultImpl extends RemoteBeanImpl implements SearchResult {

  public*/ function SearchResultImpl$(uriPath/*:String*/) {
    this.super$joMq(uriPath);
  }/*

  public*/ function getTotal()/*:uint*/ {
    return this.get(com.coremedia.cap.content.search.SearchParameters.TOTAL);
  }/*

  public*/ function getHits()/*:Array*/ {
    return this.get(com.coremedia.cap.content.search.SearchParameters.HITS);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.content.search.SearchResult"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/search?{query:.+}"
        ]
      ]},
      constructor: SearchResultImpl$,
      super$joMq: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getTotal: getTotal,
      getHits: getHits,
      requires: [
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cap.content.search.SearchResult",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
