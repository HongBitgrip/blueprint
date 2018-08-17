Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.MarkupDiffComputation", function(MarkupDiffComputation) {/*package com.coremedia.cms.editor.sdk.premular.differencing {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;

internal class MarkupDiffComputation extends AbstractDiffComputation {
  private var property:String;

  public*/ function MarkupDiffComputation$(comp/*:Component*/, property/*:String*/, diffParametersValueExpression/*:ValueExpression*/) {
    // Remember property early, so that it can be used in the
    // gatherDependencies callback
    this.property$Ba9e = property;
    this.super$Ba9e(comp, diffParametersValueExpression);
  }/*

  override protected*/ function diff(start/*:ContentObject*/, end/*:ContentObject*/, callback/*:Function*/)/*:void*/ {
    if (start && end && start !== end) {
      var contentRepository/*:ContentRepositoryImpl*/ = AS3.cast(com.coremedia.cap.content.impl.ContentRepositoryImpl,com.coremedia.cap.common.SESSION.getConnection().getContentRepository());
      contentRepository.diffMarkup(start, end, this.property$Ba9e, callback);
    } else {
      callback(null);
    }
  }/*

  override protected*/ function gatherDependencies(contentObject/*:ContentObject*/)/*:void*/ {
    if (contentObject.getState().readable !== false) {
      var properties/*:ContentProperties*/ = contentObject.getProperties();
      if (properties) {
        properties.get(this.property$Ba9e);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation",
      property$Ba9e: null,
      constructor: MarkupDiffComputation$,
      super$Ba9e: function() {
        com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation.prototype.constructor.apply(this, arguments);
      },
      diff: diff,
      gatherDependencies: gatherDependencies,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation"
      ]
    };
});
