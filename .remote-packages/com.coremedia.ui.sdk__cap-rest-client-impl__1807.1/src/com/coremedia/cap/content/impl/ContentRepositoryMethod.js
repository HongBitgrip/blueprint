Ext.define("com.coremedia.cap.content.impl.ContentRepositoryMethod", function(ContentRepositoryMethod) {/*package com.coremedia.cap.content.impl {
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

/**
 * A REST method of a content.
 * /
public class ContentRepositoryMethod extends RemoteServiceMethod {
  protected var contentRepository:ContentRepository;
  private var isModifyingVersions:Boolean;
  private var isModifyingAllVersions:Boolean;
  protected var params:Object;
  protected var callback:Function;

  /**
   * Create an action that executes a REST action on a content.
   * /
  public*/ function ContentRepositoryMethod$(contentRepository/*:ContentRepository*/, uriProperty/*:String*/,
                                          isModifyingVersions/*:Boolean*/, isModifyingAllVersions/*:Boolean*/,
                                          params/*:Object*/, callback/*:Function*/) {
    var url/*:String*/ = AS3.cast(com.coremedia.ui.data.RemoteBean,contentRepository).get(uriProperty);
    this.super$DUaT(url, "POST", true);
    this.isModifyingVersions$DUaT = isModifyingVersions;
    this.isModifyingAllVersions$DUaT = isModifyingAllVersions;
    this.params = params;
    this.callback = callback;
  }/*

  public*/ function doExecute()/*:void*/ {
    this.request(this.params,AS3.bind( this,"successOrFailure$DUaT"));
  }/*

  private*/ function successOrFailure(response/*:RemoteServiceMethodResponse*/)/*:void*/ {var this$=this;
    var result/*:Object*/ = this.makeResult(response);
    var executeEventually/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(this.callback ?
            function()/*:void*/ {this$.callback(result);} :
            null);
    this.invalidate(result, executeEventually);
    executeEventually.proceed();
  }/*

  protected*/ function invalidate(result/*:Object*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    // By default, do nothing.
  }/*

  protected*/ function invalidateContent(content/*:Content*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    content.invalidate(executeEventually.delay());
    if (this.isModifyingVersions$DUaT) {
      this.invalidateVersionHistory(content, executeEventually);
    }
  }/*

  protected*/ function invalidateVersionHistory(bean/*:Content*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {var this$=this;
    var versionHistory/*:VersionHistory*/ =AS3.as( bean.get('versionHistory'),  com.coremedia.cap.content.VersionHistory);
    if (versionHistory) {
      executeEventually.delay();

      versionHistory.invalidate(function()/*:void*/ {
        var items/*:Vector.<Version>*/ = versionHistory.getItems();
        if (items && items.length > 0) {
          if (this$.isModifyingAllVersions$DUaT) {
            for (var i/*:int*/ = 0; i<items.length;i++) {
              (AS3.as(items[i],  com.coremedia.cap.content.Version)).invalidate(executeEventually.delay());
            }
          } else {
            // The last version might have become approved or published.
            if (items.length >= 1) {
              (AS3.as(items[items.length - 1],  com.coremedia.cap.content.Version)).invalidate(executeEventually.delay());
            }
            // The next to last version might have received a new successor.
            if (items.length >= 2) {
              (AS3.as(items[items.length - 2],  com.coremedia.cap.content.Version)).invalidate(executeEventually.delay());
            }
          }
        }

        executeEventually.proceed();
      });
    }
  }/*

  protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteServiceMethod",
      contentRepository: null,
      isModifyingVersions$DUaT: false,
      isModifyingAllVersions$DUaT: false,
      params: null,
      callback: null,
      constructor: ContentRepositoryMethod$,
      super$DUaT: function() {
        com.coremedia.ui.data.impl.RemoteServiceMethod.prototype.constructor.apply(this, arguments);
      },
      doExecute: doExecute,
      successOrFailure$DUaT: successOrFailure,
      invalidate: invalidate,
      invalidateContent: invalidateContent,
      invalidateVersionHistory: invalidateVersionHistory,
      makeResult: makeResult,
      requires: [
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.content.VersionHistory",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: ["com.coremedia.cap.common.impl.OperationResultImpl"]
    };
});
