Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewURIReloader", function(PreviewURIReloader) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.logging.Logger;

import ext.Ext;
import ext.JSON;

/**
 * Instances of this class provide a bean holding additional parameters
 * appended to the preview URL of the given preview panel.
 * Changes of the bean trigger reload of the preview when visible.
 * /
internal class PreviewURIReloader {

  private var _model:Bean;

  public*/ function PreviewURIReloader$(previewPanel/*:PreviewPanelBase*/){var this$=this;
    this._model$T6_g = new com.coremedia.ui.data.impl.BeanImpl();
    this._model$T6_g.addValueChangeListener(AS3.bind(previewPanel,"reloadFrameWhenVisible"));
    previewPanel.registerTransformer(AS3.bind(this,"urlParameterBeanUrlTransformer$T6_g"));
    previewPanel.on('destroy',function()/*:void*/{
      this$._model$T6_g.removeValueChangeListener(AS3.bind(previewPanel,"reloadFrameWhenVisible"));
    });
  }/*

  /**
   * Model bean for storing preview URI parameters
   * /
  public*/ function getModel()/*:Bean*/ {
    return this._model$T6_g;
  }/*

  /**
   * Implementation of the preview URL transformer appending the model bean as parameters to the preview URI
   * @param uri
   * @param callback
   * /
  private*/ function urlParameterBeanUrlTransformer(uri/*:PreviewURI*/, callback/*:Function*/)/*:void*/{
    var object/*:Object*/ = this._model$T6_g.toObject();
    com.coremedia.ui.logging.Logger.info("PreviewURIReloader: applying " + Ext.JSON.encode(object) + " to URI parameters");
    Ext.apply(uri.getParameters(),object);
    callback();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      _model$T6_g: null,
      constructor: PreviewURIReloader$,
      getModel: getModel,
      urlParameterBeanUrlTransformer$T6_g: urlParameterBeanUrlTransformer,
      requires: [
        "Ext",
        "Ext.JSON",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
