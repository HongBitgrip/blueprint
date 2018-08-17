Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase", function(ShowMetadataIconDisplayFieldActionBase) {/*package com.coremedia.cms.editor.sdk.actions.metadata {
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistry;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.tip.ToolTip;
import ext.util.Format;

public class ShowMetadataIconDisplayFieldActionBase extends MetadataBeanAction {

  private var itemMenuTitleToolTip:ToolTip;

  public*/ function ShowMetadataIconDisplayFieldActionBase$(config/*:ShowMetadataIconDisplayFieldAction = null*/) {if(arguments.length<=0)config=null;
    this.super$kolu(config);

    var summaryVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getSummaryInfo$kolu"));
    summaryVE.addChangeListener(AS3.bind(this,"updateView$kolu"));
  }/*

  override protected*/ function isDisabledFor(metadata/*:MetadataTreeNode*/)/*:Boolean*/ {
    return !this.getBeanForMetadata(metadata);
  }/*

  public*/ function updateToolTip(text/*:String*/, ellipsisText/*:String*/)/*:void*/ {
    if (this.itemMenuTitleToolTip$kolu && this.itemMenuTitleToolTip$kolu.html !== text) {
      this.itemMenuTitleToolTip$kolu.destroy();
      this.itemMenuTitleToolTip$kolu = undefined;
    }
    if (!this.itemMenuTitleToolTip$kolu && text !== ellipsisText) {
      // set tooltip for title
      var itemMenuTitle/*:Object*/, toolTipConfig/*:ToolTip*/;
      itemMenuTitle = this['items'][0].getEl();
      toolTipConfig = AS3.cast(Ext.tip.ToolTip,{});
      toolTipConfig.trackMouse = true;
      AS3.setBindable(toolTipConfig,"html" , text);
      this.itemMenuTitleToolTip$kolu = new Ext.tip.ToolTip(toolTipConfig);
      this.itemMenuTitleToolTip$kolu.setTarget(itemMenuTitle);
    }
  }/*

  private*/ function getSummaryInfo(metadata/*:MetadataTreeNode = undefined*/)/*:Object*/ {
    var firstBeanParentNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(metadata || this.getMetadata());
    var result/*:Object*/ = undefined;
    if (firstBeanParentNode) {
      var rendererRegistry/*:MetadataNodeRendererRegistry*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getMetadataNodeRendererRegistry();
      result = {
        text: rendererRegistry.renderText(firstBeanParentNode),
        icon: rendererRegistry.renderIconCls(firstBeanParentNode)
      };
    }
    return result;
  }/*

  private*/ function updateView(summaryInfoVE/*:ValueExpression*/)/*:void*/ {
    var summaryInfo/*:Object*/ = summaryInfoVE.getValue();
    if (summaryInfo) {
      var text/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(summaryInfo.text);
      var ellipsisText/*:String*/ = Ext.util.Format.ellipsis(text, 30, true);
      this.setText(ellipsisText);
      this.setIconCls(summaryInfo.icon);
      this.show();
      this.updateToolTip(text, ellipsisText);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction",
      itemMenuTitleToolTip$kolu: null,
      constructor: ShowMetadataIconDisplayFieldActionBase$,
      super$kolu: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      updateToolTip: updateToolTip,
      getSummaryInfo$kolu: getSummaryInfo,
      updateView$kolu: updateView,
      requires: [
        "Ext.tip.ToolTip",
        "Ext.util.Format",
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper"
      ]
    };
});
