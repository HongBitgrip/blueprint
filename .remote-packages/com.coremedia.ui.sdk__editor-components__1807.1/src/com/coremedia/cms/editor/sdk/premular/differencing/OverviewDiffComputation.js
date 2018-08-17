Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.OverviewDiffComputation", function(OverviewDiffComputation) {/*package com.coremedia.cms.editor.sdk.premular.differencing {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

internal class OverviewDiffComputation extends AbstractDiffComputation {
  private var thePremular:PremularBase;

  public*/ function OverviewDiffComputation$(thePremular/*:PremularBase*/, diffParametersValueExpression/*:ValueExpression*/) {
    this.super$Rwjt(thePremular, diffParametersValueExpression);

    this.thePremular$Rwjt = thePremular;
  }/*

  override protected*/ function diff(start/*:ContentObject*/, end/*:ContentObject*/, callback/*:Function*/)/*:void*/ {
    if (start && end && start !== end) {
      var contentRepository/*:ContentRepositoryImpl*/ = AS3.cast(com.coremedia.cap.content.impl.ContentRepositoryImpl,com.coremedia.cap.common.SESSION.getConnection().getContentRepository());
      contentRepository.diff(start, end, callback);
    } else {
      callback({});
    }
  }/*

  override protected*/ function gatherDependencies(contentObject/*:ContentObject*/)/*:void*/ {
    if (AS3.is(contentObject,  com.coremedia.cap.content.Content)) {
      // For contents it is possible to rely on the etag, making sure that
      // the dependency is only fired after the server has processed the write.
      AS3.cast(com.coremedia.ui.data.impl.RemoteBeanImpl,contentObject).dependOnEtag();
    } else {
      // Versions do not provide etags, but they change rarely, so that it is
      // acceptable to depend on their entire value.
      AS3.cast(com.coremedia.ui.data.impl.BeanImpl,contentObject).dependencyOnValue();
    }
  }/*

  override protected*/ function isComponentVisible()/*:Boolean*/ {
    return this.thePremular$Rwjt.isReadOnlyDocumentPanelVisible() && com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation.prototype.isComponentVisible.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation",
      thePremular$Rwjt: null,
      constructor: OverviewDiffComputation$,
      super$Rwjt: function() {
        com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation.prototype.constructor.apply(this, arguments);
      },
      diff: diff,
      gatherDependencies: gatherDependencies,
      isComponentVisible: isComponentVisible,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
