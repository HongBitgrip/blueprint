Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialogBase", function(PreviewDateSelectorDialogBase) {/*package com.coremedia.blueprint.base.components.previewdate {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.panel.Panel;

/**
 * Base class of the preview date selection menu.
 * /
public class PreviewDateSelectorDialogBase extends StudioDialog {

  public var previewDateSelectorValidValueExpression:ValueExpression;

  private var previewPanel:PreviewPanel;

  public*/ function PreviewDateSelectorDialogBase$(config/*:PreviewDateSelectorDialog = null*/) {if(arguments.length<=0)config=null;
    this.super$pEeg(config);
    this.previewPanel$pEeg = AS3.getBindable(config,"previewPanel");
    this.previewDateSelectorValidValueExpression = config.previewDateSelectorValidValueExpression;
  }/*

  protected*/ function okPressed()/*:void*/ {
    this.reloadPreview$pEeg();
    this.hide();
  }/*

  private*/ function reloadPreview()/*:void*/ {
    window.setTimeout(function ()/*:void*/ {
      var premular/*:Panel*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  Ext.panel.Panel);
      if (premular) {
        var previewPanel/*:PreviewPanel*/ =AS3.as( premular.queryById('previewPanel'),  com.coremedia.cms.editor.sdk.preview.PreviewPanel);
        if (previewPanel) {
          previewPanel.reloadFrame();
        }
      }
    }, 300);
  }/*

  /**
   * Do not close, just hide the dialog.
   * /
  override public*/ function close()/*:void*/ {
    this.hide();
  }/*

  internal*/ function getPreviewDateSelectorValidValueExpression()/*:ValueExpression*/{
    if(!this.previewDateSelectorValidValueExpression){
      this.previewDateSelectorValidValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.previewDateSelectorValidValueExpression;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      previewDateSelectorValidValueExpression: null,
      previewPanel$pEeg: null,
      constructor: PreviewDateSelectorDialogBase$,
      super$pEeg: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      okPressed: okPressed,
      reloadPreview$pEeg: reloadPreview,
      close: close,
      getPreviewDateSelectorValidValueExpression: getPreviewDateSelectorValidValueExpression,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
