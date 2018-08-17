Ext.define("com.coremedia.cap.content.results.impl.QueryResultImpl", function(QueryResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.content.results.QueryResult;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class QueryResultImpl extends OperationResultImpl implements QueryResult {
  public*/ function QueryResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, items/*:Array*/) {
    this.super$spLs(error, successful);
    this.items = items;
  }/*

  public static*/ function fromResponse$static(response/*:RemoteServiceMethodResponse*/)/*:QueryResultImpl*/ {
    var error/*:RemoteError*/ = response.success ? null : response.getError();
    var responseJSON/*:Object*/ = response.getResponseJSON();
    return new QueryResultImpl(error, response.success, responseJSON ? responseJSON.items : []);
  }/*

  public native function get items():Array;

  public native function set items(items:Array):void;
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.OperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.QueryResult"],
      constructor: QueryResultImpl$,
      super$spLs: function() {
        com.coremedia.cap.common.impl.OperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      statics: {fromResponse: fromResponse$static},
      requires: [
        "com.coremedia.cap.common.impl.OperationResultImpl",
        "com.coremedia.cap.content.results.QueryResult"
      ]
    };
});
