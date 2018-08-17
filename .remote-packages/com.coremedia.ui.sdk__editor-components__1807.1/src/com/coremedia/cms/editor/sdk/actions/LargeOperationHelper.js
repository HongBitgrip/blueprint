Ext.define("com.coremedia.cms.editor.sdk.actions.LargeOperationHelper", function(LargeOperationHelper) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil;
import com.coremedia.ui.util.ExecuteEventually;

public class LargeOperationHelper {

  private static*/ var DEFAULT_LARGE_OPERATION_THRESHOLD$static/*:Number*/ = 1000;/*

  private var toProcess:Array;
  private var successFn:Function;
  private var showConfirmationFn:Function;

  public*/ function LargeOperationHelper$(toProcess/*:Array*/, successFn/*:Function*/, showConfirmationFn/*:Function*/) {
    this.toProcess$I1Wb = toProcess;
    this.successFn$I1Wb = successFn;
    this.showConfirmationFn$I1Wb = showConfirmationFn;
  }/*

  public*/ function checkLargeOperation()/*:void*/ {var this$=this;
    var folder/*:Array*/ = [];
    var documentCounter/*:Number*/ = 0;

    this.toProcess$I1Wb.forEach(function(content/*:Content*/)/*:void*/ {
      if (content.isFolder()) {
        folder.push(content);
      } else {
        documentCounter++;
      }
    });

    var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
      if (documentCounter > getLargeOperationWarningThreshold$static()) {
        this$.showConfirmationFn$I1Wb(documentCounter);
      } else {
        this$.successFn$I1Wb();
      }
    });

    folder.forEach(function (content/*:Content*/)/*:void*/ {
      execEvt.delay();
      var searchResult/*:SearchResult*/ = performSearchRequest$static(content);
      searchResult.load(function (result/*:SearchResult*/)/*:void*/ {
        documentCounter = documentCounter + result.getTotal();
        execEvt.proceed();
      });
    });

    execEvt.proceed();
  }/*

  private static*/ function performSearchRequest$static(content/*:Content*/)/*:SearchResult*/ {
    var searchService/*:SearchService*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository().getSearchService();
    var params/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
    params.folder = content.getUriPath();
    params.includeSubfolders = true;

    var searchResult/*:SearchResult*/ = searchService.search(params);
    return searchResult;
  }/*

  private static*/ function getLargeOperationWarningThreshold$static()/*:Number*/ {
    var threshold/*:Number*/ = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration("Content Creation", "largeOperationWarningThreshold");
    if (!threshold) {
      threshold = DEFAULT_LARGE_OPERATION_THRESHOLD$static;
    }
    return threshold;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      toProcess$I1Wb: null,
      successFn$I1Wb: null,
      showConfirmationFn$I1Wb: null,
      constructor: LargeOperationHelper$,
      checkLargeOperation: checkLargeOperation,
      requires: [
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil"
      ]
    };
});
