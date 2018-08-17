Ext.define("com.coremedia.cap.content.impl.ContentMethod", function(ContentMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

/**
 * A REST method of a content.
 * /
public class ContentMethod extends RemoteServiceMethod {
  protected var content:Content;
  protected var params:Object;
  protected var isModifyingVersions:Boolean;
  protected var isModifyingAllVersions:Boolean;
  protected var callback:Function;

  /**
   * Create an action that executes a REST action on a content.
   * /
  public*/ function ContentMethod$(content/*:Content*/, params/*:Object*/,
                                actionName/*:String*/, urlSuffix/*:String*/,
                                isModifyingVersions/*:Boolean*/, isModifyingAllVersions/*:Boolean*/, callback/*:Function*/) {
    this.super$F1_p(computeUrl$static(content, urlSuffix), actionName);
    this.content = content;
    this.params = params;
    this.isModifyingVersions = isModifyingVersions;
    this.isModifyingAllVersions = isModifyingAllVersions;
    this.callback = callback;
  }/*

  private static*/ function computeUrl$static(content/*:Content*/, urlSuffix/*:String*/)/*:String*/ {
    var url/*:String*/ = content.getUriPath();
    if (urlSuffix) {
      if (urlSuffix.substr(0, 1) !== "/") {
        url += "/";
      }
      url += urlSuffix;
    }
    return url;
  }/*

  public*/ function execute()/*:void*/ {
    // Flush potentially pending changes in the bean. Then execute the method.
    this.content.flush(AS3.bind(this,"doExecute"));
  }/*

  public*/ function doExecute()/*:void*/ {
    this.request(this.params,AS3.bind( this,"successOrFailure$F1_p"));
  }/*

  private*/ function successOrFailure(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
    var result/*:Object*/ = this.makeResult(response);
    this.invalidateContentFromResult(result);
    if (this.callback) {
      this.callback(result);
    }
  }/*

  protected*/ function invalidateContentFromResult(result/*:Object*/)/*:void*/ {
    this.content.invalidate();
    this.invalidateVersionHistory(this.content);
  }/*

  protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(response);
  }/*

  protected*/ function invalidateVersionHistory(bean/*:RemoteBean*/)/*:void*/ {var this$=this;
    var versionHistory/*:VersionHistory*/ =AS3.as( bean.get('versionHistory'),  com.coremedia.cap.content.VersionHistory);
    if (versionHistory) {
      versionHistory.invalidate(function()/*:void*/ {
        var items/*:Vector.<Version>*/ = versionHistory.getItems();
        if (items && items.length > 0) {
          if (this$.isModifyingAllVersions) {
            for (var i/*:int*/ = 0; i<items.length;i++) {
              (AS3.as(items[i],  com.coremedia.cap.content.Version)).invalidate();
            }
          } else {
            // The last version might have become approved or published.
            if (items.length >= 1) {
              (AS3.as(items[items.length - 1],  com.coremedia.cap.content.Version)).invalidate();
            }
            // The next to last version might have received a new successor.
            if (items.length >= 2) {
              (AS3.as(items[items.length - 2],  com.coremedia.cap.content.Version)).invalidate();
            }
          }
        }
      });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteServiceMethod",
      content: null,
      params: null,
      isModifyingVersions: false,
      isModifyingAllVersions: false,
      callback: null,
      constructor: ContentMethod$,
      super$F1_p: function() {
        com.coremedia.ui.data.impl.RemoteServiceMethod.prototype.constructor.apply(this, arguments);
      },
      execute: execute,
      doExecute: doExecute,
      successOrFailure$F1_p: successOrFailure,
      invalidateContentFromResult: invalidateContentFromResult,
      makeResult: makeResult,
      invalidateVersionHistory: invalidateVersionHistory,
      requires: [
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.content.VersionHistory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cap.common.impl.OperationResultImpl"]
    };
});
